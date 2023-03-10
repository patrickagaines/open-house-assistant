using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using OpenHouseAssistant.Shared.Models;

namespace OpenHouseAssistant.Server.Controllers;

[Route("open-houses")]
[ApiController]
//[Authorize]
public class OpenHousesController : ControllerBase
{
    // GET: /open-houses
    [HttpGet]
    public async Task<ActionResult<List<OpenHouseModel>>> Get()
    {
        throw new NotImplementedException();
    }

    // GET: /open-houses/{propertyId}
    [HttpGet("{propertyId}")]
    public async Task<ActionResult<List<OpenHouseModel>>> Get(int propertyId)
    {
        throw new NotImplementedException();
    }

    // POST: /open-houses
    [HttpPost]
    public async Task<ActionResult<OpenHouseModel>> Post([FromBody]
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
