# Grupo Topke — Sitio Web Corporativo

![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![tRPC](https://img.shields.io/badge/tRPC-11-2596be)
![Drizzle](https://img.shields.io/badge/ORM-Drizzle-C5F74F)
![MySQL](https://img.shields.io/badge/MySQL-8-orange?logo=mysql)

Sitio web corporativo para Grupo Topke, empresa industrial guatemalteca con divisiones en maquinaria de construcción, generación de energía, sistemas de riego y propulsión. Incluye catálogo de productos, formulario de contacto y feed de Instagram integrado.

---

## ✨ Características

- **Sitio multi-división** — páginas dedicadas para cada línea de negocio (Maquinaria, Generación, Riego, Perforación, Propulsión)
- **Catálogo de productos** — listado de maquinaria con fichas técnicas y galería de imágenes
- **SEO optimizado** — meta tags dinámicos con React Helmet, sitemap.xml y robots.txt
- **Animaciones** — transiciones con Framer Motion
- **Formulario de contacto** — con validación y almacenamiento en base de datos
- **Instagram Feed** — integración de publicaciones recientes
- **Full-stack TypeScript** — tipado end-to-end con tRPC

---

## 🏗️ Arquitectura

```
topke_website/
├── client/               # Frontend React (Vite + TypeScript)
│   └── src/
│       ├── components/   # Layout, Navbar, BentoGrid, InstagramFeed...
│       ├── pages/        # Home, Maquinaria, Generación, Riego, Contacto...
│       └── hooks/
├── server/               # Backend Express + tRPC
│   ├── routers.ts        # Endpoints de la API
│   ├── db.ts             # Conexión MySQL con Drizzle
│   └── storage.ts        # Capa de datos
├── drizzle/              # Schema y migraciones
│   └── schema.ts
└── catalog_data.json     # Datos del catálogo de productos
```

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Frontend | React 19, Vite, TypeScript, Tailwind CSS v4 |
| UI | shadcn/ui, Radix UI, Framer Motion |
| SEO | React Helmet |
| Backend | Node.js, Express, tRPC v11 |
| ORM | Drizzle ORM |
| Base de datos | MySQL 8 |
| Auth | JWT + cookies (jose) |
| Storage | AWS S3 |

---

## 🚀 Instalación

### Prerrequisitos
- Node.js 20+
- pnpm
- MySQL 8

### 1. Instalar dependencias
```bash
pnpm install
```

### 2. Configurar variables de entorno
Crea un archivo `.env` en la raíz:
```env
DATABASE_URL=mysql://usuario:password@localhost:3306/topke
JWT_SECRET=tu-jwt-secret
AWS_ACCESS_KEY_ID=tu-access-key
AWS_SECRET_ACCESS_KEY=tu-secret-key
AWS_REGION=us-east-1
AWS_BUCKET_NAME=tu-bucket
```

### 3. Ejecutar migraciones
```bash
pnpm db:push
```

### 4. Iniciar en desarrollo
```bash
pnpm dev
```

Disponible en **http://localhost:5000**

### Build para producción
```bash
pnpm build
pnpm start
```

---

## 📄 Licencia

MIT
