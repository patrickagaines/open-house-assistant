import { useMemo } from "react";
import { useOpenHouses } from "../../hooks/openhouses/useOpenHouses";
import { OpenHouse } from "../../ts/interfaces";
import { AugmentedColumnDef } from "../../ts/types";
import { formatDate } from "../../utils/format-date";
import { formatTime } from "../../utils/format-time";
import { DataTable } from "./DataTable";

export const OpenHousesTable = () => {
  const { isLoading, error, data } = useOpenHouses();

  const columns = useMemo<AugmentedColumnDef<OpenHouse>[]>(
    () => [
      {
        accessorKey: "date",
        header: "Date",
        cell: (info) => formatDate(info.getValue<string>()),
        meta: {
          size: "auto",
        },
      },
      {
        accessorKey: "startTime",
        header: "Start Time",
        cell: (info) => formatTime(info.getValue<string>()),
        meta: {
          size: "auto",
        },
      },
      {
        accessorKey: "endTime",
        header: "End Time",
        cell: (info) => formatTime(info.getValue<string>()),
        meta: {
          size: "auto",
        },
      },
      {
        accessorKey: "streetAddress",
        header: "Street Address",
        cell: (info) => info.getValue(),
        meta: {
          size: "auto",
        },
      },
      {
        accessorKey: "unitNumber",
        header: "Unit Number",
        cell: (info) => info.getValue() ?? "_",
        meta: {
          size: "auto",
        },
      },
      {
        accessorKey: "city",
        header: "City",
        cell: (info) => info.getValue(),
        meta: {
          size: "auto",
        },
      },
      {
        accessorKey: "state",
        header: "State",
        cell: (info) => info.getValue(),
        meta: {
          size: "auto",
        },
      },
      {
        accessorKey: "zipCode",
        header: "Zip Code",
        cell: (info) => info.getValue(),
        meta: {
          size: "auto",
        },
      },
    ],
    []
  );

  return <DataTable<OpenHouse> isLoading={isLoading} error={error} data={data} columns={columns} />;
};
