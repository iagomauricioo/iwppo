import Image from "next/image";
import Link from "next/link";
import { Globe, ExternalLink } from "lucide-react";

export interface MemberProps {
    name: string;
    title?: string;
    country: string;
    image: string;
    lattesUrl?: string | null;
}

interface EquipeGridProps {
    id?: string;
    title: string;
    subtitle?: string;
    description?: string;
    members: MemberProps[];
    stats?: { label: string; value: string }[];
}

export default function EquipeGrid({
    id,
    title,
    subtitle,
    description,
    members,
    stats,
}: EquipeGridProps) {
    return (
        <div className="w-full bg-gradient-to-b from-sky-100 to-blue-50 px-4 py-8 md:py-12 rounded-lg" id={id}>
            <div className="mx-auto max-w-7xl">
                <h1 className="mb-2 text-center text-3xl font-bold text-blue-900 md:mb-4 md:text-4xl">
                    {title}
                </h1>

                {subtitle && (
                    <h2 className="mb-6 text-center text-lg font-medium text-blue-600 md:hidden">
                        {subtitle}
                    </h2>
                )}

                {description && (
                    <div className="mb-8 hidden flex-col items-center md:flex">
                        <div className="mb-2 flex items-center gap-2">
                            <Globe className="h-5 w-5 text-blue-600" />
                            <h2 className="text-xl font-medium text-blue-600">{subtitle}</h2>
                        </div>
                        <p className="max-w-3xl text-center text-gray-700">{description}</p>
                    </div>
                )}

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className="rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-[1.02]"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full md:h-20 md:w-20">
                                    <Image
                                        src={member.image || "/placeholder.svg"}
                                        alt={`Foto de ${member.name}`}
                                        width={100}
                                        height={100}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-bold text-blue-900">
                                        {member.title ? `${member.title} ` : ""}
                                        {member.name}
                                    </h3>
                                    <div className="flex items-center gap-1 text-blue-600">
                                        <Globe className="h-4 w-4" />
                                        <span>{member.country}</span>
                                    </div>
                                    {member.lattesUrl && (
                                        <Link
                                            href={member.lattesUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-1 flex items-center gap-1 text-blue-500 hover:text-blue-700"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            <span>Currículo Lattes</span>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {stats && (
                    <div className="mt-6 grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="rounded-lg bg-blue-100 p-4 text-center shadow-sm"
                            >
                                <p className="text-xl font-bold text-blue-900">{stat.value}</p>
                                <p className="text-sm text-blue-700">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
