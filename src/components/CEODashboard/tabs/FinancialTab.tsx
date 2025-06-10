
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export const FinancialTab = () => {
  return (
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
  );
};
