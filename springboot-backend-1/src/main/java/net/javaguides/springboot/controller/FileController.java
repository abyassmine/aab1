package net.javaguides.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import net.javaguides.springboot.service.UploadDownloadService;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class FileController {

    private static final String UPLOAD_DIR = "/Users/abirh/Desktop/files/";

    @Autowired
    UploadDownloadService service;

    @PostMapping("/upload")
    public ResponseEntity<List<String>> fileUpload(@RequestParam("file") MultipartFile file) {
        try {
            List<String> uploadedFiles = service.uploadFile(file);
            return ResponseEntity.ok(uploadedFiles);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/files/{filename:.+}")
    public ResponseEntity<Resource> getFile(@PathVariable String filename) {
        try {
            Path filePath = Paths.get(UPLOAD_DIR).resolve(filename).normalize();
            Resource resource = new UrlResource(filePath.toUri());

            if (resource.exists() && resource.isReadable()) {
                return ResponseEntity.ok().body(resource);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping(path = "/download/{name}")
    public ResponseEntity<Resource> download(@PathVariable("name") String name) throws IOException {
        File file = new File(UPLOAD_DIR + name);
        Path path = Paths.get(file.getAbsolutePath());
        ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(path));

        return ResponseEntity.ok().headers(this.headers(name)).contentLength(file.length())
                .contentType(MediaType.parseMediaType("application/octet-stream")).body(resource);
    }

    @GetMapping("/files")
    public ResponseEntity<List<String>> getListOfFiles() throws Exception {
        return new ResponseEntity<>(service.getListofFiles(), HttpStatus.OK);
    }

    @DeleteMapping("/files/{filename:.+}")
    public ResponseEntity<Void> deleteFile(@PathVariable String filename) {
        try {
            service.deleteFile(filename);
            return ResponseEntity.ok().build();
        } catch (Exception ex) {
            return ResponseEntity.notFound().build();
        }
    }

    private HttpHeaders headers(String name) {
        HttpHeaders header = new HttpHeaders();
        header.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + name);
        header.add("Cache-Control", "no-cache, no-store, must-revalidate");
        header.add("Pragma", "no-cache");
        header.add("Expires", "0");
        return header;
    }
}
