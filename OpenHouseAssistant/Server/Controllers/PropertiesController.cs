using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using OpenHouseAssistant.Shared.Dtos;
using OpenHouseAssistant.Library.DataAccess;

namespace OpenHouseAssistant.Server.Controllers;

[Route("properties")]
[ApiController]
[Authorize]
public class PropertiesController : ControllerBase
{
    private readonly IPropertyData _data;

    public PropertiesController(IPropertyData data)
    {
        _data = data;
    }

    private string GetUserId()
    {
        string output = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)!.Value;
        return output;
    }

    // GET: /properties
    [HttpGet]
    public async Task<ActionResult<List<PropertyDto>>> GetAll()
    {
        try
        {
            var output = await _data.GetAllAssigned(GetUserId());
            return Ok(output);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    // GET: /properties/{propertyId}
    [HttpGet("{propertyId}")]
    public async Task<ActionResult<PropertyDto>> GetOne(int propertyId)
    {
        try
        {
            var output = await _data.GetOneAssigned(GetUserId(), propertyId);
            return Ok(output);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    // POST: /properties
    [HttpPost]
    public async Task<ActionResult<PropertyDto>> Post([FromBody] PropertyDto property)
    {
        try
        {
            var output = await _data.Create(GetUserId(), property);
            return Ok(output);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    // PUT: /properties/{propertyId}
    [HttpPut("{propertyId}")]
    public async Task<ActionResult> Put(int propertyId, [FromBody] PropertyDto property)
    {
        try
        {
            await _data.Update(GetUserId(), propertyId, property);
            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    // DELETE: /properties/{propertyId}
    [HttpDelete("{propertyId}")]
    public async Task<IActionResult> Delete(int propertyId)
    {
        try
        {
            await _data.Delete(GetUserId(), propertyId);
            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}
