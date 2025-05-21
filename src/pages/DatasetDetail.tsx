
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import DataTable from "@/components/dataset/DataTable";
import FilterPanel from "@/components/dataset/FilterPanel";
import StatCard from "@/components/dataset/StatCard";
import ChartContainer from "@/components/dataset/ChartContainer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { BarChart, PieChart, Filter, Download, Info } from "lucide-react";
import {
  Bar,
  BarChart as RechartsBarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  Pie, 
  PieChart as RechartsPieChart
} from "recharts";
import { censusData, getUniqueValues, filterData, getSummaryStats, prepareChartData } from "@/utils/mockData";

const DatasetDetail = () => {
  const { datasetId } = useParams<{ datasetId: string }>();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  const [chartType, setChartType] = useState<"bar" | "pie">("bar");
  const [chartMetric, setChartMetric] = useState<"population" | "literacyRate" | "genderRatio">("population");
  const [chartGroupBy, setChartGroupBy] = useState<"state" | "district">("state");
  const [filteredData, setFilteredData] = useState(censusData);
  const [filters, setFilters] = useState<Record<string, string>>({});
  
  // Get unique values for filters
  const states = getUniqueValues(censusData, "state");
  
  // Prepare filter options
  const filterOptions = [
    {
      id: "state",
      label: "State",
      options: states.map(state => ({ value: state, label: state }))
    }
  ];

  // Handle filter changes
  const handleFilterChange = (filterId: string, value: string) => {
    const newFilters = { ...filters, [filterId]: value };
    setFilters(newFilters);
    
    // Apply filters to data
    const newFilteredData = filterData(censusData, newFilters);
    setFilteredData(newFilteredData);
  };
  
  // Reset all filters
  const handleFilterReset = () => {
    setFilters({});
    setFilteredData(censusData);
  };
  
  // Handle download action
  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Your data is being prepared for download...",
    });
    
    // In a real app, this would generate and download a file
    setTimeout(() => {
      toast({
        title: "Download Complete",
        description: "Census data has been downloaded successfully.",
      });
    }, 1500);
  };
  
  // Prepare data for charts
  const chartData = prepareChartData(filteredData, chartGroupBy, chartMetric);
  
  // Calculate summary statistics
  const stats = getSummaryStats(filteredData);
  
  // Chart colors
  const CHART_COLORS = [
    "#0ea5e9", "#8b5cf6", "#f97316", "#10b981", "#f43f5e", 
    "#6366f1", "#ec4899", "#14b8a6", "#f59e0b", "#8b5cf6"
  ];
  
  // Define table columns
  const tableColumns = [
    { key: "state", label: "State" },
    { key: "district", label: "District" },
    { key: "population", label: "Population" },
    { key: "literacyRate", label: "Literacy Rate (%)" },
    { key: "genderRatio", label: "Gender Ratio" },
    { key: "urbanPopulation", label: "Urban Population (%)" }
  ];

  return (
    <Layout>
      <div className="sand-page-container">
        <h1 className="sand-header">Census 2011 Data</h1>
        
        <div className="mb-6">
          <Alert className="bg-blue-50 border-blue-200">
            <Info className="h-4 w-4" />
            <AlertTitle>About this dataset</AlertTitle>
            <AlertDescription>
              The Census 2011 dataset contains comprehensive demographic information collected during the 15th Indian National Census. 
              It includes population counts, literacy rates, gender ratios, and urban/rural distribution across different states and districts.
            </AlertDescription>
          </Alert>
        </div>
        
        <Tabs
          defaultValue="overview"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="data">Data</TabsTrigger>
            <TabsTrigger value="visualize">Visualize</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard 
                title="Total Population" 
                value={stats.totalPopulation.toLocaleString()} 
              />
              <StatCard 
                title="Average Literacy Rate" 
                value={`${stats.avgLiteracy.toFixed(2)}%`} 
              />
              <StatCard 
                title="Average Gender Ratio" 
                value={stats.avgGenderRatio.toFixed(0)} 
              />
              <StatCard 
                title="Urban Population" 
                value={`${stats.urbanPopulationPercentage.toFixed(2)}%`} 
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ChartContainer
                  title="Population Distribution"
                  description="Population distribution across states"
                >
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsBarChart
                      data={prepareChartData(filteredData, "state", "population")}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" name="Population" fill="#0ea5e9" />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Key Insights</CardTitle>
                  <CardDescription>
                    Summary of important findings from the census data
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-2">
                      <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-blue"></div>
                      <span>The data covers {filteredData.length} districts across {states.length} states.</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-teal"></div>
                      <span>The highest literacy rate is {Math.max(...filteredData.map(d => d.literacyRate)).toFixed(2)}% in {filteredData.sort((a, b) => b.literacyRate - a.literacyRate)[0].district}.</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-purple"></div>
                      <span>The average gender ratio across all districts is {stats.avgGenderRatio.toFixed(0)} females per 1000 males.</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-orange"></div>
                      <span>Mumbai has the highest urban population with 100% urbanization.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="data">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/4">
                <FilterPanel 
                  filters={filterOptions}
                  onFilterChange={handleFilterChange}
                  onReset={handleFilterReset}
                />
              </div>
              
              <div className="lg:w-3/4">
                <DataTable 
                  data={filteredData}
                  columns={tableColumns}
                  onDownload={handleDownload}
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="visualize">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/4">
                <FilterPanel 
                  filters={filterOptions}
                  onFilterChange={handleFilterChange}
                  onReset={handleFilterReset}
                />
              </div>
              
              <div className="lg:w-3/4 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card 
                    className={`cursor-pointer ${chartMetric === "population" ? "border-sand-teal" : ""}`}
                    onClick={() => setChartMetric("population")}
                  >
                    <CardContent className="p-4">
                      <div className="font-medium">Population</div>
                      <div className="text-sm text-gray-500">Total number of people</div>
                    </CardContent>
                  </Card>
                  
                  <Card 
                    className={`cursor-pointer ${chartMetric === "literacyRate" ? "border-sand-teal" : ""}`}
                    onClick={() => setChartMetric("literacyRate")}
                  >
                    <CardContent className="p-4">
                      <div className="font-medium">Literacy Rate</div>
                      <div className="text-sm text-gray-500">Percentage of literate people</div>
                    </CardContent>
                  </Card>
                  
                  <Card 
                    className={`cursor-pointer ${chartMetric === "genderRatio" ? "border-sand-teal" : ""}`}
                    onClick={() => setChartMetric("genderRatio")}
                  >
                    <CardContent className="p-4">
                      <div className="font-medium">Gender Ratio</div>
                      <div className="text-sm text-gray-500">Females per 1000 males</div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex justify-end gap-2">
                  <button 
                    onClick={() => setChartType("bar")}
                    className={`p-2 border rounded ${chartType === "bar" ? "bg-muted" : ""}`}
                  >
                    <BarChart className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => setChartType("pie")}
                    className={`p-2 border rounded ${chartType === "pie" ? "bg-muted" : ""}`}
                  >
                    <PieChart className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => setChartGroupBy(prev => prev === "state" ? "district" : "state")}
                    className="p-2 border rounded flex items-center gap-1"
                  >
                    <Filter className="h-4 w-4" />
                    <span className="text-sm">{chartGroupBy === "state" ? "Group by State" : "Group by District"}</span>
                  </button>
                </div>
                
                <div className="bg-white p-4 rounded-lg border min-h-[400px]">
                  {chartType === "bar" ? (
                    <ResponsiveContainer width="100%" height={400}>
                      <RechartsBarChart
                        data={chartData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 60,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          dataKey="name" 
                          angle={chartGroupBy === "district" ? -45 : 0} 
                          textAnchor={chartGroupBy === "district" ? "end" : "middle"}
                          height={60}
                        />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar 
                          dataKey="value" 
                          name={
                            chartMetric === "population" ? "Population" :
                            chartMetric === "literacyRate" ? "Literacy Rate (%)" : 
                            "Gender Ratio"
                          }
                          fill="#0ea5e9" 
                        >
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                          ))}
                        </Bar>
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  ) : (
                    <ResponsiveContainer width="100%" height={400}>
                      <RechartsPieChart>
                        <Pie
                          data={chartData}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={150}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => new Intl.NumberFormat().format(value as number)} />
                        <Legend />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default DatasetDetail;
