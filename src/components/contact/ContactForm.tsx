
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MathCaptcha } from "./MathCaptcha";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [captchaReset, setCaptchaReset] = useState(0);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isCaptchaValid) {
      toast({
        title: "Captcha-Fehler",
        description: "Bitte lösen Sie die Rechenaufgabe korrekt.",
        variant: "destructive"
      });
      setCaptchaReset(prev => prev + 1);
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Create FormData for Netlify submission
      const formDataForSubmission = new FormData();
      formDataForSubmission.append('form-name', 'contact');
      formDataForSubmission.append('name', formData.name);
      formDataForSubmission.append('email', formData.email);
      formDataForSubmission.append('company', formData.company);
      formDataForSubmission.append('message', formData.message);
      formDataForSubmission.append('recipient', 'fabio@5monti.com');

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataForSubmission as any).toString()
      });

      if (response.ok) {
        toast({
          title: "Nachricht gesendet!",
          description: "Vielen Dank für Ihre Nachricht. Wir werden uns bald bei Ihnen melden.",
        });
        
        setFormData({ name: "", email: "", company: "", message: "" });
        setCaptchaReset(prev => prev + 1);
        setIsCaptchaValid(false);
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Fehler",
        description: "Beim Senden der Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCaptchaChange = (isValid: boolean) => {
    setIsCaptchaValid(isValid);
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-light">Nachricht senden</CardTitle>
        <CardDescription>
          Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen zurück.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          data-netlify="true"
          name="contact"
          method="POST"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="recipient" value="fabio@5monti.com" />
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-Mail *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Unternehmen
            </label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Nachricht *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full"
              placeholder="Erzählen Sie uns von Ihrer Idee oder Ihrem Projekt..."
            />
          </div>
          
          <MathCaptcha 
            onCaptchaChange={handleCaptchaChange}
            shouldReset={captchaReset > 0}
          />
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#f0511e] text-white hover:bg-[#d4430f] font-medium py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
