# Tomás González Mongelós - Resume Website

Este es el sitio web de currículum de Tomás González Mongelós, Senior Software Engineer.

## 🎯 Archivo Principal

**Trabaja directamente en la carpeta `public/`**

Todos los cambios que hagas en estos archivos se reflejarán en el sitio deployado:
- `public/index.html` - Contenido HTML principal
- `public/styles.css` - Estilos CSS
- `public/script.js` - JavaScript e interacciones

## 🚀 Cómo ejecutar el proyecto

### Desarrollo
```bash
npm run dev
```
Luego abre: http://localhost:3000

El sitio te redirigirá automáticamente a `/index.html` que es tu archivo principal.

### Build para producción
```bash
npm run build
npm run start
```

### Deploy en Vercel
```bash
npm run vercel-build
```

## 📁 Estructura del Proyecto

```
curriculum/
├── public/                 ← TRABAJA AQUÍ
│   ├── index.html         ← Tu currículum (EDITA ESTE)
│   ├── styles.css         ← Tus estilos (EDITA ESTE)
│   ├── script.js          ← Tu JavaScript (EDITA ESTE)
│   └── Images/
│       ├── icon.png       ← Favicon
│       └── Profile.png    ← Tu foto
├── app/
│   ├── page.tsx           (Solo redirige a index.html)
│   ├── layout.tsx         (Configuración de Next.js)
│   └── globals.css        (No se usa)
└── package.json
```

## ✏️ Workflow de Edición

1. **Abre** `public/index.html` en tu editor
2. **Edita** el contenido que necesites
3. **Guarda** el archivo (Ctrl+S)
4. **Recarga** el navegador (F5)
5. **¡Ves los cambios inmediatamente!**

## 🌐 Acceso al Sitio

- **Desarrollo**: http://localhost:3000 → redirige a → http://localhost:3000/index.html
- **Producción**: Tu dominio → redirige a → Tu dominio/index.html

## 📝 Notas Importantes

- ✅ **Trabaja solo en `public/`** - Es simple y directo
- ❌ **NO edites** `app/page.tsx` - solo redirige a tu index.html
- ❌ **NO edites** `app/globals.css` - no se usa
- ✅ **Todos tus archivos están en `public/`**
- ✅ Los archivos en `public/` se sirven estáticamente
- ✅ Next.js solo se usa como servidor

## 🎨 Características del Sitio

- ✅ Animaciones suaves al hacer scroll
- ✅ Modo oscuro (botón flotante)
- ✅ Copiar email al hacer clic (muestra "Copied!" por 1 segundo)
- ✅ Animación de escritura en el nombre
- ✅ Efectos hover en todos los elementos
- ✅ Diseño responsive (móvil y desktop)
- ✅ Imagen de perfil personalizada
- ✅ Favicon personalizado

## 🔧 Tecnologías

- HTML5
- CSS3
- JavaScript (Vanilla)
- Next.js 14 (solo como servidor)
- Font Awesome (iconos)
- Google Fonts (Inter)

## 📚 Documentación Adicional

- **INICIO-RAPIDO.md** - Guía de 3 pasos para empezar
- **INSTRUCCIONES.md** - Instrucciones detalladas
- **EJEMPLOS-EDICION.md** - 10 ejemplos prácticos de edición
- **ESTRUCTURA.md** - Estructura completa del proyecto

## 💡 Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Construye para producción |
| `npm run start` | Inicia servidor de producción |
| `npm run lint` | Ejecuta ESLint |

## 🎯 Inicio Rápido

```bash
# 1. Instalar dependencias (solo la primera vez)
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir en navegador
# http://localhost:3000

# 4. Editar tu currículum
# Abre: public/index.html
# Edita, guarda y recarga el navegador
```

¡Eso es todo! Tu currículum está listo para editar. 🎉
