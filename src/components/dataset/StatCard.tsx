
import React from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  change?: {
    value: number;
    isPositive: boolean;
  };
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, change }) => {
  return (
    <div className="sand-stat-card bg-gray-800 border-gray-700">
      <div className="flex justify-between items-start">
        <div>
          <div className="sand-stat-value text-2xl font-bold text-[#E31C40]">{value}</div>
          <div className="sand-stat-label text-gray-400">{title}</div>
        </div>
        {icon && <div className="text-[#1AAB68]">{icon}</div>}
      </div>
      {change && (
        <div className={`mt-2 text-xs ${change.isPositive ? 'text-[#1AAB68]' : 'text-[#E31C40]'}`}>
          {change.isPositive ? '↑' : '↓'} {Math.abs(change.value)}% from previous
        </div>
      )}
    </div>
  );
};

export default StatCard;
