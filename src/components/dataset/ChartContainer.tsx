
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, PieChart, LineChart } from "recharts";

interface ChartContainerProps {
  title: string;
  description?: string;
  chartType?: "bar" | "pie" | "line";
  children: React.ReactNode;
  chartOptions?: string[];
  onChartTypeChange?: (type: "bar" | "pie" | "line") => void;
  onOptionChange?: (option: string) => void;
}

const ChartContainer: React.FC<ChartContainerProps> = ({
  title,
  description,
  chartType = "bar",
  children,
  chartOptions,
  onChartTypeChange,
  onOptionChange,
}) => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>{title}</CardTitle>
          {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
        </div>
        <div className="flex items-center space-x-2">
          {chartOptions && onOptionChange && (
            <Select onValueChange={onOptionChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select view" />
              </SelectTrigger>
              <SelectContent>
                {chartOptions.map((option) => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          
          {onChartTypeChange && (
            <div className="flex border rounded-md">
              <button
                type="button"
                onClick={() => onChartTypeChange("bar")}
                className={`p-1 ${chartType === "bar" ? "bg-muted" : ""}`}
                title="Bar Chart"
              >
                <BarChart className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => onChartTypeChange("pie")}
                className={`p-1 ${chartType === "pie" ? "bg-muted" : ""}`}
                title="Pie Chart"
              >
                <PieChart className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => onChartTypeChange("line")}
                className={`p-1 ${chartType === "line" ? "bg-muted" : ""}`}
                title="Line Chart"
              >
                <LineChart className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default ChartContainer;
