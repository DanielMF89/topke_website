import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  serviceType: z.string().optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      toast.success("¡Mensaje enviado exitosamente!");
      reset();
    },
    onError: (error) => {
      toast.error("Error al enviar el mensaje. Por favor intente nuevamente.");
      console.error(error);
    },
  });

  const onSubmit = (data: ContactForm) => {
    submitMutation.mutate(data);
  };

  return (
    <Layout>
      <div className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-1 w-16 bg-primary"></div>
                <span className="text-primary font-bold tracking-widest uppercase text-sm">
                  Contáctanos
                </span>
                <div className="h-1 w-16 bg-primary"></div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase mb-6 text-zinc-900">
                Estamos aquí para{" "}
                <span className="text-primary">ayudarte</span>
              </h1>
              <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                Completa el formulario y nos pondremos en contacto contigo lo
                antes posible.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-display font-bold uppercase mb-6 text-zinc-900">
                  Información de Contacto
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900 mb-1">
                        Dirección
                      </h3>
                      <p className="text-zinc-600">
                        Guatemala, Guatemala
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900 mb-1">
                        Teléfono
                      </h3>
                      <p className="text-zinc-600">+502 2224-8080</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900 mb-1">Email</h3>
                      <p className="text-zinc-600">info@topke.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-zinc-50 border-l-4 border-primary">
                  <h3 className="font-display font-bold text-lg mb-2 text-zinc-900">
                    Horario de Atención
                  </h3>
                  <p className="text-zinc-600">
                    Lunes a Viernes: 8:00 AM - 5:00 PM
                    <br />
                    Sábados: 8:00 AM - 12:00 PM
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-zinc-50 p-8 border-t-4 border-primary">
                <h2 className="text-2xl font-display font-bold uppercase mb-6 text-zinc-900">
                  Envíanos un Mensaje
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                      Nombre *
                    </label>
                    <Input
                      {...register("name")}
                      placeholder="Tu nombre completo"
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                      Email *
                    </label>
                    <Input
                      {...register("email")}
                      type="email"
                      placeholder="tu@email.com"
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                      Teléfono
                    </label>
                    <Input
                      {...register("phone")}
                      placeholder="+502 1234-5678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                      Tipo de Servicio
                    </label>
                    <Select
                      onValueChange={(value) => setValue("serviceType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="riego">Riego</SelectItem>
                        <SelectItem value="maquinaria">Maquinaria</SelectItem>
                        <SelectItem value="generacion">Generación</SelectItem>
                        <SelectItem value="propulsion">Propulsión</SelectItem>
                        <SelectItem value="logistica">Logística</SelectItem>
                        <SelectItem value="lubricantes">Lubricantes</SelectItem>
                        <SelectItem value="perforacion">Perforación</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      {...register("message")}
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      rows={5}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider"
                    disabled={submitMutation.isPending}
                  >
                    {submitMutation.isPending ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
