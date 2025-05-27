// Census 2011 mock data (original simplified version)
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

// Census 2011 detailed data with all columns from your CSV
export const detailedCensusData = [
  {
    State: "ANDHRA PRADESH",
    District: "ANANTAPUR",
    Subdistt: "ANANTAPUR",
    "Town/Village": "ANANTAPUR (M)",
    Ward: "Ward No.1",
    EB: "001",
    Level: "WARD",
    Name: "Ward No.1",
    TRU: "Urban",
    No_HH: 890,
    TOT_P: 4325,
    TOT_M: 2165,
    TOT_F: 2160,
    P_06: 432,
    M_06: 220,
    F_06: 212,
    P_SC: 865,
    M_SC: 430,
    F_SC: 435,
    P_ST: 43,
    M_ST: 22,
    F_ST: 21,
    P_LIT: 3240,
    M_LIT: 1730,
    F_LIT: 1510,
    P_ILL: 1085,
    M_ILL: 435,
    F_ILL: 650,
    TOT_WORK_P: 1865,
    TOT_WORK_M: 1320,
    TOT_WORK_F: 545,
    MAINWORK_P: 1654,
    MAINWORK_M: 1180,
    MAINWORK_F: 474,
    MAIN_CL_P: 234,
    MAIN_CL_M: 180,
    MAIN_CL_F: 54,
    MAIN_AL_P: 98,
    MAIN_AL_M: 76,
    MAIN_AL_F: 22,
    MAIN_HH_P: 432,
    MAIN_HH_M: 320,
    MAIN_HH_F: 112,
    MAIN_OT_P: 890,
    MAIN_OT_M: 604,
    MAIN_OT_F: 286,
    MARGWORK_P: 211,
    MARGWORK_M: 140,
    MARGWORK_F: 71,
    MARG_CL_P: 34,
    MARG_CL_M: 28,
    MARG_CL_F: 6,
    MARG_AL_P: 45,
    MARG_AL_M: 32,
    MARG_AL_F: 13,
    MARG_HH_P: 87,
    MARG_HH_M: 54,
    MARG_HH_F: 33,
    MARG_OT_P: 45,
    MARG_OT_M: 26,
    MARG_OT_F: 19,
    MARGWORK_3_6_P: 134,
    MARGWORK_3_6_M: 89,
    MARGWORK_3_6_F: 45,
    MARG_CL_3_6_P: 21,
    MARG_CL_3_6_M: 17,
    MARG_CL_3_6_F: 4,
    MARG_AL_3_6_P: 28,
    MARG_AL_3_6_M: 20,
    MARG_AL_3_6_F: 8,
    MARG_HH_3_6_P: 55,
    MARG_HH_3_6_M: 34,
    MARG_HH_3_6_F: 21,
    MARG_OT_3_6_P: 30,
    MARG_OT_3_6_M: 18,
    MARG_OT_3_6_F: 12,
    MARGWORK_0_3_P: 77,
    MARGWORK_0_3_M: 51,
    MARGWORK_0_3_F: 26,
    MARG_CL_0_3_P: 13,
    MARG_CL_0_3_M: 11,
    MARG_CL_0_3_F: 2,
    MARG_AL_0_3_P: 17,
    MARG_AL_0_3_M: 12,
    MARG_AL_0_3_F: 5,
    MARG_HH_0_3_P: 32,
    MARG_HH_0_3_M: 20,
    MARG_HH_0_3_F: 12,
    MARG_OT_0_3_P: 15,
    MARG_OT_0_3_M: 8,
    MARG_OT_0_3_F: 7,
    NON_WORK_P: 2460,
    NON_WORK_M: 845,
    NON_WORK_F: 1615
  },
  {
    State: "KARNATAKA",
    District: "BANGALORE",
    Subdistt: "BANGALORE NORTH",
    "Town/Village": "BANGALORE (M CORP.)",
    Ward: "Ward No.45",
    EB: "001",
    Level: "WARD",
    Name: "Ward No.45",
    TRU: "Urban",
    No_HH: 1245,
    TOT_P: 5890,
    TOT_M: 3120,
    TOT_F: 2770,
    P_06: 589,
    M_06: 312,
    F_06: 277,
    P_SC: 294,
    M_SC: 156,
    F_SC: 138,
    P_ST: 29,
    M_ST: 15,
    F_ST: 14,
    P_LIT: 5301,
    M_LIT: 2808,
    F_LIT: 2493,
    P_ILL: 589,
    M_ILL: 312,
    F_ILL: 277,
    TOT_WORK_P: 2945,
    TOT_WORK_M: 2184,
    TOT_WORK_F: 761,
    MAINWORK_P: 2710,
    MAINWORK_M: 2028,
    MAINWORK_F: 682,
    MAIN_CL_P: 589,
    MAIN_CL_M: 468,
    MAIN_CL_F: 121,
    MAIN_AL_P: 59,
    MAIN_AL_M: 47,
    MAIN_AL_F: 12,
    MAIN_HH_P: 294,
    MAIN_HH_M: 218,
    MAIN_HH_F: 76,
    MAIN_OT_P: 1768,
    MAIN_OT_M: 1295,
    MAIN_OT_F: 473,
    MARGWORK_P: 235,
    MARGWORK_M: 156,
    MARGWORK_F: 79,
    MARG_CL_P: 47,
    MARG_CL_M: 31,
    MARG_CL_F: 16,
    MARG_AL_P: 18,
    MARG_AL_M: 12,
    MARG_AL_F: 6,
    MARG_HH_P: 89,
    MARG_HH_M: 62,
    MARG_HH_F: 27,
    MARG_OT_P: 81,
    MARG_OT_M: 51,
    MARG_OT_F: 30,
    MARGWORK_3_6_P: 147,
    MARGWORK_3_6_M: 93,
    MARGWORK_3_6_F: 54,
    MARG_CL_3_6_P: 29,
    MARG_CL_3_6_M: 19,
    MARG_CL_3_6_F: 10,
    MARG_AL_3_6_P: 12,
    MARG_AL_3_6_M: 8,
    MARG_AL_3_6_F: 4,
    MARG_HH_3_6_P: 56,
    MARG_HH_3_6_M: 39,
    MARG_HH_3_6_F: 17,
    MARG_OT_3_6_P: 50,
    MARG_OT_3_6_M: 27,
    MARG_OT_3_6_F: 23,
    MARGWORK_0_3_P: 88,
    MARGWORK_0_3_M: 63,
    MARGWORK_0_3_F: 25,
    MARG_CL_0_3_P: 18,
    MARG_CL_0_3_M: 12,
    MARG_CL_0_3_F: 6,
    MARG_AL_0_3_P: 6,
    MARG_AL_0_3_M: 4,
    MARG_AL_0_3_F: 2,
    MARG_HH_0_3_P: 33,
    MARG_HH_0_3_M: 23,
    MARG_HH_0_3_F: 10,
    MARG_OT_0_3_P: 31,
    MARG_OT_0_3_M: 24,
    MARG_OT_3_F: 7,
    NON_WORK_P: 2945,
    NON_WORK_M: 936,
    NON_WORK_F: 2009
  },
  {
    State: "TAMIL NADU",
    District: "CHENNAI",
    Subdistt: "CHENNAI",
    "Town/Village": "CHENNAI (M CORP.)",
    Ward: "Ward No.100",
    EB: "001",
    Level: "WARD",
    Name: "Ward No.100",
    TRU: "Urban",
    No_HH: 1567,
    TOT_P: 7234,
    TOT_M: 3670,
    TOT_F: 3564,
    P_06: 723,
    M_06: 367,
    F_06: 356,
    P_SC: 361,
    M_SC: 183,
    F_SC: 178,
    P_ST: 36,
    M_ST: 18,
    F_ST: 18,
    P_LIT: 6511,
    M_LIT: 3303,
    F_LIT: 3208,
    P_ILL: 723,
    M_ILL: 367,
    F_ILL: 356,
    TOT_WORK_P: 3256,
    TOT_WORK_M: 2569,
    TOT_WORK_F: 687,
    MAINWORK_P: 3040,
    MAINWORK_M: 2422,
    MAINWORK_F: 618,
    MAIN_CL_P: 723,
    MAIN_CL_M: 587,
    MAIN_CL_F: 136,
    MAIN_AL_P: 36,
    MAIN_AL_M: 29,
    MAIN_AL_F: 7,
    MAIN_HH_P: 361,
    MAIN_HH_M: 294,
    MAIN_HH_F: 67,
    MAIN_OT_P: 1920,
    MAIN_OT_M: 1512,
    MAIN_OT_F: 408,
    MARGWORK_P: 216,
    MARGWORK_M: 147,
    MARGWORK_F: 69,
    MARG_CL_P: 43,
    MARG_CL_M: 29,
    MARG_CL_F: 14,
    MARG_AL_P: 14,
    MARG_AL_M: 11,
    MARG_AL_F: 3,
    MARG_HH_P: 86,
    MARG_HH_M: 59,
    MARG_HH_F: 27,
    MARG_OT_P: 73,
    MARG_OT_M: 48,
    MARG_OT_F: 25,
    MARGWORK_3_6_P: 137,
    MARGWORK_3_6_M: 88,
    MARGWORK_3_6_F: 49,
    MARG_CL_3_6_P: 27,
    MARG_CL_3_6_M: 18,
    MARG_CL_3_6_F: 9,
    MARG_AL_3_6_P: 9,
    MARG_AL_3_6_M: 7,
    MARG_AL_3_6_F: 2,
    MARG_HH_3_6_P: 54,
    MARG_HH_3_6_M: 37,
    MARG_HH_3_6_F: 17,
    MARG_OT_3_6_P: 47,
    MARG_OT_3_6_M: 26,
    MARG_OT_3_6_F: 21,
    MARGWORK_0_3_P: 79,
    MARGWORK_0_3_M: 59,
    MARGWORK_0_3_F: 20,
    MARG_CL_0_3_P: 16,
    MARG_CL_0_3_M: 11,
    MARG_CL_0_3_F: 5,
    MARG_AL_0_3_P: 5,
    MARG_AL_0_3_M: 4,
    MARG_AL_0_3_F: 1,
    MARG_HH_0_3_P: 32,
    MARG_HH_0_3_M: 22,
    MARG_HH_0_3_F: 10,
    MARG_OT_0_3_P: 26,
    MARG_OT_0_3_M: 22,
    MARG_OT_0_3_F: 4,
    NON_WORK_P: 3978,
    NON_WORK_M: 1101,
    NON_WORK_F: 2877
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
  const totalPopulation = data.reduce((sum, item) => sum + (Number(item.population) || Number(item.TOT_P) || 0), 0);
  const avgLiteracy = data.length > 0 ? data.reduce((sum, item) => {
    const literacy = Number(item.literacyRate) || (item.P_LIT && item.TOT_P ? (Number(item.P_LIT) / Number(item.TOT_P)) * 100 : 0);
    return sum + literacy;
  }, 0) / data.length : 0;
  const avgGenderRatio = data.length > 0 ? data.reduce((sum, item) => {
    const ratio = Number(item.genderRatio) || (item.TOT_F && item.TOT_M ? (Number(item.TOT_F) / Number(item.TOT_M)) * 1000 : 0);
    return sum + ratio;
  }, 0) / data.length : 0;
  const urbanPopulationPercentage = data.reduce((sum, item) => {
    const pop = Number(item.population) || Number(item.TOT_P) || 0;
    const urbanPct = Number(item.urbanPopulation) || (item.TRU === "Urban" ? 100 : 0);
    return sum + (pop * urbanPct / 100);
  }, 0) / totalPopulation * 100;
  
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
        data: detailedCensusData, // Use detailed census data instead of simplified
        filterOptions: [
          {
            id: "State",
            label: "State",
            options: getUniqueValues(detailedCensusData, "State").map(value => ({ value, label: value }))
          },
          {
            id: "District",
            label: "District",
            options: getUniqueValues(detailedCensusData, "District").map(value => ({ value, label: value }))
          },
          {
            id: "TRU",
            label: "Area Type",
            options: getUniqueValues(detailedCensusData, "TRU").map(value => ({ value, label: value }))
          }
        ],
        columns: [
          { key: "State", label: "State" },
          { key: "District", label: "District" },
          { key: "Name", label: "Name" },
          { key: "TRU", label: "Area Type" },
          { key: "TOT_P", label: "Total Population" },
          { key: "TOT_M", label: "Total Males" },
          { key: "TOT_F", label: "Total Females" },
          { key: "P_LIT", label: "Literate Population" },
          { key: "No_HH", label: "Number of Households" },
          { key: "TOT_WORK_P", label: "Total Workers" }
        ],
        metrics: [
          { id: "TOT_P", label: "Total Population" },
          { id: "P_LIT", label: "Literate Population" },
          { id: "No_HH", label: "Number of Households" },
          { id: "TOT_WORK_P", label: "Total Workers" },
          { id: "TOT_M", label: "Total Males" },
          { id: "TOT_F", label: "Total Females" }
        ],
        getStats: getSummaryStats
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
