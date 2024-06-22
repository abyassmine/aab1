import http from "./common";

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return http.get("/files");
  }

  deleteFile(filename) {
    return http.delete(`/files/${filename}`); // Assuming the endpoint is /files/:filename for deleting a file
  }
}

export default new UploadFilesService();
