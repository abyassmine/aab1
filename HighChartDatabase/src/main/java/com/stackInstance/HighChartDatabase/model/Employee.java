package com.stackInstance.HighChartDatabase.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Employee {

	@Id
	private int model;
	private String date;

	public int getModel() {
		return model;
	}

	public void setModel(int model) {
		this.model = model;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

}
