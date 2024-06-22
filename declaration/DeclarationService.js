import axios from 'axios'

const DECLARATION_BASE_REST_API_URL = 'http://localhost:8089/api/v1/declaration';

class EmployeeService{

    getAllEmployees(){
        return axios.get(DECLARATION_BASE_REST_API_URL)
    }

    createEmployee(declaration){
        return axios.post(DECLARATION_BASE_REST_API_URL, declaration)
    }
    createDeclaration(formData) {
        return axios.post(DECLARATION_BASE_REST_API_URL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Set content type for file upload
          },
        });
      }
    
      getFileById(fileId) {
        return axios.get(`${DECLARATION_BASE_REST_API_URL}/files/${fileId}`);
      }
    getEmployeeById(employeeId){
        return axios.get(DECLARATION_BASE_REST_API_URL + '/' + employeeId);
    }

    updateEmployee(employeeId, declaration){
        return axios.put(DECLARATION_BASE_REST_API_URL + '/' +employeeId, declaration);
    }

    deleteEmployee(employeeId){
        return axios.delete(DECLARATION_BASE_REST_API_URL+ '/' + employeeId);
    }
    
    upload(file, onUploadProgress) {
      let formData = new FormData();
  
      formData.append("file", file);
  
      return axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
      });
    }
  
    getFiles() {
      return axios.get("/files");
    }
  
    deleteFile(filename) {
      return axios.delete(`/files/${filename}`); // Assuming the endpoint is /files/:filename for deleting a file
    }
}

export default new EmployeeService();