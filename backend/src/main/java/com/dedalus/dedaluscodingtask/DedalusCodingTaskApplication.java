package com.dedalus.dedaluscodingtask;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.bind.annotation.RestController;



@SpringBootApplication
@RestController
public class DedalusCodingTaskApplication {

	public static void main(String[] args) {
		SpringApplication.run(DedalusCodingTaskApplication.class, args);
	}

}
