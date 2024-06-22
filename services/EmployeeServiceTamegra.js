import axios from 'axios';

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8085/api/v1/employees4';



export const getEtatCollection = () => [
  { id: 'bon', title: 'bon' },
  { id: 'neuf', title: 'neuf' },
  { id: 'dégradé', title: 'dégradé' },
  { id: 'moyen', title: 'moyen' }
];

export const getDepartmentCollection = () => [
  { id: 'DG', title: 'DG' },
  { id: 'RDC Infra', title: 'RDC Infra' },
  { id: 'capitainerie', title: 'capitainerie' },
  { id: 'Elévateur a bateau', title: 'Elévateur a bateau' }
];
class EmployeeServiceTamegra {
  getAllEmployees() {
    return axios.get(EMPLOYEE_BASE_REST_API_URL);
  }

  createEmployee(employee4) {
    return axios.post(EMPLOYEE_BASE_REST_API_URL, employee4);
  }

  getEmployeeById(employeeId) {
    return axios.get(`${EMPLOYEE_BASE_REST_API_URL}/${employeeId}`);
  }

  
    updateEmployee(employee4) {
      const employeeId = localStorage.getItem('employeeId');
      return axios.put(`${EMPLOYEE_BASE_REST_API_URL}/${employeeId}`, employee4);
    }
    
  
    deleteEmployee(employeeId) {
      return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }
  }
  
  export default new EmployeeServiceTamegra();

export function insertEmployee(data) {
  let employees4 = getAllEmployees();
  data['id'] = generateEmployeeId();
  employees4.push(data);
  localStorage.setItem(EMPLOYEE_BASE_REST_API_URL.employees4, JSON.stringify(employees4));
}

export function updateEmployee(data) {
  let employees4 = getAllEmployees();
  let recordIndex = employees4.findIndex((x) => x.id === data.id);
  employees4[recordIndex] = { ...data };
  localStorage.setItem(EMPLOYEE_BASE_REST_API_URL.employees4, JSON.stringify(employees4));
}

export function deleteEmployee(id) {
  let employees4 = getAllEmployees();
  employees4 = employees4.filter((x) => x.id !== id);
  localStorage.setItem(EMPLOYEE_BASE_REST_API_URL.employees4, JSON.stringify(employees4));
}

export function generateEmployeeId() {
  if (localStorage.getItem(EMPLOYEE_BASE_REST_API_URL.employeeId) == null) {
    localStorage.setItem(EMPLOYEE_BASE_REST_API_URL.employeeId, '0');
  }
  var id = parseInt(localStorage.getItem(EMPLOYEE_BASE_REST_API_URL.employeeId));
  localStorage.setItem(EMPLOYEE_BASE_REST_API_URL.employeeId, (++id).toString());
  return id;
}


export function getAllEmployees() {
  if (localStorage.getItem(EMPLOYEE_BASE_REST_API_URL.employees4) == null) {
    localStorage.setItem(EMPLOYEE_BASE_REST_API_URL.employees4, JSON.stringify([]));
  }
  let employees4 = JSON.parse(localStorage.getItem(EMPLOYEE_BASE_REST_API_URL.employees4));
  // map departmentID to department title
  let departments = getDepartmentCollection();
  let etats = getEtatCollection();
  employees4 = employees4.map((x) => ({
    ...x,
    department: departments.find((d) => d.id === x.departmentId)?.title,
    etat: etats.find((e) => e.id === x.etat)?.title
  }));
  return employees4;
}


