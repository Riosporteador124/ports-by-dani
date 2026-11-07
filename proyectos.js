// Cada proyecto es una ficha. Copia una entrada y cambia sus datos.
const PROYECTOS = [
  {
    id: 'apple-knight', titulo: '🍎 Apple Knight',
    tituloDetalle: '🍎 Apple Knight — Port por Dani (testing)',
    tipo: 'port', imagen: 'assets/apple-knight.webp', creditoImagen: 'Arte de Apple Knight · Limitless, LLC',
    consolas: ['R36 Max'], motor: 'Unity',
    estado: 'En pruebas', fecha: '2026-11-07', color: 'gold', ejemplo: false,
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
    id: 'cuphead', titulo: 'Cuphead', tipo: 'port', imagen: 'assets/cuphead.webp',
    consolas: ['R36S', 'R36 Max'], motor: 'Unity', version: '1.3.4',
    estado: 'Disponible', fecha: '2026-11-07', color: 'gold', ejemplo: true,
    descripcion: 'Ficha de muestra para un port del juego de acción con estética de animación clásica.',
    descarga: '', repositorio: ''
  },
  {
    id: 'elderand', titulo: 'Elderand', tipo: 'port', imagen: 'assets/elderand.webp',
    consolas: ['R36S', 'Linux ARM'], motor: 'Unity', version: '1.0.2',
    estado: 'En pruebas', fecha: '2026-11-06', color: 'violet', ejemplo: true,
    descripcion: 'Ficha de muestra para un metroidvania de fantasía oscura.',
    descarga: '', repositorio: ''
  },
  {
    id: 'blasphemous', titulo: 'Blasphemous', tipo: 'port', imagen: 'assets/blasphemous.webp',
    consolas: ['R36S', 'R36 Max'], motor: 'Unity', version: '1.0.0',
    estado: 'Disponible', fecha: '2026-11-05', color: 'pink', ejemplo: true,
    descripcion: 'Ficha de muestra para un juego de acción y plataformas ambientado en Cvstodia.',
    descarga: '', repositorio: ''
  },
  {
    id: 'crash', titulo: 'Crash Twinsanity', tipo: 'port', imagen: 'assets/crash.webp',
    consolas: ['R36S', 'R36 Max'], motor: 'Otros', version: '1.1.0',
    estado: 'En desarrollo', fecha: '2026-11-04', color: 'cyan', ejemplo: true,
    descripcion: 'Ficha de muestra para un proyecto relacionado con la aventura de plataformas de Crash.',
    descarga: '', repositorio: ''
  },
  {
    id: 'ducktales', titulo: 'DuckTales Remastered', tipo: 'port', imagen: 'assets/ducktales.webp',
    consolas: ['R36S', 'Linux ARM'], motor: 'Otros', version: '1.2.0',
    estado: 'Disponible', fecha: '2026-11-03', color: 'gold', ejemplo: true,
    descripcion: 'Ficha de muestra para una aventura de plataformas protagonizada por el tío Rico.',
    descarga: '', repositorio: ''
  },
  {
    id: 'dandara', titulo: 'Dandara', tipo: 'port', imagen: 'assets/dandara.webp',
    consolas: ['R36S', 'R36 Max'], motor: 'Unity', version: '1.1.1',
    estado: 'En pruebas', fecha: '2026-11-02', color: 'pink', ejemplo: true,
    descripcion: 'Ficha de muestra para un metroidvania con movimiento entre superficies.',
    descarga: '', repositorio: ''
  },
  {
    id: 'fifa', titulo: 'FIFA 14 Android', tipo: 'port', imagen: 'assets/fifa.webp',
    consolas: ['R36S', 'Linux ARM'], motor: 'Otros', version: '1.4.0',
    estado: 'Disponible', fecha: '2026-11-01', color: 'cyan', ejemplo: true,
    descripcion: 'Ficha de muestra para un proyecto relacionado con la versión móvil de FIFA 14.',
    descarga: '', repositorio: ''
  }
];
