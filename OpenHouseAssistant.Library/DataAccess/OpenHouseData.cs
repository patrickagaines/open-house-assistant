using System;
using OpenHouseAssistant.Shared.Dtos;

namespace OpenHouseAssistant.Library.DataAccess;

public class OpenHouseData : IOpenHouseData
{
    private readonly ISqlDataAccess _sql;

    public OpenHouseData(ISqlDataAccess sql)
    {
        _sql = sql;
    }

    public Task<List<OpenHouseDto>> GetAllAssigned(string userId)
    {
        return _sql.LoadData<OpenHouseDto, dynamic>("dbo.spOpenHouses_GetAllAssigned",
            new { UserId = userId },
            "Default");
    }
}

