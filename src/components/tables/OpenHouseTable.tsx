import { UseQueryResult } from "@tanstack/react-query";
import { VisibilityState } from "@tanstack/react-table";
import { useMemo } from "react";
import { PlusIcon } from "../../assets/icons";
import { OpenHouse } from "../../ts/interfaces";
import { AugmentedColumnDef } from "../../ts/types";
import { formatDate } from "../../utils/format-date";
import { formatTime } from "../../utils/format-time";
import { TableActionButton } from "../buttons/TableActionButton";
import { TableDetailButton } from "../buttons/TableDetailButton";
import { TableEditButton } from "../buttons/TableEditButton";
import { DataTable } from "./DataTable";

interface OpenHouseTableProps {
  query: UseQueryResult<OpenHouse[], unknown>;
  title: React.ReactElement;
  showPropertyColumns?: boolean;
  handleOpenCreateForm: () => void;
  handleOpenEditForm: () => void;
  setOpenHouseToEdit: React.Dispatch<React.SetStateAction<OpenHouse | undefined>>;
}

export const OpenHouseTable = ({
  query,
  title,
  showPropertyColumns = true,
  handleOpenCreateForm,
  handleOpenEditForm,
  setOpenHouseToEdit,
}: OpenHouseTableProps) => {
  const { isLoading, error, data } = query;

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
        id: "edit",
        accessorKey: "id",
        header: "Edit",
        cell: (info) => (
          <TableEditButton<OpenHouse>
            handleOpenEditForm={handleOpenEditForm}
            setObjectToEdit={setOpenHouseToEdit}
            objectToEdit={info.row.original}
          />
        ),
        meta: {
          size: showPropertyColumns ? "auto" : "12%",
        },
      },
      {
        id: "view",
        accessorKey: "id",
        header: "View",
        cell: (info) => <TableDetailButton route={`/open-houses/${info.getValue()}`} />,
        meta: {
          size: showPropertyColumns ? "auto" : "12%",
        },
      },
    ],
    []
  );

  const columnVisibilityState: VisibilityState = {
    streetAddress: showPropertyColumns,
    unitNumber: showPropertyColumns,
    city: showPropertyColumns,
  };

  return (
    <DataTable<OpenHouse>
      title={title}
      isLoading={isLoading}
      error={error}
      data={data}
      columns={columns}
      columnVisibilityState={columnVisibilityState}
      actionButton={
        <TableActionButton onClick={handleOpenCreateForm} icon={<PlusIcon />}>
          Create
        </TableActionButton>
      }
    />
  );
};
