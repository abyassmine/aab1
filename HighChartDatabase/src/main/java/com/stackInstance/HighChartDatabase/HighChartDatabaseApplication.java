package com.stackInstance.HighChartDatabase;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.beans.factory.annotation.Value;

@SpringBootApplication
public class HighChartDatabaseApplication implements WebMvcConfigurer {

    @Value("${react.app.origin}")
    private String origin;

    public static void main(String[] args) {
        SpringApplication.run(HighChartDatabaseApplication.class, args);
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(origin) // Replace with the URL of your React app
                .allowedMethods("GET", "POST", "OPTION")
                .allowedHeaders("*");
    }
    
}

	