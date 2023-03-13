using OpenHouseAssistant.Shared.Dtos;

namespace OpenHouseAssistant.Library.DataAccess
{
    public interface IPropertyData
    {
        Task<List<PropertyDto>> GetAllAssigned(string userId);
        Task<PropertyDto?> GetOneAssigned(string userId, int propertyId);
        Task<PropertyDto?> Create(string userId, PropertyDto property);
        Task Update(string userId, int propertyId, PropertyDto property);
        Task Delete(string userId, int propertyId);
    }
}