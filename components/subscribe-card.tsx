"use client";

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Check } from "lucide-react";

type SubscribeCardProps = {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  onButtonClick?: () => void;
};

export default function SubscribeCard({
  title,
  price,
  features,
  buttonText,
  onButtonClick,
}: SubscribeCardProps) {
  return (
    <Card className="w-72 min-h-[280px] flex flex-col justify-between shadow-md rounded-xl border-none">
      <CardHeader className="p-6 pb-0">
        <CardTitle className="text-[#0A2463] text-xl font-semibold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-start text-left gap-4 p-6 pt-2">
        <h3 className="text-3xl font-bold text-[#0077B6]">{price}</h3>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#0077B6]" />
              <p className="text-sm text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-center p-6 pt-0">
        <Button
          className="bg-[#003E7E] hover:bg-[#0056b3] text-white w-full rounded-md transition"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
