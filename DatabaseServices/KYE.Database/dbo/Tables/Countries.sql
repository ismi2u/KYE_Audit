CREATE TABLE [dbo].[Countries] (
    [CountryId]   INT            IDENTITY (1, 1) NOT NULL,
    [Alpha2Code]  CHAR (2)       NOT NULL,
    [Alpha3Code]  CHAR (3)       NOT NULL,
    [NumericCode] CHAR (3)       NOT NULL,
    [CountryName] NVARCHAR (150) NOT NULL,
    PRIMARY KEY CLUSTERED ([CountryId] ASC)
);

