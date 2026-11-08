// Cada proyecto es una ficha. Copia una entrada y cambia sus datos.
const PROYECTOS = [
  {
    id: 'runic-curse', titulo: 'Runic Curse', tituloDetalle: 'Runic Curse — Port por Dani',
    tipo: 'port', imagen: 'assets/runic-curse-oficial.webp', creditoImagen: 'Arte oficial de Runic Curse · Nintendo eShop',
    consolas: ['R36S', 'R36 Max'], motor: 'Unity', estado: 'Jugable', fecha: '2026-11-07', color: 'violet', ejemplo: false,
    descripcion: 'Port de Runic Curse para R36S y R36 Max.',
    detalles: [
      {
        titulo: 'Instalación',
        numerado: true,
        puntos: [
          'Descarga RUNIC_CURSE_DANI.zip.',
          'Extrae Runic Curse.sh y la carpeta runiccurse dentro de ports de la microSD.',
          'Coloca tu APK Android 1.21 ARM64, paquete com.AlexeySuslin.RunicCurse, en runiccurse/gamedata/. Debe coincidir con la revisión indicada en VERSION REQUERIDA.txt.',
          'Abre Runic Curse desde Ports. La primera apertura prepara los datos automáticamente. Las siguientes reutilizan lo instalado.'
        ]
      },
      {
        titulo: 'Controles adicionales',
        puntos: [
          'SELECT + START cancela la preparación. Vuelve a abrir el port para continuar.',
          'L3 muestra u oculta los FPS. El contador empieza oculto.'
        ]
      },
      {
        titulo: 'Actualización y partidas',
        puntos: ['Conserva home, userdata y saves al actualizar.']
      }
    ],
    nota: 'El ZIP incluye el adaptador. Debes aportar tu propio APK compatible.',
    descarga: 'https://github.com/Riosporteador124/ports-by-dani/releases/download/runic-curse-testing/RUNIC_CURSE_DANI.zip', repositorio: ''
  },
  {
    id: 'pokemon-iberia', titulo: 'Pokémon Iberia', tituloDetalle: 'Pokémon Iberia — Port por Dani',
    tipo: 'port', imagen: 'assets/iberia-pantalla-titulo.webp', creditoImagen: 'Pantalla de título de Pokémon Iberia · EricLostie',
    consolas: ['R36S', 'R36 Max'], motor: 'RPG Maker XP', estado: 'Jugable', fecha: '2026-11-07', color: 'gold', ejemplo: false,
    descripcion: 'Port para la familia R36. Usa los archivos de Pokémon Iberia original V2.03 para Windows y los prepara en la consola.',
    detalles: [
      {
        titulo: 'Instalación',
        numerado: true,
        puntos: [
          'Extrae IBERIA_DANI.zip en ports de la microSD. Pokémon Iberia.sh y la carpeta iberia deben quedar juntos.',
          'Copia Game.rgssad, Game.ini y las carpetas Audio y Fonts de Pokémon Iberia original V2.03 en iberia/gamedata/.',
          'Abre Pokémon Iberia desde Ports. La primera apertura prepara los datos automáticamente. Espera a que termine.',
          'Las siguientes aperturas reutilizan lo instalado.'
        ]
      },
      {
        titulo: 'Controles adicionales',
        puntos: [
          'Mantén R1 para acelerar los diálogos y el movimiento.',
          'R3 muestra u oculta el contador de FPS, que empieza oculto.',
          'SELECT + START cancela la preparación. Vuelve a abrir el port para continuar.'
        ]
      },
      {
        titulo: 'Requisitos del firmware',
        puntos: ['Python 3 y compatibilidad con ejecución ARM32 y gráficos EGL/GLES ARM32.']
      }
    ],
    nota: 'El ZIP requiere los datos originales del juego. Al actualizar, conserva userdata para mantener tu partida.',
    descarga: 'https://github.com/Riosporteador124/ports-by-dani/releases/download/pokemon-iberia-testing/IBERIA_DANI.zip', repositorio: ''
  },
  {
    id: 'apple-knight', titulo: '🍎 Apple Knight',
    fps: {"rango":"55–57","contexto":"Medido en una zona de R36 Max XiFan con dArkOS4Clone."},
    tituloDetalle: '🍎 Apple Knight — Port por Dani',
    tipo: 'port', imagen: 'assets/apple-knight.webp', creditoImagen: 'Arte de Apple Knight · Limitless, LLC',
    consolas: ['R36S', 'R36 Max'], motor: 'Unity',
    estado: 'Jugable', fecha: '2026-11-07', color: 'gold', ejemplo: false,
    descripcion: 'Mi primer port. Incluye preparación automática del juego en la consola, controles físicos y mejoras en la sincronización de hilos para reducir el consumo de CPU.',
    detalles: [
      {
        titulo: 'Imagen y rendimiento',
        puntos: [
          'Imagen 4:3 centrada, sin deformación. Conserva las texturas y la resolución de los textos.',
          'Contador de FPS opcional, oculto al iniciar.',
          'Probado en R36 Max XiFan con dArkOS4Clone. En la zona medida alcanzó aproximadamente 55–57 FPS. El rendimiento puede variar según el nivel y las cargas.'
        ]
      },
      {
        titulo: 'Controles auxiliares',
        puntos: [
          'R3 muestra u oculta los FPS.',
          'L3 activa o desactiva el cursor.',
          'A/B hacen clic con el cursor visible.',
          'SELECT + START sale del juego.',
          'Consulta el menú de controles del juego para las demás acciones.'
        ]
      },
      {
        titulo: 'Instalación',
        numerado: true,
        puntos: [
          'Extrae Apple Knight.sh y la carpeta appleknight dentro de Ports.',
          'Coloca un solo APK completo 2.3.6 ARMv7, código 23603, en appleknight/gamedata/. Consulta VERSION REQUERIDA.txt para comprobar la compilación exacta compatible.',
          'Abre Apple Knight desde Ports.'
        ]
      }
    ],
    nota: 'El ZIP no incluye el APK ni datos comerciales. Conserva userdata al actualizar para mantener tu partida.',
    descarga: 'https://github.com/Riosporteador124/ports-by-dani/releases/download/apple-knight-testing/APPLE_KNIGHT_DANI.zip', repositorio: ''
  },
  {
    "id": "cuphead",
    fps: {"rango":"30–36,5","contexto":"Medición anterior en el mapa del mundo. Falta volver a medir con el port actualizado.","historico":true},
    "titulo": "Cuphead",
    "tituloDetalle": "Cuphead — Port por Dani (en pruebas)",
    "tipo": "port",
    "imagen": "assets/cuphead-oficial.webp",
    "creditoImagen": "Carátula oficial · Studio MDHR",
    "consolas": ["R36S", "R36 Max"],
    "motor": "Unity",
    "estado": "En pruebas",
    "fecha": "2026-11-07",
    "color": "gold",
    "ejemplo": false,
    "descripcion": "Port de Cuphead por Dani. El lanzador actualizado y sus archivos se verificaron en la microSD de la R36 Max. Queda pendiente una prueba completa en partida.",
    "detalles": [
      {
        "titulo": "Imagen y rendimiento",
        "puntos": [
          "Medición histórica de aproximadamente 30–36,5 FPS en el mapa del mundo. Falta repetir combates y transiciones con el adaptador actualizado.",
          "Selector 4:3 o 16:9. El modo 4:3 puede conservar limitaciones del HUD y 16:9 mantiene el encuadre original.",
          "Atlas comprimidos, corrección de shaders para los sprites y menos comprobaciones repetidas de fuentes.",
          "El lanzador corregido reconoce y reutiliza los datos preparados compatibles."
        ]
      },
      {
        "titulo": "Contador de FPS",
        "puntos": [
          "R3 muestra u oculta el contador de FPS.",
          "El contador empieza oculto y muestra los FPS medidos durante la partida."
        ]
      },
      {
        "titulo": "Instalación",
        "numerado": true,
        "puntos": [
          "Extrae Cuphead.sh y la carpeta cuphead directamente en ports de la microSD. Déjalos juntos, sin una carpeta adicional alrededor.",
          "Coloca tu APK compatible en cuphead/gamedata/. Se requiere Android 1.0.2, ARM64, paquete com.gabedeveloper.cuphead.",
          "Abre el juego desde Ports. La primera apertura prepara los datos automáticamente y muestra el progreso. Puede tardar bastante, especialmente en Cuphead.",
          "Mantén la consola con alimentación y encendida durante la preparación. SELECT + START cancela. Al volver a abrir se reutiliza lo que ya terminó.",
          "Las siguientes aperturas utilizan los datos preparados. La instalación en la consola funciona sin Windows ni internet."
        ]
      },
      {
        "titulo": "Actualización y partidas",
        "puntos": [
          "Para actualizar, fusiona las carpetas y conserva home, userdata, saves y los datos preparados. Una instalación compatible se reutiliza."
        ]
      }
    ],
    "nota": "El ZIP contiene únicamente el adaptador. Debes aportar tu propio APK compatible.",
    "descarga": "https://github.com/Riosporteador124/ports-by-dani/releases/download/r36max-testing-2026-11-07/CUPHEAD_DANI.zip",
    "repositorio": ""
  },
  {
    "id": "elderand",
    fps: {"rango":"26–30","contexto":"Medido en los tramos registrados en R36 Max."},
    "titulo": "Elderand",
    "tituloDetalle": "Elderand — Port por Dani (en pruebas)",
    "tipo": "port",
    "imagen": "assets/elderand-oficial.webp",
    "creditoImagen": "Carátula oficial · Mantra · Sinergia Games · Graffiti Games",
    "consolas": ["R36S", "R36 Max"],
    "motor": "Unity",
    "estado": "En pruebas",
    "fecha": "2026-11-07",
    "color": "violet",
    "ejemplo": false,
    "descripcion": "Port de Elderand por Dani. Sigue en pruebas por un cierre registrado en el controlador gráfico Mali durante una partida en R36 Max.",
    "detalles": [
      {
        "titulo": "Imagen y rendimiento",
        "puntos": [
          "Medición en R36 Max de aproximadamente 26–30 FPS en los tramos registrados, con algunos tirones y una pausa cercana a 0,2 segundos.",
          "Renderizado interno al 100 % para recuperar la legibilidad del menú.",
          "Preparación de texturas, precarga gradual de recursos de próximas salas y reserva temporal de memoria.",
          "Controles y sonido comprobados durante la partida. Instalación verificada con 7.516 archivos preparados."
        ]
      },
      {
        "titulo": "Contador de FPS",
        "puntos": [
          "SELECT + R3 muestra u oculta el contador de FPS.",
          "El contador empieza oculto y muestra los FPS medidos durante la partida."
        ]
      },
      {
        "titulo": "Instalación",
        "numerado": true,
        "puntos": [
          "Extrae Elderand.sh y la carpeta elderand directamente en ports de la microSD. Déjalos juntos, sin una carpeta adicional alrededor.",
          "Coloca tu APK compatible en elderand/gamedata/. Se requiere Android 1.3.22 (50), ARM64.",
          "Abre el juego desde Ports. La primera apertura prepara los datos automáticamente y muestra el progreso. Puede tardar bastante, especialmente en Cuphead.",
          "Mantén la consola con alimentación y encendida durante la preparación. SELECT + START cancela. Al volver a abrir se reutiliza lo que ya terminó.",
          "Las siguientes aperturas utilizan los datos preparados. La instalación en la consola funciona sin Windows ni internet."
        ]
      },
      {
        "titulo": "Actualización y partidas",
        "puntos": [
          "Para actualizar, fusiona las carpetas y conserva home, userdata, saves y los datos preparados. Una instalación compatible se reutiliza."
        ]
      }
    ],
    "nota": "El ZIP contiene únicamente el adaptador. Debes aportar tu propio APK compatible.",
    "descarga": "https://github.com/Riosporteador124/ports-by-dani/releases/download/r36max-testing-2026-11-07/ELDERAND_DANI.zip",
    "repositorio": ""
  },
  {
    "id": "blasphemous",
    fps: {"rango":"29–30","contexto":"Medido en la escena registrada en R36 Max."},
    "titulo": "Blasphemous",
    "tituloDetalle": "Blasphemous — Port por Dani (en pruebas)",
    "tipo": "port",
    "imagen": "assets/blasphemous-oficial.webp",
    "creditoImagen": "Carátula oficial · The Game Kitchen · Team17",
    "consolas": ["R36S", "R36 Max"],
    "motor": "Unity",
    "estado": "En pruebas",
    "fecha": "2026-11-07",
    "color": "pink",
    "ejemplo": false,
    "descripcion": "Port de Blasphemous por Dani. Instalación y arranque confirmados en R36 Max. La estabilidad durante partidas prolongadas sigue en evaluación.",
    "detalles": [
      {
        "titulo": "Imagen y rendimiento",
        "puntos": [
          "Medición en R36 Max de aproximadamente 29–30 FPS en la escena registrada. La muestra no permite extrapolar el resultado a otros combates o zonas.",
          "Presentación 4:3 con ataques, sangre e interfaz visibles.",
          "Texturas preparadas para la consola y reserva temporal de memoria comprimida para aliviar la falta de RAM. El efecto sobre los FPS depende de la carga.",
          "Instalación completada desde Ports. El lanzador corregido reutiliza los datos preparados."
        ]
      },
      {
        "titulo": "Contador de FPS",
        "puntos": [
          "L3 muestra u oculta el contador de FPS. R3 conserva el mapa.",
          "El contador empieza oculto y muestra los FPS medidos durante la partida."
        ]
      },
      {
        "titulo": "Instalación",
        "numerado": true,
        "puntos": [
          "Extrae Blasphemous.sh y la carpeta blasphemous-research directamente en ports de la microSD. Déjalos juntos, sin una carpeta adicional alrededor.",
          "Coloca tu APK compatible en blasphemous-research/gamedata/. Se requiere Android 1.9.0 (38), ARM64.",
          "Abre el juego desde Ports. La primera apertura prepara los datos automáticamente y muestra el progreso. Puede tardar bastante, especialmente en Cuphead.",
          "Mantén la consola con alimentación y encendida durante la preparación. SELECT + START cancela. Al volver a abrir se reutiliza lo que ya terminó.",
          "Las siguientes aperturas utilizan los datos preparados. La instalación en la consola funciona sin Windows ni internet."
        ]
      },
      {
        "titulo": "Actualización y partidas",
        "puntos": [
          "Para actualizar, fusiona las carpetas y conserva home, userdata, saves y los datos preparados. Una instalación compatible se reutiliza."
        ]
      }
    ],
    "nota": "El ZIP contiene únicamente el adaptador. Debes aportar tu propio APK compatible.",
    "descarga": "https://github.com/Riosporteador124/ports-by-dani/releases/download/r36max-testing-2026-11-07/BLASPHEMOUS_DANI.zip",
    "repositorio": ""
  },
  ...[
    ['dandara', 'Dandara', 'pink'],
    ['poketale', 'Poketale', 'violet'],
    ['pokemon-anil', 'Pokémon Añil', 'cyan'],
    ['pokemon-tectonic', 'Pokémon Tectonic', 'gold'],
    ['pokemon-bizarre', 'Pokémon Bizarre', 'pink'],
    ['pokemon-consonancia', 'Pokémon Consonancia', 'violet'],
    ['pokemon-frontera-digital', 'Pokémon Frontera Digital', 'cyan'],
    ['pokemon-titan', 'Pokémon Titán', 'gold'],
    ['pokemon-gadir', 'Pokémon Gadir', 'pink'],
    ['teslagrad', 'Teslagrad', 'cyan']
  ].map(([id, titulo, color]) => ({
    id, titulo, color, tipo: 'port', estado: 'Próximamente',
    consolas: ['R36S', 'R36 Max'], fecha: '',
    descripcion: 'Port anunciado para R36S y R36 Max. La fecha de publicación está por anunciar.'
  }))
];
