using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExceptionManagement.Infrastructure.Data;
using ExceptionManagement.Infrastructure.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace ExceptionManagement.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExceptionLogController : ControllerBase
    {
        private readonly ExceptionsDbContext _context;

        public ExceptionLogController(ExceptionsDbContext context)
        {
            _context = context;
        }

        // GET: api/ExceptionLogs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ExceptionLog>>> GetExceptionLogs()
        {
            return await _context.ExceptionLogs.ToListAsync();
        }

        // GET: api/ExceptionLogs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ExceptionLog>> GetExceptionLog(Guid id)
        {
            var exceptionLog = await _context.ExceptionLogs.FindAsync(id);

            if (exceptionLog == null)
            {
                return NotFound();
            }

            return exceptionLog;
        }

        // PUT: api/ExceptionLogs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutExceptionLog(Guid id, ExceptionLog exceptionLog)
        {
            if (id != exceptionLog.Id)
            {
                return BadRequest();
            }

            _context.Entry(exceptionLog).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExceptionLogExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ExceptionLogs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ExceptionLog>> PostExceptionLog(ExceptionLog exceptionLog)
        {
            _context.ExceptionLogs.Add(exceptionLog);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetExceptionLog", new { id = exceptionLog.Id }, exceptionLog);
        }

        // DELETE: api/ExceptionLogs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExceptionLog(Guid id)
        {
            var exceptionLog = await _context.ExceptionLogs.FindAsync(id);
            if (exceptionLog == null)
            {
                return NotFound();
            }

            _context.ExceptionLogs.Remove(exceptionLog);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ExceptionLogExists(Guid id)
        {
            return _context.ExceptionLogs.Any(e => e.Id == id);
        }
    }
}
