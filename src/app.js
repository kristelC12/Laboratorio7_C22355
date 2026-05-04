/* ═══════════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════════ */
const COURSE = {
  id: 'cocina-desde-cero',
  title: 'Cocina Desde Cero',
  phases: [
    {
      id: 'fundamentos', label: 'Fundamentos', color: '#4f46e5',
      topics: [
        {
          id: 'seguridad', label: 'Seguridad', icon: '🛡️',
          fullTitle: 'Seguridad e Higiene en la Cocina',
          desc: 'Normas fundamentales de higiene, temperaturas de seguridad alimentaria y prevención de accidentes que todo cocinero debe dominar antes de encender el fuego.',
          video: { id: 'YOUTUBE_VIDEO_ID_1', title: 'Seguridad e Higiene en la Cocina Profesional' },
          highlights: [
            { id:'sg1', time:'1:20', sec:80,  title:'Lavado de manos correcto',      desc:'Técnica estándar de 20 segundos con puntos críticos' },
            { id:'sg2', time:'5:45', sec:345, title:'Zona de peligro de temperatura', desc:'Entre 5°C y 60°C los microorganismos se multiplican' },
            { id:'sg3', time:'12:30',sec:750, title:'Almacenamiento en nevera',       desc:'Organización por tipo de alimento y altura en el refrigerador' },
            { id:'sg4', time:'18:00',sec:1080,title:'Contaminación cruzada',          desc:'Tablas de corte por colores y limpieza de superficies' },
            { id:'sg5', time:'24:10',sec:1450,title:'Sistema FIFO',                   desc:'Primero en entrar, primero en salir — rotación de alimentos' },
          ],
          chapters: [
            { id:'sgc1', title:'Higiene Personal',       sec:0,    hls:['sg1'] },
            { id:'sgc2', title:'Control de Temperatura', sec:300,  hls:['sg2'] },
            { id:'sgc3', title:'Almacenamiento Seguro',  sec:700,  hls:['sg3','sg4','sg5'] },
          ]
        },
        {
          id: 'cuchillos', label: 'Cuchillos', icon: '🔪',
          fullTitle: 'Cuchillos y Técnicas de Corte',
          desc: 'Tipos de cuchillos, su mantenimiento y las técnicas de corte esenciales: juliana, brunoise, chiffonade. El vocabulario visual de la cocina profesional.',
          video: { id: 'YOUTUBE_VIDEO_ID_2', title: 'Cuchillos y Cortes Básicos — Guía Completa' },
          highlights: [
            { id:'cu1', time:'2:00', sec:120, title:'El agarre chef (pinch grip)',   desc:'Control y seguridad — el cuchillo como extensión de la mano' },
            { id:'cu2', time:'8:15', sec:495, title:'Juliana fina',                  desc:'Bastoncillos de 3 mm: zanahorias, pimientos, apio' },
            { id:'cu3', time:'14:30',sec:870, title:'Brunoise',                      desc:'Dados de 2–3 mm a partir de la juliana' },
            { id:'cu4', time:'20:00',sec:1200,title:'Chiffonade',                    desc:'Tiras finas para hierbas y hojas — enrollar y cortar transversal' },
            { id:'cu5', time:'26:45',sec:1605,title:'Afilado con chaira',            desc:'Mantenimiento del filo entre usos, ángulo correcto' },
          ],
          chapters: [
            { id:'cuc1', title:'Seguridad y Agarre',   sec:0,    hls:['cu1'] },
            { id:'cuc2', title:'Cortes en Bastón',      sec:400,  hls:['cu2'] },
            { id:'cuc3', title:'Dados y Chiffonade',    sec:800,  hls:['cu3','cu4'] },
            { id:'cuc4', title:'Mantenimiento',         sec:1500, hls:['cu5'] },
          ]
        },
        {
          id: 'mise', label: 'Mise en Place', icon: '📋',
          fullTitle: 'Mise en Place: El Arte de la Preparación',
          desc: 'El secreto de los chefs profesionales: organización total antes de cocinar. Cómo leer una receta, preparar ingredientes y estructurar el tiempo de servicio.',
          video: { id: 'YOUTUBE_VIDEO_ID_3', title: 'Mise en Place: Trabaja como un Chef Profesional' },
          highlights: [
            { id:'mi1', time:'3:00', sec:180, title:'Leer la receta completa primero', desc:'La regla número uno — nunca empieces sin leer hasta el final' },
            { id:'mi2', time:'9:20', sec:560, title:'Organización de la estación',     desc:'Zonas definidas: limpia, sucia, caliente, fría' },
            { id:'mi3', time:'15:40',sec:940, title:'Bowls de ingredientes medidos',   desc:'Todo pesado y listo antes de encender el fuego' },
            { id:'mi4', time:'22:10',sec:1330,title:'Lista de tareas temporal',        desc:'Planificación del servicio en orden cronológico' },
          ],
          chapters: null
        },
        {
          id: 'calor', label: 'Calor', icon: '🔥',
          fullTitle: 'Fundamentos del Calor y la Temperatura',
          desc: 'Conducción, convección y radiación. La reacción de Maillard, puntos de cocción de proteínas y cómo controlar distintos tipos de fogones.',
          video: { id: 'YOUTUBE_VIDEO_ID_4', title: 'La Ciencia del Calor en la Cocina' },
          highlights: [
            { id:'ca1', time:'4:00', sec:240, title:'Conducción vs Convección',      desc:'Por qué importa el tipo de transferencia de calor' },
            { id:'ca2', time:'10:30',sec:630, title:'La reacción de Maillard',       desc:'La ciencia del dorado: aminoácidos + azúcares a >140°C' },
            { id:'ca3', time:'17:00',sec:1020,title:'Puntos de cocción de proteínas',desc:'Temperaturas internas para carnes, aves y pescados' },
            { id:'ca4', time:'23:45',sec:1425,title:'Gas vs inducción vs vitro',     desc:'Control del fuego y diferencias prácticas entre fogones' },
          ],
          chapters: [
            { id:'cac1', title:'Tipos de Calor',      sec:0,    hls:['ca1'] },
            { id:'cac2', title:'Reacciones Químicas', sec:600,  hls:['ca2'] },
            { id:'cac3', title:'Temperatura Exacta',  sec:1000, hls:['ca3','ca4'] },
          ]
        },
      ]
    },
    {
      id: 'tecnicas', label: 'Técnicas', color: '#7c3aed',
      topics: [
        {
          id: 'salteado', label: 'Salteado', icon: '🥘',
          fullTitle: 'La Técnica del Salteado',
          desc: 'Fuego alto, poco aceite, ingredientes en movimiento constante. El lenguaje del wok y la sartén. Tiempo, temperatura y secuencia.',
          video: { id: 'YOUTUBE_VIDEO_ID_5', title: 'Domina el Salteado: Técnica y Secretos del Chef' },
          highlights: [
            { id:'sa1', time:'2:30', sec:150, title:'Temperatura correcta de la sartén',desc:'El aceite debe humear antes de añadir ingredientes' },
            { id:'sa2', time:'7:00', sec:420, title:'El flip sin espátula',             desc:'Movimiento de muñeca para voltear sin utensilios' },
            { id:'sa3', time:'12:45',sec:765, title:'Orden de adición',                desc:'Primero lo que más tiempo necesita, lo delicado al final' },
            { id:'sa4', time:'18:20',sec:1100,title:'Desglasar la sartén',             desc:'Recuperar los jugos caramelizados con vino o caldo' },
          ],
          chapters: null
        },
        {
          id: 'estofado', label: 'Estofado', icon: '🍲',
          fullTitle: 'Estofados y Braseados',
          desc: 'Cocción lenta en líquido que transforma los cortes más duros en platos melosos. Mirepoix, sellado previo y la magia del tiempo.',
          video: { id: 'YOUTUBE_VIDEO_ID_6', title: 'El Arte del Estofado Perfecto — Slow Cooking' },
          highlights: [
            { id:'es1', time:'3:00', sec:180, title:'Sellar la carne primero (searing)', desc:'Crear costra para concentrar jugos — no "sellar" literalmente' },
            { id:'es2', time:'9:15', sec:555, title:'La mirepoix base',                  desc:'Cebolla:zanahoria:apio en proporción 2:1:1' },
            { id:'es3', time:'16:00',sec:960, title:'Temperatura y tiempo de cocción',   desc:'140–160°C durante horas — bajo y lento es la clave' },
            { id:'es4', time:'22:30',sec:1350,title:'Reducir y glasear la salsa',        desc:'Concentrar sabores en los últimos 20 minutos' },
          ],
          chapters: [
            { id:'esc1', title:'Preparación Inicial', sec:0,   hls:['es1','es2'] },
            { id:'esc2', title:'Cocción y Acabado',    sec:900, hls:['es3','es4'] },
          ]
        },
        {
          id: 'horneado', label: 'Horneado', icon: '☀️',
          fullTitle: 'Técnicas de Horneado',
          desc: 'Calor seco, convección y vapor. Precalentado, posición de bandejas, uso del ventilador y cómo verificar la cocción sin termómetro.',
          video: { id: 'YOUTUBE_VIDEO_ID_7', title: 'Guía Completa de Horneado para Cocina Salada y Dulce' },
          highlights: [
            { id:'ho1', time:'2:00', sec:120, title:'Precalentar correctamente',       desc:'Mínimo 20 min — un termómetro de horno es esencial' },
            { id:'ho2', time:'8:30', sec:510, title:'Calor arriba/abajo/ventilador',   desc:'Cuándo usar cada modo para distintos resultados' },
            { id:'ho3', time:'15:00',sec:900, title:'Vaporizador casero',              desc:'Bandeja con agua para crear vapor — panes y asados más jugosos' },
            { id:'ho4', time:'21:15',sec:1275,title:'Test de cocción sin termómetro', desc:'Palillo, tacto y color como guías precisas' },
          ],
          chapters: null
        },
      ]
    },
    {
      id: 'salsas', label: 'Salsas y Fondos', color: '#0d9488',
      topics: [
        {
          id: 'fondos', label: 'Fondos', icon: '🫙',
          fullTitle: 'Fondos y Caldos Base',
          desc: 'La base de toda gran cocina clásica. Fondo oscuro, fondo blanco y fumet de pescado — el esqueleto invisible de los grandes platos.',
          video: { id: 'YOUTUBE_VIDEO_ID_8', title: 'Los Fondos Clásicos: Oscuro, Blanco y Fumet' },
          highlights: [
            { id:'fo1', time:'1:45', sec:105, title:'Fondo vs caldo — diferencias clave',  desc:'Sin sal, cocción larga, colágeno gelificado' },
            { id:'fo2', time:'7:30', sec:450, title:'Tostar los huesos a 200°C',            desc:'Color caramelo antes de añadir agua — sabor profundo' },
            { id:'fo3', time:'14:00',sec:840, title:'Bouquet garni',                        desc:'El manojo aromático esencial: tomillo, laurel, perejil' },
            { id:'fo4', time:'20:15',sec:1215,title:'Desgrasar y clarificar',               desc:'Fondo limpio y transparente — técnica del tren de espumas' },
          ],
          chapters: [
            { id:'foc1', title:'Fondo Oscuro',    sec:0,   hls:['fo1','fo2'] },
            { id:'foc2', title:'Aromatización',   sec:800, hls:['fo3','fo4'] },
          ]
        },
        {
          id: 'madres', label: 'Salsas Madre', icon: '🫕',
          fullTitle: 'Las 5 Salsas Madre',
          desc: 'Bechamel, velouté, española, holandesa y tomate — las salsas fundacionales de la cocina francesa de las que deriva todo lo demás.',
          video: { id: 'YOUTUBE_VIDEO_ID_9', title: 'Las 5 Salsas Madre — Técnicas Clásicas Francesas' },
          highlights: [
            { id:'sm1', time:'3:30', sec:210,  title:'Roux: base espesante',             desc:'Proporción 1:1 harina y mantequilla — tres puntos de tostado' },
            { id:'sm2', time:'10:00',sec:600,  title:'Bechamel perfecta sin grumos',     desc:'Añadir la leche caliente de golpe y batir sin parar' },
            { id:'sm3', time:'18:30',sec:1110, title:'Velouté y sus derivadas',          desc:'Con fondo claro en lugar de leche — elegante y sutil' },
            { id:'sm4', time:'26:00',sec:1560, title:'Holandesa: emulsión caliente',    desc:'Yemas + mantequilla clarificada + limón — frágil y gloriosa' },
            { id:'sm5', time:'34:15',sec:2055, title:'Española y demi-glace',           desc:'La reina oscura — fondo reducido a la mitad' },
          ],
          chapters: [
            { id:'smc1', title:'Salsas Blancas',         sec:0,    hls:['sm1','sm2','sm3'] },
            { id:'smc2', title:'Emulsiones y Oscuras',   sec:1500, hls:['sm4','sm5'] },
          ]
        },
        {
          id: 'emulsiones', label: 'Emulsiones', icon: '🥄',
          fullTitle: 'Emulsiones: Mayonesas y Vinagretas',
          desc: 'La física de mezclar lo que no se mezcla — aceite y agua unidos por la lecitina. Mayonesa casera, aioli y vinagreta perfectamente equilibrada.',
          video: { id: 'YOUTUBE_VIDEO_ID_10', title: 'Emulsiones en Cocina: Mayonesa, Aioli y Vinagreta' },
          highlights: [
            { id:'em1', time:'2:00', sec:120, title:'Qué es una emulsión',            desc:'Lípidos + agua + emulsionante (lecitina de yema)' },
            { id:'em2', time:'7:45', sec:465, title:'Mayonesa casera perfecta',       desc:'Yema, aceite en hilo finísimo y sal al final' },
            { id:'em3', time:'14:30',sec:870, title:'Reparar mayonesa cortada',       desc:'Yema nueva en bol limpio, añadir la cortada gota a gota' },
            { id:'em4', time:'20:00',sec:1200,title:'Vinagreta 3:1 con mostaza',      desc:'Ratio aceite/ácido y la mostaza como emulsionante natural' },
          ],
          chapters: null
        },
      ]
    },
    {
      id: 'avanzado', label: 'Cocina Avanzada', color: '#d97706',
      topics: [
        {
          id: 'pasta', label: 'Pasta Fresca', icon: '🍝',
          fullTitle: 'Pasta Fresca Artesanal',
          desc: 'Harina tipo 00, huevo y paciencia. La pasta fresca italiana requiere técnica en el amasado, el reposo y el laminado.',
          video: { id: 'YOUTUBE_VIDEO_ID_11', title: 'Pasta Fresca Desde Cero — Técnicas Maestras Italianas' },
          highlights: [
            { id:'pa1', time:'2:30', sec:150, title:'100g de harina por huevo',         desc:'La proporción base — ajustar según tamaño de los huevos' },
            { id:'pa2', time:'9:00', sec:540, title:'Amasado correcto — 10 minutos',    desc:'Hasta obtener una superficie completamente lisa y sedosa' },
            { id:'pa3', time:'16:30',sec:990, title:'Reposo mínimo 30 minutos',         desc:'En nevera tapado — mejor toda la noche para máximo sabor' },
            { id:'pa4', time:'23:00',sec:1380,title:'Laminado progresivo en máquina',   desc:'Bajar el grosor de forma gradual para no romper la masa' },
            { id:'pa5', time:'30:15',sec:1815,title:'Cocción al dente',                 desc:'Mucho menos tiempo que la pasta seca — probar siempre' },
          ],
          chapters: [
            { id:'pac1', title:'La Masa',           sec:0,    hls:['pa1','pa2','pa3'] },
            { id:'pac2', title:'Formado y Cocción', sec:1000, hls:['pa4','pa5'] },
          ]
        },
        {
          id: 'arroces', label: 'Arroces', icon: '🍚',
          fullTitle: 'Técnicas de Arroz: Paella y Risotto',
          desc: 'El cereal más versátil del mundo. Variedades, sus diferencias y las técnicas para cada estilo: el socarrat de la paella y el mantecato del risotto.',
          video: { id: 'YOUTUBE_VIDEO_ID_12', title: 'Domina el Arroz: Paella, Risotto y Técnicas Base' },
          highlights: [
            { id:'ar1', time:'3:00', sec:180, title:'Variedades y usos del arroz',     desc:'Bomba, arborio, jazmín, basmati — cuándo usar cada uno' },
            { id:'ar2', time:'10:30',sec:630, title:'El sofrito lento de paella',      desc:'Cocinar hasta casi quemar — la base del sabor profundo' },
            { id:'ar3', time:'18:00',sec:1080,title:'El socarrat perfecto',            desc:'El dorado crujiente del fondo sin llegar a quemarse' },
            { id:'ar4', time:'25:45',sec:1545,title:'Mantecato del risotto',           desc:'Mantequilla fría fuera del fuego — la clave de la cremosidad' },
          ],
          chapters: [
            { id:'arc1', title:'Paella',   sec:0,    hls:['ar1','ar2','ar3'] },
            { id:'arc2', title:'Risotto',  sec:1400, hls:['ar4'] },
          ]
        },
        {
          id: 'legumbres', label: 'Legumbres', icon: '🫘',
          fullTitle: 'Legumbres: Técnica y Sabor',
          desc: 'Garbanzos, lentejas, alubias — proteínas vegetales que necesitan técnica para brillar. Remojo, cocción perfecta y el hummus sedoso definitivo.',
          video: { id: 'YOUTUBE_VIDEO_ID_13', title: 'Legumbres: Cocción Perfecta y Recetas Clásicas' },
          highlights: [
            { id:'le1', time:'2:00', sec:120, title:'Remojo: duración y por qué',       desc:'8–12 horas cambiando el agua — elimina antinutrientes' },
            { id:'le2', time:'8:30', sec:510, title:'La sal: siempre al final',         desc:'Añadir sal antes endurece irreversiblemente la piel' },
            { id:'le3', time:'14:45',sec:885, title:'Cocción en olla a presión',        desc:'Tiempos exactos por tipo — lentejas vs garbanzos vs alubias' },
            { id:'le4', time:'21:00',sec:1260,title:'Hummus: la textura sedosa',        desc:'Pelar cada garbanzo individualmente — el secreto del restaurante' },
          ],
          chapters: null
        },
      ]
    },
    {
      id: 'reposteria', label: 'Repostería', color: '#e11d48',
      topics: [
        {
          id: 'masas', label: 'Masas', icon: '🥐',
          fullTitle: 'Las 4 Masas Esenciales de Repostería',
          desc: 'Masa quebrada, hojaldre rápido, choux y brioche — cuatro masas que abren todo un mundo de posibilidades dulces y saladas.',
          video: { id: 'YOUTUBE_VIDEO_ID_14', title: 'Las 4 Masas Básicas de Repostería — Técnicas Completas' },
          highlights: [
            { id:'ma1', time:'3:00', sec:180, title:'Masa quebrada (sablé)',         desc:'Arena de mantequilla + harina — nunca desarrollar gluten' },
            { id:'ma2', time:'12:00',sec:720, title:'Hojaldre rápido (rough puff)', desc:'Pliegues repetidos en frío — 730 capas en minutos' },
            { id:'ma3', time:'22:30',sec:1350,title:'Masa choux',                   desc:'Agua + mantequilla + harina + huevos al fuego — base de profiteroles' },
            { id:'ma4', time:'32:00',sec:1920,title:'Brioche: incorporar mantequilla',desc:'En dados fríos, poco a poco — nunca fundir la grasa' },
          ],
          chapters: [
            { id:'mac1', title:'Masas Crujientes', sec:0,    hls:['ma1','ma2'] },
            { id:'mac2', title:'Masas Cocidas',    sec:1300, hls:['ma3','ma4'] },
          ]
        },
        {
          id: 'cremas', label: 'Cremas', icon: '🍮',
          fullTitle: 'Cremas y Rellenos de Pastelería',
          desc: 'Crema pastelera, ganache, chantilly y crema de mantequilla italiana — los rellenos y coberturas esenciales de la pastelería profesional.',
          video: { id: 'YOUTUBE_VIDEO_ID_15', title: 'Cremas y Rellenos Profesionales — Pastelería Clásica' },
          highlights: [
            { id:'cr1', time:'2:30', sec:150, title:'Crema pastelera sin grumos',    desc:'Almidón de maíz + templar los huevos antes de la leche caliente' },
            { id:'cr2', time:'10:00',sec:600, title:'Ganache: ratios según uso',     desc:'1:1 para rellenos suaves, 2:1 para glaseados firmes' },
            { id:'cr3', time:'17:30',sec:1050,title:'Chantilly estable',             desc:'Nata muy fría + azúcar glas + bol congelado — no sobamantecar' },
            { id:'cr4', time:'24:00',sec:1440,title:'Crema de mantequilla italiana', desc:'Merengue italiano caliente + mantequilla fría en cubos pequeños' },
          ],
          chapters: [
            { id:'crc1', title:'Cremas Cocidas', sec:0,   hls:['cr1'] },
            { id:'crc2', title:'Cremas Frías',   sec:600, hls:['cr2','cr3','cr4'] },
          ]
        },
        {
          id: 'merengues', label: 'Merengues', icon: '☁️',
          fullTitle: 'Los Tres Merengues y Sus Aplicaciones',
          desc: 'Francés, italiano y suizo — tres variantes con texturas y aplicaciones muy distintas. Desde la pavlova hasta la decoración con soplete.',
          video: { id: 'YOUTUBE_VIDEO_ID_16', title: 'Merengues: Francés, Italiano y Suizo — Guía Definitiva' },
          highlights: [
            { id:'me1', time:'1:30', sec:90,  title:'Claras a temperatura ambiente', desc:'Montan el triple de volumen que las claras frías' },
            { id:'me2', time:'7:00', sec:420, title:'Francés: picos firmes',         desc:'Para pavlova y suspiros al horno — el más simple' },
            { id:'me3', time:'14:30',sec:870, title:'Italiano: almíbar a 121°C',    desc:'El más estable — para decorar sin hornear con seguridad alimentaria' },
            { id:'me4', time:'22:00',sec:1320,title:'Suizo: baño maría a 60°C',     desc:'Calentar claras y azúcar juntos antes de montar' },
            { id:'me5', time:'29:30',sec:1770,title:'Flamear con soplete',           desc:'Movimiento rápido y circular — tostar sin fundir' },
          ],
          chapters: [
            { id:'mec1', title:'Merengue Francés',   sec:0,    hls:['me1','me2'] },
            { id:'mec2', title:'Merengues Cocidos',  sec:800,  hls:['me3','me4'] },
            { id:'mec3', title:'Acabados',           sec:1700, hls:['me5'] },
          ]
        },
      ]
    }
  ]
};

