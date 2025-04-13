import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

type SubscribeCardProps = {
    title: string;
    price: string;
    description: string;
    buttonText: string;
    onButtonClick?: () => void;
};

export default function SubscribeCard({
    title,
    price,
    description,
    buttonText,
    onButtonClick,
}: SubscribeCardProps) {
    return (
        <Card className="w-72 min-h-[280px] flex flex-col justify-between shadow-md rounded-xl border border-gray-200">
            <CardHeader className="bg-[#0077B6] rounded-t-xl p-4 h-20 flex items-center justify-center">
                <CardTitle className="text-white text-center text-xl font-semibold">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center gap-2 p-6">
                <h3 className="text-2xl font-bold text-gray-900">{price}</h3>
                <p className="text-sm text-gray-700">{description}</p>
            </CardContent>

            <CardFooter className="flex justify-center pb-6">
                <Button
                    className="bg-blue-950 hover:bg-[#1b89c5] text-white w-48 rounded-full transition"
                    onClick={onButtonClick}
                >
                    {buttonText}
                </Button>
            </CardFooter>
        </Card>
    );
}
