
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText } from "lucide-react";

export const DecisionsTab = () => {
  const decisionLog = [
    { date: "2024-01-10", decision: "Switched courier in North", context: "High delays + cost", outcome: "Reduced SLA breaches by 40%", lesson: "Vet regional partners deeply" },
    { date: "2024-01-05", decision: "Stopped ₦1000 discount promo", context: "High fraud rate", outcome: "Fraud reduced by 60%", lesson: "Test small before scaling promos" },
    { date: "2023-12-20", decision: "Added OTP for delivery confirmation", context: "DA payment mismatches", outcome: "99% payment accuracy", lesson: "Tech solutions beat manual processes" }
  ];

  return (
    <TabsContent value="decisions" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Decision Log + Lessons Learned
          </CardTitle>
          <CardDescription>Document key decisions and institutional knowledge</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Decision</TableHead>
                <TableHead>Context</TableHead>
                <TableHead>Outcome</TableHead>
                <TableHead>Lesson Learned</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {decisionLog.map((decision, index) => (
                <TableRow key={index}>
                  <TableCell>{decision.date}</TableCell>
                  <TableCell className="font-medium">{decision.decision}</TableCell>
                  <TableCell>{decision.context}</TableCell>
                  <TableCell>{decision.outcome}</TableCell>
                  <TableCell className="text-blue-700">{decision.lesson}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
