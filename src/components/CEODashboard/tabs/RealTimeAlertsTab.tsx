
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";

export const RealTimeAlertsTab = () => {
  const additionalAlerts = [
    { type: "Unapproved Dispatch", trigger: "Goods dispatched without FC or Inventory Manager signature", notify: "CEO, FC, Inventory Lead" },
    { type: "Inventory vs Sales Mismatch", trigger: "CRM says product sold, but Zoho bin shows 0 quantity", notify: "CEO, Inventory, Audit" },
    { type: "Unknown POS Credit", trigger: "Payment landed in Moniepoint with no order tagged to phone number", notify: "CEO, FC" },
    { type: "WhatsApp Number Reuse", trigger: "Multiple orders linked to same phone number within 24h", notify: "Fraud Desk, Telesales" },
    { type: "Late CRM Sync > 15 mins", trigger: "CRM webhook or Zoho sync delay > 15 minutes", notify: "Tech, FC" },
    { type: "Delivery After Sunset (7pm)", trigger: "Delivery marked after 7pm without override or flag", notify: "CEO, Ops Lead" },
    { type: "Product Switched in Transit", trigger: "DA records change in SKU or bundle after package creation", notify: "FC, CEO, Logistics" },
    { type: "Repeated SLA Miss (Same DA)", trigger: "DA fails OTP, proof upload, or timing SLA >3 times in a week", notify: "CEO, HR, Ops Lead" },
    { type: "Suspicious Manual Edit Spike", trigger: "More than 5 manual edits done in a day across CRM or Inventory", notify: "CEO, Audit" },
    { type: "High-Cost Region Spike", trigger: "Orders from a region with Cost per Delivery or Ad Spend suddenly 2x avg.", notify: "CEO, Finance" },
    { type: "Staff Suspicion Index 🚩", trigger: "Late > 3x/week, repeated login absence, tampering logs, phone unreachability", notify: "CEO, HR, FC" },
    { type: "Staff Bypass Attempt", trigger: "Staff tries to approve or override a field above their access rights", notify: "CEO, Admin" },
    { type: "Shadow Work Spike", trigger: "Work done outside regular hours with no matching log or proof", notify: "CEO, HR" },
    { type: "Ghost Login", trigger: "Staff login recorded from unknown IP or device", notify: "CEO, Tech" },
    { type: "Staff Daily Risk Score ⚖️", trigger: "Real-time score generated using lateness, error flags, override attempts, audit gaps", notify: "CEO, HR, GM" }
  ];

  return (
    <TabsContent value="real-time-alerts" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-green-600" />
            Real-Time Alert Log & WhatsApp Triggers
          </CardTitle>
          <CardDescription>Complete audit trail of all alerts sent to CEO, FC, and team members</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Alert System Status</h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-green-700">Last Alert Sent:</span>
                <p className="font-medium">Today 2:34 PM</p>
              </div>
              <div>
                <span className="text-green-700">Total Alerts Today:</span>
                <p className="font-medium">8 alerts</p>
              </div>
              <div>
                <span className="text-green-700">Unresolved:</span>
                <p className="font-medium text-red-600">3 critical</p>
              </div>
              <div>
                <span className="text-green-700">Auto-Escalated:</span>
                <p className="font-medium">1 (30min rule)</p>
              </div>
            </div>
          </div>

          <h4 className="font-semibold mb-3">All Alert Types & Triggers</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Alert Type</TableHead>
                <TableHead>Trigger Condition</TableHead>
                <TableHead>Notify</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {additionalAlerts.map((alert, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{alert.type}</TableCell>
                  <TableCell className="text-sm max-w-md">{alert.trigger}</TableCell>
                  <TableCell className="text-sm">{alert.notify}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-green-700">Active</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
