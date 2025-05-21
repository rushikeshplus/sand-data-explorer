
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
import { filterData, getDatasetById } from "@/utils/mockData";

const DatasetDetail = () => {
  const { datasetId } = useParams<{ datasetId: string }>();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  const [chartType, setChartType] = useState<"bar" | "pie">("bar");
  const [chartMetric, setChartMetric] = useState<string>("population");
  const [chartGroupBy, setChartGroupBy] = useState<string>("state");
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [filters, setFilters] = useState<Record<string, string>>({});
  
  // Get dataset information based on ID
  const dataset = datasetId ? getDatasetById(datasetId) : null;
  
  useEffect(() => {
    if (dataset) {
      setFilteredData(dataset.data);
      
      // Set default chart metric based on available metrics
      if (dataset.metrics && dataset.metrics.length > 0) {
        setChartMetric(dataset.metrics[0].id);
      }
    }
  }, [datasetId, dataset]);
  
  if (!dataset || !datasetId) {
    return (
      <Layout>
        <div className="sand-page-container">
          <Alert className="bg-red-50 border-red-200">
            <Info className="h-4 w-4" />
            <AlertTitle>Dataset Not Found</AlertTitle>
            <AlertDescription>
              The requested dataset could not be found. Please select a valid dataset from the datasets page.
            </AlertDescription>
          </Alert>
        </div>
      </Layout>
    );
  }
  
  // Handle filter changes
  const handleFilterChange = (filterId: string, value: string) => {
    const newFilters = { ...filters, [filterId]: value };
    setFilters(newFilters);
    
    // Apply filters to data
    const newFilteredData = filterData(dataset.data, newFilters);
    setFilteredData(newFilteredData);
  };
  
  // Reset all filters
  const handleFilterReset = () => {
    setFilters({});
    setFilteredData(dataset.data);
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
        description: `${getDatasetTitle(datasetId)} has been downloaded successfully.`,
      });
    }, 1500);
  };
  
  // Get dataset title for display
  const getDatasetTitle = (id: string) => {
    const datasetInfo = getDatasetById(id);
    if (!datasetInfo) return "Dataset";
    
    const datasetMeta = getDatasetById(id);
    return datasetMeta?.columns[0]?.label || "Dataset";
  };
  
  // Prepare data for charts
  const chartData = prepareChartData(filteredData, chartGroupBy);
  
  // Calculate summary statistics if available
  const stats = dataset.getStats ? dataset.getStats(filteredData) : {};
  
  // Chart colors
  const CHART_COLORS = [
    "#0ea5e9", "#8b5cf6", "#f97316", "#10b981", "#f43f5e", 
    "#6366f1", "#ec4899", "#14b8a6", "#f59e0b", "#8b5cf6"
  ];
  
  // Helper function to prepare chart data
  function prepareChartData(data: any[], groupBy: string) {
    const groupedData: Record<string, number> = {};
    
    data.forEach(item => {
      const key = item[groupBy];
      if (!groupedData[key]) {
        groupedData[key] = 0;
      }
      
      // For numeric values, sum them
      if (typeof item[chartMetric] === 'number') {
        groupedData[key] += item[chartMetric];
      } 
      // For categorical values, count occurrences
      else {
        groupedData[key] = (groupedData[key] || 0) + 1;
      }
    });
    
    return Object.entries(groupedData).map(([name, value]) => ({
      name,
      value
    }));
  }
  
  // Find dataset metadata
  const datasetMeta = getDatasetById(datasetId);
  const datasetTitle = datasetMeta?.columns[0]?.label || "Dataset";
  
  // Get available grouping options based on dataset columns
  const groupByOptions = dataset.columns
    .filter(col => col.key !== chartMetric) // Can't group by the same column as the metric
    .map(col => ({ key: col.key, label: col.label }));

  return (
    <Layout>
      <div className="sand-page-container">
        <h1 className="sand-header">{getDatasetTitle(datasetId)}</h1>
        
        <div className="mb-6">
          <Alert className="bg-blue-50 border-blue-200">
            <Info className="h-4 w-4" />
            <AlertTitle>About this dataset</AlertTitle>
            <AlertDescription>
              {datasetId === 'census-2011' && "The Census 2011 dataset contains comprehensive demographic information collected during the 15th Indian National Census. It includes population counts, literacy rates, gender ratios, and urban/rural distribution across different states and districts."}
              {datasetId === 'village-gram-panchayat' && "The Village Gram Panchayat dataset contains information on village-level governance, including population statistics, household counts, agriculture land, irrigation coverage, and infrastructure status across various states and districts."}
              {datasetId === 'ngo-directory' && "The NGO Darpan Database contains comprehensive information about registered non-governmental organizations across India, including their focus sectors, registration details, geographical presence, and contact information."}
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
              {datasetId === 'census-2011' && (
                <>
                  <StatCard 
                    title="Total Population" 
                    value={(stats as any).totalPopulation?.toLocaleString() || '0'} 
                  />
                  <StatCard 
                    title="Average Literacy Rate" 
                    value={`${(stats as any).avgLiteracy?.toFixed(2) || '0'}%`} 
                  />
                  <StatCard 
                    title="Average Gender Ratio" 
                    value={(stats as any).avgGenderRatio?.toFixed(0) || '0'} 
                  />
                  <StatCard 
                    title="Urban Population" 
                    value={`${(stats as any).urbanPopulationPercentage?.toFixed(2) || '0'}%`} 
                  />
                </>
              )}
              
              {datasetId === 'village-gram-panchayat' && (
                <>
                  <StatCard 
                    title="Total Population" 
                    value={(stats as any).totalPopulation?.toLocaleString() || '0'} 
                  />
                  <StatCard 
                    title="Total Households" 
                    value={(stats as any).totalHouseholds?.toLocaleString() || '0'} 
                  />
                  <StatCard 
                    title="Agriculture Land" 
                    value={`${(stats as any).totalAgricultureLand?.toLocaleString() || '0'} hectares`} 
                  />
                  <StatCard 
                    title="Avg. Irrigation Coverage" 
                    value={`${(stats as any).avgIrrigationCoverage?.toFixed(2) || '0'}%`} 
                  />
                </>
              )}
              
              {datasetId === 'ngo-directory' && (
                <>
                  <StatCard 
                    title="Total NGOs" 
                    value={(stats as any).totalNgos?.toLocaleString() || '0'} 
                  />
                  <StatCard 
                    title="Education Sector NGOs" 
                    value={(stats as any).sectorCounts?.Education?.toLocaleString() || '0'} 
                  />
                  <StatCard 
                    title="Health Sector NGOs" 
                    value={(stats as any).sectorCounts?.Health?.toLocaleString() || '0'} 
                  />
                  <StatCard 
                    title="Avg. Establishment Year" 
                    value={(stats as any).avgYearEstablished?.toString() || '0'} 
                  />
                </>
              )}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ChartContainer
                  title={`${dataset.metrics.find(m => m.id === chartMetric)?.label || 'Data'} Distribution`}
                  description={`${dataset.metrics.find(m => m.id === chartMetric)?.label || 'Data'} distribution across ${chartGroupBy}`}
                >
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsBarChart
                      data={chartData}
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
                      <Bar 
                        dataKey="value" 
                        name={dataset.metrics.find(m => m.id === chartMetric)?.label || 'Value'} 
                        fill="#0ea5e9"
                      />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Key Insights</CardTitle>
                  <CardDescription>
                    Summary of important findings from the dataset
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    {datasetId === 'census-2011' && (
                      <>
                        <li className="flex gap-2">
                          <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-blue"></div>
                          <span>The data covers {filteredData.length} districts across {new Set(filteredData.map(d => d.state)).size} states.</span>
                        </li>
                        <li className="flex gap-2">
                          <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-teal"></div>
                          <span>The highest literacy rate is {Math.max(...filteredData.map(d => d.literacyRate)).toFixed(2)}% in {filteredData.sort((a, b) => b.literacyRate - a.literacyRate)[0].district}.</span>
                        </li>
                        <li className="flex gap-2">
                          <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-purple"></div>
                          <span>The average gender ratio across all districts is {(filteredData.reduce((sum, d) => sum + d.genderRatio, 0) / filteredData.length).toFixed(0)} females per 1000 males.</span>
                        </li>
                        <li className="flex gap-2">
                          <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-orange"></div>
                          <span>The districts with 100% urbanization include Mumbai and Chennai.</span>
                        </li>
                      </>
                    )}
                    
                    {datasetId === 'village-gram-panchayat' && (
                      <>
                        <li className="flex gap-2">
                          <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-blue"></div>
                          <span>The data covers {filteredData.length} gram panchayats across {new Set(filteredData.map(d => d.state)).size} states.</span>
                        </li>
                        <li className="flex gap-2">
                          <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-teal"></div>
                          <span>The average household size is {(filteredData.reduce((sum, d) => sum + (d.population || 0), 0) / filteredData.reduce((sum, d) => sum + (d.householdCount || 0), 0)).toFixed(2)} persons.</span>
                        </li>
                        <li className="flex gap-2">
                          <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-purple"></div>
                          <span>Road connectivity is rated as "Good" in {filteredData.filter(d => d.roadConnectivity === "Good").length} gram panchayats.</span>
                        </li>
                        <li className="flex gap-2">
                          <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-orange"></div>
                          <span>The average irrigated land is {(filteredData.reduce((sum, d) => sum + ((d.agricultureLand || 0) * (d.irrigationCoverage || 0) / 100), 0)).toFixed(2)} hectares.</span>
                        </li>
                      </>
                    )}
                    
                    {datasetId === 'ngo-directory' && (
                      <>
                        <li className="flex gap-2">
                          <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-blue"></div>
                          <span>The data covers {filteredData.length} NGOs across {new Set(filteredData.map(d => d.state)).size} states.</span>
                        </li>
                        <li className="flex gap-2">
                          <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-teal"></div>
                          <span>The most common sector is {Object.entries((stats as any).sectorCounts || {}).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'}.</span>
                        </li>
                        <li className="flex gap-2">
                          <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-purple"></div>
                          <span>The state with the most NGOs is {Object.entries((stats as any).stateDistribution || {}).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'}.</span>
                        </li>
                        <li className="flex gap-2">
                          <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-orange"></div>
                          <span>The oldest NGO was established in {Math.min(...filteredData.map(d => d.yearEstablished))}.</span>
                        </li>
                      </>
                    )}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="data">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/4">
                <FilterPanel 
                  filters={dataset.filterOptions}
                  onFilterChange={handleFilterChange}
                  onReset={handleFilterReset}
                />
              </div>
              
              <div className="lg:w-3/4">
                <DataTable 
                  data={filteredData}
                  columns={dataset.columns}
                  onDownload={handleDownload}
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="visualize">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/4">
                <FilterPanel 
                  filters={dataset.filterOptions}
                  onFilterChange={handleFilterChange}
                  onReset={handleFilterReset}
                />
              </div>
              
              <div className="lg:w-3/4 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {dataset.metrics.map((metric) => (
                    <Card 
                      key={metric.id}
                      className={`cursor-pointer ${chartMetric === metric.id ? "border-sand-teal" : ""}`}
                      onClick={() => setChartMetric(metric.id)}
                    >
                      <CardContent className="p-4">
                        <div className="font-medium">{metric.label}</div>
                        <div className="text-sm text-gray-500">
                          {metric.id === 'population' && 'Total number of people'}
                          {metric.id === 'literacyRate' && 'Percentage of literate people'}
                          {metric.id === 'genderRatio' && 'Females per 1000 males'}
                          {metric.id === 'householdCount' && 'Number of households'}
                          {metric.id === 'agricultureLand' && 'Agricultural area in hectares'}
                          {metric.id === 'irrigationCoverage' && 'Percentage of irrigated land'}
                          {metric.id === 'sector' && 'Focus area of the organization'}
                          {metric.id === 'state' && 'State of operation'}
                          {metric.id === 'yearEstablished' && 'Year of establishment'}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
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
                    onClick={() => {
                      const currentIndex = groupByOptions.findIndex(opt => opt.key === chartGroupBy);
                      const nextIndex = (currentIndex + 1) % groupByOptions.length;
                      setChartGroupBy(groupByOptions[nextIndex]?.key || 'state');
                    }}
                    className="p-2 border rounded flex items-center gap-1"
                  >
                    <Filter className="h-4 w-4" />
                    <span className="text-sm">Group by: {groupByOptions.find(opt => opt.key === chartGroupBy)?.label || 'State'}</span>
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
                          angle={chartGroupBy === "district" || chartGroupBy === "gramPanchayat" ? -45 : 0} 
                          textAnchor={chartGroupBy === "district" || chartGroupBy === "gramPanchayat" ? "end" : "middle"}
                          height={60}
                        />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar 
                          dataKey="value" 
                          name={dataset.metrics.find(m => m.id === chartMetric)?.label || 'Value'}
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
