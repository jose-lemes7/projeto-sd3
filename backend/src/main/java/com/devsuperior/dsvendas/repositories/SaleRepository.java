package com.devsuperior.dsvendas.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsvendas.dto.SaleSuccessDTO;
import com.devsuperior.dsvendas.dto.SaleSumDTO;
import com.devsuperior.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

	@Query(
		value = """
			select s
			from Sale s
			left join fetch s.seller
			""", 
		countQuery = """
			select count(s)
			from Sale s
			""")
	Page<Sale> findAllWithSeller(Pageable pageable);
	
	@Query(
		value = """
			SELECT new com.devsuperior.dsvendas.dto.SaleSumDTO(
				obj.seller, SUM(obj.amount) 
			)
			FROM Sale AS obj JOIN obj.seller
			GROUP BY obj.seller
			""")
	public List<SaleSumDTO> amountGroupBySeller();
	
	@Query(
			value = """
				SELECT new com.devsuperior.dsvendas.dto.SaleSuccessDTO(
					obj.seller, SUM(obj.visited), SUM(obj.deals) 
				)
				FROM Sale AS obj JOIN obj.seller
				GROUP BY obj.seller
				""")
	public List<SaleSuccessDTO> successGroupedBySeller();
}
