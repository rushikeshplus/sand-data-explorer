
import React from "react";
import Layout from "@/components/layout/Layout";
import DatasetCard from "@/components/dataset/DatasetCard";
import { availableDatasets } from "@/utils/mockData";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Datasets = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  
  const filteredDatasets = availableDatasets.filter(dataset => 
    dataset.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dataset.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dataset.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="sand-page-container">
        <h1 className="sand-header">Available Datasets</h1>
        
        <div className="relative max-w-lg mb-8">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search datasets..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDatasets.length > 0 ? (
            filteredDatasets.map(dataset => (
              <DatasetCard 
                key={dataset.id}
                id={dataset.id}
                title={dataset.title}
                description={dataset.description}
                source={dataset.source}
                recordCount={dataset.recordCount}
                lastUpdated={dataset.lastUpdated}
                category={dataset.category}
                isNew={dataset.isNew}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No datasets found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Datasets;
