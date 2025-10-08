# 📁 Estructura del Proyecto

```
curriculum/
│
├── 📂 public/                    ← TRABAJA AQUÍ (Todo en un lugar)
│   ├── 📄 index.html            ← TU CURRÍCULUM (Principal)
│   ├── 🎨 styles.css            ← TUS ESTILOS
│   ├── ⚡ script.js             ← TU JAVASCRIPT
│   └── 📂 Images/
│       ├── 🖼️ Profile.png       ← Tu foto de perfil
│       └── 🎯 icon.png          ← Favicon del sitio
│
├── 📂 app/                       ← NO EDITES (Next.js)
│   ├── page.tsx                 (Solo redirige a index.html)
│   ├── layout.tsx               (Configuración mínima)
│   └── globals.css              (No se usa)
│
├── 📂 node_modules/              ← NO EDITES (Dependencias)
│
├── 📄 package.json               ← Configuración de npm
├── 📄 next.config.js             ← Configuración de Next.js
│
├── 📄 README.md                  ← Documentación completa
├── 📄 INICIO-RAPIDO.md           ← Guía rápida (3 pasos)
├── 📄 INSTRUCCIONES.md           ← Guía detallada
├── 📄 EJEMPLOS-EDICION.md        ← Ejemplos prácticos
├── 📄 ESTRUCTURA.md              ← Este archivo
└── 📄 RESUMEN.txt                ← Resumen visual
```

## 🎯 Flujo de Trabajo

```
┌─────────────────────────────────────────────────────────┐
│  1. Abres: public/index.html                            │
│  2. Editas el contenido                                 │
│  3. Guardas el archivo (Ctrl+S)                         │
│  4. Recargas el navegador (F5)                          │
│  5. Ves los cambios inmediatamente                      │
└─────────────────────────────────────────────────────────┘
```

**No necesitas sincronizar nada - todo está en `public/`**

## 🚀 Comandos Principales

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Construye para producción |
| `npm run start` | Inicia servidor de producción |
| `npm run lint` | Ejecuta ESLint |

## 📝 Archivos que Debes Editar

### ✅ SÍ Edita Estos (en public/):
- `public/index.html` - Contenido de tu currículum
- `public/styles.css` - Estilos visuales
- `public/script.js` - Funcionalidad JavaScript
- `public/Images/Profile.png` - Tu foto
- `public/Images/icon.png` - Icono del sitio

### ❌ NO Edites Estos:
- `app/page.tsx` - Solo redirige
- `app/layout.tsx` - Configuración básica
- `app/globals.css` - No se usa
- `node_modules/` - Dependencias
- `.next/` - Build de Next.js

## 🌐 URLs del Sitio

### Desarrollo (localhost)
- http://localhost:3000 → Redirige a →
- http://localhost:3000/index.html ← Tu currículum

### Producción (deployado)
- https://tu-dominio.com → Redirige a →
- https://tu-dominio.com/index.html ← Tu currículum

## 💡 Ventajas de Esta Estructura

1. ✅ **Simple**: Solo editas HTML, CSS y JS
2. ✅ **Directo**: Los cambios se ven inmediatamente
3. ✅ **Todo en un lugar**: No necesitas sincronizar
4. ✅ **Portable**: Puedes copiar `public/` a cualquier servidor
5. ✅ **Moderno**: Usa Next.js para deploy optimizado
6. ✅ **Flexible**: Puedes agregar más páginas HTML si quieres

## 🎨 Personalización

### Cambiar Contenido
Edita `public/index.html` - Busca las secciones:
- Professional Summary
- Professional Experience
- Education
- Technical Skills
- etc.

### Cambiar Colores
Edita `public/styles.css` - Busca:
- `.header` - Color del encabezado
- `.section-title` - Color de títulos
- `.skill-item` - Color de habilidades

### Cambiar Comportamiento
Edita `public/script.js` - Modifica:
- Animaciones
- Efectos hover
- Modo oscuro
- Copiar email

## 🔧 Mantenimiento

### Actualizar Contenido
1. Abre `public/index.html`
2. Busca la sección que quieres cambiar
3. Edita el texto
4. Guarda
5. Recarga el navegador

### Agregar Nueva Sección
1. Copia una sección existente en `public/index.html`
2. Modifica el contenido
3. Los estilos se aplicarán automáticamente

### Cambiar Foto
1. Reemplaza `public/Images/Profile.png`
2. Mantén el mismo nombre de archivo
3. Recarga el navegador

## 📦 Deploy

### Vercel (Recomendado)
```bash
npm run build
```
Luego conecta tu repositorio a Vercel

### Netlify
```bash
npm run build
```
Sube la carpeta `.next` y `public`

### Servidor Estático
Simplemente copia la carpeta `public/` a tu servidor

## 🎯 Características

- ✅ Animaciones suaves al hacer scroll
- ✅ Modo oscuro (botón flotante)
- ✅ Copiar email al hacer clic (muestra "Copied!" por 1 segundo)
- ✅ Animación de escritura en el nombre
- ✅ Efectos hover en todos los elementos
- ✅ Diseño responsive (móvil y desktop)
- ✅ Imagen de perfil personalizada
- ✅ Favicon personalizado

¡Eso es todo! 🎉
