
INSERT INTO ExceptionLog 
(Id, OccurredAt, ApplicationName, Environment, Level, ExceptionType, Message, StackTrace, InnerException, UserId, CorrelationId, RequestPath, HttpMethod, StatusCode, AdditionalData)
VALUES
(NEWID(), SYSUTCDATETIME(), 'ExceptionManagementService', 'Development', 'Error', 'System.NullReferenceException', 'Object reference not set to an instance of an object.', 'at ExceptionManagementService.Controllers.LogController.Get() in LogController.cs:line 45', NULL, 'user1', NEWID(), '/api/logs', 'GET', 500, '{"Browser":"Chrome","OS":"Windows 11"}');

INSERT INTO ExceptionLog 
(Id, OccurredAt, ApplicationName, Environment, Level, ExceptionType, Message, StackTrace, InnerException, UserId, CorrelationId, RequestPath, HttpMethod, StatusCode, AdditionalData)
VALUES
(NEWID(), SYSUTCDATETIME(), 'ExceptionManagementService', 'Development', 'Warning', 'System.TimeoutException', 'Request timed out after 30 seconds.', 'at ExceptionManagementService.Services.ApiService.CallApi() in ApiService.cs:line 78', NULL, 'user2', NEWID(), '/api/data/fetch', 'POST', 408, '{"Endpoint":"https://api.example.com","RetryCount":3}');

INSERT INTO ExceptionLog 
(Id, OccurredAt, ApplicationName, Environment, Level, ExceptionType, Message, StackTrace, InnerException, UserId, CorrelationId, RequestPath, HttpMethod, StatusCode, AdditionalData)
VALUES
(NEWID(), SYSUTCDATETIME(), 'ExceptionManagementService', 'Production', 'Info', 'System.Exception', 'Sample informational message.', NULL, NULL, 'user3', NEWID(), '/api/health', 'GET', 200, '{"Status":"OK"}');

INSERT INTO ExceptionLog 
(Id, OccurredAt, ApplicationName, Environment, Level, ExceptionType, Message, StackTrace, InnerException, UserId, CorrelationId, RequestPath, HttpMethod, StatusCode, AdditionalData)
VALUES
(NEWID(), SYSUTCDATETIME(), 'ExceptionManagementService', 'Production', 'Error', 'System.InvalidOperationException', 'Operation is not valid due to the current state of the object.', 'at ExceptionManagementService.Services.ProcessService.Process() in ProcessService.cs:line 123', 'System.Exception: Inner exception example', 'user4', NEWID(), '/api/process', 'PUT', 500, '{"ProcessId":101,"Retry":false}');
