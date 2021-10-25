package com.example.application.resource;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.domains.contracts.services.ActorService;
import com.example.domains.entities.Actor;
import com.example.domains.entities.dtos.ActorDTO;
import com.example.exceptions.NotFoundException;

import antlr.collections.List;


@RestController
@RequestMapping(path = "/actores")
public class ActorResource {
	@Autowired
	ActorService srv;
	
	@GetMapping
	public List<ActorDTO> getall(){
		return srv.getByProjection(ActorDTO.class);
	}
	
	
	@GetMapping(path="/id")
	public ActorDTO getOne(@PathVariable int id) throws NotFoundException{
		var actor = srv.getOne(id);
		if(actor.isEmpty())
			throw new NotFoundException();
		else {
			return ActorDTO.from(ActorDTO.get());
		}
		
	}
	
	
	@PostMapping
	public ResponseEntity<Object> create(@Valid @RequestBody ActorDTO item){
	if(item== null)
		throw new BadRequestException("Faltan datos");
	
		
	}
}