
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

export const RoadmapTab = () => {
  const quarterlyObjectives = [
    { objective: "Launch Fulani Hair Gro Kids", quarter: "Q2", progress: 67, owner: "CEO", status: "warning" },
    { objective: "Expand to 100 DAs nationwide", quarter: "Q2", progress: 85, owner: "Ops Manager", status: "success" },
    { objective: "Achieve ₦50M revenue", quarter: "Q2", progress: 45, owner: "Sales Head", status: "error" },
    { objective: "Build customer referral system", quarter: "Q3", progress: 23, owner: "CTO", status: "success" }
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
    <TabsContent value="roadmap" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Quarterly Roadmap Tracker
          </CardTitle>
          <CardDescription>Track progress on key objectives and initiatives</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {quarterlyObjectives.map((objective, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{objective.objective}</h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{objective.quarter}</Badge>
                    {getStatusIcon(objective.status)}
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm text-gray-600">Owner: {objective.owner}</span>
                  <span className="text-sm font-medium">{objective.progress}% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-emerald-600 h-2 rounded-full" 
                    style={{ width: `${objective.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
