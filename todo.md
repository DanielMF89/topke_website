# TODO - Sitio Web Corporativo Grupo Topke

## Generar Imágenes Profesionales de Maquinaria XCMG
- [x] Buscar imágenes de referencia de cada modelo:
  - [x] Mini Excavadoras: XE17U, XE27U, XE35U
  - [x] Excavadoras: XE60G, XE135G, XE215G
  - [x] Cargadores: XC7-SR08, LFW180, XC938, XC958
  - [x] Compactación: XS113, GR180
  - [x] Retroexcavadora: CX8-C2570
- [x] Generar imágenes profesionales de máquinas trabajando
- [x] Actualizar sitio web con nuevas imágenes
- [x] Verificar y crear checkpoint

## Tareas Completadas Anteriormente
- [x] Restaurar código desde GitHub
- [x] Ajustar imágenes de Instagram (object-contain)
- [x] Restaurar imágenes faltantes
- [x] Agregar catálogo de maquinaria XCMG con especificaciones

## Regenerar Imágenes de Mini Excavadoras
- [x] Regenerar XE17U: sin cabina, con banda de hule
- [x] Regenerar XE27U: sin cabina, con banda de metal
- [x] Regenerar XE35U: con banda de metal (mantener cabina)
- [x] Actualizar sitio web con nuevas imágenes
- [x] Verificar y crear checkpoint

## Regenerar Imágenes con Referencias Reales
- [x] Buscar imágenes reales de XCMG XE17U (sin cabina, banda hule)
- [x] Buscar imágenes reales de XCMG XE27U (sin cabina, banda metal)
- [x] Buscar imágenes reales de XCMG XE35U (cabina sin AC externo arriba)
- [x] Regenerar imágenes basadas en referencias reales
- [x] Actualizar sitio web y crear checkpoint

## Corregir Imagen de Retroexcavadora
- [x] Buscar imagen de referencia real de XCMG CX8-C2570
- [x] Regenerar imagen mostrando acción realista (solo excavando O solo cargando)
- [x] Actualizar sitio web y crear checkpoint

## Corregir Imágenes Faltantes en Otras Categorías
- [x] Identificar imágenes faltantes en Equipos de Nivelación
- [x] Identificar imágenes faltantes en Perforación
- [x] Identificar imágenes faltantes en Maquinaria de Concreto
- [x] Identificar imágenes faltantes en Plataformas de Elevación
- [x] Copiar imágenes desde repositorio GitHub original
- [x] Verificar y crear checkpoint

## Restaurar Todas las Imágenes que Dejaron de Funcionar
- [x] Identificar qué imágenes dejaron de funcionar (riego, etc.)
- [x] Copiar todas las imágenes faltantes desde repositorio GitHub
- [x] Verificar que todas las imágenes se muestran correctamente
- [x] Crear checkpoint con todas las imágenes restauradas

## URGENTE: Copiar TODAS las Imágenes Faltantes
- [x] Copiar TODO el directorio de imágenes completo desde repositorio GitHub (137 imágenes)
- [x] Verificar que TODAS las imágenes cargan correctamente
- [x] Crear checkpoint final

## URGENTE: Restaurar Imágenes Grandes Necesarias
- [x] Copiar de vuelta imágenes grandes desde repositorio GitHub
- [x] Verificar que riego, generación, equipos de elevación, perforación, maquinaria de concreto y plataformas muestran imágenes
- [x] Informar al usuario

## Asignar Imágenes Específicas por Modelo
- [x] Revisar código de Equipos de Elevación, Maquinaria de Concreto, Plataformas y Aditamentos
- [x] Verificar imágenes disponibles en el directorio
- [x] Actualizar código para asignar imagen específica a cada modelo
- [x] Verificar cambios y reportar

## Agregar Plantas Móviles y Bombas de Concreto XCMG
- [x] Generar imágenes profesionales de plantas móviles (XS0.75M, XS1.0M, XS1.5M)
- [x] Generar imágenes profesionales de bombas de concreto (XS5008D, XS6013D, XS9018D, XS10022D)
- [x] Actualizar código de Maquinaria de Concreto con los 7 nuevos modelos
- [x] Verificar cambios y reportar

## Agregar Modelo XSL520 a Perforación y Productos de Aditamentos
- [x] Analizar imagen de aditamentos proporcionada
- [x] Generar imagen profesional del equipo de perforación XSL520
- [x] Actualizar código de Perforación con modelo XSL520
- [x] Actualizar código de Aditamentos con productos de la imagen
- [x] Verificar cambios y reportar

