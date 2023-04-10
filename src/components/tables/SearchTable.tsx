import {
  ColumnDef,
  Table,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { TableLoaderIcon } from "../../assets/icons";
import { DebouncedInput } from "../inputs/DebouncedInput";

interface SearchTableProps<T> {
  isLoading: boolean;
  error: unknown;
  data: T[] | undefined;
  columns: ColumnDef<T>[];
}

export const SearchTable = <T,>({ isLoading, error, data, columns }: SearchTableProps<T>) => {
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

  const TableBody = <T,>(table: Table<T>) => {
    if (isLoading === true) {
      return (
        <tbody>
          <tr>
            <td colSpan={columns.length} className="table-cell">
              <TableLoaderIcon />
            </td>
          </tr>
        </tbody>
      );
    }

    if (error) {
      return (
        <tbody>
          <tr>
            <td colSpan={columns.length} className="table-cell">
              Failed to fetch data.
            </td>
          </tr>
        </tbody>
      );
    }

    return (
      <tbody className="bg-lt-surface dark:bg-dk-surface">
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="h-8">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="border border-lt-border p-2 dark:border-dk-border">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <section>
      <div>
        <DebouncedInput value={globalFilter ?? ""} onChange={(value) => setGlobalFilter(value)} />
      </div>
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
        <TableBody {...table} />
      </table>
      <div className="mt-4 flex items-center gap-2">
        <button
          className="rounded-sm border border-lt-border bg-lt-surface p-1 dark:border-dk-border dark:bg-dk-surface"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          className="rounded-sm border border-lt-border bg-lt-surface p-1 dark:border-dk-border dark:bg-dk-surface"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          className="rounded-sm border border-lt-border bg-lt-surface p-1 dark:border-dk-border dark:bg-dk-surface"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className="rounded-sm border border-lt-border bg-lt-surface p-1 dark:border-dk-border dark:bg-dk-surface"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </strong>
        </span>
        <select
          className="rounded-sm border border-lt-border bg-lt-surface dark:border-dk-border dark:bg-dk-surface"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};
