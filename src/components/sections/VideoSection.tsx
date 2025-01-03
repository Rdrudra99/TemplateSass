import HeroVideoDialog from "../ui/hero-video-dialog";
export default function VideoSection() {
 return (
  <section className="">
   <div className="relative mx-auto container flex w-full items-center justify-center" style={{
    opacity: 1,
    willChange: "auto",
    transform: "none"
   }}>
    <div className="relative border rounded-lg shadow-lg max-w-screen-lg  mx-auto">
     <HeroVideoDialog
      className="dark:hidden block"
      animationStyle="from-center"
      videoSrc="https://www.youtube.com/embed/tWc0x1LaCDk?si=Zz8tnYwzkZEpZ0cG"
      thumbnailSrc="/video.png"
      thumbnailAlt="Hero Video"
     />
     <HeroVideoDialog
      className="hidden dark:block"
      animationStyle="from-center"
      videoSrc="https://www.youtube.com/embed/tWc0x1LaCDk?si=Zz8tnYwzkZEpZ0cG"
      thumbnailSrc="/video.png"
      thumbnailAlt="Hero Video"
     />
    </div>
    <div className="pointer-events-none absolute inset-x-0 -bottom-12 h-1/3 bg-gradient-to-t from-background via-background to-transparent lg:h-1/4"></div>
   </div>
  </section>
 );
}