/* ── Tree node coordinates (col, row) ── */
const LAYOUT = {
  seguridad:  [0,0], cuchillos: [0,2], mise:      [0,4], calor:     [0,6],
  salteado:   [1,1], estofado:  [1,3], horneado:  [1,5],
  fondos:     [2,0], madres:    [2,2], emulsiones:[2,4],
  pasta:      [3,1], arroces:   [3,3], legumbres: [3,5],
  masas:      [2,6], cremas:    [1,7], merengues: [3,7],
};

const EDGES = [
  ['seguridad','salteado'], ['cuchillos','salteado'], ['cuchillos','estofado'],
  ['mise','estofado'],      ['mise','horneado'],       ['calor','horneado'],
  ['salteado','fondos'],    ['salteado','pasta'],
  ['estofado','madres'],    ['estofado','arroces'],
  ['horneado','emulsiones'],['horneado','legumbres'],
  ['fondos','madres'],      ['madres','emulsiones'],
  ['pasta','arroces'],      ['arroces','legumbres'],
  ['emulsiones','masas'],   ['legumbres','merengues'],
  ['masas','cremas'],       ['masas','merengues'],
];

/* ── Helper: find topic/phase by id ── */
function findTopic(id) {
  for (const ph of COURSE.phases)
    for (const t of ph.topics)
      if (t.id === id) return { topic:t, phase:ph };
  return null;
}

