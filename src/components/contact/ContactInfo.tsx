
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-light">Kontaktinformationen</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start space-x-4">
            <Mail className="h-6 w-6 text-[#f0511e] mt-1" />
            <div>
              <h3 className="font-medium text-gray-900">E-Mail</h3>
              <p className="text-gray-600">Über unser Kontaktformular</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Phone className="h-6 w-6 text-[#f0511e] mt-1" />
            <div>
              <h3 className="font-medium text-gray-900">Beratungstermin</h3>
              <p className="text-gray-600">Direkt online buchen</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-[#f0511e] mt-1" />
            <div>
              <h3 className="font-medium text-gray-900">Standort</h3>
              <p className="text-gray-600">International tätig</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg bg-[#f0511e] text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-light text-white">Direkt Termin buchen</CardTitle>
          <CardDescription className="text-orange-100">
            Buchen Sie direkt einen unverbindlichen Beratungstermin
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => window.open('https://calendly.com/cinquemontiventures/cinquemontiventures', '_blank')}
            className="w-full bg-white text-[#f0511e] hover:bg-gray-100 font-medium py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Beratungstermin buchen
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
