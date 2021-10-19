package com.examples;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.ValueSource;

class DniTest {

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@ParameterizedTest
	@ValueSource(strings ={"45672645G","91255261R","15389397M",})
	void testDniValido(String a) {
		Dni nif1= new Dni();
		nif1.Dni(a);
		assertEquals(true, nif1.soloNumeros());
		assertEquals(true, nif1.validar());
	}

	@ParameterizedTest
	@ValueSource(strings ={"45672641G","91285261R"," ",})
	void testDniMalo(String a) {
		Dni nif1= new Dni();
		nif1.Dni(a);
		assertFalse(nif1.validar());
		//assertThrows(Exception.class,() -> nif1.validar());
	}

}
