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

    public async Task<OpenHouseDto?> GetOneAssigned(string userId, int openHouseId)
    {
        var results = await _sql.LoadData<OpenHouseDto, dynamic>("dbo.spOpenHouses_GetOneAssigned",
            new { UserId = userId, OpenHouseId = openHouseId },
            "Default");

        return results.FirstOrDefault();
    }

    public Task<List<OpenHouseDto>> GetAllAssignedByProperty(string userId, int propertyId)
    {
        return _sql.LoadData<OpenHouseDto, dynamic>("dbo.spOpenHouses_GetAllAssignedByProperty",
            new { UserId = userId, PropertyId = propertyId },
            "Default");
    }

    public async Task<OpenHouseDto?> Create(string userId, OpenHouseDto openHouse)
    {
        if (openHouse.PropertyId == 0)
        {
            var newProperty = CreateNewProperty(userId, openHouse).Result;

            openHouse.PropertyId = newProperty.Id;
        }

        async Task<PropertyDto> CreateNewProperty(string userId, OpenHouseDto openHouse)
        {
            var results = await _sql.LoadData<PropertyDto, dynamic>("dbo.spProperties_Create",
                new
                {
                    UserId = userId,
                    StreetAddress = openHouse.StreetAddress,
                    UnitNumber = openHouse.UnitNumber,
                    City = openHouse.City,
                    State = openHouse.State,
                    ZipCode = openHouse.ZipCode
                },
                "Default");

            return results.First();
        }

        var results = await _sql.LoadData<OpenHouseDto, dynamic>("dbo.spOpenHouses_Create",
            new
            {
                UserId = userId,
                PropertyId = openHouse.PropertyId,
                Date = openHouse.Date,
                StartTime = openHouse.StartTime,
                EndTime = openHouse.EndTime
            },
            "Default");

        return results.FirstOrDefault();
    }

    public Task Update(string userId, int openHouseId, OpenHouseDto openHouse)
    {
        return _sql.SaveData<dynamic>("dbo.spOpenHouses_Update",
            new
            {
                Id = openHouseId,
                UserId = userId,
                Date = openHouse.Date,
                StartTime = openHouse.StartTime,
                EndTime = openHouse.EndTime
            },
            "Default");
    }

    public Task Delete(string userId, int openHouseId)
    {
        return _sql.SaveData<dynamic>("dbo.spOpenHouses_Delete",
            new
            { UserId = userId, OpenHouseId = openHouseId },
            "Default");
    }
}