function topicMap() {
  const m = {};
  for (const ph of COURSE.phases)
    for (const t of ph.topics)
      m[t.id] = { ...t, phaseColor: ph.color, phaseLabel: ph.label };
  return m;
}

const TOPIC_MAP = topicMap();

function secToStr(s) {
  const m = Math.floor(s/60), ss = s%60;
  return `${m}:${String(ss).padStart(2,'0')}`;
}

/* ═══════════════════════════════════════════════════════════════════
   SKILL-TREE COMPONENT
═══════════════════════════════════════════════════════════════════ */
class SkillTree extends HTMLElement {
  constructor() { super(); this._active = null; }
  connectedCallback() { this._render(); }

  _center(id) {
    const [c,r] = LAYOUT[id];
    const CELL = 68;
    return { x: c*CELL + CELL/2, y: r*CELL + CELL/2 };
  }

  _render() {
    const CELL = 68;
    const cols = Math.max(...Object.values(LAYOUT).map(([c])=>c)) + 1;
    const rows = Math.max(...Object.values(LAYOUT).map(([,r])=>r)) + 1;
    const W = cols * CELL, H = rows * CELL + CELL;

    /* SVG edges */
    const lines = EDGES.map(([a,b]) => {
      const pa = this._center(a), pb = this._center(b);
      const t = TOPIC_MAP[a];
      const col = t ? t.phaseColor : '#4f46e5';
      return `<line class="tree-line" x1="${pa.x}" y1="${pa.y}" x2="${pb.x}" y2="${pb.y}"
        stroke="${col}" stroke-width="1.5" stroke-opacity=".3"
        stroke-dasharray="none"/>`;
    }).join('');

    /* Nodes */
    const nodes = Object.entries(LAYOUT).map(([id,[c,r]]) => {
      const t = TOPIC_MAP[id];
      if (!t) return '';
      const x = c*CELL + CELL/2, y = r*CELL + CELL/2;
      const isActive = this._active === id;
      const borderCol = isActive ? 'var(--pink)' : t.phaseColor+'88';
      return `
        <div class="snode${isActive?' active':''}" data-id="${id}"
          data-tooltip="${t.fullTitle}"
          style="left:${x}px;top:${y}px;--node-color:${t.phaseColor}55">
          <div class="snode-inner" style="border-color:${borderCol};">
            <span class="snode-c1"></span><span class="snode-c2"></span>
            <span class="snode-icon">${t.icon}</span>
            <span class="snode-label">${t.label}</span>
          </div>
        </div>`;
    }).join('');

    this.innerHTML = `
      <div class="skill-tree-wrap" style="width:${W}px;height:${H}px;position:relative;">
        <svg class="tree-svg" width="${W}" height="${H}">${lines}</svg>
        ${nodes}
      </div>`;

    this.querySelectorAll('.snode').forEach(el =>
      el.addEventListener('click', () => this._select(el.dataset.id))
    );
  }

