using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Controllers
{
    // by default the kestrel webserver port is 5000
    // http://localhost:5000/api/values     - What happens when you access that link:
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _context;
        public ValuesController(DataContext Context)
        {
            _context = Context;

        }
        // GET api/values
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetValues()
        {
            var values = await _context.Values.ToListAsync();

            return Ok(values);
        }
        // When a request comes in to api/values, it will hit the GetValues method, go to the database, get the values as a list
        // and store them in the values variable which we then return tot the client with a HTTP 200 Ok response
        // (http 200 response means your request has succeeded)

        // GET api/values/5                 - What happens when you access that link but with something else on the end, e.g <--:
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetValue(int id)
        {
            var value = await _context.Values.FirstOrDefaultAsync(x => x.Id == id);
            // we use first or default because if first doesnt work it will then return the 'null' which is better than 
            // if it was to not work and return an exception
            return Ok(value);
        }

        // POST api/values
        [AllowAnonymous]
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
