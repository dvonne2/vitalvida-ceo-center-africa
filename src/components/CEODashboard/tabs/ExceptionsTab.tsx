
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";

export const ExceptionsTab = () => {
  const exceptions = [
    { timestamp: "2024-01-15 09:23", category: "Finance", description: "DA exposure detected: ₦2,500", assignedTo: "Finance Head", status: "error" },
    { timestamp: "2024-01-15 08:45", category: "Media", description: "Ad set exceeded ₦50K with no orders", assignedTo: "Media Head", status: "warning" },
    { timestamp: "2024-01-14 16:30", category: "Inventory", description: "Fulani Shampoo idle for 8 days", assignedTo: "Ops Manager", status: "resolved" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "resolved": return <Badge className="bg-blue-100 text-blue-800">✅ Resolved</Badge>;
      case "warning": return <Badge className="bg-yellow-100 text-yellow-800">⚠️ Monitor</Badge>;
      case "error": return <Badge className="bg-red-100 text-red-800">❌ Fix</Badge>;
      default: return <Badge className="bg-gray-100 text-gray-800">-</Badge>;
    }
  };

  return (
    <TabsContent value="exceptions" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            Exception Tracker
          </CardTitle>
          <CardDescription>Auto-flagged issues requiring immediate attention</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {exceptions.map((exception, index) => (
                <TableRow key={index}>
                  <TableCell className="text-sm">{exception.timestamp}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{exception.category}</Badge>
                  </TableCell>
                  <TableCell>{exception.description}</TableCell>
                  <TableCell>{exception.assignedTo}</TableCell>
                  <TableCell>{getStatusIcon(exception.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
