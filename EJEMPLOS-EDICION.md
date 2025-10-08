# 📝 Ejemplos de Edición

## Ejemplo 1: Cambiar tu Nombre

**Archivo:** `public/index.html`

**Busca:**
```html
<h1 class="name">Tomás González Mongelós</h1>
```

**Cambia a:**
```html
<h1 class="name">Tu Nombre Aquí</h1>
```

---

## Ejemplo 2: Cambiar tu Email

**Archivo:** `public/index.html`

**Busca:**
```html
<span>tomasgonzalezm99@gmail.com</span>
```

**Cambia a:**
```html
<span>tu-email@ejemplo.com</span>
```

---

## Ejemplo 3: Agregar una Nueva Experiencia Laboral

**Archivo:** `public/index.html`

**Busca la sección:** `PROFESSIONAL EXPERIENCE`

**Agrega después de una experiencia existente:**
```html
<div class="experience-item">
  <div class="experience-header">
    <h3 class="job-title">Tu Nuevo Puesto</h3>
    <span class="company">Nombre de la Empresa</span>
    <span class="period">2024 - Presente</span>
  </div>
  <ul class="responsibilities">
    <li>Responsabilidad 1</li>
    <li>Responsabilidad 2</li>
    <li>Responsabilidad 3</li>
  </ul>
</div>
```

---

## Ejemplo 4: Cambiar el Color del Encabezado

**Archivo:** `public/styles.css`

**Busca:**
```css
.header {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
```

**Cambia a (por ejemplo, verde):**
```css
.header {
    background: linear-gradient(135deg, #047857 0%, #059669 100%);
```

**Otros colores sugeridos:**
- Rojo: `#dc2626 0%, #ef4444 100%`
- Morado: `#7c3aed 0%, #8b5cf6 100%`
- Naranja: `#ea580c 0%, #f97316 100%`

---

## Ejemplo 5: Agregar una Nueva Habilidad

**Archivo:** `public/index.html`

**Busca la sección:** `TECHNICAL SKILLS`

**Agrega dentro de `technical-skills-grid`:**
```html
<div class="skill-item">
  <span class="skill-name">Nueva Tecnología</span>
  <div class="skill-rating">
    <span class="star filled">★</span>
    <span class="star filled">★</span>
    <span class="star filled">★</span>
    <span class="star filled">★</span>
    <span class="star filled">★</span>
  </div>
</div>
```

**Para menos estrellas, quita la clase `filled`:**
```html
<span class="star">★</span>  <!-- Estrella vacía -->
```

---

## Ejemplo 6: Cambiar el Tiempo del Mensaje "Copied!"

**Archivo:** `public/script.js`

**Busca:**
```javascript
setTimeout(() => {
    emailElement.textContent = originalText;
    emailElement.style.color = '';
}, 1000);  // 1000 = 1 segundo
```

**Cambia a 2 segundos:**
```javascript
}, 2000);  // 2000 = 2 segundos
```

---

## Ejemplo 7: Desactivar el Modo Oscuro

**Archivo:** `public/script.js`

**Busca y comenta (agrega // al inicio):**
```javascript
// const darkModeToggle = document.createElement('button');
// darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
// ... (todo el bloque del dark mode)
```

O simplemente **elimina** todo el bloque que dice `// Add dark mode toggle`

---

## Ejemplo 8: Cambiar la Velocidad de la Animación del Nombre

**Archivo:** `public/script.js`

**Busca:**
```javascript
setTimeout(typeWriter, 100);  // 100ms entre cada letra
```

**Cambia a más rápido (50ms):**
```javascript
setTimeout(typeWriter, 50);
```

**O más lento (200ms):**
```javascript
setTimeout(typeWriter, 200);
```

---

## Ejemplo 9: Agregar un Nuevo Certificado

**Archivo:** `public/index.html`

**Busca la sección:** `DIGITAL CERTIFICATES`

**Agrega dentro de `certifications-grid`:**
```html
<div class="certification-item">
  <h4>Nombre de tu Nuevo Certificado</h4>
</div>
```

---

## Ejemplo 10: Cambiar tu Foto de Perfil

**Opción A: Reemplazar el archivo**
1. Renombra tu nueva foto a `Profile.png`
2. Reemplaza el archivo en `public/Images/Profile.png`
3. Recarga el navegador

**Opción B: Usar otro nombre de archivo**

**Archivo:** `public/index.html`

**Busca:**
```html
<img src="Images/Profile.png" alt="...">
```

**Cambia a:**
```html
<img src="Images/mi-foto.jpg" alt="...">
```

---

## 💡 Tips Generales

1. **Siempre guarda** el archivo después de editar
2. **Recarga el navegador** para ver los cambios
3. **Usa Ctrl+Z** si algo sale mal
4. **Haz backup** antes de cambios grandes
5. **Prueba en móvil** después de cambios importantes

## 🔍 Cómo Encontrar Qué Editar

1. **Abre** `public/index.html` en tu editor
2. **Busca** (Ctrl+F) el texto que quieres cambiar
3. **Edita** el contenido
4. **Guarda** (Ctrl+S)
5. **Recarga** el navegador (F5)

## ⚠️ Errores Comunes

### Error: No veo los cambios
- ✅ Asegúrate de guardar el archivo
- ✅ Recarga con Ctrl+F5 (recarga forzada)
- ✅ Verifica que editaste el archivo en `public/`

### Error: Se rompió el diseño
- ✅ Verifica que no borraste etiquetas HTML de cierre
- ✅ Revisa que las comillas estén balanceadas
- ✅ Usa Ctrl+Z para deshacer

### Error: Los estilos no se aplican
- ✅ Verifica que `styles.css` esté en `public/`
- ✅ Revisa que no hayas borrado clases CSS importantes
- ✅ Limpia la caché del navegador

¡Feliz edición! 🎉
