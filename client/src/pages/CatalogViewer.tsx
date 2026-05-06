import Layout from "@/components/Layout";
import { Helmet } from "react-helmet";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const CATALOG_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663043532643/92Rt6gRG83YU52q7K3xNuA/catalogo-maquinaria-topke-2026_36de8618.pdf";

export default function CatalogViewer() {
  return (
    <Layout>
      <Helmet>
        <title>Catálogo de Maquinaria 2026 | Grupo Topke Guatemala</title>
      </Helmet>

      {/* Header */}
      <section className="bg-zinc-900 py-6 border-b border-zinc-800">
        <div className="container flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            <Link href="/maquinaria" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm">
              <ArrowLeft size={16} />
              Volver a Maquinaria
            </Link>
            <div className="h-4 w-px bg-zinc-700 hidden sm:block" />
            <h1 className="text-white font-bold uppercase tracking-wider text-sm sm:text-base">
              Catálogo Completo 2026
            </h1>
          </div>
          <a
            href={CATALOG_URL}
            download="Catalogo-Maquinaria-Topke-2026.pdf"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider px-5 py-2.5 text-sm transition-colors"
          >
            <Download size={16} />
            Descargar PDF
          </a>
        </div>
      </section>

      {/* PDF Viewer */}
      <section className="bg-zinc-800 min-h-screen">
        <div className="w-full" style={{ height: "calc(100vh - 130px)" }}>
          <iframe
            src={`${CATALOG_URL}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
            className="w-full h-full border-0"
            title="Catálogo de Maquinaria Topke 2026"
          />
        </div>
      </section>
    </Layout>
  );
}
