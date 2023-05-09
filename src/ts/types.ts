import { ColumnDef } from "@tanstack/react-table";

type ColumnMeta = {
  meta: {
    size: string;
  };
};

export type AugmentedColumnDef<T> = ColumnDef<T> & ColumnMeta;

export type GuestToExport = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
}
