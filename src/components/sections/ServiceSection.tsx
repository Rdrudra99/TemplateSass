'use client';

import Image from "next/image";
import React, { useState } from "react";
import { Card, Carousel } from "../common/apple-cards-carousel";
import { data, service } from "@/config/service";

// DummyContent component to show title, description, and image based on clicked card
interface DummyContentProps {
 description: string;
 title: string;
 imageSrc: string;
 onClick?: () => void;
 shortDescription: string;
}

const DummyContent: React.FC<DummyContentProps> = ({ description, title, imageSrc, shortDescription }) => {
 return (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
   <article className="mx-auto bg-[#F5F5F7] dark:bg-neutral-800 p-2 md:p-4 rounded-2xl">
    <div className="mb-8">
     <Image
      src={imageSrc}
      alt={title}
      width={800}
      height={500}
      className="w-full h-auto aspect-video object-cover rounded-lg"
     />
    </div>
    <h5 className="font-medium text-muted-foreground text-lg md:text-xl">{description}</h5>
   </article>
  </div>
 );
};

export default function ServiceSection() {
 const [selectedCard, setSelectedCard] = useState<any>(data[0]); // Default selected card is the first one

 const handleCardClick = (card: any) => {
  setSelectedCard(card); // Update selected card data
 };

 const cards = data.map((card, index) => (
  <Card
   key={card.src}
   card={{
    ...card,
    content: (
     <DummyContent
      title={card.title}
      description={card.description}
      imageSrc={card.src}
      shortDescription={card.shortDescription}
     />
    ),
    // @ts-ignore
    onClick: () => handleCardClick(card), // Handle card click
   }}
   index={index}
  />
 ));

 return (
  <div className="container mx-auto py-16">
   <div className="px-8">
    <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-primary">
     {service?.title}
    </h4>
    <h5 className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
     {service?.description}
    </h5>
   </div>
   <Carousel items={cards} />
  </div>
 );
}
