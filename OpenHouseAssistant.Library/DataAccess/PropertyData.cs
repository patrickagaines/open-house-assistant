using OpenHouseAssistant.Shared.Dtos;

namespace OpenHouseAssistant.Library.DataAccess;

public class PropertyData : IPropertyData
{
    private readonly ISqlDataAccess _sql;

    public PropertyData(ISqlDataAccess sql)
    {
        _sql = sql;
    }

    public Task<List<PropertyDto>> GetAllAssigned(string userId)
    {
        return _sql.LoadData<PropertyDto, dynamic>("dbo.spProperties_GetAllAssigned",
            new { UserId = userId },
            "Default");
    }

    public async Task<PropertyDto?> GetOneAssigned(string userId, int propertyId)
    {
        var results = await _sql.LoadData<PropertyDto, dynamic>("dbo.spProperties_GetOneAssigned",
            new { UserId = userId, PropertyId = propertyId },
            "Default");

        return results.FirstOrDefault();
    }

    public async Task<PropertyDto?> Create(string userId, PropertyDto property)
    {
        var results = await _sql.LoadData<PropertyDto, dynamic>("dbo.spProperties_Create",
            new
            {
                UserId = userId,
                StreetAddress = property.StreetAddress,
                UnitNumber = property.UnitNumber,
                City = property.City,
                State = property.State,
                ZipCode = property.ZipCode
            },
            "Default");

        return results.FirstOrDefault();
    }

    public Task Update(string userId, int propertyId, PropertyDto property)
    {
        return _sql.SaveData<dynamic>("dbo.spProperties_Update",
            new
            {
                Id = propertyId,
                UserId = userId,
                StreetAddress = property.StreetAddress,
                UnitNumber = property.UnitNumber,
                City = property.City,
                State = property.State,
                ZipCode = property.ZipCode
            },
            "Default");
    }

    public Task Delete(string userId, int propertyId)
    {
        return _sql.SaveData<dynamic>("dbo.spProperties_Delete",
            new
            { UserId = userId, PropertyId = propertyId },
            "Default");
    }
}

