using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using OpenHouseAssistant.Shared.Models;

namespace OpenHouseAssistant.Server.Controllers;

[Route("guests")]
[ApiController]
//[Authorize]
public class GuestsController : ControllerBase
{
    // GET: /guests
    [HttpGet]
    public async Task<ActionResult<List<GuestModel>>> Get()
    {
        throw new NotImplementedException();
    }

    // GET: /guests/{openHouseId}
    [HttpGet("{openHouseId}")]
    public async Task<ActionResult<List<GuestModel>>> Get(int openHouseId)
    {
        throw new NotImplementedException();
    }

    // POST: /guests/{openHouseId}
    [HttpPost("openHouseId")]
    public async Task<ActionResult<GuestModel>> Post(int openHouseId, [FromBody]
    string firstName, string lastName, string phoneNumber, string emailAddress)
    {
        throw new NotImplementedException();
    }

    // PUT: /guests/{guestId}
    [HttpPut("{guestId}")]
    public async Task<ActionResult> Put(int guestId, [FromBody]
    string firstName, string lastName, string phoneNumber, string emailAddress)
    {
        throw new NotImplementedException();
    }

    // DELETE: /guests/{guestId}/{openHouseId}
    [HttpDelete("{guestId}/{openHouseId}")]
    public async Task<IActionResult> Delete(int guestId, int openHouseId)
    {
        throw new NotImplementedException();
    }

    // DELETE: /guests/{guestId}
    [HttpDelete("{guestId}")]
    public async Task<IActionResult> Delete(int guestId)
    {
        throw new NotImplementedException();
    }
}
