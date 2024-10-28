import React from 'react';
import {
  Shield,
  Clock,
  Calendar,
  User,
  FileText,
  Download,
  ExternalLink,
  MessageSquare,
  AlertTriangle
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Timeline,
  TimelineItem,
  TimelineIcon,
  TimelineContent,
  TimelineLine,
} from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const TransactionDetails = ({ transaction }) => {
  // Mock transaction data
  const mockTransaction = {
    id: 'TRX-001',
    date: '2024-10-28',
    amount: '₹5,000',
    status: 'In Escrow',
    seller: {
      name: 'Seller Name',
      upiId: 'seller@upi',
      rating: 4.8,
      totalTransactions: 150
    },
    escrow: {
      protection: 'Standard',
      fee: '₹50',
      releaseDate: '2024-11-05',
      terms: 'Standard escrow terms with 5-day delivery window'
    },
    timeline: [
      {
        date: '2024-10-28 14:30',
        event: 'Payment Initiated',
        description: 'Payment of ₹5,000 initiated to escrow'
      },
      {
        date: '2024-10-28 14:31',
        event: 'Payment Confirmed',
        description: 'Payment confirmed and held in escrow'
      },
      {
        date: '2024-10-28 14:32',
        event: 'Seller Notified',
        description: 'Seller notified about the new transaction'
      }
    ],
    progress: 40
  };

  return (
    <div className="space-y-6">
      {/* Transaction Header */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>Transaction #{mockTransaction.id}</CardTitle>
              <CardDescription>
                Initiated on {mockTransaction.date}
              </CardDescription>
            </div>
            <Badge variant={mockTransaction.status === 'In Escrow' ? 'default' : 'secondary'}>
              {mockTransaction.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Amount</p>
              <p className="text-2xl font-bold">{mockTransaction.amount}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Release Date</p>
              <p className="text-lg font-medium">{mockTransaction.escrow.releaseDate}</p>
            </div>
          </div>
          
          <div className="mt-6">
            <p className="text-sm text-gray-500 mb-2">Transaction Progress</p>
            <Progress value={mockTransaction.progress} />
          </div>
        </CardContent>
      </Card>

      {/* Seller Information */}
      <Card>
        <CardHeader>
          <CardTitle>Seller Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium">{mockTransaction.seller.name}</p>
                <p className="text-sm text-gray-500">{mockTransaction.seller.upiId}</p>
              </div>
              <Button variant="outline" size="sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                Contact Seller
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Rating</p>
                <p className="font-medium">{mockTransaction.seller.rating}/5.0</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Transactions</p>
                <p className="font-medium">{mockTransaction.seller.totalTransactions}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Escrow Details */}
      <Card>
        <CardHeader>
          <CardTitle>Escrow Protection</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Protection Level</p>
                <p className="font-medium">{mockTransaction.escrow.protection}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Escrow Fee</p>
                <p className="font-medium">{mockTransaction.escrow.fee}</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-700">
                {mockTransaction.escrow.terms}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Transaction Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockTransaction.timeline.map((event, index) => (
              <TimelineItem key={index}>
                <TimelineIcon icon={Clock} />
                <TimelineContent>
                  <h4 className="font-medium">{event.event}</h4>
                  <p className="text-sm text-gray-500">{event.date}</p>
                  {/* Continuing from the previous component... */}
                  <p className="text-sm mt-1">{event.description}</p>
                </TimelineContent>
                {index !== mockTransaction.timeline.length - 1 && <TimelineLine />}
              </TimelineItem>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download Receipt
          </Button>
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            View Contract
          </Button>
        </CardFooter>
      </Card>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <Button className="flex-1">
          <Shield className="mr-2 h-4 w-4" />
          Release Payment
        </Button>
        <Button variant="outline" className="flex-1">
          <MessageSquare className="mr-2 h-4 w-4" />
          Contact Support
        </Button>
        <Button variant="destructive" className="flex-1">
          <AlertTriangle className="mr-2 h-4 w-4" />
          Raise Dispute
        </Button>
      </div>
    </div>
  );
};

export default TransactionDetails;