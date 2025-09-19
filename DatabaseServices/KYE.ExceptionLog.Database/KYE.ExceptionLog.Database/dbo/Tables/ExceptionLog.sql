CREATE TABLE [dbo].[ExceptionLog] (
    [Id]              UNIQUEIDENTIFIER DEFAULT (newsequentialid()) NOT NULL,
    [OccurredAt]      DATETIME2 (7)    DEFAULT (sysutcdatetime()) NOT NULL,
    [ApplicationName] NVARCHAR (150)   NULL,
    [Environment]     NVARCHAR (50)    NULL,
    [Level]           NVARCHAR (20)    NULL,
    [ExceptionType]   NVARCHAR (300)   NULL,
    [Message]         NVARCHAR (MAX)   NULL,
    [StackTrace]      NVARCHAR (MAX)   NULL,
    [InnerException]  NVARCHAR (MAX)   NULL,
    [UserId]          NVARCHAR (100)   NULL,
    [CorrelationId]   UNIQUEIDENTIFIER NULL,
    [RequestPath]     NVARCHAR (1000)  NULL,
    [HttpMethod]      NVARCHAR (10)    NULL,
    [StatusCode]      INT              NULL,
    [AdditionalData]  NVARCHAR (MAX)   NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

