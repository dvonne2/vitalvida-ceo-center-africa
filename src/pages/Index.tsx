
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, Lock, Users, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const [currentCEO, setCurrentCEO] = useState("");
  const { toast } = useToast();

  const ceoAccess = {
    "TUNDE2024": "Tunde Odunayo",
    "JULIET2024": "Juliet Anammah", 
    "ODUNAYO2024": "Odunayo Eweniyi",
    "TAYO2024": "Tayo Oviosu",
    "BUNMI2024": "Bunmi Adeniba",
    "ADENIKE2024": "Adenike Ogunlesi",
    "SIM2024": "Sim Shagaya"
  };

  const handleLogin = () => {
    if (ceoAccess[accessCode.toUpperCase()]) {
      setCurrentCEO(ceoAccess[accessCode.toUpperCase()]);
      setIsAuthenticated(true);
      toast({
        title: `Welcome, ${ceoAccess[accessCode.toUpperCase()]}`,
        description: "Access granted to Vitalvida Command Center",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Invalid access code. Please check your credentials.",
        variant: "destructive",
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl mx-auto flex items-center justify-center">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-slate-800">Vitalvida Command Center</CardTitle>
              <CardDescription className="text-slate-600 mt-2">
                Built for Scale, Brand, and Systems
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="access-code" className="text-slate-700 font-medium">Access Code</Label>
              <Input
                id="access-code"
                type="password"
                placeholder="Enter your unique access code"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                className="border-slate-200 focus:border-emerald-500"
              />
            </div>
            <Button 
              onClick={handleLogin} 
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-medium"
            >
              <Lock className="w-4 h-4 mr-2" />
              Access Portal
            </Button>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 text-center">
                Exclusive access for invited industry leaders
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">Vitalvida Command Center</h1>
                <p className="text-sm text-slate-600">Welcome, {currentCEO}</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setIsAuthenticated(false)}
              className="text-slate-600 border-slate-300"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-emerald-50 to-emerald-100 border-emerald-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-700 text-sm font-medium">Monthly Orders</p>
                  <p className="text-2xl font-bold text-emerald-800">4,847</p>
                  <p className="text-emerald-600 text-xs">+23% vs last month</p>
                </div>
                <TrendingUp className="w-8 h-8 text-emerald-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-700 text-sm font-medium">Revenue (₦)</p>
                  <p className="text-2xl font-bold text-blue-800">158.7M</p>
                  <p className="text-blue-600 text-xs">18% net margin</p>
                </div>
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-700 text-sm font-medium">Active DAs</p>
                  <p className="text-2xl font-bold text-purple-800">127</p>
                  <p className="text-purple-600 text-xs">Across 6 states</p>
                </div>
                <Users className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <CEODashboardTabs currentCEO={currentCEO} />
      </div>
    </div>
  );
};

// Import the dashboard component that we'll create next
import CEODashboardTabs from "@/components/CEODashboardTabs";

export default Index;
