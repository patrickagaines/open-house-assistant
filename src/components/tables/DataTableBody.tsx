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
          <td colSpan={columns.length} className="table-cell">
            {`Failed to fetch data. Error: ${error.message}`}
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody className="bg-lt-surface dark:bg-dk-surface">
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td
              key={cell.id}
              width={(cell.column.columnDef as AugmentedColumnDef<T>).meta.size}
              className="border border-lt-border p-2 dark:border-dk-border"
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
