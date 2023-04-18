import { UseQueryResult } from "@tanstack/react-query";
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
  handleOpenCreateForm: () => void;
  handleOpenEditForm: () => void;
  setOpenHouseToEdit: React.Dispatch<React.SetStateAction<OpenHouse | undefined>>;
}

export const OpenHouseTable = ({
  query,
  handleOpenEditForm,
  setOpenHouseToEdit,
  handleOpenCreateForm,
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
          size: "auto",
        },
      },
      {
        id: "view",
        accessorKey: "id",
        header: "View",
        cell: (info) => <TableDetailButton route={`/open-houses/${info.getValue()}`} />,
        meta: {
          size: "auto",
        },
      },
    ],
    []
  );

  return (
    <DataTable<OpenHouse>
      title={<h1 className="text-center text-2xl md:text-3xl">Open Houses</h1>}
      isLoading={isLoading}
      error={error}
      data={data}
      columns={columns}
      actionButton={
        <TableActionButton onClick={handleOpenCreateForm} icon={<PlusIcon />}>
          Create
        </TableActionButton>
      }
    />
  );
};