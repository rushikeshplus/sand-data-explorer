
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter } from "lucide-react";

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
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFilterChange,
  onReset,
  className = ""
}) => {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({});

  const handleFilterChange = (filterId: string, value: string) => {
    setSelectedFilters((prev) => ({ ...prev, [filterId]: value }));
    onFilterChange(filterId, value);
  };

  const handleReset = () => {
    setSelectedFilters({});
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
      </div>
    </div>
  );
};

export default FilterPanel;
