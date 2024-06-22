import axios from 'axios';

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8085/api/v1/employees8';



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
class EmployeeServiceMaranda6 {
  getAllEmployees() {
    return axios.get(EMPLOYEE_BASE_REST_API_URL);
  }

  createEmployee(employee8) {
    return axios.post(EMPLOYEE_BASE_REST_API_URL, employee8);
  }

  getEmployeeById(employeeId) {
    return axios.get(`${EMPLOYEE_BASE_REST_API_URL}/${employeeId}`);
  }

  
    updateEmployee(employee8) {
      const employeeId = localStorage.getItem('employeeId');
      return axios.put(`${EMPLOYEE_BASE_REST_API_URL}/${employeeId}`, employee8);
    }
    
  
    deleteEmployee(employeeId) {
      return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }
  }
  
  export default new EmployeeServiceMaranda6();

export function insertEmployee(data) {
  let employees8 = getAllEmployees();
  data['id'] = generateEmployeeId();
  employees8.push(data);
  localStorage.setItem(EMPLOYEE_BASE_REST_API_URL.employees8, JSON.stringify(employees8));
}

export function updateEmployee(data) {
  let employees8 = getAllEmployees();
  let recordIndex = employees8.findIndex((x) => x.id === data.id);
  employees8[recordIndex] = { ...data };
  localStorage.setItem(EMPLOYEE_BASE_REST_API_URL.employees8, JSON.stringify(employees8));
}

export function deleteEmployee(id) {
  let employees8 = getAllEmployees();
  employees8 = employees8.filter((x) => x.id !== id);
  localStorage.setItem(EMPLOYEE_BASE_REST_API_URL.employees8, JSON.stringify(employees8));
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
  if (localStorage.getItem(EMPLOYEE_BASE_REST_API_URL.employees8) == null) {
    localStorage.setItem(EMPLOYEE_BASE_REST_API_URL.employees8, JSON.stringify([]));
  }
  let employees8 = JSON.parse(localStorage.getItem(EMPLOYEE_BASE_REST_API_URL.employees8));
  // map departmentID to department title
  let departments = getDepartmentCollection();
  let etats = getEtatCollection();
  employees8 = employees8.map((x) => ({
    ...x,
    department: departments.find((d) => d.id === x.departmentId)?.title,
    etat: etats.find((e) => e.id === x.etat)?.title
  }));
  return employees8;
}


