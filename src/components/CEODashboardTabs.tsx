import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  DollarSign, 
  Target, 
  Calendar,
  FileText,
  Mail,
  FlaskConical,
  Download,
  Zap,
  Users,
  Package,
  ShoppingCart,
  RefreshCw,
  Shield,
  Clock,
  AlertCircle,
  CheckCircle,
  XCircle,
  Eye,
  Phone
} from "lucide-react";

interface CEODashboardTabsProps {
  currentCEO: string;
}

const CEODashboardTabs = ({ currentCEO }: CEODashboardTabsProps) => {
  const [emailDigestEnabled, setEmailDigestEnabled] = useState(false);

  // Mock data for the CEO Greatness Strip
  const safetyMetrics = [
    { metric: "DA Cash Exposure", value: "₦0", status: "success", icon: Shield },
    { metric: "System Errors (Last 24h)", value: "2", status: "warning", icon: AlertCircle },
    { metric: "Manual Overrides Today", value: "1", status: "warning", icon: Eye },
    { metric: "FC Honesty Audit Score", value: "88", status: "warning", icon: CheckCircle }
  ];

  const fireAlerts = [
    { type: "CRM Delay", description: "4 orders stuck at 'Called' >60 mins", assigned: "Joy", status: "error", priority: "high" },
    { type: "Refund Spike", description: "Conditioner SKU ↑ to 6.5% today", assigned: "FC", status: "warning", priority: "medium" },
    { type: "SLA Breach", description: "Lagos DA marked delivered w/o OTP", assigned: "Ops Lead", status: "error", priority: "high" },
    { type: "Today's Likely Fraud", description: "Order marked paid, no POS match (₦25,000)", assigned: "FC", status: "error", priority: "critical" },
    { type: "WhatsApp Alert Trigger", description: "🔔 Send if any 🔴 or ⚠️ fraud row appears", assigned: "System", status: "info", priority: "auto" }
  ];

  const executionMetrics = [
    { action: "Leads Called < 10 mins", target: "100%", actual: "86%", status: "warning" },
    { action: "Creative Uploads Today", target: "12", actual: "7", status: "error" },
    { action: "Packages Sealed w/ Proof", target: "100%", actual: "94%", status: "success" }
  ];

  const orderFlow = [
    { stage: "Orders Created Today", count: 164, source: "Zoho CRM" },
    { stage: "Out for Delivery", count: 91, source: "CRM > DAs" },
    { stage: "Delivered Today", count: 72, source: "OTP Confirm" },
    { stage: "Week's Orders", count: 856, source: "Zoho CRM" },
    { stage: "Week's Delivered", count: 611, source: "OTP Log" },
    { stage: "Month's Orders", count: 3412, source: "CRM Export" },
    { stage: "Month's Delivered", count: 2907, source: "CRM + Logs" }
  ];

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

  // Mock data - replace with real API calls
  const dailyMetrics = {
    cashOnHand: 8250000,
    ordersToday: 158,
    ordersYesterday: 142,
    adSpendToday: 132000,
    daExposure: 0,
    refundsYesterday: 3,
    topRisks: [
      "Low ROAS on TikTok ads (₦45K spent, 1 order)",
      "DA_KD-022 not responding (2 pending orders)",
      "Fulani Conditioner stockout in Abuja"
    ]
  };

  const performanceData = [
    { department: "Sales", metric: "Leads → Orders", target: "20%", actual: "18.5%", status: "warning" },
    { department: "Media", metric: "ROAS", target: "3.5x", actual: "3.2x", status: "warning" },
    { department: "Inventory", metric: "Stockouts", target: "0", actual: "1", status: "error" },
    { department: "Logistics", metric: "Delivery Rate", target: "75%", actual: "68%", status: "error" },
    { department: "Finance", metric: "Burn Rate", target: "₦2.5M", actual: "₦2.8M", status: "warning" },
    { department: "Customer Service", metric: "Refund %", target: "<3%", actual: "2.1%", status: "success" }
  ];

  const exceptions = [
    { timestamp: "2024-01-15 09:23", category: "Finance", description: "DA exposure detected: ₦2,500", assignedTo: "Finance Head", status: "error" },
    { timestamp: "2024-01-15 08:45", category: "Media", description: "Ad set exceeded ₦50K with no orders", assignedTo: "Media Head", status: "warning" },
    { timestamp: "2024-01-14 16:30", category: "Inventory", description: "Fulani Shampoo idle for 8 days", assignedTo: "Ops Manager", status: "resolved" }
  ];

  const quarterlyObjectives = [
    { objective: "Launch Fulani Hair Gro Kids", quarter: "Q2", progress: 67, owner: "CEO", status: "warning" },
    { objective: "Expand to 100 DAs nationwide", quarter: "Q2", progress: 85, owner: "Ops Manager", status: "success" },
    { objective: "Achieve ₦50M revenue", quarter: "Q2", progress: 45, owner: "Sales Head", status: "error" },
    { objective: "Build customer referral system", quarter: "Q3", progress: 23, owner: "CTO", status: "success" }
  ];

  const decisionLog = [
    { date: "2024-01-10", decision: "Switched courier in North", context: "High delays + cost", outcome: "Reduced SLA breaches by 40%", lesson: "Vet regional partners deeply" },
    { date: "2024-01-05", decision: "Stopped ₦1000 discount promo", context: "High fraud rate", outcome: "Fraud reduced by 60%", lesson: "Test small before scaling promos" },
    { date: "2023-12-20", decision: "Added OTP for delivery confirmation", context: "DA payment mismatches", outcome: "99% payment accuracy", lesson: "Tech solutions beat manual processes" }
  ];

  const experiments = [
    { idea: "TikTok vs Facebook video ads", channel: "Social Media", startDate: "2024-01-10", owner: "Media Head", status: "Active", result: "CTR ↑23%, ROAS ↑41%", verdict: "Keep" },
    { idea: "₦1,000 off first order", channel: "Paid Ads", startDate: "2024-01-05", owner: "Marketing", status: "Completed", result: "High fraud, poor LTV", verdict: "Kill" },
    { idea: "Hair growth quiz funnel", channel: "Facebook", startDate: "2024-01-12", owner: "CTO", status: "Active", result: "Conversion ↑15%", verdict: "Keep" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success": return <Badge className="bg-green-100 text-green-800">✅ Good</Badge>;
      case "warning": return <Badge className="bg-yellow-100 text-yellow-800">⚠️ Monitor</Badge>;
      case "error": return <Badge className="bg-red-100 text-red-800">❌ Fix</Badge>;
      case "critical": return <Badge className="bg-red-200 text-red-900">🚨 Critical</Badge>;
      case "info": return <Badge className="bg-blue-100 text-blue-800">🔔 Auto</Badge>;
      case "resolved": return <Badge className="bg-blue-100 text-blue-800">✅ Resolved</Badge>;
      default: return <Badge className="bg-gray-100 text-gray-800">-</Badge>;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical": return "border-l-4 border-red-600 bg-red-50";
      case "high": return "border-l-4 border-orange-500 bg-orange-50";
      case "medium": return "border-l-4 border-yellow-500 bg-yellow-50";
      case "auto": return "border-l-4 border-blue-500 bg-blue-50";
      default: return "border-l-4 border-gray-300 bg-gray-50";
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="w-full">
      {/* 10-Second CEO Greatness Strip */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-6 mb-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          🧠 CEO Command Center – Vitalvida
          <span className="text-sm bg-white/20 px-2 py-1 rounded">Last updated: {new Date().toLocaleTimeString()}</span>
        </h2>
        
        {/* Are we safe? */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            🔒 Are we safe?
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {safetyMetrics.map((metric, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <metric.icon className="w-5 h-5" />
                  {getStatusIcon(metric.status)}
                </div>
                <p className="text-sm opacity-90 mt-1">{metric.metric}</p>
                <p className="text-xl font-bold">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Where is the fire? */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            🔥 Where is the fire?
          </h3>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="space-y-2">
              {fireAlerts.map((alert, index) => (
                <div key={index} className={`p-3 rounded-lg ${getPriorityColor(alert.priority)}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <span className="font-semibold text-gray-800">{alert.type}:</span>
                      <span className="text-gray-700 ml-2">{alert.description}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-600">→ {alert.assigned}</span>
                      {getStatusIcon(alert.status)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Is execution happening? */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Target className="w-5 h-5" />
            📊 Is execution happening?
          </h3>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {executionMetrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">{metric.action}</p>
                    <p className="text-lg font-semibold">{metric.actual} / {metric.target}</p>
                  </div>
                  {getStatusIcon(metric.status)}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Flow Tracker */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Package className="w-5 h-5" />
            📦 Order Flow Tracker
          </h3>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {orderFlow.map((flow, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl font-bold">{flow.count.toLocaleString()}</p>
                  <p className="text-sm opacity-90">{flow.stage}</p>
                  <p className="text-xs opacity-75">{flow.source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="real-time-alerts" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-9 mb-6">
          <TabsTrigger value="real-time-alerts" className="text-xs">🚨 Alerts</TabsTrigger>
          <TabsTrigger value="daily-command" className="text-xs">📍 Daily</TabsTrigger>
          <TabsTrigger value="performance" className="text-xs">📊 Performance</TabsTrigger>
          <TabsTrigger value="exceptions" className="text-xs">🚨 Exceptions</TabsTrigger>
          <TabsTrigger value="roadmap" className="text-xs">🎯 Roadmap</TabsTrigger>
          <TabsTrigger value="financial" className="text-xs">💰 P&L</TabsTrigger>
          <TabsTrigger value="decisions" className="text-xs">🧠 Decisions</TabsTrigger>
          <TabsTrigger value="digest" className="text-xs">📬 Digest</TabsTrigger>
          <TabsTrigger value="experiments" className="text-xs">🧪 Lab</TabsTrigger>
        </TabsList>

        {/* Real-Time Alert Log Tab */}
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

        {/* Daily Command Tab */}
        <TabsContent value="daily-command" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  Cash Position
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-700">₦8,250,000</div>
                <p className="text-sm text-gray-600 mt-1">GTB + Moniepoint + Zoho Books</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-blue-600" />
                  Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-700">164</div>
                <p className="text-sm text-gray-600 mt-1">Today vs 142 yesterday</p>
                <TrendingUp className="w-4 h-4 text-green-600 mt-1" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  Ad Spend Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-700">₦132,000</div>
                <p className="text-sm text-gray-600 mt-1">Facebook + TikTok + Google</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  DA Exposure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-700">₦0</div>
                <Badge className="bg-green-100 text-green-800 mt-2">✅ All Clear</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-orange-600" />
                  Refunds Yesterday
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-700">3</div>
                <p className="text-sm text-gray-600 mt-1">Quality + Delivery issues</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Zap className="w-5 h-5 text-red-600" />
                  Top Risks Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-red-700 bg-red-50 p-2 rounded">Low ROAS on TikTok ads (₦45K spent, 1 order)</p>
                  <p className="text-sm text-red-700 bg-red-50 p-2 rounded">DA_KD-022 not responding (2 pending orders)</p>
                  <p className="text-sm text-red-700 bg-red-50 p-2 rounded">Fulani Conditioner stockout in Abuja</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Performance Scoreboard */}
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

        {/* Exception Tracker */}
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

        {/* Quarterly Roadmap */}
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

        {/* P&L + Cashflow */}
        <TabsContent value="financial" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  P&L Snapshot
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Revenue (MTD)</span>
                    <span className="font-semibold text-green-600">₦42.5M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>COGS</span>
                    <span className="text-red-600">₦18.2M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ad Spend</span>
                    <span className="text-red-600">₦8.5M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Operational Costs</span>
                    <span className="text-red-600">₦6.8M</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-bold">
                    <span>Net Profit</span>
                    <span className="text-green-600">₦9.0M</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Expense Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Payroll</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                      </div>
                      <span className="text-sm">₦4.2M</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Ad Spend</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full w-full"></div>
                      </div>
                      <span className="text-sm">₦8.5M</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Inventory</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full w-4/5"></div>
                      </div>
                      <span className="text-sm">₦18.2M</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Refunds</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-red-600 h-2 rounded-full w-1/4"></div>
                      </div>
                      <span className="text-sm">₦890K</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Decision Log */}
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

        {/* Daily Digest */}
        <TabsContent value="digest" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Daily Digest Email Settings
              </CardTitle>
              <CardDescription>Configure automatic daily summary emails</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  id="digest-enabled"
                  checked={emailDigestEnabled}
                  onChange={(e) => setEmailDigestEnabled(e.target.checked)}
                />
                <Label htmlFor="digest-enabled">Enable Daily Digest Email</Label>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="digest-time">Send Time</Label>
                <Input id="digest-time" type="time" value="07:30" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="digest-email">Email Address</Label>
                <Input id="digest-email" type="email" placeholder="ceo@vitalvida.com" />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Daily Digest Preview:</h4>
                <div className="text-sm space-y-1">
                  <p>🌞 <strong>Vitalvida Daily Snapshot – January 15, 2024</strong></p>
                  <p>💰 Cash on Hand: ₦8,250,000</p>
                  <p>📦 Orders Yesterday: 142 confirmed, 96 delivered</p>
                  <p>🔄 Refunds: 3 (quality issues)</p>
                  <p>📱 Ad Spend: ₦132,000 (ROAS: 3.2x)</p>
                  <p>👥 Staff Absent: None</p>
                  <p>🔥 Top Fire: TikTok ad set underperforming</p>
                </div>
              </div>

              <Button>Save Digest Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Experiment Lab */}
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
      </Tabs>

      {/* Footer with last updated */}
      <div className="text-center text-sm text-gray-500 mt-8">
        Last Updated: {new Date().toLocaleString()} • Vitalvida CEO Command Center • Auto-refresh every 10 mins
      </div>
    </div>
  );
};

export default CEODashboardTabs;
