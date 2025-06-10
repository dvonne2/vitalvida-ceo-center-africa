
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Download } from "lucide-react";

export const PerformanceTab = () => {
  const performanceData = [
    { department: "Sales", metric: "Leads → Orders", target: "20%", actual: "18.5%", status: "warning" },
    { department: "Media", metric: "ROAS", target: "3.5x", actual: "3.2x", status: "warning" },
    { department: "Inventory", metric: "Stockouts", target: "0", actual: "1", status: "error" },
    { department: "Logistics", metric: "Delivery Rate", target: "75%", actual: "68%", status: "error" },
    { department: "Finance", metric: "Burn Rate", target: "₦2.5M", actual: "₦2.8M", status: "warning" },
    { department: "Customer Service", metric: "Refund %", target: "<3%", actual: "2.1%", status: "success" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success": return <Badge className="bg-green-100 text-green-800">✅ Good</Badge>;
      case "warning": return <Badge className="bg-yellow-100 text-yellow-800">⚠️ Monitor</Badge>;
      case "error": return <Badge className="bg-red-100 text-red-800">❌ Fix</Badge>;
      default: return <Badge className="bg-gray-100 text-gray-800">-</Badge>;
    }
  };

  return (
    <TabsContent value="performance" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Departmental Performance
          </CardTitle>
          <CardDescription>Real-time KPIs vs targets across all departments</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Department</TableHead>
                <TableHead>Metric</TableHead>
                <TableHead>Target</TableHead>
                <TableHead>Actual</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {performanceData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{row.department}</TableCell>
                  <TableCell>{row.metric}</TableCell>
                  <TableCell>{row.target}</TableCell>
                  <TableCell>{row.actual}</TableCell>
                  <TableCell>{getStatusIcon(row.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex gap-2 mt-4">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
            <Button variant="outline" size="sm">Export PDF</Button>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
