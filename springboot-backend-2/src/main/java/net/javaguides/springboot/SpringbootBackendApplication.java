package net.javaguides.springboot;

import net.javaguides.springboot.controller.EmployeeControllerAlicante;
import net.javaguides.springboot.controller.EmployeeControllerToumzin;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;
import net.javaguides.springboot.repository.EmployeeRepositoryAnzar1;
import net.javaguides.springboot.repository.EmployeeRepositoryAnzar2;
import net.javaguides.springboot.repository.EmployeeRepositoryAzal;
import net.javaguides.springboot.repository.EmployeeRepositoryBelromar1;
import net.javaguides.springboot.repository.EmployeeRepositoryBelromar2;
import net.javaguides.springboot.repository.EmployeeRepositoryDades;
import net.javaguides.springboot.repository.EmployeeRepositoryGorgues;
import net.javaguides.springboot.repository.EmployeeRepositoryIgoudar;
import net.javaguides.springboot.repository.EmployeeRepositoryKelti;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda1;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda2;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda3;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda4;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda5;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda6;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda7;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda8;
import net.javaguides.springboot.repository.EmployeeRepositoryMlyelhabib;
import net.javaguides.springboot.repository.EmployeeRepositoryNayat;
import net.javaguides.springboot.repository.EmployeeRepositoryTafoukt;
import net.javaguides.springboot.repository.EmployeeRepositoryTamegra;
import net.javaguides.springboot.repository.EmployeeRepositoryTodra;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;
	private EmployeeRepositoryKelti employeeRepositoryKelti;
	private EmployeeRepositoryAnzar1 employeeRepositoryAnzar1;
    private EmployeeRepositoryTodra employeeRepositoryTodra;
	private EmployeeRepositoryTamegra employeeRepositoryTamegra;
	private EmployeeRepositoryIgoudar employeeRepositoryIgoudar;
	private EmployeeRepositoryMaranda3 employeeRepositoryMaranda3;
	private EmployeeRepositoryMaranda5 employeeRepositoryMaranda5;
    private EmployeeRepositoryMaranda6 employeeRepositoryMaranda6;
    private EmployeeControllerAlicante employeeControllerAlicante;
    private EmployeeControllerToumzin employeeControllerToumzin;
	private EmployeeRepositoryGorgues employeeRepositoryGorgues;
	private EmployeeRepositoryTafoukt employeeRepositoryTafoukt;
	private EmployeeRepositoryMlyelhabib employeeRepositoryMlyelhabib;
	private EmployeeRepositoryMaranda8 employeeRepositoryMaranda8;
	private EmployeeRepositoryMaranda1 employeeRepositoryMaranda1;
	private EmployeeRepositoryMaranda2 employeeRepositoryMaranda2;
	private EmployeeRepositoryMaranda4 employeeRepositoryMaranda4;
    private EmployeeRepositoryMaranda7 employeeRepositoryMaranda7;
	private EmployeeRepositoryAnzar2 employeeRepositoryAnzar2;
	private EmployeeRepositoryBelromar1 employeeRepositoryBelromar1;
	private EmployeeRepositoryBelromar2 employeeRepositoryBelromar2;
	private EmployeeRepositoryAzal employeeRepositoryAzal;
	private EmployeeRepositoryDades employeeRepositoryDades;
	private EmployeeRepositoryNayat employeeRepositoryNayat;
	@Override
	public void run(String... args) throws Exception {
//		Employee employee = new Employee();
//		employee.setFirstName("Ramesh");
//      employee.setNom("ss");
//      employee.setEntite("hh");
//      employee.setFonction("bb");
//		employee.setLastName("Fadatare");
//		employee.setEmailId("ramesh@gmail.com");
//		employeeRepository.save(employee);
//
//		Employee employee1 = new Employee();
//		employee1.setFirstName("John");
//       employee1.setNom("ssh");
//      employee1.setEntite("hhh");
//      employee1.setFonction("hjvbhv");
//		employee1.setLastName("Cena");
//		employee1.setEmailId("cena@gmail.com");
//		employeeRepository.save(employee1);
	}
}
