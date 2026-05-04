# CulinaryPath - Plataforma de Aprendizaje Culinaria 🍳

Una **plataforma web moderna de recetario digital** que actúa como una enciclopedia interactiva de cocina con sistema de exploración gamificado tipo RPG.

## 🌐 Acceso en Vivo

**GitHub Pages:** https://kristelC12.github.io/Laboratorio7_C22355/

## ✨ Características Principales

### 📚 Exploración de Recetas
- **Árbol de Habilidades Visual**: Grid gamificado similar a selectores de personajes en videojuegos
- **Organización Jerárquica**: Categorías → Subcategorías → Recetas
- **Búsqueda Avanzada**: Por nombre, ingrediente, técnica, dificultad, tiempo
- **Sistema de Filtros**: Dificultad, tipo de cocina, tiempo de preparación, restricciones dietéticas

### 👨‍🍳 Visualización de Receta Completa
- **Video Principal**: Reproductor YouTube embebido
- **Ingredientes Escalables**: Ajusta cantidades según porciones
- **Pasos Detallados**: Timeline con tiempos estimados
- **Highlights Interactivos**: Timestamps para momentos clave del vídeo
- **Información Nutricional**: Calorías, proteínas, grasas, carbohidratos

### 🛠️ Herramientas Útiles
- **Gestor de Favoritos**: Guarda recetas favoritas con sincronización local
- **Lista de Compras**: Genera lista desde ingredientes de receta
- **Conversor de Unidades**: Convierte entre g, ml, tazas, cucharadas
- **Temporizador**: Para pasos y tiempos de cocción
- **Escalador de Porciones**: Multiplica automáticamente ingredientes

### 🎨 Diseño
- **Modo Oscuro Optimizado**: Colores índigo y deeppink neon
- **Interfaz Responsiva**: Desktop, tablet y mobile
- **Web Components Reutilizables**: Arquitectura modular y escalable
- **Animaciones Suaves**: Transiciones y efectos visuales premium

## 🛠️ Stack Tecnológico

```javascript
Frontend:
- HTML5 Semántico
- CSS3 (Variables, Gradientes, Animaciones)
- JavaScript Vanilla (ES6+)
- Web Components

Almacenamiento:
- LocalStorage para favoritos y preferencias
- JSON para datos de recetas

Hosting:
- GitHub Pages (Despliegue automático con GitHub Actions)
```

## 📁 Estructura del Proyecto

```
laboratorio7_c22355/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/
│   ├── index.html              # Punto de entrada
│   ├── index.js                # Lógica principal
│   ├── css/
│   │   └── index.css           # Estilos globales
│   └── modules/
│       ├── skillTree.js        # Componente: Grid de habilidades
│       └── contentViewer.js    # Componente: Visor de contenido
├── package.json
├── PROYECTO_MEJORADO.md        # Especificación completa
└── README.md                   # Este archivo
```

## 🚀 Instalación Local

### Requisitos
- Node.js 14+
- Git

### Pasos

```bash
# 1. Clonar repositorio
git clone https://github.com/kristelC12/Laboratorio7_C22355.git
cd Laboratorio7_C22355

# 2. Instalar dependencias (opcional, si usas pnpm)
pnpm install

# 3. Abrir en navegador
# Simplemente abre src/index.html en tu navegador
# O usa un servidor local:
python -m http.server 8000
# Accede a: http://localhost:8000/src/
```

## 📊 Estructura de Datos - Receta

```javascript
{
  id: "salsa-bechamel",
  titulo: "Salsa Bechamel",
  descripcion: "Una de las cuatro salsas madres",
  
  // Clasificación
  categoria: "Cocina Francesa",
  subcategoria: "Salsas Madre",
  dificultad: "fácil",
  
  // Tiempos
  tiempoPreparacion: 5,
  tiempoCocinado: 10,
  tiempoTotal: 15,
  
  // Contenido
  porciones: 4,
  rendimiento: "500ml",
  ingredientes: [
    { nombre: "Mantequilla", cantidad: 50, unidad: "g" },
    { nombre: "Harina", cantidad: 50, unidad: "g" },
    { nombre: "Leche", cantidad: 500, unidad: "ml" }
  ],
  
  pasos: [
    {
      numero: 1,
      descripcion: "Derretir mantequilla",
      tiempo: 2,
      tips: ["No dejes que se queme"]
    }
  ],
  
  videosPrincipales: [{
    youtubeId: "mK87Hm6FmEA",
    titulo: "Salsa Bechamel paso a paso",
    highlights: [
      { tiempo: "01:45", descripcion: "Hacer el roux" },
      { tiempo: "04:30", descripcion: "Añadir la leche" }
    ]
  }],
  
  nutricion: {
    calorias: 180,
    proteinas: 4,
    carbohidratos: 8,
    grasas: 14
  },
  
  tags: ["salsa", "francesa", "basica"],
  favorito: false
}
```

