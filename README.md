# Coco y Lena

App web para aprender idiomas en familia, pensada para iPad y celular. Se instala en la pantalla de inicio y funciona sin internet.

- **Isla Ñ** (niños, ~9 años): español con Coco, un loro dominicano. Nueve islas con un cuento, palabras, juegos (escuchar y tocar, memoria, ordenar frases, «Simón dice»), práctica oral y expresiones de 9 países hispanos. Las instrucciones se oyen en alemán o en inglés. Hay monedas, tienda para vestir a Coco, cofre diario y álbum de pegatinas.
- **Werkstatt Ü** (adultos, A1.4 → A2): alemán con Lena. Tarjetas der/die/das con repetición espaciada, 13 temas de gramática con las trampas típicas del hispanohablante, 9 diálogos para escuchar, imitar y dictar, entrenamiento de pronunciación con 6 voces, simulador del Goethe-Zertifikat A1, alemán coloquial por regiones y cultura. Hay XP, niveles (Lehrling → Geselle → Meister) e insignias.
- **Niveles A1 → B2 en los dos idiomas**: el niño avanza por cuatro archipiélagos (A1, A2, B1, B2) y cada uno termina con un «Gran Desafío» que abre el siguiente. El adulto tiene vocabulario, gramática, diálogos, lecturas y un examen Goethe por nivel.
- **Sistema adaptativo** (`adapt.js`): la primera vez hay una prueba de nivel adaptativa. Después, cada respuesta actualiza el nivel estimado del alumno, y la app ajusta la dificultad de los juegos, elige qué practicar y avisa cuando toca subir de nivel. El banco de preguntas se genera solo a partir del contenido.
- **Niveles de voz** (`voz.js`): la «Escalera de voz» del niño y el «Sprechstudio» del adulto tienen cinco peldaños por nivel (palabras, frases, de memoria, diálogo y habla libre) que solo se superan hablando al micrófono. La app pide permiso, explica qué hace con la voz, corrige palabra por palabra y da consejos de pronunciación. Si el navegador no reconoce la voz, graba al alumno para que se compare con la voz nativa. También avisa de la racha, de la navegación privada, del modo silencio y de la falta de conexión.
- **Método**: por qué está hecha así, con las fuentes (repetición espaciada, práctica de recuperación, input comprensible, instrucción explícita, entrenamiento de alta variabilidad).

## Cómo está hecha

Una sola página en HTML y JavaScript, sin frameworks ni dependencias en el navegador. Las voces están pregrabadas con voces neuronales y agrupadas en 240 paquetes MP3. Se reproducen con Web Audio, así que no dependen de las voces que tenga instaladas el dispositivo.

| Archivo | Qué es |
|---|---|
| `index.html` | Núcleo: estilos, motor de audio (voces, efectos y música generada en vivo), guardado del progreso, portada y método |
| `isla.js` | Isla Ñ (mundo del niño) |
| `werkstatt.js` | Werkstatt Ü (mundo del adulto) |
| `es-data.js`, `de-data.js` | Contenido base (A1) |
| `content/` | Niveles A1–B2 (`es-*.js`, `de-*.js`), la especificación `SPEC.md` y el validador `check.js` |
| `adapt.js` | Motor adaptativo: prueba de nivel, modelo del alumno y entrenamiento inteligente |
| `voz.js` | Micrófono y permisos, reconocimiento de voz, consejos de pronunciación y niveles hablados |
| `sw.js` | Service worker: la app funciona sin conexión |
| `build_audio.py` | Genera las voces con edge-tts (caché en `audio-cache/`) |
| `build.py` | Junta todo en `public/`, que es lo que se publica |
| `public/` | La web lista: `index.html`, iconos, manifiesto y `audio/` |

## Compilar

Requiere Python 3.11 con `edge-tts` y `Pillow`, Node (solo para leer los datos) y ffmpeg (para el silencio entre frases).

```bash
python build_audio.py   # solo si cambiaste algún texto de es-data.js o de-data.js
node content/check.js   # valida todo el contenido
python build.py         # regenera public/
```

`python build.py --artifact` genera además `dist/`, la versión que se publica como artifact de Claude. Allí funcionan también el tutor con IA, el micrófono y la sincronización entre dispositivos.

## Publicar

Vercel sirve la carpeta `public/` tal cual (ver `vercel.json`); no hay paso de compilación en el servidor. Cada push a `main` publica la versión nueva.

## Progreso

Se guarda en el propio dispositivo (localStorage). En Ajustes se puede copiar un código de progreso para pasarlo a otro dispositivo, y descargar todas las voces para usar la app sin internet.
