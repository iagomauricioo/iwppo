import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

type LanguageOption = {
  value: string;
  label: string;
  icon: React.ReactNode;
};

export function LanguageSelector() {
  const languages: LanguageOption[] = [
    {
      value: "pt-br",
      label: "Português (BR)",
      icon: <BrazilFlagIcon className="h-4 w-4" />,
    },
    {
      value: "en",
      label: "English (US)",
      icon: <UsaFlagIcon className="h-4 w-4" />,
    },
  ];

  const [selectedLanguage, setSelectedLanguage] =
    React.useState<string>("pt-br");

  return (
    <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
      <SelectTrigger className="w-[180px] bg-transparent border-none focus:ring-0 focus:ring-offset-0">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <SelectValue placeholder="Select language" />
        </div>
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem key={language.value} value={language.value}>
            <div className="flex items-center gap-2">
              {language.icon}
              <span>{language.label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

interface FlagIconProps {
  className?: string;
}

function BrazilFlagIcon({ className }: FlagIconProps) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <rect width="512" height="512" fill="#009739" />
      <polygon points="256,80 40,256 256,432 472,256" fill="#FFCC29" />
      <circle cx="256" cy="256" r="80" fill="#002776" />
      <path
        d="M 190 290 C 230 250, 280 240, 322 262 C 300 230, 250 210, 210 220 C 170 230, 160 270, 190 290 Z"
        fill="white"
      />
    </svg>
  );
}

function UsaFlagIcon({ className }: FlagIconProps) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#bd3d44" d="M0 0h512v512H0z" />
      <path
        fill="#fff"
        d="M0 0h512v102.4H0zm0 204.8h512V307H0zm0 204.8h512v102.4H0z"
      />
      <path fill="#192f5d" d="M0 0h307.2v204.8H0z" />
      <path
        fill="#fff"
        d="m26.2 28.8 7.8 21.8h25.2l-20.4 14.8 7.8 21.8-20.4-14.8-20.4 14.8 7.8-21.8L0 50.6h25.2zm51 0 7.8 21.8h25.2l-20.4 14.8 7.8 21.8-20.4-14.8-20.4 14.8 7.8-21.8-20.4-14.8h25.2zm51 0 7.8 21.8h25.2l-20.4 14.8 7.8 21.8-20.4-14.8-20.4 14.8 7.8-21.8-20.4-14.8h25.2zm51 0 7.8 21.8h25.2l-20.4 14.8 7.8 21.8-20.4-14.8-20.4 14.8 7.8-21.8-20.4-14.8h25.2zm51 0 7.8 21.8h25.2l-20.4 14.8 7.8 21.8-20.4-14.8-20.4 14.8 7.8-21.8-20.4-14.8h25.2zm51 0 7.8 21.8h25.2l-20.4 14.8 7.8 21.8-20.4-14.8-20.4 14.8 7.8-21.8-20.4-14.8h25.2zm-229.8 51 7.8 21.8h25.2l-20.4 14.8 7.8 21.8-20.4-14.8-20.4 14.8 7.8-21.8-20.4-14.8h25.2zm51 0 7.8 21.8h25.2l-20.4 14.8 7.8 21.8-20.4-14.8-20.4 14.8 7.8-21.8-20.4-14.8h25.2zm51 0 7.8 21.8h25.2l-20.4 14.8 7.8 21.8-20.4-14.8-20.4 14.8 7.8-21.8-20.4-14.8h25.2zm51 0 7.8 21.8h25.2l-20.4 14.8 7.8 21.8-20.4-14.8-20.4 14.8 7.8-21.8-20.4-14.8h25.2zm51 0 7.8 21.8h25.2l-20.4 14.8 7.8 21.8-20.4-14.8-20.4 14.8 7.8-21.8-20.4-14.8h25.2z"
      />
    </svg>
  );
}