## 🎮 Web Components Disponibles

### `<skill-tree>`
Grid visual de habilidades/temas organizados por fases.

**Propiedades:**
- `data`: Array de fases con temas
- `onSelect`: Callback al seleccionar tema

**Eventos:**
- `skill-selected`: Dispara cuando se selecciona un tema

```javascript
const skillTree = document.querySelector('skill-tree');
skillTree.data = [
  {
    nombre: "Fase 1: Fundamentos",
    temas: [
      { id: "cortes", titulo: "Cortes de Vegetales" },
      { id: "caldos", titulo: "Fondos y Caldos" }
    ]
  }
];
```

### `<content-viewer>`
Visor completo de receta con video, ingredientes, pasos e información.

**Propiedades:**
- `recipe`: Objeto de receta

**Métodos:**
- `update(recipe)`: Actualiza el contenido mostrado
- `scaleRecipe(factor)`: Escala ingredientes

```javascript
const viewer = document.querySelector('content-viewer');
viewer.update({
  titulo: "Salsa Bechamel",
  youtubeId: "mK87Hm6FmEA",
  ingredientes: [...],
  pasos: [...]
});
```

## 🌟 Paleta de Colores

```css
Fondos:
- Deep:    #07070f (Casi negro)
- Dark:    #0b0b18 (Gris oscuro)
- Panel:   #10101e

Acentos:
- Índigo:        #4f46e5
- Índigo Claro:  #818cf8
- Pink:          #ff1493
- Pink Claro:    #ff69b4
- Cyan:          #0d9488
- Violet:        #7c3aed

Textos:
- Principal:    #e8e8f2
- Secundario:   #9090b8
- Dimmed:       #44446a
```

## 📱 Responsive Design

| Dispositivo | Ancho | Layout |
|-----------|-------|--------|
| Desktop   | >1200px | Sidebar 298px + Contenido full |
| Tablet    | 768-1200px | Sidebar colapsable |
| Mobile    | <768px | Sidebar hamburguesa, vista apilada |

## 🔄 GitHub Pages - Despliegue Automático

El proyecto utiliza **GitHub Actions** para desplegar automáticamente en GitHub Pages cada vez que haces push a `main`:

1. **Workflow**: `.github/workflows/deploy.yml`
2. **Trigger**: Push a rama `main`
3. **Acción**: Copia contenido de `src/` a rama `gh-pages`
4. **URL**: https://kristelC12.github.io/Laboratorio7_C22355/

### Configuración Manual en GitHub (si es necesario)

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: Select branch → `gh-pages`
4. Save
5. Tu sitio estará disponible en pocos minutos

## 🚀 Próximas Características

- [ ] Sistema de comentarios y reseñas
- [ ] Sincronización multi-dispositivo (Firebase)
- [ ] App PWA (Progressive Web App)
- [ ] Versión móvil nativa
- [ ] Integración avanzada con YouTube API
- [ ] Historial de recetas cocinadas
- [ ] Recomendaciones basadas en historial
- [ ] Generador de menús semanales
- [ ] Análisis nutricional avanzado
- [ ] OCR para importar recetas de imágenes

## 📚 Documentación Completa

Ver [PROYECTO_MEJORADO.md](PROYECTO_MEJORADO.md) para la especificación detallada del proyecto.

## 👩‍💻 Desarrollo

### Agregar Nueva Receta

```javascript
const nuevaReceta = {
  id: "milanesa-napolitana",
  titulo: "Milanesa a la Napolitana",
  categoria: "Cocina Italiana",
  subcategoria: "Platos Principales",
  dificultad: "intermedio",
  tiempoTotal: 30,
  // ... resto de propiedades
};

// Agregar a la base de datos en index.js
cursoCocina.push(nuevaReceta);
```

### Personalizar Estilos

Los estilos están definidos con **variables CSS** en `src/css/index.css`:

```css
:root {
  --indigo: #4f46e5;      /* Cambiar color primario */
  --pink: #ff1493;        /* Cambiar color secundario */
  --bg-deep: #07070f;     /* Cambiar fondo */
}
```

### Compilación y Build

```bash
# Si usas un bundler (webpack, vite, etc.)
pnpm build

# Para desarrollo local
pnpm dev
```

## 📝 Licencia

MIT © 2026

## 🤝 Contacto

**Autor:** Kristel C  
**Email:** kristelc12@example.com  
**GitHub:** https://github.com/kristelC12

---

**Hecho con ❤️ para apasionados de la cocina** 🍽️
