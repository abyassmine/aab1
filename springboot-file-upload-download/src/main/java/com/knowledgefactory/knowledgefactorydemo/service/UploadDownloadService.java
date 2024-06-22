package com.knowledgefactory.knowledgefactorydemo.service;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.beans.factory.annotation.Value;

@Service
public class UploadDownloadService {

	@Value("${file.storage.path}")
    private String path;

	public List<String> uploadFile(MultipartFile file) throws Exception {

		// Save file on system
		if (!file.getOriginalFilename().isEmpty()) {
			BufferedOutputStream outputStream = new BufferedOutputStream(
					new FileOutputStream(new File(path, file.getOriginalFilename())));
			outputStream.write(file.getBytes());
			outputStream.flush();
			outputStream.close();
		} else {
			throw new Exception();
		}

		List<String> list = new ArrayList<String>();
		File files = new File(path);
		String[] fileList = ((File) files).list();
		for (String name : fileList) {
			list.add(name);
		}

		return list;

	}

	public List<String> getListofFiles() throws Exception {

		List<String> list = new ArrayList<String>();
		File files = new File(path);
		String[] fileList = files.list();
		for (String name : fileList) {
			list.add(name);
		}

		return list;

	}

	public void deleteFile(String filename) throws Exception {
        File file = new File(path + filename);
        if (!file.delete()) {
            throw new Exception("Failed to delete file: " + filename);
        }
    }
}
