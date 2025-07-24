
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar, Phone, Clock, CheckSquare, AlertCircle } from "lucide-react";

export const TeamDashboard = () => {
  const teamMetrics = {
    csat: {
      total: 92,
      byAgent: [
        { name: "Robbie", percentage: 82, color: "bg-blue-500" },
        { name: "Natasha", percentage: 94, color: "bg-blue-500" },
        { name: "Brie", percentage: 99, color: "bg-green-500" },
        { name: "John", percentage: 91, color: "bg-blue-500" },
        { name: "Cherry", percentage: 97, color: "bg-green-500" },
        { name: "Serena", percentage: 97, color: "bg-green-500" },
        { name: "Art", percentage: 89, color: "bg-blue-500" }
      ]
    },
    calls: {
      total: 2483,
      byAgent: [
        { name: "Robbie", count: 404 },
        { name: "Natasha", count: 403 },
        { name: "Brie", count: 246 },
        { name: "John", count: 389 },
        { name: "Cherry", count: 302 },
        { name: "Serena", count: 350 },
        { name: "Art", count: 389 }
      ]
    },
    avgCallTime: {
      team: "9.13m",
      byAgent: [
        { name: "Robbie", time: "7.45m" },
        { name: "Natasha", time: "9.05m" },
        { name: "Brie", time: "12.03m" },
        { name: "John", time: "8.56m" },
        { name: "Cherry", time: "10.24m" },
        { name: "Serena", time: "9.56m" },
        { name: "Art", time: "8.42m" }
      ]
    }
  };

  const projectTasks = [
    { category: "Customer follow up", count: 45 },
    { category: "Survey design", count: 19 },
    { category: "Testing", count: 16 },
    { category: "Content writing", count: 15 },
    { category: "Technical / backend", count: 8 },
    { category: "Internal comms", count: 4 },
    { category: "Design assets", count: 3 },
    { category: "Content audit", count: 1 }
  ];

  const upcomingLeave = [
    { date: "May 1st", person: "Robbie", days: 4 },
    { date: "May 22nd", person: "Cherry", days: 3, alert: true },
    { date: "May 22nd", person: "Art", days: 5 },
    { date: "May 30th", person: "Memorial day (all)", days: null }
  ];

  const birthdays = [
    { date: "May 22nd", person: "Cherry" },
    { date: "June 18th", person: "Robbie" },
    { date: "August 29th", person: "Natasha" }
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">Team Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* CSAT This Month */}
          <Card className="bg-white border border-slate-200 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-slate-700 text-lg">CSAT this month</CardTitle>
              <div className="text-4xl font-bold text-slate-800">{teamMetrics.csat.total}%</div>
              <p className="text-sm text-slate-500">total</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm font-medium text-slate-600 mb-2">By agent</p>
              {teamMetrics.csat.byAgent.map((agent, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">{agent.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${agent.color} rounded-full`}
                        style={{ width: `${agent.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{agent.percentage}%</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Calls This Month */}
          <Card className="bg-white border border-slate-200 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-slate-700 text-lg flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Calls this month
              </CardTitle>
              <div className="text-4xl font-bold text-slate-800">{teamMetrics.calls.total.toLocaleString()}</div>
              <p className="text-sm text-slate-500">Total</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm font-medium text-slate-600 mb-2">By agent</p>
              {teamMetrics.calls.byAgent.map((agent, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">{agent.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${(agent.count / 500) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{agent.count}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Average Call Time */}
          <Card className="bg-white border border-slate-200 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-slate-700 text-lg flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Avg. call time
              </CardTitle>
              <div className="text-4xl font-bold text-slate-800">{teamMetrics.avgCallTime.team}</div>
              <p className="text-sm text-slate-500">Team</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm font-medium text-slate-600 mb-2">By agent</p>
              {teamMetrics.avgCallTime.byAgent.map((agent, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">{agent.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${(parseFloat(agent.time) / 15) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{agent.time}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Outstanding Project Tasks */}
          <Card className="bg-white border border-slate-200 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-slate-700 text-lg flex items-center gap-2">
                <CheckSquare className="w-5 h-5" />
                Outstanding project tasks
              </CardTitle>
              <div className="text-4xl font-bold text-slate-800">47</div>
              <p className="text-sm text-slate-500">total</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm font-medium text-slate-600 mb-2">By grouping</p>
              {projectTasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">{task.category}</span>
                  <span className="text-sm font-medium text-slate-700">{task.count}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Leave & Birthdays */}
          <Card className="bg-white border border-slate-200 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-slate-700 text-lg flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Upcoming Leave
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingLeave.map((leave, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-700">{leave.date}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-600">{leave.person}</span>
                      {leave.alert && <AlertCircle className="w-4 h-4 text-red-500" />}
                    </div>
                  </div>
                  {leave.days && (
                    <Badge variant="outline" className="text-xs">
                      {leave.days} days
                    </Badge>
                  )}
                </div>
              ))}
              
              <div className="border-t pt-4 mt-4">
                <h4 className="text-sm font-medium text-slate-700 mb-2">Birthdays</h4>
                {birthdays.map((birthday, index) => (
                  <div key={index} className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">{birthday.date}</span>
                    <span className="text-sm font-medium text-slate-700">{birthday.person}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
