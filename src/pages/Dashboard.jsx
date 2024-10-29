// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   ArrowUpRight,
//   ArrowDownRight,
//   TrendingUp,
//   Shield,
//   AlertTriangle,
//   Clock,
//   Search,
//   Filter,
//   Download,
//   RefreshCw
// } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Input } from "@/components/ui/input";
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// const Dashboard = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterStatus, setFilterStatus] = useState('all');
//   const [isRefreshing, setIsRefreshing] = useState(false);

//   // Mock data
//   const stats = [
//     {
//       name: 'Total In Escrow',
//       value: '₹45,231',
//       change: '+12.5%',
//       trend: 'up',
//       chartData: Array.from({ length: 7 }, (_, i) => ({
//         day: i + 1,
//         value: Math.floor(Math.random() * 50000) + 30000
//       }))
//     },
//     {
//       name: 'Active Transactions',
//       value: '23',
//       change: '+3.2%',
//       trend: 'up',
//       chartData: Array.from({ length: 7 }, (_, i) => ({
//         day: i + 1,
//         value: Math.floor(Math.random() * 30) + 10
//       }))
//     },
//     {
//       name: 'Pending Releases',
//       value: '5',
//       change: '-2.1%',
//       trend: 'down',
//       chartData: Array.from({ length: 7 }, (_, i) => ({
//         day: i + 1,
//         value: Math.floor(Math.random() * 10) + 2
//       }))
//     },
//     {
//       name: 'Completed This Month',
//       value: '152',
//       change: '+28.4%',
//       trend: 'up',
//       chartData: Array.from({ length: 7 }, (_, i) => ({
//         day: i + 1,
//         value: Math.floor(Math.random() * 200) + 100
//       }))
//     },
//   ];

//   const recentTransactions = [
//     {
//       id: '1',
//       recipient: 'seller@upi',
//       amount: '₹5,000',
//       status: 'In Escrow',
//       date: '2024-10-28',
//       description: 'Product purchase payment'
//     },
//     {
//       id: '2',
//       recipient: 'vendor@upi',
//       amount: '₹12,500',
//       status: 'Pending Release',
//       date: '2024-10-27',
//       description: 'Service payment'
//     },
//     {
//       id: '3',
//       recipient: 'shop@upi',
//       amount: '₹3,200',
//       status: 'Completed',
//       date: '2024-10-26',
//       description: 'Retail purchase'
//     },
//   ];

//   const handleRefresh = () => {
//     setIsRefreshing(true);
//     setTimeout(() => setIsRefreshing(false), 1000);
//   };

//   const filteredTransactions = recentTransactions
//     .filter(transaction => 
//       transaction.recipient.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .filter(transaction => 
//       filterStatus === 'all' ? true : transaction.status === filterStatus
//     );

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Completed':
//         return 'bg-green-100 text-green-700';
//       case 'In Escrow':
//         return 'bg-blue-100 text-blue-700';
//       case 'Pending Release':
//         return 'bg-yellow-100 text-yellow-700';
//       default:
//         return 'bg-gray-100 text-gray-700';
//     }
//   };

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="space-y-6 p-6"
//     >
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//         <div>
//           <h1 className="text-2xl font-bold">Dashboard</h1>
//           <p className="text-gray-500">Welcome back! Here's your overview.</p>
//         </div>
//         <div className="flex gap-2">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={handleRefresh}
//             className={isRefreshing ? 'animate-spin' : ''}
//           >
//             <RefreshCw className="h-4 w-4 mr-1" />
//             Refresh
//           </Button>
//           <Button asChild>
//             <Link to="/new-payment">New Payment</Link>
//           </Button>
//         </div>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         {stats.map((stat) => (
//           <Card key={stat.name} className="overflow-hidden">
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">
//                 {stat.name}
//               </CardTitle>
//               {stat.trend === 'up' ? (
//                 <ArrowUpRight className="h-4 w-4 text-green-600" />
//               ) : (
//                 <ArrowDownRight className="h-4 w-4 text-red-600" />
//               )}
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">{stat.value}</div>
//               <p className={`text-xs ${
//                 stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
//               }`}>
//                 {stat.change} from last month
//               </p>
//               <div className="h-24 mt-4">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={stat.chartData}>
//                     <Line 
//                       type="monotone" 
//                       dataKey="value" 
//                       stroke={stat.trend === 'up' ? '#16a34a' : '#dc2626'} 
//                       strokeWidth={2}
//                       dot={false}
//                     />
//                     <Tooltip 
//                       content={({ payload, label }) => {
//                         if (payload && payload.length) {
//                           return (
//                             <div className="bg-white p-2 shadow-lg rounded-lg border">
//                               <p className="text-sm">Day {label}</p>
//                               <p className="text-sm font-bold">
//                                 {typeof payload[0].value === 'number' 
//                                   ? '₹' + payload[0].value.toLocaleString()
//                                   : payload[0].value}
//                               </p>
//                             </div>
//                           );
//                         }
//                         return null;
//                       }}
//                     />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Recent Transactions */}
//       <Card>
//         <CardHeader className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0">
//           <CardTitle>Recent Transactions</CardTitle>
//           <div className="flex flex-col sm:flex-row gap-2">
//             <div className="relative">
//               <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
//               <Input
//                 placeholder="Search transactions..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-8"
//               />
//             </div>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="outline" size="sm">
//                   <Filter className="h-4 w-4 mr-1" />
//                   Filter
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent>
//                 <DropdownMenuItem onClick={() => setFilterStatus('all')}>
//                   All Status
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => setFilterStatus('In Escrow')}>
//                   In Escrow
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => setFilterStatus('Pending Release')}>
//                   Pending Release
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => setFilterStatus('Completed')}>
//                   Completed
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//             <Button variant="outline" size="sm">
//               <Download className="h-4 w-4 mr-1" />
//               Export
//             </Button>
//           </div>
//         </CardHeader>
//         <CardContent>
//           <div className="overflow-x-auto">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Recipient</TableHead>
//                   <TableHead>Description</TableHead>
//                   <TableHead>Amount</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead>Date</TableHead>
//                   <TableHead>Action</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 <AnimatePresence>
//                   {filteredTransactions.map((transaction) => (
//                     <motion.tr
//                       key={transaction.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <TableCell>{transaction.recipient}</TableCell>
//                       <TableCell>{transaction.description}</TableCell>
//                       <TableCell>{transaction.amount}</TableCell>
//                       <TableCell>
//                         <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(transaction.status)}`}>
//                           {transaction.status}
//                         </span>
//                       </TableCell>
//                       <TableCell>{transaction.date}</TableCell>
//                       <TableCell>
//                         <Button variant="ghost" size="sm">View Details</Button>
//                       </TableCell>
//                     </motion.tr>
//                   ))}
//                 </AnimatePresence>
//               </TableBody>
//             </Table>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Quick Actions */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <motion.div
//           whileHover={{ scale: 1.02 }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           <Card>
//             <CardContent className="pt-6">
//               <div className="flex flex-col items-center text-center">
//                 <Shield className="h-8 w-8 text-blue-600 mb-2" />
//                 <h3 className="font-semibold">Protection Status</h3>
//                 <p className="text-sm text-gray-500 mt-1">
//                   All transactions are secured with escrow protection
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>

