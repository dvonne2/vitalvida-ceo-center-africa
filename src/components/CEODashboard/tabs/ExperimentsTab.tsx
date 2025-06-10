
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FlaskConical } from "lucide-react";

export const ExperimentsTab = () => {
  const experiments = [
    { idea: "TikTok vs Facebook video ads", channel: "Social Media", startDate: "2024-01-10", owner: "Media Head", status: "Active", result: "CTR ↑23%, ROAS ↑41%", verdict: "Keep" },
    { idea: "₦1,000 off first order", channel: "Paid Ads", startDate: "2024-01-05", owner: "Marketing", status: "Completed", result: "High fraud, poor LTV", verdict: "Kill" },
    { idea: "Hair growth quiz funnel", channel: "Facebook", startDate: "2024-01-12", owner: "CTO", status: "Active", result: "Conversion ↑15%", verdict: "Keep" }
  ];

  return (
    <TabsContent value="experiments" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FlaskConical className="w-5 h-5" />
            Experiment Lab
          </CardTitle>
          <CardDescription>Track business experiments and test outcomes</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Idea</TableHead>
                <TableHead>Channel</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Result</TableHead>
                <TableHead>Verdict</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {experiments.map((experiment, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{experiment.idea}</TableCell>
                  <TableCell>{experiment.channel}</TableCell>
                  <TableCell>{experiment.startDate}</TableCell>
                  <TableCell>{experiment.owner}</TableCell>
                  <TableCell>
                    <Badge variant={experiment.status === "Active" ? "default" : "secondary"}>
                      {experiment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{experiment.result}</TableCell>
                  <TableCell>
                    <Badge variant={experiment.verdict === "Keep" ? "default" : "destructive"}>
                      {experiment.verdict}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <Button className="mt-4">+ Add New Experiment</Button>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
