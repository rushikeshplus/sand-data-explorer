
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
    <div className="sand-stat-card">
      <div className="flex justify-between items-start">
        <div>
          <div className="sand-stat-value">{value}</div>
          <div className="sand-stat-label">{title}</div>
        </div>
        {icon && <div className="text-sand-teal">{icon}</div>}
      </div>
      {change && (
        <div className={`mt-2 text-xs ${change.isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change.isPositive ? '↑' : '↓'} {Math.abs(change.value)}% from previous
        </div>
      )}
    </div>
  );
};

export default StatCard;
