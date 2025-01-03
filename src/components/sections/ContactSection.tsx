import { Mail, MapPin, Phone } from "lucide-react";
import { contactDetails } from '@/config/contactData';

export default function ContactSection() {
 return (
  <section className="py-32">
   <div className="container">
    <div className="mb-14">
     <span className="text-sm font-semibold">Reach Us</span>
     <h1 className="mb-3 mt-1 text-balance text-3xl font-semibold md:text-4xl">
      Speak with Our Friendly Team
     </h1>
     <p className="text-lg text-muted-foreground">
      We'd love to assist you. Fill out the form or drop us an email.
     </p>
    </div>
    <div className="grid gap-10 md:grid-cols-3">
     <div>
      <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
       <Mail className="h-6 w-auto" />
      </span>
      <p className="mb-2 text-lg font-semibold">{contactDetails.email.label}</p>
      <p className="mb-3 text-muted-foreground">
       {contactDetails.email.description}
      </p>
      <a href={contactDetails.email.link} className="font-semibold hover:underline">
       {contactDetails.email.value}
      </a>
     </div>
     <div>
      <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
       <MapPin className="h-6 w-auto" />
      </span>
      <p className="mb-2 text-lg font-semibold">{contactDetails.visit.label}</p>
      <p className="mb-3 text-muted-foreground">
       {contactDetails.visit.description}
      </p>
      <a href={contactDetails.visit.link} className="font-semibold hover:underline">
       {contactDetails.visit.value}
      </a>
     </div>
     <div>
      <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
       <Phone className="h-6 w-auto" />
      </span>
      <p className="mb-2 text-lg font-semibold">{contactDetails.call.label}</p>
      <p className="mb-3 text-muted-foreground">
       {contactDetails.call.description}
      </p>
      <a href={contactDetails.call.link} className="font-semibold hover:underline">
       {contactDetails.call.value}
      </a>
     </div>
    </div>
   </div>
  </section>
 );
}
