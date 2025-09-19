using ExceptionManagement.Application.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExceptionManagement.Application.Interfaces
{
    public interface IExceptionLogService
    {
        Task<IEnumerable<ExceptionLogDto>> GetAllAsync();
        Task<ExceptionLogDto> GetByIdAsync(Guid id);
        Task<ExceptionLogDto> CreateAsync(CreateExceptionLogRequest request);
    }
}
