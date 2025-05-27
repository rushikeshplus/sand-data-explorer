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

// Village Gram Panchayat data
export const gramPanchayatData = [
  {
    state: "Uttar Pradesh",
    district: "Varanasi",
    gramPanchayat: "Araji Line",
    population: 2500,
    householdCount: 490,
    agricultureLand: 320, // in hectares
    irrigationCoverage: 75.5, // percentage
    roadConnectivity: "Good"
  },
  {
    state: "Uttar Pradesh",
    district: "Lucknow",
    gramPanchayat: "Malihabad",
    population: 3200,
    householdCount: 640,
    agricultureLand: 450,
    irrigationCoverage: 68.2,
    roadConnectivity: "Average"
  },
  {
    state: "Bihar",
    district: "Patna",
    gramPanchayat: "Bihta",
    population: 4100,
    householdCount: 820,
    agricultureLand: 510,
    irrigationCoverage: 45.8,
    roadConnectivity: "Poor"
  },
  {
    state: "Bihar",
    district: "Gaya",
    gramPanchayat: "Manpur",
    population: 1800,
    householdCount: 360,
    agricultureLand: 280,
    irrigationCoverage: 38.5,
    roadConnectivity: "Poor"
  },
  {
    state: "Rajasthan",
    district: "Jaipur",
    gramPanchayat: "Amber",
    population: 2900,
    householdCount: 580,
    agricultureLand: 420,
    irrigationCoverage: 52.3,
    roadConnectivity: "Average"
  },
  {
    state: "Rajasthan",
    district: "Jodhpur",
    gramPanchayat: "Phalodi",
    population: 1500,
    householdCount: 300,
    agricultureLand: 180,
    irrigationCoverage: 28.7,
    roadConnectivity: "Poor"
  },
  {
    state: "Maharashtra",
    district: "Pune",
    gramPanchayat: "Velhe",
    population: 3600,
    householdCount: 720,
    agricultureLand: 480,
    irrigationCoverage: 72.4,
    roadConnectivity: "Good"
  },
  {
    state: "Maharashtra",
    district: "Nagpur",
    gramPanchayat: "Ramtek",
    population: 2700,
    householdCount: 540,
    agricultureLand: 350,
    irrigationCoverage: 64.1,
    roadConnectivity: "Good"
  }
];

