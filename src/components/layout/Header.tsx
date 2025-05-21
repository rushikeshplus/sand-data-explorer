
import React from "react";
import { NavLink } from "react-router-dom";
import { BarChart, Download, Info, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-sand-blue text-white py-3 px-6 shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center space-x-2">
            <img 
              src="https://sandnetwork.in/wp-content/uploads/2024/02/sand-logo.png" 
              alt="SAND Network Logo" 
              className="h-8"
            />
            <div className="text-xs bg-sand-teal px-2 py-0.5 rounded-sm text-white">Internal</div>
          </NavLink>

          <div className="hidden md:flex items-center space-x-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "font-medium text-white" 
                  : "text-white/80 hover:text-white transition-colors"
              }
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/datasets" 
              className={({ isActive }) => 
                isActive 
                  ? "font-medium text-white" 
                  : "text-white/80 hover:text-white transition-colors"
              }
            >
              Datasets
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive 
                  ? "font-medium text-white" 
                  : "text-white/80 hover:text-white transition-colors"
              }
            >
              About
            </NavLink>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
