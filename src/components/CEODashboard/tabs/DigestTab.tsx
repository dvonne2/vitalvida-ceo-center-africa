
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

interface DigestTabProps {
  emailDigestEnabled: boolean;
  setEmailDigestEnabled: (enabled: boolean) => void;
}

export const DigestTab = ({ emailDigestEnabled, setEmailDigestEnabled }: DigestTabProps) => {
  return (
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
  );
};
