import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TermsAndConditions() {
 return (
  <div className="container mx-auto px-4 py-16 max-w-4xl">
   <article className="prose prose-slate dark:prose-invert lg:prose-xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center">Terms and Conditions</h1>
    <p className="text-sm text-muted-foreground text-center mb-8">Last updated: 23rd Dec 2024</p>

    <Card className="mb-8">
     <CardContent className="p-6">
      <p className="lead">
       Welcome to <span className="font-semibold">Zoomsterhub</span>. These Terms and Conditions govern your use of our website and services. By accessing or using Zoomsterhub, you agree to be bound by these Terms.
      </p>
     </CardContent>
    </Card>

    <section className="mb-12">
     <h2 className="text-3xl font-bold mb-4">1. Acceptance of Terms</h2>
     <p>
      By accessing or using Zoomsterhub, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these Terms, please do not use our services.
     </p>
    </section>

    <Separator className="my-12" />

    <section className="mb-12">
     <h2 className="text-3xl font-bold mb-4">2. Use of Services</h2>
     <h3 className="text-2xl font-semibold mb-2">2.1 Account Creation</h3>
     <p className="mb-4">
      To use certain features of Zoomsterhub, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
     </p>
     <h3 className="text-2xl font-semibold mb-2">2.2 Prohibited Activities</h3>
     <p className="mb-4">You agree not to:</p>
     <ul className="list-disc pl-6 mb-4">
      <li>Use Zoomsterhub for any unlawful purpose or in violation of these Terms</li>
      <li>Attempt to gain unauthorized access to any part of Zoomsterhub</li>
      <li>Interfere with or disrupt the operation of Zoomsterhub</li>
      <li>Collect or store personal data about other users without their consent</li>
     </ul>
    </section>

    <Separator className="my-12" />

    <section className="mb-12">
     <h2 className="text-3xl font-bold mb-4">3. Intellectual Property</h2>
     <p className="mb-4">
      All content, features, and functionality of Zoomsterhub, including but not limited to text, graphics, logos, and software, are the exclusive property of Zoomsterhub and are protected by copyright, trademark, and other intellectual property laws.
     </p>
    </section>

    <Separator className="my-12" />

    <section className="mb-12">
     <h2 className="text-3xl font-bold mb-4">4. Privacy</h2>
     <p className="mb-4">
      Your use of Zoomsterhub is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.
     </p>
    </section>

    <Separator className="my-12" />

    <section className="mb-12">
     <h2 className="text-3xl font-bold mb-4">5. Limitation of Liability</h2>
     <p className="mb-4">
      Zoomsterhub and its affiliates, officers, employees, agents, partners, and licensors shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from your use or inability to use the service.
     </p>
    </section>

    <Separator className="my-12" />

    <section className="mb-12">
     <h2 className="text-3xl font-bold mb-4">6. Modifications to Terms</h2>
     <p className="mb-4">
      We reserve the right to modify or replace these Terms at any time. We will provide notice of any material changes by posting the new Terms on this page and updating the "Last updated" date.
     </p>
    </section>

    <Separator className="my-12" />

    <section className="mb-12">
     <h2 className="text-3xl font-bold mb-4">7. Governing Law</h2>
     <p className="mb-4">
      These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
     </p>
    </section>

    <Separator className="my-12" />

    <section className="mb-12">
     <h2 className="text-3xl font-bold mb-4">8. Contact Us</h2>
     <p className="mb-4">
      If you have any questions about these Terms and Conditions, please contact us at support@zoomsterhub.com.
     </p>
    </section>

    <Card className="mt-12">
     <CardContent className="p-6">
      <p className="font-medium">
       By using Zoomsterhub, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
      </p>
     </CardContent>
    </Card>
   </article>
  </div>
 );
}

