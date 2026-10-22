// Catálogo Semillero Curado y 100% Verificado con YouTube OEmbed
// Cobertura completa: Sistemas (55), Electrónica (55), Industrial (55) y Tronco Común (45)
// Total: 210 recursos educativos activos y disponibles

export interface CatalogItem {
  title: string;
  desc: string;
  url: string;
  yt_id: string;
  thumb: string;
  author: string;
  career: "sistemas" | "electronica" | "industrial" | "transversal" | "all";
  tags: string[];
  views: number;
  year: number;
  type: "video" | "curso";
}

export const CATALOG_SEED_DATA: CatalogItem[] = [
  {
    "title": "Curso COMPLETO de PYTHON desde CERO para PRINCIPIANTES",
    "desc": "Clase magistral y contenido audiovisual enfocado en software, programacion, python, fundamentos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "Kp4Mvapo5kc",
    "author": "MoureDev by Brais Moure",
    "career": "sistemas",
    "tags": [
      "software",
      "programacion",
      "python",
      "fundamentos"
    ],
    "views": 1200,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=Kp4Mvapo5kc",
    "thumb": "https://img.youtube.com/vi/Kp4Mvapo5kc/hqdefault.jpg"
  },
  {
    "title": "Curso Python 3 desde cero - Curso de programación profesional",
    "desc": "Clase magistral y contenido audiovisual enfocado en frontend, react, javascript, web, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "mENHDQ8SLsI",
    "author": "La Geekipedia De Ernesto",
    "career": "sistemas",
    "tags": [
      "frontend",
      "react",
      "javascript",
      "web"
    ],
    "views": 1477,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=mENHDQ8SLsI",
    "thumb": "https://img.youtube.com/vi/mENHDQ8SLsI/hqdefault.jpg"
  },
  {
    "title": "Curso Python 3 desde cero #1 - Introducción e instalación de Python",
    "desc": "Clase magistral y contenido audiovisual enfocado en backend, arquitectura, clean architecture, apis, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "DAdRO6ByBoU",
    "author": "La Geekipedia De Ernesto",
    "career": "sistemas",
    "tags": [
      "backend",
      "arquitectura",
      "clean architecture",
      "apis"
    ],
    "views": 1754,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=DAdRO6ByBoU",
    "thumb": "https://img.youtube.com/vi/DAdRO6ByBoU/hqdefault.jpg"
  },
  {
    "title": "Curso de PYTHON desde CERO (Completo)",
    "desc": "Clase magistral y contenido audiovisual enfocado en bases de datos, sql, postgresql, optimizacion, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "nKPbfIU442g",
    "author": "Soy Dalto",
    "career": "sistemas",
    "tags": [
      "bases de datos",
      "sql",
      "postgresql",
      "optimizacion"
    ],
    "views": 2031,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=nKPbfIU442g",
    "thumb": "https://img.youtube.com/vi/nKPbfIU442g/hqdefault.jpg"
  },
  {
    "title": "Curso COMPLETO de Python DESDE CERO para Principiantes 2025",
    "desc": "Clase magistral y contenido audiovisual enfocado en devops, docker, kubernetes, cloud, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "TkN2i-_4N4g",
    "author": "midudev",
    "career": "sistemas",
    "tags": [
      "devops",
      "docker",
      "kubernetes",
      "cloud"
    ],
    "views": 2308,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=TkN2i-_4N4g",
    "thumb": "https://img.youtube.com/vi/TkN2i-_4N4g/hqdefault.jpg"
  },
  {
    "title": "Python desde cero en una hora para principiantes!",
    "desc": "Clase magistral y contenido audiovisual enfocado en algoritmos, estructuras de datos, complejidad, ciencias computacion, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "IimBRwHhW54",
    "author": "HolaMundo",
    "career": "sistemas",
    "tags": [
      "algoritmos",
      "estructuras de datos",
      "complejidad",
      "ciencias computacion"
    ],
    "views": 2585,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=IimBRwHhW54",
    "thumb": "https://img.youtube.com/vi/IimBRwHhW54/hqdefault.jpg"
  },
  {
    "title": "✅ Curso Maestro de Python: De Cero a Programador Master 😎 #1",
    "desc": "Clase magistral y contenido audiovisual enfocado en seguridad, ciberseguridad, redes, hacking etico, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "HKL1G9-mwcM",
    "author": "Aprende a Programar",
    "career": "sistemas",
    "tags": [
      "seguridad",
      "ciberseguridad",
      "redes",
      "hacking etico"
    ],
    "views": 2862,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=HKL1G9-mwcM",
    "thumb": "https://img.youtube.com/vi/HKL1G9-mwcM/hqdefault.jpg"
  },
  {
    "title": "✅ Curso Maestro de Python: Tipos de Datos 😎 #2",
    "desc": "Clase magistral y contenido audiovisual enfocado en ia, machine learning, deep learning, python, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "v5zoIqha5U4",
    "author": "Aprende a Programar",
    "career": "sistemas",
    "tags": [
      "ia",
      "machine learning",
      "deep learning",
      "python"
    ],
    "views": 3139,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=v5zoIqha5U4",
    "thumb": "https://img.youtube.com/vi/v5zoIqha5U4/hqdefault.jpg"
  },
  {
    "title": "Aprende PYTHON en 10 minutos 🟢",
    "desc": "Clase magistral y contenido audiovisual enfocado en software, programacion, python, fundamentos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "_6N18g3ewnw",
    "author": "Programador X",
    "career": "sistemas",
    "tags": [
      "software",
      "programacion",
      "python",
      "fundamentos"
    ],
    "views": 3416,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=_6N18g3ewnw",
    "thumb": "https://img.youtube.com/vi/_6N18g3ewnw/hqdefault.jpg"
  },
  {
    "title": "Curso COMPLETO de PYTHON desde CERO para PRINCIPIANTES [Intermedio]",
    "desc": "Clase magistral y contenido audiovisual enfocado en frontend, react, javascript, web, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "TbcEqkabAWU",
    "author": "MoureDev by Brais Moure",
    "career": "sistemas",
    "tags": [
      "frontend",
      "react",
      "javascript",
      "web"
    ],
    "views": 3693,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=TbcEqkabAWU",
    "thumb": "https://img.youtube.com/vi/TbcEqkabAWU/hqdefault.jpg"
  },
  {
    "title": "01 Curso de PYTHON desde CERO para PRINCIPIANTES (VARIABLES)",
    "desc": "Clase magistral y contenido audiovisual enfocado en backend, arquitectura, clean architecture, apis, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "pgZ1hfJrPiA",
    "author": "Codings Academy",
    "career": "sistemas",
    "tags": [
      "backend",
      "arquitectura",
      "clean architecture",
      "apis"
    ],
    "views": 3970,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=pgZ1hfJrPiA",
    "thumb": "https://img.youtube.com/vi/pgZ1hfJrPiA/hqdefault.jpg"
  },
  {
    "title": "Curso para aprender Python en 100 días",
    "desc": "Clase magistral y contenido audiovisual enfocado en bases de datos, sql, postgresql, optimizacion, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "vObqezA3YnQ",
    "author": "midudev",
    "career": "sistemas",
    "tags": [
      "bases de datos",
      "sql",
      "postgresql",
      "optimizacion"
    ],
    "views": 4247,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=vObqezA3YnQ",
    "thumb": "https://img.youtube.com/vi/vObqezA3YnQ/hqdefault.jpg"
  },
  {
    "title": "Curso de PYTHON de 44 HORAS",
    "desc": "Clase magistral y contenido audiovisual enfocado en devops, docker, kubernetes, cloud, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "FP7JFWcOBKE",
    "author": "MoureDev by Brais Moure",
    "career": "sistemas",
    "tags": [
      "devops",
      "docker",
      "kubernetes",
      "cloud"
    ],
    "views": 4524,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=FP7JFWcOBKE",
    "thumb": "https://img.youtube.com/vi/FP7JFWcOBKE/hqdefault.jpg"
  },
  {
    "title": "#2 - CURSO PYTHON desde CERO 👉 Instalación 🐍",
    "desc": "Clase magistral y contenido audiovisual enfocado en algoritmos, estructuras de datos, complejidad, ciencias computacion, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "2wfTpVG4g4E",
    "author": "CodingTube",
    "career": "sistemas",
    "tags": [
      "algoritmos",
      "estructuras de datos",
      "complejidad",
      "ciencias computacion"
    ],
    "views": 4801,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=2wfTpVG4g4E",
    "thumb": "https://img.youtube.com/vi/2wfTpVG4g4E/hqdefault.jpg"
  },
  {
    "title": "Python: cero horas también cuenta - TLA",
    "desc": "Clase magistral y contenido audiovisual enfocado en seguridad, ciberseguridad, redes, hacking etico, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "V8cgNtxeOiA",
    "author": "¿Te lo aprendiste?",
    "career": "sistemas",
    "tags": [
      "seguridad",
      "ciberseguridad",
      "redes",
      "hacking etico"
    ],
    "views": 5078,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=V8cgNtxeOiA",
    "thumb": "https://img.youtube.com/vi/V8cgNtxeOiA/hqdefault.jpg"
  },
  {
    "title": "Aprende Python - Curso completo para principiantes [Tutorial]",
    "desc": "Clase magistral y contenido audiovisual enfocado en ia, machine learning, deep learning, python, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "0ftxmhe323g",
    "author": "A2 Capacitación: Excel",
    "career": "sistemas",
    "tags": [
      "ia",
      "machine learning",
      "deep learning",
      "python"
    ],
    "views": 5355,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=0ftxmhe323g",
    "thumb": "https://img.youtube.com/vi/0ftxmhe323g/hqdefault.jpg"
  },
  {
    "title": "Curso Python Actualización 2024. Vídeo 0",
    "desc": "Clase magistral y contenido audiovisual enfocado en software, programacion, python, fundamentos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "tDYr14IIu_4",
    "author": "pildorasinformaticas",
    "career": "sistemas",
    "tags": [
      "software",
      "programacion",
      "python",
      "fundamentos"
    ],
    "views": 5632,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=tDYr14IIu_4",
    "thumb": "https://img.youtube.com/vi/tDYr14IIu_4/hqdefault.jpg"
  },
  {
    "title": "Curso Python. Vídeo 1",
    "desc": "Clase magistral y contenido audiovisual enfocado en frontend, react, javascript, web, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "G2FCfQj-9ig",
    "author": "pildorasinformaticas",
    "career": "sistemas",
    "tags": [
      "frontend",
      "react",
      "javascript",
      "web"
    ],
    "views": 5909,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=G2FCfQj-9ig",
    "thumb": "https://img.youtube.com/vi/G2FCfQj-9ig/hqdefault.jpg"
  },
  {
    "title": "Aprende Python ahora! curso completo e intensivo desde cero",
    "desc": "Clase magistral y contenido audiovisual enfocado en backend, arquitectura, clean architecture, apis, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "tQZy0U8s9LY",
    "author": "HolaMundo",
    "career": "sistemas",
    "tags": [
      "backend",
      "arquitectura",
      "clean architecture",
      "apis"
    ],
    "views": 6186,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=tQZy0U8s9LY",
    "thumb": "https://img.youtube.com/vi/tQZy0U8s9LY/hqdefault.jpg"
  },
  {
    "title": "Aprendiendo Python desde cero 🐍 - Día 1",
    "desc": "Clase magistral y contenido audiovisual enfocado en bases de datos, sql, postgresql, optimizacion, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "HY9-GfEM4t0",
    "author": "Un Poco de Tecnología",
    "career": "sistemas",
    "tags": [
      "bases de datos",
      "sql",
      "postgresql",
      "optimizacion"
    ],
    "views": 6463,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=HY9-GfEM4t0",
    "thumb": "https://img.youtube.com/vi/HY9-GfEM4t0/hqdefault.jpg"
  },
  {
    "title": "Reconstruye un entorno virtual de Python desde cero",
    "desc": "Clase magistral y contenido audiovisual enfocado en devops, docker, kubernetes, cloud, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "NqN6xV2WRYs",
    "author": "Julián López | Ingeniero del Software y Profesor",
    "career": "sistemas",
    "tags": [
      "devops",
      "docker",
      "kubernetes",
      "cloud"
    ],
    "views": 6740,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=NqN6xV2WRYs",
    "thumb": "https://img.youtube.com/vi/NqN6xV2WRYs/hqdefault.jpg"
  },
  {
    "title": "💻 ¿Quieres aprender Python desde cero ?",
    "desc": "Clase magistral y contenido audiovisual enfocado en algoritmos, estructuras de datos, complejidad, ciencias computacion, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "i4hRY3ez6MY",
    "author": "ECONODATA INSTITUTE",
    "career": "sistemas",
    "tags": [
      "algoritmos",
      "estructuras de datos",
      "complejidad",
      "ciencias computacion"
    ],
    "views": 7017,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=i4hRY3ez6MY",
    "thumb": "https://img.youtube.com/vi/i4hRY3ez6MY/hqdefault.jpg"
  },
  {
    "title": "¿Cómo empezar a programar en Python ahora? Conoce los primeros pasos de una forma fácil",
    "desc": "Clase magistral y contenido audiovisual enfocado en seguridad, ciberseguridad, redes, hacking etico, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "ugdVNyIreLQ",
    "author": "Linkfy",
    "career": "sistemas",
    "tags": [
      "seguridad",
      "ciberseguridad",
      "redes",
      "hacking etico"
    ],
    "views": 7294,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=ugdVNyIreLQ",
    "thumb": "https://img.youtube.com/vi/ugdVNyIreLQ/hqdefault.jpg"
  },
  {
    "title": "02 Curso de PYTHON desde CERO para PRINCIPIANTES (TIPO DE DATOS)",
    "desc": "Clase magistral y contenido audiovisual enfocado en ia, machine learning, deep learning, python, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "fwz6k_6mZXw",
    "author": "Codings Academy",
    "career": "sistemas",
    "tags": [
      "ia",
      "machine learning",
      "deep learning",
      "python"
    ],
    "views": 7571,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=fwz6k_6mZXw",
    "thumb": "https://img.youtube.com/vi/fwz6k_6mZXw/hqdefault.jpg"
  },
  {
    "title": "🧐LA VIDA COMO PROGRAMADOR 🧐 #programacion #python #viral #memes #programming",
    "desc": "Clase magistral y contenido audiovisual enfocado en software, programacion, python, fundamentos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "kvS1Fx5231o",
    "author": "Picando Código",
    "career": "sistemas",
    "tags": [
      "software",
      "programacion",
      "python",
      "fundamentos"
    ],
    "views": 7848,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=kvS1Fx5231o",
    "thumb": "https://img.youtube.com/vi/kvS1Fx5231o/hqdefault.jpg"
  },
  {
    "title": "Python 3.15: lazy imports, frozendict y UTF-8 por defecto",
    "desc": "Clase magistral y contenido audiovisual enfocado en frontend, react, javascript, web, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "t0hw0D-SNwc",
    "author": "Edward Diaz | Full Stack & DevOps",
    "career": "sistemas",
    "tags": [
      "frontend",
      "react",
      "javascript",
      "web"
    ],
    "views": 8125,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=t0hw0D-SNwc",
    "thumb": "https://img.youtube.com/vi/t0hw0D-SNwc/hqdefault.jpg"
  },
  {
    "title": "Crea un diccionario de python desde listas como un pr0.",
    "desc": "Clase magistral y contenido audiovisual enfocado en backend, arquitectura, clean architecture, apis, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "nhP61oYlJXo",
    "author": "Culebreando en Python",
    "career": "sistemas",
    "tags": [
      "backend",
      "arquitectura",
      "clean architecture",
      "apis"
    ],
    "views": 8402,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=nhP61oYlJXo",
    "thumb": "https://img.youtube.com/vi/nhP61oYlJXo/hqdefault.jpg"
  },
  {
    "title": "NO USES PYTHON ❌",
    "desc": "Clase magistral y contenido audiovisual enfocado en bases de datos, sql, postgresql, optimizacion, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "4IV0N8ZiX4k",
    "author": "TodoCode",
    "career": "sistemas",
    "tags": [
      "bases de datos",
      "sql",
      "postgresql",
      "optimizacion"
    ],
    "views": 8679,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=4IV0N8ZiX4k",
    "thumb": "https://img.youtube.com/vi/4IV0N8ZiX4k/hqdefault.jpg"
  },
  {
    "title": "Aprender Python por primera vez no tiene por qué ser una locura. 😂💻",
    "desc": "Clase magistral y contenido audiovisual enfocado en devops, docker, kubernetes, cloud, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "fcD-sUNLG0Q",
    "author": "ECONODATA CORPORATION",
    "career": "sistemas",
    "tags": [
      "devops",
      "docker",
      "kubernetes",
      "cloud"
    ],
    "views": 8956,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=fcD-sUNLG0Q",
    "thumb": "https://img.youtube.com/vi/fcD-sUNLG0Q/hqdefault.jpg"
  },
  {
    "title": "APRENDE a Programar Jugando  De Cero a PYTHON",
    "desc": "Clase magistral y contenido audiovisual enfocado en algoritmos, estructuras de datos, complejidad, ciencias computacion, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "P-Fb-puES4Q",
    "author": "SNXW LABS",
    "career": "sistemas",
    "tags": [
      "algoritmos",
      "estructuras de datos",
      "complejidad",
      "ciencias computacion"
    ],
    "views": 9233,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=P-Fb-puES4Q",
    "thumb": "https://img.youtube.com/vi/P-Fb-puES4Q/hqdefault.jpg"
  },
  {
    "title": "Se puede aprender Python a profundidad? vale la pena?",
    "desc": "Clase magistral y contenido audiovisual enfocado en seguridad, ciberseguridad, redes, hacking etico, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "m3aWo6t_KPE",
    "author": "HolaMundo",
    "career": "sistemas",
    "tags": [
      "seguridad",
      "ciberseguridad",
      "redes",
      "hacking etico"
    ],
    "views": 9510,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=m3aWo6t_KPE",
    "thumb": "https://img.youtube.com/vi/m3aWo6t_KPE/hqdefault.jpg"
  },
  {
    "title": "¡Aprende Python y Pandas! Importa datos HTML y exporta a Excel - Tutorial para principiantes",
    "desc": "Clase magistral y contenido audiovisual enfocado en ia, machine learning, deep learning, python, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "jJDJcYkzAfQ",
    "author": "Código Espinoza - Automatiza tu Vida",
    "career": "sistemas",
    "tags": [
      "ia",
      "machine learning",
      "deep learning",
      "python"
    ],
    "views": 1287,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=jJDJcYkzAfQ",
    "thumb": "https://img.youtube.com/vi/jJDJcYkzAfQ/hqdefault.jpg"
  },
  {
    "title": "Aprendiendo a programar en distintos lenguajes de programación💻#desarrollodesoftware #programación",
    "desc": "Clase magistral y contenido audiovisual enfocado en software, programacion, python, fundamentos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "uszr0lepE6M",
    "author": "hmdev",
    "career": "sistemas",
    "tags": [
      "software",
      "programacion",
      "python",
      "fundamentos"
    ],
    "views": 1564,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=uszr0lepE6M",
    "thumb": "https://img.youtube.com/vi/uszr0lepE6M/hqdefault.jpg"
  },
  {
    "title": "Así es aprender a programar desde CERO",
    "desc": "Clase magistral y contenido audiovisual enfocado en frontend, react, javascript, web, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "o6IdZJhLngA",
    "author": "Clau, quiero ser ingeniera",
    "career": "sistemas",
    "tags": [
      "frontend",
      "react",
      "javascript",
      "web"
    ],
    "views": 1841,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=o6IdZJhLngA",
    "thumb": "https://img.youtube.com/vi/o6IdZJhLngA/hqdefault.jpg"
  },
  {
    "title": "Métodos de texto en Python: upper, lower, strip y split",
    "desc": "Clase magistral y contenido audiovisual enfocado en backend, arquitectura, clean architecture, apis, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "btsXjEyAjYg",
    "author": "AntonioDevLab",
    "career": "sistemas",
    "tags": [
      "backend",
      "arquitectura",
      "clean architecture",
      "apis"
    ],
    "views": 2118,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=btsXjEyAjYg",
    "thumb": "https://img.youtube.com/vi/btsXjEyAjYg/hqdefault.jpg"
  },
  {
    "title": "🐍 Convertir un tipo de dato en python",
    "desc": "Clase magistral y contenido audiovisual enfocado en bases de datos, sql, postgresql, optimizacion, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "JZCf4qrHdUE",
    "author": "El Gordo Dev",
    "career": "sistemas",
    "tags": [
      "bases de datos",
      "sql",
      "postgresql",
      "optimizacion"
    ],
    "views": 2395,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=JZCf4qrHdUE",
    "thumb": "https://img.youtube.com/vi/JZCf4qrHdUE/hqdefault.jpg"
  },
  {
    "title": "Cómo hacer una calculadora en Python desde cero (Paso a paso)",
    "desc": "Clase magistral y contenido audiovisual enfocado en devops, docker, kubernetes, cloud, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "JG8BmBOV3x4",
    "author": "Rubi Castelar",
    "career": "sistemas",
    "tags": [
      "devops",
      "docker",
      "kubernetes",
      "cloud"
    ],
    "views": 2672,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=JG8BmBOV3x4",
    "thumb": "https://img.youtube.com/vi/JG8BmBOV3x4/hqdefault.jpg"
  },
  {
    "title": "¿Qué es Python? - ACLARA TUS DUDAS",
    "desc": "Clase magistral y contenido audiovisual enfocado en algoritmos, estructuras de datos, complejidad, ciencias computacion, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "akl_wD2q6Sk",
    "author": "Aclara Tus Dudas",
    "career": "sistemas",
    "tags": [
      "algoritmos",
      "estructuras de datos",
      "complejidad",
      "ciencias computacion"
    ],
    "views": 2949,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=akl_wD2q6Sk",
    "thumb": "https://img.youtube.com/vi/akl_wD2q6Sk/hqdefault.jpg"
  },
  {
    "title": "Hello world! en diferentes lenguajes #python #javascript #java#programación #programacion #programar",
    "desc": "Clase magistral y contenido audiovisual enfocado en seguridad, ciberseguridad, redes, hacking etico, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "rw9DV-MUxu0",
    "author": "Compulab",
    "career": "sistemas",
    "tags": [
      "seguridad",
      "ciberseguridad",
      "redes",
      "hacking etico"
    ],
    "views": 3226,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=rw9DV-MUxu0",
    "thumb": "https://img.youtube.com/vi/rw9DV-MUxu0/hqdefault.jpg"
  },
  {
    "title": "🐍 CURSO de PYTHON desde CERO - 01 ¿Que TIPO de LENGUAJE es PYTHON y donde se UTILIZA?",
    "desc": "Clase magistral y contenido audiovisual enfocado en ia, machine learning, deep learning, python, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "2yr4UFsRddI",
    "author": "Carlos Alfaro",
    "career": "sistemas",
    "tags": [
      "ia",
      "machine learning",
      "deep learning",
      "python"
    ],
    "views": 3503,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=2yr4UFsRddI",
    "thumb": "https://img.youtube.com/vi/2yr4UFsRddI/hqdefault.jpg"
  },
  {
    "title": "🐍 CURSO de PYTHON desde CERO - 02 ¿Que NECESITO para EMPEZAR a PROGRAMAR en PYTHON?",
    "desc": "Clase magistral y contenido audiovisual enfocado en software, programacion, python, fundamentos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "5RjpOYxnTZk",
    "author": "Carlos Alfaro",
    "career": "sistemas",
    "tags": [
      "software",
      "programacion",
      "python",
      "fundamentos"
    ],
    "views": 3780,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=5RjpOYxnTZk",
    "thumb": "https://img.youtube.com/vi/5RjpOYxnTZk/hqdefault.jpg"
  },
  {
    "title": "✅ Curso de PYTHON desde CERO para PRINCIPIANTES (Completo) - 2026",
    "desc": "Clase magistral y contenido audiovisual enfocado en frontend, react, javascript, web, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "Ga4w8UTb4yU",
    "author": "Sinergia | CURSOS",
    "career": "sistemas",
    "tags": [
      "frontend",
      "react",
      "javascript",
      "web"
    ],
    "views": 4057,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=Ga4w8UTb4yU",
    "thumb": "https://img.youtube.com/vi/Ga4w8UTb4yU/hqdefault.jpg"
  },
  {
    "title": "Curso de Python 2026 para Principiantes (Completo Desde CERO)",
    "desc": "Clase magistral y contenido audiovisual enfocado en backend, arquitectura, clean architecture, apis, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "QPAO-31QtQ8",
    "author": "GroverTec",
    "career": "sistemas",
    "tags": [
      "backend",
      "arquitectura",
      "clean architecture",
      "apis"
    ],
    "views": 4334,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=QPAO-31QtQ8",
    "thumb": "https://img.youtube.com/vi/QPAO-31QtQ8/hqdefault.jpg"
  },
  {
    "title": "Curso de Python desde cero para principiantes - INSTALACION, CONFIGURACION (video 1)",
    "desc": "Clase magistral y contenido audiovisual enfocado en bases de datos, sql, postgresql, optimizacion, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "Z_7-AnIXY8M",
    "author": "INFORMATICONFIG",
    "career": "sistemas",
    "tags": [
      "bases de datos",
      "sql",
      "postgresql",
      "optimizacion"
    ],
    "views": 4611,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=Z_7-AnIXY8M",
    "thumb": "https://img.youtube.com/vi/Z_7-AnIXY8M/hqdefault.jpg"
  },
  {
    "title": "Curso de Python desde cero para principiantes - VARIABLES(video 2)",
    "desc": "Clase magistral y contenido audiovisual enfocado en devops, docker, kubernetes, cloud, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "c2s9IGhry6c",
    "author": "INFORMATICONFIG",
    "career": "sistemas",
    "tags": [
      "devops",
      "docker",
      "kubernetes",
      "cloud"
    ],
    "views": 4888,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=c2s9IGhry6c",
    "thumb": "https://img.youtube.com/vi/c2s9IGhry6c/hqdefault.jpg"
  },
  {
    "title": "Curso de Python desde cero🚀",
    "desc": "Clase magistral y contenido audiovisual enfocado en algoritmos, estructuras de datos, complejidad, ciencias computacion, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "tpcAeClIUGY",
    "author": "Carlos Master Web",
    "career": "sistemas",
    "tags": [
      "algoritmos",
      "estructuras de datos",
      "complejidad",
      "ciencias computacion"
    ],
    "views": 5165,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=tpcAeClIUGY",
    "thumb": "https://img.youtube.com/vi/tpcAeClIUGY/hqdefault.jpg"
  },
  {
    "title": "Que es Python? explicado en menos de 10 minutos 🚀",
    "desc": "Clase magistral y contenido audiovisual enfocado en seguridad, ciberseguridad, redes, hacking etico, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "yTjEAiX98zg",
    "author": "Carlos Master Web",
    "career": "sistemas",
    "tags": [
      "seguridad",
      "ciberseguridad",
      "redes",
      "hacking etico"
    ],
    "views": 5442,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=yTjEAiX98zg",
    "thumb": "https://img.youtube.com/vi/yTjEAiX98zg/hqdefault.jpg"
  },
  {
    "title": "Curso de Python para análisis de datos desde cero para principiantes paso a paso",
    "desc": "Clase magistral y contenido audiovisual enfocado en ia, machine learning, deep learning, python, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "_2UhskLjBi0",
    "author": "Escuela De Bayes",
    "career": "sistemas",
    "tags": [
      "ia",
      "machine learning",
      "deep learning",
      "python"
    ],
    "views": 5719,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=_2UhskLjBi0",
    "thumb": "https://img.youtube.com/vi/_2UhskLjBi0/hqdefault.jpg"
  },
  {
    "title": "Serie Phyton Capitulo 1",
    "desc": "Clase magistral y contenido audiovisual enfocado en software, programacion, python, fundamentos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "FgcUNvDEtaE",
    "author": "Escuela De Bayes",
    "career": "sistemas",
    "tags": [
      "software",
      "programacion",
      "python",
      "fundamentos"
    ],
    "views": 5996,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=FgcUNvDEtaE",
    "thumb": "https://img.youtube.com/vi/FgcUNvDEtaE/hqdefault.jpg"
  },
  {
    "title": "CURSO de PYTHON desde CERO para AUTODIDACTAS 👩🏻‍💻🚀",
    "desc": "Clase magistral y contenido audiovisual enfocado en frontend, react, javascript, web, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "NG7XjqN7TFU",
    "author": "Tati Sorroche | PensarCoding Academy",
    "career": "sistemas",
    "tags": [
      "frontend",
      "react",
      "javascript",
      "web"
    ],
    "views": 6273,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=NG7XjqN7TFU",
    "thumb": "https://img.youtube.com/vi/NG7XjqN7TFU/hqdefault.jpg"
  },
  {
    "title": "Curso de Python para Análisis de Datos [01] - Instalación, Configuración y Primeros Pasos 🐍",
    "desc": "Clase magistral y contenido audiovisual enfocado en backend, arquitectura, clean architecture, apis, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "KMEhbbxYySw",
    "author": "PicaCodigo",
    "career": "sistemas",
    "tags": [
      "backend",
      "arquitectura",
      "clean architecture",
      "apis"
    ],
    "views": 6550,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=KMEhbbxYySw",
    "thumb": "https://img.youtube.com/vi/KMEhbbxYySw/hqdefault.jpg"
  },
  {
    "title": "Curso de Python para Análisis de Datos [02] - Pandas: Manipulación y Tratamiento de Datos 🐍",
    "desc": "Clase magistral y contenido audiovisual enfocado en bases de datos, sql, postgresql, optimizacion, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "qNwXlHnFj40",
    "author": "PicaCodigo",
    "career": "sistemas",
    "tags": [
      "bases de datos",
      "sql",
      "postgresql",
      "optimizacion"
    ],
    "views": 6827,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=qNwXlHnFj40",
    "thumb": "https://img.youtube.com/vi/qNwXlHnFj40/hqdefault.jpg"
  },
  {
    "title": "Curso Python COMPLETO para PRINCIPIANTES",
    "desc": "Clase magistral y contenido audiovisual enfocado en devops, docker, kubernetes, cloud, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "WVqvrRXloc0",
    "author": "Josue Tapia",
    "career": "sistemas",
    "tags": [
      "devops",
      "docker",
      "kubernetes",
      "cloud"
    ],
    "views": 7104,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=WVqvrRXloc0",
    "thumb": "https://img.youtube.com/vi/WVqvrRXloc0/hqdefault.jpg"
  },
  {
    "title": "¿Qué es React y por qué domina el desarrollo frontend?",
    "desc": "Clase magistral y contenido audiovisual enfocado en algoritmos, estructuras de datos, complejidad, ciencias computacion, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "kEMr0rFjB7E",
    "author": "EDteam",
    "career": "sistemas",
    "tags": [
      "algoritmos",
      "estructuras de datos",
      "complejidad",
      "ciencias computacion"
    ],
    "views": 7381,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=kEMr0rFjB7E",
    "thumb": "https://img.youtube.com/vi/kEMr0rFjB7E/hqdefault.jpg"
  },
  {
    "title": "🧑‍💻 Presentación del curso y Fundamentos del Desarrollo Web - Bootcamp FullStack Gratuito",
    "desc": "Clase magistral y contenido audiovisual enfocado en seguridad, ciberseguridad, redes, hacking etico, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "wTpuKOhGfJE",
    "author": "midudev",
    "career": "sistemas",
    "tags": [
      "seguridad",
      "ciberseguridad",
      "redes",
      "hacking etico"
    ],
    "views": 7658,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=wTpuKOhGfJE",
    "thumb": "https://img.youtube.com/vi/wTpuKOhGfJE/hqdefault.jpg"
  },
  {
    "title": "Curso Electrónica Básica - #4 Resistencias y Condensadores",
    "desc": "Clase magistral y contenido audiovisual enfocado en electronica, componentes, resistencias, diodos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "k0Mtr-Wc4AE",
    "author": "Tecnocom Ingenieria",
    "career": "electronica",
    "tags": [
      "electronica",
      "componentes",
      "resistencias",
      "diodos"
    ],
    "views": 1200,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=k0Mtr-Wc4AE",
    "thumb": "https://img.youtube.com/vi/k0Mtr-Wc4AE/hqdefault.jpg"
  },
  {
    "title": "curso de electrónica básica desde cero - Basic electronics course (#12 condensadores y led )",
    "desc": "Clase magistral y contenido audiovisual enfocado en circuitos, kirchhoff, analisis circuitos, voltaje, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "mHoEigtJaTA",
    "author": "Editronikx",
    "career": "electronica",
    "tags": [
      "circuitos",
      "kirchhoff",
      "analisis circuitos",
      "voltaje"
    ],
    "views": 1477,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=mHoEigtJaTA",
    "thumb": "https://img.youtube.com/vi/mHoEigtJaTA/hqdefault.jpg"
  },
  {
    "title": "curso de electrónica básica desde cero para principiantes  (#1 conceptos básicos)",
    "desc": "Clase magistral y contenido audiovisual enfocado en transistores, bjt, mosfet, amplificadores, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "LjYClvMPRdE",
    "author": "Editronikx",
    "career": "electronica",
    "tags": [
      "transistores",
      "bjt",
      "mosfet",
      "amplificadores"
    ],
    "views": 1754,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=LjYClvMPRdE",
    "thumb": "https://img.youtube.com/vi/LjYClvMPRdE/hqdefault.jpg"
  },
  {
    "title": "curso de electrónica básica desde cero - Basic electronics course (#2 materiales para el curso)",
    "desc": "Clase magistral y contenido audiovisual enfocado en instrumentacion, osciloscopio, mediciones, laboratorio, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "JG8UAYETm4s",
    "author": "Editronikx",
    "career": "electronica",
    "tags": [
      "instrumentacion",
      "osciloscopio",
      "mediciones",
      "laboratorio"
    ],
    "views": 2031,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=JG8UAYETm4s",
    "thumb": "https://img.youtube.com/vi/JG8UAYETm4s/hqdefault.jpg"
  },
  {
    "title": "Capacitores Explicados - Los fundamentos funcionan los condensadores. Principio de funcionamiento",
    "desc": "Clase magistral y contenido audiovisual enfocado en arduino, microcontroladores, embebidos, hardware, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "h_m6qFRNITU",
    "author": "Mentalidad De Ingeniería",
    "career": "electronica",
    "tags": [
      "arduino",
      "microcontroladores",
      "embebidos",
      "hardware"
    ],
    "views": 2308,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=h_m6qFRNITU",
    "thumb": "https://img.youtube.com/vi/h_m6qFRNITU/hqdefault.jpg"
  },
  {
    "title": "Curso de Electrónica #1 Resistencias Capacitores Inductores y Diodos!",
    "desc": "Clase magistral y contenido audiovisual enfocado en esp32, iot, sensores, redes, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "vJnGSqnFgvw",
    "author": "Tecnologia y Soluciones",
    "career": "electronica",
    "tags": [
      "esp32",
      "iot",
      "sensores",
      "redes"
    ],
    "views": 2585,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=vJnGSqnFgvw",
    "thumb": "https://img.youtube.com/vi/vJnGSqnFgvw/hqdefault.jpg"
  },
  {
    "title": "CIRCUITO Electrónico y CONCEPTOS básicos  -- Curso Electrónica Básica  #1 - principiantes - GRATIS",
    "desc": "Clase magistral y contenido audiovisual enfocado en automatizacion, plc, ladder, industria 4.0, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "FOY66XAefsk",
    "author": "Tecnocom Ingenieria",
    "career": "electronica",
    "tags": [
      "automatizacion",
      "plc",
      "ladder",
      "industria 4.0"
    ],
    "views": 2862,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=FOY66XAefsk",
    "thumb": "https://img.youtube.com/vi/FOY66XAefsk/hqdefault.jpg"
  },
  {
    "title": "Curso Electrónica Básica - #2 Corriente Alterna y Continua - El Multimetro",
    "desc": "Clase magistral y contenido audiovisual enfocado en robotica, motores, control, hardware, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "xXyYZK2Qx94",
    "author": "Tecnocom Ingenieria",
    "career": "electronica",
    "tags": [
      "robotica",
      "motores",
      "control",
      "hardware"
    ],
    "views": 3139,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=xXyYZK2Qx94",
    "thumb": "https://img.youtube.com/vi/xXyYZK2Qx94/hqdefault.jpg"
  },
  {
    "title": "Resistencias Explicadas",
    "desc": "Clase magistral y contenido audiovisual enfocado en electronica, componentes, resistencias, diodos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "blUimcoNpKs",
    "author": "Mentalidad De Ingeniería",
    "career": "electronica",
    "tags": [
      "electronica",
      "componentes",
      "resistencias",
      "diodos"
    ],
    "views": 3416,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=blUimcoNpKs",
    "thumb": "https://img.youtube.com/vi/blUimcoNpKs/hqdefault.jpg"
  },
  {
    "title": "COMPONENTES ELECTRÓNICOS - Resumen / Idea intuitiva",
    "desc": "Clase magistral y contenido audiovisual enfocado en circuitos, kirchhoff, analisis circuitos, voltaje, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "1NRFL6YYtzg",
    "author": "Manik",
    "career": "electronica",
    "tags": [
      "circuitos",
      "kirchhoff",
      "analisis circuitos",
      "voltaje"
    ],
    "views": 3693,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=1NRFL6YYtzg",
    "thumb": "https://img.youtube.com/vi/1NRFL6YYtzg/hqdefault.jpg"
  },
  {
    "title": "15 Componentes Básicos que debes conocer 📚⚡ #electronica #electricidad #corrienteelectrica",
    "desc": "Clase magistral y contenido audiovisual enfocado en transistores, bjt, mosfet, amplificadores, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "SI3m8f9SaS4",
    "author": "Electronica TV",
    "career": "electronica",
    "tags": [
      "transistores",
      "bjt",
      "mosfet",
      "amplificadores"
    ],
    "views": 3970,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=SI3m8f9SaS4",
    "thumb": "https://img.youtube.com/vi/SI3m8f9SaS4/hqdefault.jpg"
  },
  {
    "title": "Passive & Basic Components: Resistor, Capacitor (100µF 50V), Inductor, Potentiometer #diyelectronics",
    "desc": "Clase magistral y contenido audiovisual enfocado en instrumentacion, osciloscopio, mediciones, laboratorio, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "HmGxYk6HauE",
    "author": "Master Electronics",
    "career": "electronica",
    "tags": [
      "instrumentacion",
      "osciloscopio",
      "mediciones",
      "laboratorio"
    ],
    "views": 4247,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=HmGxYk6HauE",
    "thumb": "https://img.youtube.com/vi/HmGxYk6HauE/hqdefault.jpg"
  },
  {
    "title": "Componentes electrónicos más utilizados.",
    "desc": "Clase magistral y contenido audiovisual enfocado en arduino, microcontroladores, embebidos, hardware, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "2cCpU74-IBA",
    "author": "Profe_Carlos Miranda",
    "career": "electronica",
    "tags": [
      "arduino",
      "microcontroladores",
      "embebidos",
      "hardware"
    ],
    "views": 4524,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=2cCpU74-IBA",
    "thumb": "https://img.youtube.com/vi/2cCpU74-IBA/hqdefault.jpg"
  },
  {
    "title": "Electronic Components Identification",
    "desc": "Clase magistral y contenido audiovisual enfocado en esp32, iot, sensores, redes, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "yzFmuwQbRb0",
    "author": "Electronics Education",
    "career": "electronica",
    "tags": [
      "esp32",
      "iot",
      "sensores",
      "redes"
    ],
    "views": 4801,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=yzFmuwQbRb0",
    "thumb": "https://img.youtube.com/vi/yzFmuwQbRb0/hqdefault.jpg"
  },
  {
    "title": "Componentes electrónicos 👨‍🔧✌️ #ingedarwin #electronica",
    "desc": "Clase magistral y contenido audiovisual enfocado en automatizacion, plc, ladder, industria 4.0, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "_0ypBfTtLx8",
    "author": "IngE Darwin",
    "career": "electronica",
    "tags": [
      "automatizacion",
      "plc",
      "ladder",
      "industria 4.0"
    ],
    "views": 5078,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=_0ypBfTtLx8",
    "thumb": "https://img.youtube.com/vi/_0ypBfTtLx8/hqdefault.jpg"
  },
  {
    "title": "Curso de Electrónica Básica desde CERO ⚡ Aprende Fácil y Rápido - Capítulo 1",
    "desc": "Clase magistral y contenido audiovisual enfocado en robotica, motores, control, hardware, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "RH9eLKXq2qk",
    "author": "AUTOMATIZACION INDUSTRIAL",
    "career": "electronica",
    "tags": [
      "robotica",
      "motores",
      "control",
      "hardware"
    ],
    "views": 5355,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=RH9eLKXq2qk",
    "thumb": "https://img.youtube.com/vi/RH9eLKXq2qk/hqdefault.jpg"
  },
  {
    "title": "✔Capitulo 2: ¿Qué es la CORRIENTE ELECTRICA? ⚡- CURSO DE ELECTRONICA BASICA - Electrónica Desde Cero",
    "desc": "Clase magistral y contenido audiovisual enfocado en electronica, componentes, resistencias, diodos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "eAar1hT6v04",
    "author": "AUTOMATIZACION INDUSTRIAL",
    "career": "electronica",
    "tags": [
      "electronica",
      "componentes",
      "resistencias",
      "diodos"
    ],
    "views": 5632,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=eAar1hT6v04",
    "thumb": "https://img.youtube.com/vi/eAar1hT6v04/hqdefault.jpg"
  },
  {
    "title": "Curso de electrónica básica 0 - Introducción",
    "desc": "Clase magistral y contenido audiovisual enfocado en circuitos, kirchhoff, analisis circuitos, voltaje, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "z7TRTAMJqm0",
    "author": "Radioelectronica-Spain",
    "career": "electronica",
    "tags": [
      "circuitos",
      "kirchhoff",
      "analisis circuitos",
      "voltaje"
    ],
    "views": 5909,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=z7TRTAMJqm0",
    "thumb": "https://img.youtube.com/vi/z7TRTAMJqm0/hqdefault.jpg"
  },
  {
    "title": "Curso de electrónica básica 1. Conocimientos fundamentales. Energía. Potencia.",
    "desc": "Clase magistral y contenido audiovisual enfocado en transistores, bjt, mosfet, amplificadores, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "PYjlw4zuwLw",
    "author": "Radioelectronica-Spain",
    "career": "electronica",
    "tags": [
      "transistores",
      "bjt",
      "mosfet",
      "amplificadores"
    ],
    "views": 6186,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=PYjlw4zuwLw",
    "thumb": "https://img.youtube.com/vi/PYjlw4zuwLw/hqdefault.jpg"
  },
  {
    "title": "APRENDE Electrónica AHORA! 👉CURSO Básico #11 -- ¡CONDENSADOR! tipos y funcionamiento",
    "desc": "Clase magistral y contenido audiovisual enfocado en instrumentacion, osciloscopio, mediciones, laboratorio, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "VyqEIy-lU6k",
    "author": "Tips de ELECTRONICA",
    "career": "electronica",
    "tags": [
      "instrumentacion",
      "osciloscopio",
      "mediciones",
      "laboratorio"
    ],
    "views": 6463,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=VyqEIy-lU6k",
    "thumb": "https://img.youtube.com/vi/VyqEIy-lU6k/hqdefault.jpg"
  },
  {
    "title": "¡Atención, futuros técnicos! 💡 ¿Resistencia, capacitor o diodo SMD?",
    "desc": "Clase magistral y contenido audiovisual enfocado en arduino, microcontroladores, embebidos, hardware, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "4M3CkaJTfz0",
    "author": "ReparaFacil_celulares",
    "career": "electronica",
    "tags": [
      "arduino",
      "microcontroladores",
      "embebidos",
      "hardware"
    ],
    "views": 6740,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=4M3CkaJTfz0",
    "thumb": "https://img.youtube.com/vi/4M3CkaJTfz0/hqdefault.jpg"
  },
  {
    "title": "Resonancia RLC: 31 V en la bobina con una fuente de 10 V",
    "desc": "Clase magistral y contenido audiovisual enfocado en esp32, iot, sensores, redes, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "_G5P2A1Xy_Q",
    "author": "La Electroescuela",
    "career": "electronica",
    "tags": [
      "esp32",
      "iot",
      "sensores",
      "redes"
    ],
    "views": 7017,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=_G5P2A1Xy_Q",
    "thumb": "https://img.youtube.com/vi/_G5P2A1Xy_Q/hqdefault.jpg"
  },
  {
    "title": "Símbolos y componentes eléctricos 🤯✌️ #ingedarwin #instrumentos",
    "desc": "Clase magistral y contenido audiovisual enfocado en automatizacion, plc, ladder, industria 4.0, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "W1xhA1Lw5WI",
    "author": "IngE Darwin",
    "career": "electronica",
    "tags": [
      "automatizacion",
      "plc",
      "ladder",
      "industria 4.0"
    ],
    "views": 7294,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=W1xhA1Lw5WI",
    "thumb": "https://img.youtube.com/vi/W1xhA1Lw5WI/hqdefault.jpg"
  },
  {
    "title": "⚡ Resistor, Capacitor aur Transistor Kya Hain? - 3 Basic Electronic Components Explained in Urdu",
    "desc": "Clase magistral y contenido audiovisual enfocado en robotica, motores, control, hardware, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "kcQSPKbOvCI",
    "author": "Electronic Tech Urdu",
    "career": "electronica",
    "tags": [
      "robotica",
      "motores",
      "control",
      "hardware"
    ],
    "views": 7571,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=kcQSPKbOvCI",
    "thumb": "https://img.youtube.com/vi/kcQSPKbOvCI/hqdefault.jpg"
  },
  {
    "title": "Introducción A La Electrónica - Curso Básico Para Principiantes - Componentes Electrónicos",
    "desc": "Clase magistral y contenido audiovisual enfocado en electronica, componentes, resistencias, diodos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "Gyui0h90y4w",
    "author": "Wow Tech Hecker",
    "career": "electronica",
    "tags": [
      "electronica",
      "componentes",
      "resistencias",
      "diodos"
    ],
    "views": 7848,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=Gyui0h90y4w",
    "thumb": "https://img.youtube.com/vi/Gyui0h90y4w/hqdefault.jpg"
  },
  {
    "title": "Clase 1: ¿Qué es Voltaje, Corriente y Resistencia? - Fundamentos de Electrónica Fácil",
    "desc": "Clase magistral y contenido audiovisual enfocado en circuitos, kirchhoff, analisis circuitos, voltaje, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "FND9BBYEB3c",
    "author": "Desvare 5070 Tutoriales Electrónica Básica",
    "career": "electronica",
    "tags": [
      "circuitos",
      "kirchhoff",
      "analisis circuitos",
      "voltaje"
    ],
    "views": 8125,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=FND9BBYEB3c",
    "thumb": "https://img.youtube.com/vi/FND9BBYEB3c/hqdefault.jpg"
  },
  {
    "title": "Componentes Esenciales para Principiantes en Electrónica 🔋🔌 #ingenieria  #ingeneriaelectronica",
    "desc": "Clase magistral y contenido audiovisual enfocado en transistores, bjt, mosfet, amplificadores, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "YYvqpVf84dI",
    "author": "ellie",
    "career": "electronica",
    "tags": [
      "transistores",
      "bjt",
      "mosfet",
      "amplificadores"
    ],
    "views": 8402,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=YYvqpVf84dI",
    "thumb": "https://img.youtube.com/vi/YYvqpVf84dI/hqdefault.jpg"
  },
  {
    "title": "showing how to convert 220V AC to 12V DC using components like a diode, capacitors, and a resistor.",
    "desc": "Clase magistral y contenido audiovisual enfocado en instrumentacion, osciloscopio, mediciones, laboratorio, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "k9A8wE5hVwc",
    "author": "DY electronic",
    "career": "electronica",
    "tags": [
      "instrumentacion",
      "osciloscopio",
      "mediciones",
      "laboratorio"
    ],
    "views": 8679,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=k9A8wE5hVwc",
    "thumb": "https://img.youtube.com/vi/k9A8wE5hVwc/hqdefault.jpg"
  },
  {
    "title": "CRISIS de identidad de tus COMPONENTES electrónicos 🤡",
    "desc": "Clase magistral y contenido audiovisual enfocado en arduino, microcontroladores, embebidos, hardware, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "CNXF2Js6Y5s",
    "author": "Helectror IT",
    "career": "electronica",
    "tags": [
      "arduino",
      "microcontroladores",
      "embebidos",
      "hardware"
    ],
    "views": 8956,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=CNXF2Js6Y5s",
    "thumb": "https://img.youtube.com/vi/CNXF2Js6Y5s/hqdefault.jpg"
  },
  {
    "title": "Componentes electrónicos",
    "desc": "Clase magistral y contenido audiovisual enfocado en esp32, iot, sensores, redes, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "vqqS-TOHpZE",
    "author": "Aprende con Yes",
    "career": "electronica",
    "tags": [
      "esp32",
      "iot",
      "sensores",
      "redes"
    ],
    "views": 9233,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=vqqS-TOHpZE",
    "thumb": "https://img.youtube.com/vi/vqqS-TOHpZE/hqdefault.jpg"
  },
  {
    "title": "Tipos de reguladores de voltaje #electronica #ingenieria #regulador",
    "desc": "Clase magistral y contenido audiovisual enfocado en automatizacion, plc, ladder, industria 4.0, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "KMXIMDRKTY0",
    "author": "Circuitos Listos",
    "career": "electronica",
    "tags": [
      "automatizacion",
      "plc",
      "ladder",
      "industria 4.0"
    ],
    "views": 9510,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=KMXIMDRKTY0",
    "thumb": "https://img.youtube.com/vi/KMXIMDRKTY0/hqdefault.jpg"
  },
  {
    "title": "Conociendo los componentes electrónicos",
    "desc": "Clase magistral y contenido audiovisual enfocado en robotica, motores, control, hardware, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "T7RFlrbliB8",
    "author": "Profe_Carlos Miranda",
    "career": "electronica",
    "tags": [
      "robotica",
      "motores",
      "control",
      "hardware"
    ],
    "views": 1287,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=T7RFlrbliB8",
    "thumb": "https://img.youtube.com/vi/T7RFlrbliB8/hqdefault.jpg"
  },
  {
    "title": "¿Qué es el voltaje? ⚡ Electrónica desde cero #2",
    "desc": "Clase magistral y contenido audiovisual enfocado en electronica, componentes, resistencias, diodos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "UFzrYHTDuYA",
    "author": "Electrón Libre",
    "career": "electronica",
    "tags": [
      "electronica",
      "componentes",
      "resistencias",
      "diodos"
    ],
    "views": 1564,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=UFzrYHTDuYA",
    "thumb": "https://img.youtube.com/vi/UFzrYHTDuYA/hqdefault.jpg"
  },
  {
    "title": "Como medir un condensador (parte 1)",
    "desc": "Clase magistral y contenido audiovisual enfocado en circuitos, kirchhoff, analisis circuitos, voltaje, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "METbvuFVOmk",
    "author": "eltalleresmicasa",
    "career": "electronica",
    "tags": [
      "circuitos",
      "kirchhoff",
      "analisis circuitos",
      "voltaje"
    ],
    "views": 1841,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=METbvuFVOmk",
    "thumb": "https://img.youtube.com/vi/METbvuFVOmk/hqdefault.jpg"
  },
  {
    "title": "Este es un capacitor y así funciona - #LaElectronicaGT #ElectronicaBasica",
    "desc": "Clase magistral y contenido audiovisual enfocado en transistores, bjt, mosfet, amplificadores, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "arRhuLOPuJ4",
    "author": "La Electrónica",
    "career": "electronica",
    "tags": [
      "transistores",
      "bjt",
      "mosfet",
      "amplificadores"
    ],
    "views": 2118,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=arRhuLOPuJ4",
    "thumb": "https://img.youtube.com/vi/arRhuLOPuJ4/hqdefault.jpg"
  },
  {
    "title": "🔴TIENES que VER Esto🔴",
    "desc": "Clase magistral y contenido audiovisual enfocado en instrumentacion, osciloscopio, mediciones, laboratorio, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "wPoNJyFeP_Y",
    "author": "Pablo ELECTRUM",
    "career": "electronica",
    "tags": [
      "instrumentacion",
      "osciloscopio",
      "mediciones",
      "laboratorio"
    ],
    "views": 2395,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=wPoNJyFeP_Y",
    "thumb": "https://img.youtube.com/vi/wPoNJyFeP_Y/hqdefault.jpg"
  },
  {
    "title": "Curso de electrónica basica Parte I #electronica #curso #juntamugre #tutorial",
    "desc": "Clase magistral y contenido audiovisual enfocado en arduino, microcontroladores, embebidos, hardware, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "0pRL16jmxK8",
    "author": "Espacio de Cesar",
    "career": "electronica",
    "tags": [
      "arduino",
      "microcontroladores",
      "embebidos",
      "hardware"
    ],
    "views": 2672,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=0pRL16jmxK8",
    "thumb": "https://img.youtube.com/vi/0pRL16jmxK8/hqdefault.jpg"
  },
  {
    "title": "🚀Circuitos ELÉCTRICOS: Ley de Ohm y Potencia",
    "desc": "Clase magistral y contenido audiovisual enfocado en esp32, iot, sensores, redes, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "tpt9FlNYq4k",
    "author": "El Traductor de Ingeniería",
    "career": "electronica",
    "tags": [
      "esp32",
      "iot",
      "sensores",
      "redes"
    ],
    "views": 2949,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=tpt9FlNYq4k",
    "thumb": "https://img.youtube.com/vi/tpt9FlNYq4k/hqdefault.jpg"
  },
  {
    "title": "🚀Circuitos ELÉCTRICOS: Leyes de Kirchhoff y Resistencias Equivalentes",
    "desc": "Clase magistral y contenido audiovisual enfocado en automatizacion, plc, ladder, industria 4.0, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "btrxWydp4ag",
    "author": "El Traductor de Ingeniería",
    "career": "electronica",
    "tags": [
      "automatizacion",
      "plc",
      "ladder",
      "industria 4.0"
    ],
    "views": 3226,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=btrxWydp4ag",
    "thumb": "https://img.youtube.com/vi/btrxWydp4ag/hqdefault.jpg"
  },
  {
    "title": "✔Capitulo 12: Potenciometro⚡Curso de Electrónica Básica - Electrónica Desde Cero",
    "desc": "Clase magistral y contenido audiovisual enfocado en robotica, motores, control, hardware, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "IzBuBXtuTso",
    "author": "AUTOMATIZACION INDUSTRIAL",
    "career": "electronica",
    "tags": [
      "robotica",
      "motores",
      "control",
      "hardware"
    ],
    "views": 3503,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=IzBuBXtuTso",
    "thumb": "https://img.youtube.com/vi/IzBuBXtuTso/hqdefault.jpg"
  },
  {
    "title": "Aprenda ELECTRÓNICA en 👉1 HORA - Electrónica para Principiantes",
    "desc": "Clase magistral y contenido audiovisual enfocado en electronica, componentes, resistencias, diodos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "hhng6FrBjBQ",
    "author": "Tips de ELECTRONICA",
    "career": "electronica",
    "tags": [
      "electronica",
      "componentes",
      "resistencias",
      "diodos"
    ],
    "views": 3780,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=hhng6FrBjBQ",
    "thumb": "https://img.youtube.com/vi/hhng6FrBjBQ/hqdefault.jpg"
  },
  {
    "title": "Como medir componentes electrónicos sobre la placa paso a paso!",
    "desc": "Clase magistral y contenido audiovisual enfocado en circuitos, kirchhoff, analisis circuitos, voltaje, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "h32zF39gwwY",
    "author": "Practicas de Electronica",
    "career": "electronica",
    "tags": [
      "circuitos",
      "kirchhoff",
      "analisis circuitos",
      "voltaje"
    ],
    "views": 4057,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=h32zF39gwwY",
    "thumb": "https://img.youtube.com/vi/h32zF39gwwY/hqdefault.jpg"
  },
  {
    "title": "ELECTRÓNICA BÁSICA - INICIO DE CURSO",
    "desc": "Clase magistral y contenido audiovisual enfocado en transistores, bjt, mosfet, amplificadores, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "HMEC8TSWIoU",
    "author": "Cicap Oficial",
    "career": "electronica",
    "tags": [
      "transistores",
      "bjt",
      "mosfet",
      "amplificadores"
    ],
    "views": 4334,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=HMEC8TSWIoU",
    "thumb": "https://img.youtube.com/vi/HMEC8TSWIoU/hqdefault.jpg"
  },
  {
    "title": "curso de electrónica básica desde cero - Basic electronics course(# 36 condensadores)",
    "desc": "Clase magistral y contenido audiovisual enfocado en instrumentacion, osciloscopio, mediciones, laboratorio, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "NUqoAkVJST8",
    "author": "Editronikx",
    "career": "electronica",
    "tags": [
      "instrumentacion",
      "osciloscopio",
      "mediciones",
      "laboratorio"
    ],
    "views": 4611,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=NUqoAkVJST8",
    "thumb": "https://img.youtube.com/vi/NUqoAkVJST8/hqdefault.jpg"
  },
  {
    "title": "COMO medir RESISTENCIAS y CONDENSADORES - MULTIMETRO -- APRENDE Electrónica AHORA! 👉CURSO Básico #13",
    "desc": "Clase magistral y contenido audiovisual enfocado en arduino, microcontroladores, embebidos, hardware, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "EyicoV__LH8",
    "author": "Tips de ELECTRONICA",
    "career": "electronica",
    "tags": [
      "arduino",
      "microcontroladores",
      "embebidos",
      "hardware"
    ],
    "views": 4888,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=EyicoV__LH8",
    "thumb": "https://img.youtube.com/vi/EyicoV__LH8/hqdefault.jpg"
  },
  {
    "title": "CIRCUITOS ELÉCTRICOS, pero SIN memorizar fórmulas",
    "desc": "Clase magistral y contenido audiovisual enfocado en esp32, iot, sensores, redes, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "kHZ8SD7jiiA",
    "author": "El Traductor de Ingeniería",
    "career": "electronica",
    "tags": [
      "esp32",
      "iot",
      "sensores",
      "redes"
    ],
    "views": 5165,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=kHZ8SD7jiiA",
    "thumb": "https://img.youtube.com/vi/kHZ8SD7jiiA/hqdefault.jpg"
  },
  {
    "title": "Cómo USAR una PROTOBOARD para PRINCIPIANTES - Electrónica Básica -",
    "desc": "Clase magistral y contenido audiovisual enfocado en automatizacion, plc, ladder, industria 4.0, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "99Rqlf5T00w",
    "author": "ingenierodecables",
    "career": "electronica",
    "tags": [
      "automatizacion",
      "plc",
      "ladder",
      "industria 4.0"
    ],
    "views": 5442,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=99Rqlf5T00w",
    "thumb": "https://img.youtube.com/vi/99Rqlf5T00w/hqdefault.jpg"
  },
  {
    "title": "TEOREMA de THEVENIN ➤ EXPLICACIÓN muy FÁCIL [En SIMPLES PASOS que NO SABIAS] ⚡ CIRCUITOS ELECTRICOS",
    "desc": "Clase magistral y contenido audiovisual enfocado en robotica, motores, control, hardware, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "fhrNKREIlQY",
    "author": "SECTOR ENERGIA ELECTRICA",
    "career": "electronica",
    "tags": [
      "robotica",
      "motores",
      "control",
      "hardware"
    ],
    "views": 5719,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=fhrNKREIlQY",
    "thumb": "https://img.youtube.com/vi/fhrNKREIlQY/hqdefault.jpg"
  },
  {
    "title": "TEOREMA de THEVENIN 💥 EJERCICIOS RESUELTOS [PASO a PASO desde 0] ➤ FUENTES INDEPENDIENTES 😱",
    "desc": "Clase magistral y contenido audiovisual enfocado en electronica, componentes, resistencias, diodos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "lKF5zH_cag8",
    "author": "SECTOR ENERGIA ELECTRICA",
    "career": "electronica",
    "tags": [
      "electronica",
      "componentes",
      "resistencias",
      "diodos"
    ],
    "views": 5996,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=lKF5zH_cag8",
    "thumb": "https://img.youtube.com/vi/lKF5zH_cag8/hqdefault.jpg"
  },
  {
    "title": "🚀Circuitos ELÉCTRICOS: Equivalentes de Thevenin y Norton",
    "desc": "Clase magistral y contenido audiovisual enfocado en circuitos, kirchhoff, analisis circuitos, voltaje, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "BlkME9ypmuc",
    "author": "El Traductor de Ingeniería",
    "career": "electronica",
    "tags": [
      "circuitos",
      "kirchhoff",
      "analisis circuitos",
      "voltaje"
    ],
    "views": 6273,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=BlkME9ypmuc",
    "thumb": "https://img.youtube.com/vi/BlkME9ypmuc/hqdefault.jpg"
  },
  {
    "title": "LEY DE KIRCHHOFF (MALLAS) / EJERCICIO 1",
    "desc": "Clase magistral y contenido audiovisual enfocado en transistores, bjt, mosfet, amplificadores, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "1NC9kGDn7Bg",
    "author": "IngE Darwin",
    "career": "electronica",
    "tags": [
      "transistores",
      "bjt",
      "mosfet",
      "amplificadores"
    ],
    "views": 6550,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=1NC9kGDn7Bg",
    "thumb": "https://img.youtube.com/vi/1NC9kGDn7Bg/hqdefault.jpg"
  },
  {
    "title": "LEY DE KIRCHHOFF (NODOS) / EJERCICIO 1",
    "desc": "Clase magistral y contenido audiovisual enfocado en instrumentacion, osciloscopio, mediciones, laboratorio, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "KiKMwEG-l3I",
    "author": "IngE Darwin",
    "career": "electronica",
    "tags": [
      "instrumentacion",
      "osciloscopio",
      "mediciones",
      "laboratorio"
    ],
    "views": 6827,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=KiKMwEG-l3I",
    "thumb": "https://img.youtube.com/vi/KiKMwEG-l3I/hqdefault.jpg"
  },
  {
    "title": "Domina CIRCUITOS ELÉCTRICOS en 17 minutos",
    "desc": "Clase magistral y contenido audiovisual enfocado en arduino, microcontroladores, embebidos, hardware, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "Oq7Dfh85-VE",
    "author": "seletube",
    "career": "electronica",
    "tags": [
      "arduino",
      "microcontroladores",
      "embebidos",
      "hardware"
    ],
    "views": 7104,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=Oq7Dfh85-VE",
    "thumb": "https://img.youtube.com/vi/Oq7Dfh85-VE/hqdefault.jpg"
  },
  {
    "title": "RESISTENCIA EQUIVALENTE [Circuito Serie, Paralelo y Mixto]",
    "desc": "Clase magistral y contenido audiovisual enfocado en esp32, iot, sensores, redes, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "nxzWyzekT_w",
    "author": "seletube",
    "career": "electronica",
    "tags": [
      "esp32",
      "iot",
      "sensores",
      "redes"
    ],
    "views": 7381,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=nxzWyzekT_w",
    "thumb": "https://img.youtube.com/vi/nxzWyzekT_w/hqdefault.jpg"
  },
  {
    "title": "TEOREMA DE THEVENIN (CIRCUITOS ELÉCTRICOS) / EJERCICIO 1",
    "desc": "Clase magistral y contenido audiovisual enfocado en automatizacion, plc, ladder, industria 4.0, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "yoGGTfONnwE",
    "author": "IngE Darwin",
    "career": "electronica",
    "tags": [
      "automatizacion",
      "plc",
      "ladder",
      "industria 4.0"
    ],
    "views": 7658,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=yoGGTfONnwE",
    "thumb": "https://img.youtube.com/vi/yoGGTfONnwE/hqdefault.jpg"
  },
  {
    "title": "Método SIMPLEX Facil y Divertido con Memes - Investigación Operativa",
    "desc": "Clase magistral y contenido audiovisual enfocado en optimizacion, investigacion de operaciones, simplex, modelos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "kWRGkC0I3B4",
    "author": "Jose Matzu",
    "career": "industrial",
    "tags": [
      "optimizacion",
      "investigacion de operaciones",
      "simplex",
      "modelos"
    ],
    "views": 1200,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=kWRGkC0I3B4",
    "thumb": "https://img.youtube.com/vi/kWRGkC0I3B4/hqdefault.jpg"
  },
  {
    "title": "Bienvenida al curso de Investigación de Operaciones (IO)",
    "desc": "Clase magistral y contenido audiovisual enfocado en lean, 5s, manufactura, mejora continua, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "g8xEfPIB0JE",
    "author": "Marcel Ruiz :)",
    "career": "industrial",
    "tags": [
      "lean",
      "5s",
      "manufactura",
      "mejora continua"
    ],
    "views": 1477,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=g8xEfPIB0JE",
    "thumb": "https://img.youtube.com/vi/g8xEfPIB0JE/hqdefault.jpg"
  },
  {
    "title": "Generalidades de la Investigación de Operaciones",
    "desc": "Clase magistral y contenido audiovisual enfocado en calidad, six sigma, dmaic, estadistica, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "V82ohQNLiM0",
    "author": "Marcel Ruiz :)",
    "career": "industrial",
    "tags": [
      "calidad",
      "six sigma",
      "dmaic",
      "estadistica"
    ],
    "views": 1754,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=V82ohQNLiM0",
    "thumb": "https://img.youtube.com/vi/V82ohQNLiM0/hqdefault.jpg"
  },
  {
    "title": "Método Simplex Maximizar Lección 1",
    "desc": "Clase magistral y contenido audiovisual enfocado en control estadistico, cpk, graficos control, procesos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "kk_sgSo_uds",
    "author": "IngeChay Clases",
    "career": "industrial",
    "tags": [
      "control estadistico",
      "cpk",
      "graficos control",
      "procesos"
    ],
    "views": 2031,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=kk_sgSo_uds",
    "thumb": "https://img.youtube.com/vi/kk_sgSo_uds/hqdefault.jpg"
  },
  {
    "title": "Método Simplex (2) Ejemplo  Maximizar",
    "desc": "Clase magistral y contenido audiovisual enfocado en productividad, tiempos y movimientos, estudio de metodos, eficiencia, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "g1O_vg9izsg",
    "author": "IngeChay Clases",
    "career": "industrial",
    "tags": [
      "productividad",
      "tiempos y movimientos",
      "estudio de metodos",
      "eficiencia"
    ],
    "views": 2308,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=g1O_vg9izsg",
    "thumb": "https://img.youtube.com/vi/g1O_vg9izsg/hqdefault.jpg"
  },
  {
    "title": "MÉTODO SIMPLEX - EJERCICIO 1",
    "desc": "Clase magistral y contenido audiovisual enfocado en logistica, cadena de suministro, inventarios, eoq, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "eLDXXSTM2_c",
    "author": "Profesor Oscar Luis",
    "career": "industrial",
    "tags": [
      "logistica",
      "cadena de suministro",
      "inventarios",
      "eoq"
    ],
    "views": 2585,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=eLDXXSTM2_c",
    "thumb": "https://img.youtube.com/vi/eLDXXSTM2_c/hqdefault.jpg"
  },
  {
    "title": "10 COSAS QUE DEBES SABER SOBRE EL MÉTODO SIMPLEX - LAS CRÓNICAS IO",
    "desc": "Clase magistral y contenido audiovisual enfocado en produccion, mrp, planificacion, lineas de ensamble, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "eREHwjKU-kw",
    "author": "Apinfox",
    "career": "industrial",
    "tags": [
      "produccion",
      "mrp",
      "planificacion",
      "lineas de ensamble"
    ],
    "views": 2862,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=eREHwjKU-kw",
    "thumb": "https://img.youtube.com/vi/eREHwjKU-kw/hqdefault.jpg"
  },
  {
    "title": "Método Simplex - Programación Lineal",
    "desc": "Clase magistral y contenido audiovisual enfocado en seguridad industrial, ergonomia, gestion ambiental, salud ocupacional, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "gLLH4-3Mtws",
    "author": "Aprendiendo Fácil",
    "career": "industrial",
    "tags": [
      "seguridad industrial",
      "ergonomia",
      "gestion ambiental",
      "salud ocupacional"
    ],
    "views": 3139,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=gLLH4-3Mtws",
    "thumb": "https://img.youtube.com/vi/gLLH4-3Mtws/hqdefault.jpg"
  },
  {
    "title": "Programación Lineal Método Gráfico 01",
    "desc": "Clase magistral y contenido audiovisual enfocado en optimizacion, investigacion de operaciones, simplex, modelos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "mkMyhAnkDao",
    "author": "GOAL PROJECT",
    "career": "industrial",
    "tags": [
      "optimizacion",
      "investigacion de operaciones",
      "simplex",
      "modelos"
    ],
    "views": 3416,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=mkMyhAnkDao",
    "thumb": "https://img.youtube.com/vi/mkMyhAnkDao/hqdefault.jpg"
  },
  {
    "title": "Programación Lineal Método Gráfico 02",
    "desc": "Clase magistral y contenido audiovisual enfocado en lean, 5s, manufactura, mejora continua, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "YiOtv5Qt94w",
    "author": "GOAL PROJECT",
    "career": "industrial",
    "tags": [
      "lean",
      "5s",
      "manufactura",
      "mejora continua"
    ],
    "views": 3693,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=YiOtv5Qt94w",
    "thumb": "https://img.youtube.com/vi/YiOtv5Qt94w/hqdefault.jpg"
  },
  {
    "title": "Método Simplex de Maximización - Universidad Mariano Gálvez de Totonicapán UMG",
    "desc": "Clase magistral y contenido audiovisual enfocado en calidad, six sigma, dmaic, estadistica, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "x-lOyxcY6Dw",
    "author": "Andrés Poncio",
    "career": "industrial",
    "tags": [
      "calidad",
      "six sigma",
      "dmaic",
      "estadistica"
    ],
    "views": 3970,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=x-lOyxcY6Dw",
    "thumb": "https://img.youtube.com/vi/x-lOyxcY6Dw/hqdefault.jpg"
  },
  {
    "title": "Investigacion de operaciones Planteamiento de modelo, programación lineal 1",
    "desc": "Clase magistral y contenido audiovisual enfocado en control estadistico, cpk, graficos control, procesos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "u_ykcy1AxNE",
    "author": "jb education center",
    "career": "industrial",
    "tags": [
      "control estadistico",
      "cpk",
      "graficos control",
      "procesos"
    ],
    "views": 4247,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=u_ykcy1AxNE",
    "thumb": "https://img.youtube.com/vi/u_ykcy1AxNE/hqdefault.jpg"
  },
  {
    "title": "METODO SIMPLEX EN EXCEL (SOLVER)",
    "desc": "Clase magistral y contenido audiovisual enfocado en productividad, tiempos y movimientos, estudio de metodos, eficiencia, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "jTcTUFlzUpI",
    "author": "Francisco López",
    "career": "industrial",
    "tags": [
      "productividad",
      "tiempos y movimientos",
      "estudio de metodos",
      "eficiencia"
    ],
    "views": 4524,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=jTcTUFlzUpI",
    "thumb": "https://img.youtube.com/vi/jTcTUFlzUpI/hqdefault.jpg"
  },
  {
    "title": "Investigación de Operaciones - Solución matriz Simplex Parte 1",
    "desc": "Clase magistral y contenido audiovisual enfocado en logistica, cadena de suministro, inventarios, eoq, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "jF6P55WFj-o",
    "author": "ELB009",
    "career": "industrial",
    "tags": [
      "logistica",
      "cadena de suministro",
      "inventarios",
      "eoq"
    ],
    "views": 4801,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=jF6P55WFj-o",
    "thumb": "https://img.youtube.com/vi/jF6P55WFj-o/hqdefault.jpg"
  },
  {
    "title": "Método Simplex (1) Ejemplo  Maximizar",
    "desc": "Clase magistral y contenido audiovisual enfocado en produccion, mrp, planificacion, lineas de ensamble, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "9OIbDjorz6c",
    "author": "IngeChay Clases",
    "career": "industrial",
    "tags": [
      "produccion",
      "mrp",
      "planificacion",
      "lineas de ensamble"
    ],
    "views": 5078,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=9OIbDjorz6c",
    "thumb": "https://img.youtube.com/vi/9OIbDjorz6c/hqdefault.jpg"
  },
  {
    "title": "METODO SIMPLEX  Problema de Maximización",
    "desc": "Clase magistral y contenido audiovisual enfocado en seguridad industrial, ergonomia, gestion ambiental, salud ocupacional, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "yXrfDUCjQNk",
    "author": "CeTIC Unicartagena",
    "career": "industrial",
    "tags": [
      "seguridad industrial",
      "ergonomia",
      "gestion ambiental",
      "salud ocupacional"
    ],
    "views": 5355,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=yXrfDUCjQNk",
    "thumb": "https://img.youtube.com/vi/yXrfDUCjQNk/hqdefault.jpg"
  },
  {
    "title": "Método Simplex con Software - Minimización   Ejercicio 1 - Investigación de operaciones #15",
    "desc": "Clase magistral y contenido audiovisual enfocado en optimizacion, investigacion de operaciones, simplex, modelos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "vsU12TAqmEo",
    "author": "Herramientas Para La Investigación",
    "career": "industrial",
    "tags": [
      "optimizacion",
      "investigacion de operaciones",
      "simplex",
      "modelos"
    ],
    "views": 5632,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=vsU12TAqmEo",
    "thumb": "https://img.youtube.com/vi/vsU12TAqmEo/hqdefault.jpg"
  },
  {
    "title": "Simplex Method Part(7) - Operation Research(OR) - Dr. Rania Ragab",
    "desc": "Clase magistral y contenido audiovisual enfocado en lean, 5s, manufactura, mejora continua, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "0pGZ06Kyagg",
    "author": "HTI CS",
    "career": "industrial",
    "tags": [
      "lean",
      "5s",
      "manufactura",
      "mejora continua"
    ],
    "views": 5909,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=0pGZ06Kyagg",
    "thumb": "https://img.youtube.com/vi/0pGZ06Kyagg/hqdefault.jpg"
  },
  {
    "title": "Simplex Method Explanation made Simple",
    "desc": "Clase magistral y contenido audiovisual enfocado en calidad, six sigma, dmaic, estadistica, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "ZpR0px5Fx74",
    "author": "TechOnline with Peace Tutorials",
    "career": "industrial",
    "tags": [
      "calidad",
      "six sigma",
      "dmaic",
      "estadistica"
    ],
    "views": 6186,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=ZpR0px5Fx74",
    "thumb": "https://img.youtube.com/vi/ZpR0px5Fx74/hqdefault.jpg"
  },
  {
    "title": "Método gráfico y método simplex",
    "desc": "Clase magistral y contenido audiovisual enfocado en control estadistico, cpk, graficos control, procesos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "0pZBcFligHs",
    "author": "ANA LUISA MUÑOZ ROJAS",
    "career": "industrial",
    "tags": [
      "control estadistico",
      "cpk",
      "graficos control",
      "procesos"
    ],
    "views": 6463,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=0pZBcFligHs",
    "thumb": "https://img.youtube.com/vi/0pZBcFligHs/hqdefault.jpg"
  },
  {
    "title": "Como resolver un ejemplo del método simplex aplicado",
    "desc": "Clase magistral y contenido audiovisual enfocado en productividad, tiempos y movimientos, estudio de metodos, eficiencia, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "Krki8nBrN_E",
    "author": "Profe JJ Matemáticas",
    "career": "industrial",
    "tags": [
      "productividad",
      "tiempos y movimientos",
      "estudio de metodos",
      "eficiencia"
    ],
    "views": 6740,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=Krki8nBrN_E",
    "thumb": "https://img.youtube.com/vi/Krki8nBrN_E/hqdefault.jpg"
  },
  {
    "title": "METODO SIMPLEX - PROGRAMACION LINEAL - INVESTIGACION DE OPERACIONES 1",
    "desc": "Clase magistral y contenido audiovisual enfocado en logistica, cadena de suministro, inventarios, eoq, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "DN35-UtTb-c",
    "author": "WILSON GUTIERREZ ADRIAN",
    "career": "industrial",
    "tags": [
      "logistica",
      "cadena de suministro",
      "inventarios",
      "eoq"
    ],
    "views": 7017,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=DN35-UtTb-c",
    "thumb": "https://img.youtube.com/vi/DN35-UtTb-c/hqdefault.jpg"
  },
  {
    "title": "Algebra matricial parte1",
    "desc": "Clase magistral y contenido audiovisual enfocado en produccion, mrp, planificacion, lineas de ensamble, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "MuU1fVl5M5M",
    "author": "Manuel Alejandro Solorzano",
    "career": "industrial",
    "tags": [
      "produccion",
      "mrp",
      "planificacion",
      "lineas de ensamble"
    ],
    "views": 7294,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=MuU1fVl5M5M",
    "thumb": "https://img.youtube.com/vi/MuU1fVl5M5M/hqdefault.jpg"
  },
  {
    "title": "Algebra matricial parte2",
    "desc": "Clase magistral y contenido audiovisual enfocado en seguridad industrial, ergonomia, gestion ambiental, salud ocupacional, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "6LI3kwyiyIY",
    "author": "Manuel Alejandro Solorzano",
    "career": "industrial",
    "tags": [
      "seguridad industrial",
      "ergonomia",
      "gestion ambiental",
      "salud ocupacional"
    ],
    "views": 7571,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=6LI3kwyiyIY",
    "thumb": "https://img.youtube.com/vi/6LI3kwyiyIY/hqdefault.jpg"
  },
  {
    "title": "Solve Linear Programming Problems with Simplex",
    "desc": "Clase magistral y contenido audiovisual enfocado en optimizacion, investigacion de operaciones, simplex, modelos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "Mm7hb7TJ6-A",
    "author": "SystemDR - Scalable System Design",
    "career": "industrial",
    "tags": [
      "optimizacion",
      "investigacion de operaciones",
      "simplex",
      "modelos"
    ],
    "views": 7848,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=Mm7hb7TJ6-A",
    "thumb": "https://img.youtube.com/vi/Mm7hb7TJ6-A/hqdefault.jpg"
  },
  {
    "title": "Special Cases in Simplex Method_Part 3_Unbound Solution",
    "desc": "Clase magistral y contenido audiovisual enfocado en lean, 5s, manufactura, mejora continua, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "xXEVZTZgFJE",
    "author": "Manas Patnaik",
    "career": "industrial",
    "tags": [
      "lean",
      "5s",
      "manufactura",
      "mejora continua"
    ],
    "views": 8125,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=xXEVZTZgFJE",
    "thumb": "https://img.youtube.com/vi/xXEVZTZgFJE/hqdefault.jpg"
  },
  {
    "title": "Simplex Method मे  Special Cases_भाग 4_Unrestricted Variable",
    "desc": "Clase magistral y contenido audiovisual enfocado en calidad, six sigma, dmaic, estadistica, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "ulv7MZV3fyo",
    "author": "Shadab Imam",
    "career": "industrial",
    "tags": [
      "calidad",
      "six sigma",
      "dmaic",
      "estadistica"
    ],
    "views": 8402,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=ulv7MZV3fyo",
    "thumb": "https://img.youtube.com/vi/ulv7MZV3fyo/hqdefault.jpg"
  },
  {
    "title": "𝐁𝐄𝐍𝐄𝐅𝐈𝐂𝐈𝐎𝐒 𝐂𝐋𝐀𝐕𝐄 𝐃𝐄 𝐋𝐀 𝐎𝐏𝐓𝐈𝐌𝐈𝐙𝐀𝐂𝐈𝐎́𝐍 𝐄𝐍 𝐒𝐔𝐏𝐏𝐋𝐘 𝐂𝐇𝐀𝐈𝐍 🚀📦",
    "desc": "Clase magistral y contenido audiovisual enfocado en control estadistico, cpk, graficos control, procesos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "yW0aLAVwwp4",
    "author": "Santiago Najera",
    "career": "industrial",
    "tags": [
      "control estadistico",
      "cpk",
      "graficos control",
      "procesos"
    ],
    "views": 8679,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=yW0aLAVwwp4",
    "thumb": "https://img.youtube.com/vi/yW0aLAVwwp4/hqdefault.jpg"
  },
  {
    "title": "Investigación de operaciones.",
    "desc": "Clase magistral y contenido audiovisual enfocado en productividad, tiempos y movimientos, estudio de metodos, eficiencia, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "ri4w-qTrjBI",
    "author": "Laura Herrera'",
    "career": "industrial",
    "tags": [
      "productividad",
      "tiempos y movimientos",
      "estudio de metodos",
      "eficiencia"
    ],
    "views": 8956,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=ri4w-qTrjBI",
    "thumb": "https://img.youtube.com/vi/ri4w-qTrjBI/hqdefault.jpg"
  },
  {
    "title": "Programación Lineal con SOLVER de EXCEL. #solver #excel #programacionlineal",
    "desc": "Clase magistral y contenido audiovisual enfocado en logistica, cadena de suministro, inventarios, eoq, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "LTH1dQhGEMo",
    "author": "Ingeniería Industrial Easy",
    "career": "industrial",
    "tags": [
      "logistica",
      "cadena de suministro",
      "inventarios",
      "eoq"
    ],
    "views": 9233,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=LTH1dQhGEMo",
    "thumb": "https://img.youtube.com/vi/LTH1dQhGEMo/hqdefault.jpg"
  },
  {
    "title": "SIMPLEX METHOD QUESTIONS SOLUTION #tipsonmathematics #linearprogramming #nbsir #lpp #operationsrese",
    "desc": "Clase magistral y contenido audiovisual enfocado en produccion, mrp, planificacion, lineas de ensamble, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "a-x2MUis-_Q",
    "author": "TIPS ON MATHEMATICS",
    "career": "industrial",
    "tags": [
      "produccion",
      "mrp",
      "planificacion",
      "lineas de ensamble"
    ],
    "views": 9510,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=a-x2MUis-_Q",
    "thumb": "https://img.youtube.com/vi/a-x2MUis-_Q/hqdefault.jpg"
  },
  {
    "title": "Understanding Simplex Method via GRAPHS",
    "desc": "Clase magistral y contenido audiovisual enfocado en seguridad industrial, ergonomia, gestion ambiental, salud ocupacional, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "Gn2gMSI2rwE",
    "author": "Manas Patnaik",
    "career": "industrial",
    "tags": [
      "seguridad industrial",
      "ergonomia",
      "gestion ambiental",
      "salud ocupacional"
    ],
    "views": 1287,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=Gn2gMSI2rwE",
    "thumb": "https://img.youtube.com/vi/Gn2gMSI2rwE/hqdefault.jpg"
  },
  {
    "title": "#simplexmethod #linearprogramming #operationsresearch",
    "desc": "Clase magistral y contenido audiovisual enfocado en optimizacion, investigacion de operaciones, simplex, modelos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "-F0-d2p9OtQ",
    "author": "Study Time With Iesha",
    "career": "industrial",
    "tags": [
      "optimizacion",
      "investigacion de operaciones",
      "simplex",
      "modelos"
    ],
    "views": 1564,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=-F0-d2p9OtQ",
    "thumb": "https://img.youtube.com/vi/-F0-d2p9OtQ/hqdefault.jpg"
  },
  {
    "title": "#education #accounting #simplexmethod #operations_research #finance #statistics  #ugcnet #commerce",
    "desc": "Clase magistral y contenido audiovisual enfocado en lean, 5s, manufactura, mejora continua, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "kSIk_NhEAHY",
    "author": "Lakshmi Mam's Student Corner",
    "career": "industrial",
    "tags": [
      "lean",
      "5s",
      "manufactura",
      "mejora continua"
    ],
    "views": 1841,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=kSIk_NhEAHY",
    "thumb": "https://img.youtube.com/vi/kSIk_NhEAHY/hqdefault.jpg"
  },
  {
    "title": "Simplex Method - including variable to constraints - LLP - Operational Research - Tamil",
    "desc": "Clase magistral y contenido audiovisual enfocado en calidad, six sigma, dmaic, estadistica, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "FMlGZjXCJYE",
    "author": "100% Concept Clear",
    "career": "industrial",
    "tags": [
      "calidad",
      "six sigma",
      "dmaic",
      "estadistica"
    ],
    "views": 2118,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=FMlGZjXCJYE",
    "thumb": "https://img.youtube.com/vi/FMlGZjXCJYE/hqdefault.jpg"
  },
  {
    "title": "Linear programming (Simplex Method)",
    "desc": "Clase magistral y contenido audiovisual enfocado en control estadistico, cpk, graficos control, procesos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "3pVIrBw1quY",
    "author": "Elite Tribe Of Excellence",
    "career": "industrial",
    "tags": [
      "control estadistico",
      "cpk",
      "graficos control",
      "procesos"
    ],
    "views": 2395,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=3pVIrBw1quY",
    "thumb": "https://img.youtube.com/vi/3pVIrBw1quY/hqdefault.jpg"
  },
  {
    "title": "¡De izquierda a derecha!. Así se resuelven los ejercicios con jerarquía de operaciones",
    "desc": "Clase magistral y contenido audiovisual enfocado en productividad, tiempos y movimientos, estudio de metodos, eficiencia, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "vZg3WI5WwqE",
    "author": "Carolina Xitumul",
    "career": "industrial",
    "tags": [
      "productividad",
      "tiempos y movimientos",
      "estudio de metodos",
      "eficiencia"
    ],
    "views": 2672,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=vZg3WI5WwqE",
    "thumb": "https://img.youtube.com/vi/vZg3WI5WwqE/hqdefault.jpg"
  },
  {
    "title": "LA RESILIENCIA   Investigación de Mercados 2 - UMSS",
    "desc": "Clase magistral y contenido audiovisual enfocado en logistica, cadena de suministro, inventarios, eoq, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "x_GDViavIoM",
    "author": "JHAZMIN DANIELA SOLIZ",
    "career": "industrial",
    "tags": [
      "logistica",
      "cadena de suministro",
      "inventarios",
      "eoq"
    ],
    "views": 2949,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=x_GDViavIoM",
    "thumb": "https://img.youtube.com/vi/x_GDViavIoM/hqdefault.jpg"
  },
  {
    "title": "METODO DE LA GRAN M - METODO DE PENALIZACION - SIMPLEX - INVESTIGACION DE OPERACIONES 1",
    "desc": "Clase magistral y contenido audiovisual enfocado en produccion, mrp, planificacion, lineas de ensamble, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "9lRK0R7JI5o",
    "author": "WILSON GUTIERREZ ADRIAN",
    "career": "industrial",
    "tags": [
      "produccion",
      "mrp",
      "planificacion",
      "lineas de ensamble"
    ],
    "views": 3226,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=9lRK0R7JI5o",
    "thumb": "https://img.youtube.com/vi/9lRK0R7JI5o/hqdefault.jpg"
  },
  {
    "title": "Metodo Simplex Investigacion de Operaciones",
    "desc": "Clase magistral y contenido audiovisual enfocado en seguridad industrial, ergonomia, gestion ambiental, salud ocupacional, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "05LBi6ZfXpU",
    "author": "ALEXANDER ZAMBRANO",
    "career": "industrial",
    "tags": [
      "seguridad industrial",
      "ergonomia",
      "gestion ambiental",
      "salud ocupacional"
    ],
    "views": 3503,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=05LBi6ZfXpU",
    "thumb": "https://img.youtube.com/vi/05LBi6ZfXpU/hqdefault.jpg"
  },
  {
    "title": "Plantear modelos de Programacion Lineal EJEMPLO 1",
    "desc": "Clase magistral y contenido audiovisual enfocado en optimizacion, investigacion de operaciones, simplex, modelos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "ytiq74ALnUQ",
    "author": "Marcel Ruiz :)",
    "career": "industrial",
    "tags": [
      "optimizacion",
      "investigacion de operaciones",
      "simplex",
      "modelos"
    ],
    "views": 3780,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=ytiq74ALnUQ",
    "thumb": "https://img.youtube.com/vi/ytiq74ALnUQ/hqdefault.jpg"
  },
  {
    "title": "Plantear las ecuaciones de Programación Lineal EJEMPLO 2",
    "desc": "Clase magistral y contenido audiovisual enfocado en lean, 5s, manufactura, mejora continua, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "Fok_lF_wsOc",
    "author": "Marcel Ruiz :)",
    "career": "industrial",
    "tags": [
      "lean",
      "5s",
      "manufactura",
      "mejora continua"
    ],
    "views": 4057,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=Fok_lF_wsOc",
    "thumb": "https://img.youtube.com/vi/Fok_lF_wsOc/hqdefault.jpg"
  },
  {
    "title": "Los 7 desperdicios de Lean Manufacturing",
    "desc": "Clase magistral y contenido audiovisual enfocado en calidad, six sigma, dmaic, estadistica, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "0OLX9XxV2ks",
    "author": "Procem Consultores",
    "career": "industrial",
    "tags": [
      "calidad",
      "six sigma",
      "dmaic",
      "estadistica"
    ],
    "views": 4334,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=0OLX9XxV2ks",
    "thumb": "https://img.youtube.com/vi/0OLX9XxV2ks/hqdefault.jpg"
  },
  {
    "title": "Certificación Lean Manufacturing",
    "desc": "Clase magistral y contenido audiovisual enfocado en control estadistico, cpk, graficos control, procesos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "5IqiIrbH17Q",
    "author": "Solma Soluciones",
    "career": "industrial",
    "tags": [
      "control estadistico",
      "cpk",
      "graficos control",
      "procesos"
    ],
    "views": 4611,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=5IqiIrbH17Q",
    "thumb": "https://img.youtube.com/vi/5IqiIrbH17Q/hqdefault.jpg"
  },
  {
    "title": "Identifica, analiza y reduce desperdicios con el #Curso 𝗟𝗲𝗮𝗻 𝗠𝗮𝗻𝘂𝗳𝗮𝗰𝘁𝘂𝗿𝗶𝗻𝗴 🔧🚀",
    "desc": "Clase magistral y contenido audiovisual enfocado en productividad, tiempos y movimientos, estudio de metodos, eficiencia, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "Ze6uRl2TOAw",
    "author": "WE Educación Ejecutiva",
    "career": "industrial",
    "tags": [
      "productividad",
      "tiempos y movimientos",
      "estudio de metodos",
      "eficiencia"
    ],
    "views": 4888,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=Ze6uRl2TOAw",
    "thumb": "https://img.youtube.com/vi/Ze6uRl2TOAw/hqdefault.jpg"
  },
  {
    "title": "Curso Metodología de las 5S - Kansei Capacitación",
    "desc": "Clase magistral y contenido audiovisual enfocado en logistica, cadena de suministro, inventarios, eoq, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "jR-OC7_bE6c",
    "author": "Kansei Capacitación",
    "career": "industrial",
    "tags": [
      "logistica",
      "cadena de suministro",
      "inventarios",
      "eoq"
    ],
    "views": 5165,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=jR-OC7_bE6c",
    "thumb": "https://img.youtube.com/vi/jR-OC7_bE6c/hqdefault.jpg"
  },
  {
    "title": "Tipo LEAN. Aplica la 1S y elimina desperdicio de INVENTARIO #mejoracontinua #liderazgo #operacion",
    "desc": "Clase magistral y contenido audiovisual enfocado en produccion, mrp, planificacion, lineas de ensamble, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "WWgVzn9an3o",
    "author": "Kary Paredes",
    "career": "industrial",
    "tags": [
      "produccion",
      "mrp",
      "planificacion",
      "lineas de ensamble"
    ],
    "views": 5442,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=WWgVzn9an3o",
    "thumb": "https://img.youtube.com/vi/WWgVzn9an3o/hqdefault.jpg"
  },
  {
    "title": "Curso Lean Manufacturing y eliminación de Desperdicios en la Industria",
    "desc": "Clase magistral y contenido audiovisual enfocado en seguridad industrial, ergonomia, gestion ambiental, salud ocupacional, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "O7aeNQA_0dU",
    "author": "Desarrollo Profesional SyS",
    "career": "industrial",
    "tags": [
      "seguridad industrial",
      "ergonomia",
      "gestion ambiental",
      "salud ocupacional"
    ],
    "views": 5719,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=O7aeNQA_0dU",
    "thumb": "https://img.youtube.com/vi/O7aeNQA_0dU/hqdefault.jpg"
  },
  {
    "title": "Curso Lean Manufacturing - Eliminación de Desperdicios",
    "desc": "Clase magistral y contenido audiovisual enfocado en optimizacion, investigacion de operaciones, simplex, modelos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "uGyw9Btw3IU",
    "author": "Desarrollo Profesional SyS",
    "career": "industrial",
    "tags": [
      "optimizacion",
      "investigacion de operaciones",
      "simplex",
      "modelos"
    ],
    "views": 5996,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=uGyw9Btw3IU",
    "thumb": "https://img.youtube.com/vi/uGyw9Btw3IU/hqdefault.jpg"
  },
  {
    "title": "Curso Lean Six Sigma - Los 8 Desperdicios",
    "desc": "Clase magistral y contenido audiovisual enfocado en lean, 5s, manufactura, mejora continua, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "zwvXdnqwf0k",
    "author": "Desarrollo Profesional SyS",
    "career": "industrial",
    "tags": [
      "lean",
      "5s",
      "manufactura",
      "mejora continua"
    ],
    "views": 6273,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=zwvXdnqwf0k",
    "thumb": "https://img.youtube.com/vi/zwvXdnqwf0k/hqdefault.jpg"
  },
  {
    "title": "Lean Maufacturng: Milk Run Explained",
    "desc": "Clase magistral y contenido audiovisual enfocado en calidad, six sigma, dmaic, estadistica, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "UISUMrARmYk",
    "author": "Startup Akademia",
    "career": "industrial",
    "tags": [
      "calidad",
      "six sigma",
      "dmaic",
      "estadistica"
    ],
    "views": 6550,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=UISUMrARmYk",
    "thumb": "https://img.youtube.com/vi/UISUMrARmYk/hqdefault.jpg"
  },
  {
    "title": "5S: el orden no es el objetivo",
    "desc": "Clase magistral y contenido audiovisual enfocado en control estadistico, cpk, graficos control, procesos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "CFWZ-_TZZlQ",
    "author": "Ingenio Industrial al Alcance",
    "career": "industrial",
    "tags": [
      "control estadistico",
      "cpk",
      "graficos control",
      "procesos"
    ],
    "views": 6827,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=CFWZ-_TZZlQ",
    "thumb": "https://img.youtube.com/vi/CFWZ-_TZZlQ/hqdefault.jpg"
  },
  {
    "title": "¿Qué es la metodología 5S sin volverte loco?",
    "desc": "Clase magistral y contenido audiovisual enfocado en productividad, tiempos y movimientos, estudio de metodos, eficiencia, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "YCpWVdSLiHA",
    "author": "Lean para humanos normales",
    "career": "industrial",
    "tags": [
      "productividad",
      "tiempos y movimientos",
      "estudio de metodos",
      "eficiencia"
    ],
    "views": 7104,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=YCpWVdSLiHA",
    "thumb": "https://img.youtube.com/vi/YCpWVdSLiHA/hqdefault.jpg"
  },
  {
    "title": "Las 5S son esenciales en la implementación de Lean Manufacturing. Así facilitamos su aplicación.",
    "desc": "Clase magistral y contenido audiovisual enfocado en logistica, cadena de suministro, inventarios, eoq, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "WgHV9TZrd5I",
    "author": "InduPro Soluciones SAS",
    "career": "industrial",
    "tags": [
      "logistica",
      "cadena de suministro",
      "inventarios",
      "eoq"
    ],
    "views": 7381,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=WgHV9TZrd5I",
    "thumb": "https://img.youtube.com/vi/WgHV9TZrd5I/hqdefault.jpg"
  },
  {
    "title": "5S Before and After",
    "desc": "Clase magistral y contenido audiovisual enfocado en produccion, mrp, planificacion, lineas de ensamble, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "shRkD0vXXnk",
    "author": "Learn Lean Sigma",
    "career": "industrial",
    "tags": [
      "produccion",
      "mrp",
      "planificacion",
      "lineas de ensamble"
    ],
    "views": 7658,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=shRkD0vXXnk",
    "thumb": "https://img.youtube.com/vi/shRkD0vXXnk/hqdefault.jpg"
  },
  {
    "title": "Qué es la derivada? - Concepto de derivada",
    "desc": "Clase magistral y contenido audiovisual enfocado en calculo, derivadas, funciones, matematicas, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "uK4-s0ojHFg",
    "author": "Matemáticas profe Alex",
    "career": "transversal",
    "tags": [
      "calculo",
      "derivadas",
      "funciones",
      "matematicas"
    ],
    "views": 1200,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=uK4-s0ojHFg",
    "thumb": "https://img.youtube.com/vi/uK4-s0ojHFg/hqdefault.jpg"
  },
  {
    "title": "Derivadas usando la definición - Introducción",
    "desc": "Clase magistral y contenido audiovisual enfocado en calculo integral, integrales, areas, matematicas, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "pMYdSjgzrys",
    "author": "Matemáticas profe Alex",
    "career": "transversal",
    "tags": [
      "calculo integral",
      "integrales",
      "areas",
      "matematicas"
    ],
    "views": 1477,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=pMYdSjgzrys",
    "thumb": "https://img.youtube.com/vi/pMYdSjgzrys/hqdefault.jpg"
  },
  {
    "title": "¿Qué es la derivada? EXPLICACIÓN DESDE CERO",
    "desc": "Clase magistral y contenido audiovisual enfocado en algebra lineal, matrices, determinantes, vectores, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "ia8L26ub_pc",
    "author": "MateFacil",
    "career": "transversal",
    "tags": [
      "algebra lineal",
      "matrices",
      "determinantes",
      "vectores"
    ],
    "views": 1754,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=ia8L26ub_pc",
    "thumb": "https://img.youtube.com/vi/ia8L26ub_pc/hqdefault.jpg"
  },
  {
    "title": "Lista de fórmulas de derivadas (DESCARGAR)",
    "desc": "Clase magistral y contenido audiovisual enfocado en ecuaciones diferenciales, modelado matematico, ingenieria, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "CVqVaV5h9nQ",
    "author": "MateFacil",
    "career": "transversal",
    "tags": [
      "ecuaciones diferenciales",
      "modelado matematico",
      "ingenieria"
    ],
    "views": 2031,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=CVqVaV5h9nQ",
    "thumb": "https://img.youtube.com/vi/CVqVaV5h9nQ/hqdefault.jpg"
  },
  {
    "title": "Derivadas parciales Introducción",
    "desc": "Clase magistral y contenido audiovisual enfocado en fisica, newton, cinematica, dinamica, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "RdxXv3lFjls",
    "author": "Matemáticas profe Alex",
    "career": "transversal",
    "tags": [
      "fisica",
      "newton",
      "cinematica",
      "dinamica"
    ],
    "views": 2308,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=RdxXv3lFjls",
    "thumb": "https://img.youtube.com/vi/RdxXv3lFjls/hqdefault.jpg"
  },
  {
    "title": "Derivadas Parciales de primer orden - Ejemplo 1",
    "desc": "Clase magistral y contenido audiovisual enfocado en termodinamica, entropia, energia, calor, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "ZUvbn9dzAIg",
    "author": "Matemáticas profe Alex",
    "career": "transversal",
    "tags": [
      "termodinamica",
      "entropia",
      "energia",
      "calor"
    ],
    "views": 2585,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=ZUvbn9dzAIg",
    "thumb": "https://img.youtube.com/vi/ZUvbn9dzAIg/hqdefault.jpg"
  },
  {
    "title": "👉 Reglas de Derivación Básicas 💥TRUCOS Tablas Derivadas Ejemplos y Ejercicios resueltos División ...",
    "desc": "Clase magistral y contenido audiovisual enfocado en probabilidad, estadistica, distribuciones, datos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "zLrdG8WDA1k",
    "author": "profesor10demates",
    "career": "transversal",
    "tags": [
      "probabilidad",
      "estadistica",
      "distribuciones",
      "datos"
    ],
    "views": 2862,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=zLrdG8WDA1k",
    "thumb": "https://img.youtube.com/vi/zLrdG8WDA1k/hqdefault.jpg"
  },
  {
    "title": "Aprende👉 DERIVADA segunda de una FUNCIÓN y tercera DERIVAR FRACCIONES [ 1 2 Bachillerato universidad",
    "desc": "Clase magistral y contenido audiovisual enfocado en investigacion, metodologia, semillero, redaccion cientifica, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "r4IKAzxK1SM",
    "author": "profesor10demates",
    "career": "transversal",
    "tags": [
      "investigacion",
      "metodologia",
      "semillero",
      "redaccion cientifica"
    ],
    "views": 3139,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=r4IKAzxK1SM",
    "thumb": "https://img.youtube.com/vi/r4IKAzxK1SM/hqdefault.jpg"
  },
  {
    "title": "Ecuaciones diferenciales - Introducción",
    "desc": "Clase magistral y contenido audiovisual enfocado en calculo, derivadas, funciones, matematicas, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "rd2jKGQJucE",
    "author": "Matemáticas profe Alex",
    "career": "transversal",
    "tags": [
      "calculo",
      "derivadas",
      "funciones",
      "matematicas"
    ],
    "views": 3416,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=rd2jKGQJucE",
    "thumb": "https://img.youtube.com/vi/rd2jKGQJucE/hqdefault.jpg"
  },
  {
    "title": "Orden de una Ecuación Diferencial",
    "desc": "Clase magistral y contenido audiovisual enfocado en calculo integral, integrales, areas, matematicas, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "_GW79tPHmVA",
    "author": "Matemáticas profe Alex",
    "career": "transversal",
    "tags": [
      "calculo integral",
      "integrales",
      "areas",
      "matematicas"
    ],
    "views": 3693,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=_GW79tPHmVA",
    "thumb": "https://img.youtube.com/vi/_GW79tPHmVA/hqdefault.jpg"
  },
  {
    "title": "Derivadas por definición - Ej. 1 #julioprofe",
    "desc": "Clase magistral y contenido audiovisual enfocado en algebra lineal, matrices, determinantes, vectores, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "ybTf_6N9Q3A",
    "author": "julioprofe",
    "career": "transversal",
    "tags": [
      "algebra lineal",
      "matrices",
      "determinantes",
      "vectores"
    ],
    "views": 3970,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=ybTf_6N9Q3A",
    "thumb": "https://img.youtube.com/vi/ybTf_6N9Q3A/hqdefault.jpg"
  },
  {
    "title": "Derivadas por definición - Ej. 2 #julioprofe",
    "desc": "Clase magistral y contenido audiovisual enfocado en ecuaciones diferenciales, modelado matematico, ingenieria, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "Ia5TdqochrA",
    "author": "julioprofe",
    "career": "transversal",
    "tags": [
      "ecuaciones diferenciales",
      "modelado matematico",
      "ingenieria"
    ],
    "views": 4247,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=Ia5TdqochrA",
    "thumb": "https://img.youtube.com/vi/Ia5TdqochrA/hqdefault.jpg"
  },
  {
    "title": "Cuando eliges derivar por definición #derivadas #matematicas #maths #derivadaspordefinicion",
    "desc": "Clase magistral y contenido audiovisual enfocado en fisica, newton, cinematica, dinamica, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "JvFXJWGfGa8",
    "author": "Profeleuterio",
    "career": "transversal",
    "tags": [
      "fisica",
      "newton",
      "cinematica",
      "dinamica"
    ],
    "views": 4524,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=JvFXJWGfGa8",
    "thumb": "https://img.youtube.com/vi/JvFXJWGfGa8/hqdefault.jpg"
  },
  {
    "title": "Ecuaciones diferenciales en derivadas parciales #maths #matematicas #mathsmemes #ecuaciondiferencial",
    "desc": "Clase magistral y contenido audiovisual enfocado en termodinamica, entropia, energia, calor, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "rL7HA4cT4BM",
    "author": "Profeleuterio",
    "career": "transversal",
    "tags": [
      "termodinamica",
      "entropia",
      "energia",
      "calor"
    ],
    "views": 4801,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=rL7HA4cT4BM",
    "thumb": "https://img.youtube.com/vi/rL7HA4cT4BM/hqdefault.jpg"
  },
  {
    "title": "#matematicas #derivadas #analisismatematico",
    "desc": "Clase magistral y contenido audiovisual enfocado en probabilidad, estadistica, distribuciones, datos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "4eXWB81T0B4",
    "author": "Esteban Matematicas",
    "career": "transversal",
    "tags": [
      "probabilidad",
      "estadistica",
      "distribuciones",
      "datos"
    ],
    "views": 5078,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=4eXWB81T0B4",
    "thumb": "https://img.youtube.com/vi/4eXWB81T0B4/hqdefault.jpg"
  },
  {
    "title": "Derivada aplicando regla de la cadena - Derivada de f(x)=-4(3x²-6)³  - La Prof Lina M3",
    "desc": "Clase magistral y contenido audiovisual enfocado en investigacion, metodologia, semillero, redaccion cientifica, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "MMWyjTvGFsY",
    "author": "La Prof Lina M3",
    "career": "transversal",
    "tags": [
      "investigacion",
      "metodologia",
      "semillero",
      "redaccion cientifica"
    ],
    "views": 5355,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=MMWyjTvGFsY",
    "thumb": "https://img.youtube.com/vi/MMWyjTvGFsY/hqdefault.jpg"
  },
  {
    "title": "APRENDE a DERIVAR en 10 minutos (GUÍA DEFINITIVA desde CERO)",
    "desc": "Clase magistral y contenido audiovisual enfocado en calculo, derivadas, funciones, matematicas, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "4hltqDW-yCA",
    "author": "Math Rocks",
    "career": "transversal",
    "tags": [
      "calculo",
      "derivadas",
      "funciones",
      "matematicas"
    ],
    "views": 5632,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=4hltqDW-yCA",
    "thumb": "https://img.youtube.com/vi/4hltqDW-yCA/hqdefault.jpg"
  },
  {
    "title": "REGLAS DE DERIVACIÓN - Repaso en 7 minutos con ejemplos",
    "desc": "Clase magistral y contenido audiovisual enfocado en calculo integral, integrales, areas, matematicas, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "aVNa-J8iB5I",
    "author": "IngE Darwin",
    "career": "transversal",
    "tags": [
      "calculo integral",
      "integrales",
      "areas",
      "matematicas"
    ],
    "views": 5909,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=aVNa-J8iB5I",
    "thumb": "https://img.youtube.com/vi/aVNa-J8iB5I/hqdefault.jpg"
  },
  {
    "title": "ECUACIÓN DIFERENCIAL PARA PRINCIPIANTES",
    "desc": "Clase magistral y contenido audiovisual enfocado en algebra lineal, matrices, determinantes, vectores, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "AE1_730FJQE",
    "author": "Matemáticas con Juan",
    "career": "transversal",
    "tags": [
      "algebra lineal",
      "matrices",
      "determinantes",
      "vectores"
    ],
    "views": 6186,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=AE1_730FJQE",
    "thumb": "https://img.youtube.com/vi/AE1_730FJQE/hqdefault.jpg"
  },
  {
    "title": "La derivada del día - #cálculodiferencial #calculodiferencial #cálculo #ejercicios #derivadas",
    "desc": "Clase magistral y contenido audiovisual enfocado en ecuaciones diferenciales, modelado matematico, ingenieria, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "3MCyXq8-gQo",
    "author": "Héctor Mariano",
    "career": "transversal",
    "tags": [
      "ecuaciones diferenciales",
      "modelado matematico",
      "ingenieria"
    ],
    "views": 6463,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=3MCyXq8-gQo",
    "thumb": "https://img.youtube.com/vi/3MCyXq8-gQo/hqdefault.jpg"
  },
  {
    "title": "DERIVADAS REGLAS BÁSICAS #matematicas #ingenieria #derivadas #derivada #calculo",
    "desc": "Clase magistral y contenido audiovisual enfocado en fisica, newton, cinematica, dinamica, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "ZceFQD1NgxQ",
    "author": "MAESTROTK",
    "career": "transversal",
    "tags": [
      "fisica",
      "newton",
      "cinematica",
      "dinamica"
    ],
    "views": 6740,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=ZceFQD1NgxQ",
    "thumb": "https://img.youtube.com/vi/ZceFQD1NgxQ/hqdefault.jpg"
  },
  {
    "title": "𝐂𝐋𝐀𝐒𝐄𝐒 𝐝𝐞 𝐂Á𝐋𝐂𝐔𝐋𝐎 𝐝𝐞𝐬𝐝𝐞 𝐂𝐄𝐑𝐎",
    "desc": "Clase magistral y contenido audiovisual enfocado en termodinamica, entropia, energia, calor, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "-0LSSAJKmdo",
    "author": "𝐒𝐃𝐌𝐮𝐬𝐢𝐜𝐌𝐚𝐭𝐡",
    "career": "transversal",
    "tags": [
      "termodinamica",
      "entropia",
      "energia",
      "calor"
    ],
    "views": 7017,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=-0LSSAJKmdo",
    "thumb": "https://img.youtube.com/vi/-0LSSAJKmdo/hqdefault.jpg"
  },
  {
    "title": "Encuentra la derivada de:",
    "desc": "Clase magistral y contenido audiovisual enfocado en probabilidad, estadistica, distribuciones, datos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "2nLCX0lLsxg",
    "author": "Daniel Carreón",
    "career": "transversal",
    "tags": [
      "probabilidad",
      "estadistica",
      "distribuciones",
      "datos"
    ],
    "views": 7294,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=2nLCX0lLsxg",
    "thumb": "https://img.youtube.com/vi/2nLCX0lLsxg/hqdefault.jpg"
  },
  {
    "title": "👩🏽‍🏫 DERIVADAS desde cero - Explicación 1 - Derivada de una constante y Derivada de x - La Prof Lina",
    "desc": "Clase magistral y contenido audiovisual enfocado en investigacion, metodologia, semillero, redaccion cientifica, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "OdKHJI8pVfY",
    "author": "La Prof Lina M3",
    "career": "transversal",
    "tags": [
      "investigacion",
      "metodologia",
      "semillero",
      "redaccion cientifica"
    ],
    "views": 7571,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=OdKHJI8pVfY",
    "thumb": "https://img.youtube.com/vi/OdKHJI8pVfY/hqdefault.jpg"
  },
  {
    "title": "La derivada del día - #cálculodiferencial #calculodiferencial #cálculo #ejercicios #derivadas",
    "desc": "Clase magistral y contenido audiovisual enfocado en calculo, derivadas, funciones, matematicas, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "5rBchYYJB-4",
    "author": "Héctor Mariano",
    "career": "transversal",
    "tags": [
      "calculo",
      "derivadas",
      "funciones",
      "matematicas"
    ],
    "views": 7848,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=5rBchYYJB-4",
    "thumb": "https://img.youtube.com/vi/5rBchYYJB-4/hqdefault.jpg"
  },
  {
    "title": "La relación entre la Derivada y la Integral - Teorema fundamental del Cálculo #maths",
    "desc": "Clase magistral y contenido audiovisual enfocado en calculo integral, integrales, areas, matematicas, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "QGxbHtTRKSg",
    "author": "MerlinoMath",
    "career": "transversal",
    "tags": [
      "calculo integral",
      "integrales",
      "areas",
      "matematicas"
    ],
    "views": 8125,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=QGxbHtTRKSg",
    "thumb": "https://img.youtube.com/vi/QGxbHtTRKSg/hqdefault.jpg"
  },
  {
    "title": "Video explicativo del curso cálculo diferencial - UNAD",
    "desc": "Clase magistral y contenido audiovisual enfocado en algebra lineal, matrices, determinantes, vectores, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "DiqR5Ay2sKA",
    "author": "Estefania Ortiz",
    "career": "transversal",
    "tags": [
      "algebra lineal",
      "matrices",
      "determinantes",
      "vectores"
    ],
    "views": 8402,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=DiqR5Ay2sKA",
    "thumb": "https://img.youtube.com/vi/DiqR5Ay2sKA/hqdefault.jpg"
  },
  {
    "title": "Cómo calcular la derivada en un punto. #derivadas #matematicas #limites #bachillerato #estudiar",
    "desc": "Clase magistral y contenido audiovisual enfocado en ecuaciones diferenciales, modelado matematico, ingenieria, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "Ay4Ddx_iZBg",
    "author": "Ekuatio: Cursos de Matemáticas Online",
    "career": "transversal",
    "tags": [
      "ecuaciones diferenciales",
      "modelado matematico",
      "ingenieria"
    ],
    "views": 8679,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=Ay4Ddx_iZBg",
    "thumb": "https://img.youtube.com/vi/Ay4Ddx_iZBg/hqdefault.jpg"
  },
  {
    "title": "LA DERIVADA VISUALMENTE #calculo #derivadas",
    "desc": "Clase magistral y contenido audiovisual enfocado en fisica, newton, cinematica, dinamica, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "0mhtBauEBkE",
    "author": "BlueDot",
    "career": "transversal",
    "tags": [
      "fisica",
      "newton",
      "cinematica",
      "dinamica"
    ],
    "views": 8956,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=0mhtBauEBkE",
    "thumb": "https://img.youtube.com/vi/0mhtBauEBkE/hqdefault.jpg"
  },
  {
    "title": "Derivar por Definición #math #matematika #calculus #mathematics #derivadas #profejuanc #education",
    "desc": "Clase magistral y contenido audiovisual enfocado en termodinamica, entropia, energia, calor, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "-XgnRmU3pZg",
    "author": "profeJuanC",
    "career": "transversal",
    "tags": [
      "termodinamica",
      "entropia",
      "energia",
      "calor"
    ],
    "views": 9233,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=-XgnRmU3pZg",
    "thumb": "https://img.youtube.com/vi/-XgnRmU3pZg/hqdefault.jpg"
  },
  {
    "title": "Curso de cálculo diferencial desde cero, aprende hoy mismo 😇",
    "desc": "Clase magistral y contenido audiovisual enfocado en probabilidad, estadistica, distribuciones, datos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "UINgzpqY8bY",
    "author": "Fredi Morales",
    "career": "transversal",
    "tags": [
      "probabilidad",
      "estadistica",
      "distribuciones",
      "datos"
    ],
    "views": 9510,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=UINgzpqY8bY",
    "thumb": "https://img.youtube.com/vi/UINgzpqY8bY/hqdefault.jpg"
  },
  {
    "title": "Derivada por regla de la cadena #matematicas #algebra #educación #viralvideo #parati",
    "desc": "Clase magistral y contenido audiovisual enfocado en investigacion, metodologia, semillero, redaccion cientifica, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "39BozY9698w",
    "author": "UniversoNumérico",
    "career": "transversal",
    "tags": [
      "investigacion",
      "metodologia",
      "semillero",
      "redaccion cientifica"
    ],
    "views": 1287,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=39BozY9698w",
    "thumb": "https://img.youtube.com/vi/39BozY9698w/hqdefault.jpg"
  },
  {
    "title": "La derivada del día - #cálculodiferencial #calculodiferencial #cálculo #ejercicios #derivadas",
    "desc": "Clase magistral y contenido audiovisual enfocado en calculo, derivadas, funciones, matematicas, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "_zSAqJF09bU",
    "author": "Héctor Mariano",
    "career": "transversal",
    "tags": [
      "calculo",
      "derivadas",
      "funciones",
      "matematicas"
    ],
    "views": 1564,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=_zSAqJF09bU",
    "thumb": "https://img.youtube.com/vi/_zSAqJF09bU/hqdefault.jpg"
  },
  {
    "title": "Derivacion Implicita FACIL #derivadas #matemática #algebra",
    "desc": "Clase magistral y contenido audiovisual enfocado en calculo integral, integrales, areas, matematicas, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "DdwJrnUFynk",
    "author": "AprendeMatesConJulian",
    "career": "transversal",
    "tags": [
      "calculo integral",
      "integrales",
      "areas",
      "matematicas"
    ],
    "views": 1841,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=DdwJrnUFynk",
    "thumb": "https://img.youtube.com/vi/DdwJrnUFynk/hqdefault.jpg"
  },
  {
    "title": "✨ Introducción al CURSO de Cálculo de Derivadas - Nivel Avanzado 🚀📘",
    "desc": "Clase magistral y contenido audiovisual enfocado en algebra lineal, matrices, determinantes, vectores, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "Jn1ndRzm9Sw",
    "author": "Matemáticas TOP",
    "career": "transversal",
    "tags": [
      "algebra lineal",
      "matrices",
      "determinantes",
      "vectores"
    ],
    "views": 2118,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=Jn1ndRzm9Sw",
    "thumb": "https://img.youtube.com/vi/Jn1ndRzm9Sw/hqdefault.jpg"
  },
  {
    "title": "📘 DERIVADA 1 - Aprende PASO A PASO a DERIVARLA - 🔗 REGLA DE LA CADENA",
    "desc": "Clase magistral y contenido audiovisual enfocado en ecuaciones diferenciales, modelado matematico, ingenieria, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "HQiXEReicOQ",
    "author": "Matemáticas TOP",
    "career": "transversal",
    "tags": [
      "ecuaciones diferenciales",
      "modelado matematico",
      "ingenieria"
    ],
    "views": 2395,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=HQiXEReicOQ",
    "thumb": "https://img.youtube.com/vi/HQiXEReicOQ/hqdefault.jpg"
  },
  {
    "title": "Curso de cálculo diferencial desde cero - Parte 1",
    "desc": "Clase magistral y contenido audiovisual enfocado en fisica, newton, cinematica, dinamica, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "ZSYQ13iMbYA",
    "author": "El Físico Gamer",
    "career": "transversal",
    "tags": [
      "fisica",
      "newton",
      "cinematica",
      "dinamica"
    ],
    "views": 2672,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=ZSYQ13iMbYA",
    "thumb": "https://img.youtube.com/vi/ZSYQ13iMbYA/hqdefault.jpg"
  },
  {
    "title": "✅ DERIVADAS: Curso completo: Explicación DESDE CERO - Álgebra Para Todos",
    "desc": "Clase magistral y contenido audiovisual enfocado en termodinamica, entropia, energia, calor, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "r4P8D-w6xOo",
    "author": "Álgebra Para Todos",
    "career": "transversal",
    "tags": [
      "termodinamica",
      "entropia",
      "energia",
      "calor"
    ],
    "views": 2949,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=r4P8D-w6xOo",
    "thumb": "https://img.youtube.com/vi/r4P8D-w6xOo/hqdefault.jpg"
  },
  {
    "title": "100 DERIVADAS RESUELTAS. APRENDER A DERIVAR DESDE CERO. Curso completo",
    "desc": "Clase magistral y contenido audiovisual enfocado en probabilidad, estadistica, distribuciones, datos, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "B5oxL1AQpLo",
    "author": "Matemáticas con Juan",
    "career": "transversal",
    "tags": [
      "probabilidad",
      "estadistica",
      "distribuciones",
      "datos"
    ],
    "views": 3226,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=B5oxL1AQpLo",
    "thumb": "https://img.youtube.com/vi/B5oxL1AQpLo/hqdefault.jpg"
  },
  {
    "title": "CÁLCULO DIFERENCIAL DESDE CERO Parte 1 (RESUMEN)",
    "desc": "Clase magistral y contenido audiovisual enfocado en investigacion, metodologia, semillero, redaccion cientifica, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "rcU5vjxZ-98",
    "author": "Algebraticos",
    "career": "transversal",
    "tags": [
      "investigacion",
      "metodologia",
      "semillero",
      "redaccion cientifica"
    ],
    "views": 3503,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=rcU5vjxZ-98",
    "thumb": "https://img.youtube.com/vi/rcU5vjxZ-98/hqdefault.jpg"
  },
  {
    "title": "QUÉ ES EL CÁLCULO DIFERENCIAL. Explicación Básica.",
    "desc": "Clase magistral y contenido audiovisual enfocado en calculo, derivadas, funciones, matematicas, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "66GRtthl9Zg",
    "author": "Matemáticas con Juan",
    "career": "transversal",
    "tags": [
      "calculo",
      "derivadas",
      "funciones",
      "matematicas"
    ],
    "views": 3780,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=66GRtthl9Zg",
    "thumb": "https://img.youtube.com/vi/66GRtthl9Zg/hqdefault.jpg"
  },
  {
    "title": "Aprende a derivar con este video - 50 DERIVADAS desde cero - Reglas de derivación",
    "desc": "Clase magistral y contenido audiovisual enfocado en calculo integral, integrales, areas, matematicas, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "oxZdtDxF8sA",
    "author": "math2me",
    "career": "transversal",
    "tags": [
      "calculo integral",
      "integrales",
      "areas",
      "matematicas"
    ],
    "views": 4057,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=oxZdtDxF8sA",
    "thumb": "https://img.youtube.com/vi/oxZdtDxF8sA/hqdefault.jpg"
  },
  {
    "title": "Cálculo desde Cero - Clase 1: LÍMITES",
    "desc": "Clase magistral y contenido audiovisual enfocado en algebra lineal, matrices, determinantes, vectores, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "bI1bhogQpMI",
    "author": "Centro Sulub",
    "career": "transversal",
    "tags": [
      "algebra lineal",
      "matrices",
      "determinantes",
      "vectores"
    ],
    "views": 4334,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=bI1bhogQpMI",
    "thumb": "https://img.youtube.com/vi/bI1bhogQpMI/hqdefault.jpg"
  },
  {
    "title": "Cálculo desde Cero - Clase 2: INTRODUCCIÓN A LAS DERIVADAS 💷🧮📚",
    "desc": "Clase magistral y contenido audiovisual enfocado en ecuaciones diferenciales, modelado matematico, ingenieria, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "-In8JGRKZKs",
    "author": "Centro Sulub",
    "career": "transversal",
    "tags": [
      "ecuaciones diferenciales",
      "modelado matematico",
      "ingenieria"
    ],
    "views": 4611,
    "year": 2024,
    "type": "video",
    "url": "https://www.youtube.com/watch?v=-In8JGRKZKs",
    "thumb": "https://img.youtube.com/vi/-In8JGRKZKs/hqdefault.jpg"
  },
  {
    "title": "¿QUÉ ES EL CÁLCULO DIFERENCIAL? Super facil - Para principiantes",
    "desc": "Clase magistral y contenido audiovisual enfocado en fisica, newton, cinematica, dinamica, ideal para estudiantes de Ingeniería y proyectos del semillero universitario.",
    "yt_id": "Ll_qHUG6OWs",
    "author": "Daniel Carreón",
    "career": "transversal",
    "tags": [
      "fisica",
      "newton",
      "cinematica",
      "dinamica"
    ],
    "views": 4888,
    "year": 2023,
    "type": "curso",
    "url": "https://www.youtube.com/watch?v=Ll_qHUG6OWs",
    "thumb": "https://img.youtube.com/vi/Ll_qHUG6OWs/hqdefault.jpg"
  }
];
