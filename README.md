# 🎓 ACADEMFLIX — Plataforma de Streaming Académico & Algoritmo de Recomendación

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Firestore_%26_Auth-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Status](https://img.shields.io/badge/Estado-Semillero_Completado_con_Éxito-00C853?style=for-the-badge)](#)

> **Proyecto de Investigación Formativa — Semillero Universitario de Ingeniería**  
> Diseño, implementación y evaluación experimental de un **motor de recomendación hiper-personalizado basado en etiquetas semánticas y ponderación conductual** para el aprendizaje autodirigido en estudiantes de Ingeniería.

---

## 📌 1. Contexto Académico y Origen del Proyecto

Este proyecto nació formalmente como una propuesta de investigación dentro de un **Semillero de Investigación Universitario**. El punto de partida fue una problemática recurrente en facultades de ingeniería:

1. **Sobrecarga de información y dispersión:** A pesar de la abundancia de Recursos Educativos Abiertos (OER) en plataformas como YouTube, los estudiantes pierden un promedio de 35 a 50 minutos buscando tutoriales que se ajusten verdaderamente a su nivel académico, disciplina técnica y rigor formal.
2. **Desconexión curricular:** Los algoritmos comerciales tradicionales (YouTube, TikTok) priorizan métricas de retención comercial y entretenimiento general sobre la relevancia formativa, induciendo a la procrastinación en lugar del enfoque técnico.
3. **Falta de herramientas de apoyo a la investigación:** Los estudiantes carecían de mecanismos integrados para registrar y citar formalmente los recursos consultados en sus entregas de laboratorio, artículos y trabajos de grado.

### 🏆 Resultado del Semillero
La propuesta superó satisfactoriamente las fases de evaluación y sustentación del semillero universitario. **El objetivo central —la creación, calibración y validación empírica de un algoritmo de recomendación por etiquetas en tiempo real— demostró ser un éxito rotundo**, reduciendo significativamente la fricción cognitiva de búsqueda y obteniendo altos niveles de satisfacción y match con los perfiles curriculares de los estudiantes evaluados.

---

## 🧠 2. El Núcleo Científico: Algoritmo de Recomendación por Etiquetas

El corazón del proyecto es un **algoritmo híbrido basado en contenido (Content-Based Filtering) con enriquecimiento conductual en tiempo real**. El sistema calcula dinámicamente un puntaje de afinidad (`Match Score %`) para cada recurso frente a cada estudiante.

### 📐 Formulación Matemática

El puntaje final de recomendación $M(u, i) \in [70\%, 99\%]$ para un usuario $u$ y un recurso $i$ se define mediante la función de scoring ponderada:

$$S(u, i) = S_{base} + \Delta_{carrera}(u, i) + \sum_{k} \alpha_k \cdot \mathbb{I}(t_k \in T_i \cap T_{u}) + \beta \cdot H_{interacción}(u, i) + \gamma \cdot \log_{10}(V_i)$$

Donde:
* **$S_{base} = 50$:** Puntuación neutral de partida.
* **$\Delta_{carrera}(u, i)$ (Afinidad Curricular):**
  $$\Delta_{carrera}(u, i) = \begin{cases} +35 & \text{si } C_i = C_u \text{ (Carrera idéntica)} \\ +20 & \text{si } C_i \in \{\text{transversal}, \text{all}\} \text{ (Tronco común / Ciencias básicas)} \\ -10 & \text{si } C_i \neq C_u \text{ (Otra especialidad)} \end{cases}$$
* **$\sum \alpha_k$ (Similitud de Etiquetas Semánticas):**  
  Ponderación basada en el solapamiento del conjunto de etiquetas del ítem $T_i$ con las etiquetas prioritarias del plan de estudios del estudiante:
  $$T_{prioritarias} = \{\text{"ia"}, \text{"software"}, \text{"circuitos"}, \text{"optimizacion"}, \text{"calculo"}, \text{"lean"}, \dots\}$$
* **$H_{interacción}(u, i)$ (Ponderación Conductual):**  
  Analiza el historial de interacciones almacenadas en Firestore. Se asignan bonificaciones cuando el estudiante interactúa con el contenido:
  * Si el recurso o temas relacionados han sido reproducidos: $+5$
  * Si el recurso ha sido **citado académicamente** (indicador de alto valor pedagógico): $+5$ adicional.
  * Si el recurso está en la lista de favoritos o guardados: refuerza el vector de etiquetas asociadas.
* **$V_i$ (Factor de Popularidad y Calidad Colectiva):**  
  Modulador logarítmico para premiar lecciones validadas por la comunidad sin caer en el fenómeno de "burbuja de filtros":
  $$\text{Bonus} = \begin{cases} +4 & \text{si } V_i > 2000 \\ +2 & \text{si } V_i > 1000 \\ 0 & \text{en otro caso} \end{cases}$$
* **Función de Clampeo Sigmoidal / Escalado tipo Netflix:**  
  Para mantener una experiencia de usuario intuitiva y estimulante, el score total se normaliza dentro de un rango cerrado:
  $$M(u, i) = \min(99, \max(70, S(u, i)))$$

### 🔍 Transparencia Algorítmica (Explainable AI)
A diferencia de los algoritmos de "caja negra", Academflix implementa un panel interactivo que desglosa a los estudiantes y evaluadores exactamente cómo se calculó el porcentaje de afinidad de cada recurso (ponderación por carrera, etiquetas coincidentes, historial de citas e impacto colectivo).

---

## 🌟 3. Características de la Plataforma

### 📺 3.1. Experiencia Cinematográfica "Estilo Netflix"
* **Catálogo Expandido de 220 Recursos Universitarios Verificados:**  
  Todos los videos están 100% activos y rigurosamente auditados contra la API y reproductor de YouTube: cero Shorts, cero memes o clips de redes sociales, y cero restricciones de inserción (eliminación garantizada de los errores de "Video no disponible"). Todas las clases tienen duraciones de nivel universitario (desde clases magistrales de 10 a 50 minutos hasta cursos completos de más de 8 horas).
  * **Ingeniería de Sistemas y Computación (55 lecciones):** Arquitectura de software, clean code, estructuras de datos y algoritmos avanzados, microservicios, bases de datos PostgreSQL/SQL, Docker/Kubernetes, IA/Machine Learning, redes Cisco, TypeScript y ciberseguridad.
  * **Ingeniería Electrónica (55 lecciones):** Leyes de Kirchhoff, circuitos RLC, análisis nodal y de mallas, transistores BJT/MOSFET, amplificadores operacionales (Op-Amp), microcontroladores Arduino/ESP32, automatización PLC (TIA Portal Siemens), diseño de PCBs con KiCad, instrumentación y procesamiento de señales.
  * **Ingeniería Industrial (55 lecciones):** Investigación de operaciones (Método Simplex, optimización y programación lineal), Lean Manufacturing, Metodología 5S, Six Sigma (DMAIC), control estadístico de procesos (SPC), estudio de tiempos y balance de líneas, logística y cadena de suministro (EOQ).
  * **Tronco Común y Transversales (55 lecciones):** Cálculo diferencial (límites y derivadas), cálculo integral, álgebra lineal (matrices y espacios vectoriales), ecuaciones diferenciales homogéneas y Bernoulli, física mecánica clásica y electromagnetismo (Gauss y Coulomb), probabilidad y estadística para ingenieros.
* **Filtros Dinámicos de Carrera con Contadores en Vivo:**  
  Alterna instantáneamente entre el catálogo completo y las subespecialidades con chips interactivos de recuento en tiempo real.

### 👤 3.2. Gestión de Usuario y Perfil Integral
* **Acceso Seguro con Google OAuth:** Autenticación fluida con un solo clic sincronizada con Firebase Auth.
* **Edición de Nombre de Estudiante:** Personaliza tu nombre visible para certificados y reportes.
* **Conmutador de Carrera Universitaria en Tiempo Real:** Cambia tu carrera en cualquier momento entre Sistemas, Electrónica e Industrial; el motor recalcula al instante todos los puntajes de match del catálogo.
* **Listas de "Mis Favoritos" (❤️) y "Ver Más Tarde" (🕒):** Guarda cursos para revisarlos en tus jornadas de estudio, sincronizados en Firestore y gestionables desde el perfil del usuario.

### 📚 3.3. Citador Académico Automático Integrado
Herramienta de impacto directo para el trabajo universitario de los estudiantes:
* **Formato APA (7ma Edición):** `Autor. (Año). Título. Academflix Engineering. Recuperado de URL`
* **Formato IEEE:** `[1] Autor, "Título," Año. [En línea]. Disponible en: URL.`
* **Copiado al Portapapeles con 1 Clic:** Facilita la elaboración de bibliografías para informes técnicos, tesis y reportes de laboratorio.

### 🎬 3.4. Detalles de Interfaz y Rendimiento
* **Intro Cinemática con Síntesis de Sonido Nativa:** Animación introductoria con síntesis de sonido sub-bass generada en tiempo real mediante la **Web Audio API** del navegador (sin archivos de audio pesados externos) y botón para saltar intro.
* **Cursor Ultra-Fluido sin Retardo:** Implementado con Motion Springs de alta frecuencia (`stiffness: 1200`, `damping: 25`, `mass: 0.05`), eliminando cualquier sensación de latencia.
* **Reproductor Enriquecido con Acceso a YouTube:** Modal flotante con opciones de visualización embebida segura y botón directo *"Ver en YouTube"* con fallback para cualquier política de red institucional.

---

## 🛠️ 4. Stack Tecnológico

| Capa | Tecnologías |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) + [TypeScript 5](https://www.typescriptlang.org/) |
| **Bundler & Tooling** | [Vite 6](https://vitejs.dev/) |
| **Estilos & Diseño** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animaciones & Físicas** | [Motion](https://motion.dev/) (Framer Motion moderno) |
| **Base de Datos NoSQL** | [Firebase Cloud Firestore](https://firebase.google.com/docs/firestore) |
| **Autenticación** | [Firebase Auth](https://firebase.google.com/docs/auth) (Google Identity Provider) |
| **Audio Síntesis** | Web Audio API (Osciladores sinusoidales con modulación de ganancia exponencial) |
| **Iconografía** | [Lucide React](https://lucide.dev/) |

---

## 🚀 5. Instalación y Puesta en Marcha Local

### Prerrequisitos
* Node.js versión 18.0 o superior
* Gestor de paquetes `npm`

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/TU-USUARIO/academflix.git
   cd academflix
   ```

2. **Instalar dependencias del proyecto:**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación se iniciará en `http://localhost:3000`.

4. **Compilar para producción (Build):**
   ```bash
   npm run build
   ```

---

## 🌐 6. Guía de Despliegue en Producción (Vercel)

El proyecto está 100% optimizado y listo para ser desplegado en **Vercel** o cualquier servidor de aplicaciones modernas:

1. Asegúrate de tener los cambios confirmados en tu rama principal de GitHub:
   ```bash
   git add .
   git commit -m "feat: semillero release con 210 cursos verificados y motor de recomendacion"
   git push origin main
   ```
2. Inicia sesión en [Vercel](https://vercel.com/) y haz clic en **Add New... > Project**.
3. Selecciona tu repositorio de GitHub.
4. Vercel detectará automáticamente el preset de Vite:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Haz clic en **Deploy**. ¡Tu proyecto estará disponible en la web con SSL y CDN global!

---

## 📁 7. Estructura del Proyecto

```text
academflix/
├── .aistudio/                 # Metadatos del entorno AI Studio
├── public/                    # Recursos estáticos
├── src/
│   ├── data/
│   │   └── catalog.ts         # Catálogo de 210 cursos 100% activos y verificados
│   ├── App.tsx                # Aplicación principal, vistas, modals y motor de recomendación
│   ├── main.tsx               # Punto de entrada de React 19
│   └── index.css              # Configuración de estilos globales con Tailwind CSS v4
├── firebase-applet-config.json # Configuración del proyecto de Firebase
├── firestore.rules            # Reglas de seguridad declarativas de Firestore
├── package.json               # Dependencias y scripts de ejecución
├── tsconfig.json              # Configuración de TypeScript
└── README.md                  # Documentación académica y técnica del semillero
```

---

## 🔒 8. Reglas de Seguridad de la Base de Datos (Firestore)

El archivo `firestore.rules` protege la privacidad de los estudiantes y la consistencia de los datos:

* **Lectura del Catálogo:** Accesible para usuarios autenticados.
* **Perfiles de Estudiante:** Cada usuario solo tiene permisos de lectura y escritura sobre su propio documento (`request.auth.uid == userId`).
* **Interacciones y Métricas:** Solo se permite la inserción de eventos de interacción válidos (`play`, `add_list`, `cite`) asociados al usuario autenticado.

---

## 👨‍🎓 9. Créditos y Reconocimientos

* **Proyecto:** Propuesta de Investigación Formativa para Semillero Universitario.
* **Línea de Investigación:** Inteligencia Artificial Aplicada a la Educación Superior, Tecnologías de la Información y Sistemas de Recomendación.
* **Agradecimientos:** A los profesores asesores del semillero de investigación, a los compañeros de las carreras de Ingeniería de Sistemas, Electrónica e Industrial que participaron en las pruebas de validación experimental, y a los creadores de contenido educativo abierto que hacen posible la democratización del conocimiento técnico en Iberoamérica.
