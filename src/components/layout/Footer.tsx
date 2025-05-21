
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-sand-blue text-white/80 py-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">SAND Data</h3>
            <p className="text-sm">
              A centralized platform for structured, open datasets for research, 
              analysis, and planning in various domains.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/" className="hover:text-white transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/datasets" className="hover:text-white transition-colors">
                  Datasets
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-white transition-colors">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: info@sanddata.org</li>
              <li>Twitter: @SANDData</li>
              <li>
                <NavLink to="/contact" className="hover:text-white transition-colors">
                  Contact Form
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 text-sm text-center">
          <p>© 2025 SAND Data. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
