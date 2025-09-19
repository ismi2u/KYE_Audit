using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExceptionManagement.Application.DTOs
{
    public class ExceptionLogDto
    {
        public Guid Id { get; set; }
        public required string ApplicationName { get; set; }

        public string Environment { get; set; } = string.Empty;
        public string ExceptionType { get; set; } = string.Empty;
        public string Message { get; set; } = string.Empty;
        public string RequestPath { get; set; } = string.Empty;
        public string HttpMethod { get; set; } = string.Empty;
        public string UserId { get; set; } = string.Empty;
        public string Level { get; set; } = string.Empty;

        public DateTime OccurredAt { get; set; }
    }
}
