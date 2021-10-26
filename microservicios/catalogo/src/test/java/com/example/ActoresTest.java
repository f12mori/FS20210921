package com.example;

import static org.mockito.Mockito.when;

import java.util.List;

import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.example.domains.contracts.services.ActorService;
import com.example.domains.entities.Actor;
import com.example.infraestructure.repositories.ActorRepository;

import lombok.experimental.var;

public class ActoresTest {

	public ActoresTest() {
		// TODO Auto-generated constructor stub
	}

	
	
	@Nested
	class ServicioDominio{
		
		@MockBean
		ActorRepository dao;
		@Autowired
		ActorService srv;
		@Test
		public void getAll() {
			when(dao.findAll()).thenReturn(List.of(new Actor(1, "perico","pelo")));
		}
	}
	
}
