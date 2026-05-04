# 🚀 GitHub Pages - Guía de Despliegue

## ✅ Estado Actual

Tu proyecto ha sido subido exitosamente a GitHub y está configurado para despliegue automático.

### 📊 Resumen de lo Realizado

✅ **Repositorio Local Inicializado**
- Git configurado con tus credenciales
- Todos los archivos agregados
- Commit inicial realizado

✅ **Repositorio Remoto Conectado**
- URL: https://github.com/kristelC12/Laboratorio7_C22355.git
- Rama principal: `main`
- Push completado exitosamente

✅ **GitHub Actions Configurado**
- Workflow: `.github/workflows/deploy.yml`
- Trigger automático en push a `main`
- Despliegue a rama `gh-pages`

---

## 🌐 Acceder a tu Sitio

### URL Pública de GitHub Pages

```
https://kristelC12.github.io/Laboratorio7_C22355/
```

### Tiempo de Despliegue

⏱️ **1-2 minutos** desde el push (la primera vez puede tomar más)

Para monitorear el despliegue:
1. Ve a: https://github.com/kristelC12/Laboratorio7_C22355
2. Click en la pestaña **"Actions"**
3. Verás el workflow `Deploy to GitHub Pages` ejecutándose
4. Cuando diga ✅ **"Completed successfully"**, está listo

---

## 🔧 Configuración Manual en GitHub (Si es necesario)

Si no se despliegue automáticamente, sigue estos pasos:

### Opción 1: Configurar Pages desde la rama `gh-pages`

1. Ve a https://github.com/kristelC12/Laboratorio7_C22355/settings/pages
2. **Source** → Select branch → **`gh-pages`** → Save
3. Espera 1-2 minutos
4. Tu sitio estará en: https://kristelC12.github.io/Laboratorio7_C22355/

### Opción 2: Configurar Pages desde la rama `main` (carpeta docs)

Si prefieres usar la rama main:

1. Crea carpeta `docs` en la raíz (si no existe)
2. Copia contenido de `src/*` a `docs/`
3. Haz push: `git push origin main`
4. Ve a Settings → Pages
5. Source → Select branch → **`main`** → folder → **`/docs`**
6. Save

---

## 📝 Workflow Futuro

### Para Actualizar tu Sitio

Simplemente haz cambios en la carpeta `src/` y sigue estos pasos:

```bash
# 1. Hacer cambios en src/
# 2. Guardar archivos

# 3. Agregar cambios a Git
git add .

# 4. Crear commit con descripción
git commit -m "Descripción de cambios"

# 5. Enviar a GitHub
git push origin main

# 6. El workflow se ejecutará automáticamente
# 7. En 1-2 minutos verás los cambios en GitHub Pages
```

---

## 🎯 Verificar Despliegue

### Verificación 1: Via GitHub Actions

```
https://github.com/kristelC12/Laboratorio7_C22355/actions
```

Busca el workflow más reciente llamado `Deploy to GitHub Pages`
- ✅ Verde = Éxito
- ❌ Rojo = Error (revisar logs)

### Verificación 2: Via URL Pública

```
https://kristelC12.github.io/Laboratorio7_C22355/
```

Debe mostrar tu plataforma de recetario totalmente funcional

### Verificación 3: Rama gh-pages

```bash
cd c:\Users\kmc54\Multimedios\laboratorio7_c22355
git branch -a
```

Deberías ver: `remotes/origin/gh-pages` después de la primera ejecución del workflow

---

## 🐛 Solución de Problemas

### Problema: El sitio no se actualiza

**Solución:**
- Hace cache en GitHub Pages
- Limpia cache del navegador: `Ctrl+Shift+Del` (Selecciona "Cached images and files")
- Espera 5-10 minutos
- Abre en modo incógnito/privado para evitar cache

### Problema: Blanco al acceder a la URL

**Causas posibles:**
1. El workflow aún está en ejecución
2. Hay error en el HTML
3. Las rutas son incorrectas

**Soluciones:**
- Verifica el workflow en Actions
- Abre la consola del navegador (F12) para ver errores
- Verifica que los archivos de `src/` estén correctamente formados

### Problema: URLs rotas en el sitio

**Causa:** Las rutas relativas pueden estar mal

**Solución:**
Asegúrate de que en el HTML uses rutas relativas correctas:

```html
<!-- ❌ Malo -->
<link rel="stylesheet" href="/css/index.css">

<!-- ✅ Bueno -->
<link rel="stylesheet" href="css/index.css">
```

### Problema: El workflow no se ejecuta

**Soluciones:**
1. Verifica que `.github/workflows/deploy.yml` esté en la raíz
2. Asegúrate de que haya cambios reales en el push (no solo merge)
3. Revisa que la sintaxis del YAML sea correcta (sin espacios erráticos)

---

## 📱 Probar Localmente Antes de Desplegar

### Opción 1: Abrir archivo directamente

```bash
# Windows
start c:\Users\kmc54\Multimedios\laboratorio7_c22355\src\index.html

# macOS
open /Users/kmc54/Multimedios/laboratorio7_c22355/src/index.html

# Linux
firefox ~/Multimedios/laboratorio7_c22355/src/index.html
```

### Opción 2: Usar servidor local

```bash
# Opción Python (3.x)
cd c:\Users\kmc54\Multimedios\laboratorio7_c22355
python -m http.server 8000
# Accede a: http://localhost:8000/src/

# Opción Node.js (si tienes instalado)
npx http-server
# Accede a: http://localhost:8080
```

---

## 📊 Estructura Resultante

```
GitHub Repository (Remoto)
├── main (rama principal)
│   ├── .github/workflows/deploy.yml   ← Workflow de despliegue
│   ├── src/                            ← Código fuente
│   ├── package.json
│   ├── README.md
│   └── ...
│
└── gh-pages (rama generada automáticamente)
    ├── index.html                      ← Deployado desde src/
    ├── css/
    ├── modules/
    └── ...

GitHub Pages
└── https://kristelC12.github.io/Laboratorio7_C22355/ ← Tu sitio público
```

---

## 🎉 ¡Todo Listo!

Tu plataforma de recetario está ahora:

✅ Versionada en Git
✅ Sincronizada con GitHub
✅ Deployada en GitHub Pages
✅ Con despliegue automático configurado

Puedes compartir la URL con cualquiera:
```
https://kristelC12.github.io/Laboratorio7_C22355/
```

---

## 📞 Próximos Pasos Opcionales

1. **Agregar más recetas** → Edita `src/index.js`
2. **Mejorar el diseño** → Edita `src/css/index.css` y módulos
3. **Agregar colaboradores** → Invítalos al repositorio
4. **Configurar dominio personalizado** → En GitHub Settings → Pages
5. **Habilitar HTTPS** → GitHub Pages lo hace automáticamente
6. **Crear ramas** → Para trabajar en nuevas features sin afectar main

---

**¡Tu recetario está listo para el mundo!** 🌍🍽️
