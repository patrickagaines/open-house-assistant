import { Table } from "@tanstack/react-table";
import { TableControlButton } from "../buttons/TableControlButton";

export const DataTableControls = <T,>(table: Table<T>) => {
  return (
    <div className="mt-4 flex items-center gap-2">
      <TableControlButton
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
      >
        {"<<"}
      </TableControlButton>
      <TableControlButton
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        {"<"}
      </TableControlButton>
      <TableControlButton onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
        {">"}
      </TableControlButton>
      <TableControlButton
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}
      >
        {">>"}
      </TableControlButton>
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
  );
};
