package com.example.application.resource;

import java.net.URI;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;
import javax.validation.ConstraintViolation;
import javax.validation.Valid;
import javax.validation.Validator;
import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.domains.contracts.services.CategoryService;
import com.example.domains.entities.Category;
import com.example.exceptions.BadRequestException;
import com.example.exceptions.DuplicateKeyException;
import com.example.exceptions.InvalidDataException;
import com.example.exceptions.NotFoundException;

import org.springframework.http.HttpStatus;

@RestController
@RequestMapping(path = "/categoria")
public class CategoryResource {
	@Autowired
	CategoryService srv;
	
	@GetMapping
	public List<Category> getAll() {	
		return srv.getAll();
	}
	
	@GetMapping(path = "/{id}")
	public Optional<Category> getOne(@PathVariable int id) throws NotFoundException {
		
		return srv.getOne(id);
	}

	@PostMapping
	public ResponseEntity<Object> create(@Valid @RequestBody Category item)
			throws BadRequestException, DuplicateKeyException, InvalidDataException {
		if (item == null)
			throw new BadRequestException("Faltan los datos");
		var newItem = srv.add(item);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(newItem.getCategoryId()).toUri();
		return ResponseEntity.created(location).build();

	}
	
	@PutMapping("/{id}")
	// @ResponseStatus(HttpStatus.NO_CONTENT)
	public Category update(@PathVariable int id, @Valid @RequestBody Category item)
			throws BadRequestException, NotFoundException, InvalidDataException {
		if (item == null)
			throw new BadRequestException("Faltan los datos");
		if (id != item.getCategoryId())
			throw new BadRequestException("No coinciden los identificadores");
		return srv.modify(item);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable int id) {
		srv.deleteById(id);
	}
	

}
