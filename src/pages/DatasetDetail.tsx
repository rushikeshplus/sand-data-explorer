
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import DataTable from "@/components/dataset/DataTable";
import FilterPanel from "@/components/dataset/FilterPanel";
import CensusAdvancedFilters from "@/components/dataset/CensusAdvancedFilters";
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
import { supabase } from "@/integrations/supabase/client";

const DatasetDetail = () => {
  const { datasetId } = useParams<{ datasetId: string }>();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  const [chartType, setChartType] = useState<"bar" | "pie">("bar");
  const [chartMetric, setChartMetric] = useState<string>("TOT_P");
  const [chartGroupBy, setChartGroupBy] = useState<string>("State");
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [supabaseData, setSupabaseData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  
  // Get dataset information based on ID
  const dataset = datasetId ? getDatasetById(datasetId) : null;
  
  // Fetch data from Supabase for census-2011
  useEffect(() => {
    const fetchSupabaseData = async () => {
      if (datasetId === 'census-2011') {
        setLoading(true);
        try {
          const { data, error } = await supabase
            .from('Cencus_2011')
            .select('*');
          
          if (error) {
            console.error('Error fetching Supabase data:', error);
            toast({
              title: "Error",
              description: "Failed to fetch data from database",
              variant: "destructive"
            });
          } else {
            console.log('Fetched Supabase data:', data);
            setSupabaseData(data || []);
          }
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchSupabaseData();
  }, [datasetId, toast]);
  
  useEffect(() => {
    if (dataset) {
      // Use Supabase data for census-2011, otherwise use mock data
      const dataToUse = datasetId === 'census-2011' && supabaseData.length > 0 
        ? supabaseData 
        : dataset.data;
      
      setFilteredData(dataToUse);
      
      // Set default chart metric based on available metrics
      if (dataset.metrics && dataset.metrics.length > 0) {
        setChartMetric(dataset.metrics[0].id);
      }
    }
  }, [datasetId, dataset, supabaseData]);
  
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
  
  // Handle filter changes for non-census datasets
  const handleFilterChange = (filterId: string, value: string) => {
    const newFilters = { ...filters, [filterId]: value };
    setFilters(newFilters);
    
    // Use appropriate data source
    const sourceData = datasetId === 'census-2011' && supabaseData.length > 0 
      ? supabaseData 
      : dataset.data;
    
    // Apply filters to data
    const newFilteredData = filterData(sourceData, newFilters);
    setFilteredData(newFilteredData);
  };
  
  // Handle advanced filter changes for census data
  const handleCensusFilterChange = (newFilteredData: any[]) => {
    setFilteredData(newFilteredData);
  };
  
  // Reset all filters
  const handleFilterReset = () => {
    setFilters({});
    const sourceData = datasetId === 'census-2011' && supabaseData.length > 0 
      ? supabaseData 
      : dataset.data;
    setFilteredData(sourceData);
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
    
    if (id === 'census-2011') return "Census 2011 Data";
    if (id === 'village-gram-panchayat') return "Village Gram Panchayat";
    if (id === 'ngo-directory') return "NGO Directory";
    return "Dataset";
  };
  
  // Prepare data for charts
  const chartData = prepareChartData(filteredData, chartGroupBy);
  
  // Calculate summary statistics
  const stats = calculateStats(filteredData, datasetId);
  
  // Chart colors
  const CHART_COLORS = [
    "#0ea5e9", "#8b5cf6", "#f97316", "#10b981", "#f43f5e", 
    "#6366f1", "#ec4899", "#14b8a6", "#f59e0b", "#8b5cf6"
  ];
  
  // Helper function to prepare chart data
  function prepareChartData(data: any[], groupBy: string) {
    const groupedData: Record<string, number> = {};
    
    data.forEach(item => {
      const key = item[groupBy] || 'Unknown';
      if (!groupedData[key]) {
        groupedData[key] = 0;
      }
      
      // For numeric values, sum them
      const metricValue = Number(item[chartMetric]) || 0;
      if (typeof metricValue === 'number') {
        groupedData[key] += metricValue;
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

  // Helper function to calculate statistics
  function calculateStats(data: any[], datasetId: string) {
    if (datasetId === 'census-2011') {
      const totalPopulation = data.reduce((sum, item) => sum + (Number(item.TOT_P) || 0), 0);
      const totalLiterate = data.reduce((sum, item) => sum + (Number(item.P_LIT) || 0), 0);
      const totalMales = data.reduce((sum, item) => sum + (Number(item.TOT_M) || 0), 0);
      const totalFemales = data.reduce((sum, item) => sum + (Number(item.TOT_F) || 0), 0);
      
      const avgLiteracy = totalPopulation > 0 ? (totalLiterate / totalPopulation) * 100 : 0;
      const avgGenderRatio = totalMales > 0 ? (totalFemales / totalMales) * 1000 : 0;
      
      const urbanAreas = data.filter(d => d.TRU === "Urban");
      const urbanPopulation = urbanAreas.reduce((sum, item) => sum + (Number(item.TOT_P) || 0), 0);
      const urbanPopulationPercentage = totalPopulation > 0 ? (urbanPopulation / totalPopulation) * 100 : 0;
      
      return {
        totalPopulation,
        avgLiteracy,
        avgGenderRatio,
        urbanPopulationPercentage
      };
    }
    
    if (datasetId === 'village-gram-panchayat') {
      const totalPopulation = data.reduce((sum, item) => sum + (Number(item.population) || 0), 0);
      const totalHouseholds = data.reduce((sum, item) => sum + (Number(item.householdCount) || 0), 0);
      const totalAgricultureLand = data.reduce((sum, item) => sum + (Number(item.agricultureLand) || 0), 0);
      const avgIrrigationCoverage = data.length > 0 ? data.reduce((sum, item) => sum + (Number(item.irrigationCoverage) || 0), 0) / data.length : 0;
      
      return {
        totalPopulation,
        totalHouseholds,
        totalAgricultureLand,
        avgIrrigationCoverage
      };
    }
    
    if (datasetId === 'ngo-directory') {
      const totalNgos = data.length;
      const sectorCounts: Record<string, number> = {};
      
      data.forEach(ngo => {
        const sector = ngo.sector || 'Unknown';
        sectorCounts[sector] = (sectorCounts[sector] || 0) + 1;
      });
      
      const avgYearEstablished = data.length > 0 ? Math.round(
        data.reduce((sum, item) => sum + (Number(item.yearEstablished) || 0), 0) / data.length
      ) : 0;
      
      return {
        totalNgos,
        sectorCounts,
        avgYearEstablished
      };
    }
    
    return {};
  }
  
  // Get available grouping options based on dataset columns
  const groupByOptions = dataset.columns
    .filter(col => col.key !== chartMetric) // Can't group by the same column as the metric
    .map(col => ({ key: col.key, label: col.label }));

  const sourceData = datasetId === 'census-2011' && supabaseData.length > 0 
    ? supabaseData 
    : dataset.data;

  if (loading) {
    return (
      <Layout>
        <div className="sand-page-container">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-lg">Loading census data...</div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="sand-page-container">
        <div className="flex justify-between items-center mb-6">
          <h1 className="sand-header">
            {getDatasetTitle(datasetId)}
            {datasetId === 'census-2011' && supabaseData.length > 0 && (
              <span className="text-sm text-green-600 ml-2">
                (Connected to Supabase - {supabaseData.length} records)
              </span>
            )}
          </h1>
        </div>
        
        {/* Show advanced filters for Census 2011 data */}
        {datasetId === 'census-2011' && sourceData.length > 0 && (
          <div className="mb-6">
            <CensusAdvancedFilters
              data={sourceData}
              onFilterChange={handleCensusFilterChange}
              onDownload={handleDownload}
            />
          </div>
        )}
        
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
                    value={stats.totalPopulation?.toLocaleString() || '0'} 
                  />
                  <StatCard 
                    title="Average Literacy Rate" 
                    value={`${stats.avgLiteracy?.toFixed(2) || '0'}%`} 
                  />
                  <StatCard 
                    title="Average Gender Ratio" 
                    value={stats.avgGenderRatio?.toFixed(0) || '0'} 
                  />
                  <StatCard 
                    title="Urban Population" 
                    value={`${stats.urbanPopulationPercentage?.toFixed(2) || '0'}%`} 
                  />
                </>
              )}
              
              {datasetId === 'village-gram-panchayat' && (
                <>
                  <StatCard 
                    title="Total Population" 
                    value={stats.totalPopulation?.toLocaleString() || '0'} 
                  />
                  <StatCard 
                    title="Total Households" 
                    value={stats.totalHouseholds?.toLocaleString() || '0'} 
                  />
                  <StatCard 
                    title="Agriculture Land" 
                    value={`${stats.totalAgricultureLand?.toLocaleString() || '0'} hectares`} 
                  />
                  <StatCard 
                    title="Avg. Irrigation Coverage" 
                    value={`${stats.avgIrrigationCoverage?.toFixed(2) || '0'}%`} 
                  />
                </>
              )}
              
              {datasetId === 'ngo-directory' && (
                <>
                  <StatCard 
                    title="Total NGOs" 
                    value={stats.totalNgos?.toLocaleString() || '0'} 
                  />
                  <StatCard 
                    title="Education Sector NGOs" 
                    value={stats.sectorCounts?.Education?.toLocaleString() || '0'} 
                  />
                  <StatCard 
                    title="Health Sector NGOs" 
                    value={stats.sectorCounts?.Health?.toLocaleString() || '0'} 
                  />
                  <StatCard 
                    title="Avg. Establishment Year" 
                    value={stats.avgYearEstablished?.toString() || '0'} 
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
                          <span>The data covers {filteredData.length} areas across {new Set(filteredData.map(d => d.State)).size} states.</span>
                        </li>
                        <li className="flex gap-2">
                          <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-teal"></div>
                          <span>Total population: {stats.totalPopulation?.toLocaleString()}</span>
                        </li>
                        <li className="flex gap-2">
                          <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-purple"></div>
                          <span>Average literacy rate: {stats.avgLiteracy?.toFixed(2)}%</span>
                        </li>
                        <li className="flex gap-2">
                          <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-orange"></div>
                          <span>Urban population: {stats.urbanPopulationPercentage?.toFixed(2)}%</span>
                        </li>
                      </>
                    )}
                    
                    {datasetId === 'village-gram-panchayat' && (
                      <>
                        <li className="flex gap-2">
                          <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-blue"></div>
                          <span>The data covers {filteredData.length} gram panchayats.</span>
                        </li>
                        <li className="flex gap-2">
                          <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-teal"></div>
                          <span>Total population: {stats.totalPopulation?.toLocaleString()}</span>
                        </li>
                        <li className="flex gap-2">
                          <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-purple"></div>
                          <span>Total households: {stats.totalHouseholds?.toLocaleString()}</span>
                        </li>
                        <li className="flex gap-2">
                          <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-orange"></div>
                          <span>Agriculture land: {stats.totalAgricultureLand?.toLocaleString()} hectares</span>
                        </li>
                      </>
                    )}
                    
                    {datasetId === 'ngo-directory' && (
                      <>
                        <li className="flex gap-2">
                          <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-blue"></div>
                          <span>The data covers {filteredData.length} NGOs.</span>
                        </li>
                        <li className="flex gap-2">
                          <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-teal"></div>
                          <span>Total NGOs: {stats.totalNgos?.toLocaleString()}</span>
                        </li>
                        <li className="flex gap-2">
                          <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-purple"></div>
                          <span>Average establishment year: {stats.avgYearEstablished}</span>
                        </li>
                        <li className="flex gap-2">
                          <div className="mt-0.5 h-2 w-2 rounded-full bg-sand-orange"></div>
                          <span>Most common sector: {Object.entries(stats.sectorCounts || {}).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'}</span>
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
              {datasetId !== 'census-2011' && (
                <div className="lg:w-1/4">
                  <FilterPanel 
                    filters={dataset.filterOptions}
                    onFilterChange={handleFilterChange}
                    onReset={handleFilterReset}
                  />
                </div>
              )}
              
              <div className={datasetId === 'census-2011' ? "w-full" : "lg:w-3/4"}>
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
                          {metric.id === 'TOT_P' && 'Total population count'}
                          {metric.id === 'P_LIT' && 'Number of literate people'}
                          {metric.id === 'No_HH' && 'Number of households'}
                          {metric.id === 'TOT_WORK_P' && 'Total working population'}
                          {metric.id === 'TOT_M' && 'Total male population'}
                          {metric.id === 'TOT_F' && 'Total female population'}
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
                      setChartGroupBy(groupByOptions[nextIndex]?.key || 'State');
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
                          angle={chartGroupBy === "District" || chartGroupBy === "Name" ? -45 : 0} 
                          textAnchor={chartGroupBy === "District" || chartGroupBy === "Name" ? "end" : "middle"}
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
