import { UseQueryResult } from "@tanstack/react-query";
import { useMemo } from "react";
import { Guest } from "../../ts/interfaces";
import { AugmentedColumnDef } from "../../ts/types";
import { Button } from "../buttons/Button";
import { TableEditButton } from "../buttons/TableEditButton";
import { DataTable } from "./DataTable";

interface GuestTableProps {
  query: UseQueryResult<Guest[], unknown>;
  handleOpenEditForm: () => void;
  setGuestToEdit: React.Dispatch<React.SetStateAction<Guest | undefined>>;
}

export const GuestTable = ({ query, handleOpenEditForm, setGuestToEdit }: GuestTableProps) => {
  const { isLoading, error, data } = query;

  const columns = useMemo<AugmentedColumnDef<Guest>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
        cell: (info) => info.getValue(),
        meta: {
          size: "auto",
        },
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        cell: (info) => info.getValue(),
        meta: {
          size: "auto",
        },
      },
      {
        accessorKey: "phoneNumber",
        header: "Phone Number",
        cell: (info) => info.getValue(),
        meta: {
          size: "auto",
        },
      },
      {
        accessorKey: "emailAddress",
        header: "Email Address",
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
          <TableEditButton<Guest>
            handleOpenEditForm={handleOpenEditForm}
            setObjectToEdit={setGuestToEdit}
            objectToEdit={info.row.original}
          />
        ),
        meta: {
          size: "auto",
        },
      },
    ],
    []
  );

  return (
    <DataTable<Guest>
      title={<h2 className="mt-10 text-center text-2xl md:text-3xl lg:mt-12">Guests</h2>}
      isLoading={isLoading}
      error={error}
      data={data}
      columns={columns}
      actionButton={<Button type="button">Export</Button>}
    />
  );
};
