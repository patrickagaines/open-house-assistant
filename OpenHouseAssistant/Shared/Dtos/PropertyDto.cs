﻿namespace OpenHouseAssistant.Shared.Dtos;

#nullable disable

public class PropertyDto
{
	public int Id { get; set; }
	public string StreetAddress { get; set; }
	public string UnitNumber { get; set; }
	public string City { get; set; }
	public string State { get; set; }
	public string ZipCode { get; set; }
}

