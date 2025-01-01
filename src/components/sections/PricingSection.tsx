"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, MoveRight, PhoneCall } from "lucide-react";
import { pricingPlans } from "@/config/pricing"; // Import pricing data

export default function PricingSection() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>Pricing</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Prices that make sense!
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Managing a small business today is already tough.
            </p>
          </div>
          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`w-full ${plan.variant === "outline" ? "rounded-md" : "shadow-2xl rounded-md"}`}>
                <CardHeader>
                  <CardTitle>
                    <span className="flex flex-row gap-4 items-center font-normal">
                      {plan.title}
                    </span>
                  </CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-8 justify-start">
                    <p className="flex flex-row items-center gap-2 text-xl">
                      <span className="text-4xl">${plan.price}</span>
                      <span className="text-sm text-muted-foreground">/ month</span>
                    </p>
                    <div className="flex flex-col gap-4 justify-start">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex flex-row gap-4">
                          <Check className="w-4 h-4 mt-2 text-primary" />
                          <div className="flex flex-col">
                            <p>{feature}</p>
                            <p className="text-muted-foreground text-sm">
                              We’ve made it {feature.toLowerCase()}.
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant={plan.variant === "outline" ? "outline" : "default"} className="gap-4">
                      {plan.buttonLabel}{" "}
                      {plan.buttonIcon === "MoveRight" ? <MoveRight className="w-4 h-4" /> : <PhoneCall className="w-4 h-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