  _select(id) {
    this._active = id;
    this._render();
    document.dispatchEvent(new CustomEvent('topic-selected', { detail: { id } }));
  }

  activate(id) { this._select(id); }
}
customElements.define('skill-tree', SkillTree);

/* ═══════════════════════════════════════════════════════════════════
   CONTENT-VIEWER COMPONENT
═══════════════════════════════════════════════════════════════════ */
class ContentViewer extends HTMLElement {
  constructor() {
    super();
    this._topic = null;
    this._phase = null;
    this._activeHl = null;
    this._activeChap = null;
  }

  connectedCallback() {
    this._renderEmpty();
    document.addEventListener('topic-selected', e => {
      const found = findTopic(e.detail.id);
      if (found) this._load(found.topic, found.phase);
    });
  }

  _renderEmpty() {
    this.innerHTML = `
      <div class="viewer-empty">
        <div class="viewer-empty-icon">🍳</div>
        <div class="viewer-empty-title">Selecciona un tema</div>
        <div class="viewer-empty-sub">Elige una habilidad del árbol para comenzar</div>
        <div class="viewer-empty-arrows"><span>←</span> árbol de habilidades a la izquierda</div>
      </div>`;
  }

  _load(topic, phase) {
    this._topic = topic;
    this._phase = phase;
    this._activeHl = null;
    this._activeChap = null;
    this._render();
  }

