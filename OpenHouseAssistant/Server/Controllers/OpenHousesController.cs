using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using OpenHouseAssistant.Shared.Dtos;
using OpenHouseAssistant.Library.DataAccess;
using System.Security.Claims;
using Microsoft.Build.Framework;

namespace OpenHouseAssistant.Server.Controllers;

[Route("open-houses")]
[ApiController]
[Authorize]
public class OpenHousesController : ControllerBase
{
    private readonly IOpenHouseData _data;

    public OpenHousesController(IOpenHouseData data)
    {
        _data = data;
    }

    private string GetUserId()
    {
        string output = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)!.Value;
        return output;
    }

    // GET: /open-houses
    [HttpGet]
    public async Task<ActionResult<List<OpenHouseDto>>> GetAll()
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

    // GET: /open-houses/{openHouseId}
    [HttpGet("{openHouseId}")]
    public async Task<ActionResult<List<OpenHouseDto>>> GetOne(int openHouseId)
    {
        try
        {
            var output = await _data.GetOneAssigned(GetUserId(), openHouseId);
            return Ok(output);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    // GET: /open-houses
    [HttpGet("property/{propertyId}")]
    public async Task<ActionResult<List<OpenHouseDto>>> GetAllByProperty(int propertyId)
    {
        try
        {
            var output = await _data.GetAllAssignedByProperty(GetUserId(), propertyId);
            return Ok(output);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    // POST: /open-houses
    [HttpPost]
    public async Task<ActionResult<OpenHouseDto>> Post([FromBody] OpenHouseDto openHouse)
    {
        try
        {
            var output = await _data.Create(GetUserId(), openHouse);
            return Ok(output);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    // PUT: /open-houses/{openHouseId}
    [HttpPut("{openHouseId}")]
    public async Task<ActionResult> Put(int openHouseId,[FromBody] OpenHouseDto openHouse)
    {
        try
        {
            await _data.Update(GetUserId(), openHouseId, openHouse);
            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    // DELETE: /open-houses/{openHouseId}
    [HttpDelete("{openHouseId}")]
    public async Task<IActionResult> Delete(int openHouseId)
    {
        try
        {
            await _data.Delete(GetUserId(), openHouseId);
            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}
