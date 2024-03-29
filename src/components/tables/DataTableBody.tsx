import { Table, flexRender } from "@tanstack/react-table";
import { TableLoaderIcon } from "../../assets/icons";
import { AugmentedColumnDef } from "../../ts/types";

interface DataTableBodyProps<T> {
  isLoading: boolean;
  error: unknown;
  table: Table<T>;
  columns: AugmentedColumnDef<T>[];
}

export const DataTableBody = <T,>({ isLoading, error, table, columns }: DataTableBodyProps<T>) => {
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

  if (error instanceof Error) {
    return (
      <tbody>
        <tr>
          <td colSpan={columns.length} className="table-cell pt-6 text-center text-error">
            {error.message}
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody className={table.getRowModel().rows.length !== 0 ? "theme-surface" : ""}>
      {table.getRowModel().rows.length === 0 ? (
        <tr>
          <td colSpan={columns.length} className="table-cell pt-6 text-center italic">
            No results to show.
          </td>
        </tr>
      ) : (
        table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                width={(cell.column.columnDef as AugmentedColumnDef<T>).meta.size}
                className="theme-border p-2"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))
      )}
    </tbody>
  );
};
