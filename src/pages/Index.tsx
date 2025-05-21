
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Download, Info } from "lucide-react";
import Layout from "@/components/layout/Layout";
import DatasetCard from "@/components/dataset/DatasetCard";
import { availableDatasets } from "@/utils/mockData";

const Index = () => {
  const featuredDatasets = availableDatasets.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-sand-blue text-white py-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            SAND Data Portal
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            A centralized platform for open datasets
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-8 opacity-80">
            Access, analyze, and download structured datasets for research, 
            policy making, and informed decision-making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-sand-blue hover:bg-white/90"
              asChild
            >
              <Link to="/datasets">
                <BarChart className="mr-2 h-5 w-5" />
                Explore Datasets
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link to="/about">
                <Info className="mr-2 h-5 w-5" />
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Datasets */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-sand-blue">Featured Datasets</h2>
            <Button variant="outline" asChild>
              <Link to="/datasets">View All Datasets</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDatasets.map(dataset => (
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
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-sand-blue mb-8 text-center">How SAND Data Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-sand-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="h-8 w-8 text-sand-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Explore Data</h3>
                <p className="text-gray-600">
                  Browse through our collection of structured datasets and find the information you need.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-sand-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Info className="h-8 w-8 text-sand-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Analyze Insights</h3>
                <p className="text-gray-600">
                  Visualize key metrics and trends with interactive charts and statistics dashboards.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-sand-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-sand-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Download Resources</h3>
                <p className="text-gray-600">
                  Export filtered data in Excel format for your research, reports or applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sand-teal py-16 px-4 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to dive into the data?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start exploring our comprehensive datasets and uncover valuable insights.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-sand-teal hover:bg-white/90"
            asChild
          >
            <Link to="/datasets/census-2011">
              Explore Census Data
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
