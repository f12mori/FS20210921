package com.example.domains.core;

import java.beans.Transient;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;

import com.fasterxml.jackson.annotation.JsonIgnore;

public abstract class EntityBase<E> {

	private Validator validator = Validation.buildDefaultValidatorFactory().getValidator();

	@Transient
	@JsonIgnore
	public Set<ConstraintViolation<E>> getError() {
		return validator.validate((E) this);
	}
	@Transient
	@JsonIgnore
	public boolean isValid() {
		return getError().size() == 0;
	}
	@Transient
	@JsonIgnore
	public boolean isInValid() {
		return getError().size() == 0;
	}
}
