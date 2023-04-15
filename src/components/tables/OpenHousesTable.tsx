import { useMemo } from "react";
import { PlusIcon } from "../../assets/icons";
import { useOpenHouses } from "../../hooks/openhouses/useOpenHouses";
import { OpenHouse } from "../../ts/interfaces";
import { AugmentedColumnDef } from "../../ts/types";
import { formatDate } from "../../utils/format-date";
import { formatTime } from "../../utils/format-time";
import { TableActionButton } from "../buttons/TableActionButton";
import { TableDetailButton } from "../buttons/TableDetailButton";
import { TableEditButton } from "../buttons/TableEditButton";
import { DataTable } from "./DataTable";

interface OpenHousesTableProps {
  handleOpenCreateForm: () => void;
  handleOpenEditForm: () => void;
  setObjectToEdit: React.Dispatch<React.SetStateAction<OpenHouse | undefined>>;
}

export const OpenHousesTable = ({
  handleOpenEditForm,
  setObjectToEdit,
  handleOpenCreateForm,
}: OpenHousesTableProps) => {
  const { isLoading, error, data } = useOpenHouses();

  console.log(data);

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
            setObjectToEdit={setObjectToEdit}
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
        cell: (info) => (<TableDetailButton route={`/open-houses/${info.getValue()}`} />),
        meta: {
          size: "auto",
        },
      },
    ],
    []
  );

  return (
    <DataTable<OpenHouse>
      title="Open Houses"
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
