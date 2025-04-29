import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  const contactItems = t.raw('contactSection.items');
  const formFields: Record<string, { label: string; placeholder: string }> = t.raw('formSection.fields');

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mail': return <Mail className="h-6 w-6 text-blue-700" />;
      case 'Phone': return <Phone className="h-6 w-6 text-blue-700" />;
      case 'MapPin': return <MapPin className="h-6 w-6 text-blue-700" />;
      case 'Clock': return <Clock className="h-6 w-6 text-blue-700" />;
      default: return null;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto rounded-lg my-10" id="contato">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">{t('title')}</h1>
        <p className="text-blue-700 max-w-2xl mx-auto">{t('subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 px-4">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            {t('contactSection.title')}
          </h2>

          <div className="space-y-6">
            {contactItems.map((item: any, index: any) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  {renderIcon(item.icon)}
                </div>
                <div>
                  <h3 className="font-medium text-blue-900">{item.title}</h3>
                  <p className="text-blue-700">{item.content}</p>
                  {item.action && (
                    <a
                      href={item.icon === 'Mail' ? 'mailto:contato@evento.com.br' : 'https://wa.me/5511999999999'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-sm"
                    >
                      {item.action}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            {t('formSection.title')}
          </h2>

          <form className="space-y-4">
            {Object.entries(formFields).map(([fieldName, fieldData]) => (
              <div key={fieldName}>
                <label
                  htmlFor={fieldName}
                  className="block text-sm font-medium text-blue-900 mb-1"
                >
                  {fieldData.label}
                </label>
                {fieldName === 'message' ? (
                  <Textarea
                    id={fieldName}
                    placeholder={fieldData.placeholder}
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500 min-h-[150px]"
                  />
                ) : (
                  <Input
                    id={fieldName}
                    type={fieldName === 'email' ? 'email' : 'text'}
                    placeholder={fieldData.placeholder}
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                )}
              </div>
            ))}

            <Button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md transition-colors"
            >
              {t('formSection.submit')}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}