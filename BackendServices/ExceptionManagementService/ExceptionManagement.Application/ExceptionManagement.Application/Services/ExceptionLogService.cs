

using ExceptionManagement.Application.DTOs;
using ExceptionManagement.Application.Interfaces;
using ExceptionManagement.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExceptionManagement.Application.Services
{
    public class ExceptionLogService : IExceptionLogService
    {
        private readonly ExceptionsDbContext _context;

        public ExceptionLogService(ExceptionsDbContext context)
        {
            _context = context;
        }

        public Task<ExceptionLogDto> CreateAsync(CreateExceptionLogRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<ExceptionLogDto>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<ExceptionLogDto> GetByIdAsync(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}
