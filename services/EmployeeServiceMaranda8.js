import axios from 'axios';

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8085/api/v1/employees14';



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
class EmployeeServiceMaranda8 {
  getAllEmployees() {
    return axios.get(EMPLOYEE_BASE_REST_API_URL);
  }

  createEmployee(employee14) {
    return axios.post(EMPLOYEE_BASE_REST_API_URL, employee14);
  }

  getEmployeeById(employeeId) {
    return axios.get(`${EMPLOYEE_BASE_REST_API_URL}/${employeeId}`);
  }

  
    updateEmployee(employee14) {
      const employeeId = localStorage.getItem('employeeId');
      return axios.put(`${EMPLOYEE_BASE_REST_API_URL}/${employeeId}`, employee14);
    }
    
  
    deleteEmployee(employeeId) {
      return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }
  }
  
  export default new EmployeeServiceMaranda8();

export function insertEmployee(data) {
  let employees14 = getAllEmployees();
  data['id'] = generateEmployeeId();
  employees14.push(data);
  localStorage.setItem(EMPLOYEE_BASE_REST_API_URL.employees14, JSON.stringify(employees14));
}

export function updateEmployee(data) {
  let employees14 = getAllEmployees();
  let recordIndex = employees14.findIndex((x) => x.id === data.id);
  employees14[recordIndex] = { ...data };
  localStorage.setItem(EMPLOYEE_BASE_REST_API_URL.employees14, JSON.stringify(employees14));
}

export function deleteEmployee(id) {
  let employees14 = getAllEmployees();
  employees14 = employees14.filter((x) => x.id !== id);
  localStorage.setItem(EMPLOYEE_BASE_REST_API_URL.employees14, JSON.stringify(employees14));
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
  if (localStorage.getItem(EMPLOYEE_BASE_REST_API_URL.employees14) == null) {
    localStorage.setItem(EMPLOYEE_BASE_REST_API_URL.employees14, JSON.stringify([]));
  }
  let employees14 = JSON.parse(localStorage.getItem(EMPLOYEE_BASE_REST_API_URL.employees14));
  // map departmentID to department title
  let departments = getDepartmentCollection();
  let etats = getEtatCollection();
  employees14 = employees14.map((x) => ({
    ...x,
    department: departments.find((d) => d.id === x.departmentId)?.title,
    etat: etats.find((e) => e.id === x.etat)?.title
  }));
  return employees14;
}


