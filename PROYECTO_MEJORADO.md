# Plataforma de Recetario Digital - Especificación Mejorada

## 📋 Descripción General

Crear una **plataforma web moderna de recetario digital** que actúe como una enciclopedia de cocina interactiva y organizada. Esta plataforma permite explorar, filtrar y aprender técnicas culinarias y recetas, manteniendo una estructura visual gamificada que motiva el aprendizaje progresivo.

---

## 🎯 Objetivos Principales

1. **Organización clara**: Recetas organizadas jerárquicamente por tipo de cocina, dificultad y técnica
2. **Navegación intuitiva**: Sistema dual de exploración (árbol de habilidades + búsqueda)
3. **Experiencia educativa**: Vídeos tutoriales con puntos de referencia (timestamps)
4. **Funcionalidad práctica**: Herramientas útiles para cocinar (lista de compras, temporizador, escalado de porciones)
5. **Diseño atractivo**: Interfaz moderna oscura con elementos gamificados

---

## 📐 Estructura de Datos

### Jerarquía de Contenido

```
Libro de Recetas (Colección)
├── Categoría Principal (Ej: Cocina Francesa, Repostería, Vegetariana)
│   ├── Subcategoría (Ej: Salsas, Postres, Sopas)
│   │   └── Receta
│   │       ├── Ingredientes
│   │       ├── Pasos
│   │       ├── Videos
│   │       └── Datos Nutricionales
└── ...
```

### Estructura de Receta

```javascript
{
  id: "string único",
  titulo: "Nombre de la receta",
  descripcion: "Descripción breve",
  
  // Clasificación
  categoria: "Cocina Francesa",
  subcategoria: "Salsas",
  dificultad: "intermedio", // fácil, intermedio, avanzado, experto
  tipoCocina: "Francesa", // Para filtrado
  
  // Información práctica
  tiempoPreparacion: 15, // minutos
  tiempoCocinado: 30,
  tiempoTotal: 45,
  porciones: 4,
  rendimiento: "500ml",
  
  // Contenido
  descripcionLarga: "Historia y contexto de la receta...",
  ingredientes: [
    {
      nombre: "Harina",
      cantidad: 250,
      unidad: "g",
      notas: "tamizada",
      opcional: false
    }
  ],
  
  pasos: [
    {
      numero: 1,
      descripcion: "Paso detallado",
      tiempo: 5, // minutos
      tips: ["Consejo práctico"],
      imagenes: ["url"]
    }
  ],
  
  // Vídeos
  videosPrincipales: [
    {
      youtubeId: "xxxxx",
      titulo: "Receta completa",
      duracion: "12:45",
      highlights: [
        {
          tiempo: "02:15",
          minutos: 2,
          segundos: 15,
          descripcion: "Preparación de ingredientes",
          icono: "📍"
        }
      ]
    }
  ],
  
  videosAuxiliares: [
    {
      youtubeId: "yyyyy",
      titulo: "Técnica: Cómo montar claras",
      duracion: "3:20"
    }
  ],
  
  // Información complementaria
  notas: "Puede hacerse 24h antes",
  variaciones: ["Con chocolate", "Sin huevo"],
  maridaje: "Vino blanco seco",
  origen: "Francia",
  
  // Datos nutricionales (por porción)
  nutricion: {
    calorias: 250,
    proteinas: 8,
    carbohidratos: 35,
    grasas: 10,
    fibra: 2
  },
  
  // Metadata
  tags: ["salsas", "basico", "frances", "vegetariano"],
  dificultadVisual: 2, // 1-5 estrellas
  rating: 4.5,
  favorito: false,
  fechaAgregada: "2026-05-04"
}
```

---

## 🎮 Interfaz de Usuario

### Layout Principal

```
┌─────────────────────────────────────────────┐
│ [Logo] RECETARIO  🔍 Búsqueda  ⭐ Favoritos │
├──────────────────┬────────────────────────────┤
│                  │                            │
│   MENÚ LATERAL   │                            │
│                  │     CONTENIDO PRINCIPAL    │
│  - Categorías    │                            │
│  - Subcategorías │     (Detalle Receta)       │
│  - Grid Árbol    │                            │
│                  │                            │
└──────────────────┴────────────────────────────┘
```

### Sidebar Izquierdo (Menú de Navegación)

**Diseño**: Panel colapsable con pestañas

```
┌─ EXPLORAR ────────────────┐
│ 📂 Todas las Recetas       │
│ ⭐ Favoritos               │
│ 🔥 Trending                │
│ 🆕 Nuevas Recetas         │
├─ FILTRAR ─────────────────┤
│ 🍳 Tipo de Cocina ▼        │
│ 📊 Dificultad ▼            │
│ ⏱️ Tiempo ▼                │
│ 🌱 Restricciones ▼         │
├─ ÁRBOL DE HABILIDADES ────┤
│ [Grid visual de categorías]│
└────────────────────────────┘
```

