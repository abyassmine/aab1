package net.javaguides.springboot.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import net.javaguides.springboot.model.Declaration;
import net.javaguides.springboot.repository.EmployeeRepository;

@Service
public class DeclarationService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public void saveFile(MultipartFile file, String bn) throws IOException {
        try {
            Declaration declaration = new Declaration();
            declaration.setBn(bn);
            declaration.setFileData(file.getBytes());
            declaration.setFileName(file.getOriginalFilename());
            employeeRepository.save(declaration);
        } catch (Exception e) {
            // Log the exception
            e.printStackTrace();
            throw e; // Rethrow the exception for proper handling
        }
    }
}