## Reemplazar Categoría de Perforación con Solo XSL520
- [x] Generar nueva imagen del XSL520 basada en fotografía real proporcionada
- [x] Eliminar modelo XR150D de la categoría de Perforación
- [x] Actualizar código para mostrar solo XSL520
- [x] Verificar cambios y reportar

## Corregir Imagen del XSL520 para Coincidir con Foto Real
- [x] Regenerar imagen del XSL520 con detalles exactos (torre roja/naranja brillante, base amarilla compacta)
- [x] CORREGIR: Torre debe ser AMARILLA, solo cabezal superior es rojo
- [x] Usar fotografía real del usuario directamente (mejor que IA)
- [x] Mejorar calidad de la fotografía real (iluminación, contraste, nitidez)
- [x] Actualizar código con foto mejorada
- [x] Verificar y reportar

## Quitar Descripción del XSL520
- [x] Eliminar descripción del modelo XSL520 en Perforación

## Migrar Imágenes a S3 para Producción
- [x] Subir todas las imágenes generadas de maquinaria de concreto a S3
- [x] Subir todas las imágenes generadas de aditamentos a S3
- [x] Actualizar URLs en Machinery.tsx con URLs permanentes de S3
- [x] Verificar que todas las imágenes funcionan
- [x] Crear checkpoint para publicación

## Revisar Imágenes Generales de Categorías
- [x] Revisar imagen general de categoría Maquinaria
- [x] Revisar imagen general de categoría Excavadoras
- [x] Corregir URLs si es necesario
- [x] Crear checkpoint final

## Corregir Imagen General de Sección Maquinaria en Home
- [x] Localizar imagen de sección Maquinaria en Home.tsx
- [x] Corregir URL con S3
- [x] Verificar funcionamiento
- [x] Crear checkpoint final

## Corregir Imágenes de Motores y Bombas, Logística y Lubricantes
- [x] Verificar imágenes locales que faltan
- [x] Subir imágenes a S3
- [x] Actualizar URLs en BentoGrid.tsx
- [x] Verificar funcionamiento en producción
- [x] Crear checkpoint final

## Reemplazar Imagen General de Maquinaria con Marca XCMG
- [x] Generar nueva imagen con excavadoras XCMG (no Caterpillar)
- [x] Subir imagen a S3
- [x] Actualizar URL en BentoGrid.tsx
- [x] Verificar y crear checkpoint final

## Eliminar T Grande en Sección de Contacto
- [x] Localizar la T grande debajo de Contáctanos en Home.tsx
- [x] Eliminar elemento
- [x] Verificar y crear checkpoint

## Corregir Visualización del Logo Senninger
- [x] Localizar dónde aparece el logo de Senninger Irrigation Inc.
- [x] Ajustar CSS para que se muestre completo (object-fit: contain)
- [x] Verificar y crear checkpoint

## Agregar Artículos de Equipos de Elevación
- [x] Investigar especificaciones técnicas de torres grúa XCMG (alturas, tipos, tonelajes)
- [x] Investigar especificaciones técnicas de camiones grúa XCMG (tonelajes, parámetros)
- [x] Generar imagen profesional de torres grúa XCMG
- [x] Generar imagen profesional de camiones grúa XCMG
- [x] Actualizar código con 2 nuevos artículos en sección Equipos de Elevación
- [x] Verificar y crear checkpoint

## Corregir Logo de Komet
- [x] Revisar el logo de Komet en la sección de marcas
- [x] Corregir visualización del logo
- [x] Verificar y crear checkpoint

## Actualizar Camión Mezclador con Especificaciones Correctas
- [x] Actualizar modelo a XS308D con capacidad 8m³, chasis XCMG, motor Cummins 380hp
- [x] Verificar y crear checkpoint

## Actualizar Imagen del Camión Mezclador XS308D
- [x] Mejorar calidad de fotografía real del XS308D proporcionada por usuario
- [x] Subir imagen mejorada a S3
- [x] Actualizar URL en código
- [x] Verificar y crear checkpoint

## Corregir Imagen de Tijera Eléctrica
- [x] Localizar la tijera eléctrica en el código
- [x] Verificar URL de imagen
- [x] Corregir o generar nueva imagen si es necesario
- [x] Verificar y crear checkpoint

## Configurar Botones de Solicitar Cotización con WhatsApp
- [x] Localizar todos los botones de "Solicitar Cotización" en el sitio
- [x] Configurar enlace de WhatsApp (+502 2224 8080)
- [x] Actualizar código para que todos los botones redirijan a WhatsApp
- [x] Verificar y crear checkpoint

