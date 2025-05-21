
// Census 2011 mock data
export const censusData = [
  {
    state: "Andhra Pradesh",
    district: "Anantapur",
    population: 4083315,
    literacyRate: 64.28,
    genderRatio: 977,
    urbanPopulation: 28.07
  },
  {
    state: "Andhra Pradesh",
    district: "Chittoor",
    population: 4170468,
    literacyRate: 71.53,
    genderRatio: 997,
    urbanPopulation: 29.59
  },
  {
    state: "Andhra Pradesh",
    district: "East Godavari",
    population: 5154296,
    literacyRate: 70.99,
    genderRatio: 1006,
    urbanPopulation: 25.46
  },
  {
    state: "Karnataka",
    district: "Bangalore",
    population: 9621551,
    literacyRate: 87.67,
    genderRatio: 908,
    urbanPopulation: 90.94
  },
  {
    state: "Karnataka",
    district: "Mysore",
    population: 3001127,
    literacyRate: 72.56,
    genderRatio: 982,
    urbanPopulation: 41.39
  },
  {
    state: "Tamil Nadu",
    district: "Chennai",
    population: 4646732,
    literacyRate: 90.33,
    genderRatio: 989,
    urbanPopulation: 100
  },
  {
    state: "Tamil Nadu",
    district: "Coimbatore",
    population: 3458045,
    literacyRate: 83.98,
    genderRatio: 1000,
    urbanPopulation: 75.93
  },
  {
    state: "Maharashtra",
    district: "Mumbai",
    population: 12442373,
    literacyRate: 89.21,
    genderRatio: 838,
    urbanPopulation: 100
  },
  {
    state: "Maharashtra",
    district: "Pune",
    population: 9426959,
    literacyRate: 86.15,
    genderRatio: 910,
    urbanPopulation: 60.89
  },
  {
    state: "Kerala",
    district: "Ernakulam",
    population: 3282388,
    literacyRate: 95.68,
    genderRatio: 1027,
    urbanPopulation: 68.07
  },
  {
    state: "Kerala",
    district: "Thiruvananthapuram",
    population: 3301427,
    literacyRate: 92.66,
    genderRatio: 1088,
    urbanPopulation: 53.63
  },
  {
    state: "Gujarat",
    district: "Ahmedabad",
    population: 7208200,
    literacyRate: 85.31,
    genderRatio: 903,
    urbanPopulation: 72.83
  },
  {
    state: "West Bengal",
    district: "Kolkata",
    population: 4486679,
    literacyRate: 87.14,
    genderRatio: 899,
    urbanPopulation: 100
  },
  {
    state: "Delhi",
    district: "New Delhi",
    population: 11034555,
    literacyRate: 86.21,
    genderRatio: 875,
    urbanPopulation: 97.50
  },
  {
    state: "Uttar Pradesh",
    district: "Lucknow",
    population: 4589838,
    literacyRate: 77.29,
    genderRatio: 917,
    urbanPopulation: 65.97
  }
];

// Datasets metadata
export const availableDatasets = [
  {
    id: "census-2011",
    title: "Census 2011 Data",
    description: "Comprehensive demographic data from the 2011 Census of India, including population, literacy rates, gender ratios, and urban/rural distribution.",
    source: "Census of India",
    recordCount: 640,
    lastUpdated: "2022-05-15",
    category: "Demographics",
    isNew: false
  },
  {
    id: "health-indicators",
    title: "Women Health Indicators",
    description: "Health indicators for women across different states and districts including maternal health, nutrition status, and healthcare access.",
    source: "Ministry of Health and Family Welfare",
    recordCount: 420,
    lastUpdated: "2023-11-10",
    category: "Health",
    isNew: true
  },
  {
    id: "ngo-directory",
    title: "NGO Darpan Database",
    description: "Comprehensive directory of registered non-governmental organizations across India with their focus areas, registration details, and geographical coverage.",
    source: "NITI Aayog",
    recordCount: 1240,
    lastUpdated: "2023-08-22",
    category: "Civil Society",
    isNew: true
  }
];

// For summary statistics calculation
export const getSummaryStats = (data: any[]) => {
  const totalPopulation = data.reduce((sum, item) => sum + item.population, 0);
  const avgLiteracy = data.reduce((sum, item) => sum + item.literacyRate, 0) / data.length;
  const avgGenderRatio = data.reduce((sum, item) => sum + item.genderRatio, 0) / data.length;
  const urbanPopulationPercentage = data.reduce((sum, item) => sum + (item.population * item.urbanPopulation / 100), 0) / totalPopulation * 100;
  
  return {
    totalPopulation,
    avgLiteracy,
    avgGenderRatio,
    urbanPopulationPercentage
  };
};

// Get unique values for filters
export const getUniqueValues = (data: any[], key: string): string[] => {
  const values = [...new Set(data.map(item => item[key]))];
  return values.sort();
};

// Filter data based on selected filters
export const filterData = (data: any[], filters: Record<string, string>) => {
  return data.filter(item => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true; // Skip if no filter value selected
      return item[key] === value;
    });
  });
};

// Prepare chart data
export const prepareChartData = (data: any[], groupBy: string, valueField: string) => {
  const groupedData: Record<string, number> = {};
  
  data.forEach(item => {
    const key = item[groupBy];
    if (!groupedData[key]) {
      groupedData[key] = 0;
    }
    groupedData[key] += item[valueField];
  });
  
  return Object.entries(groupedData).map(([name, value]) => ({
    name,
    value
  }));
};
