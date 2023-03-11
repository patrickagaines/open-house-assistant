using OpenHouseAssistant.Shared.Dtos;

namespace OpenHouseAssistant.Library.DataAccess;

public interface IOpenHouseData
{
    Task<List<OpenHouseDto>> GetAllAssigned(string userId);
}