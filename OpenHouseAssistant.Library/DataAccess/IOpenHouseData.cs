using OpenHouseAssistant.Shared.Dtos;

namespace OpenHouseAssistant.Library.DataAccess;

public interface IOpenHouseData
{
    Task<List<OpenHouseDto>> GetAllAssigned(string userId);
    Task<OpenHouseDto?> GetOneAssigned(string userId, int openHouseId);
    Task<List<OpenHouseDto>> GetAllAssignedByProperty(string userId, int propertyId);
    Task<OpenHouseDto?> Create(string userId, OpenHouseDto openHouse);
    Task Update(string userId, int openHouseId, OpenHouseDto openHouse);
    Task Delete(string userId, int openHouseId);
}