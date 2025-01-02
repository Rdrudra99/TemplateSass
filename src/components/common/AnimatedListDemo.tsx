"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "./animated-list";

interface Item {
 name: string;
 description: string;
 icon: string;
 color: string;
 time: string;
}

let notifications = [
 {
  name: "Payment received",
  description: "Magic UI",
  time: "15m ago",
  icon: "💸",
  color: "bg-emerald-500",
 },
 {
  name: "User signed up",
  description: "Magic UI",
  time: "10m ago",
  icon: "👤",
  color: "bg-amber-500",
 },
 {
  name: "New message",
  description: "Magic UI",
  time: "5m ago",
  icon: "💬",
  color: "bg-rose-500",
 },
 {
  name: "New event",
  description: "Magic UI",
  time: "2m ago",
  icon: "🗞️",
  color: "bg-blue-500",
 },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
 return (
  <figure
   className={cn(
    "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
    "transition-all duration-200 ease-in-out hover:scale-[103%]",
    "bg-background/80 backdrop-blur-sm",
    "border border-border",
    "shadow-sm hover:shadow-md dark:shadow-primary/5 dark:hover:shadow-primary/10",
   )}
  >
   <div className="flex flex-row items-center gap-3">
    <div
     className={cn(
      "flex size-10 items-center justify-center rounded-2xl",
      color
     )}
    >
     <span className="text-lg">{icon}</span>
    </div>
    <div className="flex flex-col overflow-hidden">
     <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-foreground">
      <span className="text-sm sm:text-lg">{name}</span>
      <span className="mx-1 text-muted-foreground">·</span>
      <span className="text-xs text-muted-foreground">{time}</span>
     </figcaption>
     <p className="text-sm font-normal text-muted-foreground">
      {description}
     </p>
    </div>
   </div>
  </figure>
 );
};

export function AnimatedListDemo({
 className,
}: {
 className?: string;
}) {
 return (
  <div
   className={cn(
    "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background/50 backdrop-blur-sm shadow-sm dark:shadow-primary/10",
    className,
   )}
  >
   <AnimatedList>
    {notifications.map((item, idx) => (
     <Notification {...item} key={idx} />
    ))}
   </AnimatedList>
  </div>
 );
}

