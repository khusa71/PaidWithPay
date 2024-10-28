import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Shield,
  AlertTriangle,
  Clock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const Home = () => {
  // Mock data
  const stats = [
    {
      name: 'Total In Escrow',
      value: '₹45,231',
      change: '+12.5%',
      trend: 'up'
    },
    {
      name: 'Active Transactions',
      value: '23',
      change: '+3.2%',
      trend: 'up'
    },
    {
      name: 'Pending Releases',
      value: '5',
      change: '-2.1%',
      trend: 'down'
    },
    {
      name: 'Completed This Month',
      value: '152',
      change: '+28.4%',
      trend: 'up'
    },
  ];

  const recentTransactions = [
    {
      id: '1',
      recipient: 'seller@upi',
      amount: '₹5,000',
      status: 'In Escrow',
      date: '2024-10-28',
    },
    {
      id: '2',
      recipient: 'vendor@upi',
      amount: '₹12,500',
      status: 'Pending Release',
      date: '2024-10-27',
    },
    {
      id: '3',
      recipient: 'shop@upi',
      amount: '₹3,200',
      status: 'Completed',
      date: '2024-10-26',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button asChild>
          <Link to="/new-payment">New Payment</Link>
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
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
        ))}
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Recipient</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.recipient}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      transaction.status === 'Completed'
                        ? 'bg-green-100 text-green-700'
                        : transaction.status === 'In Escrow'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {transaction.status}
                    </span>
                  </TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <Shield className="h-8 w-8 text-blue-600 mb-2" />
              <h3 className="font-semibold">Protection Status</h3>
              <p className="text-sm text-gray-500 mt-1">
                All transactions are secured with escrow protection
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <AlertTriangle className="h-8 w-8 text-yellow-600 mb-2" />
              <h3 className="font-semibold">Pending Actions</h3>
              <p className="text-sm text-gray-500 mt-1">
                2 transactions require your attention
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <Clock className="h-8 w-8 text-green-600 mb-2" />
              <h3 className="font-semibold">Average Resolution</h3>
              <p className="text-sm text-gray-500 mt-1">
                24 hours resolution time
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;