import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Book, Shield, CreditCard, AlertTriangle, HelpCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Documentation = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: 'Getting Started',
      icon: Book,
      articles: [
        {
          title: 'What is SecureEscrow?',
          content: 'SecureEscrow is a secure payment platform that protects both buyers and sellers...'
        },
        {
          title: 'How to Create an Account',
          content: 'Follow these simple steps to create your SecureEscrow account...'
        },
        {
          title: 'Making Your First Transaction',
          content: 'Learn how to initiate and complete your first escrow transaction...'
        }
      ]
    },
    {
      title: 'Escrow Protection',
      icon: Shield,
      articles: [
        {
          title: 'Understanding Escrow Protection',
          content: 'Learn how our escrow protection safeguards your transactions...'
        },
        {
          title: 'Protection Levels Explained',
          content: 'Compare different protection levels and their benefits...'
        }
      ]
    },
    {
      title: 'Payments & Fees',
      icon: CreditCard,
      articles: [
        {
          title: 'Payment Methods',
          content: 'Explore the various payment methods available...'
        },
        {
          title: 'Fee Structure',
          content: 'Understand our transparent fee structure...'
        }
      ]
    },
    {
      title: 'Dispute Resolution',
      icon: AlertTriangle,
      articles: [
        {
          title: 'Dispute Process Overview',
          content: 'Learn about our dispute resolution process...'
        },
        {
          title: 'Filing a Dispute',
          content: 'Step-by-step guide to filing a dispute...'
        }
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Documentation</h1>
        <p className="text-gray-500">
          Everything you need to know about using SecureEscrow
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search documentation..."
          className="pl-10"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon className="h-5 w-5" />
                  <span>{category.title}</span>
                </CardTitle>
                <CardDescription>
                  {category.articles.length} articles in this category
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {category.articles.map((article, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{article.title}</AccordionTrigger>
                      <AccordionContent>
                        <div className="prose prose-sm max-w-none">
                          <p className="text-gray-600">{article.content}</p>
                          <Button variant="link" className="p-0">
                            Read more
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Help Center Card */}
      <Card className="bg-blue-50">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Need More Help?</h3>
              <p className="text-sm text-gray-600">
                Our support team is available 24/7 to assist you
              </p>
            </div>
            <Button>
              <HelpCircle className="mr-2 h-4 w-4" />
              Contact Support
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Documentation;