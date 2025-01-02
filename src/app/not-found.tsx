import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { MoveRight } from 'lucide-react'

export default function NotFound() {
 return (
  <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
   <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
    <div className="max-w-md text-center">
     <h2 className="mb-8 font-extrabold text-9xl">
      <span className="sr-only">Error</span>
      <span className="text-primary">404</span>
     </h2>
     <p className="text-3xl font-semibold md:text-3xl mb-8">Sorry, we couldn't find this page.</p>
     <p className="mt-4 mb-8 text-lg text-muted-foreground">But dont worry, you can find plenty of other things on our homepage.</p>
     <Button asChild size="lg">
      <Link href="/" className="px-8 py-3 font-semibold rounded">
       Back to homepage
       <MoveRight className="ml-2 h-4 w-4" />
      </Link>
     </Button>
    </div>
   </div>
  </div>
 )
}

