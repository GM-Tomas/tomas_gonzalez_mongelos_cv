# 📋 Instrucciones Completas

## ✏️ Para Editar tu Currículum

### Trabaja directamente en la carpeta `public/`

```
public/
├── index.html    ← Edita tu contenido aquí
├── styles.css    ← Edita tus estilos aquí
├── script.js     ← Edita tu JavaScript aquí
└── Images/
    ├── Profile.png  ← Tu foto de perfil
    └── icon.png     ← Favicon del sitio
```

**No necesitas copiar ni sincronizar archivos - todo está en `public/`**

---

## 🚀 Para Ver tus Cambios

```bash
npm run dev
```

Abre: http://localhost:3000

El sitio te redirigirá automáticamente a tu `index.html`

---

## 📦 Para Deployar

```bash
npm run build
```

Luego puedes deployar en Vercel, Netlify, o cualquier plataforma.

---

## 🎯 Archivos Importantes

| Archivo | Ubicación | Propósito |
|---------|-----------|-----------|
| **index.html** | `public/index.html` | Tu currículum (HTML) |
| **styles.css** | `public/styles.css` | Estilos visuales |
| **script.js** | `public/script.js` | Interactividad |
| **Profile.png** | `public/Images/Profile.png` | Tu foto |
| **icon.png** | `public/Images/icon.png` | Favicon |

---

## ⚠️ NO Edites Estos Archivos

- `app/page.tsx` - Solo redirige
- `app/layout.tsx` - Configuración de Next.js
- `app/globals.css` - No se usa

---

## 💡 Tips

1. **Trabaja solo en `public/`** - Es simple y directo
2. **Guarda y recarga** - Los cambios se ven inmediatamente
3. **No sincronices** - Todo está en el lugar correcto
4. **Git commit** - Haz commit de los archivos en `public/`

---

## 🔄 Workflow Recomendado

```
1. Abrir public/index.html
2. Editar contenido
3. Guardar (Ctrl+S)
4. Recargar navegador (F5)
5. Ver cambios
6. Repetir
```

¡Así de simple! 🎉

---

## 📝 Ejemplos de Edición

### Cambiar tu nombre
**Archivo:** `public/index.html`
```html
<h1 class="name">Tu Nombre Aquí</h1>
```

### Cambiar tu email
**Archivo:** `public/index.html`
```html
<span>tu-email@ejemplo.com</span>
```

### Cambiar colores del encabezado
**Archivo:** `public/styles.css`
```css
.header {
    background: linear-gradient(135deg, #047857 0%, #059669 100%);
}
```

### Cambiar tu foto
Reemplaza el archivo `public/Images/Profile.png` con tu foto

---

## 🌐 URLs del Sitio

### Desarrollo (localhost)
- http://localhost:3000 → Redirige a →
- http://localhost:3000/index.html ← Tu currículum

### Producción (deployado)
- https://tu-dominio.com → Redirige a →
- https://tu-dominio.com/index.html ← Tu currículum

---

## 💡 Ventajas de Esta Estructura

1. ✅ **Simple**: Solo editas HTML, CSS y JS
2. ✅ **Directo**: Los cambios se ven inmediatamente
3. ✅ **Sin sincronización**: Todo en un solo lugar
4. ✅ **Portable**: Puedes copiar `public/` a cualquier servidor
5. ✅ **Moderno**: Usa Next.js para deploy optimizado

---

## 🎨 Personalización Rápida

| Qué cambiar | Dónde | Busca |
|-------------|-------|-------|
| Nombre | `public/index.html` | "Tomás" |
| Email | `public/index.html` | "@gmail" |
| Teléfono | `public/index.html` | "+54" |
| Colores | `public/styles.css` | ".header" |
| Foto | `public/Images/` | Profile.png |

---

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

---

## 🆘 Solución de Problemas

### No veo los cambios
- ✅ Asegúrate de guardar el archivo
- ✅ Recarga con Ctrl+F5 (recarga forzada)
- ✅ Verifica que editaste el archivo en `public/`

### Se rompió el diseño
- ✅ Verifica que no borraste etiquetas HTML de cierre
- ✅ Revisa que las comillas estén balanceadas
- ✅ Usa Ctrl+Z para deshacer

### Los estilos no se aplican
- ✅ Verifica que `styles.css` esté en `public/`
- ✅ Revisa que no hayas borrado clases CSS importantes
- ✅ Limpia la caché del navegador

---

¡Feliz edición! 🎉
