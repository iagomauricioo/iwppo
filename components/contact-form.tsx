import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function ContactPage() {
  return (
    <div className="w-full max-w-6xl mx-auto rounded-lg my-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Contato</h1>
        <p className="text-blue-700 max-w-2xl mx-auto">
          Entre em contato conosco através dos canais abaixo ou preencha o
          formulário.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 px-4">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            Fale Conosco
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Mail className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <h3 className="font-medium text-blue-900">Email</h3>
                <p className="text-blue-700">contato@iwppo.com</p>
                <a
                  href="mailto:contato@evento.com.br"
                  className="text-blue-500 hover:underline text-sm"
                >
                  Enviar email
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Phone className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <h3 className="font-medium text-blue-900">WhatsApp</h3>
                <p className="text-blue-700">(11) 99999-9999</p>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-sm"
                >
                  Enviar mensagem
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <h3 className="font-medium text-blue-900">Endereço</h3>
                <p className="text-blue-700">
                  Rua Professor Ângelo Neto, 51, Maceió, AL, 57051-530
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <h3 className="font-medium text-blue-900">
                  Horário de Atendimento
                </h3>
                <p className="text-blue-700">Segunda a Sexta: 9h às 18h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            Formulário de Contato
          </h2>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-blue-900 mb-1"
              >
                Nome
              </label>
              <Input
                id="name"
                placeholder="Seu nome completo"
                className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-blue-900 mb-1"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-blue-900 mb-1"
              >
                Assunto
              </label>
              <Input
                id="subject"
                placeholder="Assunto da mensagem"
                className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-blue-900 mb-1"
              >
                Mensagem
              </label>
              <Textarea
                id="message"
                placeholder="Digite sua mensagem aqui..."
                className="border-blue-200 focus:border-blue-500 focus:ring-blue-500 min-h-[150px]"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md transition-colors"
            >
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
