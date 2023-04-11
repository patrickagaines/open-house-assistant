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
  isLoading: boolean;
  error: unknown;
  data: T[] | undefined;
  columns: AugmentedColumnDef<T>[];
}

export const DataTable = <T,>({ isLoading, error, data, columns }: DataTableProps<T>) => {
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
    <section>
      <div>
        <DebouncedInput value={globalFilter ?? ""} onChange={(value) => setGlobalFilter(value)} />
      </div>
      <div className="overflow-x-scroll">
        <table className="mt-2 w-full whitespace-nowrap">
          <thead>
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
