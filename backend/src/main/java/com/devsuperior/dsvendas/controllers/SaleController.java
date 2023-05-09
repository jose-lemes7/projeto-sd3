package com.devsuperior.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.dto.SaleSuccessDTO;
import com.devsuperior.dsvendas.dto.SaleSumDTO;
import com.devsuperior.dsvendas.services.SaleService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/sales")
public class SaleController {

	@Autowired
	private SaleService service;
	
//	@GetMapping(path = "/all")
//	public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable) {
//		return ResponseEntity.ok(service.findAll(pageable));
//	}
	
	@GetMapping//(path = "/allWithSeller")
	public ResponseEntity<Page<SaleDTO>> findAllWithSeller(Pageable pageable) {
		return ResponseEntity.ok(service.findAllWithSeller(pageable));
	}
	
	@GetMapping(value = "/amount-by-seller")
	public ResponseEntity<List<SaleSumDTO>> amountGroupBySeller() {
		List<SaleSumDTO> list = service.amountGroupBySeller();
		return ResponseEntity.ok(list);
	}
	
	@GetMapping(value = "/success-by-seller")
	public ResponseEntity<List<SaleSuccessDTO>> successGroupBySeller() {
		List<SaleSuccessDTO> list = service.successGroupBySeller();
		return ResponseEntity.ok(list);
	}
	
}
