
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  ShoppingCart, 
  Target, 
  AlertTriangle, 
  RefreshCw, 
  Zap,
  TrendingUp
} from "lucide-react";

export const DailyCommandTab = () => {
  return (
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
  );
};
