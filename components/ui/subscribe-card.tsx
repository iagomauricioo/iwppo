import { Button } from "./button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";

type SubscribeCardProps = {
    title: string;
    price: string;
    description: string;
    buttonText: string;
    onButtonClick?: () => void;
    headerColor?: string;
};

export default function SubscribeCard({
    title,
    price,
    description,
    buttonText,
    onButtonClick,
    headerColor = "#0077B6",
}: SubscribeCardProps) {
    return (
        <Card className="shadow-xl">
            <CardHeader className="rounded-lg mb-6 bg-[#0077B6]">
                <CardTitle className="text-xl font-bold text-white text-center">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-2xl font-bold">{price}</h3>
                    <p>{description}</p>
                </div>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button
                    className="bg-blue-950 text-white w-64 hover:bg-[#1b89c5]"
                    onClick={onButtonClick}
                >
                    {buttonText}
                </Button>
            </CardFooter>
        </Card>
    );
}
