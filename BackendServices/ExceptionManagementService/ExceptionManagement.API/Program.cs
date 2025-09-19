
using ExceptionManagement.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddCors(options => {
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });


    //options.AddDefaultPolicy(policy =>
    //{
    //    policy.WithOrigins("http://localhost:5173/") 
    //          .AllowAnyHeader()
    //          .AllowAnyMethod();
    //});
});


builder.Services.AddDbContext<ExceptionsDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("ExceptionsStorage")));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();
app.UseHttpsRedirection();


app.UseAuthorization();

app.MapControllers();

app.Run();
