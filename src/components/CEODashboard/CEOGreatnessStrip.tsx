
import { Shield, AlertTriangle, Target, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const CEOGreatnessStrip = () => {
  const safetyMetrics = [
    { metric: "DA Cash Exposure", value: "₦0", status: "success", icon: Shield },
    { metric: "System Errors (Last 24h)", value: "2", status: "warning", icon: AlertTriangle },
    { metric: "Manual Overrides Today", value: "1", status: "warning", icon: Shield },
    { metric: "FC Honesty Audit Score", value: "88", status: "warning", icon: Shield }
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success": return <Badge className="bg-green-100 text-green-800">✅ Good</Badge>;
      case "warning": return <Badge className="bg-yellow-100 text-yellow-800">⚠️ Monitor</Badge>;
      case "error": return <Badge className="bg-red-100 text-red-800">❌ Fix</Badge>;
      case "critical": return <Badge className="bg-red-200 text-red-900">🚨 Critical</Badge>;
      case "info": return <Badge className="bg-blue-100 text-blue-800">🔔 Auto</Badge>;
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

  return (
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
  );
};
