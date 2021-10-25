package com.example.infraestructure.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.domains.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
	<T> List<T> findByCategoryIdIsNotNull(Class<T> type);
	<T> Iterable<T> findByCategoryIdIsNotNull(Sort sort, Class<T> type);
	<T> Page<T> findByCategoryIdIsNotNull(Pageable pageable, Class<T> type);
}
 