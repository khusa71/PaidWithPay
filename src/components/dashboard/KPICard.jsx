import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const KPICard = ({ stat }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">
        {stat.name}
      </CardTitle>
      {stat.trend === 'up' ? (
        <ArrowUpRight className="h-4 w-4 text-green-600" />
      ) : (
        <ArrowDownRight className="h-4 w-4 text-red-600" />
      )}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{stat.value}</div>
      <p className={`text-xs ${
        stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
      }`}>
        {stat.change} from last month
      </p>
    </CardContent>
  </Card>
);
