import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { AugmentedColumnDef } from "../../ts/types";
import { DebouncedInput } from "../inputs/DebouncedInput";
import { DataTableBody } from "./DataTableBody";
import { DataTableControls } from "./DataTableControls";

interface DataTableProps<T> {
  title: string;
  isLoading: boolean;
  error: unknown;
  data: T[] | undefined;
  columns: AugmentedColumnDef<T>[];
  actionButton: React.ReactElement;
}

export const DataTable = <T,>({
  title,
  isLoading,
  error,
  data,
  columns,
  actionButton,
}: DataTableProps<T>) => {
  const [globalFilter, setGlobalFilter] = useState<string>("");

  if (data === undefined) {
    data = [];
  }

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  return (
    <section className="text-sm">
      <h1 className="text-center text-2xl md:text-3xl">{title}</h1>
      <div className="mt-4 flex items-baseline justify-between">
        <DebouncedInput value={globalFilter ?? ""} onChange={(value) => setGlobalFilter(value)} />
        {actionButton}
      </div>
      <div className="overflow-x-scroll whitespace-nowrap">
        <table className="mt-2 w-full">
          <thead className="text-lt-heading dark:text-dk-heading">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} colSpan={header.colSpan} className="px-8 py-2">
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <DataTableBody isLoading={isLoading} error={error} table={table} columns={columns} />
        </table>
      </div>
      {!isLoading && !error && <DataTableControls {...table} />}
    </section>
  );
};
