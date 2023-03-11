using Dapper;
using System.Data;

namespace OpenHouseAssistant.Library.DataAccess;

public class TimeOnlyTypeHandler : SqlMapper.TypeHandler<TimeOnly>
{
    public override TimeOnly Parse(object value)
    {
        return TimeOnly.FromTimeSpan((TimeSpan)value);
    }

    public override void SetValue(IDbDataParameter parameter, TimeOnly value)
    {
        parameter.Value = value;
    }
}
