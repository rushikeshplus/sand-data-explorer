
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, Info } from "lucide-react";
import { Link } from "react-router-dom";

interface DatasetCardProps {
  id: string;
  title: string;
  description: string;
  source: string;
  recordCount: number;
  lastUpdated: string;
  category: string;
  isNew?: boolean;
}

const DatasetCard: React.FC<DatasetCardProps> = ({
  id,
  title,
  description,
  source,
  recordCount,
  lastUpdated,
  category,
  isNew = false
}) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="mt-1">{source}</CardDescription>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-gray-100">
              {recordCount.toLocaleString()} records
            </Badge>
            {isNew && (
              <Badge className="bg-sand-orange">New</Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          <Badge variant="secondary" className="bg-sand-teal/10 text-sand-teal border-sand-teal/30">
            {category}
          </Badge>
          <Badge variant="secondary" className="bg-gray-100 text-gray-700">
            Last updated: {lastUpdated}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2 border-t">
        <Button variant="outline" size="sm" asChild>
          <Link to={`/datasets/${id}/info`}>
            <Info className="mr-2 h-4 w-4" />
            Details
          </Link>
        </Button>
        <Button size="sm" className="bg-sand-teal hover:bg-sand-teal/90" asChild>
          <Link to={`/datasets/${id}`}>
            <BarChart className="mr-2 h-4 w-4" />
            Explore
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DatasetCard;
