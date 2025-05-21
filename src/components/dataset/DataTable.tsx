
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Search } from "lucide-react";

interface DataTableProps {
  data: any[];
  columns: {
    key: string;
    label: string;
  }[];
  onDownload?: () => void;
}

const DataTable: React.FC<DataTableProps> = ({ data, columns, onDownload }) => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const rowsPerPage = 10;

  // Filter data based on search term
  const filteredData = data.filter((row) => 
    Object.values(row).some(
      value => 
        value !== null && 
        value !== undefined && 
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search data..."
            className="pl-9 w-full"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(1); // Reset to first page on search
            }}
          />
        </div>
        
        {onDownload && (
          <Button 
            variant="outline" 
            onClick={onDownload}
            className="w-full sm:w-auto"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Data
          </Button>
        )}
      </div>
      
      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              {columns.map((column) => (
                <TableHead key={column.key}>{column.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((column) => (
                    <TableCell key={column.key}>
                      {row[column.key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center py-8">
                  No data found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-500">
            Showing {(page - 1) * rowsPerPage + 1}-{Math.min(page * rowsPerPage, filteredData.length)} of {filteredData.length} entries
          </div>
          <div className="flex gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;
