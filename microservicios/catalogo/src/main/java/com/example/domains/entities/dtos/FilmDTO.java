package com.example.domains.entities.dtos;

import com.example.domains.entities.Film;
import com.example.domains.entities.Language;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FilmDTO {
	
	@JsonProperty("id")
	private int filmId;
	
	@JsonProperty("titulo")
	private String title;
	
	@JsonProperty("descripcion")
	private String description;
//	
//	@JsonProperty("id_Lenguaje")
//	private int filmId;
	

	public static Film from(FilmDTO source) {
		return new Film(source.getFilmId(), source.getTitle(), source.getDescription());
	}

	public static FilmDTO from(Film source) {
		return new FilmDTO(source.getFilmId(), source.getTitle(), source.getDescription());
	}
	
}
