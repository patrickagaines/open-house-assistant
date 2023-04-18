import { UseQueryResult } from "@tanstack/react-query";
import { useMemo } from "react";
import { Guest } from "../../ts/interfaces";
import { AugmentedColumnDef } from "../../ts/types";
import { Button } from "../buttons/Button";
import { DataTable } from "./DataTable";

interface GuestTableProps {
  query: UseQueryResult<Guest[], unknown>;
}

export const GuestTable = ({ query }: GuestTableProps) => {
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
    ],
    []
  );

  return (
    <DataTable<Guest>
      title="Guests"
      isLoading={isLoading}
      error={error}
      data={data}
      columns={columns}
      actionButton={<Button type="button">Export</Button>}
    />
  );
};
