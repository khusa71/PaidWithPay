import React, { useState } from 'react';
import { 
  AlertTriangle, 
  MessageCircle, 
  FileText, 
  Clock,
  CheckCircle,
  XCircle,
  ChevronDown
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Disputes = () => {
  const [selectedDispute, setSelectedDispute] = useState(null);

  // Mock dispute data
  const disputes = [
    {
      id: 'DSP-001',
      transactionId: 'TRX-001',
      date: '2024-10-28',
      status: 'Under Review',
      reason: 'Product not received',
      amount: '₹5,000',
      seller: 'seller@upi',
      timeline: [
        {
          date: '2024-10-28 14:30',
          event: 'Dispute initiated',
          description: 'Buyer reported non-receipt of product'
        },
        {
          date: '2024-10-28 15:45',
          event: 'Seller notified',
          description: 'Automated notification sent to seller'
        },
        {
          date: '2024-10-29 10:00',
          event: 'Seller response',
          description: 'Seller provided tracking information'
        }
      ]
    },
    // Add more mock disputes
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-700';
      case 'Resolved':
        return 'bg-green-100 text-green-700';
      case 'Rejected':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Disputes</h1>
          <p className="text-gray-500">Manage your transaction disputes</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Active Disputes</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Avg Resolution Time</p>
                <p className="text-2xl font-bold">48h</p>
              </div>
              <Clock className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Resolution Rate</p>
                <p className="text-2xl font-bold">95%</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Disputes List */}
      <Card>
        <CardHeader>
          <CardTitle>Active Disputes</CardTitle>
          <CardDescription>
            Review and manage your ongoing disputes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Dispute ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Transaction</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {disputes.map((dispute) => (
                <TableRow key={dispute.id}>
                  <TableCell className="font-mono">{dispute.id}</TableCell>
                  <TableCell>{dispute.date}</TableCell>
                  <TableCell className="font-mono">{dispute.transactionId}</TableCell>
                  <TableCell>{dispute.amount}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(dispute.status)}`}>
                      {dispute.status}
                    </span>
                  </TableCell>
                  <TableCell>{dispute.reason}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Dispute Details - {dispute.id}</DialogTitle>
                          <DialogDescription>
                            Review dispute information and updates
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          {/* Dispute Information */}
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-gray-500">Transaction ID</p>
                              <p className="font-mono">{dispute.transactionId}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Amount</p>
                              <p className="font-medium">{dispute.amount}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Seller</p>
                              <p className="font-mono">{dispute.seller}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Status</p>
                              <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(dispute.status)}`}>
                                {dispute.status}
                              </span>
                            </div>
                          </div>

                          {/* Timeline */}
                          <Accordion type="single" collapsible>
                            <AccordionItem value="timeline">
                              <AccordionTrigger>Dispute Timeline</AccordionTrigger>
                              <AccordionContent></AccordionContent>
                              {/* Continuing from the previous Disputes component... */}

<AccordionContent>
  <div className="space-y-4">
    {dispute.timeline.map((event, index) => (
      <div key={index} className="relative pb-8">
        {index !== dispute.timeline.length - 1 && (
          <span
            className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          />
        )}
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-blue-100 rounded-full ring-8 ring-white flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div>
              <div className="text-sm">
                <span className="font-medium text-gray-900">
                  {event.event}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                {event.date}
              </p>
            </div>
            <div className="mt-2 text-sm text-gray-700">
              <p>{event.description}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</AccordionContent>
                            </AccordionItem>
                          </Accordion>

                          {/* Actions */}
                          <div className="space-y-4">
                            <p className="font-medium">Actions</p>
                            <div className="flex space-x-3">
                              <Button variant="outline">
                                <MessageCircle className="mr-2 h-4 w-4" />
                                Send Message
                              </Button>
                              <Button variant="outline">
                                <FileText className="mr-2 h-4 w-4" />
                                Upload Evidence
                              </Button>
                              <Button variant="destructive">
                                <XCircle className="mr-2 h-4 w-4" />
                                Escalate
                              </Button>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Disputes;