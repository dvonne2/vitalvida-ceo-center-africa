
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CEOGreatnessStrip } from "./CEOGreatnessStrip";
import { RealTimeAlertsTab } from "./tabs/RealTimeAlertsTab";
import { DailyCommandTab } from "./tabs/DailyCommandTab";
import { PerformanceTab } from "./tabs/PerformanceTab";
import { ExceptionsTab } from "./tabs/ExceptionsTab";
import { RoadmapTab } from "./tabs/RoadmapTab";
import { FinancialTab } from "./tabs/FinancialTab";
import { DecisionsTab } from "./tabs/DecisionsTab";
import { DigestTab } from "./tabs/DigestTab";
import { ExperimentsTab } from "./tabs/ExperimentsTab";

interface CEODashboardTabsProps {
  currentCEO: string;
}

const CEODashboardTabs = ({ currentCEO }: CEODashboardTabsProps) => {
  const [emailDigestEnabled, setEmailDigestEnabled] = useState(false);

  return (
    <div className="w-full">
      <CEOGreatnessStrip />

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

        <RealTimeAlertsTab />
        <DailyCommandTab />
        <PerformanceTab />
        <ExceptionsTab />
        <RoadmapTab />
        <FinancialTab />
        <DecisionsTab />
        <DigestTab 
          emailDigestEnabled={emailDigestEnabled}
          setEmailDigestEnabled={setEmailDigestEnabled}
        />
        <ExperimentsTab />
      </Tabs>

      <div className="text-center text-sm text-gray-500 mt-8">
        Last Updated: {new Date().toLocaleString()} • Vitalvida CEO Command Center • Auto-refresh every 10 mins
      </div>
    </div>
  );
};

export default CEODashboardTabs;
