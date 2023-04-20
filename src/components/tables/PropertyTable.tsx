import { UseQueryResult } from "@tanstack/react-query";
import { useMemo } from "react";
import { PlusIcon } from "../../assets/icons";
import { Property } from "../../ts/interfaces";
import { AugmentedColumnDef } from "../../ts/types";
import { TableActionButton } from "../buttons/TableActionButton";
import { TableDetailButton } from "../buttons/TableDetailButton";
import { TableEditButton } from "../buttons/TableEditButton";
import { DataTable } from "./DataTable";

interface PropertyTableProps {
  query: UseQueryResult<Property[], unknown>;
  title: React.ReactElement;
  handleOpenCreateForm: () => void;
  handleOpenEditForm: () => void;
  setPropertyToEdit: React.Dispatch<React.SetStateAction<Property | undefined>>;
}

export const PropertyTable = ({
  query,
  title,
  handleOpenCreateForm,
  handleOpenEditForm,
  setPropertyToEdit,
}: PropertyTableProps) => {
  const { isLoading, error, data } = query;

  const columns = useMemo<AugmentedColumnDef<Property>[]>(
    () => [
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
      {
        id: "edit",
        accessorKey: "id",
        header: "Edit",
        cell: (info) => (
          <TableEditButton<Property>
            handleOpenEditForm={handleOpenEditForm}
            setObjectToEdit={setPropertyToEdit}
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
        cell: (info) => <TableDetailButton route={`/properties/${info.getValue()}`} />,
        meta: {
          size: "auto",
        },
      },
    ],
    []
  );

  return (
    <DataTable
      title={title}
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
