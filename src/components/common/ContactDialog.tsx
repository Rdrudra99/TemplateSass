'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactDialog() {
 const [open, setOpen] = useState(false)

 const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  // Handle form submission logic here
  console.log('Form submitted')
  setOpen(false)
 }

 return (
  <Dialog open={open} onOpenChange={setOpen}>
   <DialogTrigger asChild>
    <Button
     variant="ghost"
     size="sm"
     className="h-9 px-3 text-sm hidden lg:flex"
    >
     Contact
    </Button>
   </DialogTrigger>
   <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
     <DialogTitle>Contact Us</DialogTitle>
     <DialogDescription>
      Send us a message and we'll get back to you as soon as possible.
     </DialogDescription>
    </DialogHeader>
    <form onSubmit={handleSubmit} className="space-y-4">
     <div className="space-y-2">
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Your name" required />
     </div>
     <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Your email" required />
     </div>
     <div className="space-y-2">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Your message" required />
     </div>
     <Button type="submit">Send Message</Button>
    </form>
   </DialogContent>
  </Dialog>
 )
}

