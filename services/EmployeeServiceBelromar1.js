import axios from 'axios';

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8085/api/v1/employees20';



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
class EmployeeServiceAnzar2 {
  getAllEmployees() {
    return axios.get(EMPLOYEE_BASE_REST_API_URL);
  }

  createEmployee(employee20) {
    return axios.post(EMPLOYEE_BASE_REST_API_URL, employee20);
  }

  getEmployeeById(employeeId) {
    return axios.get(`${EMPLOYEE_BASE_REST_API_URL}/${employeeId}`);
  }

  
    updateEmployee(employee20) {
      const employeeId = localStorage.getItem('employeeId');
      return axios.put(`${EMPLOYEE_BASE_REST_API_URL}/${employeeId}`, employee20);
    }
    
  
    deleteEmployee(employeeId) {
      return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }
  }
  
  export default new EmployeeServiceAnzar2();

export function insertEmployee(data) {
  let employees20 = getAllEmployees();
  data['id'] = generateEmployeeId();
  employees20.push(data);
  localStorage.setItem(EMPLOYEE_BASE_REST_API_URL.employees20, JSON.stringify(employees20));
}

export function updateEmployee(data) {
  let employees20 = getAllEmployees();
  let recordIndex = employees20.findIndex((x) => x.id === data.id);
  employees20[recordIndex] = { ...data };
  localStorage.setItem(EMPLOYEE_BASE_REST_API_URL.employees20, JSON.stringify(employees20));
}

export function deleteEmployee(id) {
  let employees20 = getAllEmployees();
  employees20 = employees20.filter((x) => x.id !== id);
  localStorage.setItem(EMPLOYEE_BASE_REST_API_URL.employees20, JSON.stringify(employees20));
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
  if (localStorage.getItem(EMPLOYEE_BASE_REST_API_URL.employees20) == null) {
    localStorage.setItem(EMPLOYEE_BASE_REST_API_URL.employees20, JSON.stringify([]));
  }
  let employees20 = JSON.parse(localStorage.getItem(EMPLOYEE_BASE_REST_API_URL.employees20));
  // map departmentID to department title
  let departments = getDepartmentCollection();
  let etats = getEtatCollection();
  employees20 = employees20.map((x) => ({
    ...x,
    department: departments.find((d) => d.id === x.departmentId)?.title,
    etat: etats.find((e) => e.id === x.etat)?.title
  }));
  return employees20;
}


