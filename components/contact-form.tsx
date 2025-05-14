"use client";

import type React from "react";

import { useState, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";

// Esquema de validação com Zod
const formSchema = z.object({
  name: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  subject: z
    .string()
    .min(5, { message: "Assunto deve ter pelo menos 5 caracteres" }),
  message: z
    .string()
    .min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const contactItems = t.raw("contactSection.items");
  const formFields: Record<
    string,
    { label: string; placeholder: string; required?: boolean }
  > = t.raw("formSection.fields");

  // Estados do formulário
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const formRef = useRef<HTMLFormElement>(null);

  // Função para renderizar ícones
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Mail":
        return <Mail className="h-6 w-6 text-blue-700" />;
      case "Phone":
        return <Phone className="h-6 w-6 text-blue-700" />;
      case "MapPin":
        return <MapPin className="h-6 w-6 text-blue-700" />;
      case "Clock":
        return <Clock className="h-6 w-6 text-blue-700" />;
      default:
        return null;
    }
  };

  // Manipulador de mudança de campo
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Limpar erro quando o usuário começa a digitar
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Manipulador de envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar formulário
    try {
      formSchema.parse(formData);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(newErrors);
        return;
      }
    }

    // Simular envio do formulário
    setFormState("submitting");

    try {
      // Aqui você implementaria a lógica real de envio do formulário
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormState("success");

      // Resetar formulário após sucesso
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setFormState("idle");
        if (formRef.current) {
          formRef.current.reset();
        }
      }, 3000);
    } catch (error) {
      setFormState("error");
      // Resetar estado de erro após alguns segundos
      setTimeout(() => {
        setFormState("idle");
      }, 3000);
    }
  };

  return (
    <div
      className="w-full max-w-6xl mx-auto rounded-lg my-10 px-4"
      id="contato"
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-blue-900 mb-4">{t("title")}</h1>
        <p className="text-blue-700 max-w-2xl mx-auto">{t("subtitle")}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <motion.div
          className="bg-white rounded-xl shadow-md p-6 md:p-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            {t("contactSection.title")}
          </h2>

          <div className="space-y-6">
            {contactItems.map((item: any, index: number) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ x: 5 }}
              >
                <div className="bg-blue-100 p-3 rounded-full">
                  {renderIcon(item.icon)}
                </div>
                <div>
                  <h3 className="font-medium text-blue-900">{item.title}</h3>
                  <p className="text-blue-700">{item.content}</p>
                  {item.action && item.actionLink && (
                    <a
                      href={item.actionLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 hover:underline text-sm inline-flex items-center mt-1 transition-colors"
                    >
                      {item.action}
                      <Send className="ml-1 h-3 w-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mapa incorporado */}
          <div className="mt-8 rounded-lg overflow-hidden border border-blue-100 shadow-sm h-[200px] md:h-[250px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.2562823147!2d-35.7358!3d-9.6498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzgnNTkuMyJTIDM1wrA0NCcwOS4wIlc!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do evento"
              aria-label="Mapa mostrando a localização do evento"
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-md p-6 md:p-8 relative"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            {t("formSection.title")}
          </h2>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            {Object.entries(formFields).map(([fieldName, fieldData]) => (
              <div key={fieldName}>
                <label
                  htmlFor={fieldName}
                  className="text-sm font-medium text-blue-900 mb-1 flex items-center"
                >
                  {fieldData.label}
                  {fieldData.required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </label>
                {fieldName === "message" ? (
                  <Textarea
                    id={fieldName}
                    name={fieldName}
                    placeholder={fieldData.placeholder}
                    className={`border-blue-200 focus:border-blue-500 focus:ring-blue-500 min-h-[150px] ${
                      errors[fieldName as keyof FormData]
                        ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                        : ""
                    }`}
                    value={formData[fieldName as keyof FormData] || ""}
                    onChange={handleChange}
                    disabled={
                      formState === "submitting" || formState === "success"
                    }
                    aria-invalid={!!errors[fieldName as keyof FormData]}
                    aria-describedby={
                      errors[fieldName as keyof FormData]
                        ? `${fieldName}-error`
                        : undefined
                    }
                  />
                ) : (
                  <Input
                    id={fieldName}
                    name={fieldName}
                    type={fieldName === "email" ? "email" : "text"}
                    placeholder={fieldData.placeholder}
                    className={`border-blue-200 focus:border-blue-500 focus:ring-blue-500 ${
                      errors[fieldName as keyof FormData]
                        ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                        : ""
                    }`}
                    value={formData[fieldName as keyof FormData] || ""}
                    onChange={handleChange}
                    disabled={
                      formState === "submitting" || formState === "success"
                    }
                    aria-invalid={!!errors[fieldName as keyof FormData]}
                    aria-describedby={
                      errors[fieldName as keyof FormData]
                        ? `${fieldName}-error`
                        : undefined
                    }
                  />
                )}
                {errors[fieldName as keyof FormData] && (
                  <p
                    id={`${fieldName}-error`}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors[fieldName as keyof FormData]}
                  </p>
                )}
              </div>
            ))}

            <Button
              type="submit"
              className={`w-full py-2 px-4 rounded-md transition-colors flex items-center justify-center ${
                formState === "submitting"
                  ? "bg-blue-600 cursor-not-allowed"
                  : formState === "success"
                  ? "bg-green-600 hover:bg-green-700"
                  : formState === "error"
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-blue-700 hover:bg-blue-800"
              }`}
              disabled={formState === "submitting" || formState === "success"}
            >
              {formState === "submitting" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("formSection.submitting")}
                </>
              ) : formState === "success" ? (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  {t("formSection.success")}
                </>
              ) : formState === "error" ? (
                <>
                  <AlertCircle className="mr-2 h-4 w-4" />
                  {t("formSection.error")}
                </>
              ) : (
                t("formSection.submit")
              )}
            </Button>
          </form>

          {/* Overlay de sucesso */}
          <AnimatePresence>
            {formState === "success" && (
              <motion.div
                className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <div className="bg-green-100 rounded-full p-3 mx-auto mb-4">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-700 text-center mb-2">
                    {t("formSection.successTitle")}
                  </h3>
                  <p className="text-green-600 text-center">
                    {t("formSection.successMessage")}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
