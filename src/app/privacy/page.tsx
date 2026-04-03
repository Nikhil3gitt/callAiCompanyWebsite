import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold font-heading mb-8">Privacy Policy</h1>
            
            <Card>
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-6">
                    <strong>Last updated:</strong> January 15, 2024
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                  <p className="mb-6">
                    callAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                  <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                  <p className="mb-4">We may collect personal information that you voluntarily provide to us, including:</p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Company information and job title</li>
                    <li>Project details and requirements</li>
                    <li>Communication preferences</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-3">Usage Information</h3>
                  <p className="mb-4">We automatically collect certain information when you visit our website:</p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent on site</li>
                    <li>Referring website information</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                  <p className="mb-4">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Provide and improve our services</li>
                    <li>Respond to your inquiries and requests</li>
                    <li>Send you relevant information about our services</li>
                    <li>Analyze website usage and improve user experience</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
                  <p className="mb-4">We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>With your explicit consent</li>
                    <li>To trusted service providers who assist us in operating our website</li>
                    <li>When required by law or to protect our rights</li>
                    <li>In connection with a business transfer or acquisition</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                  <p className="mb-6">
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                  <p className="mb-4">You have the right to:</p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Data portability</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
                  <p className="mb-6">
                    We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                  <p className="mb-6">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p className="mb-4">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p><strong>Email:</strong> callai.jaypatel@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
