import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicy() {
 return (
  <div className="container mx-auto px-4 py-16 max-w-4xl">
   <article className="prose prose-slate dark:prose-invert lg:prose-xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center">Privacy Policy</h1>
    <p className="text-sm text-muted-foreground text-center mb-8">Last updated: 23rd Dec 2024</p>

    <Card className="mb-8">
     <CardContent className="p-6">
      <p className="lead">
       At <span className="font-semibold">Zoomsterhub</span>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
      </p>
     </CardContent>
    </Card>

    <section className="mb-12">
     <h2 className="text-3xl font-bold mb-4">Information We Collect</h2>
     <h3 className="text-2xl font-semibold mb-2">Personal Information</h3>
     <p className="mb-4">
      When you register for an account or use our services, we may collect personal information that can identify you, such as your name, email address, and payment information.
     </p>
     <h3 className="text-2xl font-semibold mb-2">Non-Personal Information</h3>
     <p className="mb-4">
      We may also collect non-personal information about your use of the service, such as IP addresses, browser types, referring URLs, and other technical data.
     </p>
     <h3 className="text-2xl font-semibold mb-2">Cookies and Tracking Technologies</h3>
     <p>
      We use cookies and similar tracking technologies to collect and store information about your interactions with our website. You can manage your cookie preferences through your browser settings.
     </p>
    </section>

    <Separator className="my-12" />

    <section className="mb-12">
     <h2 className="text-3xl font-bold mb-4">How We Use Your Information</h2>
     <h3 className="text-2xl font-semibold mb-2">Provide and Improve Services</h3>
     <p className="mb-4">We use the information we collect to:</p>
     <ul className="list-disc pl-6 mb-4">
      <li>Provide, operate, and maintain our services</li>
      <li>Improve and personalize your experience</li>
      <li>Process transactions and manage your account</li>
     </ul>
     <h3 className="text-2xl font-semibold mb-2">Communication</h3>
     <p className="mb-4">We may use your information to:</p>
     <ul className="list-disc pl-6 mb-4">
      <li>Send you updates, promotional materials, and other information related to our services</li>
      <li>Respond to your inquiries and provide customer support</li>
     </ul>
     <h3 className="text-2xl font-semibold mb-2">Analytics and Research</h3>
     <p className="mb-4">We use non-personal information for analytical purposes, such as:</p>
     <ul className="list-disc pl-6">
      <li>Monitoring and analyzing usage trends and preferences</li>
      <li>Conducting research and improving our services</li>
     </ul>
    </section>

    <Separator className="my-12" />

    <section className="mb-12">
     <h2 className="text-3xl font-bold mb-4">How We Share Your Information</h2>
     <h3 className="text-2xl font-semibold mb-2">Service Providers</h3>
     <p className="mb-4">
      We may share your information with third-party service providers who assist us in operating our services, such as payment processors, email services, and hosting providers.
     </p>
     <h3 className="text-2xl font-semibold mb-2">Legal Requirements</h3>
     <p className="mb-4">
      We may disclose your information if required to do so by law or in response to valid requests by public authorities.
     </p>
     <h3 className="text-2xl font-semibold mb-2">Business Transfers</h3>
     <p>
      In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred to the acquiring entity.
     </p>
    </section>

    <Separator className="my-12" />

    <section className="mb-12">
     <h2 className="text-3xl font-bold mb-4">Data Security and Retention</h2>
     <p className="mb-4">
      We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or alteration. However, no method of transmission over the internet or method of electronic storage is 100% secure.
     </p>
     <p>
      We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, comply with our legal obligations, resolve disputes, and enforce our agreements.
     </p>
    </section>

    <Separator className="my-12" />

    <section className="mb-12">
     <h2 className="text-3xl font-bold mb-4">Your Rights and Choices</h2>
     <h3 className="text-2xl font-semibold mb-2">Access and Update</h3>
     <p className="mb-4">
      You have the right to access and update your personal information. You can do this by logging into your account and updating your profile settings.
     </p>
     <h3 className="text-2xl font-semibold mb-2">Opt-Out</h3>
     <p className="mb-4">
      You can opt out of receiving promotional emails from us by following the unsubscribe instructions in those emails. You may also contact us directly to opt out.
     </p>
     <h3 className="text-2xl font-semibold mb-2">Data Deletion</h3>
     <p>
      You have the right to request the deletion of your personal information. Please contact us at support@zoomsterhub.com to make this request.
     </p>
    </section>

    <Separator className="my-12" />

    <section className="mb-12">
     <h2 className="text-3xl font-bold mb-4">Additional Information</h2>
     <h3 className="text-2xl font-semibold mb-2">Children's Privacy</h3>
     <p className="mb-4">
      Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.
     </p>
     <h3 className="text-2xl font-semibold mb-2">International Data Transfers</h3>
     <p className="mb-4">
      Your information may be transferred to and processed in countries other than your own. We will ensure that appropriate safeguards are in place to protect your personal information when it is transferred across borders.
     </p>
     <h3 className="text-2xl font-semibold mb-2">Changes to This Privacy Policy</h3>
     <p>
      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website and updating the "Last updated" date at the top of this page.
     </p>
    </section>
   </article>
  </div>
 )
}

