// Cada proyecto es una ficha. Copia una entrada y cambia sus datos.
const PROYECTOS = [
  {
    "id": "oddmar",
    "titulo": "Oddmar",
    "color": "gold",
    "tipo": "port",
    "estado": "Jugable",
    "imagen": "assets/proximamente-oddmar.webp",
    "creditoImagen": "Arte de Oddmar · Nintendo eShop",
    "consolas": [
      "R36S",
      "R36 Max"
    ],
    "fecha": "2026-11-10",
    "descripcion": "Port con imagen panorámica centrada, controles físicos y audio Wwise. Las cinemáticas se saltan automáticamente para continuar a la siguiente escena.",
    "tituloDetalle": "Oddmar — Port por Dani",
    "motor": "Unity",
    "ejemplo": false,
    "detalles": [
      {
        "titulo": "Instalación",
        "numerado": true,
        "puntos": [
          "Extrae Oddmar.sh y la carpeta oddmar juntos en ports de la microSD.",
          "Coloca tu APK completo Android 0.111 (265) ARM64, paquete com.mobge.Oddmar, en oddmar/gamedata/. También sirve un XAPK completo de esa edición. Consulta VERSION REQUERIDA.txt.",
          "Abre Oddmar desde Ports. La primera apertura extrae el APK y prepara el sonido y los metadatos. Las siguientes reutilizan los datos instalados."
        ]
      },
      {
        "titulo": "Controles y partidas",
        "puntos": [
          "R3 muestra u oculta los FPS. El contador empieza oculto.",
          "SELECT + START cancela la preparación o sale del juego. Vuelve a abrir el port para continuar la preparación.",
          "Guarda antes de salir y conserva home, userdata y saves al actualizar."
        ]
      }
    ],
    "nota": "El ZIP incluye el port. Aporta los archivos originales de la edición compatible.",
    "descarga": "https://github.com/Riosporteador124/ports-by-dani/releases/download/ports-2026-11-10-actualizacion/ODDMAR_ADAPTADOR_DANI.zip",
    "repositorio": ""
  },
  {
    "id": "fifa-14-android",
    "titulo": "FIFA 14 Android · FC26 opcional",
    "color": "cyan",
    "tipo": "port",
    "estado": "Jugable",
    "imagen": "assets/proximamente-fifa-14-android.webp",
    "creditoImagen": "Captura de FIFA 14 Android · Uptodown",
    "consolas": [
      "R36S",
      "R36 Max"
    ],
    "fecha": "2026-11-10",
    "descripcion": "Port de FIFA 14 Android con imagen 4:3, controles físicos y soporte de mods de datos como FC26. El motor ARM32 requiere ejecución y gráficos armhf en el firmware.",
    "tituloDetalle": "FIFA 14 Android · FC26 opcional — Port por Dani",
    "motor": "Otros",
    "ejemplo": false,
    "detalles": [
      {
        "titulo": "Instalación",
        "numerado": true,
        "puntos": [
          "Extrae FIFA 14.sh y la carpeta fifa14 juntos en ports de la microSD.",
          "Coloca el APK completo Android FIFA 14 1.3.6 (136), paquete com.ea.game.fifa14_row, en fifa14/gamedata/. Esta edición incluye el OBB base y el motor ARMv7 dentro del APK. Consulta VERSION REQUERIDA.txt para comprobar el archivo compatible.",
          "Abre FIFA 14 desde Ports. La primera apertura extrae el motor y los datos incluidos en el APK. Las siguientes reutilizan la instalación."
        ]
      },
      {
        "titulo": "Controles y partidas",
        "puntos": [
          "R3 muestra u oculta los FPS. El contador empieza oculto.",
          "L3 alterna cursor y mando. SELECT + R1 muestra u oculta el cursor SDL opcional.",
          "SELECT + START cancela la preparación o sale del juego. Vuelve a abrir el port para continuar la preparación.",
          "Guarda antes de salir y conserva userdata al actualizar."
        ]
      },
      {
        "titulo": "Mod opcional FC26 u otro mod compatible",
        "puntos": [
          "Coloca un OBB main.136.com.ea.game.fifa14_row.obb compatible con el motor 1.3.6 en fifa14/gamedata/mod/. También sirve un APK o ZIP del mod que contenga ese OBB.",
          "Al abrir desde Ports se instalan los datos del mod. La compatibilidad depende de la edición concreta del mod.",
          "Para volver a la base, retira el paquete de gamedata/mod/ y conserva el APK base en gamedata/. La siguiente preparación restaura los datos base."
        ]
      }
    ],
    "nota": "El ZIP incluye el port. Aporta los archivos originales de la edición compatible.",
    "descarga": "https://github.com/Riosporteador124/ports-by-dani/releases/download/ports-2026-11-10-actualizacion/FIFA14_FC26_ADAPTADOR_DANI.zip",
    "repositorio": ""
  },
  {
    "id": "inmost",
    "titulo": "INMOST",
    "color": "violet",
    "tipo": "port",
    "estado": "Jugable",
    "imagen": "assets/proximamente-inmost.webp",
    "creditoImagen": "Carátula · Steam",
    "consolas": [
      "R36S",
      "R36 Max"
    ],
    "fecha": "2026-11-10",
    "descripcion": "Port de la edición Android ARM64 con instalación desde el APK original y preparación automática de los recursos.",
    "tituloDetalle": "INMOST — Port por Dani",
    "motor": "Unity",
    "ejemplo": false,
    "detalles": [
      {
        "titulo": "Instalación",
        "numerado": true,
        "puntos": [
          "Extrae INMOST.sh y la carpeta inmost-arkos juntos en ports de la microSD.",
          "Coloca tu APK completo Android 2.78 (90) ARM64 en inmost-arkos/gamedata/. También sirve un XAPK completo de esa edición. Consulta VERSION REQUERIDA.txt.",
          "Abre INMOST desde Ports. La primera apertura extrae el juego y prepara sus bibliotecas, sonido y texturas. Las siguientes reutilizan los datos instalados."
        ]
      },
      {
        "titulo": "Controles y partidas",
        "puntos": [
          "SELECT + R3 muestra u oculta los FPS. El contador empieza oculto.",
          "SELECT + START cancela la preparación o sale del juego. Vuelve a abrir el port para continuar la preparación.",
          "Conserva home, userdata y saves al actualizar."
        ]
      }
    ],
    "nota": "El ZIP incluye el port. Aporta los archivos originales de la edición compatible.",
    "descarga": "https://github.com/Riosporteador124/ports-by-dani/releases/download/ports-2026-11-10-actualizacion/INMOST_ADAPTADOR_DANI.zip",
    "repositorio": ""
  },
  {
    "id": "dandara",
    "titulo": "Dandara",
    "tituloDetalle": "Dandara — Port por Dani",
    "tipo": "port",
    "imagen": "assets/proximamente-dandara.webp",
    "creditoImagen": "Carátula · Steam",
    "consolas": [
      "R36S",
      "R36 Max"
    ],
    "motor": "Unity",
    "estado": "Jugable",
    "fecha": "2026-11-10",
    "color": "pink",
    "ejemplo": false,
    "fps": {
      "rango": "28–30",
      "contexto": "Rendimiento reportado por Dani."
    },
    "descripcion": "Port de Android 1.5.24 ARM64 con instalación desde el APK original y generación automática de texturas ASTC.",
    "detalles": [
      {
        "titulo": "Instalación",
        "numerado": true,
        "puntos": [
          "Extrae Dandara.sh y la carpeta dandara juntos en ports de la microSD.",
          "Coloca tu APK completo Android 1.5.24 (200) ARM64 en dandara/gamedata/. También sirve un XAPK completo de esa edición. Consulta VERSION REQUERIDA.txt.",
          "Abre Dandara desde Ports. La primera apertura extrae el juego y prepara sus 287 texturas ASTC. Las siguientes aperturas reutilizan los datos instalados."
        ]
      },
      {
        "titulo": "Controles y partidas",
        "puntos": [
          "SELECT + R3 muestra u oculta los FPS. El contador empieza oculto.",
          "SELECT + START cancela la preparación o sale del juego. Vuelve a abrir el port para continuar la preparación.",
          "Conserva home, userdata y saves al actualizar."
        ]
      }
    ],
    "nota": "El ZIP incluye el port. Aporta los archivos originales de la edición compatible.",
    "descarga": "https://github.com/Riosporteador124/ports-by-dani/releases/download/ports-2026-11-10-actualizacion/DANDARA__DANI.zip",
    "repositorio": ""
  },
  {
    "id": "dwarf-journey",
    "titulo": "Dwarf Journey",
    "tituloDetalle": "Dwarf Journey — Port por Dani",
    "tipo": "port",
    "imagen": "assets/proximamente-dwarf-journey.webp",
    "creditoImagen": "Carátula · Steam",
    "consolas": [
      "R36S",
      "R36 Max"
    ],
    "motor": "Unity",
    "estado": "Jugable",
    "fecha": "2026-11-10",
    "color": "gold",
    "ejemplo": false,
    "fps": {
      "rango": "26–30",
      "contexto": "Rendimiento reportado por Dani."
    },
    "descripcion": "Port de la edición Android con presentación 4:3.",
    "detalles": [
      {
        "titulo": "Instalación",
        "numerado": true,
        "puntos": [
          "Extrae Dwarf Journey.sh y la carpeta dwarfjourney juntos en ports de la microSD.",
          "Coloca tu APK Android 1.3.82 ARM64, paquete com.OrubeGameStudio.DwarfJourney, en dwarfjourney/gamedata/. También sirve un XAPK completo de esa revisión.",
          "Abre Dwarf Journey desde Ports. La primera apertura verifica y prepara los datos. Las siguientes reutilizan lo instalado."
        ]
      },
      {
        "titulo": "Controles y partidas",
        "puntos": [
          "SELECT + R3 muestra u oculta los FPS. El contador empieza oculto.",
          "SELECT + START cancela la preparación. Vuelve a abrir el port para continuar.",
          "Conserva home y userdata al actualizar."
        ]
      }
    ],
    "nota": "El ZIP incluye el port. Aporta los datos compatibles del juego.",
    "descarga": "https://github.com/Riosporteador124/ports-by-dani/releases/download/ports-2026-11-10-2/DWARF_JOURNEY_ADAPTADOR_DANI.zip",
    "repositorio": ""
  },
  {
    "id": "the-swords-of-ditto",
    "titulo": "The Swords of Ditto: Mormo’s Curse",
    "tituloDetalle": "The Swords of Ditto: Mormo’s Curse — Port por Dani",
    "tipo": "port",
    "imagen": "assets/proximamente-the-swords-of-ditto.webp",
    "creditoImagen": "Carátula · Steam",
    "consolas": [
      "R36S",
      "R36 Max"
    ],
    "motor": "GameMaker",
    "estado": "Jugable",
    "fecha": "2026-11-10",
    "color": "gold",
    "ejemplo": false,
    "fps": {
      "rango": "33–45",
      "contexto": "Rendimiento reportado por Dani."
    },
    "descripcion": "Port de Android 1.1.1 ARM64 con preparación desde el APK y el OBB originales, texturas ASTC y audio PCM a 24 kHz.",
    "detalles": [
      {
        "titulo": "Instalación",
        "numerado": true,
        "puntos": [
          "Extrae The Swords of Ditto.sh y la carpeta ditto-arkos juntos en ports de la microSD.",
          "Coloca tu APK Android 1.1.1 (1001002) ARM64 y main.1001002.com.devolver.Swordsofditto.obb en ditto-arkos/gamedata/. También sirve un XAPK completo o el APK junto al ZIP original que contiene el OBB. Consulta VERSION REQUERIDA.txt.",
          "Abre The Swords of Ditto desde Ports. La primera apertura genera las 591 páginas de texturas y prepara el audio. Puede tardar y requiere espacio para los originales, los archivos temporales y la instalación. Las siguientes aperturas reutilizan lo preparado."
        ]
      },
      {
        "titulo": "Controles y partidas",
        "puntos": [
          "SELECT + R3 muestra u oculta los FPS. El contador empieza oculto.",
          "SELECT + START cancela la preparación o sale del juego. Vuelve a abrir el port para continuar la preparación.",
          "Guarda desde el juego antes de salir y conserva userdata, incluida userdata/Savefiles, al actualizar."
        ]
      }
    ],
    "nota": "El ZIP incluye el port. Aporta los archivos originales de la edición compatible.",
    "descarga": "https://github.com/Riosporteador124/ports-by-dani/releases/download/ports-2026-11-10-actualizacion/THE_SWORDS_OF_DITTO_ADAPTADOR_DANI.zip",
    "repositorio": ""
  },
  {
    "id": "evoland-2",
    "titulo": "Evoland 2",
    "tituloDetalle": "Evoland 2 — Port por Dani",
    "tipo": "port",
    "imagen": "assets/proximamente-evoland-2.webp",
    "creditoImagen": "Carátula · Steam",
    "consolas": [
      "R36S",
      "R36 Max"
    ],
    "motor": "Otros",
    "estado": "Jugable",
    "fecha": "2026-11-10",
    "color": "gold",
    "ejemplo": false,
    "fps": {
      "rango": "40–45",
      "estable": true,
      "contexto": "Rendimiento reportado por Dani."
    },
    "descripcion": "Port de la edición Android con HashLink y SDL2.",
    "detalles": [
      {
        "titulo": "Instalación",
        "numerado": true,
        "puntos": [
          "Extrae Evoland 2.sh y la carpeta evoland2 juntos en ports de la microSD.",
          "Coloca tu APK Android 2.4.0 ARM64, o un XAPK completo de esa revisión, en evoland2/gamedata/. Consulta VERSION REQUERIDA.txt.",
          "Abre Evoland 2 desde Ports. La primera apertura verifica y prepara los datos. Las siguientes reutilizan lo instalado."
        ]
      },
      {
        "titulo": "Controles y partidas",
        "puntos": [
          "R3 muestra u oculta los FPS. El contador empieza oculto.",
          "SELECT + START cancela la preparación. Vuelve a abrir el port para continuar.",
          "Conserva home, userdata y saves al actualizar."
        ]
      }
    ],
    "nota": "El ZIP incluye el port. Aporta los datos compatibles del juego.",
    "descarga": "https://github.com/Riosporteador124/ports-by-dani/releases/download/ports-2026-11-10-2/EVOLAND_2_ADAPTADOR_DANI.zip",
    "repositorio": ""
  },
  {
    "id": "my-memory-of-us",
    "titulo": "My Memory of Us",
    "tituloDetalle": "My Memory of Us — Port por Dani",
    "tipo": "port",
    "imagen": "assets/my-memory-of-us.webp",
    "creditoImagen": "Carátula · Steam",
    "consolas": [
      "R36S",
      "R36 Max"
    ],
    "motor": "Unity",
    "estado": "Jugable",
    "fecha": "2026-11-10",
    "color": "violet",
    "ejemplo": false,
    "fps": {
      "rango": "24–30",
      "contexto": "Rendimiento reportado por Dani."
    },
    "descripcion": "Port con imagen 4:3 centrada. Salta el vídeo de introducción para entrar al juego.",
    "detalles": [
      {
        "titulo": "Instalación",
        "numerado": true,
        "puntos": [
          "Extrae MyMemoryOfUs.sh y la carpeta mymemoryofus juntos en ports de la microSD.",
          "Coloca tu APK Android 1.0 (21) ARM64 y el OBB main.21.com.vpltd.mymemoryofusandroid.obb en mymemoryofus/gamedata/. También sirve el XAPK completo de esa edición o el APK junto con el ZIP de caché que contiene el OBB.",
          "Abre MyMemoryOfUs desde Ports. La primera apertura verifica y prepara los datos. Las siguientes reutilizan lo instalado."
        ]
      },
      {
        "titulo": "Controles y partidas",
        "puntos": [
          "SELECT + R3 muestra u oculta los FPS. El contador empieza oculto.",
          "SELECT + START cancela la preparación. Vuelve a abrir el port para continuar.",
          "Conserva mymemoryofus/home/ al actualizar para mantener tus partidas."
        ]
      }
    ],
    "nota": "El ZIP incluye el port. Aporta los datos compatibles del juego.",
    "descarga": "https://github.com/Riosporteador124/ports-by-dani/releases/download/ports-2026-11-10-2/MY_MEMORY_OF_US_ADAPTADOR_DANI.zip",
    "repositorio": ""
  },
  {
    "id": "dead-station-2",
    "fps": {
      "rango": "30",
      "estable": true,
      "contexto": "Rendimiento reportado por Dani."
    },
    "titulo": "Dead Station 2",
    "tituloDetalle": "Dead Station 2 — Port por Dani",
    "tipo": "port",
    "imagen": "assets/proximamente-dead-station-2.webp",
    "creditoImagen": "Icono oficial · Google Play",
    "consolas": [
      "R36S",
      "R36 Max"
    ],
    "motor": "GameMaker",
    "estado": "Jugable",
    "fecha": "2026-11-10",
    "color": "cyan",
    "ejemplo": false,
    "descripcion": "Port de Android 2.0.0 con controles físicos y preparación automática de texturas ASTC desde el APK original.",
    "detalles": [
      {
        "titulo": "Instalación",
        "numerado": true,
        "puntos": [
          "Extrae Dead Station 2.sh y la carpeta deadstation2 juntos en ports de la microSD.",
          "Coloca tu APK completo Android 2.0.0 (2000000) ARM64 en deadstation2/gamedata/. También sirve un XAPK completo de esa edición. Consulta VERSION REQUERIDA.txt.",
          "Abre Dead Station 2 desde Ports. La primera apertura prepara el juego y sus 60 texturas ASTC. La conversión puede tardar. Las siguientes aperturas reutilizan lo instalado."
        ]
      },
      {
        "titulo": "Controles y partidas",
        "puntos": [
          "SELECT + R3 muestra u oculta los FPS. El contador empieza oculto.",
          "SELECT + START cancela la preparación o sale del juego. Vuelve a abrir el port para continuar la preparación.",
          "Conserva saves, home y userdata al actualizar."
        ]
      }
    ],
    "nota": "El ZIP incluye el port. Aporta los archivos originales de la edición compatible.",
    "descarga": "https://github.com/Riosporteador124/ports-by-dani/releases/download/ports-2026-11-10-actualizacion/DEAD_STATION_2_ADAPTADOR_DANI.zip",
    "repositorio": ""
  },
  {
    "id": "super-mario-2d-world-dx",
    "titulo": "Super Mario 2D World DX",
    "tituloDetalle": "Super Mario 2D World DX — Port por Dani",
    "tipo": "port",
    "imagen": "assets/sm2dw.webp",
    "creditoImagen": "Carátula del fangame · Kotaku",
    "consolas": [
      "R36S",
      "R36 Max"
    ],
    "motor": "GameMaker",
    "estado": "Jugable",
    "fecha": "2026-11-10",
    "color": "gold",
    "ejemplo": false,
    "fps": {
      "rango": "59–59,6",
      "contexto": "Medición del port base en mountain_bell."
    },
    "descripcion": "Port del fangame con imagen 4:3 centrada, modo rendimiento y mandos físicos.",
    "detalles": [
      {
        "titulo": "Instalación",
        "numerado": true,
        "puntos": [
          "Extrae Super Mario 2D World DX.sh y la carpeta sm2dw juntos en ports de la microSD.",
          "Pon en sm2dw/gamedata/ el APK Android Hotfix 1.5 (Gama Baja-Media), v1.0.2.4 (2001026) ARMv7, paquete com.creativearaya.sonic2sms. También sirve un XAPK completo con ese APK. Consulta VERSION REQUERIDA.txt para comprobar la edición.",
          "Abre Super Mario 2D World DX desde Ports. La primera apertura prepara los datos automáticamente, sin PC ni internet. Las siguientes reutilizan lo preparado."
        ]
      },
      {
        "titulo": "Controles y partidas",
        "puntos": [
          "Cruceta o joystick izquierdo para moverte. A/B saltan o confirman. X/Y sirven para correr y hacer acciones.",
          "R1 activa la carrera automática, SELECT usa el objeto de reserva y START pausa.",
          "R3 muestra u oculta los FPS. SELECT + START cancela la preparación o sale del juego. Vuelve a abrir para reanudar la preparación.",
          "Conserva sm2dw/saves/ al actualizar."
        ]
      }
    ],
    "nota": "El ZIP contiene el adaptador. Aporta tu APK compatible. El firmware debe admitir ejecución y gráficos ARM32 en un sistema ARM64.",
    "descarga": "https://github.com/Riosporteador124/ports-by-dani/releases/download/ports-2026-11-10/SUPER_MARIO_2D_WORLD_DX_ADAPTADOR_DANI.zip",
    "repositorio": ""
  },
  {
    "id": "afterplace",
    "titulo": "Afterplace",
    "tituloDetalle": "Afterplace — Port por Dani",
    "tipo": "port",
    "imagen": "assets/afterplace.webp",
    "creditoImagen": "Carátula · Steam",
    "consolas": [
      "R36S",
      "R36 Max"
    ],
    "motor": "Unity",
    "estado": "Jugable",
    "fecha": "2026-11-10",
    "color": "violet",
    "ejemplo": false,
    "fps": {
      "rango": "25–32",
      "contexto": "Rendimiento en exteriores y bosque en R36 Max. En interiores pequeños se registraron 43–46 FPS y en el título, aproximadamente 58 FPS."
    },
    "descripcion": "La imagen se adapta al panel 1:1 o 4:3 conservando proporciones, interfaz y textos. En R36 Max se registraron ≈58 FPS en el título, 43–46 en interiores pequeños y 25–32 en exteriores. Puede haber tirones ocasionales en zonas pesadas.",
    "detalles": [
      {
        "titulo": "Instalación",
        "numerado": true,
        "puntos": [
          "Extrae Afterplace.sh y la carpeta afterplace juntos en ports de la microSD.",
          "Coloca tu APK Android 1.2.22 (226) ARM64, paquete com.kice.afterplace, en afterplace/gamedata/. También sirve un XAPK completo de esa revisión. Consulta VERSION REQUERIDA.txt.",
          "Abre Afterplace desde Ports. La primera apertura prepara los datos automáticamente, sin PC ni internet. Las siguientes reutilizan lo preparado."
        ]
      },
      {
        "titulo": "Controles y partidas",
        "puntos": [
          "SELECT + R3 muestra u oculta los FPS. El contador empieza oculto.",
          "SELECT + START cancela la preparación o sale guardando. Si cancelas la preparación, vuelve a abrir para continuar.",
          "Conserva afterplace/home/ al actualizar para mantener tus partidas."
        ]
      }
    ],
    "nota": "El ZIP contiene el adaptador. Aporta tu APK compatible.",
    "descarga": "https://github.com/Riosporteador124/ports-by-dani/releases/download/ports-2026-11-10/AFTERPLACE_ADAPTADOR_DANI.zip",
    "repositorio": ""
  },
  {
    "id": "pokemon-anil",
    fps: {"rango":"25–40","contexto":"Rendimiento reportado por Dani."},
    "titulo": "Pokémon Añil",
    "tituloDetalle": "Pokémon Añil — Port por Dani",
    "tipo": "port",
    "imagen": "assets/proximamente-pokemon-anil.webp",
    "creditoImagen": "Carátula · Whack a Hack",
    "consolas": [
      "R36S",
      "R36 Max"
    ],
    "motor": "RPG Maker XP",
    "estado": "Jugable",
    "fecha": "2026-11-07",
    "color": "cyan",
    "ejemplo": false,
    "descripcion": "Port de la edición de Windows con preparación automática.",
    "detalles": [
      {
        "titulo": "Instalación",
        "numerado": true,
        "puntos": [
          "Extrae Pokémon Añil.sh y la carpeta anil juntos en ports de la microSD.",
          "Coloca Pokémon Añil v4.14 para Windows, como carpeta o archivo ZIP, RAR o 7z, en anil/gamedata/. También puedes copiar Game.ini y las carpetas Data, Graphics, Audio y Fonts. Si los recursos vienen en Game.rgssad, el port lo lee automáticamente.",
          "Abre Pokémon Añil desde Ports. La primera apertura verifica y prepara los datos con una barra de progreso. Las siguientes reutilizan lo preparado."
        ]
      },
      {
        "titulo": "Controles adicionales",
        "puntos": [
          "Mantén R1 para acelerar el juego.",
          "R3 muestra u oculta el contador de FPS. Empieza oculto.",
          "SELECT + START cancela la preparación. Vuelve a abrir el port para continuar."
        ]
      }
    ],
    "nota": "El ZIP contiene el port. Aporta los datos originales del juego y conserva userdata al actualizar. El motor requiere soporte ARM32 y el preparador usa ARM64.",
    "descarga": "https://github.com/Riosporteador124/ports-by-dani/releases/download/ports-2026-11-07/ANIL_ADAPTADOR_DANI.zip",
    "repositorio": ""
  },
  {
    "id": "pokemon-bizarre",
    fps: {"rango":"25–40","contexto":"Rendimiento reportado por Dani."},
    "titulo": "Pokémon Bizarre",
    "tituloDetalle": "Pokémon Bizarre — Port por Dani",
    "tipo": "port",
    "imagen": "assets/proximamente-pokemon-bizarre.webp",
    "creditoImagen": "Carátula · Whack a Hack",
    "consolas": [
      "R36S",
      "R36 Max"
    ],
    "motor": "RPG Maker XP",
    "estado": "Jugable",
    "fecha": "2026-11-07",
    "color": "pink",
    "ejemplo": false,
    "descripcion": "Port de la edición de Windows con preparación automática.",
    "detalles": [
      {
        "titulo": "Instalación",
        "numerado": true,
        "puntos": [
          "Extrae Pokémon Bizarre.sh y la carpeta bizarre juntos en ports de la microSD.",
          "Coloca Pokémon Bizarre para Windows, como carpeta o archivo ZIP, RAR o 7z, en bizarre/gamedata/. También puedes copiar Game.ini y las carpetas Data, Graphics, Audio y Fonts. Si los recursos vienen en Game.rgssad, el port lo lee automáticamente.",
          "Abre Pokémon Bizarre desde Ports. La primera apertura verifica y prepara los datos con una barra de progreso. Las siguientes reutilizan lo preparado."
        ]
      },
      {
        "titulo": "Controles adicionales",
        "puntos": [
          "Mantén R1 para acelerar el juego.",
          "R3 muestra u oculta el contador de FPS. Empieza oculto.",
          "SELECT + START cancela la preparación. Vuelve a abrir el port para continuar."
        ]
      }
    ],
    "nota": "El ZIP contiene el port. Aporta los datos originales del juego y conserva userdata al actualizar. El motor requiere soporte ARM32 y el preparador usa ARM64.",
    "descarga": "https://github.com/Riosporteador124/ports-by-dani/releases/download/ports-2026-11-07/BIZARRE_ADAPTADOR_DANI.zip",
    "repositorio": ""
  },
  {
    "id": "pokemon-consonancia",
    fps: {"rango":"25–40","contexto":"Rendimiento reportado por Dani."},
    "titulo": "Pokémon Consonancia",
    "tituloDetalle": "Pokémon Consonancia — Port por Dani",
    "tipo": "port",
    "imagen": "assets/proximamente-pokemon-consonancia.webp",
    "creditoImagen": "Carátula · Whack a Hack",
    "consolas": [
      "R36S",
      "R36 Max"
    ],
    "motor": "RPG Maker XP",
    "estado": "Jugable",
    "fecha": "2026-11-07",
    "color": "violet",
    "ejemplo": false,
    "descripcion": "Port de la edición de Windows con preparación automática.",
    "detalles": [
      {
        "titulo": "Instalación",
        "numerado": true,
        "puntos": [
          "Extrae Pokémon Consonancia.sh y la carpeta consonancia juntos en ports de la microSD.",
          "Coloca Pokémon Consonancia 1.3 para Windows, como carpeta o archivo ZIP, RAR o 7z, en consonancia/gamedata/. También puedes copiar Game.ini y las carpetas Data, Graphics, Audio y Fonts. Si los recursos vienen en Game.rgssad, el port lo lee automáticamente.",
          "Abre Pokémon Consonancia desde Ports. La primera apertura verifica y prepara los datos con una barra de progreso. Las siguientes reutilizan lo preparado."
        ]
      },
      {
        "titulo": "Controles adicionales",
        "puntos": [
          "Mantén R1 para acelerar el juego.",
          "R3 muestra u oculta el contador de FPS. Empieza oculto.",
          "SELECT + START cancela la preparación. Vuelve a abrir el port para continuar."
        ]
      }
    ],
    "nota": "El ZIP contiene el port. Aporta los datos originales del juego y conserva userdata al actualizar. El motor requiere soporte ARM32 y el preparador usa ARM64.",
    "descarga": "https://github.com/Riosporteador124/ports-by-dani/releases/download/ports-2026-11-07/CONSONANCIA_ADAPTADOR_DANI.zip",
    "repositorio": ""
  },
  {
    "id": "pokemon-frontera-digital",
    fps: {"rango":"25–40","contexto":"Rendimiento reportado por Dani."},
    "titulo": "Pokémon La Frontera Digital",
    "tituloDetalle": "Pokémon La Frontera Digital — Port por Dani",
    "tipo": "port",
    "imagen": "assets/proximamente-pokemon-frontera-digital.webp",
    "creditoImagen": "Carátula · Whack a Hack",
    "consolas": [
      "R36S",
      "R36 Max"
    ],
    "motor": "RPG Maker XP",
    "estado": "Jugable",
    "fecha": "2026-11-07",
    "color": "cyan",
    "ejemplo": false,
    "descripcion": "Port de la edición de Windows con preparación automática.",
    "detalles": [
      {
        "titulo": "Instalación",
        "numerado": true,
        "puntos": [
          "Extrae Pokémon La Frontera Digital.sh y la carpeta frontera-digital juntos en ports de la microSD.",
          "Coloca Pokémon La Frontera Digital v0.7.8 para Windows, como carpeta o archivo ZIP, RAR o 7z, en frontera-digital/gamedata/. También puedes copiar Game.ini y las carpetas Data, Graphics, Audio y Fonts. Si los recursos vienen en Game.rgssad, el port lo lee automáticamente.",
          "Abre Pokémon La Frontera Digital desde Ports. La primera apertura verifica y prepara los datos con una barra de progreso. Las siguientes reutilizan lo preparado."
        ]
      },
      {
        "titulo": "Controles adicionales",
        "puntos": [
          "Mantén R1 para acelerar el juego.",
          "R3 muestra u oculta el contador de FPS. Empieza oculto.",
          "SELECT + START cancela la preparación. Vuelve a abrir el port para continuar."
        ]
      }
    ],
    "nota": "El ZIP contiene el port. Aporta los datos originales del juego y conserva userdata al actualizar. El motor requiere soporte ARM32 y el preparador usa ARM64.",
    "descarga": "https://github.com/Riosporteador124/ports-by-dani/releases/download/ports-2026-11-07/FRONTERA_DIGITAL_ADAPTADOR_DANI.zip",
    "repositorio": ""
  },
  {
    "id": "pokemon-gadir",
    fps: {"rango":"25–40","contexto":"Rendimiento reportado por Dani."},
    "titulo": "Pokémon Gadir",
    "tituloDetalle": "Pokémon Gadir — Port por Dani",
    "tipo": "port",
    "imagen": "assets/proximamente-pokemon-gadir.webp",
    "creditoImagen": "Carátula · Whack a Hack",
    "consolas": [
      "R36S",
      "R36 Max"
    ],
    "motor": "RPG Maker XP",
    "estado": "Jugable",
    "fecha": "2026-11-07",
    "color": "pink",
    "ejemplo": false,
    "descripcion": "Port de la edición de Windows con preparación automática.",
    "detalles": [
      {
        "titulo": "Instalación",
        "numerado": true,
        "puntos": [
          "Extrae Pokémon Gadir.sh y la carpeta gadir juntos en ports de la microSD.",
          "Coloca Pokémon Gadir Deluxe DLC v1.1.1 para Windows, como carpeta o archivo ZIP, RAR o 7z, en gadir/gamedata/. También puedes copiar Game.ini y las carpetas Data, Graphics, Audio y Fonts. Si los recursos vienen en Game.rgssad, el port lo lee automáticamente.",
          "Abre Pokémon Gadir desde Ports. La primera apertura verifica y prepara los datos con una barra de progreso. Las siguientes reutilizan lo preparado."
        ]
      },
      {
        "titulo": "Controles adicionales",
        "puntos": [
          "Mantén R1 para acelerar el juego.",
          "R3 muestra u oculta el contador de FPS. Empieza oculto.",
          "SELECT + START cancela la preparación. Vuelve a abrir el port para continuar."
        ]
      }
    ],
    "nota": "El ZIP contiene el port. Aporta los datos originales del juego y conserva userdata al actualizar. El motor requiere soporte ARM32 y el preparador usa ARM64.",
    "descarga": "https://github.com/Riosporteador124/ports-by-dani/releases/download/ports-2026-11-07/GADIR_ADAPTADOR_DANI.zip",
    "repositorio": ""
  },
  {
    "id": "pokemon-opalo",
    fps: {"rango":"25–40","contexto":"Rendimiento reportado por Dani."},
    "titulo": "Pokémon Ópalo",
    "tituloDetalle": "Pokémon Ópalo — Port por Dani",
    "tipo": "port",
    "imagen": "assets/pokemon-opalo.webp",
    "creditoImagen": "Carátula · Whack a Hack",
    "consolas": [
      "R36S",
      "R36 Max"
    ],
    "motor": "RPG Maker XP",
    "estado": "Jugable",
    "fecha": "2026-11-07",
    "color": "violet",
    "ejemplo": false,
    "descripcion": "Port de la edición de Windows con preparación automática.",
    "detalles": [
      {
        "titulo": "Instalación",
        "numerado": true,
        "puntos": [
          "Extrae Pokémon Ópalo.sh y la carpeta opalo juntos en ports de la microSD.",
          "Coloca Pokémon Ópalo v2.11 para Windows, como carpeta o archivo ZIP, RAR o 7z, en opalo/gamedata/. También puedes copiar Game.ini y las carpetas Data, Graphics, Audio y Fonts. Si los recursos vienen en Game.rgssad, el port lo lee automáticamente.",
          "Abre Pokémon Ópalo desde Ports. La primera apertura verifica y prepara los datos con una barra de progreso. Las siguientes reutilizan lo preparado."
        ]
      },
      {
        "titulo": "Controles adicionales",
        "puntos": [
          "Mantén R1 para acelerar el juego.",
          "R3 muestra u oculta el contador de FPS. Empieza oculto.",
          "SELECT + START cancela la preparación. Vuelve a abrir el port para continuar."
        ]
      }
    ],
    "nota": "El ZIP contiene el port. Aporta los datos originales del juego y conserva userdata al actualizar. El motor requiere soporte ARM32 y el preparador usa ARM64.",
    "descarga": "https://github.com/Riosporteador124/ports-by-dani/releases/download/ports-2026-11-07/OPALO_ADAPTADOR_DANI.zip",
    "repositorio": ""
  },
  {
    "id": "pokemon-tectonic",
    fps: {"rango":"25–40","contexto":"Rendimiento reportado por Dani."},
    "titulo": "Pokémon Tectonic",
    "tituloDetalle": "Pokémon Tectonic — Port por Dani",
    "tipo": "port",
    "imagen": "assets/proximamente-pokemon-tectonic.webp",
    "creditoImagen": "Logo · Sitio oficial de Pokémon Tectonic",
    "consolas": [
      "R36S",
      "R36 Max"
    ],
    "motor": "RPG Maker XP",
    "estado": "Jugable",
    "fecha": "2026-11-07",
    "color": "gold",
    "ejemplo": false,
    "descripcion": "Port de la edición de Windows con preparación automática.",
    "detalles": [
      {
        "titulo": "Instalación",
        "numerado": true,
        "puntos": [
          "Extrae Pokémon Tectonic.sh y la carpeta tectonic juntos en ports de la microSD.",
          "Coloca Pokémon Tectonic 3.4.2 para Windows, como carpeta o archivo ZIP, RAR o 7z, en tectonic/gamedata/. También puedes copiar Game.ini y las carpetas Data, Graphics, Audio y Fonts. Si los recursos vienen en Game.rgssad, el port lo lee automáticamente.",
          "Abre Pokémon Tectonic desde Ports. La primera apertura verifica y prepara los datos con una barra de progreso. Las siguientes reutilizan lo preparado."
        ]
      },
      {
        "titulo": "Controles adicionales",
        "puntos": [
          "Mantén R1 para acelerar el juego.",
          "R3 muestra u oculta el contador de FPS. Empieza oculto.",
          "SELECT + START cancela la preparación. Vuelve a abrir el port para continuar."
        ]
      }
    ],
    "nota": "El ZIP contiene el port. Aporta los datos originales del juego y conserva userdata al actualizar. El motor requiere soporte ARM32 y el preparador usa ARM64.",
    "descarga": "https://github.com/Riosporteador124/ports-by-dani/releases/download/ports-2026-11-07/TECTONIC_ADAPTADOR_DANI.zip",
    "repositorio": ""
  },
  {
    "id": "pokemon-titan",
    fps: {"rango":"22–25","contexto":"Rendimiento reportado por Dani."},
    "titulo": "Pokémon Titán",
    "tituloDetalle": "Pokémon Titán — Port por Dani",
    "tipo": "port",
    "imagen": "assets/proximamente-pokemon-titan.webp",
    "creditoImagen": "Carátula · Whack a Hack",
    "consolas": [
      "R36S",
      "R36 Max"
    ],
    "motor": "RPG Maker XP",
    "estado": "Jugable",
    "fecha": "2026-11-07",
    "color": "gold",
    "ejemplo": false,
    "descripcion": "Port de la edición de Windows con preparación automática.",
    "detalles": [
      {
        "titulo": "Instalación",
        "numerado": true,
        "puntos": [
          "Extrae Pokémon Titán.sh y la carpeta titan juntos en ports de la microSD.",
          "Coloca Pokémon Titán v2.10 para Windows, como carpeta o archivo ZIP, RAR o 7z, en titan/gamedata/. También puedes copiar Game.ini y las carpetas Data, Graphics, Audio y Fonts. Si los recursos vienen en Game.rgssad, el port lo lee automáticamente.",
          "Abre Pokémon Titán desde Ports. La primera apertura verifica y prepara los datos con una barra de progreso. Las siguientes reutilizan lo preparado."
        ]
      },
      {
        "titulo": "Controles adicionales",
        "puntos": [
          "Mantén R1 para acelerar el juego.",
          "R3 muestra u oculta el contador de FPS. Empieza oculto.",
          "SELECT + START cancela la preparación. Vuelve a abrir el port para continuar."
        ]
      }
    ],
    "nota": "El ZIP contiene el port. Aporta los datos originales del juego y conserva userdata al actualizar. El motor requiere soporte ARM32 y el preparador usa ARM64.",
    "descarga": "https://github.com/Riosporteador124/ports-by-dani/releases/download/ports-2026-11-07/TITAN_ADAPTADOR_DANI.zip",
    "repositorio": ""
  },
  {
    "id": "pokemon-z",
    fps: {"rango":"25–40","contexto":"Rendimiento reportado por Dani."},
    "titulo": "Pokémon Z",
    "tituloDetalle": "Pokémon Z — Port por Dani",
    "tipo": "port",
    "imagen": "assets/proximamente-pokemon-z.webp",
    "creditoImagen": "Carátula · Whack a Hack",
    "consolas": [
      "R36S",
      "R36 Max"
    ],
    "motor": "RPG Maker XP",
    "estado": "Jugable",
    "fecha": "2026-11-07",
    "color": "gold",
    "ejemplo": false,
    "descripcion": "Port de la edición de Windows con preparación automática.",
    "detalles": [
      {
        "titulo": "Instalación",
        "numerado": true,
        "puntos": [
          "Extrae Pokémon Z.sh y la carpeta pokemon-z juntos en ports de la microSD.",
          "Coloca Pokémon Z v2.18 para Windows, como carpeta o archivo ZIP, RAR o 7z, en pokemon-z/gamedata/. También puedes copiar Game.ini y las carpetas Data, Graphics, Audio y Fonts. Si los recursos vienen en Game.rgssad, el port lo lee automáticamente.",
          "Abre Pokémon Z desde Ports. La primera apertura verifica y prepara los datos con una barra de progreso. Las siguientes reutilizan lo preparado."
        ]
      },
      {
        "titulo": "Controles adicionales",
        "puntos": [
          "Mantén R1 para acelerar el juego.",
          "R3 muestra u oculta el contador de FPS. Empieza oculto.",
          "SELECT + START cancela la preparación. Vuelve a abrir el port para continuar."
        ]
      }
    ],
    "nota": "El ZIP contiene el port. Aporta los datos originales del juego y conserva userdata al actualizar. El motor requiere soporte ARM32 y el preparador usa ARM64.",
    "descarga": "https://github.com/Riosporteador124/ports-by-dani/releases/download/ports-2026-11-07/POKEMON_Z_ADAPTADOR_DANI.zip",
    "repositorio": ""
  },
  {
    "id": "wonder-boy",
    "fps": {
      "rango": "30",
      "estable": true,
      "contexto": "Rendimiento reportado por Dani."
    },
    "titulo": "Wonder Boy: The Dragon’s Trap",
    "tituloDetalle": "Wonder Boy: The Dragon’s Trap — Port por Dani",
    "tipo": "port",
    "imagen": "assets/proximamente-wonder-boy.webp",
    "creditoImagen": "Carátula · Steam",
    "consolas": [
      "R36S",
      "R36 Max"
    ],
    "motor": "Otros",
    "estado": "Jugable",
    "fecha": "2026-11-10",
    "color": "pink",
    "ejemplo": false,
    "descripcion": "Port de la edición Android con preparación automática y perfil de rendimiento que ajusta el mínimo de GPU según la temperatura.",
    "detalles": [
      {
        "titulo": "Instalación",
        "numerado": true,
        "puntos": [
          "Extrae Wonder Boy.sh y la carpeta wonderboy juntos en ports de la microSD.",
          "Coloca tu APK Android 1.1.0 (105) ARM64 y OBB main.103 en wonderboy/gamedata/. También sirve un XAPK completo de esa edición. Consulta VERSION REQUERIDA.txt.",
          "Abre Wonder Boy desde Ports. La primera apertura prepara los datos con una barra de progreso. Las siguientes aperturas reutilizan lo instalado."
        ]
      },
      {
        "titulo": "Controles y partidas",
        "puntos": [
          "R3 muestra u oculta los FPS. El contador empieza oculto.",
          "SELECT + START cancela la preparación o sale del juego. Vuelve a abrir el port para continuar la preparación.",
          "Conserva home, userdata y saves al actualizar."
        ]
      },
      {
        "titulo": "ArkOS4Clone y pantalla negra antes del instalador",
        "numerado": true,
        "puntos": [
          "Este ajuste se aplica una vez por tarjeta cuando la herramienta reconoce la configuración de ArkOS4Clone. Cierra el juego y conecta por SSH con la cuenta administradora de la tarjeta.",
          "Entra en la carpeta con cd \"/roms/ports/wonderboy/compat\". Si usas SD2, cambia /roms/ports por /roms2/ports.",
          "Ejecuta python3 install_arkos_ports_route.py arkos-ports-launch.sh para comprobar si el ajuste corresponde a tu firmware.",
          "Si la comprobación termina correctamente, ejecuta python3 install_arkos_ports_route.py arkos-ports-launch.sh --apply y después sudo systemctl restart emulationstation.service.",
          "Abre Wonder Boy desde Ports. La ruta directa evita la animación previa al instalador."
        ]
      }
    ],
    "nota": "El ZIP incluye el port. Aporta los archivos originales de la edición compatible.",
    "descarga": "https://github.com/Riosporteador124/ports-by-dani/releases/download/ports-2026-11-10-actualizacion/WONDER_BOY_ADAPTADOR_DANI-ACTUALIZADO.zip",
    "repositorio": ""
  },
  {
    id: 'parahcuy', titulo: 'ParahCuy', tituloDetalle: 'ParahCuy — Port por Dani',
    tipo: 'port', imagen: 'assets/proximamente-parahcuy.webp', creditoImagen: 'Carátula · IGDB',
    consolas: ['R36S', 'R36 Max'], motor: 'GameMaker', estado: 'Jugable', fecha: '2026-11-07', color: 'gold', ejemplo: false,
    fps: { rango: '56–60', contexto: 'Medición del port base en R36 Max con dArkOS4Clone, en el menú y la primera zona jugable, sin contar cargas.' },
    descripcion: 'Port con selector 4:3 o 16:9 original. Incluye salida inmediata con SELECT + START.',
    detalles: [
      {
        titulo: 'Instalación',
        numerado: true,
        puntos: [
          'Extrae ParahCuy.sh y la carpeta parahcuy juntos en ports de la microSD.',
          'Coloca el APK Android 1.3.2 (1003002) ARM64, paquete com.sansdev_team.parahcuy, en parahcuy/gamedata/. También sirve un XAPK completo de esa revisión. Consulta VERSION REQUERIDA.txt.',
          'Abre ParahCuy desde Ports. La primera apertura verifica y prepara los datos automáticamente, sin PC ni internet. Las siguientes reutilizan los datos preparados.'
        ]
      },
      {
        titulo: 'Controles',
        puntos: [
          'IZQ/DER elige 4:3 o 16:9 en la pantalla inicial. A, B o START entra al juego; SELECT vuelve a Ports.',
          'Cruceta o joystick izquierdo para moverte. A ataca, B salta, Y lanza, X planea, R2 hace dash y START pausa.',
          'R3 muestra u oculta los FPS. SELECT + R1 activa o desactiva el cursor. Con el cursor visible, A hace clic.',
          'SELECT + START cancela la preparación o sale inmediatamente del juego. Si cancelas la preparación, vuelve a abrir el port para continuar. Guarda dentro del juego antes de salir.'
        ]
      }
    ],
    nota: 'El ZIP contiene el port. Debes aportar el APK compatible. Al actualizar, conserva home, userdata y saves.',
    descarga: 'https://github.com/Riosporteador124/ports-by-dani/releases/download/parahcuy/PARAHCUY_DANI.zip', repositorio: ''
  },
  {
    id: 'teslagrad', titulo: 'Teslagrad', tituloDetalle: 'Teslagrad — Port por Dani',
    tipo: 'port', imagen: 'assets/proximamente-teslagrad.webp', creditoImagen: 'Carátula · Steam',
    consolas: ['R36S', 'R36 Max'], motor: 'Unity', estado: 'Jugable', fecha: '2026-11-07', color: 'cyan', ejemplo: false,
    fps: { rango: '26–30', contexto: 'Estimación indicada por Dani.' },
    descripcion: 'Port con presentación 4:3 y un rendimiento estimado de 26–30 FPS.',
    detalles: [
      {
        titulo: 'Instalación',
        numerado: true,
        puntos: [
          'Extrae Teslagrad.sh y la carpeta teslagrad directamente en ports de la microSD.',
          'Coloca el APK Android 2.2 ARM64 y su OBB main.96, paquete com.Rain.Teslagrad, en teslagrad/gamedata/. También sirve un XAPK completo de la misma revisión. Consulta VERSION REQUERIDA.txt.',
          'Abre Teslagrad desde Ports. La primera apertura verifica y prepara los datos mostrando el progreso. Las siguientes reutilizan los recursos preparados.'
        ]
      },
      {
        titulo: 'Controles adicionales',
        puntos: [
          'SELECT + R3 muestra u oculta los FPS. El contador empieza oculto.',
          'SELECT + START cancela la preparación o sale del juego. Si cancelas la preparación, vuelve a abrir el port para continuar.'
        ]
      }
    ],
    nota: 'El ZIP incluye el adaptador. Debes aportar los archivos compatibles del juego. Al actualizar, conserva home, userdata y saves.',
    descarga: 'https://github.com/Riosporteador124/ports-by-dani/releases/download/teslagrad/TESLAGRAD_DANI.zip', repositorio: ''
  },
  {
    id: 'ugly', titulo: 'Ugly', tituloDetalle: 'Ugly — Port por Dani',
    fps: { rango: '30', estable: true, contexto: 'Rendimiento reportado por Dani.' },
    tipo: 'port', imagen: 'assets/proximamente-ugly.webp', creditoImagen: 'Carátula · Steam',
    consolas: ['R36S', 'R36 Max'], motor: 'Unity', estado: 'Jugable', fecha: '2026-11-07', color: 'pink', ejemplo: false,
    descripcion: 'Port con presentación 4:3.',
    detalles: [
      {
        titulo: 'Instalación',
        numerado: true,
        puntos: [
          'Extrae Ugly.sh y la carpeta ugly directamente en ports de la microSD.',
          'Coloca el APK Android 1.2.0 ARM64, paquete com.pid.ugly, en ugly/gamedata/. Comprueba la compilación exacta en VERSION REQUERIDA.txt.',
          'Abre Ugly desde Ports. La primera apertura verifica y prepara los datos mostrando el progreso. Las siguientes reutilizan los recursos preparados.'
        ]
      },
      {
        titulo: 'Controles adicionales',
        puntos: [
          'SELECT + R3 muestra u oculta los FPS. El contador empieza oculto.',
          'SELECT + START cancela la preparación o sale del juego. Si cancelas la preparación, vuelve a abrir el port para continuar.'
        ]
      }
    ],
    nota: 'El ZIP incluye el adaptador. Debes aportar tu propio APK compatible. Al actualizar, conserva home, userdata y saves.',
    descarga: 'https://github.com/Riosporteador124/ports-by-dani/releases/download/ugly-testing/UGLY_DANI.zip', repositorio: ''
  },
  {
    id: 'runic-curse', titulo: 'Runic Curse', tituloDetalle: 'Runic Curse — Port por Dani',
    fps: {"rango":"30","estable":true,"contexto":"Rendimiento reportado por Dani."},
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
    fps: {"rango":"25–40","contexto":"Rendimiento reportado por Dani."},
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
          'Aproximadamente 55–57 FPS en la zona medida en R36 Max XiFan con dArkOS4Clone. El rendimiento puede variar según el nivel y las cargas.'
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
    fps: {"rango":"30–36,5","contexto":"Medición anterior en el mapa del mundo."},
    "titulo": "Cuphead Android",
    "tituloDetalle": "Cuphead Android — Port por Dani",
    "tipo": "port",
    "imagen": "assets/cuphead-oficial.webp",
    "creditoImagen": "Carátula oficial · Studio MDHR",
    "consolas": ["R36S", "R36 Max"],
    "motor": "Unity",
    "estado": "Jugable",
    "fecha": "2026-11-07",
    "color": "gold",
    "ejemplo": false,
    "descripcion": "Port de Cuphead Android por Dani. Requiere el APK 1.0.2 ARM64.",
    "detalles": [
      {
        "titulo": "Imagen y rendimiento",
        "puntos": [
          "Una medición previa registró aproximadamente 30–36,5 FPS en el mapa del mundo.",
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
    "tituloDetalle": "Elderand — Port por Dani",
    "tipo": "port",
    "imagen": "assets/elderand-oficial.webp",
    "creditoImagen": "Carátula oficial · Mantra · Sinergia Games · Graffiti Games",
    "consolas": ["R36S", "R36 Max"],
    "motor": "Unity",
    "estado": "Jugable",
    "fecha": "2026-11-07",
    "color": "violet",
    "ejemplo": false,
    "descripcion": "Port de Elderand por Dani. Durante una partida en R36 Max se registró un cierre en el controlador gráfico Mali.",
    "detalles": [
      {
        "titulo": "Imagen y rendimiento",
        "puntos": [
          "Medición en R36 Max de aproximadamente 26–30 FPS en los tramos registrados, con algunos tirones y una pausa cercana a 0,2 segundos.",
          "Renderizado interno al 100 % para recuperar la legibilidad del menú.",
          "Preparación de texturas, precarga gradual de recursos de próximas salas y reserva temporal de memoria."
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
          "Abre el juego desde Ports. La primera apertura prepara los datos automáticamente y muestra el progreso. Puede tardar bastante.",
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
    "tituloDetalle": "Blasphemous — Port por Dani",
    "tipo": "port",
    "imagen": "assets/blasphemous-oficial.webp",
    "creditoImagen": "Carátula oficial · The Game Kitchen · Team17",
    "consolas": ["R36S", "R36 Max"],
    "motor": "Unity",
    "estado": "Jugable",
    "fecha": "2026-11-07",
    "color": "pink",
    "ejemplo": false,
    "descripcion": "Port de Blasphemous por Dani con presentación 4:3 y texturas preparadas para la consola.",
    "detalles": [
      {
        "titulo": "Imagen y rendimiento",
        "puntos": [
          "Medición en R36 Max de aproximadamente 29–30 FPS en la escena registrada.",
          "Presentación 4:3 con ataques, sangre e interfaz visibles.",
          "Texturas preparadas para la consola y reserva temporal de memoria comprimida para aliviar la falta de RAM. El efecto sobre los FPS depende de la carga.",
          "El lanzador reutiliza los datos preparados."
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
          "Abre el juego desde Ports. La primera apertura prepara los datos automáticamente y muestra el progreso. Puede tardar bastante.",
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
    ["dolphin-blue","Dolphin Blue","cyan","Arte arcade de Sammy · The Arcade Flyer Archive"],
    ["demon-front","Demon Front","pink","Arte arcade de IGS · The Arcade Flyer Archive"],
    ["new-super-mario-bros-wii","New Super Mario Bros. Wii","gold","Carátula de Wii · Super Mario Wiki"],
    ["resident-evil-code-veronica-x-ps2","Resident Evil Code: Veronica X (PS2)","pink","Carátula de PS2 · Retro Games Best"],
    ['poketale', 'Poketale', 'violet'],
    ["volhem", "Volhem", "violet", null],
    ["sword-of-xolan", "Sword of Xolan", "pink", "Arte oficial · Alper Sarıkaya"],
    ["9-years-of-shadows", "9 Years of Shadows", "violet", "Carátula · Steam"],
    ["pvz-fusion", "PvZ Fusion", "gold", "Captura de PvZ Fusion · Pikiran Rakyat"],
    ["dark-raider", "Dark Raider", "pink", "Carátula · Steam"],
    ["grimvalor", "Grimvalor", "pink", "Arte de Grimvalor · Nintendo eShop"],
    ["gta-iii-android", "GTA III Android", "violet", "Icono de la edición Android · Rockstar Games"],
    ["gta-vice-city-android", "GTA Vice City Android", "pink", "Icono de la edición Android · Rockstar Games"],
    ["haak", "HAAK", "cyan", "Carátula · Steam"],
    ["skul", "Skul: The Hero Slayer", "violet", "Carátula · Steam"],
    ["turnip-boy", "Turnip Boy Commits Tax Evasion", "gold", "Carátula · Steam"],
    ["wizard-of-legend", "Wizard of Legend", "cyan", "Carátula · Steam"],
    ["unruly-heroes", "Unruly Heroes", "pink", "Carátula · Steam"],
    ["river-city-girls", "River City Girls", "violet", "Carátula · Steam"],
    ["evoland-1", "Evoland 1", "gold", "Carátula · Steam", "40–60"],
    ["fahrenheit", "Fahrenheit: Indigo Prophecy Remastered", "cyan", "Carátula · Steam"],
    ["advent-neon", "Advent NEON", "cyan", "Carátula · Steam"],
    ["greak-memories-of-azur", "Greak: Memories of Azur", "pink", "Carátula · Steam"]
  ].map(([id, titulo, color, creditoImagen = 'Carátula · Whack a Hack', rangoFps]) => ({
    id, titulo, color, tipo: 'port', estado: 'Próximamente',
    imagen: creditoImagen ? `assets/proximamente-${id}.webp` : '', creditoImagen,
    consolas: ['R36S', 'R36 Max'], fecha: '',
    ...(rangoFps ? { fps: { rango: rangoFps, contexto: 'Rendimiento reportado por Dani.' } } : {}),
    descripcion: 'Port anunciado para R36S y R36 Max. La fecha de publicación está por anunciar.'
  }))
];