  _loadVideo(videoId, startSec = 0) {
    const wrap = this.querySelector('.video-wrapper');
    if (!wrap) return;
    const auto = startSec > 0 ? 1 : 0;
    const src = `https://www.youtube.com/embed/${videoId}?start=${startSec}&autoplay=${auto}&rel=0&modestbranding=1&enablejsapi=1`;
    const existing = wrap.querySelector('iframe');
    if (existing) {
      existing.src = src;
    } else {
      wrap.innerHTML = `<iframe src="${src}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>`;
    }
  }

  _seekTo(seconds) {
    if (!this._topic) return;
    this._loadVideo(this._topic.video.id, seconds);
  }

  _render() {
    const { _topic: t, _phase: ph } = this;
    const hasChapters = t.chapters && t.chapters.length;

    /* Build chapters HTML */
    const chapHTML = hasChapters ? `
      <div class="chapters-section">
        <div class="section-label">Capítulos</div>
        <div class="chapters-grid">
          ${t.chapters.map((ch,i) => `
            <div class="chap-card" data-sec="${ch.sec}" data-id="${ch.id}">
              <div class="chap-num">CAP. ${String(i+1).padStart(2,'0')}</div>
              <div class="chap-title">${ch.title}</div>
              <div class="chap-time">${secToStr(ch.sec)}</div>
            </div>`).join('')}
        </div>
      </div>` : '';

    /* Build highlights HTML */
    const hlHTML = t.highlights.map(h => `
      <div class="hl-item" data-sec="${h.sec}" data-id="${h.id}">
        <span class="hl-time">${h.time}</span>
        <div class="hl-info">
          <div class="hl-title">${h.title}</div>
          <div class="hl-desc">${h.desc}</div>
        </div>
        <button class="hl-play" title="Ir a ${h.time}">▶</button>
      </div>`).join('');

    this.innerHTML = `
      <div class="topic-viewer">
        <div class="topic-header">
          <div class="phase-badge" style="color:${ph.color};border-color:${ph.color}44;">
            <span class="phase-badge-dot" style="background:${ph.color};"></span>
            ${ph.label}
          </div>
          <h1 class="topic-title">${t.fullTitle}</h1>
          <p class="topic-desc">${t.desc}</p>
        </div>

        <div class="topic-body">
          <div class="video-col">
            <div class="video-wrapper">
              <div class="video-placeholder">
                <div class="video-placeholder-icon">${t.icon}</div>
                <div class="video-placeholder-text">Cargando video…</div>
              </div>
            </div>
            ${chapHTML}
          </div>

          <div class="highlights-panel">
            <div class="hl-header">
              <span class="hl-header-icon">⚡</span>
              Momentos Clave
              <span class="hl-count">${t.highlights.length} highlights</span>
            </div>
            <div class="hl-list">${hlHTML}</div>
          </div>
        </div>
      </div>`;

    /* Load video */
    this._loadVideo(t.video.id, 0);

    /* Highlight click handlers */
    this.querySelectorAll('.hl-item').forEach(el => {
      el.addEventListener('click', () => {
        const sec = parseInt(el.dataset.sec);
        this._seekTo(sec);
        this.querySelectorAll('.hl-item').forEach(x => x.classList.remove('active'));
        el.classList.add('active');
        this._activeHl = el.dataset.id;
      });
    });

    /* Chapter click handlers */
    this.querySelectorAll('.chap-card').forEach(el => {
      el.addEventListener('click', () => {
        const sec = parseInt(el.dataset.sec);
        this._seekTo(sec);
        this.querySelectorAll('.chap-card').forEach(x => x.classList.remove('active'));
        el.classList.add('active');
        this._activeChap = el.dataset.id;
      });
    });
  }
}
customElements.define('content-viewer', ContentViewer);

/* ═══════════════════════════════════════════════════════════════════
   PHASE LEGEND
═══════════════════════════════════════════════════════════════════ */
(function buildLegend() {
  const el = document.getElementById('phase-legend');
  el.innerHTML = `
    <div class="legend-title">Fases del Curso</div>
    <div class="legend-grid">
      ${COURSE.phases.map(ph => `
        <div class="legend-item">
          <div class="legend-dot" style="background:${ph.color}33;border-color:${ph.color};"></div>
          ${ph.label}
        </div>`).join('')}
    </div>`;
})();
