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
    public async Task<ActionResult<List<OpenHouseDto>>> Get()
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

    // GET: /open-houses/{propertyId}
    [HttpGet("{propertyId}")]
    public async Task<ActionResult<List<OpenHouseDto>>> Get(int propertyId)
    {
        throw new NotImplementedException();
    }

    // POST: /open-houses
    [HttpPost]
    public async Task<ActionResult<OpenHouseDto>> Post([FromBody]
    int propertyId, DateOnly date, TimeOnly startTime, TimeOnly endTime)
    {
        throw new NotImplementedException();
    }

    // PUT: /open-houses/{openHouseId}
    [HttpPut("{openHouseId}")]
    public async Task<ActionResult> Put(int openHouseId, [FromBody]
    int propertyId, DateOnly date, TimeOnly startTime, TimeOnly endTime)
    {
        throw new NotImplementedException();
    }

    // DELETE: /open-houses/{openHouseId}
    [HttpDelete("{openHouseId}")]
    public async Task<IActionResult> Delete(int openHouseId)
    {
        throw new NotImplementedException();
    }
}
