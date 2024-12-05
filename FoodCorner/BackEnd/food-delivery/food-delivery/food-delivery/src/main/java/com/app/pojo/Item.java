package com.app.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name="item_table")
public class Item extends BaseEntity {
	
	@Column
	private String name;
	
	@Column
	private String description;
	
	@Column
	private double price;
	
	@Column
	private int quantity;
	
}
