import Layout from "@/components/Layout";
import { OptimizedImage } from "@/components/OptimizedImage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, Tractor, Zap, Droplets, Anchor } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Contact() {
  useEffect(() => {
    document.title = "Contacto | Grupo Topke Guatemala";
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Contacto | Grupo Topke Guatemala</title>
        <meta name="description" content="Contáctenos para cotizaciones de maquinaria, riego, generadores y equipos industriales. Tel: +502 2224 8080. Más de 125 años de experiencia en Guatemala." />
        <meta name="keywords" content="contacto Topke, cotizaciones maquinaria, ventas equipos industriales, Guatemala, teléfono Topke, dirección Topke" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/rbjVrnKUQVDlzqrU.jpg" 
            alt="Contacto TopKe" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
        </div>

        <div className="container relative z-10 pt-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-none mb-4 uppercase">
              Contáctenos
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto font-light">
              Estamos listos para atender sus requerimientos y brindarle la mejor asesoría técnica.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-display font-bold text-zinc-900 mb-8 uppercase">Información de Contacto</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 uppercase mb-1">Teléfono</h3>
                  <p className="text-zinc-600 mb-1">Atención al cliente y Ventas</p>
                  <a href="tel:+50222248000" className="text-xl font-bold text-zinc-900 hover:text-primary transition-colors">
                    +(502) 2224-8000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 uppercase mb-1">Correo Electrónico</h3>
                  <p className="text-zinc-600 mb-1">Consultas generales y cotizaciones</p>
                  <a href="mailto:info@topke.com" className="text-xl font-bold text-zinc-900 hover:text-primary transition-colors">
                    info@topke.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 uppercase mb-1">Ubicación</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Vía 4, 5-52 Zona 4<br />
                    Ciudad de Guatemala, Guatemala
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 uppercase mb-1">Horario de Atención</h3>
                  <p className="text-zinc-600">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                  <p className="text-zinc-600">Sábado: 8:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Contact Options */}
          <div className="bg-zinc-50 p-8 border border-zinc-200">
            <h2 className="text-2xl font-display font-bold text-zinc-900 mb-6 uppercase">Chat Directo por WhatsApp</h2>
            <p className="text-zinc-600 mb-8">Seleccione el departamento con el que desea comunicarse para una atención personalizada e inmediata.</p>
            
            <div className="space-y-4">
              <a 
                href="https://wa.me/50222248080?text=Hola,%20tengo%20una%20consulta%20general" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-4 bg-white border border-zinc-200 hover:border-green-500 hover:bg-green-50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 group-hover:text-green-700">Atención General</h3>
                    <p className="text-sm text-zinc-500">Consultas y recepción</p>
                  </div>
                </div>
                <Send size={18} className="text-zinc-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
              </a>

              <a 
                href="https://wa.me/50222248080?text=Hola,%20me%20interesa%20cotizar%20maquinaria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-4 bg-white border border-zinc-200 hover:border-green-500 hover:bg-green-50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <Tractor size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 group-hover:text-green-700">Maquinaria</h3>
                    <p className="text-sm text-zinc-500">Ventas y repuestos</p>
                  </div>
                </div>
                <Send size={18} className="text-zinc-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
              </a>

              <a 
                href="https://wa.me/50222248080?text=Hola,%20necesito%20información%20sobre%20generadores" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-4 bg-white border border-zinc-200 hover:border-green-500 hover:bg-green-50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 group-hover:text-green-700">Generación</h3>
                    <p className="text-sm text-zinc-500">Plantas eléctricas y energía</p>
                  </div>
                </div>
                <Send size={18} className="text-zinc-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
              </a>

              <a 
                href="https://wa.me/50222248080?text=Hola,%20busco%20sistemas%20de%20riego" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-4 bg-white border border-zinc-200 hover:border-green-500 hover:bg-green-50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <Droplets size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 group-hover:text-green-700">Riego</h3>
                    <p className="text-sm text-zinc-500">Proyectos agrícolas</p>
                  </div>
                </div>
                <Send size={18} className="text-zinc-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
              </a>

              <a 
                href="https://wa.me/50222248080?text=Hola,%20consulto%20por%20motores%20marinos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-4 bg-white border border-zinc-200 hover:border-green-500 hover:bg-green-50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <Anchor size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 group-hover:text-green-700">Propulsión</h3>
                    <p className="text-sm text-zinc-500">Motores marinos e industriales</p>
                  </div>
                </div>
                <Send size={18} className="text-zinc-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-zinc-200 w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.9722346789!2d-90.5166!3d14.6166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM2JzU5LjgiTiA5MMKwMzEnMDAuMCJX!5e0!3m2!1sen!2sgt!4v1635789000000!5m2!1sen!2sgt" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          title="Ubicación TopKe"
        ></iframe>
      </section>
    </Layout>
  );
}