### Área Principal Derecha (Visor de Receta)

**Secciones**:

1. **Header de Receta**
   - Título principal
   - Imagen/video thumbnail
   - Metadata rápida: ⏱️ 45min | 📊 Intermedio | 👥 4 porciones | ⭐ 4.5

2. **Barra de Herramientas**
   - ❤️ Guardar en favoritos
   - 🔗 Compartir
   - 🖨️ Imprimir
   - 📝 Tomar notas

3. **Pestañas/Secciones**
   - **📝 Ingredientes**: Lista escalable según porciones
   - **👨‍🍳 Preparación**: Pasos numerados con timing
   - **🎥 Vídeos**: Reproductor principal + enlaces a técnicas
   - **ℹ️ Información**: Origen, variaciones, maridaje, notas
   - **🥗 Nutrición**: Tabla nutricional

4. **Vídeo Principal**
   - Reproductor responsivo
   - Botones de timestamp para highlights
   - Controles de velocidad

5. **Panel de Ingredientes**
   - Checkbox para marcar mientras compra/cocina
   - Escala de porciones dinámicamente
   - Botón: "Añadir a lista de compras"

6. **Pasos de Preparación**
   - Timeline visual con indicadores de tiempo
   - Imágenes/GIFs si hay
   - Tips desplegables
   - Indicador de progreso

---

## 🎨 Diseño Visual

### Paleta de Colores

```
Fondo Principal:      #06070e (Casi negro)
Fondo Secundario:     #0f1119 (Gris oscuro)
Sidebar:              #0a0d15 (Oscuro profundo)

Acentos Primarios:
- Índigo:             #6366f1
- Índigo Claro:       #818cf8
- Pink/Magenta:       #ec4899
- Pink Claro:         #f472b6

Acentos Secundarios:
- Cyan:               #06b6d4
- Purple:             #a855f7
- Verde (éxito):      #10b981
- Naranja (warning):  #f59e0b

Textos:
- Principal:          #f1f5f9
- Secundario:         #cbd5e1
- Dimmed:             #94a3b8

Bordes:
- Oscuro:             #1e293b
- Medio:              #334155
```

### Componentes Visuales

1. **Tarjetas de Receta**
   - Borde redondeado: 12px
   - Sombra neon: gradiente de indigo a pink
   - Hover: Elevación + brillo

2. **Grid de Habilidades (Árbol)**
   - Cuadros compactos 80x80px
   - Bordes 2px con gradientes
   - Estados: default, hover, active
   - Animación de pulse al activarse

3. **Botones**
   - Borde redondeado: 8px
   - Gradientes de dos colores
   - Transiciones suaves 0.3s
   - Efectos de hover con escala y sombra

4. **Inputs/Búsqueda**
   - Borde con efecto glow
   - Icono de búsqueda integrado
   - Sugerencias en dropdown

---

## ⚙️ Funcionalidades Principales

### 1. Exploración de Recetas

- **Búsqueda global**: Por nombre, ingrediente, técnica
- **Filtros avanzados**:
  - Por dificultad
  - Por tiempo total
  - Por tipo de cocina
  - Por restricciones dietéticas
  - Por ingrediente principal
  
- **Vista en árbol**: Grid visual de categorías similar a skill tree de RPG

### 2. Visualización de Receta

- **Video principal** con timestamps interactivos
- **Ingredientes** con:
  - Checkbox de completado
  - Escalado dinámico de porciones
  - Conversión de unidades
  
- **Pasos** con:
  - Timeline visual
  - Timing estimado
  - Tips y consejos desplegables
  - Imágenes de referencia

- **Videos auxiliares**: Enlaces a técnicas usadas en la receta

### 3. Sistema de Favoritos

- Guardar recetas favoritas
- Colección personalizada
- Sincronización con LocalStorage
- Contador de favoritos

### 4. Lista de Compras

- Generar lista desde ingredientes de receta
- Editar cantidades
- Marcar como comprado
- Exportar/imprimir
- Borrar lista

### 5. Herramientas Útiles

- **Escalador de porciones**: Multiplica automáticamente ingredientes
- **Temporizador**: Para pasos y cocción
- **Conversor de unidades**: g ↔ ml ↔ tazas, etc.
- **Notas personales**: Escribir observaciones en la receta

### 6. Sistema de Calificación

- Rating por usuario
- Comentarios/reseñas
- Historial de recetas cocinadas

---

## 🛠️ Requisitos Técnicos

### Stack Tecnológico

```javascript
Frontend:
- HTML5 semántico
- CSS3 con variables, gradientes, animaciones
- JavaScript vanilla (ES6+)
- Web Components reutilizables

Almacenamiento:
- LocalStorage para favoritos y preferencias
- JSON para datos de recetas

Datos Externos:
- URLs de YouTube para vídeos
- Opcional: Firebase para sincronización multi-dispositivo
```

