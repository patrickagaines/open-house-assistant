using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using OpenHouseAssistant.Shared.Models;

namespace OpenHouseAssistant.Server.Controllers;

[Route("properties")]
[ApiController]
//[Authorize]
public class PropertiesController : ControllerBase
{
    // GET: /properties
    [HttpGet]
    public async Task<ActionResult<List<PropertyModel>>> Get()
    {
        throw new NotImplementedException();
    }

    // GET: /properties/{propertyId}
    [HttpGet("{propertyId}")]
    public async Task<ActionResult<PropertyModel>> Get(int id)
    {
        throw new NotImplementedException();
    }

    // POST: /properties
    [HttpPost]
    public async Task<ActionResult<PropertyModel>> Post([FromBody]
    string streetAddress, string unitNumber, string city, string state, string zipCode)
    {
        throw new NotImplementedException();
    }

    // PUT: /properties/{propertyId}
    [HttpPut("{propertyId}")]
    public async Task<ActionResult> Put(int propertyId, [FromBody]
    string streetAddress, string unitNumber, string city, string state, string zipCode)
    {
        throw new NotImplementedException();
    }

    // DELETE: /properties/{propertyId}
    [HttpDelete("{propertyId}")]
    public async Task<IActionResult> Delete(int propertyId)
    {
        throw new NotImplementedException();
    }
}
