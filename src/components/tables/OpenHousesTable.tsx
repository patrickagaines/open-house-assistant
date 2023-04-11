import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";
import { useOpenHouses } from "../../hooks/openhouses/useOpenHouses";
import { OpenHouse } from "../../ts/interfaces";
import { DataTable } from "./DataTable";

export const OpenHousesTable = () => {
  const { isLoading, error, data } = useOpenHouses();

  const columns = useMemo<ColumnDef<OpenHouse>[]>(
    () => [
      {
        accessorKey: "date",
        header: "Date",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "startTime",
        header: "Start Time",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "endTime",
        header: "End Time",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "streetAddress",
        header: "Street Address",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "unitNumber",
        header: "Unit Number",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "city",
        header: "City",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "state",
        header: "State",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "zipCode",
        header: "Zip Code",
        cell: (info) => info.getValue(),
      },
    ],
    []
  );

  return <DataTable<OpenHouse> isLoading={isLoading} error={error} data={data} columns={columns} />;
};
