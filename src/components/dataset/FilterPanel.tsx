
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Filter, BarChart2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface FilterOption {
  value: string;
  label: string;
}

interface FilterPanelProps {
  filters: {
    id: string;
    label: string;
    options: FilterOption[];
  }[];
  onFilterChange: (filterId: string, value: string) => void;
  onReset: () => void;
  className?: string;
  numericFilters?: {
    id: string;
    label: string;
    min: number;
    max: number;
  }[];
  onNumericFilterChange?: (filterId: string, min: number, max: number) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFilterChange,
  onReset,
  className = "",
  numericFilters = [],
  onNumericFilterChange
}) => {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({});
  const [numericValues, setNumericValues] = useState<Record<string, [number, number]>>({});

  const handleFilterChange = (filterId: string, value: string) => {
    setSelectedFilters((prev) => ({ ...prev, [filterId]: value }));
    onFilterChange(filterId, value);
  };

  const handleNumericFilterChange = (filterId: string, values: number[]) => {
    const [min, max] = values;
    setNumericValues((prev) => ({ ...prev, [filterId]: [min, max] }));
    if (onNumericFilterChange) {
      onNumericFilterChange(filterId, min, max);
    }
  };

  const handleReset = () => {
    setSelectedFilters({});
    setNumericValues({});
    onReset();
  };

  return (
    <div className={`p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-sm ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium flex items-center text-gray-100">
          <Filter className="w-4 h-4 mr-2" /> Filters
        </h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleReset}
          className="text-sm text-[#F4AA08] hover:text-[#F4AA08]/80 hover:bg-gray-700"
        >
          Reset
        </Button>
      </div>
      
      <div className="space-y-4">
        {filters.map((filter) => (
          <div key={filter.id} className="grid gap-1.5">
            <Label htmlFor={filter.id} className="text-gray-300">{filter.label}</Label>
            <Select
              value={selectedFilters[filter.id] || ""}
              onValueChange={(value) => handleFilterChange(filter.id, value)}
            >
              <SelectTrigger id={filter.id} className="bg-gray-700 border-gray-600 text-gray-200">
                <SelectValue placeholder={`Select ${filter.label.toLowerCase()}...`} />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 border-gray-600 text-gray-200">
                <SelectItem value="_all">All {filter.label}s</SelectItem>
                {filter.options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}

        {numericFilters.map((filter) => (
          <div key={filter.id} className="grid gap-2">
            <Label htmlFor={filter.id} className="text-gray-300">{filter.label}</Label>
            <div className="pt-2 px-2">
              <Slider
                id={filter.id}
                defaultValue={[filter.min, filter.max]}
                min={filter.min}
                max={filter.max}
                step={1}
                onValueChange={(values) => handleNumericFilterChange(filter.id, values)}
                className="my-6"
              />
            </div>
            <div className="flex items-center justify-between">
              <Input 
                type="number" 
                className="w-20 bg-gray-700 border-gray-600 text-gray-200" 
                value={(numericValues[filter.id]?.[0] ?? filter.min).toString()}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  const max = numericValues[filter.id]?.[1] ?? filter.max;
                  handleNumericFilterChange(filter.id, [value, max]);
                }}
              />
              <span className="text-gray-400">to</span>
              <Input 
                type="number" 
                className="w-20 bg-gray-700 border-gray-600 text-gray-200" 
                value={(numericValues[filter.id]?.[1] ?? filter.max).toString()}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  const min = numericValues[filter.id]?.[0] ?? filter.min;
                  handleNumericFilterChange(filter.id, [min, value]);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;
