import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold font-heading mb-8">Terms of Service</h1>
            
            <Card>
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-6">
                    <strong>Last updated:</strong> January 15, 2024
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
                  <p className="mb-6">
                    By accessing and using callAI's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-4">Description of Service</h2>
                  <p className="mb-6">
                    callAI provides artificial intelligence consulting, development, and implementation services to businesses. Our services include but are not limited to AI strategy consulting, custom AI solution development, and ongoing support and maintenance.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-4">Use License</h2>
                  <p className="mb-4">Permission is granted to temporarily access callAI's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mb-4">Service Terms</h2>
                  <h3 className="text-xl font-semibold mb-3">Project Scope</h3>
                  <p className="mb-4">All projects will be defined by a written statement of work (SOW) that includes:</p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Project objectives and deliverables</li>
                    <li>Timeline and milestones</li>
                    <li>Pricing and payment terms</li>
                    <li>Responsibilities of both parties</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-3">Payment Terms</h3>
                  <p className="mb-4">Payment terms will be specified in each SOW. Generally:</p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Invoices are due within 30 days of receipt</li>
                    <li>Late payments may incur additional charges</li>
                    <li>All prices are exclusive of applicable taxes</li>
                    <li>Refunds are subject to our refund policy</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                  <p className="mb-4">Intellectual property ownership will be specified in each SOW. Generally:</p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Client retains ownership of their data and existing intellectual property</li>
                    <li>callAI retains ownership of its proprietary methodologies and tools</li>
                    <li>Custom-developed solutions may be jointly owned or assigned to client</li>
                    <li>Open source components remain subject to their respective licenses</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mb-4">Confidentiality</h2>
                  <p className="mb-6">
                    Both parties agree to maintain the confidentiality of all proprietary and confidential information disclosed during the course of the engagement. This obligation survives termination of the agreement.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                  <p className="mb-6">
                    In no event shall callAI be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-4">Warranties and Disclaimers</h2>
                  <p className="mb-4">Our services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to:</p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
                    <li>Warranties that the service will be uninterrupted, secure, or error-free</li>
                    <li>Warranties regarding the accuracy, reliability, or completeness of information</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mb-4">Termination</h2>
                  <p className="mb-6">
                    Either party may terminate the agreement with 30 days written notice. Upon termination, all outstanding payments become immediately due, and each party shall return or destroy confidential information of the other party.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                  <p className="mb-6">
                    These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                  <p className="mb-6">
                    We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on our website and updating the "Last updated" date.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                  <p className="mb-4">
                    If you have any questions about these Terms of Service, please contact us at:
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