## Optimizar SEO de Página de Maquinaria
- [x] Agregar meta descripción (50-160 caracteres) con palabras clave
- [x] Agregar meta keywords relacionadas con maquinaria de construcción
- [x] Optimizar título de página para SEO
- [x] Verificar y crear checkpoint

## Optimización SEO Completa del Sitio
- [x] Optimizar meta tags de página Riego
- [x] Optimizar meta tags de página Generación  
- [x] Optimizar meta tags de página Perforación
- [x] Optimizar meta tags de página Propulsión
- [x] Optimizar meta tags de página Contacto
- [x] Optimizar meta tags de página Home con palabras clave cortas
- [x] Optimizar meta tags de página Maquinaria
- [x] Optimizar meta tags de página Logística
- [x] Optimizar meta tags de página Lubricantes
- [x] Crear sitemap.xml
- [x] Crear robots.txt
- [x] Verificar y crear checkpoint final

## Actualización Equipos de Elevación (Feb 9, 2026)
- [x] Cambiar "Torres Grúa XCMG" a "Torres Grúa"
- [x] Cambiar "Camiones Grúa XCMG" a "Camiones Grúa"
- [x] Generar imagen miniatura para torre grúa tipo Stationary (fija)
- [x] Generar imagen miniatura para torre grúa tipo Under frame loading (carga bajo bastidor)
- [x] Generar imagen miniatura para torre grúa tipo Travelling (viajera)
- [x] Generar imagen miniatura para torre grúa tipo Inner-climbing (trepadora)
- [x] Implementar galería de tipos de torres grúa en página Maquinaria
- [x] Verificar y crear checkpoint

## Ajustes Visuales Torres Grúa (Feb 9, 2026)
- [x] Ajustar marco de miniaturas de tipos de torres grúa (quitar fondo gris, mostrar solo imagen)
- [x] Eliminar descripción "Estacionarias y autoerigibles" de especificaciones de Torres Grúa
- [x] Verificar cambios y crear checkpoint

## Investigación Especificaciones Torres Grúa XCMG (Feb 9, 2026)
- [x] Investigar alturas máximas reales de torres grúa XCMG
- [x] Investigar tonelaje máximo real de torres grúa XCMG
- [x] Investigar longitud máxima de pluma de torres grúa XCMG
- [x] Actualizar especificaciones en código con datos precisos
- [x] Verificar y crear checkpoint

## Investigación Especificaciones Camiones Grúa XCMG (Feb 9, 2026)
- [x] Investigar tonelaje máximo real de camiones grúa XCMG
- [x] Investigar longitud de pluma telescópica máxima de camiones grúa XCMG
- [x] Investigar momento de carga máximo de camiones grúa XCMG
- [x] Verificar especificaciones actuales en el sitio
- [x] Actualizar especificaciones si es necesario
- [x] Verificar y crear checkpoint

## Agregar Elevadores de Construcción (Feb 9, 2026)
- [x] Investigar elevadores de construcción (construction hoist) XCMG
- [x] Investigar especificaciones técnicas y modelos disponibles
- [x] Generar imagen profesional de elevador de construcción
- [x] Agregar producto a sección Equipos de Elevación en código
- [x] Verificar y crear checkpoint

## Optimización SEO Página /riego (Feb 9, 2026)
- [x] Revisar configuración SEO actual (palabras clave, título, descripción)
- [x] Reducir palabras clave de 11 a 3-8 palabras clave enfocadas
- [x] Ajustar título de 63 caracteres a 30-60 caracteres
- [x] Reducir descripción de 162 caracteres a 50-160 caracteres
- [x] Verificar y crear checkpoint

## Agregar palabra clave "riego" (Feb 9, 2026)
- [x] Agregar "riego" a las palabras clave de la página /riego
- [x] Verificar y crear checkpoint

## Optimización Global Palabras Clave SEO (Feb 9, 2026)
- [x] Buscar todas las palabras clave en el sitio
- [x] Eliminar "cargadores" de keywords
- [x] Eliminar "maquinaria pesada" de keywords
- [x] Eliminar "equipos de construcción" de keywords
- [x] Cambiar "pivotes centrales" por "pivotes"
- [x] Cambiar "XCMG" por "xcmg" (minúsculas)
- [x] Verificar y crear checkpoint

## Eliminar "excavadoras" y "pivotes" de Keywords (Feb 9, 2026)
- [x] Eliminar "excavadoras" de palabras clave
- [x] Eliminar "pivotes" de palabras clave
- [x] Verificar y crear checkpoint