### Arquitectura de Componentes

```
/src
├── /components
│   ├── RecipeGrid.js          (Grid de habilidades)
│   ├── RecipeViewer.js        (Visor principal)
│   ├── Sidebar.js             (Menú lateral)
│   ├── SearchBar.js           (Búsqueda)
│   ├── FilterPanel.js         (Filtros)
│   ├── IngredientsList.js     (Ingredientes con escala)
│   ├── StepsList.js           (Pasos de preparación)
│   ├── VideoPlayer.js         (Reproductor con timestamps)
│   └── FavoriteButton.js      (Botón favoritos)
│
├── /data
│   ├── recipes.js             (Base de recetas)
│   ├── categories.js          (Categorías/Fases)
│   └── defaults.js            (Datos por defecto)
│
├── /styles
│   ├── variables.css          (Colores y tokens)
│   ├── global.css             (Estilos globales)
│   ├── components.css         (Componentes)
│   └── animations.css         (Animaciones)
│
├── /utils
│   ├── storage.js             (LocalStorage)
│   ├── converters.js          (Conversiones)
│   ├── formatters.js          (Formateo de datos)
│   └── api.js                 (Llamadas a datos)
│
├── app.js                     (Lógica principal)
└── index.html                 (Punto de entrada)
```

### Web Components a Crear

```javascript
1. <recipe-grid>
   - Props: categories, onSelect
   - Emite: recipeSelected
   
2. <recipe-viewer>
   - Props: recipe
   - Métodos: selectIngredient(), scaleRecipe()
   
3. <sidebar-nav>
   - Props: categories, filters
   - Emite: filter-changed, category-selected
   
4. <ingredient-list>
   - Props: ingredients, porciones
   - Emite: ingredient-checked, scale-changed
   
5. <video-player>
   - Props: videoId, highlights
   - Métodos: jumpToTime()
   
6. <recipe-steps>
   - Props: steps
   - Métodos: markStepComplete()
```

---

## 📱 Características Responsive

```css
Desktop (>1200px):   Sidebar 320px | Contenido full
Tablet (768-1200px): Sidebar colapsable | Contenido adaptado
Mobile (<768px):     Sidebar en hamburguesa | Vista apilada
```

---

## 🎯 Fases de Implementación

### Fase 1: MVP (Mínimo Viable)
- [ ] Estructura HTML y CSS base
- [ ] Componente RecipeGrid
- [ ] Componente RecipeViewer simple
- [ ] Visualización de una receta
- [ ] Favoritos con LocalStorage

### Fase 2: Funcionalidades Core
- [ ] Búsqueda y filtrado
- [ ] Sidebar con categorías
- [ ] Ingredientes con escala
- [ ] Video player con timestamps
- [ ] Pasos numerados

### Fase 3: Características Avanzadas
- [ ] Lista de compras
- [ ] Temporizador
- [ ] Conversor de unidades
- [ ] Sistema de notas
- [ ] Rating y reseñas

### Fase 4: Pulido y Optimización
- [ ] Responsive design
- [ ] Performance optimization
- [ ] SEO básico
- [ ] Animaciones mejoradas
- [ ] Temas (light/dark)

---

## 📊 Ejemplo de Estructura de Receta Completa

```javascript
{
  id: "salsa-bechamel",
  titulo: "Salsa Bechamel (Béchamel)",
  descripcion: "Una de las cuatro salsas madres de la cocina francesa",
  categoria: "Cocina Francesa",
  subcategoria: "Salsas Madre",
  dificultad: "fácil",
  tiempoTotal: 15,
  porciones: 4,
  rendimiento: "500ml",
  
  ingredientes: [
    { nombre: "Mantequilla", cantidad: 50, unidad: "g" },
    { nombre: "Harina", cantidad: 50, unidad: "g" },
    { nombre: "Leche", cantidad: 500, unidad: "ml" },
    { nombre: "Sal", cantidad: 1, unidad: "pizca" },
    { nombre: "Pimienta blanca", cantidad: 1, unidad: "pizca" }
  ],
  
  pasos: [
    {
      numero: 1,
      descripcion: "Derretir mantequilla a fuego medio",
      tiempo: 2,
      tips: ["No dejes que se queme"]
    },
    {
      numero: 2,
      descripcion: "Añadir harina removiendo constantemente",
      tiempo: 2,
      tips: ["Crea un roux sin grumos"]
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
  
  tags: ["salsa", "francesa", "basica", "vegetariana"]
}
```

---

## 🚀 Mejoras Futuras

- Sistema de comentarios y reseñas
- Sincronización multi-dispositivo
- App PWA (Progressive Web App)
- Versión móvil nativa
- Integración con YouTube API avanzada
- Historial de recetas cocinadas
- Recomendaciones basadas en historial
- OCR para importar recetas de imágenes
- Generador de menús semanales
- Integración con supermercados
- Análisis nutricional avanzado
