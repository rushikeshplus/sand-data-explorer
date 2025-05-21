
import React from "react";
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="sand-page-container max-w-4xl mx-auto">
        <h1 className="sand-header">About SAND Data</h1>
        
        <section className="sand-section">
          <h2 className="sand-subheader">Our Mission</h2>
          <p className="sand-text mb-4">
            SAND Data Portal is committed to making quality structured data accessible to researchers, 
            policymakers, non-profits, and the general public. We believe that open access to well-organized 
            data is essential for evidence-based decision making and planning.
          </p>
          <p className="sand-text">
            Our platform serves as a central repository for various datasets, starting with demographic data 
            from the Census and gradually expanding to include health metrics, education statistics, 
            environmental indicators, and more.
          </p>
        </section>
        
        <section className="sand-section">
          <h2 className="sand-subheader">Why SAND Data?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="sand-card">
              <h3 className="text-lg font-medium text-sand-blue mb-2">Structured & Clean</h3>
              <p className="text-sm text-gray-600">
                All datasets are carefully cleaned, structured, and validated to ensure consistency and accuracy,
                saving you valuable preparation time.
              </p>
            </div>
            
            <div className="sand-card">
              <h3 className="text-lg font-medium text-sand-blue mb-2">Easy to Use</h3>
              <p className="text-sm text-gray-600">
                Our intuitive interface allows users to explore, filter, visualize and download data
                without needing technical expertise.
              </p>
            </div>
            
            <div className="sand-card">
              <h3 className="text-lg font-medium text-sand-blue mb-2">Comprehensive</h3>
              <p className="text-sm text-gray-600">
                From population statistics to health indicators, we aim to provide a wide range of
                datasets relevant for research and planning.
              </p>
            </div>
            
            <div className="sand-card">
              <h3 className="text-lg font-medium text-sand-blue mb-2">Open Access</h3>
              <p className="text-sm text-gray-600">
                We believe in open data principles and make all datasets freely available for
                download and use in various formats.
              </p>
            </div>
          </div>
        </section>
        
        <section className="sand-section">
          <h2 className="sand-subheader">Our Roadmap</h2>
          <p className="sand-text mb-4">
            SAND Data Portal is constantly evolving. Here's what we're planning for the near future:
          </p>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="bg-sand-teal text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-medium">Additional Datasets</h3>
                <p className="text-sm text-gray-600">
                  We'll continue to add more datasets including health indicators, education metrics, and environmental data.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-sand-teal text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-medium">Enhanced Visualizations</h3>
                <p className="text-sm text-gray-600">
                  More advanced charts, maps, and interactive visualizations to better understand complex data relationships.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-sand-teal text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-medium">API Access</h3>
                <p className="text-sm text-gray-600">
                  Programmatic access to all datasets via a well-documented API for integration into applications and dashboards.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-sand-teal text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-medium">User Accounts</h3>
                <p className="text-sm text-gray-600">
                  Personal accounts to save your favorite datasets, custom filters, and receive notifications about updates.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="sand-section">
          <h2 className="sand-subheader">Contact Us</h2>
          <p className="sand-text mb-4">
            Have questions, suggestions, or a dataset you'd like to contribute? We'd love to hear from you.
          </p>
          <div className="sand-card">
            <p className="mb-2"><strong>Email:</strong> info@sanddata.org</p>
            <p className="mb-2"><strong>Twitter:</strong> @SANDData</p>
            <p><strong>Address:</strong> 123 Data Street, Analytics City, 10001</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