// NGO Directory data
export const ngoData = [
  {
    name: "Rural Development Trust",
    state: "Andhra Pradesh",
    district: "Anantapur",
    registrationNumber: "AP1234",
    sector: "Education",
    yearEstablished: 1996,
    contactPerson: "Ramesh Kumar",
    contactEmail: "info@ruraltrust.org"
  },
  {
    name: "Women Empowerment Foundation",
    state: "Karnataka",
    district: "Bangalore",
    registrationNumber: "KA5678",
    sector: "Women's Rights",
    yearEstablished: 2005,
    contactPerson: "Priya Sharma",
    contactEmail: "contact@wef.org"
  },
  {
    name: "Clean Water Initiative",
    state: "Tamil Nadu",
    district: "Chennai",
    registrationNumber: "TN9012",
    sector: "Health",
    yearEstablished: 2010,
    contactPerson: "Samuel Johnson",
    contactEmail: "info@cleanwater.org"
  },
  {
    name: "Green Earth Society",
    state: "Maharashtra",
    district: "Mumbai",
    registrationNumber: "MH3456",
    sector: "Environment",
    yearEstablished: 2008,
    contactPerson: "Anita Desai",
    contactEmail: "contact@greenearth.org"
  },
  {
    name: "Child Welfare Association",
    state: "Kerala",
    district: "Ernakulam",
    registrationNumber: "KL7890",
    sector: "Child Rights",
    yearEstablished: 2001,
    contactPerson: "Thomas Kurian",
    contactEmail: "info@childwelfare.org"
  },
  {
    name: "Digital Literacy Mission",
    state: "Gujarat",
    district: "Ahmedabad",
    registrationNumber: "GJ1234",
    sector: "Education",
    yearEstablished: 2015,
    contactPerson: "Amit Patel",
    contactEmail: "contact@dlm.org"
  },
  {
    name: "Healthcare For All",
    state: "West Bengal",
    district: "Kolkata",
    registrationNumber: "WB5678",
    sector: "Health",
    yearEstablished: 2007,
    contactPerson: "Suchitra Sen",
    contactEmail: "info@healthcareforall.org"
  },
  {
    name: "Rural Innovation Hub",
    state: "Delhi",
    district: "New Delhi",
    registrationNumber: "DL9012",
    sector: "Rural Development",
    yearEstablished: 2012,
    contactPerson: "Vikram Singh",
    contactEmail: "contact@ruralinnovation.org"
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
    id: "village-gram-panchayat",
    title: "Village Gram Panchayat",
    description: "Information on village-level governance, including population, household counts, agriculture land, irrigation coverage, and infrastructure status.",
    source: "Ministry of Panchayati Raj",
    recordCount: 420,
    lastUpdated: "2023-11-10",
    category: "Governance",
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

// For Village Gram Panchayat summary statistics calculation
export const getGramPanchayatStats = (data: any[]) => {
  const totalPopulation = data.reduce((sum, item) => sum + item.population, 0);
  const totalHouseholds = data.reduce((sum, item) => sum + item.householdCount, 0);
  const totalAgricultureLand = data.reduce((sum, item) => sum + item.agricultureLand, 0);
  const avgIrrigationCoverage = data.reduce((sum, item) => sum + item.irrigationCoverage, 0) / data.length;
  
  const roadConnectivityCount = {
    Good: data.filter(item => item.roadConnectivity === "Good").length,
    Average: data.filter(item => item.roadConnectivity === "Average").length,
    Poor: data.filter(item => item.roadConnectivity === "Poor").length
  };
  
  return {
    totalPopulation,
    totalHouseholds,
    totalAgricultureLand,
    avgIrrigationCoverage,
    roadConnectivityCount
  };
};

// For NGO Directory summary statistics calculation
export const getNgoStats = (data: any[]) => {
  const totalNgos = data.length;
  
  const sectorCounts: Record<string, number> = {};
  data.forEach(ngo => {
    if (!sectorCounts[ngo.sector]) {
      sectorCounts[ngo.sector] = 0;
    }
    sectorCounts[ngo.sector]++;
  });
  
  const avgYearEstablished = Math.round(
    data.reduce((sum, item) => sum + item.yearEstablished, 0) / data.length
  );
  
  const stateDistribution = data.reduce((acc: Record<string, number>, ngo) => {
    if (!acc[ngo.state]) {
      acc[ngo.state] = 0;
    }
    acc[ngo.state]++;
    return acc;
  }, {});
  
  return {
    totalNgos,
    sectorCounts,
    avgYearEstablished,
    stateDistribution
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

// Get dataset by ID
export const getDatasetById = (id: string) => {
  switch(id) {
    case 'census-2011':
      return {
        data: censusData,
        filterOptions: [
          {
            id: "state",
            label: "State",
            options: getUniqueValues(censusData, "state").map(value => ({ value, label: value }))
          },
          {
            id: "district",
            label: "District",
            options: getUniqueValues(censusData, "district").map(value => ({ value, label: value }))
          }
        ],
        columns: [
          { key: "state", label: "State" },
          { key: "district", label: "District" },
          { key: "population", label: "Population" },
          { key: "literacyRate", label: "Literacy Rate (%)" },
          { key: "genderRatio", label: "Gender Ratio" },
          { key: "urbanPopulation", label: "Urban Population (%)" }
        ],
        metrics: [
          { id: "population", label: "Population" },
          { id: "literacyRate", label: "Literacy Rate" },
          { id: "genderRatio", label: "Gender Ratio" },
          { id: "TOT_P", label: "Total Population" },
          { id: "No_HH", label: "Number of Households" },
          { id: "P_LIT", label: "Literate Population" }
        ],
        getStats: (data: any[]) => {
          // Check if this is uploaded census data with new columns
          if (data.length > 0 && data[0].TOT_P !== undefined) {
            return getCensusUploadStats(data);
          }
          return getSummaryStats(data);
        }
      };
    case 'village-gram-panchayat':
      return {
        data: gramPanchayatData,
        filterOptions: [
          {
            id: "state",
            label: "State",
            options: getUniqueValues(gramPanchayatData, "state").map(value => ({ value, label: value }))
          },
          {
            id: "district",
            label: "District",
            options: getUniqueValues(gramPanchayatData, "district").map(value => ({ value, label: value }))
          },
          {
            id: "gramPanchayat",
            label: "Gram Panchayat",
            options: getUniqueValues(gramPanchayatData, "gramPanchayat").map(value => ({ value, label: value }))
          },
          {
            id: "roadConnectivity",
            label: "Road Connectivity",
            options: getUniqueValues(gramPanchayatData, "roadConnectivity").map(value => ({ value, label: value }))
          }
        ],
        columns: [
          { key: "state", label: "State" },
          { key: "district", label: "District" },
          { key: "gramPanchayat", label: "Gram Panchayat" },
          { key: "population", label: "Population" },
          { key: "householdCount", label: "Number of Households" },
          { key: "agricultureLand", label: "Agricultural Land (hectares)" },
          { key: "irrigationCoverage", label: "Irrigation Coverage (%)" },
          { key: "roadConnectivity", label: "Road Connectivity" }
        ],
        metrics: [
          { id: "population", label: "Population" },
          { id: "householdCount", label: "Households" },
          { id: "agricultureLand", label: "Agriculture Land" },
          { id: "irrigationCoverage", label: "Irrigation Coverage" }
        ],
        getStats: getGramPanchayatStats
      };
    case 'ngo-directory':
      return {
        data: ngoData,
        filterOptions: [
          {
            id: "state",
            label: "State",
            options: getUniqueValues(ngoData, "state").map(value => ({ value, label: value }))
          },
          {
            id: "district",
            label: "District",
            options: getUniqueValues(ngoData, "district").map(value => ({ value, label: value }))
          },
          {
            id: "sector",
            label: "Sector",
            options: getUniqueValues(ngoData, "sector").map(value => ({ value, label: value }))
          },
          {
            id: "yearEstablished",
            label: "Established Before",
            options: [
              { value: "2000", label: "Before 2000" },
              { value: "2005", label: "Before 2005" },
              { value: "2010", label: "Before 2010" },
              { value: "2015", label: "Before 2015" }
            ]
          }
        ],
        columns: [
          { key: "name", label: "NGO Name" },
          { key: "state", label: "State" },
          { key: "district", label: "District" },
          { key: "registrationNumber", label: "Registration No." },
          { key: "sector", label: "Sector" },
          { key: "yearEstablished", label: "Year Established" },
          { key: "contactPerson", label: "Contact Person" },
          { key: "contactEmail", label: "Contact Email" }
        ],
        metrics: [
          { id: "sector", label: "Sector" },
          { id: "state", label: "State" },
          { id: "yearEstablished", label: "Establishment Year" }
        ],
        getStats: getNgoStats
      };
    default:
      return null;
  }
};

// For summary statistics calculation with uploaded census data
export const getCensusUploadStats = (data: any[]) => {
  const totalPopulation = data.reduce((sum, item) => sum + (Number(item.TOT_P) || Number(item.population) || 0), 0);
  const totalHouseholds = data.reduce((sum, item) => sum + (Number(item.No_HH) || 0), 0);
  const totalLiterate = data.reduce((sum, item) => sum + (Number(item.P_LIT) || 0), 0);
  const totalMale = data.reduce((sum, item) => sum + (Number(item.TOT_M) || 0), 0);
  const totalFemale = data.reduce((sum, item) => sum + (Number(item.TOT_F) || 0), 0);
  
  const avgLiteracy = totalPopulation > 0 ? (totalLiterate / totalPopulation) * 100 : 0;
  const avgGenderRatio = totalMale > 0 ? (totalFemale / totalMale) * 1000 : 0;
  
  return {
    totalPopulation,
    totalHouseholds,
    avgLiteracy,
    avgGenderRatio,
    urbanPopulationPercentage: 0 // Would need TRU analysis
  };
};
