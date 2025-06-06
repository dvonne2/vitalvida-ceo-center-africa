
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Mail, Star, TrendingUp, Users, Package, Shield, Target } from "lucide-react";

interface CEODashboardTabsProps {
  currentCEO: string;
}

const CEODashboardTabs = ({ currentCEO }: CEODashboardTabsProps) => {
  const getHighlightedTab = () => {
    switch (currentCEO) {
      case "Tunde Odunayo": return "tunde";
      case "Juliet Anammah": return "juliet";
      case "Odunayo Eweniyi": return "odunayo";
      case "Tayo Oviosu": return "tayo";
      case "Bunmi Adeniba": return "bunmi";
      case "Adenike Ogunlesi": return "adenike";
      case "Sim Shagaya": return "sim";
      default: return "overview";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Executive Dashboard</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
          <Button variant="outline" size="sm">
            <Mail className="w-4 h-4 mr-2" />
            Email Digest
          </Button>
        </div>
      </div>

      <Tabs defaultValue={getHighlightedTab()} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 bg-slate-100">
          <TabsTrigger value="overview" className="text-xs">Overview</TabsTrigger>
          <TabsTrigger value="tunde" className="text-xs">Tunde</TabsTrigger>
          <TabsTrigger value="juliet" className="text-xs">Juliet</TabsTrigger>
          <TabsTrigger value="odunayo" className="text-xs">Odunayo</TabsTrigger>
          <TabsTrigger value="tayo" className="text-xs">Tayo</TabsTrigger>
          <TabsTrigger value="bunmi" className="text-xs">Bunmi</TabsTrigger>
          <TabsTrigger value="adenike" className="text-xs">Adenike</TabsTrigger>
          <TabsTrigger value="sim" className="text-xs">Sim</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <OverviewTab />
        </TabsContent>

        <TabsContent value="tunde">
          <TundeTab />
        </TabsContent>

        <TabsContent value="juliet">
          <JulietTab />
        </TabsContent>

        <TabsContent value="odunayo">
          <OdunayoTab />
        </TabsContent>

        <TabsContent value="tayo">
          <TayoTab />
        </TabsContent>

        <TabsContent value="bunmi">
          <BunmiTab />
        </TabsContent>

        <TabsContent value="adenike">
          <AdenikeTab />
        </TabsContent>

        <TabsContent value="sim">
          <SimTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Overview Tab Component
const OverviewTab = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="w-5 h-5 text-amber-500" />
          What Africa's Best Operators Would Want to See
        </CardTitle>
        <CardDescription>
          All-in-one view of what each CEO values most
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "Tunde Odunayo", focus: "Legacy Leadership & Enterprise Clarity", color: "bg-blue-100 text-blue-800" },
            { name: "Juliet Anammah", focus: "Consumer Behavior & Brand Pulse", color: "bg-emerald-100 text-emerald-800" },
            { name: "Odunayo Eweniyi", focus: "Execution Discipline & Automation", color: "bg-purple-100 text-purple-800" },
            { name: "Tayo Oviosu", focus: "Infrastructure & Risk Management", color: "bg-orange-100 text-orange-800" },
            { name: "Bunmi Adeniba", focus: "Product & Purpose-Driven Marketing", color: "bg-pink-100 text-pink-800" },
            { name: "Adenike Ogunlesi", focus: "Product Integrity & Team Culture", color: "bg-indigo-100 text-indigo-800" },
            { name: "Sim Shagaya", focus: "System Architecture & Scale Engineering", color: "bg-slate-100 text-slate-800" }
          ].map((ceo) => (
            <Card key={ceo.name} className="border-l-4 border-l-slate-300">
              <CardContent className="p-4">
                <h4 className="font-semibold text-slate-800">{ceo.name}</h4>
                <Badge className={`mt-2 ${ceo.color}`}>{ceo.focus}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

// Individual CEO Tab Components
const TundeTab = () => (
  <div className="space-y-6">
    <Card className="border-l-4 border-l-blue-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="w-5 h-5 text-blue-600" />
          Legacy Leadership & Enterprise Clarity
        </CardTitle>
        <CardDescription>Organizational structure, governance, and operational maturity</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-800">67%</p>
                <p className="text-sm text-green-700">Department Health</p>
                <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800">Good</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-800">₦5.2M</p>
                <p className="text-sm text-yellow-700">Cash on Hand</p>
                <Badge variant="secondary" className="mt-2 bg-yellow-100 text-yellow-800">Monitor</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-800">18%</p>
                <p className="text-sm text-blue-700">Net Margin</p>
                <Badge variant="secondary" className="mt-2 bg-blue-100 text-blue-800">Healthy</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Decision Log & Lessons Learned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { date: "Feb 10", decision: "Switched to pre-paid DA system", result: "40% fewer cash issues", lesson: "Always audit payment flows quarterly" },
                { date: "Jan 28", decision: "Implemented OTP delivery confirmation", result: "Reduced unpaid deliveries by 42%", lesson: "Tech can solve trust issues at scale" },
                { date: "Jan 15", decision: "Added tamper-proof packaging", result: "Customer complaints down 60%", lesson: "Quality perception drives retention" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-slate-800">{item.decision}</p>
                    <p className="text-sm text-slate-600">{item.date} • {item.result}</p>
                  </div>
                  <Badge variant="outline">{item.lesson.split(' ')[0]}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  </div>
);

const JulietTab = () => (
  <div className="space-y-6">
    <Card className="border-l-4 border-l-emerald-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-emerald-600" />
          Consumer Behavior, Retention & Brand Pulse
        </CardTitle>
        <CardDescription>Customer funnel analysis and brand equity metrics</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-4 text-center">
              <p className="text-xl font-bold text-emerald-800">12,100</p>
              <p className="text-sm text-emerald-700">Leads from Ads</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4 text-center">
              <p className="text-xl font-bold text-blue-800">47%</p>
              <p className="text-sm text-blue-700">Lead→Sale Rate</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-4 text-center">
              <p className="text-xl font-bold text-purple-800">₦33,200</p>
              <p className="text-sm text-purple-700">Avg Order Value</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-4 text-center">
              <p className="text-xl font-bold text-pink-800">42%</p>
              <p className="text-sm text-pink-700">Repeat Purchase</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Customer Personas & Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "Zainab, 29", quote: "I just want my edges back before my wedding", location: "Lagos", orders: "3x repeat" },
                { name: "Fatima, 34", quote: "Postpartum hair loss is ruining my confidence", location: "Abuja", orders: "Bundle buyer" },
                { name: "Kemi, 26", quote: "Natural ingredients that actually work", location: "Ibadan", orders: "Referral queen" }
              ].map((persona, index) => (
                <Card key={index} className="border-l-4 border-l-emerald-400">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-slate-800">{persona.name}</h4>
                    <p className="text-sm text-slate-600 italic">"{persona.quote}"</p>
                    <div className="mt-2 flex justify-between text-xs text-slate-500">
                      <span>{persona.location}</span>
                      <Badge variant="outline">{persona.orders}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  </div>
);

const OdunayoTab = () => (
  <div className="space-y-6">
    <Card className="border-l-4 border-l-purple-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-purple-600" />
          Execution Discipline & Automation Logs
        </CardTitle>
        <CardDescription>Operational rigor and system integrity monitoring</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-4 text-center">
              <p className="text-xl font-bold text-green-800">99.2%</p>
              <p className="text-sm text-green-700">System Uptime</p>
              <Badge className="mt-1 bg-green-100 text-green-800">Excellent</Badge>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-4 text-center">
              <p className="text-xl font-bold text-yellow-800">2.1%</p>
              <p className="text-sm text-yellow-700">Refund Rate</p>
              <Badge className="mt-1 bg-yellow-100 text-yellow-800">Target</Badge>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4 text-center">
              <p className="text-xl font-bold text-blue-800">₁₄₃K</p>
              <p className="text-sm text-blue-700">Saved by Automation</p>
              <Badge className="mt-1 bg-blue-100 text-blue-800">Monthly</Badge>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Growth Engine Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { metric: "Leads from Ads", thisWeek: "12,100", lastWeek: "10,500", delta: "+15%", status: "up" },
                { metric: "Calls Made", thisWeek: "9,200", lastWeek: "8,900", delta: "+3%", status: "up" },
                { metric: "Orders Confirmed", thisWeek: "5,700", lastWeek: "4,850", delta: "+17%", status: "up" },
                { metric: "Delivery Rate", thisWeek: "67%", lastWeek: "70%", delta: "-3%", status: "down" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                  <span className="font-medium text-slate-800">{item.metric}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold">{item.thisWeek}</span>
                    <Badge className={item.status === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                      {item.delta}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  </div>
);

const TayoTab = () => (
  <div className="space-y-6">
    <Card className="border-l-4 border-l-orange-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="w-5 h-5 text-orange-600" />
          Operational Infrastructure & Risk Map
        </CardTitle>
        <CardDescription>Infrastructure resilience and field operations stability</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-4 text-center">
              <p className="text-xl font-bold text-green-800">₦0</p>
              <p className="text-sm text-green-700">DA Cash Exposure</p>
              <Badge className="mt-1 bg-green-100 text-green-800">Safe</Badge>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4 text-center">
              <p className="text-xl font-bold text-blue-800">98.7%</p>
              <p className="text-sm text-blue-700">Payment Match Rate</p>
              <Badge className="mt-1 bg-blue-100 text-blue-800">Excellent</Badge>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-4 text-center">
              <p className="text-xl font-bold text-purple-800">127</p>
              <p className="text-sm text-purple-700">Active DAs</p>
              <Badge className="mt-1 bg-purple-100 text-purple-800">6 States</Badge>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-4 text-center">
              <p className="text-xl font-bold text-orange-800">₦3,800</p>
              <p className="text-sm text-orange-700">Profit per Order</p>
              <Badge className="mt-1 bg-orange-100 text-orange-800">Net</Badge>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Scale Readiness Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { component: "DA Capacity", current: "1,200 orders/day", max: "2,500 orders/day", health: "green", utilization: "48%" },
                { component: "Telesales Team", current: "350 calls/day", max: "500 calls/day", health: "yellow", utilization: "70%" },
                { component: "Inventory Buffer", current: "45 days stock", max: "60 days stock", health: "green", utilization: "75%" },
                { component: "CRM Automation", current: "2.3s latency", max: "5.0s SLA", health: "green", utilization: "46%" }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-slate-800">{item.component}</span>
                    <Badge className={
                      item.health === 'green' ? 'bg-green-100 text-green-800' :
                      item.health === 'yellow' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'
                    }>
                      {item.utilization}
                    </Badge>
                  </div>
                  <div className="text-sm text-slate-600">
                    {item.current} / {item.max}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  </div>
);

const BunmiTab = () => (
  <div className="space-y-6">
    <Card className="border-l-4 border-l-pink-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="w-5 h-5 text-pink-600" />
          Product Perception & Purpose-Driven Marketing
        </CardTitle>
        <CardDescription>Brand story performance and emotional connection metrics</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-4 text-center">
              <p className="text-xl font-bold text-pink-800">+23%</p>
              <p className="text-sm text-pink-700">Brand Awareness</p>
              <Badge className="mt-1 bg-pink-100 text-pink-800">MoM Growth</Badge>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-4 text-center">
              <p className="text-xl font-bold text-purple-800">18%</p>
              <p className="text-sm text-purple-700">Referral Rate</p>
              <Badge className="mt-1 bg-purple-100 text-purple-800">Advocacy</Badge>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-4 text-center">
              <p className="text-xl font-bold text-amber-800">4.8/5</p>
              <p className="text-sm text-amber-700">Product Rating</p>
              <Badge className="mt-1 bg-amber-100 text-amber-800">Quality</Badge>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Brand Purpose Pillars</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { pillar: "Beauty & Confidence", impact: "42% report increased confidence", metric: "Self-esteem boost" },
                { pillar: "Ancestral Heritage", impact: "67% connect with Fulani roots", metric: "Cultural pride" },
                { pillar: "Financial Empowerment", impact: "127 DAs earning income", metric: "Economic impact" },
                { pillar: "Natural Wellness", impact: "89% prefer natural ingredients", metric: "Health consciousness" }
              ].map((item, index) => (
                <Card key={index} className="border-l-4 border-l-pink-400">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-slate-800">{item.pillar}</h4>
                    <p className="text-sm text-slate-600 mt-1">{item.impact}</p>
                    <Badge variant="outline" className="mt-2">{item.metric}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  </div>
);

const AdenikeTab = () => (
  <div className="space-y-6">
    <Card className="border-l-4 border-l-indigo-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="w-5 h-5 text-indigo-600" />
          Product Integrity, People & the Promise We Keep
        </CardTitle>
        <CardDescription>Craftsmanship, consistency, and team culture excellence</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-4 text-center">
              <p className="text-xl font-bold text-green-800">1.9%</p>
              <p className="text-sm text-green-700">Quality Issues</p>
              <Badge className="mt-1 bg-green-100 text-green-800">Excellent</Badge>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4 text-center">
              <p className="text-xl font-bold text-blue-800">4.2hrs</p>
              <p className="text-sm text-blue-700">Avg Response Time</p>
              <Badge className="mt-1 bg-blue-100 text-blue-800">Fast</Badge>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-4 text-center">
              <p className="text-xl font-bold text-indigo-800">96%</p>
              <p className="text-sm text-indigo-700">Staff Satisfaction</p>
              <Badge className="mt-1 bg-indigo-100 text-indigo-800">High</Badge>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Team Culture & Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { achievement: "Kemi (Telesales) hit 100% delivery rate after being on probation", impact: "Improved from 67% to 100%", date: "This week" },
                { achievement: "Lagos DA team achieved zero stock discrepancies", impact: "Saved ₦45,000 in potential losses", date: "Last week" },
                { achievement: "Customer service response time improved", impact: "From 8hrs to 4.2hrs average", date: "This month" },
                { achievement: "Zero workplace incidents or infractions", impact: "100% attendance for 3 weeks running", date: "March" }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-slate-50 rounded-lg border-l-4 border-l-indigo-400">
                  <h4 className="font-medium text-slate-800">{item.achievement}</h4>
                  <p className="text-sm text-slate-600 mt-1">{item.impact}</p>
                  <Badge variant="outline" className="mt-2">{item.date}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  </div>
);

const SimTab = () => (
  <div className="space-y-6">
    <Card className="border-l-4 border-l-slate-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="w-5 h-5 text-slate-600" />
          Vitalvida Architecture – Built to Survive & Scale in Nigeria
        </CardTitle>
        <CardDescription>System thinking, distribution engineering, and margin focus</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-4 text-center">
              <p className="text-lg font-bold text-slate-800">₦32,750</p>
              <p className="text-xs text-slate-600">AOV</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-4 text-center">
              <p className="text-lg font-bold text-slate-800">₦3,200</p>
              <p className="text-xs text-slate-600">CAC</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-4 text-center">
              <p className="text-lg font-bold text-slate-800">48%</p>
              <p className="text-xs text-slate-600">Gross Margin</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-4 text-center">
              <p className="text-lg font-bold text-slate-800">₦2,500</p>
              <p className="text-xs text-slate-600">Delivery Cost</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-4 text-center">
              <p className="text-lg font-bold text-green-800">₦3,800</p>
              <p className="text-xs text-green-700">Net Profit</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">System Flow Architecture</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
              <Badge variant="outline" className="px-3 py-1">Facebook Ad</Badge>
              <span>→</span>
              <Badge variant="outline" className="px-3 py-1">Lead Capture</Badge>
              <span>→</span>
              <Badge variant="outline" className="px-3 py-1">CRM Entry</Badge>
              <span>→</span>
              <Badge variant="outline" className="px-3 py-1">Telesales</Badge>
              <span>→</span>
              <Badge variant="outline" className="px-3 py-1">Order Created</Badge>
              <span>→</span>
              <Badge variant="outline" className="px-3 py-1">Auto-Package</Badge>
              <span>→</span>
              <Badge variant="outline" className="px-3 py-1">DA Assignment</Badge>
              <span>→</span>
              <Badge variant="outline" className="px-3 py-1">Delivery</Badge>
              <span>→</span>
              <Badge variant="outline" className="px-3 py-1">POS Payment</Badge>
              <span>→</span>
              <Badge className="px-3 py-1 bg-green-100 text-green-800">Payment Match</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Distribution Engineering</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { region: "Lagos", das: "47", velocity: "850 orders/week", efficiency: "94%" },
                { region: "Abuja", das: "23", velocity: "420 orders/week", efficiency: "89%" },
                { region: "Kano", das: "18", velocity: "280 orders/week", efficiency: "76%" },
                { region: "Port Harcourt", das: "15", velocity: "190 orders/week", efficiency: "82%" },
                { region: "Ibadan", das: "12", velocity: "150 orders/week", efficiency: "88%" },
                { region: "Kaduna", das: "12", velocity: "130 orders/week", efficiency: "73%" }
              ].map((region, index) => (
                <div key={index} className="p-3 bg-slate-50 rounded-lg flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-slate-800">{region.region}</h4>
                    <p className="text-sm text-slate-600">{region.das} DAs • {region.velocity}</p>
                  </div>
                  <Badge className={
                    parseInt(region.efficiency) > 90 ? 'bg-green-100 text-green-800' :
                    parseInt(region.efficiency) > 80 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }>
                    {region.efficiency}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  </div>
);

export default CEODashboardTabs;
