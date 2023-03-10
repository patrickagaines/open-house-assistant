namespace OpenHouseAssistant.Shared.Models;

public class OpenHouseModel
{
    public int Id { get; set; }
    public int PropertyID { get; set; }
    public DateOnly Date { get; set; }
    public TimeOnly StartTime { get; set; }
    public TimeOnly EndTime { get; set; }
    public bool IsArchived { get; set; }
}