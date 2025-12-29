
import React, { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Filter, Download } from "lucide-react";

interface CensusAdvancedFiltersProps {
  data: any[];
  onFilterChange: (filteredData: any[]) => void;
  onDownload?: () => void;
}

const CensusAdvancedFilters: React.FC<CensusAdvancedFiltersProps> = ({
  data,
  onFilterChange,
  onDownload
}) => {
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedSubdistrict, setSelectedSubdistrict] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [selectedTRU, setSelectedTRU] = useState<string>("");
  const [populationRange, setPopulationRange] = useState<[number, number]>([0, 0]);
  const [filteredData, setFilteredData] = useState<any[]>(data);

  // Extract state-level rows (State != 0, District = 0, Subdistt = 0, Town/Village = 0)
  const stateOptions = useMemo(() => {
    const stateRows = data.filter(row => 
      row.District === 0 && 
      row.Subdistt === 0 && 
      row["Town/Village"] === 0 &&
      row.State !== 0 &&
      row.Name
    );
    return stateRows
      .map(row => ({ code: row.State, name: row.Name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [data]);

  // Get state code from selected state name
  const selectedStateCode = useMemo(() => {
    if (!selectedState) return null;
    const stateRow = stateOptions.find(state => state.name === selectedState);
    return stateRow?.code || null;
  }, [selectedState, stateOptions]);

  // Filter data by selected state
  const stateFilteredData = useMemo(() => {
    if (!selectedStateCode) return data;
    return data.filter(row => row.State === selectedStateCode);
  }, [data, selectedStateCode]);

  // Extract district options for selected state
  const districtOptions = useMemo(() => {
    if (!selectedStateCode) return [];
    const districtRows = stateFilteredData.filter(row => 
      row.District > 0 && 
      row.Subdistt === 0 && 
      row["Town/Village"] === 0 &&
      row.Name
    );
    return districtRows
      .map(row => ({ code: row.District, name: row.Name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [stateFilteredData, selectedStateCode]);

  // Get district code from selected district name
  const selectedDistrictCode = useMemo(() => {
    if (!selectedDistrict) return null;
    const districtRow = districtOptions.find(district => district.name === selectedDistrict);
    return districtRow?.code || null;
  }, [selectedDistrict, districtOptions]);

  // Extract subdistrict options for selected district
  const subdistrictOptions = useMemo(() => {
    if (!selectedDistrictCode) return [];
    const subdistrictRows = stateFilteredData.filter(row => 
      row.District === selectedDistrictCode && 
      row.Subdistt > 0 && 
      row["Town/Village"] === 0 &&
      row.Name
    );
    return subdistrictRows
      .map(row => ({ code: row.Subdistt, name: row.Name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [stateFilteredData, selectedDistrictCode]);

  // Get subdistrict code from selected subdistrict name
  const selectedSubdistrictCode = useMemo(() => {
    if (!selectedSubdistrict) return null;
    const subdistrictRow = subdistrictOptions.find(subdistrict => subdistrict.name === selectedSubdistrict);
    return subdistrictRow?.code || null;
  }, [selectedSubdistrict, subdistrictOptions]);

  // Get level options
  const levelOptions = useMemo(() => {
    const levels = [...new Set(data.map(row => row.Level).filter(Boolean))];
    return levels.sort();
  }, [data]);

  // Get TRU options (Total/Rural/Urban)
  const truOptions = useMemo(() => {
    const truValues = [...new Set(data.map(row => row.TRU).filter(Boolean))];
    return truValues.sort();
  }, [data]);

  // Calculate population range
  const populationBounds = useMemo(() => {
    const populations = data
      .map(row => Number(row.TOT_P) || 0)
      .filter(pop => pop > 0);
    
    if (populations.length === 0) return [0, 0];
    
    const min = Math.min(...populations);
    const max = Math.max(...populations);
    return [min, max];
  }, [data]);

  // Initialize population range
  useEffect(() => {
    if (populationBounds[0] !== populationBounds[1]) {
      setPopulationRange([populationBounds[0], populationBounds[1]]);
    }
  }, [populationBounds]);

  // Apply all filters
  useEffect(() => {
    let filtered = data;

    // State filter
    if (selectedStateCode) {
      filtered = filtered.filter(row => row.State === selectedStateCode);
    }

    // District filter
    if (selectedDistrictCode) {
      filtered = filtered.filter(row => row.District === selectedDistrictCode);
    }

    // Subdistrict filter
    if (selectedSubdistrictCode) {
      filtered = filtered.filter(row => row.Subdistt === selectedSubdistrictCode);
    }

    // Level filter
    if (selectedLevel) {
      filtered = filtered.filter(row => row.Level === selectedLevel);
    }

    // TRU filter
    if (selectedTRU) {
      filtered = filtered.filter(row => row.TRU === selectedTRU);
    }

    // Population range filter
    if (populationRange[0] !== populationBounds[0] || populationRange[1] !== populationBounds[1]) {
      filtered = filtered.filter(row => {
        const pop = Number(row.TOT_P) || 0;
        return pop >= populationRange[0] && pop <= populationRange[1];
      });
    }

    setFilteredData(filtered);
    onFilterChange(filtered);
  }, [
    data,
    selectedStateCode,
    selectedDistrictCode,
    selectedSubdistrictCode,
    selectedLevel,
    selectedTRU,
    populationRange,
    populationBounds,
    onFilterChange
  ]);

  const handleReset = () => {
    setSelectedState("");
    setSelectedDistrict("");
    setSelectedSubdistrict("");
    setSelectedLevel("");
    setSelectedTRU("");
    setPopulationRange([populationBounds[0], populationBounds[1]]);
  };

  // Calculate summary statistics
  const summaryStats = useMemo(() => {
    const totalRecords = filteredData.length;
    const totalPopulation = filteredData.reduce((sum, row) => sum + (Number(row.TOT_P) || 0), 0);
    const totalHouseholds = filteredData.reduce((sum, row) => sum + (Number(row.No_HH) || 0), 0);
    const totalLiterate = filteredData.reduce((sum, row) => sum + (Number(row.P_LIT) || 0), 0);
    const totalWorkers = filteredData.reduce((sum, row) => sum + (Number(row.TOT_WORK_P) || 0), 0);

    return {
      totalRecords,
      totalPopulation,
      totalHouseholds,
      totalLiterate,
      totalWorkers
    };
  }, [filteredData]);

  return (
    <div className="space-y-6">
      {/* Summary Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Summary Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
            <div>
              <div className="font-medium text-blue-600">{summaryStats.totalRecords.toLocaleString()}</div>
              <div className="text-gray-500">Total Records</div>
            </div>
            <div>
              <div className="font-medium text-green-600">{summaryStats.totalPopulation.toLocaleString()}</div>
              <div className="text-gray-500">Total Population</div>
            </div>
            <div>
              <div className="font-medium text-purple-600">{summaryStats.totalHouseholds.toLocaleString()}</div>
              <div className="text-gray-500">Total Households</div>
            </div>
            <div>
              <div className="font-medium text-orange-600">{summaryStats.totalLiterate.toLocaleString()}</div>
              <div className="text-gray-500">Total Literate</div>
            </div>
            <div>
              <div className="font-medium text-red-600">{summaryStats.totalWorkers.toLocaleString()}</div>
              <div className="text-gray-500">Total Workers</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            Advanced Filters
          </CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleReset}>
              Reset All
            </Button>
            {onDownload && (
              <Button variant="outline" size="sm" onClick={onDownload}>
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* State Filter */}
            <div className="space-y-2">
              <Label>State</Label>
              <Select value={selectedState || "__all__"} onValueChange={(val) => setSelectedState(val === "__all__" ? "" : val)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select state..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="__all__">All States</SelectItem>
                  {stateOptions.map((state) => (
                    <SelectItem key={state.code} value={state.name || `state-${state.code}`}>
                      {state.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* District Filter */}
            <div className="space-y-2">
              <Label>District</Label>
              <Select 
                value={selectedDistrict || "__all__"} 
                onValueChange={(val) => setSelectedDistrict(val === "__all__" ? "" : val)}
                disabled={!selectedState}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select district..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="__all__">All Districts</SelectItem>
                  {districtOptions.map((district) => (
                    <SelectItem key={district.code} value={district.name || `district-${district.code}`}>
                      {district.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Subdistrict Filter */}
            <div className="space-y-2">
              <Label>Subdistrict</Label>
              <Select 
                value={selectedSubdistrict || "__all__"} 
                onValueChange={(val) => setSelectedSubdistrict(val === "__all__" ? "" : val)}
                disabled={!selectedDistrict}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select subdistrict..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="__all__">All Subdistricts</SelectItem>
                  {subdistrictOptions.map((subdistrict) => (
                    <SelectItem key={subdistrict.code} value={subdistrict.name || `subdistrict-${subdistrict.code}`}>
                      {subdistrict.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Level Filter */}
            <div className="space-y-2">
              <Label>Level</Label>
              <Select value={selectedLevel || "__all__"} onValueChange={(val) => setSelectedLevel(val === "__all__" ? "" : val)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select level..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="__all__">All Levels</SelectItem>
                  {levelOptions.map((level) => (
                    <SelectItem key={level} value={level || `level-${level}`}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* TRU Filter */}
            <div className="space-y-2">
              <Label>Area Type (TRU)</Label>
              <Select value={selectedTRU || "__all__"} onValueChange={(val) => setSelectedTRU(val === "__all__" ? "" : val)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select area type..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="__all__">All Types</SelectItem>
                  {truOptions.map((tru) => (
                    <SelectItem key={tru} value={tru || `tru-${tru}`}>
                      {tru}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Population Range Filter */}
          {populationBounds[0] !== populationBounds[1] && (
            <div className="space-y-3">
              <Label>Population Range</Label>
              <div className="px-2">
                <Slider
                  value={populationRange}
                  onValueChange={(val) => setPopulationRange([val[0], val[1]])}
                  min={populationBounds[0]}
                  max={populationBounds[1]}
                  step={Math.max(1, Math.floor((populationBounds[1] - populationBounds[0]) / 1000))}
                  className="my-6"
                />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Label className="text-sm">Min:</Label>
                  <Input 
                    type="number" 
                    className="w-24" 
                    value={populationRange[0]}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      setPopulationRange([value, populationRange[1]]);
                    }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Label className="text-sm">Max:</Label>
                  <Input 
                    type="number" 
                    className="w-24" 
                    value={populationRange[1]}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      setPopulationRange([populationRange[0], value]);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CensusAdvancedFilters;
