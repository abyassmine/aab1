import axios from 'axios';

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8085/api/v1/employees';



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
class EmployeeService {
  getAllEmployees() {
    return axios.get(EMPLOYEE_BASE_REST_API_URL);
  }

  createEmployee(employee) {
    return axios.post(EMPLOYEE_BASE_REST_API_URL, employee);
  }

  getEmployeeById(employeeId) {
    return axios.get(`${EMPLOYEE_BASE_REST_API_URL}/${employeeId}`);
  }

  
    updateEmployee(employee) {
      const employeeId = localStorage.getItem('employeeId');
      return axios.put(`${EMPLOYEE_BASE_REST_API_URL}/${employeeId}`, employee);
    }
    
  
    deleteEmployee(employeeId) {
      return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }
  }
  
  export default new EmployeeService();

export function insertEmployee(data) {
  let employees = getAllEmployees();
  data['id'] = generateEmployeeId();
  employees.push(data);
  localStorage.setItem(EMPLOYEE_BASE_REST_API_URL.employees, JSON.stringify(employees));
}

export function updateEmployee(data) {
  let employees = getAllEmployees();
  let recordIndex = employees.findIndex((x) => x.id === data.id);
  employees[recordIndex] = { ...data };
  localStorage.setItem(EMPLOYEE_BASE_REST_API_URL.employees, JSON.stringify(employees));
}

export function deleteEmployee(id) {
  let employees = getAllEmployees();
  employees = employees.filter((x) => x.id !== id);
  localStorage.setItem(EMPLOYEE_BASE_REST_API_URL.employees, JSON.stringify(employees));
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
  if (localStorage.getItem(EMPLOYEE_BASE_REST_API_URL.employees) == null) {
    localStorage.setItem(EMPLOYEE_BASE_REST_API_URL.employees, JSON.stringify([]));
  }
  let employees = JSON.parse(localStorage.getItem(EMPLOYEE_BASE_REST_API_URL.employees));
  // map departmentID to department title
  let departments = getDepartmentCollection();
  let etats = getEtatCollection();
  employees = employees.map((x) => ({
    ...x,
    department: departments.find((d) => d.id === x.departmentId)?.title,
    etat: etats.find((e) => e.id === x.etat)?.title
  }));
  return employees;
}


