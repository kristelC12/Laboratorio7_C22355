// Datos del curso de cocina
const cursoCocina = [
    {
        nombre: "Fase 1: Fundamentos",
        temas: [
            { 
                id: "cortes", 
                titulo: "Cortes de Vegetales", 
                descripcion: "Aprende los cortes básicos y técnicas fundamentales de preparación de vegetales en la cocina profesional.",
                youtubeId: "Kq7SIdV9Ibc",
                highlights: [
                    { tiempo: "02:15", descripcion: "Corte Brunoise" },
                    { tiempo: "05:40", descripcion: "Corte Juliana" },
                    { tiempo: "08:20", descripcion: "Corte Chiffonade" }
                ]
            },
            { 
                id: "caldos", 
                titulo: "Fondos y Caldos", 
                descripcion: "Conoce cómo preparar los fondos y caldos básicos que son la base de la cocina francesa.",
                youtubeId: "vvXzDc9Xgvc",
                highlights: [
                    { tiempo: "03:10", descripcion: "Fondo Blanco de Pollo" },
                    { tiempo: "12:45", descripcion: "Fondo Oscuro de Ternera" }
                ]
            },
            { 
                id: "mise", 
                titulo: "Mise en Place", 
                descripcion: "La preparación y organización antes de comenzar a cocinar.",
                youtubeId: "dQw4w9WgXcQ",
                highlights: [
                    { tiempo: "01:30", descripcion: "Organización del espacio" },
                    { tiempo: "04:00", descripcion: "Preparación de ingredientes" }
                ]
            },
            { 
                id: "tecnicas", 
                titulo: "Técnicas Básicas", 
                descripcion: "Conoce las 10 técnicas de cocción más importantes.",
                youtubeId: "RH1ajX20s90",
                highlights: [
                    { tiempo: "02:00", descripcion: "Hervir" },
                    { tiempo: "05:15", descripcion: "Saltear" }
                ]
            }
        ]
    },
    {
        nombre: "Fase 2: Salsas Madre",
        temas: [
            { 
                id: "bechamel", 
                titulo: "Salsa Bechamel", 
                descripcion: "Una de las cuatro salsas madres de la cocina francesa.",
                youtubeId: "mK87Hm6FmEA",
                highlights: [
                    { tiempo: "01:45", descripcion: "Preparación del roux" },
                    { tiempo: "04:30", descripcion: "Añadir la leche" }
                ]
            },
            { 
                id: "veloute", 
                titulo: "Salsa Velouté", 
                descripcion: "Aprende a preparar esta deliciosa salsa a base de caldo.",
                youtubeId: "kFFZB0jHGe0",
                highlights: [
                    { tiempo: "02:00", descripcion: "Base del roux" },
                    { tiempo: "05:00", descripcion: "Técnica de colado" }
                ]
            },
            { 
                id: "espanola", 
                titulo: "Salsa Española", 
                descripcion: "La salsa española o salsa marrón, una de las más versátiles.",
                youtubeId: "g0ZwKP4bzOE",
                highlights: [
                    { tiempo: "03:20", descripcion: "Preparación base" }
                ]
            },
            { 
                id: "tomate", 
                titulo: "Salsa de Tomate", 
                descripcion: "Salsa básica de tomate para infinidad de platos.",
                youtubeId: "oAvU0nD46yc",
                highlights: [
                    { tiempo: "01:50", descripcion: "Selección del tomate" },
                    { tiempo: "06:00", descripcion: "Cocción y sazón" }
                ]
            }
        ]
    },
    {
        nombre: "Fase 3: Técnicas Avanzadas",
        temas: [
            { 
                id: "esferificacion", 
                titulo: "Esferificación", 
                descripcion: "Técnica molecular para crear esferas de sabor.",
                youtubeId: "Z4H3Ga-HVHU",
                highlights: [
                    { tiempo: "05:30", descripcion: "Proceso básico" }
                ]
            },
            { 
                id: "sous_vide", 
                titulo: "Sous Vide", 
                descripcion: "Cocción de precisión al vacío.",
                youtubeId: "VHqXPNKVhvQ",
                highlights: [
                    { tiempo: "04:15", descripcion: "Temperatura correcta" }
                ]
            },
            { 
                id: "foams", 
                titulo: "Foams o Aires", 
                descripcion: "Crean texturas aéreas y espumosas.",
                youtubeId: "aUOozA8fKYw",
                highlights: [
                    { tiempo: "03:45", descripcion: "Uso del sifón" }
                ]
            },
            { 
                id: "gelificacion", 
                titulo: "Gelificación", 
                descripcion: "Convierte líquidos en geles.",
                youtubeId: "n5a1h8TCU9Q",
                highlights: [
                    { tiempo: "02:30", descripcion: "Gelificación básica" }
                ]
            }
        ]
    }
];

// Función para inicializar la aplicación
function initApp() {
    const sidebar = document.getElementById('sidebar');
    const viewer = document.getElementById('viewer');

    if (!sidebar || !viewer) {
        console.error('No se encontraron los elementos necesarios del DOM');
        return;
    }

    // Pasar datos al componente SkillTree
    sidebar.data = cursoCocina;

    // Escuchar el evento de selección de habilidad
    window.addEventListener('skill-selected', (e) => {
        const temaId = e.detail;
        // Buscar el tema seleccionado
        const temaData = cursoCocina
            .flatMap(fase => fase.temas)
            .find(t => t.id === temaId);
        
        if (temaData) {
            viewer.update(temaData);
            console.log('Tema seleccionado:', temaData.titulo);
        }
    });

    // Seleccionar el primer tema por defecto
    const primerTema = cursoCocina[0].temas[0];
    viewer.update(primerTema);
    console.log('Aplicación iniciada correctamente');
}

// Esperar a que el DOM esté completamente cargado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

export default cursoCocina;
