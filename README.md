# Coco y Lena

App web para aprender idiomas en familia, pensada para iPad y celular. Se instala en la pantalla de inicio y funciona sin internet.

- **Isla Ñ** (niños, ~9 años): español con Coco, un loro dominicano. Nueve islas con un cuento, palabras, juegos (escuchar y tocar, memoria, ordenar frases, «Simón dice»), práctica oral y expresiones de 9 países hispanos. Las instrucciones se oyen en alemán o en inglés. Hay monedas, tienda para vestir a Coco, cofre diario y álbum de pegatinas.
- **Werkstatt Ü** (adultos, A1.4 → A2): alemán con Lena. Tarjetas der/die/das con repetición espaciada, 13 temas de gramática con las trampas típicas del hispanohablante, 9 diálogos para escuchar, imitar y dictar, entrenamiento de pronunciación con 6 voces, simulador del Goethe-Zertifikat A1, alemán coloquial por regiones y cultura. Hay XP, niveles (Lehrling → Geselle → Meister) e insignias.
- **Método**: por qué está hecha así, con las fuentes (repetición espaciada, práctica de recuperación, input comprensible, instrucción explícita, entrenamiento de alta variabilidad).

## Cómo está hecha

Una sola página en HTML y JavaScript, sin frameworks ni dependencias en el navegador. Las voces están pregrabadas con voces neuronales y agrupadas en 66 paquetes MP3. Se reproducen con Web Audio, así que no dependen de las voces que tenga instaladas el dispositivo.

| Archivo | Qué es |
|---|---|
| `index.html` | Núcleo: estilos, motor de audio (voces, efectos y música generada en vivo), guardado del progreso, portada y método |
| `isla.js` | Isla Ñ (mundo del niño) |
| `werkstatt.js` | Werkstatt Ü (mundo del adulto) |
| `es-data.js`, `de-data.js` | Todo el contenido de los cursos |
| `sw.js` | Service worker: la app funciona sin conexión |
| `build_audio.py` | Genera las voces con edge-tts (caché en `audio-cache/`) |
| `build.py` | Junta todo en `public/`, que es lo que se publica |
| `public/` | La web lista: `index.html`, iconos, manifiesto y `audio/` |

## Compilar

Requiere Python 3.11 con `edge-tts` y `Pillow`, Node (solo para leer los datos) y ffmpeg (para el silencio entre frases).

```bash
python build_audio.py   # solo si cambiaste algún texto de es-data.js o de-data.js
python build.py         # regenera public/
```

`python build.py --artifact` genera además `dist/`, la versión que se publica como artifact de Claude. Allí funcionan también el tutor con IA, el micrófono y la sincronización entre dispositivos.

## Publicar

Vercel sirve la carpeta `public/` tal cual (ver `vercel.json`); no hay paso de compilación en el servidor. Cada push a `main` publica la versión nueva.

## Progreso

Se guarda en el propio dispositivo (localStorage). En Ajustes se puede copiar un código de progreso para pasarlo a otro dispositivo, y descargar todas las voces para usar la app sin internet.