//         <motion.div
//           whileHover={{ scale: 1.02 }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           <Card>
//             <CardContent className="pt-6">
//               <div className="flex flex-col items-center text-center">
//                 <AlertTriangle className="h-8 w-8 text-yellow-600 mb-2" />
//                 <h3 className="font-semibold">Pending Actions</h3>
//                 <p className="text-sm text-gray-500 mt-1">
//                   2 transactions require your attention
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>

//         <motion.div
//           whileHover={{ scale: 1.02 }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           <Card>
//             <CardContent className="pt-6">
//               <div className="flex flex-col items-center text-center">
//                 <Clock className="h-8 w-8 text-green-600 mb-2" />
//                 <h3 className="font-semibold">Average Resolution</h3>
//                 <p className="text-sm text-gray-500 mt-1">
//                   24 hours resolution time
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default Dashboard;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, AlertTriangle, Clock, Plus } from 'lucide-react'; // Added Plus icon
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { KPICard } from '@/components/dashboard/KPICard';
import { ActionCard } from '@/components/dashboard/ActionCard';
import { TransactionsTable } from '@/components/dashboard/TransactionsTable';
import { DASHBOARD_STATS, QUICK_ACTIONS } from '@/constants/dashboard';

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const handleNewPayment = () => {
    navigate('/app/new-payment'); // Assuming your route is prefixed with /app
  };

  const recentTransactions = [
    {
      id: '1',
      recipient: 'seller@upi',
      amount: '₹5,000',
      status: 'In Escrow',
      date: '2024-10-28',
      description: 'Product purchase payment'
    },
    {
      id: '2',
      recipient: 'vendor@upi',
      amount: '₹12,500',
      status: 'Pending Release',
      date: '2024-10-27',
      description: 'Service payment'
    },
    {
      id: '3',
      recipient: 'shop@upi',
      amount: '₹3,200',
      status: 'Completed',
      date: '2024-10-26',
      description: 'Retail purchase'
    },
  ];

  const filteredTransactions = recentTransactions
    .filter(transaction => 
      transaction.recipient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(transaction => 
      filterStatus === 'all' ? true : transaction.status === filterStatus
    );

    return (
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-500">Welcome back! Here's your overview.</p>
          </div>
          <Button 
            onClick={handleNewPayment}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Payment
          </Button>
        </div>  

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {DASHBOARD_STATS.map((stat) => (
          <KPICard key={stat.name} stat={stat} />
        ))}
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <TransactionsTable 
            transactions={filteredTransactions}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {QUICK_ACTIONS.map((action, index) => {
          const IconComponent = {
            Shield,
            AlertTriangle,
            Clock
          }[action.icon];

          return (
            <ActionCard
              key={index}
              icon={IconComponent}
              title={action.title}
              description={action.description}
              iconColor={action.iconColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;

