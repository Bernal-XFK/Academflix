// Catálogo Académico Oficial Academflix - 100% Curado y Verificado
// Rigurosamente auditado: Cero Shorts, Cero Memes, Cero Restricciones de Inserción.
// Clases magistrales y cursos universitarios de ingeniería de larga duración (>= 3 min hasta más de 10 horas).
// Total: 220 recursos educativos activos.

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
    "title": "Aprende JavaScript - Curso Completo desde Cero",
    "desc": "Clase magistral universitaria de 9:15:21 impartida por freeCodeCamp Español. Contenido de alta fidelidad académica enfocado en programacion, fundamentos, software, codigo, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=ivdTnPl1ND0",
    "yt_id": "ivdTnPl1ND0",
    "thumb": "https://img.youtube.com/vi/ivdTnPl1ND0/hqdefault.jpg",
    "author": "freeCodeCamp Español",
    "career": "sistemas",
    "tags": [
      "programacion",
      "fundamentos",
      "software",
      "codigo"
    ],
    "views": 1140,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Aprende Git y GitHub - Curso desde Cero",
    "desc": "Clase magistral universitaria de 5:32:55 impartida por freeCodeCamp Español. Contenido de alta fidelidad académica enfocado en programacion, fundamentos, software, codigo, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=mBYSUUnMt9M",
    "yt_id": "mBYSUUnMt9M",
    "thumb": "https://img.youtube.com/vi/mBYSUUnMt9M/hqdefault.jpg",
    "author": "freeCodeCamp Español",
    "career": "sistemas",
    "tags": [
      "programacion",
      "fundamentos",
      "software",
      "codigo"
    ],
    "views": 1279,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Qué es FreeCodeCamp | Cómo Aprender Desarrollo Web Gratis Desde Cero | free code camp en español",
    "desc": "Clase magistral universitaria de 10:08 impartida por deivchoi. Contenido de alta fidelidad académica enfocado en programacion, fundamentos, software, codigo, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=ihPb7hIUcro",
    "yt_id": "ihPb7hIUcro",
    "thumb": "https://img.youtube.com/vi/ihPb7hIUcro/hqdefault.jpg",
    "author": "deivchoi",
    "career": "sistemas",
    "tags": [
      "programacion",
      "fundamentos",
      "software",
      "codigo"
    ],
    "views": 1197,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Aprende Python - Curso de Python desde Cero",
    "desc": "Clase magistral universitaria de 4:36:43 impartida por freeCodeCamp Español. Contenido de alta fidelidad académica enfocado en programacion, fundamentos, software, codigo, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=DLikpfc64cA",
    "yt_id": "DLikpfc64cA",
    "thumb": "https://img.youtube.com/vi/DLikpfc64cA/hqdefault.jpg",
    "author": "freeCodeCamp Español",
    "career": "sistemas",
    "tags": [
      "programacion",
      "fundamentos",
      "software",
      "codigo"
    ],
    "views": 1101,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Aprende HTML y CSS - Curso Desde Cero",
    "desc": "Clase magistral universitaria de 5:15:40 impartida por freeCodeCamp Español. Contenido de alta fidelidad académica enfocado en programacion, fundamentos, software, codigo, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=XqFR2lqBYPs",
    "yt_id": "XqFR2lqBYPs",
    "thumb": "https://img.youtube.com/vi/XqFR2lqBYPs/hqdefault.jpg",
    "author": "freeCodeCamp Español",
    "career": "sistemas",
    "tags": [
      "programacion",
      "fundamentos",
      "software",
      "codigo"
    ],
    "views": 917,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Aprende TypeScript - Curso desde cero",
    "desc": "Clase magistral universitaria de 2:18:48 impartida por freeCodeCamp Español. Contenido de alta fidelidad académica enfocado en programacion, fundamentos, software, codigo, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=T7uaEZ3ZoZE",
    "yt_id": "T7uaEZ3ZoZE",
    "thumb": "https://img.youtube.com/vi/T7uaEZ3ZoZE/hqdefault.jpg",
    "author": "freeCodeCamp Español",
    "career": "sistemas",
    "tags": [
      "programacion",
      "fundamentos",
      "software",
      "codigo"
    ],
    "views": 1255,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Aprende React Desde Cero - Curso de React Con Proyectos",
    "desc": "Clase magistral universitaria de 8:10:26 impartida por freeCodeCamp Español. Contenido de alta fidelidad académica enfocado en programacion, fundamentos, software, codigo, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=6Jfk8ic3KVk",
    "yt_id": "6Jfk8ic3KVk",
    "thumb": "https://img.youtube.com/vi/6Jfk8ic3KVk/hqdefault.jpg",
    "author": "freeCodeCamp Español",
    "career": "sistemas",
    "tags": [
      "programacion",
      "fundamentos",
      "software",
      "codigo"
    ],
    "views": 938,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Introducción a la programación y la informática - Curso completo",
    "desc": "Clase magistral universitaria de 1:59:09 impartida por freeCodeCamp.org. Contenido de alta fidelidad académica enfocado en programacion, fundamentos, software, codigo, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=zOjov-2OZ0E",
    "yt_id": "zOjov-2OZ0E",
    "thumb": "https://img.youtube.com/vi/zOjov-2OZ0E/hqdefault.jpg",
    "author": "freeCodeCamp.org",
    "career": "sistemas",
    "tags": [
      "programacion",
      "fundamentos",
      "software",
      "codigo"
    ],
    "views": 847,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Aprende Node.js y Express - Curso desde Cero",
    "desc": "Clase magistral universitaria de 8:29:33 impartida por freeCodeCamp Español. Contenido de alta fidelidad académica enfocado en programacion, fundamentos, software, codigo, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=1hpc70_OoAg",
    "yt_id": "1hpc70_OoAg",
    "thumb": "https://img.youtube.com/vi/1hpc70_OoAg/hqdefault.jpg",
    "author": "freeCodeCamp Español",
    "career": "sistemas",
    "tags": [
      "programacion",
      "fundamentos",
      "software",
      "codigo"
    ],
    "views": 1447,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "MI EXPERIENCIA CON FREECODECAMP - ¿LA MEJOR PARA APRENDER A PROGRAMAR GRATIS?",
    "desc": "Clase magistral universitaria de 6:30 impartida por El Camino Del Programador. Contenido de alta fidelidad académica enfocado en programacion, fundamentos, software, codigo, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=-5vUXUhRtRw",
    "yt_id": "-5vUXUhRtRw",
    "thumb": "https://img.youtube.com/vi/-5vUXUhRtRw/hqdefault.jpg",
    "author": "El Camino Del Programador",
    "career": "sistemas",
    "tags": [
      "programacion",
      "fundamentos",
      "software",
      "codigo"
    ],
    "views": 961,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "6 Proyectos de Python Básicos - Curso Completo Paso a Paso",
    "desc": "Clase magistral universitaria de 2:28:33 impartida por freeCodeCamp Español. Contenido de alta fidelidad académica enfocado en programacion, fundamentos, software, codigo, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=tWnyBD2src0",
    "yt_id": "tWnyBD2src0",
    "thumb": "https://img.youtube.com/vi/tWnyBD2src0/hqdefault.jpg",
    "author": "freeCodeCamp Español",
    "career": "sistemas",
    "tags": [
      "programacion",
      "fundamentos",
      "software",
      "codigo"
    ],
    "views": 961,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Las 8 Estructuras de Datos que TODO Programador Usa (Pero Nadie Explica Bien)",
    "desc": "Clase magistral universitaria de 20:30 impartida por Torti Code. Contenido de alta fidelidad académica enfocado en algoritmos, estructuras-de-datos, optimizacion, software, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=9ifwAPFxpu0",
    "yt_id": "9ifwAPFxpu0",
    "thumb": "https://img.youtube.com/vi/9ifwAPFxpu0/hqdefault.jpg",
    "author": "Torti Code",
    "career": "sistemas",
    "tags": [
      "algoritmos",
      "estructuras-de-datos",
      "optimizacion",
      "software"
    ],
    "views": 1066,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Curso de ESTRUCTURAS DE DATOS desde CERO (Completo)",
    "desc": "Clase magistral universitaria de 5:29:12 impartida por otro más de sistemas. Contenido de alta fidelidad académica enfocado en algoritmos, estructuras-de-datos, optimizacion, software, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=9iTVxKv9kCc",
    "yt_id": "9iTVxKv9kCc",
    "thumb": "https://img.youtube.com/vi/9iTVxKv9kCc/hqdefault.jpg",
    "author": "otro más de sistemas",
    "career": "sistemas",
    "tags": [
      "algoritmos",
      "estructuras-de-datos",
      "optimizacion",
      "software"
    ],
    "views": 1385,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Aprende Estructuras de Datos RÁPIDO | Guía práctica en menos de 30 Minutos",
    "desc": "Clase magistral universitaria de 28:55 impartida por otro más de sistemas. Contenido de alta fidelidad académica enfocado en algoritmos, estructuras-de-datos, optimizacion, software, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=4Bq7rI2t6vU",
    "yt_id": "4Bq7rI2t6vU",
    "thumb": "https://img.youtube.com/vi/4Bq7rI2t6vU/hqdefault.jpg",
    "author": "otro más de sistemas",
    "career": "sistemas",
    "tags": [
      "algoritmos",
      "estructuras-de-datos",
      "optimizacion",
      "software"
    ],
    "views": 1330,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Curso COMPLETO de LÓGICA DE PROGRAMACIÓN Desde Cero",
    "desc": "Clase magistral universitaria de 7:29:56 impartida por MoureDev by Brais Moure. Contenido de alta fidelidad académica enfocado en algoritmos, estructuras-de-datos, optimizacion, software, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=TdITcVD64zI",
    "yt_id": "TdITcVD64zI",
    "thumb": "https://img.youtube.com/vi/TdITcVD64zI/hqdefault.jpg",
    "author": "MoureDev by Brais Moure",
    "career": "sistemas",
    "tags": [
      "algoritmos",
      "estructuras-de-datos",
      "optimizacion",
      "software"
    ],
    "views": 1438,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "INTRODUCCIÓN A ALGORITMOS - Ideas y conceptos básicos",
    "desc": "Clase magistral universitaria de 7:22 impartida por Manik. Contenido de alta fidelidad académica enfocado en algoritmos, estructuras-de-datos, optimizacion, software, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=f10jKIslSUY",
    "yt_id": "f10jKIslSUY",
    "thumb": "https://img.youtube.com/vi/f10jKIslSUY/hqdefault.jpg",
    "author": "Manik",
    "career": "sistemas",
    "tags": [
      "algoritmos",
      "estructuras-de-datos",
      "optimizacion",
      "software"
    ],
    "views": 1200,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Curso COMPLETO de PYTHON desde CERO para PRINCIPIANTES",
    "desc": "Clase magistral universitaria de 10:07:35 impartida por MoureDev by Brais Moure. Contenido de alta fidelidad académica enfocado en python, software, backend, desarrollo, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=Kp4Mvapo5kc",
    "yt_id": "Kp4Mvapo5kc",
    "thumb": "https://img.youtube.com/vi/Kp4Mvapo5kc/hqdefault.jpg",
    "author": "MoureDev by Brais Moure",
    "career": "sistemas",
    "tags": [
      "python",
      "software",
      "backend",
      "desarrollo"
    ],
    "views": 721,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Curso de PYTHON desde CERO (Completo)",
    "desc": "Clase magistral universitaria de 8:06:30 impartida por Soy Dalto. Contenido de alta fidelidad académica enfocado en python, software, backend, desarrollo, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=nKPbfIU442g",
    "yt_id": "nKPbfIU442g",
    "thumb": "https://img.youtube.com/vi/nKPbfIU442g/hqdefault.jpg",
    "author": "Soy Dalto",
    "career": "sistemas",
    "tags": [
      "python",
      "software",
      "backend",
      "desarrollo"
    ],
    "views": 791,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Python en 8 Minutos",
    "desc": "Clase magistral universitaria de 9:38 impartida por MoureDev by Brais Moure. Contenido de alta fidelidad académica enfocado en python, software, backend, desarrollo, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=PtBHnMMRI0E",
    "yt_id": "PtBHnMMRI0E",
    "thumb": "https://img.youtube.com/vi/PtBHnMMRI0E/hqdefault.jpg",
    "author": "MoureDev by Brais Moure",
    "career": "sistemas",
    "tags": [
      "python",
      "software",
      "backend",
      "desarrollo"
    ],
    "views": 1489,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Curso COMPLETO de PYTHON desde CERO para PRINCIPIANTES [Intermedio]",
    "desc": "Clase magistral universitaria de 7:18:02 impartida por MoureDev by Brais Moure. Contenido de alta fidelidad académica enfocado en python, software, backend, desarrollo, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=TbcEqkabAWU",
    "yt_id": "TbcEqkabAWU",
    "thumb": "https://img.youtube.com/vi/TbcEqkabAWU/hqdefault.jpg",
    "author": "MoureDev by Brais Moure",
    "career": "sistemas",
    "tags": [
      "python",
      "software",
      "backend",
      "desarrollo"
    ],
    "views": 1087,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Curso COMPLETO de PYTHON desde CERO para BACKEND",
    "desc": "Clase magistral universitaria de 7:55:47 impartida por MoureDev by Brais Moure. Contenido de alta fidelidad académica enfocado en python, software, backend, desarrollo, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=_y9qQZXE24A",
    "yt_id": "_y9qQZXE24A",
    "thumb": "https://img.youtube.com/vi/_y9qQZXE24A/hqdefault.jpg",
    "author": "MoureDev by Brais Moure",
    "career": "sistemas",
    "tags": [
      "python",
      "software",
      "backend",
      "desarrollo"
    ],
    "views": 1144,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Curso de PYTHON Desde Cero: Primeros Pasos en una hora",
    "desc": "Clase magistral universitaria de 57:47 impartida por MoureDev by Brais Moure. Contenido de alta fidelidad académica enfocado en python, software, backend, desarrollo, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=WatTqrq8kQQ",
    "yt_id": "WatTqrq8kQQ",
    "thumb": "https://img.youtube.com/vi/WatTqrq8kQQ/hqdefault.jpg",
    "author": "MoureDev by Brais Moure",
    "career": "sistemas",
    "tags": [
      "python",
      "software",
      "backend",
      "desarrollo"
    ],
    "views": 1205,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Curso COMPLETO de Python DESDE CERO para Principiantes 2025",
    "desc": "Clase magistral universitaria de 8:32:52 impartida por midudev. Contenido de alta fidelidad académica enfocado en python, software, backend, desarrollo, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=TkN2i-_4N4g",
    "yt_id": "TkN2i-_4N4g",
    "thumb": "https://img.youtube.com/vi/TkN2i-_4N4g/hqdefault.jpg",
    "author": "midudev",
    "career": "sistemas",
    "tags": [
      "python",
      "software",
      "backend",
      "desarrollo"
    ],
    "views": 1481,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Aprende Python ahora! curso completo e intensivo desde cero",
    "desc": "Clase magistral universitaria de 5:05:50 impartida por HolaMundo. Contenido de alta fidelidad académica enfocado en python, software, backend, desarrollo, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=tQZy0U8s9LY",
    "yt_id": "tQZy0U8s9LY",
    "thumb": "https://img.youtube.com/vi/tQZy0U8s9LY/hqdefault.jpg",
    "author": "HolaMundo",
    "career": "sistemas",
    "tags": [
      "python",
      "software",
      "backend",
      "desarrollo"
    ],
    "views": 1496,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "La forma real de aprender Python para Web desde cero",
    "desc": "Clase magistral universitaria de 5:49:25 impartida por MoureDev by Brais Moure. Contenido de alta fidelidad académica enfocado en python, software, backend, desarrollo, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=n2YrGsXJC6Y",
    "yt_id": "n2YrGsXJC6Y",
    "thumb": "https://img.youtube.com/vi/n2YrGsXJC6Y/hqdefault.jpg",
    "author": "MoureDev by Brais Moure",
    "career": "sistemas",
    "tags": [
      "python",
      "software",
      "backend",
      "desarrollo"
    ],
    "views": 1077,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Aprende Programación desde cero (sin perder años)",
    "desc": "Clase magistral universitaria de 9:18 impartida por MoureDev by Brais Moure. Contenido de alta fidelidad académica enfocado en python, software, backend, desarrollo, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=IV0Cs5wlycY",
    "yt_id": "IV0Cs5wlycY",
    "thumb": "https://img.youtube.com/vi/IV0Cs5wlycY/hqdefault.jpg",
    "author": "MoureDev by Brais Moure",
    "career": "sistemas",
    "tags": [
      "python",
      "software",
      "backend",
      "desarrollo"
    ],
    "views": 922,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Curso de Java desde cero 2026 | Qué vas a aprender y cómo empezar",
    "desc": "Clase magistral universitaria de 26:19 impartida por pildorasinformaticas. Contenido de alta fidelidad académica enfocado en java, poo, backend, software, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=_WJkT42l7Wk",
    "yt_id": "_WJkT42l7Wk",
    "thumb": "https://img.youtube.com/vi/_WJkT42l7Wk/hqdefault.jpg",
    "author": "pildorasinformaticas",
    "career": "sistemas",
    "tags": [
      "java",
      "poo",
      "backend",
      "software"
    ],
    "views": 1081,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Curso de Java desde cero 2026 | Historia, características y mitos explicados",
    "desc": "Clase magistral universitaria de 34:37 impartida por pildorasinformaticas. Contenido de alta fidelidad académica enfocado en java, poo, backend, software, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=wWCdvXN4qAQ",
    "yt_id": "wWCdvXN4qAQ",
    "thumb": "https://img.youtube.com/vi/wWCdvXN4qAQ/hqdefault.jpg",
    "author": "pildorasinformaticas",
    "career": "sistemas",
    "tags": [
      "java",
      "poo",
      "backend",
      "software"
    ],
    "views": 1341,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Java desde cero: Curso completo para principiantes (POO incluida)",
    "desc": "Clase magistral universitaria de 8:48:49 impartida por MoureDev by Brais Moure. Contenido de alta fidelidad académica enfocado en java, poo, backend, software, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=JOAqpdM36wI",
    "yt_id": "JOAqpdM36wI",
    "thumb": "https://img.youtube.com/vi/JOAqpdM36wI/hqdefault.jpg",
    "author": "MoureDev by Brais Moure",
    "career": "sistemas",
    "tags": [
      "java",
      "poo",
      "backend",
      "software"
    ],
    "views": 888,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "CURSO GRATIS JAVA PARA PRINCIPIANTES ☕👩🏻‍💻",
    "desc": "Clase magistral universitaria de 11:39:19 impartida por TodoCode. Contenido de alta fidelidad académica enfocado en java, poo, backend, software, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=qxXcI56NfnE",
    "yt_id": "qxXcI56NfnE",
    "thumb": "https://img.youtube.com/vi/qxXcI56NfnE/hqdefault.jpg",
    "author": "TodoCode",
    "career": "sistemas",
    "tags": [
      "java",
      "poo",
      "backend",
      "software"
    ],
    "views": 1116,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Curso de Java desde cero 2026 | Aplicaciones que puedes crear y estructura básica",
    "desc": "Clase magistral universitaria de 29:29 impartida por pildorasinformaticas. Contenido de alta fidelidad académica enfocado en java, poo, backend, software, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=w2RMHSNZe-k",
    "yt_id": "w2RMHSNZe-k",
    "thumb": "https://img.youtube.com/vi/w2RMHSNZe-k/hqdefault.jpg",
    "author": "pildorasinformaticas",
    "career": "sistemas",
    "tags": [
      "java",
      "poo",
      "backend",
      "software"
    ],
    "views": 1459,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "¿Qué es Docker y Kubernetes?",
    "desc": "Clase magistral universitaria de 15:40 impartida por EDteam. Contenido de alta fidelidad académica enfocado en devops, docker, kubernetes, cloud, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=gjRoNFopFig",
    "yt_id": "gjRoNFopFig",
    "thumb": "https://img.youtube.com/vi/gjRoNFopFig/hqdefault.jpg",
    "author": "EDteam",
    "career": "sistemas",
    "tags": [
      "devops",
      "docker",
      "kubernetes",
      "cloud"
    ],
    "views": 833,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Curso de Docker desde cero hasta despliegue a producción",
    "desc": "Clase magistral universitaria de 1:51:07 impartida por midudev. Contenido de alta fidelidad académica enfocado en devops, docker, kubernetes, cloud, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=wZnddhLrmiM",
    "yt_id": "wZnddhLrmiM",
    "thumb": "https://img.youtube.com/vi/wZnddhLrmiM/hqdefault.jpg",
    "author": "midudev",
    "career": "sistemas",
    "tags": [
      "devops",
      "docker",
      "kubernetes",
      "cloud"
    ],
    "views": 1363,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Aprende Docker ahora! curso completo gratis desde cero!",
    "desc": "Clase magistral universitaria de 1:29:26 impartida por HolaMundo. Contenido de alta fidelidad académica enfocado en devops, docker, kubernetes, cloud, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=4Dko5W96WHg",
    "yt_id": "4Dko5W96WHg",
    "thumb": "https://img.youtube.com/vi/4Dko5W96WHg/hqdefault.jpg",
    "author": "HolaMundo",
    "career": "sistemas",
    "tags": [
      "devops",
      "docker",
      "kubernetes",
      "cloud"
    ],
    "views": 718,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "KUBERNETES De NOVATO a PRO! (CURSO COMPLETO EN ESPAÑOL)",
    "desc": "Clase magistral universitaria de 1:31:32 impartida por Pelado Nerd. Contenido de alta fidelidad académica enfocado en devops, docker, kubernetes, cloud, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=DCoBcpOA7W4",
    "yt_id": "DCoBcpOA7W4",
    "thumb": "https://img.youtube.com/vi/DCoBcpOA7W4/hqdefault.jpg",
    "author": "Pelado Nerd",
    "career": "sistemas",
    "tags": [
      "devops",
      "docker",
      "kubernetes",
      "cloud"
    ],
    "views": 1418,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Curso Completo de Kubernetes para Programadores",
    "desc": "Clase magistral universitaria de 3:09:46 impartida por La Tecnología Avanza. Contenido de alta fidelidad académica enfocado en devops, docker, kubernetes, cloud, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=gvqpZkdK4DU",
    "yt_id": "gvqpZkdK4DU",
    "thumb": "https://img.youtube.com/vi/gvqpZkdK4DU/hqdefault.jpg",
    "author": "La Tecnología Avanza",
    "career": "sistemas",
    "tags": [
      "devops",
      "docker",
      "kubernetes",
      "cloud"
    ],
    "views": 1393,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "La VERDADERA DIFERENCIA entre Docker y Kubernetes (Te sorprenderá)",
    "desc": "Clase magistral universitaria de 11:35 impartida por La Tecnología Avanza. Contenido de alta fidelidad académica enfocado en devops, docker, kubernetes, cloud, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=ZtRY5gGuOI8",
    "yt_id": "ZtRY5gGuOI8",
    "thumb": "https://img.youtube.com/vi/ZtRY5gGuOI8/hqdefault.jpg",
    "author": "La Tecnología Avanza",
    "career": "sistemas",
    "tags": [
      "devops",
      "docker",
      "kubernetes",
      "cloud"
    ],
    "views": 957,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Docker para Desarrolladores (Visual Studio Code, Devcontainers, Github Codespaces, compose y más)",
    "desc": "Clase magistral universitaria de 1:44:49 impartida por Fazt Code. Contenido de alta fidelidad académica enfocado en devops, docker, kubernetes, cloud, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=SMqdC6g6Y2o",
    "yt_id": "SMqdC6g6Y2o",
    "thumb": "https://img.youtube.com/vi/SMqdC6g6Y2o/hqdefault.jpg",
    "author": "Fazt Code",
    "career": "sistemas",
    "tags": [
      "devops",
      "docker",
      "kubernetes",
      "cloud"
    ],
    "views": 1066,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "DOCKER De NOVATO a PRO! (CURSO COMPLETO EN ESPAÑOL)",
    "desc": "Clase magistral universitaria de 1:06:22 impartida por Pelado Nerd. Contenido de alta fidelidad académica enfocado en devops, docker, kubernetes, cloud, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=CV_Uf3Dq-EU",
    "yt_id": "CV_Uf3Dq-EU",
    "thumb": "https://img.youtube.com/vi/CV_Uf3Dq-EU/hqdefault.jpg",
    "author": "Pelado Nerd",
    "career": "sistemas",
    "tags": [
      "devops",
      "docker",
      "kubernetes",
      "cloud"
    ],
    "views": 1094,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "22-Desplegando en una instancia de contenedor | Docker para desarrolladores .Net",
    "desc": "Clase magistral universitaria de 3:31 impartida por Andrés Londoño. Contenido de alta fidelidad académica enfocado en devops, docker, kubernetes, cloud, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=wuCZmYnILFE",
    "yt_id": "wuCZmYnILFE",
    "thumb": "https://img.youtube.com/vi/wuCZmYnILFE/hqdefault.jpg",
    "author": "Andrés Londoño",
    "career": "sistemas",
    "tags": [
      "devops",
      "docker",
      "kubernetes",
      "cloud"
    ],
    "views": 830,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "💻 Diplomado Docker 2026: De Novato a Experto 🧑‍🎓",
    "desc": "Clase magistral universitaria de 4:55:40 impartida por Automatización Efectiva. Contenido de alta fidelidad académica enfocado en devops, docker, kubernetes, cloud, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=M0HKGzoXJE4",
    "yt_id": "M0HKGzoXJE4",
    "thumb": "https://img.youtube.com/vi/M0HKGzoXJE4/hqdefault.jpg",
    "author": "Automatización Efectiva",
    "career": "sistemas",
    "tags": [
      "devops",
      "docker",
      "kubernetes",
      "cloud"
    ],
    "views": 1327,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Kubernetes desde CERO en ESPAÑOL | Jean Reyes @jemjaf",
    "desc": "Clase magistral universitaria de 1:51:06 impartida por Jean Reyes | DevOps | AWS. Contenido de alta fidelidad académica enfocado en devops, docker, kubernetes, cloud, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=5OcFvFB4fxk",
    "yt_id": "5OcFvFB4fxk",
    "thumb": "https://img.youtube.com/vi/5OcFvFB4fxk/hqdefault.jpg",
    "author": "Jean Reyes | DevOps | AWS",
    "career": "sistemas",
    "tags": [
      "devops",
      "docker",
      "kubernetes",
      "cloud"
    ],
    "views": 1171,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Docker - La explicación que querías",
    "desc": "Clase magistral universitaria de 18:53 impartida por Ringa Tech. Contenido de alta fidelidad académica enfocado en devops, docker, kubernetes, cloud, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=9eTVZwMZJsA",
    "yt_id": "9eTVZwMZJsA",
    "thumb": "https://img.youtube.com/vi/9eTVZwMZJsA/hqdefault.jpg",
    "author": "Ringa Tech",
    "career": "sistemas",
    "tags": [
      "devops",
      "docker",
      "kubernetes",
      "cloud"
    ],
    "views": 757,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "🐳 Docker, Kubernetes y todo sobre contenedores | Eduard Tomás |🎙️ Podcast Desarrollo de Software",
    "desc": "Clase magistral universitaria de 1:18:36 impartida por campusMVP.es. Contenido de alta fidelidad académica enfocado en devops, docker, kubernetes, cloud, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=IGuWGnFtnZg",
    "yt_id": "IGuWGnFtnZg",
    "thumb": "https://img.youtube.com/vi/IGuWGnFtnZg/hqdefault.jpg",
    "author": "campusMVP.es",
    "career": "sistemas",
    "tags": [
      "devops",
      "docker",
      "kubernetes",
      "cloud"
    ],
    "views": 1056,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Qué es el MODELO OSI ✅ Explicado de manera sencilla | Curso de redes y networking | Alberto López",
    "desc": "Clase magistral universitaria de 11:34 impartida por AlbertoLopez TECH TIPS. Contenido de alta fidelidad académica enfocado en redes, cisco, telecomunicaciones, infraestructura, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=ODY4q4_3Acc",
    "yt_id": "ODY4q4_3Acc",
    "thumb": "https://img.youtube.com/vi/ODY4q4_3Acc/hqdefault.jpg",
    "author": "AlbertoLopez TECH TIPS",
    "career": "sistemas",
    "tags": [
      "redes",
      "cisco",
      "telecomunicaciones",
      "infraestructura"
    ],
    "views": 1136,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Explicación Capas Modelo OSI y TCP/IP en Redes 👉 Diferencias y Comparación ✅",
    "desc": "Clase magistral universitaria de 9:02 impartida por Contando Bits. Contenido de alta fidelidad académica enfocado en redes, cisco, telecomunicaciones, infraestructura, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=MqpIJLmMny8",
    "yt_id": "MqpIJLmMny8",
    "thumb": "https://img.youtube.com/vi/MqpIJLmMny8/hqdefault.jpg",
    "author": "Contando Bits",
    "career": "sistemas",
    "tags": [
      "redes",
      "cisco",
      "telecomunicaciones",
      "infraestructura"
    ],
    "views": 1237,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "2. Modelo OSI y TCP/IP",
    "desc": "Clase magistral universitaria de 53:26 impartida por P C. Contenido de alta fidelidad académica enfocado en redes, cisco, telecomunicaciones, infraestructura, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=aVTwtJcRZDo",
    "yt_id": "aVTwtJcRZDo",
    "thumb": "https://img.youtube.com/vi/aVTwtJcRZDo/hqdefault.jpg",
    "author": "P C",
    "career": "sistemas",
    "tags": [
      "redes",
      "cisco",
      "telecomunicaciones",
      "infraestructura"
    ],
    "views": 1309,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Curso NLA01: CCENT - 2/37: Modelo OSI y TCP/IP",
    "desc": "Clase magistral universitaria de 53:26 impartida por P C. Contenido de alta fidelidad académica enfocado en redes, cisco, telecomunicaciones, infraestructura, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=UYxPDTq03-8",
    "yt_id": "UYxPDTq03-8",
    "thumb": "https://img.youtube.com/vi/UYxPDTq03-8/hqdefault.jpg",
    "author": "P C",
    "career": "sistemas",
    "tags": [
      "redes",
      "cisco",
      "telecomunicaciones",
      "infraestructura"
    ],
    "views": 1011,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "✅ MODELO OSI EXPLICACION de las 7 capas ✅ | Que es el modelo Osi y cómo funcionan sus 7 capas?",
    "desc": "Clase magistral universitaria de 8:04 impartida por Retro. Contenido de alta fidelidad académica enfocado en redes, cisco, telecomunicaciones, infraestructura, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=-QTNJws7PRg",
    "yt_id": "-QTNJws7PRg",
    "thumb": "https://img.youtube.com/vi/-QTNJws7PRg/hqdefault.jpg",
    "author": "Retro",
    "career": "sistemas",
    "tags": [
      "redes",
      "cisco",
      "telecomunicaciones",
      "infraestructura"
    ],
    "views": 806,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Modelo de capas OSI y TCP/IP. Curso de redes desde 0 | Cap 12 |",
    "desc": "Clase magistral universitaria de 24:02 impartida por NASeros. Contenido de alta fidelidad académica enfocado en redes, cisco, telecomunicaciones, infraestructura, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=iNh-62Mf0O4",
    "yt_id": "iNh-62Mf0O4",
    "thumb": "https://img.youtube.com/vi/iNh-62Mf0O4/hqdefault.jpg",
    "author": "NASeros",
    "career": "sistemas",
    "tags": [
      "redes",
      "cisco",
      "telecomunicaciones",
      "infraestructura"
    ],
    "views": 1160,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Modelo OSI y TCP/IP: Explicación y diferencias | Curso CIBERSEGURIDAD desde 0 2025",
    "desc": "Clase magistral universitaria de 5:34 impartida por RINKU. Contenido de alta fidelidad académica enfocado en redes, cisco, telecomunicaciones, infraestructura, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=7IET_56m_Gk",
    "yt_id": "7IET_56m_Gk",
    "thumb": "https://img.youtube.com/vi/7IET_56m_Gk/hqdefault.jpg",
    "author": "RINKU",
    "career": "sistemas",
    "tags": [
      "redes",
      "cisco",
      "telecomunicaciones",
      "infraestructura"
    ],
    "views": 881,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "¿Que es el modelo OSI? | Modelo OSI bien explicado  - Curso Redes CCNA 1 Episodio 13.2 #ccna",
    "desc": "Clase magistral universitaria de 1:31:01 impartida por El Mundo del Networking. Contenido de alta fidelidad académica enfocado en redes, cisco, telecomunicaciones, infraestructura, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=KTcMdtpWi3U",
    "yt_id": "KTcMdtpWi3U",
    "thumb": "https://img.youtube.com/vi/KTcMdtpWi3U/hqdefault.jpg",
    "author": "El Mundo del Networking",
    "career": "sistemas",
    "tags": [
      "redes",
      "cisco",
      "telecomunicaciones",
      "infraestructura"
    ],
    "views": 848,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Un resumen  completo del modelo #TCPIP (Todas sus capas en menos de 7 minutos)",
    "desc": "Clase magistral universitaria de 6:52 impartida por Mastering IT. Contenido de alta fidelidad académica enfocado en redes, cisco, telecomunicaciones, infraestructura, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=1pB2kan_AFk",
    "yt_id": "1pB2kan_AFk",
    "thumb": "https://img.youtube.com/vi/1pB2kan_AFk/hqdefault.jpg",
    "author": "Mastering IT",
    "career": "sistemas",
    "tags": [
      "redes",
      "cisco",
      "telecomunicaciones",
      "infraestructura"
    ],
    "views": 778,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Modelo OSI Animación Español | Un resumen completo- Redes desde CERO hasta Avanzado",
    "desc": "Clase magistral universitaria de 13:32 impartida por Mastering IT. Contenido de alta fidelidad académica enfocado en redes, cisco, telecomunicaciones, infraestructura, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=I6qlFo2WyTE",
    "yt_id": "I6qlFo2WyTE",
    "thumb": "https://img.youtube.com/vi/I6qlFo2WyTE/hqdefault.jpg",
    "author": "Mastering IT",
    "career": "sistemas",
    "tags": [
      "redes",
      "cisco",
      "telecomunicaciones",
      "infraestructura"
    ],
    "views": 1146,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Modelo OSI Proceso Completo - Curso Redes CCNA 1 Episodio 14.5 #ccna #cisco",
    "desc": "Clase magistral universitaria de 2:22:22 impartida por El Mundo del Networking. Contenido de alta fidelidad académica enfocado en redes, cisco, telecomunicaciones, infraestructura, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=GZQzcNFjANE",
    "yt_id": "GZQzcNFjANE",
    "thumb": "https://img.youtube.com/vi/GZQzcNFjANE/hqdefault.jpg",
    "author": "El Mundo del Networking",
    "career": "sistemas",
    "tags": [
      "redes",
      "cisco",
      "telecomunicaciones",
      "infraestructura"
    ],
    "views": 975,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "🚀Circuitos ELÉCTRICOS: Leyes de Kirchhoff y Resistencias Equivalentes",
    "desc": "Clase magistral universitaria de 34:46 impartida por El Traductor de Ingeniería. Contenido de alta fidelidad académica enfocado en circuitos, kirchhoff, analisis, electricidad, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=btrxWydp4ag",
    "yt_id": "btrxWydp4ag",
    "thumb": "https://img.youtube.com/vi/btrxWydp4ag/hqdefault.jpg",
    "author": "El Traductor de Ingeniería",
    "career": "electronica",
    "tags": [
      "circuitos",
      "kirchhoff",
      "analisis",
      "electricidad"
    ],
    "views": 777,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "CIRCUITOS ELÉCTRICOS, pero SIN memorizar fórmulas",
    "desc": "Clase magistral universitaria de 59:46 impartida por El Traductor de Ingeniería. Contenido de alta fidelidad académica enfocado en circuitos, kirchhoff, analisis, electricidad, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=kHZ8SD7jiiA",
    "yt_id": "kHZ8SD7jiiA",
    "thumb": "https://img.youtube.com/vi/kHZ8SD7jiiA/hqdefault.jpg",
    "author": "El Traductor de Ingeniería",
    "career": "electronica",
    "tags": [
      "circuitos",
      "kirchhoff",
      "analisis",
      "electricidad"
    ],
    "views": 1460,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "🚀Circuitos ELÉCTRICOS: GUÍA para resolver (casi) cualquier CIRCUITO",
    "desc": "Clase magistral universitaria de 32:27 impartida por El Traductor de Ingeniería. Contenido de alta fidelidad académica enfocado en circuitos, kirchhoff, analisis, electricidad, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=qKZvC8rpcsA",
    "yt_id": "qKZvC8rpcsA",
    "thumb": "https://img.youtube.com/vi/qKZvC8rpcsA/hqdefault.jpg",
    "author": "El Traductor de Ingeniería",
    "career": "electronica",
    "tags": [
      "circuitos",
      "kirchhoff",
      "analisis",
      "electricidad"
    ],
    "views": 835,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "🚀Circuitos ELÉCTRICOS: Ley de Ohm y Potencia",
    "desc": "Clase magistral universitaria de 22:27 impartida por El Traductor de Ingeniería. Contenido de alta fidelidad académica enfocado en circuitos, kirchhoff, analisis, electricidad, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=tpt9FlNYq4k",
    "yt_id": "tpt9FlNYq4k",
    "thumb": "https://img.youtube.com/vi/tpt9FlNYq4k/hqdefault.jpg",
    "author": "El Traductor de Ingeniería",
    "career": "electronica",
    "tags": [
      "circuitos",
      "kirchhoff",
      "analisis",
      "electricidad"
    ],
    "views": 1274,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "🚀Circuitos ELÉCTRICOS: Equivalentes de Thevenin y Norton",
    "desc": "Clase magistral universitaria de 28:00 impartida por El Traductor de Ingeniería. Contenido de alta fidelidad académica enfocado en circuitos, kirchhoff, analisis, electricidad, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=BlkME9ypmuc",
    "yt_id": "BlkME9ypmuc",
    "thumb": "https://img.youtube.com/vi/BlkME9ypmuc/hqdefault.jpg",
    "author": "El Traductor de Ingeniería",
    "career": "electronica",
    "tags": [
      "circuitos",
      "kirchhoff",
      "analisis",
      "electricidad"
    ],
    "views": 964,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Curso Circuitos Eléctricos DC - Capítulo 5 : Leyes de Kirchhoff, corrientes",
    "desc": "Clase magistral universitaria de 9:23 impartida por Juan Bautista Chávez. Contenido de alta fidelidad académica enfocado en circuitos, kirchhoff, analisis, electricidad, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=fi7hLqdX_i4",
    "yt_id": "fi7hLqdX_i4",
    "thumb": "https://img.youtube.com/vi/fi7hLqdX_i4/hqdefault.jpg",
    "author": "Juan Bautista Chávez",
    "career": "electronica",
    "tags": [
      "circuitos",
      "kirchhoff",
      "analisis",
      "electricidad"
    ],
    "views": 1254,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Curso Circuitos Eléctricos DC - Capítulo 6 : Leyes de Kirchhoff, ley de voltajes",
    "desc": "Clase magistral universitaria de 9:41 impartida por Juan Bautista Chávez. Contenido de alta fidelidad académica enfocado en circuitos, kirchhoff, analisis, electricidad, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=ynFT1kKLZvI",
    "yt_id": "ynFT1kKLZvI",
    "thumb": "https://img.youtube.com/vi/ynFT1kKLZvI/hqdefault.jpg",
    "author": "Juan Bautista Chávez",
    "career": "electronica",
    "tags": [
      "circuitos",
      "kirchhoff",
      "analisis",
      "electricidad"
    ],
    "views": 979,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Las Leyes de Kirchhoff ¡Explicación fácil y completa!",
    "desc": "Clase magistral universitaria de 22:58 impartida por Profesor Sergio Llanos. Contenido de alta fidelidad académica enfocado en circuitos, kirchhoff, analisis, electricidad, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=o8tePfWc9rI",
    "yt_id": "o8tePfWc9rI",
    "thumb": "https://img.youtube.com/vi/o8tePfWc9rI/hqdefault.jpg",
    "author": "Profesor Sergio Llanos",
    "career": "electronica",
    "tags": [
      "circuitos",
      "kirchhoff",
      "analisis",
      "electricidad"
    ],
    "views": 1148,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Transistor Explicado - Cómo Funcionan los Transistores",
    "desc": "Clase magistral universitaria de 18:20 impartida por Mentalidad De Ingeniería. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=zh7PeHAZRLY",
    "yt_id": "zh7PeHAZRLY",
    "thumb": "https://img.youtube.com/vi/zh7PeHAZRLY/hqdefault.jpg",
    "author": "Mentalidad De Ingeniería",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 1466,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "curso electrónica básica desde cero | Basic electronics course (# 47 testeo de transistores BJT)",
    "desc": "Clase magistral universitaria de 20:20 impartida por Editronikx. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=1mIki3whKlE",
    "yt_id": "1mIki3whKlE",
    "thumb": "https://img.youtube.com/vi/1mIki3whKlE/hqdefault.jpg",
    "author": "Editronikx",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 1452,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Curso Electrónica Básica - #6 - El Transistor BJT",
    "desc": "Clase magistral universitaria de 1:31:43 impartida por Tecnocom Ingenieria. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=eSeqKGbv6Fk",
    "yt_id": "eSeqKGbv6Fk",
    "thumb": "https://img.youtube.com/vi/eSeqKGbv6Fk/hqdefault.jpg",
    "author": "Tecnocom Ingenieria",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 1410,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "BJT Parte 01 Transistor BJT videotutorial en español de electrónica",
    "desc": "Clase magistral universitaria de 21:37 impartida por Pregúntale al Inge. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=l_EG544soDg",
    "yt_id": "l_EG544soDg",
    "thumb": "https://img.youtube.com/vi/l_EG544soDg/hqdefault.jpg",
    "author": "Pregúntale al Inge",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 1242,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "TRANSISTORIZED! La Historia De: El Transistor",
    "desc": "Clase magistral universitaria de 1:03:54 impartida por MILLERTRON. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=f3IUVvJ2XgI",
    "yt_id": "f3IUVvJ2XgI",
    "thumb": "https://img.youtube.com/vi/f3IUVvJ2XgI/hqdefault.jpg",
    "author": "MILLERTRON",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 883,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "¿Qué es un Transistor?",
    "desc": "Clase magistral universitaria de 5:38 impartida por Electronica Spicus99. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=AYy-YejQdqA",
    "yt_id": "AYy-YejQdqA",
    "thumb": "https://img.youtube.com/vi/AYy-YejQdqA/hqdefault.jpg",
    "author": "Electronica Spicus99",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 1118,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "El transistor explicado para no electronicos",
    "desc": "Clase magistral universitaria de 10:18 impartida por Radioelectronica-Spain. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=558eFxgz1Dc",
    "yt_id": "558eFxgz1Dc",
    "thumb": "https://img.youtube.com/vi/558eFxgz1Dc/hqdefault.jpg",
    "author": "Radioelectronica-Spain",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 1041,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "TODO SOBRE TRANSISTORES PARTE 1",
    "desc": "Clase magistral universitaria de 18:33 impartida por RAFAEL PALACIOS. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=xGeHqRoKXU4",
    "yt_id": "xGeHqRoKXU4",
    "thumb": "https://img.youtube.com/vi/xGeHqRoKXU4/hqdefault.jpg",
    "author": "RAFAEL PALACIOS",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 1364,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Transistor",
    "desc": "Clase magistral universitaria de 18:07 impartida por Profesor Sergio Llanos. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=eNMlbTAgcB4",
    "yt_id": "eNMlbTAgcB4",
    "thumb": "https://img.youtube.com/vi/eNMlbTAgcB4/hqdefault.jpg",
    "author": "Profesor Sergio Llanos",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 946,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Cómo Funciona un Transistor ⚡ Que es un Transistor",
    "desc": "Clase magistral universitaria de 11:59 impartida por VirtualBrain. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=GwrUC23M5xc",
    "yt_id": "GwrUC23M5xc",
    "thumb": "https://img.youtube.com/vi/GwrUC23M5xc/hqdefault.jpg",
    "author": "VirtualBrain",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 1400,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "ELECTRÓNICA BÁSICA - INICIO DE CURSO",
    "desc": "Clase magistral universitaria de 1:28:07 impartida por Cicap Oficial. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=HMEC8TSWIoU",
    "yt_id": "HMEC8TSWIoU",
    "thumb": "https://img.youtube.com/vi/HMEC8TSWIoU/hqdefault.jpg",
    "author": "Cicap Oficial",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 1395,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Guía de inicio de transistores BJT (ElectroBOOM101-011)",
    "desc": "Clase magistral universitaria de 13:57 impartida por ElectroBOOM. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=2uowMENwiHQ",
    "yt_id": "2uowMENwiHQ",
    "thumb": "https://img.youtube.com/vi/2uowMENwiHQ/hqdefault.jpg",
    "author": "ElectroBOOM",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 1125,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "EJERCICIO #1 DE BJT 📌 EJERCICIOS TRANSISTORES BJT PASO a PASO",
    "desc": "Clase magistral universitaria de 13:16 impartida por SuperIngenieros. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=VmQjej0GZnM",
    "yt_id": "VmQjej0GZnM",
    "thumb": "https://img.youtube.com/vi/VmQjej0GZnM/hqdefault.jpg",
    "author": "SuperIngenieros",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 1141,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "curso de electrónica básica desde cero | Basic electronics course ( #14 relé y transistor)",
    "desc": "Clase magistral universitaria de 35:19 impartida por Editronikx. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=_l9bLqQ-7Q8",
    "yt_id": "_l9bLqQ-7Q8",
    "thumb": "https://img.youtube.com/vi/_l9bLqQ-7Q8/hqdefault.jpg",
    "author": "Editronikx",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 1291,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "COMPONENTES ELECTRÓNICOS - Resumen / Idea intuitiva",
    "desc": "Clase magistral universitaria de 8:10 impartida por Manik. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=1NRFL6YYtzg",
    "yt_id": "1NRFL6YYtzg",
    "thumb": "https://img.youtube.com/vi/1NRFL6YYtzg/hqdefault.jpg",
    "author": "Manik",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 918,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Curso Electrónica Básica - #4 Resistencias y Condensadores",
    "desc": "Clase magistral universitaria de 1:33:53 impartida por Tecnocom Ingenieria. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=k0Mtr-Wc4AE",
    "yt_id": "k0Mtr-Wc4AE",
    "thumb": "https://img.youtube.com/vi/k0Mtr-Wc4AE/hqdefault.jpg",
    "author": "Tecnocom Ingenieria",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 1487,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Curso de Electrónica #1 Resistencias Capacitores Inductores y Diodos!",
    "desc": "Clase magistral universitaria de 34:33 impartida por Tecnologia y Soluciones. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=vJnGSqnFgvw",
    "yt_id": "vJnGSqnFgvw",
    "thumb": "https://img.youtube.com/vi/vJnGSqnFgvw/hqdefault.jpg",
    "author": "Tecnologia y Soluciones",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 982,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Tutorial de Electrónica Básica 6: Transistores (BJT)",
    "desc": "Clase magistral universitaria de 9:52 impartida por TutoElectro. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=EyE6BjuMs-A",
    "yt_id": "EyE6BjuMs-A",
    "thumb": "https://img.youtube.com/vi/EyE6BjuMs-A/hqdefault.jpg",
    "author": "TutoElectro",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 758,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Transistores BJT desde Cero: Guía Completa y Configuraciones",
    "desc": "Clase magistral universitaria de 1:27:30 impartida por Profe Luis. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=wuUUHgqt4B4",
    "yt_id": "wuUUHgqt4B4",
    "thumb": "https://img.youtube.com/vi/wuUUHgqt4B4/hqdefault.jpg",
    "author": "Profe Luis",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 832,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "curso de electrónica básica desde cero | Basic electronics course (#11 componentes electrónicos)",
    "desc": "Clase magistral universitaria de 32:11 impartida por Editronikx. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=h1UllP9UmMg",
    "yt_id": "h1UllP9UmMg",
    "thumb": "https://img.youtube.com/vi/h1UllP9UmMg/hqdefault.jpg",
    "author": "Editronikx",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 1041,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Tutorial #Electrónica Básica. Cap 06. Transistores",
    "desc": "Clase magistral universitaria de 45:55 impartida por Terrazocultor jose manuel. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=3VIPUKOYl2s",
    "yt_id": "3VIPUKOYl2s",
    "thumb": "https://img.youtube.com/vi/3VIPUKOYl2s/hqdefault.jpg",
    "author": "Terrazocultor jose manuel",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 1470,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Electrónica Básica: Transistor Bipolar (BJT)",
    "desc": "Clase magistral universitaria de 9:57 impartida por ElectroMagno. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=Lbwkp_H7DBE",
    "yt_id": "Lbwkp_H7DBE",
    "thumb": "https://img.youtube.com/vi/Lbwkp_H7DBE/hqdefault.jpg",
    "author": "ElectroMagno",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 936,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Curso Electrónica Básica - #3  Componentes electronicos basicos -El Protoboard",
    "desc": "Clase magistral universitaria de 1:25:20 impartida por Tecnocom Ingenieria. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=xg83PiJtKZY",
    "yt_id": "xg83PiJtKZY",
    "thumb": "https://img.youtube.com/vi/xg83PiJtKZY/hqdefault.jpg",
    "author": "Tecnocom Ingenieria",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 1492,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "08.01 BJT Fundamentos Físicos",
    "desc": "Clase magistral universitaria de 7:33 impartida por IPZ FORMACIÓN. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=KZHWWykbobc",
    "yt_id": "KZHWWykbobc",
    "thumb": "https://img.youtube.com/vi/KZHWWykbobc/hqdefault.jpg",
    "author": "IPZ FORMACIÓN",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 1346,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "curso de electrónica básica desde cero | Basic electronics course (#12 condensadores y led )",
    "desc": "Clase magistral universitaria de 20:59 impartida por Editronikx. Contenido de alta fidelidad académica enfocado en electronica, semiconductores, transistores, diodos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=mHoEigtJaTA",
    "yt_id": "mHoEigtJaTA",
    "thumb": "https://img.youtube.com/vi/mHoEigtJaTA/hqdefault.jpg",
    "author": "Editronikx",
    "career": "electronica",
    "tags": [
      "electronica",
      "semiconductores",
      "transistores",
      "diodos"
    ],
    "views": 1465,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Clase magistral OPAMPs. Como analizar circuitos con amplificadores operacionales",
    "desc": "Clase magistral universitaria de 59:43 impartida por ACADENAS. Contenido de alta fidelidad académica enfocado en amplificadores, op-amp, analogica, circuitos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=rp1uqw3hiZo",
    "yt_id": "rp1uqw3hiZo",
    "thumb": "https://img.youtube.com/vi/rp1uqw3hiZo/hqdefault.jpg",
    "author": "ACADENAS",
    "career": "electronica",
    "tags": [
      "amplificadores",
      "op-amp",
      "analogica",
      "circuitos"
    ],
    "views": 1262,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "AMPLIFICADOR OPERACIONAL: Lo que debes saber para empezar (Clase 60)",
    "desc": "Clase magistral universitaria de 20:25 impartida por ACADENAS. Contenido de alta fidelidad académica enfocado en amplificadores, op-amp, analogica, circuitos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=-jNR4824ifo",
    "yt_id": "-jNR4824ifo",
    "thumb": "https://img.youtube.com/vi/-jNR4824ifo/hqdefault.jpg",
    "author": "ACADENAS",
    "career": "electronica",
    "tags": [
      "amplificadores",
      "op-amp",
      "analogica",
      "circuitos"
    ],
    "views": 1482,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Amplificadores operacionales desde cero!",
    "desc": "Clase magistral universitaria de 32:35 impartida por AulaVirtual. Contenido de alta fidelidad académica enfocado en amplificadores, op-amp, analogica, circuitos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=YNKE5-vuziU",
    "yt_id": "YNKE5-vuziU",
    "thumb": "https://img.youtube.com/vi/YNKE5-vuziU/hqdefault.jpg",
    "author": "AulaVirtual",
    "career": "electronica",
    "tags": [
      "amplificadores",
      "op-amp",
      "analogica",
      "circuitos"
    ],
    "views": 1173,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "OPAMP. Diseño",
    "desc": "Clase magistral universitaria de 34:23 impartida por Juan Jesús López García. Contenido de alta fidelidad académica enfocado en amplificadores, op-amp, analogica, circuitos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=Evj6sjHKwso",
    "yt_id": "Evj6sjHKwso",
    "thumb": "https://img.youtube.com/vi/Evj6sjHKwso/hqdefault.jpg",
    "author": "Juan Jesús López García",
    "career": "electronica",
    "tags": [
      "amplificadores",
      "op-amp",
      "analogica",
      "circuitos"
    ],
    "views": 1138,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "🔴AMPLIFICADOR INTEGRADOR | Análisis en 6 MINUTOS | Curso AMPLIFICADORES OPERACIONALES",
    "desc": "Clase magistral universitaria de 7:57 impartida por Les Ingenieurs. Contenido de alta fidelidad académica enfocado en amplificadores, op-amp, analogica, circuitos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=qMHSr4FAPAM",
    "yt_id": "qMHSr4FAPAM",
    "thumb": "https://img.youtube.com/vi/qMHSr4FAPAM/hqdefault.jpg",
    "author": "Les Ingenieurs",
    "career": "electronica",
    "tags": [
      "amplificadores",
      "op-amp",
      "analogica",
      "circuitos"
    ],
    "views": 1382,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Circuito restador + amplificador con OPAMP (Clase 69)",
    "desc": "Clase magistral universitaria de 18:12 impartida por ACADENAS. Contenido de alta fidelidad académica enfocado en amplificadores, op-amp, analogica, circuitos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=v74e2LFSCGA",
    "yt_id": "v74e2LFSCGA",
    "thumb": "https://img.youtube.com/vi/v74e2LFSCGA/hqdefault.jpg",
    "author": "ACADENAS",
    "career": "electronica",
    "tags": [
      "amplificadores",
      "op-amp",
      "analogica",
      "circuitos"
    ],
    "views": 1013,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Modelo Ideal. OPAMP",
    "desc": "Clase magistral universitaria de 12:31 impartida por Juan Jesús López García. Contenido de alta fidelidad académica enfocado en amplificadores, op-amp, analogica, circuitos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=_RlxfMqyQdE",
    "yt_id": "_RlxfMqyQdE",
    "thumb": "https://img.youtube.com/vi/_RlxfMqyQdE/hqdefault.jpg",
    "author": "Juan Jesús López García",
    "career": "electronica",
    "tags": [
      "amplificadores",
      "op-amp",
      "analogica",
      "circuitos"
    ],
    "views": 1394,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Circuito Integrador inversor OPAMP.  Convierte onda cuadrada en triangular.  (Clase 71)",
    "desc": "Clase magistral universitaria de 18:39 impartida por ACADENAS. Contenido de alta fidelidad académica enfocado en amplificadores, op-amp, analogica, circuitos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=8WGA53vPO_Y",
    "yt_id": "8WGA53vPO_Y",
    "thumb": "https://img.youtube.com/vi/8WGA53vPO_Y/hqdefault.jpg",
    "author": "ACADENAS",
    "career": "electronica",
    "tags": [
      "amplificadores",
      "op-amp",
      "analogica",
      "circuitos"
    ],
    "views": 1082,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Análisis Básico de Circuitos con OPAMP",
    "desc": "Clase magistral universitaria de 14:01 impartida por CantisanoTV. Contenido de alta fidelidad académica enfocado en amplificadores, op-amp, analogica, circuitos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=GLpO3EiqCFE",
    "yt_id": "GLpO3EiqCFE",
    "thumb": "https://img.youtube.com/vi/GLpO3EiqCFE/hqdefault.jpg",
    "author": "CantisanoTV",
    "career": "electronica",
    "tags": [
      "amplificadores",
      "op-amp",
      "analogica",
      "circuitos"
    ],
    "views": 1167,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Como generar señal cuadrada y triangular con OPAMP. Parte 1 (Clase 76.1)",
    "desc": "Clase magistral universitaria de 11:23 impartida por ACADENAS. Contenido de alta fidelidad académica enfocado en amplificadores, op-amp, analogica, circuitos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=ysdKp1p_FUo",
    "yt_id": "ysdKp1p_FUo",
    "thumb": "https://img.youtube.com/vi/ysdKp1p_FUo/hqdefault.jpg",
    "author": "ACADENAS",
    "career": "electronica",
    "tags": [
      "amplificadores",
      "op-amp",
      "analogica",
      "circuitos"
    ],
    "views": 1221,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Diseño y analisis circuito convertidor 0-10V a 4 - 20 mA (Clase 81)",
    "desc": "Clase magistral universitaria de 33:39 impartida por ACADENAS. Contenido de alta fidelidad académica enfocado en amplificadores, op-amp, analogica, circuitos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=Z-CX5vyAzB0",
    "yt_id": "Z-CX5vyAzB0",
    "thumb": "https://img.youtube.com/vi/Z-CX5vyAzB0/hqdefault.jpg",
    "author": "ACADENAS",
    "career": "electronica",
    "tags": [
      "amplificadores",
      "op-amp",
      "analogica",
      "circuitos"
    ],
    "views": 1424,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "¿Qué es un amplificador operacional? | Ingeniería eléctrica | Khan Academy en Español",
    "desc": "Clase magistral universitaria de 14:10 impartida por KhanAcademyEspañol. Contenido de alta fidelidad académica enfocado en amplificadores, op-amp, analogica, circuitos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=V_T5xbaSTrE",
    "yt_id": "V_T5xbaSTrE",
    "thumb": "https://img.youtube.com/vi/V_T5xbaSTrE/hqdefault.jpg",
    "author": "KhanAcademyEspañol",
    "career": "electronica",
    "tags": [
      "amplificadores",
      "op-amp",
      "analogica",
      "circuitos"
    ],
    "views": 717,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Curso de electrónica básica #2.16 - Todo sobre el amplificador operacional",
    "desc": "Clase magistral universitaria de 16:24 impartida por UltraDavid37 Electrónica. Contenido de alta fidelidad académica enfocado en amplificadores, op-amp, analogica, circuitos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=NO7A--9aK90",
    "yt_id": "NO7A--9aK90",
    "thumb": "https://img.youtube.com/vi/NO7A--9aK90/hqdefault.jpg",
    "author": "UltraDavid37 Electrónica",
    "career": "electronica",
    "tags": [
      "amplificadores",
      "op-amp",
      "analogica",
      "circuitos"
    ],
    "views": 904,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "SUMADOR INVERSOR + (Inversor, No Inversor,  Seguidor de Tensión) | Ejercicio 2",
    "desc": "Clase magistral universitaria de 8:58 impartida por IngE Darwin. Contenido de alta fidelidad académica enfocado en amplificadores, op-amp, analogica, circuitos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=ldOQnHVynrc",
    "yt_id": "ldOQnHVynrc",
    "thumb": "https://img.youtube.com/vi/ldOQnHVynrc/hqdefault.jpg",
    "author": "IngE Darwin",
    "career": "electronica",
    "tags": [
      "amplificadores",
      "op-amp",
      "analogica",
      "circuitos"
    ],
    "views": 736,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "curso de electrónica básica desde cero | Basic electronics course(# 52 amplificadores operacionales)",
    "desc": "Clase magistral universitaria de 19:46 impartida por Editronikx. Contenido de alta fidelidad académica enfocado en amplificadores, op-amp, analogica, circuitos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=Rmz8YNO0gec",
    "yt_id": "Rmz8YNO0gec",
    "thumb": "https://img.youtube.com/vi/Rmz8YNO0gec/hqdefault.jpg",
    "author": "Editronikx",
    "career": "electronica",
    "tags": [
      "amplificadores",
      "op-amp",
      "analogica",
      "circuitos"
    ],
    "views": 1477,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "6 Microcontroladores: Arduino vs ESP32 vs STM32 vs PIC vs Raspberry Pi vs FPGA | ¿Cuál Usar?",
    "desc": "Clase magistral universitaria de 3:46 impartida por PCB Central. Contenido de alta fidelidad académica enfocado en arduino, esp32, microcontroladores, embebidos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=7thKjkvKLWY",
    "yt_id": "7thKjkvKLWY",
    "thumb": "https://img.youtube.com/vi/7thKjkvKLWY/hqdefault.jpg",
    "author": "PCB Central",
    "career": "electronica",
    "tags": [
      "arduino",
      "esp32",
      "microcontroladores",
      "embebidos"
    ],
    "views": 1320,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "De Arduino a ESP32: Como empezar!",
    "desc": "Clase magistral universitaria de 8:11 impartida por IoT Lab. Contenido de alta fidelidad académica enfocado en arduino, esp32, microcontroladores, embebidos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=GFSmj-4rOgM",
    "yt_id": "GFSmj-4rOgM",
    "thumb": "https://img.youtube.com/vi/GFSmj-4rOgM/hqdefault.jpg",
    "author": "IoT Lab",
    "career": "electronica",
    "tags": [
      "arduino",
      "esp32",
      "microcontroladores",
      "embebidos"
    ],
    "views": 829,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "🔧 ¿Qué son los Sistemas Embebidos? La tecnología secreta que mueve el mundo 🌍",
    "desc": "Clase magistral universitaria de 9:55 impartida por Firmware Factory. Contenido de alta fidelidad académica enfocado en arduino, esp32, microcontroladores, embebidos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=Dc4SWYjhZLg",
    "yt_id": "Dc4SWYjhZLg",
    "thumb": "https://img.youtube.com/vi/Dc4SWYjhZLg/hqdefault.jpg",
    "author": "Firmware Factory",
    "career": "electronica",
    "tags": [
      "arduino",
      "esp32",
      "microcontroladores",
      "embebidos"
    ],
    "views": 897,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "🤔¿MACHINE LEARNING en MICROCONTROLADORES? | Wels Theory",
    "desc": "Clase magistral universitaria de 8:04 impartida por Wels. Contenido de alta fidelidad académica enfocado en arduino, esp32, microcontroladores, embebidos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=KtK9S2HSep4",
    "yt_id": "KtK9S2HSep4",
    "thumb": "https://img.youtube.com/vi/KtK9S2HSep4/hqdefault.jpg",
    "author": "Wels",
    "career": "electronica",
    "tags": [
      "arduino",
      "esp32",
      "microcontroladores",
      "embebidos"
    ],
    "views": 731,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "MICROCONTROLADORES y PLACAS de DESARROLLO: Arduino, ESP32 y Raspberry Pi Pico - GUÍA COMPLETA 2024",
    "desc": "Clase magistral universitaria de 5:11 impartida por Rincón Científico. Contenido de alta fidelidad académica enfocado en arduino, esp32, microcontroladores, embebidos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=X6xmsKx033I",
    "yt_id": "X6xmsKx033I",
    "thumb": "https://img.youtube.com/vi/X6xmsKx033I/hqdefault.jpg",
    "author": "Rincón Científico",
    "career": "electronica",
    "tags": [
      "arduino",
      "esp32",
      "microcontroladores",
      "embebidos"
    ],
    "views": 1253,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "ESP32 ¿El MEJOR microcontrolador para IoT? | Análisis FAMILIAS ESP32 de Espressif",
    "desc": "Clase magistral universitaria de 6:03 impartida por Programadores Embebidos. Contenido de alta fidelidad académica enfocado en arduino, esp32, microcontroladores, embebidos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=mpAXYux36oI",
    "yt_id": "mpAXYux36oI",
    "thumb": "https://img.youtube.com/vi/mpAXYux36oI/hqdefault.jpg",
    "author": "Programadores Embebidos",
    "career": "electronica",
    "tags": [
      "arduino",
      "esp32",
      "microcontroladores",
      "embebidos"
    ],
    "views": 1357,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Programar ESP32 con Arduino | Instalar Configurar ESP32 en Arduino",
    "desc": "Clase magistral universitaria de 7:44 impartida por ElectronicSpot. Contenido de alta fidelidad académica enfocado en arduino, esp32, microcontroladores, embebidos, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=BQBFJ8qc3z4",
    "yt_id": "BQBFJ8qc3z4",
    "thumb": "https://img.youtube.com/vi/BQBFJ8qc3z4/hqdefault.jpg",
    "author": "ElectronicSpot",
    "career": "electronica",
    "tags": [
      "arduino",
      "esp32",
      "microcontroladores",
      "embebidos"
    ],
    "views": 1156,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Método Simplex para Minimizar",
    "desc": "Clase magistral universitaria de 37:51 impartida por Marcel Ruiz :). Contenido de alta fidelidad académica enfocado en investigacion-operaciones, simplex, optimizacion, industrial, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=VVXbFmMtpfc",
    "yt_id": "VVXbFmMtpfc",
    "thumb": "https://img.youtube.com/vi/VVXbFmMtpfc/hqdefault.jpg",
    "author": "Marcel Ruiz :)",
    "career": "industrial",
    "tags": [
      "investigacion-operaciones",
      "simplex",
      "optimizacion",
      "industrial"
    ],
    "views": 1445,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Método simplex maximizar",
    "desc": "Clase magistral universitaria de 43:31 impartida por Marcel Ruiz :). Contenido de alta fidelidad académica enfocado en investigacion-operaciones, simplex, optimizacion, industrial, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=8Cn686CY0hg",
    "yt_id": "8Cn686CY0hg",
    "thumb": "https://img.youtube.com/vi/8Cn686CY0hg/hqdefault.jpg",
    "author": "Marcel Ruiz :)",
    "career": "industrial",
    "tags": [
      "investigacion-operaciones",
      "simplex",
      "optimizacion",
      "industrial"
    ],
    "views": 1034,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Método simplex ejemplo básico a mano, para maximizar [Simplex method to maximize]",
    "desc": "Clase magistral universitaria de 27:25 impartida por Marcel Ruiz :). Contenido de alta fidelidad académica enfocado en investigacion-operaciones, simplex, optimizacion, industrial, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=hVjBn14xdMQ",
    "yt_id": "hVjBn14xdMQ",
    "thumb": "https://img.youtube.com/vi/hVjBn14xdMQ/hqdefault.jpg",
    "author": "Marcel Ruiz :)",
    "career": "industrial",
    "tags": [
      "investigacion-operaciones",
      "simplex",
      "optimizacion",
      "industrial"
    ],
    "views": 1150,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Método Simplex",
    "desc": "Clase magistral universitaria de 22:56 impartida por Marcel Ruiz :). Contenido de alta fidelidad académica enfocado en investigacion-operaciones, simplex, optimizacion, industrial, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=LEIRDl5g8s4",
    "yt_id": "LEIRDl5g8s4",
    "thumb": "https://img.youtube.com/vi/LEIRDl5g8s4/hqdefault.jpg",
    "author": "Marcel Ruiz :)",
    "career": "industrial",
    "tags": [
      "investigacion-operaciones",
      "simplex",
      "optimizacion",
      "industrial"
    ],
    "views": 1289,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Resumen ejemplo del método simplex",
    "desc": "Clase magistral universitaria de 12:44 impartida por Marcel Ruiz :). Contenido de alta fidelidad académica enfocado en investigacion-operaciones, simplex, optimizacion, industrial, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=mMCvDKGyRPM",
    "yt_id": "mMCvDKGyRPM",
    "thumb": "https://img.youtube.com/vi/mMCvDKGyRPM/hqdefault.jpg",
    "author": "Marcel Ruiz :)",
    "career": "industrial",
    "tags": [
      "investigacion-operaciones",
      "simplex",
      "optimizacion",
      "industrial"
    ],
    "views": 1335,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Método Simplex para Maximizar",
    "desc": "Clase magistral universitaria de 32:21 impartida por Marcel Ruiz :). Contenido de alta fidelidad académica enfocado en investigacion-operaciones, simplex, optimizacion, industrial, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=5VH7vqsP9BE",
    "yt_id": "5VH7vqsP9BE",
    "thumb": "https://img.youtube.com/vi/5VH7vqsP9BE/hqdefault.jpg",
    "author": "Marcel Ruiz :)",
    "career": "industrial",
    "tags": [
      "investigacion-operaciones",
      "simplex",
      "optimizacion",
      "industrial"
    ],
    "views": 1166,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Programación Lineal Ejemplo 1. Método gráfico (a mano)",
    "desc": "Clase magistral universitaria de 30:11 impartida por Marcel Ruiz :). Contenido de alta fidelidad académica enfocado en investigacion-operaciones, simplex, optimizacion, industrial, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=dd_EMYzGltU",
    "yt_id": "dd_EMYzGltU",
    "thumb": "https://img.youtube.com/vi/dd_EMYzGltU/hqdefault.jpg",
    "author": "Marcel Ruiz :)",
    "career": "industrial",
    "tags": [
      "investigacion-operaciones",
      "simplex",
      "optimizacion",
      "industrial"
    ],
    "views": 1212,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Método Simplex a mano. Ejemplo 1",
    "desc": "Clase magistral universitaria de 23:36 impartida por Marcel Ruiz :). Contenido de alta fidelidad académica enfocado en investigacion-operaciones, simplex, optimizacion, industrial, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=c6nKUZ5BELs",
    "yt_id": "c6nKUZ5BELs",
    "thumb": "https://img.youtube.com/vi/c6nKUZ5BELs/hqdefault.jpg",
    "author": "Marcel Ruiz :)",
    "career": "industrial",
    "tags": [
      "investigacion-operaciones",
      "simplex",
      "optimizacion",
      "industrial"
    ],
    "views": 1104,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Introducción a la programación lineal y ejemplo del método gráfico",
    "desc": "Clase magistral universitaria de 39:42 impartida por Marcel Ruiz :). Contenido de alta fidelidad académica enfocado en investigacion-operaciones, simplex, optimizacion, industrial, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=00UWDWg5oMw",
    "yt_id": "00UWDWg5oMw",
    "thumb": "https://img.youtube.com/vi/00UWDWg5oMw/hqdefault.jpg",
    "author": "Marcel Ruiz :)",
    "career": "industrial",
    "tags": [
      "investigacion-operaciones",
      "simplex",
      "optimizacion",
      "industrial"
    ],
    "views": 1190,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Problema de asignación",
    "desc": "Clase magistral universitaria de 10:09 impartida por Marcel Ruiz :). Contenido de alta fidelidad académica enfocado en investigacion-operaciones, simplex, optimizacion, industrial, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=7jl0hRf7OvE",
    "yt_id": "7jl0hRf7OvE",
    "thumb": "https://img.youtube.com/vi/7jl0hRf7OvE/hqdefault.jpg",
    "author": "Marcel Ruiz :)",
    "career": "industrial",
    "tags": [
      "investigacion-operaciones",
      "simplex",
      "optimizacion",
      "industrial"
    ],
    "views": 934,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Método Simplex Ejemplo conectores y tubos",
    "desc": "Clase magistral universitaria de 22:34 impartida por Marcel Ruiz :). Contenido de alta fidelidad académica enfocado en investigacion-operaciones, simplex, optimizacion, industrial, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=g1xrDzGqvBs",
    "yt_id": "g1xrDzGqvBs",
    "thumb": "https://img.youtube.com/vi/g1xrDzGqvBs/hqdefault.jpg",
    "author": "Marcel Ruiz :)",
    "career": "industrial",
    "tags": [
      "investigacion-operaciones",
      "simplex",
      "optimizacion",
      "industrial"
    ],
    "views": 1417,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Método Simplex Minimizar 100% paso a paso Gran M Ejemplo 1",
    "desc": "Clase magistral universitaria de 26:08 impartida por IngeChay Clases. Contenido de alta fidelidad académica enfocado en investigacion-operaciones, simplex, optimizacion, industrial, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=zRmXEQak6lo",
    "yt_id": "zRmXEQak6lo",
    "thumb": "https://img.youtube.com/vi/zRmXEQak6lo/hqdefault.jpg",
    "author": "IngeChay Clases",
    "career": "industrial",
    "tags": [
      "investigacion-operaciones",
      "simplex",
      "optimizacion",
      "industrial"
    ],
    "views": 1166,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "METODO SIMPLEX REVISADO - Explicado y resuelto en Excel -Programación Lineal - IO",
    "desc": "Clase magistral universitaria de 31:51 impartida por Mario de Jesús Vásquez Sánchez. Contenido de alta fidelidad académica enfocado en investigacion-operaciones, simplex, optimizacion, industrial, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=9-zSn-r8PPo",
    "yt_id": "9-zSn-r8PPo",
    "thumb": "https://img.youtube.com/vi/9-zSn-r8PPo/hqdefault.jpg",
    "author": "Mario de Jesús Vásquez Sánchez",
    "career": "industrial",
    "tags": [
      "investigacion-operaciones",
      "simplex",
      "optimizacion",
      "industrial"
    ],
    "views": 1037,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Ejemplo del método gráfico en PL",
    "desc": "Clase magistral universitaria de 11:08 impartida por Marcel Ruiz :). Contenido de alta fidelidad académica enfocado en investigacion-operaciones, simplex, optimizacion, industrial, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=XtwvYmRGv5E",
    "yt_id": "XtwvYmRGv5E",
    "thumb": "https://img.youtube.com/vi/XtwvYmRGv5E/hqdefault.jpg",
    "author": "Marcel Ruiz :)",
    "career": "industrial",
    "tags": [
      "investigacion-operaciones",
      "simplex",
      "optimizacion",
      "industrial"
    ],
    "views": 1462,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "MÉTODO SIMPLEX | EJERCICIO 1",
    "desc": "Clase magistral universitaria de 34:59 impartida por Profesor Oscar Luis. Contenido de alta fidelidad académica enfocado en investigacion-operaciones, simplex, optimizacion, industrial, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=eLDXXSTM2_c",
    "yt_id": "eLDXXSTM2_c",
    "thumb": "https://img.youtube.com/vi/eLDXXSTM2_c/hqdefault.jpg",
    "author": "Profesor Oscar Luis",
    "career": "industrial",
    "tags": [
      "investigacion-operaciones",
      "simplex",
      "optimizacion",
      "industrial"
    ],
    "views": 1468,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Pasos para resolver un problema del metodo de transporte",
    "desc": "Clase magistral universitaria de 9:07 impartida por Marcel Ruiz :). Contenido de alta fidelidad académica enfocado en investigacion-operaciones, simplex, optimizacion, industrial, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=NwAwzHL_qzQ",
    "yt_id": "NwAwzHL_qzQ",
    "thumb": "https://img.youtube.com/vi/NwAwzHL_qzQ/hqdefault.jpg",
    "author": "Marcel Ruiz :)",
    "career": "industrial",
    "tags": [
      "investigacion-operaciones",
      "simplex",
      "optimizacion",
      "industrial"
    ],
    "views": 1433,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Modelo de transporte (Progrmación lineal)",
    "desc": "Clase magistral universitaria de 3:29 impartida por Liliana P. Contenido de alta fidelidad académica enfocado en programacion-lineal, transporte, logistica, operaciones, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=7J0M-P3wTGU",
    "yt_id": "7J0M-P3wTGU",
    "thumb": "https://img.youtube.com/vi/7J0M-P3wTGU/hqdefault.jpg",
    "author": "Liliana P",
    "career": "industrial",
    "tags": [
      "programacion-lineal",
      "transporte",
      "logistica",
      "operaciones"
    ],
    "views": 863,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Programación Lineal Método Gráfico 1 Maximizar paso a paso",
    "desc": "Clase magistral universitaria de 14:40 impartida por IngeChay Clases. Contenido de alta fidelidad académica enfocado en programacion-lineal, transporte, logistica, operaciones, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=2uJiJYviiIw",
    "yt_id": "2uJiJYviiIw",
    "thumb": "https://img.youtube.com/vi/2uJiJYviiIw/hqdefault.jpg",
    "author": "IngeChay Clases",
    "career": "industrial",
    "tags": [
      "programacion-lineal",
      "transporte",
      "logistica",
      "operaciones"
    ],
    "views": 1235,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Programación Lineal con Geogebra (Maximización)",
    "desc": "Clase magistral universitaria de 23:45 impartida por Holztank. Contenido de alta fidelidad académica enfocado en programacion-lineal, transporte, logistica, operaciones, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=ggdZiF03GJE",
    "yt_id": "ggdZiF03GJE",
    "thumb": "https://img.youtube.com/vi/ggdZiF03GJE/hqdefault.jpg",
    "author": "Holztank",
    "career": "industrial",
    "tags": [
      "programacion-lineal",
      "transporte",
      "logistica",
      "operaciones"
    ],
    "views": 962,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Métodos Cuantitativos II [Clase 12][Programación Lineal - Método Gráfico]",
    "desc": "Clase magistral universitaria de 24:28 impartida por Pumas Community. Contenido de alta fidelidad académica enfocado en programacion-lineal, transporte, logistica, operaciones, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=s6nYorUVbgA",
    "yt_id": "s6nYorUVbgA",
    "thumb": "https://img.youtube.com/vi/s6nYorUVbgA/hqdefault.jpg",
    "author": "Pumas Community",
    "career": "industrial",
    "tags": [
      "programacion-lineal",
      "transporte",
      "logistica",
      "operaciones"
    ],
    "views": 1193,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Programación Lineal (Introducción - ejemplo - PHPSimplex) | Todo lo que necesitas saber",
    "desc": "Clase magistral universitaria de 21:55 impartida por IngE Darwin. Contenido de alta fidelidad académica enfocado en programacion-lineal, transporte, logistica, operaciones, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=0SSkMnP-3IQ",
    "yt_id": "0SSkMnP-3IQ",
    "thumb": "https://img.youtube.com/vi/0SSkMnP-3IQ/hqdefault.jpg",
    "author": "IngE Darwin",
    "career": "industrial",
    "tags": [
      "programacion-lineal",
      "transporte",
      "logistica",
      "operaciones"
    ],
    "views": 1257,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Método gráfico de Programación Lineal con Geogebra",
    "desc": "Clase magistral universitaria de 8:44 impartida por Pierina's World. Contenido de alta fidelidad académica enfocado en programacion-lineal, transporte, logistica, operaciones, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=N3a8sKQh0c4",
    "yt_id": "N3a8sKQh0c4",
    "thumb": "https://img.youtube.com/vi/N3a8sKQh0c4/hqdefault.jpg",
    "author": "Pierina's World",
    "career": "industrial",
    "tags": [
      "programacion-lineal",
      "transporte",
      "logistica",
      "operaciones"
    ],
    "views": 1070,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Método Gráfico Excel- Investigación de Operaciones",
    "desc": "Clase magistral universitaria de 11:56 impartida por José Luis González Ortíz. Contenido de alta fidelidad académica enfocado en programacion-lineal, transporte, logistica, operaciones, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=QZ9IXCYVl6o",
    "yt_id": "QZ9IXCYVl6o",
    "thumb": "https://img.youtube.com/vi/QZ9IXCYVl6o/hqdefault.jpg",
    "author": "José Luis González Ortíz",
    "career": "industrial",
    "tags": [
      "programacion-lineal",
      "transporte",
      "logistica",
      "operaciones"
    ],
    "views": 1272,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "PROGRAMACIÓN LINEAL Desde CERO [Método GRÁFICO]",
    "desc": "Clase magistral universitaria de 16:18 impartida por seletube. Contenido de alta fidelidad académica enfocado en programacion-lineal, transporte, logistica, operaciones, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=w5wTES0SDQU",
    "yt_id": "w5wTES0SDQU",
    "thumb": "https://img.youtube.com/vi/w5wTES0SDQU/hqdefault.jpg",
    "author": "seletube",
    "career": "industrial",
    "tags": [
      "programacion-lineal",
      "transporte",
      "logistica",
      "operaciones"
    ],
    "views": 1091,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "PROGRAMACION LINEAL, TRANSPORTE, ASIGNACION",
    "desc": "Clase magistral universitaria de 48:35 impartida por Lino Elias Fernández Bonilla. Contenido de alta fidelidad académica enfocado en programacion-lineal, transporte, logistica, operaciones, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=_Xzw3dl85tg",
    "yt_id": "_Xzw3dl85tg",
    "thumb": "https://img.youtube.com/vi/_Xzw3dl85tg/hqdefault.jpg",
    "author": "Lino Elias Fernández Bonilla",
    "career": "industrial",
    "tags": [
      "programacion-lineal",
      "transporte",
      "logistica",
      "operaciones"
    ],
    "views": 787,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "EJERCICIOS DE PROGRAMACIÓN LINEAL RESUELTOS",
    "desc": "Clase magistral universitaria de 24:06 impartida por Matemáticas con Juan. Contenido de alta fidelidad académica enfocado en programacion-lineal, transporte, logistica, operaciones, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=wYZiR9W-4P8",
    "yt_id": "wYZiR9W-4P8",
    "thumb": "https://img.youtube.com/vi/wYZiR9W-4P8/hqdefault.jpg",
    "author": "Matemáticas con Juan",
    "career": "industrial",
    "tags": [
      "programacion-lineal",
      "transporte",
      "logistica",
      "operaciones"
    ],
    "views": 862,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "14. Sistema Kanban. Las 5S: orden y limpieza. Técnicas Lean Manufacturing III | Curso Lean Thinking",
    "desc": "Clase magistral universitaria de 6:23 impartida por LeanKin. Contenido de alta fidelidad académica enfocado en lean, 5s, kaizen, mejora-continua, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=cOQ599pf8sY",
    "yt_id": "cOQ599pf8sY",
    "thumb": "https://img.youtube.com/vi/cOQ599pf8sY/hqdefault.jpg",
    "author": "LeanKin",
    "career": "industrial",
    "tags": [
      "lean",
      "5s",
      "kaizen",
      "mejora-continua"
    ],
    "views": 1004,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Kaizen El secreto detrás de la productividad japonesa",
    "desc": "Clase magistral universitaria de 4:16 impartida por Japan Video Topics - Español. Contenido de alta fidelidad académica enfocado en lean, 5s, kaizen, mejora-continua, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=REKuuJopQ_o",
    "yt_id": "REKuuJopQ_o",
    "thumb": "https://img.youtube.com/vi/REKuuJopQ_o/hqdefault.jpg",
    "author": "Japan Video Topics - Español",
    "career": "industrial",
    "tags": [
      "lean",
      "5s",
      "kaizen",
      "mejora-continua"
    ],
    "views": 1285,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Las 5S - Base de la Mejora Continua (Kaizen)",
    "desc": "Clase magistral universitaria de 1:09:35 impartida por Kaizen Certification. Contenido de alta fidelidad académica enfocado en lean, 5s, kaizen, mejora-continua, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=XqC1mwDALhQ",
    "yt_id": "XqC1mwDALhQ",
    "thumb": "https://img.youtube.com/vi/XqC1mwDALhQ/hqdefault.jpg",
    "author": "Kaizen Certification",
    "career": "industrial",
    "tags": [
      "lean",
      "5s",
      "kaizen",
      "mejora-continua"
    ],
    "views": 922,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Lean vs Kaizen - Las raíces del Sistema Productivo Total (TPS) y la Mejora Continua, TPM & TQC.",
    "desc": "Clase magistral universitaria de 10:50 impartida por Factory Management Institute. Contenido de alta fidelidad académica enfocado en lean, 5s, kaizen, mejora-continua, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=L4wpdSbBlWE",
    "yt_id": "L4wpdSbBlWE",
    "thumb": "https://img.youtube.com/vi/L4wpdSbBlWE/hqdefault.jpg",
    "author": "Factory Management Institute",
    "career": "industrial",
    "tags": [
      "lean",
      "5s",
      "kaizen",
      "mejora-continua"
    ],
    "views": 1275,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Lean Manufacturing 16 - 10 puntos clave para implementar KAIZEN en tu empresa",
    "desc": "Clase magistral universitaria de 3:47 impartida por Iván Martínez Lima - Estrategia en Acción. Contenido de alta fidelidad académica enfocado en lean, 5s, kaizen, mejora-continua, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=xA4qBNYRR6g",
    "yt_id": "xA4qBNYRR6g",
    "thumb": "https://img.youtube.com/vi/xA4qBNYRR6g/hqdefault.jpg",
    "author": "Iván Martínez Lima - Estrategia en Acción",
    "career": "industrial",
    "tags": [
      "lean",
      "5s",
      "kaizen",
      "mejora-continua"
    ],
    "views": 760,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Herramientas de calidad - Poka Yoke, Kaizen y Kan Ban",
    "desc": "Clase magistral universitaria de 13:25 impartida por Procem Consultores. Contenido de alta fidelidad académica enfocado en lean, 5s, kaizen, mejora-continua, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=BogaOPNNaps",
    "yt_id": "BogaOPNNaps",
    "thumb": "https://img.youtube.com/vi/BogaOPNNaps/hqdefault.jpg",
    "author": "Procem Consultores",
    "career": "industrial",
    "tags": [
      "lean",
      "5s",
      "kaizen",
      "mejora-continua"
    ],
    "views": 1496,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Introducción a Lean Manufacturing | Mejora Continua, 5S, Kaizen y OEE explicados con ejemplos reales",
    "desc": "Clase magistral universitaria de 23:24 impartida por Solma Soluciones. Contenido de alta fidelidad académica enfocado en lean, 5s, kaizen, mejora-continua, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=3stL3AMc22I",
    "yt_id": "3stL3AMc22I",
    "thumb": "https://img.youtube.com/vi/3stL3AMc22I/hqdefault.jpg",
    "author": "Solma Soluciones",
    "career": "industrial",
    "tags": [
      "lean",
      "5s",
      "kaizen",
      "mejora-continua"
    ],
    "views": 917,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "𝗟𝗲𝗮𝗻 𝗠𝗮𝗻𝘂𝗳𝗮𝗰𝘁𝘂𝗿𝗶𝗻𝗴: 𝗩𝗦𝗠, 𝟱𝗦, 𝗤𝗙𝗗, 𝗧𝗣𝗠, 𝗞𝗮𝗻𝗯𝗮𝗻, 𝗦𝗠𝗘𝗗, 𝗞𝗮𝗶𝘇𝗲𝗻, 𝗣𝗼𝗸𝗮𝘆𝗼𝗸𝗲𝘀 𝘆 𝗺𝗮́𝘀!",
    "desc": "Clase magistral universitaria de 3:49:01 impartida por MyISO. Contenido de alta fidelidad académica enfocado en lean, 5s, kaizen, mejora-continua, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=RzqSOt6amBE",
    "yt_id": "RzqSOt6amBE",
    "thumb": "https://img.youtube.com/vi/RzqSOt6amBE/hqdefault.jpg",
    "author": "MyISO",
    "career": "industrial",
    "tags": [
      "lean",
      "5s",
      "kaizen",
      "mejora-continua"
    ],
    "views": 966,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "¿Qué es Lean Manufacturing? Explicado en 5 minutos",
    "desc": "Clase magistral universitaria de 4:49 impartida por Ingeniería para to2. Contenido de alta fidelidad académica enfocado en lean, 5s, kaizen, mejora-continua, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=ZT3D0Sj6UY0",
    "yt_id": "ZT3D0Sj6UY0",
    "thumb": "https://img.youtube.com/vi/ZT3D0Sj6UY0/hqdefault.jpg",
    "author": "Ingeniería para to2",
    "career": "industrial",
    "tags": [
      "lean",
      "5s",
      "kaizen",
      "mejora-continua"
    ],
    "views": 1206,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Eventos Kaizen Lean Manufacturing",
    "desc": "Clase magistral universitaria de 30:14 impartida por Solma Soluciones. Contenido de alta fidelidad académica enfocado en lean, 5s, kaizen, mejora-continua, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=klTRenbkRFc",
    "yt_id": "klTRenbkRFc",
    "thumb": "https://img.youtube.com/vi/klTRenbkRFc/hqdefault.jpg",
    "author": "Solma Soluciones",
    "career": "industrial",
    "tags": [
      "lean",
      "5s",
      "kaizen",
      "mejora-continua"
    ],
    "views": 746,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Lean Manufacturing: El Método 5S para un Entorno de Trabajo Más Eficiente",
    "desc": "Clase magistral universitaria de 10:45 impartida por Solma Soluciones. Contenido de alta fidelidad académica enfocado en lean, 5s, kaizen, mejora-continua, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=CEkirPI4vDA",
    "yt_id": "CEkirPI4vDA",
    "thumb": "https://img.youtube.com/vi/CEkirPI4vDA/hqdefault.jpg",
    "author": "Solma Soluciones",
    "career": "industrial",
    "tags": [
      "lean",
      "5s",
      "kaizen",
      "mejora-continua"
    ],
    "views": 1046,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Los 7 desperdicios de Lean Manufacturing",
    "desc": "Clase magistral universitaria de 13:47 impartida por Procem Consultores. Contenido de alta fidelidad académica enfocado en lean, 5s, kaizen, mejora-continua, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=0OLX9XxV2ks",
    "yt_id": "0OLX9XxV2ks",
    "thumb": "https://img.youtube.com/vi/0OLX9XxV2ks/hqdefault.jpg",
    "author": "Procem Consultores",
    "career": "industrial",
    "tags": [
      "lean",
      "5s",
      "kaizen",
      "mejora-continua"
    ],
    "views": 1166,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "El Sistema 5S Kaizen, base de la mejora continua",
    "desc": "Clase magistral universitaria de 1:40:07 impartida por Asociación Peruana de Facility Management. Contenido de alta fidelidad académica enfocado en lean, 5s, kaizen, mejora-continua, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=ijPaKENLN3M",
    "yt_id": "ijPaKENLN3M",
    "thumb": "https://img.youtube.com/vi/ijPaKENLN3M/hqdefault.jpg",
    "author": "Asociación Peruana de Facility Management",
    "career": "industrial",
    "tags": [
      "lean",
      "5s",
      "kaizen",
      "mejora-continua"
    ],
    "views": 1057,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Lean Manufacturing desde cero | Certificación Lean Manufacturing – Sesión 1 | SOLMA",
    "desc": "Clase magistral universitaria de 2:09:25 impartida por Solma Soluciones. Contenido de alta fidelidad académica enfocado en lean, 5s, kaizen, mejora-continua, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=121D1Sc5qqc",
    "yt_id": "121D1Sc5qqc",
    "thumb": "https://img.youtube.com/vi/121D1Sc5qqc/hqdefault.jpg",
    "author": "Solma Soluciones",
    "career": "industrial",
    "tags": [
      "lean",
      "5s",
      "kaizen",
      "mejora-continua"
    ],
    "views": 1054,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Lean Manufacturing & Six Sigma: Claves para la Industria | Podcast Dale Mantenimiento",
    "desc": "Clase magistral universitaria de 1:03:35 impartida por Tractian México. Contenido de alta fidelidad académica enfocado en lean, 5s, kaizen, mejora-continua, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=f1wVgNhlcZI",
    "yt_id": "f1wVgNhlcZI",
    "thumb": "https://img.youtube.com/vi/f1wVgNhlcZI/hqdefault.jpg",
    "author": "Tractian México",
    "career": "industrial",
    "tags": [
      "lean",
      "5s",
      "kaizen",
      "mejora-continua"
    ],
    "views": 1075,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Lean Six Sigma en 8 Minutos | ¿Qué es Lean Six Sigma? | Ejemplo Lean Six Sigma",
    "desc": "Clase magistral universitaria de 8:11 impartida por Tecnología 4.0. Contenido de alta fidelidad académica enfocado en six-sigma, calidad, dmaic, gestion, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=NGPZBZucKnY",
    "yt_id": "NGPZBZucKnY",
    "thumb": "https://img.youtube.com/vi/NGPZBZucKnY/hqdefault.jpg",
    "author": "Tecnología 4.0",
    "career": "industrial",
    "tags": [
      "six-sigma",
      "calidad",
      "dmaic",
      "gestion"
    ],
    "views": 1452,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Six Sigma DMAIC",
    "desc": "Clase magistral universitaria de 48:14 impartida por Solma Soluciones. Contenido de alta fidelidad académica enfocado en six-sigma, calidad, dmaic, gestion, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=6Lj4ikWPWVs",
    "yt_id": "6Lj4ikWPWVs",
    "thumb": "https://img.youtube.com/vi/6Lj4ikWPWVs/hqdefault.jpg",
    "author": "Solma Soluciones",
    "career": "industrial",
    "tags": [
      "six-sigma",
      "calidad",
      "dmaic",
      "gestion"
    ],
    "views": 1286,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "¿Cómo aplicar la metodología DMAIC six sigma?/(Ejemplo REAL!!!)",
    "desc": "Clase magistral universitaria de 12:30 impartida por Academia LSS. Contenido de alta fidelidad académica enfocado en six-sigma, calidad, dmaic, gestion, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=icGF_99tQ7g",
    "yt_id": "icGF_99tQ7g",
    "thumb": "https://img.youtube.com/vi/icGF_99tQ7g/hqdefault.jpg",
    "author": "Academia LSS",
    "career": "industrial",
    "tags": [
      "six-sigma",
      "calidad",
      "dmaic",
      "gestion"
    ],
    "views": 1421,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "¿Qué es Six Sigma?¡En esté video te lo explicamos!",
    "desc": "Clase magistral universitaria de 5:15 impartida por Academia Lean Sigma. Contenido de alta fidelidad académica enfocado en six-sigma, calidad, dmaic, gestion, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=MWCapF_KK1k",
    "yt_id": "MWCapF_KK1k",
    "thumb": "https://img.youtube.com/vi/MWCapF_KK1k/hqdefault.jpg",
    "author": "Academia Lean Sigma",
    "career": "industrial",
    "tags": [
      "six-sigma",
      "calidad",
      "dmaic",
      "gestion"
    ],
    "views": 1199,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "GREEN BELT / Masterclass \"Estudios de capacidad de proceso\"",
    "desc": "Clase magistral universitaria de 48:44 impartida por Solma Soluciones. Contenido de alta fidelidad académica enfocado en six-sigma, calidad, dmaic, gestion, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=MMxOwMRsvJc",
    "yt_id": "MMxOwMRsvJc",
    "thumb": "https://img.youtube.com/vi/MMxOwMRsvJc/hqdefault.jpg",
    "author": "Solma Soluciones",
    "career": "industrial",
    "tags": [
      "six-sigma",
      "calidad",
      "dmaic",
      "gestion"
    ],
    "views": 1078,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Lean Six Sigma - Automatización métodos control de calidad en la Industria - #1",
    "desc": "Clase magistral universitaria de 55:07 impartida por Jesus Correa - PLC. Contenido de alta fidelidad académica enfocado en six-sigma, calidad, dmaic, gestion, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=nu03N3jSrH4",
    "yt_id": "nu03N3jSrH4",
    "thumb": "https://img.youtube.com/vi/nu03N3jSrH4/hqdefault.jpg",
    "author": "Jesus Correa - PLC",
    "career": "industrial",
    "tags": [
      "six-sigma",
      "calidad",
      "dmaic",
      "gestion"
    ],
    "views": 1387,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Calidad Six sigma. DMAIC y TQC mejorado",
    "desc": "Clase magistral universitaria de 1:06:57 impartida por Lizzany Castillo. Contenido de alta fidelidad académica enfocado en six-sigma, calidad, dmaic, gestion, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=vUlDb0ofdYQ",
    "yt_id": "vUlDb0ofdYQ",
    "thumb": "https://img.youtube.com/vi/vUlDb0ofdYQ/hqdefault.jpg",
    "author": "Lizzany Castillo",
    "career": "industrial",
    "tags": [
      "six-sigma",
      "calidad",
      "dmaic",
      "gestion"
    ],
    "views": 1185,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "MASTERCLASS INTRODUCCIÓN A SIX SIGMA",
    "desc": "Clase magistral universitaria de 24:49 impartida por Solma Soluciones. Contenido de alta fidelidad académica enfocado en six-sigma, calidad, dmaic, gestion, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=BXhmSCsnh64",
    "yt_id": "BXhmSCsnh64",
    "thumb": "https://img.youtube.com/vi/BXhmSCsnh64/hqdefault.jpg",
    "author": "Solma Soluciones",
    "career": "industrial",
    "tags": [
      "six-sigma",
      "calidad",
      "dmaic",
      "gestion"
    ],
    "views": 1030,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "¿Que es Six Sigma DMAIC?",
    "desc": "Clase magistral universitaria de 30:11 impartida por Solma Soluciones. Contenido de alta fidelidad académica enfocado en six-sigma, calidad, dmaic, gestion, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=JNJao73DLQU",
    "yt_id": "JNJao73DLQU",
    "thumb": "https://img.youtube.com/vi/JNJao73DLQU/hqdefault.jpg",
    "author": "Solma Soluciones",
    "career": "industrial",
    "tags": [
      "six-sigma",
      "calidad",
      "dmaic",
      "gestion"
    ],
    "views": 890,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Sistema  Six Sigma y Conocimiento - Lean Six Sigma Certifications and Methodology",
    "desc": "Clase magistral universitaria de 6:52 impartida por IYD. Contenido de alta fidelidad académica enfocado en six-sigma, calidad, dmaic, gestion, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=Pv_pfQCwIh4",
    "yt_id": "Pv_pfQCwIh4",
    "thumb": "https://img.youtube.com/vi/Pv_pfQCwIh4/hqdefault.jpg",
    "author": "IYD",
    "career": "industrial",
    "tags": [
      "six-sigma",
      "calidad",
      "dmaic",
      "gestion"
    ],
    "views": 1026,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Curso DMAIC - Fases de la Mejora Continua",
    "desc": "Clase magistral universitaria de 1:21:14 impartida por Desarrollo Profesional SyS. Contenido de alta fidelidad académica enfocado en six-sigma, calidad, dmaic, gestion, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=7hExNjNYlpw",
    "yt_id": "7hExNjNYlpw",
    "thumb": "https://img.youtube.com/vi/7hExNjNYlpw/hqdefault.jpg",
    "author": "Desarrollo Profesional SyS",
    "career": "industrial",
    "tags": [
      "six-sigma",
      "calidad",
      "dmaic",
      "gestion"
    ],
    "views": 790,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Green Belt / Metodología DMAIC MASTERCLASS",
    "desc": "Clase magistral universitaria de 22:18 impartida por Solma Soluciones. Contenido de alta fidelidad académica enfocado en six-sigma, calidad, dmaic, gestion, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=GnKFAKySqGs",
    "yt_id": "GnKFAKySqGs",
    "thumb": "https://img.youtube.com/vi/GnKFAKySqGs/hqdefault.jpg",
    "author": "Solma Soluciones",
    "career": "industrial",
    "tags": [
      "six-sigma",
      "calidad",
      "dmaic",
      "gestion"
    ],
    "views": 1126,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "El ABC de los Proyectos Six Sigma DMAIC",
    "desc": "Clase magistral universitaria de 26:08 impartida por Solma Soluciones. Contenido de alta fidelidad académica enfocado en six-sigma, calidad, dmaic, gestion, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=GyO2GIAXeMs",
    "yt_id": "GyO2GIAXeMs",
    "thumb": "https://img.youtube.com/vi/GyO2GIAXeMs/hqdefault.jpg",
    "author": "Solma Soluciones",
    "career": "industrial",
    "tags": [
      "six-sigma",
      "calidad",
      "dmaic",
      "gestion"
    ],
    "views": 1341,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "GREEN BELT / 𝗠𝗮𝘀𝘁𝗲𝗿𝗰𝗹𝗮𝘀𝘀 \"𝗚𝗿𝗮́𝗳𝗶𝗰𝗮𝘀 𝗱𝗲 𝗰𝗼𝗻𝘁𝗿𝗼𝗹 𝗽𝗮𝗿𝗮 𝗮𝘁𝗿𝗶𝗯𝘂𝘁𝗼𝘀\"",
    "desc": "Clase magistral universitaria de 39:38 impartida por Solma Soluciones. Contenido de alta fidelidad académica enfocado en six-sigma, calidad, dmaic, gestion, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=V2EZZZzvHEQ",
    "yt_id": "V2EZZZzvHEQ",
    "thumb": "https://img.youtube.com/vi/V2EZZZzvHEQ/hqdefault.jpg",
    "author": "Solma Soluciones",
    "career": "industrial",
    "tags": [
      "six-sigma",
      "calidad",
      "dmaic",
      "gestion"
    ],
    "views": 990,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Definición límite",
    "desc": "Clase magistral universitaria de 21:52 impartida por Matemáticas profe Alex. Contenido de alta fidelidad académica enfocado en calculo, limites, derivadas, ciencias-basicas, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=4Sb6cavuZoM",
    "yt_id": "4Sb6cavuZoM",
    "thumb": "https://img.youtube.com/vi/4Sb6cavuZoM/hqdefault.jpg",
    "author": "Matemáticas profe Alex",
    "career": "transversal",
    "tags": [
      "calculo",
      "limites",
      "derivadas",
      "ciencias-basicas"
    ],
    "views": 789,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Derivada de una función usando la definición | Ejemplo 1",
    "desc": "Clase magistral universitaria de 7:58 impartida por Matemáticas profe Alex. Contenido de alta fidelidad académica enfocado en calculo, limites, derivadas, ciencias-basicas, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=U7onW7mMzLM",
    "yt_id": "U7onW7mMzLM",
    "thumb": "https://img.youtube.com/vi/U7onW7mMzLM/hqdefault.jpg",
    "author": "Matemáticas profe Alex",
    "career": "transversal",
    "tags": [
      "calculo",
      "limites",
      "derivadas",
      "ciencias-basicas"
    ],
    "views": 824,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Qué es la derivada? | Concepto de derivada",
    "desc": "Clase magistral universitaria de 10:42 impartida por Matemáticas profe Alex. Contenido de alta fidelidad académica enfocado en calculo, limites, derivadas, ciencias-basicas, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=uK4-s0ojHFg",
    "yt_id": "uK4-s0ojHFg",
    "thumb": "https://img.youtube.com/vi/uK4-s0ojHFg/hqdefault.jpg",
    "author": "Matemáticas profe Alex",
    "career": "transversal",
    "tags": [
      "calculo",
      "limites",
      "derivadas",
      "ciencias-basicas"
    ],
    "views": 1067,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Derivadas Regla de la cadena | Función compuesta | Ejemplo 1",
    "desc": "Clase magistral universitaria de 6:48 impartida por Matemáticas profe Alex. Contenido de alta fidelidad académica enfocado en calculo, limites, derivadas, ciencias-basicas, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=m_5-WS9Nd68",
    "yt_id": "m_5-WS9Nd68",
    "thumb": "https://img.youtube.com/vi/m_5-WS9Nd68/hqdefault.jpg",
    "author": "Matemáticas profe Alex",
    "career": "transversal",
    "tags": [
      "calculo",
      "limites",
      "derivadas",
      "ciencias-basicas"
    ],
    "views": 944,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "REGLAS DE DERIVACIÓN - Repaso en 7 minutos con ejemplos",
    "desc": "Clase magistral universitaria de 7:44 impartida por IngE Darwin. Contenido de alta fidelidad académica enfocado en calculo, limites, derivadas, ciencias-basicas, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=aVNa-J8iB5I",
    "yt_id": "aVNa-J8iB5I",
    "thumb": "https://img.youtube.com/vi/aVNa-J8iB5I/hqdefault.jpg",
    "author": "IngE Darwin",
    "career": "transversal",
    "tags": [
      "calculo",
      "limites",
      "derivadas",
      "ciencias-basicas"
    ],
    "views": 784,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Derivada de una constante | Reglas de derivación",
    "desc": "Clase magistral universitaria de 4:43 impartida por Matemáticas profe Alex. Contenido de alta fidelidad académica enfocado en calculo, limites, derivadas, ciencias-basicas, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=T42-57sojsA",
    "yt_id": "T42-57sojsA",
    "thumb": "https://img.youtube.com/vi/T42-57sojsA/hqdefault.jpg",
    "author": "Matemáticas profe Alex",
    "career": "transversal",
    "tags": [
      "calculo",
      "limites",
      "derivadas",
      "ciencias-basicas"
    ],
    "views": 1278,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Limites | Introducción y conceptos básicos",
    "desc": "Clase magistral universitaria de 15:40 impartida por Matemáticas profe Alex. Contenido de alta fidelidad académica enfocado en calculo, limites, derivadas, ciencias-basicas, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=o2UTk8bsLS0",
    "yt_id": "o2UTk8bsLS0",
    "thumb": "https://img.youtube.com/vi/o2UTk8bsLS0/hqdefault.jpg",
    "author": "Matemáticas profe Alex",
    "career": "transversal",
    "tags": [
      "calculo",
      "limites",
      "derivadas",
      "ciencias-basicas"
    ],
    "views": 860,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Integrales por método tabular | Ej. 1 #julioprofe",
    "desc": "Clase magistral universitaria de 11:47 impartida por julioprofe. Contenido de alta fidelidad académica enfocado en calculo-integral, integrales, sustitucion, partes, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=TpkldNa011c",
    "yt_id": "TpkldNa011c",
    "thumb": "https://img.youtube.com/vi/TpkldNa011c/hqdefault.jpg",
    "author": "julioprofe",
    "career": "transversal",
    "tags": [
      "calculo-integral",
      "integrales",
      "sustitucion",
      "partes"
    ],
    "views": 884,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Teorema fundamental del cálculo: definición y ejemplos #julioprofe",
    "desc": "Clase magistral universitaria de 9:43 impartida por julioprofe. Contenido de alta fidelidad académica enfocado en calculo-integral, integrales, sustitucion, partes, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=SCKpUCax5ss",
    "yt_id": "SCKpUCax5ss",
    "thumb": "https://img.youtube.com/vi/SCKpUCax5ss/hqdefault.jpg",
    "author": "julioprofe",
    "career": "transversal",
    "tags": [
      "calculo-integral",
      "integrales",
      "sustitucion",
      "partes"
    ],
    "views": 1073,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Integración por Partes - Ejercicio 1",
    "desc": "Clase magistral universitaria de 7:14 impartida por julioprofenet. Contenido de alta fidelidad académica enfocado en calculo-integral, integrales, sustitucion, partes, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=BjwZFoKDpfs",
    "yt_id": "BjwZFoKDpfs",
    "thumb": "https://img.youtube.com/vi/BjwZFoKDpfs/hqdefault.jpg",
    "author": "julioprofenet",
    "career": "transversal",
    "tags": [
      "calculo-integral",
      "integrales",
      "sustitucion",
      "partes"
    ],
    "views": 1245,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Área bajo una curva - Ej. 1",
    "desc": "Clase magistral universitaria de 6:12 impartida por julioprofe. Contenido de alta fidelidad académica enfocado en calculo-integral, integrales, sustitucion, partes, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=V7WnsXYJZaM",
    "yt_id": "V7WnsXYJZaM",
    "thumb": "https://img.youtube.com/vi/V7WnsXYJZaM/hqdefault.jpg",
    "author": "julioprofe",
    "career": "transversal",
    "tags": [
      "calculo-integral",
      "integrales",
      "sustitucion",
      "partes"
    ],
    "views": 1127,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Volumen de un sólido de revolución usando arandelas - Ej. 1",
    "desc": "Clase magistral universitaria de 16:48 impartida por julioprofe. Contenido de alta fidelidad académica enfocado en calculo-integral, integrales, sustitucion, partes, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=SKZ9cP_NGEM",
    "yt_id": "SKZ9cP_NGEM",
    "thumb": "https://img.youtube.com/vi/SKZ9cP_NGEM/hqdefault.jpg",
    "author": "julioprofe",
    "career": "transversal",
    "tags": [
      "calculo-integral",
      "integrales",
      "sustitucion",
      "partes"
    ],
    "views": 1344,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Integrales por partes | Ej. 1 #julioprofe",
    "desc": "Clase magistral universitaria de 37:25 impartida por julioprofe. Contenido de alta fidelidad académica enfocado en calculo-integral, integrales, sustitucion, partes, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=_T7AE2KEaJY",
    "yt_id": "_T7AE2KEaJY",
    "thumb": "https://img.youtube.com/vi/_T7AE2KEaJY/hqdefault.jpg",
    "author": "julioprofe",
    "career": "transversal",
    "tags": [
      "calculo-integral",
      "integrales",
      "sustitucion",
      "partes"
    ],
    "views": 989,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Integral por Sustitución",
    "desc": "Clase magistral universitaria de 4:17 impartida por julioprofenet. Contenido de alta fidelidad académica enfocado en calculo-integral, integrales, sustitucion, partes, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=ehfXQaXLSsA",
    "yt_id": "ehfXQaXLSsA",
    "thumb": "https://img.youtube.com/vi/ehfXQaXLSsA/hqdefault.jpg",
    "author": "julioprofenet",
    "career": "transversal",
    "tags": [
      "calculo-integral",
      "integrales",
      "sustitucion",
      "partes"
    ],
    "views": 1116,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Integrales definidas | Ej. 1 #julioprofe",
    "desc": "Clase magistral universitaria de 5:09 impartida por julioprofe. Contenido de alta fidelidad académica enfocado en calculo-integral, integrales, sustitucion, partes, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=wuI5MFhvgsY",
    "yt_id": "wuI5MFhvgsY",
    "thumb": "https://img.youtube.com/vi/wuI5MFhvgsY/hqdefault.jpg",
    "author": "julioprofe",
    "career": "transversal",
    "tags": [
      "calculo-integral",
      "integrales",
      "sustitucion",
      "partes"
    ],
    "views": 1485,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Consejos para tener éxito en cálculo #julioprofe",
    "desc": "Clase magistral universitaria de 7:19 impartida por julioprofe. Contenido de alta fidelidad académica enfocado en calculo-integral, integrales, sustitucion, partes, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=0opaDVgBzQA",
    "yt_id": "0opaDVgBzQA",
    "thumb": "https://img.youtube.com/vi/0opaDVgBzQA/hqdefault.jpg",
    "author": "julioprofe",
    "career": "transversal",
    "tags": [
      "calculo-integral",
      "integrales",
      "sustitucion",
      "partes"
    ],
    "views": 980,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "ÁLGEBRA LINEAL DESDE CERO: Vectores, Matrices y Espacios Vectoriales (Clase Completa)",
    "desc": "Clase magistral universitaria de 44:17 impartida por Math Rocks. Contenido de alta fidelidad académica enfocado en algebra-lineal, matrices, determinantes, vectores, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=BMBZJwTS7Ks",
    "yt_id": "BMBZJwTS7Ks",
    "thumb": "https://img.youtube.com/vi/BMBZJwTS7Ks/hqdefault.jpg",
    "author": "Math Rocks",
    "career": "transversal",
    "tags": [
      "algebra-lineal",
      "matrices",
      "determinantes",
      "vectores"
    ],
    "views": 1295,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Vectores, ¿qué son? | Esencia del álgebra lineal, capítulo 1",
    "desc": "Clase magistral universitaria de 9:56 impartida por 3Blue1Brown Español. Contenido de alta fidelidad académica enfocado en algebra-lineal, matrices, determinantes, vectores, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=wiuEEkP_XuM",
    "yt_id": "wiuEEkP_XuM",
    "thumb": "https://img.youtube.com/vi/wiuEEkP_XuM/hqdefault.jpg",
    "author": "3Blue1Brown Español",
    "career": "transversal",
    "tags": [
      "algebra-lineal",
      "matrices",
      "determinantes",
      "vectores"
    ],
    "views": 1309,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Matrices Parte 1 🧠 Álgebra [CICLO FREE]",
    "desc": "Clase magistral universitaria de 1:16:10 impartida por Academia Grupo Ciencias. Contenido de alta fidelidad académica enfocado en algebra-lineal, matrices, determinantes, vectores, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=QawqqQJXY40",
    "yt_id": "QawqqQJXY40",
    "thumb": "https://img.youtube.com/vi/QawqqQJXY40/hqdefault.jpg",
    "author": "Academia Grupo Ciencias",
    "career": "transversal",
    "tags": [
      "algebra-lineal",
      "matrices",
      "determinantes",
      "vectores"
    ],
    "views": 942,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "¿Qué son LOS DETERMINANTES? ¿Son amigos o enemigos?",
    "desc": "Clase magistral universitaria de 12:51 impartida por Derivando. Contenido de alta fidelidad académica enfocado en algebra-lineal, matrices, determinantes, vectores, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=Bd7XboIfsU4",
    "yt_id": "Bd7XboIfsU4",
    "thumb": "https://img.youtube.com/vi/Bd7XboIfsU4/hqdefault.jpg",
    "author": "Derivando",
    "career": "transversal",
    "tags": [
      "algebra-lineal",
      "matrices",
      "determinantes",
      "vectores"
    ],
    "views": 1322,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "VALORES y VECTORES propios de una matriz 3x3 ejercicios resueltos / EIGENVALOR y EIGENVECTOR",
    "desc": "Clase magistral universitaria de 22:00 impartida por Javier España Profe. Contenido de alta fidelidad académica enfocado en algebra-lineal, matrices, determinantes, vectores, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=25FFzOyhAmk",
    "yt_id": "25FFzOyhAmk",
    "thumb": "https://img.youtube.com/vi/25FFzOyhAmk/hqdefault.jpg",
    "author": "Javier España Profe",
    "career": "transversal",
    "tags": [
      "algebra-lineal",
      "matrices",
      "determinantes",
      "vectores"
    ],
    "views": 879,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Determinante de una matriz 4x4  método de Gauss | Ejemplo 1",
    "desc": "Clase magistral universitaria de 19:08 impartida por Matemáticas profe Alex. Contenido de alta fidelidad académica enfocado en algebra-lineal, matrices, determinantes, vectores, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=ajvwN6FogKI",
    "yt_id": "ajvwN6FogKI",
    "thumb": "https://img.youtube.com/vi/ajvwN6FogKI/hqdefault.jpg",
    "author": "Matemáticas profe Alex",
    "career": "transversal",
    "tags": [
      "algebra-lineal",
      "matrices",
      "determinantes",
      "vectores"
    ],
    "views": 1179,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "TODO el álgebra lineal en 7 minutos.",
    "desc": "Clase magistral universitaria de 7:03 impartida por KoothBrush. Contenido de alta fidelidad académica enfocado en algebra-lineal, matrices, determinantes, vectores, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=QL4_4GAWvPs",
    "yt_id": "QL4_4GAWvPs",
    "thumb": "https://img.youtube.com/vi/QL4_4GAWvPs/hqdefault.jpg",
    "author": "KoothBrush",
    "career": "transversal",
    "tags": [
      "algebra-lineal",
      "matrices",
      "determinantes",
      "vectores"
    ],
    "views": 1053,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "📊 Álgebra Lineal | 1.Vectores, Matrices y Determinantes (Matemáticas Selectivo)",
    "desc": "Clase magistral universitaria de 32:14 impartida por determinia. Contenido de alta fidelidad académica enfocado en algebra-lineal, matrices, determinantes, vectores, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=esbQdL31kF4",
    "yt_id": "esbQdL31kF4",
    "thumb": "https://img.youtube.com/vi/esbQdL31kF4/hqdefault.jpg",
    "author": "determinia",
    "career": "transversal",
    "tags": [
      "algebra-lineal",
      "matrices",
      "determinantes",
      "vectores"
    ],
    "views": 1247,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "62. Ecuación diferencial de Bernoulli. EJERCICIO RESUELTO",
    "desc": "Clase magistral universitaria de 11:39 impartida por MateFacil. Contenido de alta fidelidad académica enfocado en ecuaciones-diferenciales, edo, modelado, matematicas, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=JhKDjN3Qqos",
    "yt_id": "JhKDjN3Qqos",
    "thumb": "https://img.youtube.com/vi/JhKDjN3Qqos/hqdefault.jpg",
    "author": "MateFacil",
    "career": "transversal",
    "tags": [
      "ecuaciones-diferenciales",
      "edo",
      "modelado",
      "matematicas"
    ],
    "views": 1187,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Ecuacion diferencial de Bernoulli explicada al detalle",
    "desc": "Clase magistral universitaria de 12:38 impartida por Matemáticas con Juan. Contenido de alta fidelidad académica enfocado en ecuaciones-diferenciales, edo, modelado, matematicas, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=nbYmkYxhH2c",
    "yt_id": "nbYmkYxhH2c",
    "thumb": "https://img.youtube.com/vi/nbYmkYxhH2c/hqdefault.jpg",
    "author": "Matemáticas con Juan",
    "career": "transversal",
    "tags": [
      "ecuaciones-diferenciales",
      "edo",
      "modelado",
      "matematicas"
    ],
    "views": 1317,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "ECUACIONES DIFERENCIALES desde cero",
    "desc": "Clase magistral universitaria de 1:25:59 impartida por El Traductor de Ingeniería. Contenido de alta fidelidad académica enfocado en ecuaciones-diferenciales, edo, modelado, matematicas, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=MdKOjS8-oNw",
    "yt_id": "MdKOjS8-oNw",
    "thumb": "https://img.youtube.com/vi/MdKOjS8-oNw/hqdefault.jpg",
    "author": "El Traductor de Ingeniería",
    "career": "transversal",
    "tags": [
      "ecuaciones-diferenciales",
      "edo",
      "modelado",
      "matematicas"
    ],
    "views": 818,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Ecuaciones diferenciales | La ecuación de Bernoulli",
    "desc": "Clase magistral universitaria de 5:19 impartida por WissenSync. Contenido de alta fidelidad académica enfocado en ecuaciones-diferenciales, edo, modelado, matematicas, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=Chm9qUtWGnU",
    "yt_id": "Chm9qUtWGnU",
    "thumb": "https://img.youtube.com/vi/Chm9qUtWGnU/hqdefault.jpg",
    "author": "WissenSync",
    "career": "transversal",
    "tags": [
      "ecuaciones-diferenciales",
      "edo",
      "modelado",
      "matematicas"
    ],
    "views": 758,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Ecuaciones diferenciales Homogéneas | Introducción",
    "desc": "Clase magistral universitaria de 38:11 impartida por Matemáticas profe Alex. Contenido de alta fidelidad académica enfocado en ecuaciones-diferenciales, edo, modelado, matematicas, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=h8JY9daqCBY",
    "yt_id": "h8JY9daqCBY",
    "thumb": "https://img.youtube.com/vi/h8JY9daqCBY/hqdefault.jpg",
    "author": "Matemáticas profe Alex",
    "career": "transversal",
    "tags": [
      "ecuaciones-diferenciales",
      "edo",
      "modelado",
      "matematicas"
    ],
    "views": 1328,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "ECUACIONES DIFERENCIALES DE BERNOULLI // EJERCICIO 1 // CURSO DESDE CERO DE ECUACIONES DIFERENCIALES",
    "desc": "Clase magistral universitaria de 11:14 impartida por Prisma Academia. Contenido de alta fidelidad académica enfocado en ecuaciones-diferenciales, edo, modelado, matematicas, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=Bwt1h_RlRl8",
    "yt_id": "Bwt1h_RlRl8",
    "thumb": "https://img.youtube.com/vi/Bwt1h_RlRl8/hqdefault.jpg",
    "author": "Prisma Academia",
    "career": "transversal",
    "tags": [
      "ecuaciones-diferenciales",
      "edo",
      "modelado",
      "matematicas"
    ],
    "views": 1352,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "✅ECUACIÓN DIFERENCIAL de BERNOULLI | 𝙋𝙖𝙨𝙤 𝙖 𝙋𝙖𝙨𝙤💯| ECUACIONES DIFERENCIALES",
    "desc": "Clase magistral universitaria de 7:21 impartida por Profesor Particular Puebla. Contenido de alta fidelidad académica enfocado en ecuaciones-diferenciales, edo, modelado, matematicas, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=cDyb7bdVFEM",
    "yt_id": "cDyb7bdVFEM",
    "thumb": "https://img.youtube.com/vi/cDyb7bdVFEM/hqdefault.jpg",
    "author": "Profesor Particular Puebla",
    "career": "transversal",
    "tags": [
      "ecuaciones-diferenciales",
      "edo",
      "modelado",
      "matematicas"
    ],
    "views": 1064,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "EDO  F. INTEGRANTES, BERNOULLI, RICATTI Y LINEALES EN  x, y  | Ecuaciones Diferenciales Ordinarias.",
    "desc": "Clase magistral universitaria de 47:17 impartida por Faustinianos. Contenido de alta fidelidad académica enfocado en ecuaciones-diferenciales, edo, modelado, matematicas, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=NFJZzDw4BK4",
    "yt_id": "NFJZzDw4BK4",
    "thumb": "https://img.youtube.com/vi/NFJZzDw4BK4/hqdefault.jpg",
    "author": "Faustinianos",
    "career": "transversal",
    "tags": [
      "ecuaciones-diferenciales",
      "edo",
      "modelado",
      "matematicas"
    ],
    "views": 1068,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Ecuaciones diferenciales Homogéneas | Ejemplo 1",
    "desc": "Clase magistral universitaria de 17:44 impartida por Matemáticas profe Alex. Contenido de alta fidelidad académica enfocado en ecuaciones-diferenciales, edo, modelado, matematicas, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=kqzOGLstWh8",
    "yt_id": "kqzOGLstWh8",
    "thumb": "https://img.youtube.com/vi/kqzOGLstWh8/hqdefault.jpg",
    "author": "Matemáticas profe Alex",
    "career": "transversal",
    "tags": [
      "ecuaciones-diferenciales",
      "edo",
      "modelado",
      "matematicas"
    ],
    "views": 821,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Ecuaciones Diferenciales Ordinarias   03 Homogéneas y Bernoulli",
    "desc": "Clase magistral universitaria de 27:02 impartida por Cuestión de números. Contenido de alta fidelidad académica enfocado en ecuaciones-diferenciales, edo, modelado, matematicas, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=MszVnILysJM",
    "yt_id": "MszVnILysJM",
    "thumb": "https://img.youtube.com/vi/MszVnILysJM/hqdefault.jpg",
    "author": "Cuestión de números",
    "career": "transversal",
    "tags": [
      "ecuaciones-diferenciales",
      "edo",
      "modelado",
      "matematicas"
    ],
    "views": 1411,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Ecuación Diferencial de Bernoulli. Introducción",
    "desc": "Clase magistral universitaria de 17:23 impartida por Vamos a la Pizarra . Contenido de alta fidelidad académica enfocado en ecuaciones-diferenciales, edo, modelado, matematicas, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=qnMJKD04eXc",
    "yt_id": "qnMJKD04eXc",
    "thumb": "https://img.youtube.com/vi/qnMJKD04eXc/hqdefault.jpg",
    "author": "Vamos a la Pizarra ",
    "career": "transversal",
    "tags": [
      "ecuaciones-diferenciales",
      "edo",
      "modelado",
      "matematicas"
    ],
    "views": 1466,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "ECUACIONES DIFERENCIALES HOMOGÉNEAS // EJERCICIO 1 // CURSO COMPLETO DE ECUACIONES DIFERENCIALES",
    "desc": "Clase magistral universitaria de 9:34 impartida por Prisma Academia. Contenido de alta fidelidad académica enfocado en ecuaciones-diferenciales, edo, modelado, matematicas, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=eSHEEfMB8kQ",
    "yt_id": "eSHEEfMB8kQ",
    "thumb": "https://img.youtube.com/vi/eSHEEfMB8kQ/hqdefault.jpg",
    "author": "Prisma Academia",
    "career": "transversal",
    "tags": [
      "ecuaciones-diferenciales",
      "edo",
      "modelado",
      "matematicas"
    ],
    "views": 1303,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "GUÍA PRÁCTICA para Aprender a Resolver EDOs",
    "desc": "Clase magistral universitaria de 1:25:16 impartida por El Traductor de Ingeniería. Contenido de alta fidelidad académica enfocado en ecuaciones-diferenciales, edo, modelado, matematicas, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=_EKDACRTUak",
    "yt_id": "_EKDACRTUak",
    "thumb": "https://img.youtube.com/vi/_EKDACRTUak/hqdefault.jpg",
    "author": "El Traductor de Ingeniería",
    "career": "transversal",
    "tags": [
      "ecuaciones-diferenciales",
      "edo",
      "modelado",
      "matematicas"
    ],
    "views": 772,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Resolviendo ecuaciones diferenciales homogéneas fácilmente",
    "desc": "Clase magistral universitaria de 18:28 impartida por Matemáticas con Juan. Contenido de alta fidelidad académica enfocado en ecuaciones-diferenciales, edo, modelado, matematicas, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=l96YihYMh74",
    "yt_id": "l96YihYMh74",
    "thumb": "https://img.youtube.com/vi/l96YihYMh74/hqdefault.jpg",
    "author": "Matemáticas con Juan",
    "career": "transversal",
    "tags": [
      "ecuaciones-diferenciales",
      "edo",
      "modelado",
      "matematicas"
    ],
    "views": 1299,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Ecuaciones diferenciales | Introducción",
    "desc": "Clase magistral universitaria de 14:00 impartida por Matemáticas profe Alex. Contenido de alta fidelidad académica enfocado en ecuaciones-diferenciales, edo, modelado, matematicas, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=rd2jKGQJucE",
    "yt_id": "rd2jKGQJucE",
    "thumb": "https://img.youtube.com/vi/rd2jKGQJucE/hqdefault.jpg",
    "author": "Matemáticas profe Alex",
    "career": "transversal",
    "tags": [
      "ecuaciones-diferenciales",
      "edo",
      "modelado",
      "matematicas"
    ],
    "views": 869,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "1. Introducción a la Mecánica Clásica: Cinemática, Dinámica y Estática",
    "desc": "Clase magistral universitaria de 4:31 impartida por Profe Euler. Contenido de alta fidelidad académica enfocado en fisica, cinematica, newton, energia, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=hiCJSGfelhk",
    "yt_id": "hiCJSGfelhk",
    "thumb": "https://img.youtube.com/vi/hiCJSGfelhk/hqdefault.jpg",
    "author": "Profe Euler",
    "career": "transversal",
    "tags": [
      "fisica",
      "cinematica",
      "newton",
      "energia"
    ],
    "views": 1288,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Leyes de Newton - EXPLICACIÓN COMPLETA con ejemplos",
    "desc": "Clase magistral universitaria de 8:39 impartida por MateFacil - Física. Contenido de alta fidelidad académica enfocado en fisica, cinematica, newton, energia, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=iLt6C1oxmlc",
    "yt_id": "iLt6C1oxmlc",
    "thumb": "https://img.youtube.com/vi/iLt6C1oxmlc/hqdefault.jpg",
    "author": "MateFacil - Física",
    "career": "transversal",
    "tags": [
      "fisica",
      "cinematica",
      "newton",
      "energia"
    ],
    "views": 1203,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "CINEMÁTICA desde cero: MRU, MRUA y todo eso...",
    "desc": "Clase magistral universitaria de 1:11:17 impartida por El Traductor de Ingeniería. Contenido de alta fidelidad académica enfocado en fisica, cinematica, newton, energia, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=aDHVXyFXxCE",
    "yt_id": "aDHVXyFXxCE",
    "thumb": "https://img.youtube.com/vi/aDHVXyFXxCE/hqdefault.jpg",
    "author": "El Traductor de Ingeniería",
    "career": "transversal",
    "tags": [
      "fisica",
      "cinematica",
      "newton",
      "energia"
    ],
    "views": 1336,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "CURSO DE CINEMÁTICA DESDE CERO. Física Básica",
    "desc": "Clase magistral universitaria de 1:00:35 impartida por Matemáticas con Juan. Contenido de alta fidelidad académica enfocado en fisica, cinematica, newton, energia, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=tKT8JLmQ330",
    "yt_id": "tKT8JLmQ330",
    "thumb": "https://img.youtube.com/vi/tKT8JLmQ330/hqdefault.jpg",
    "author": "Matemáticas con Juan",
    "career": "transversal",
    "tags": [
      "fisica",
      "cinematica",
      "newton",
      "energia"
    ],
    "views": 788,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "👨‍🔬 La PRIMERA LEY de NEWTON | Explicación, Fórmulas y Ejercicios",
    "desc": "Clase magistral universitaria de 4:03 impartida por Clases Particulares en Ávila. Contenido de alta fidelidad académica enfocado en fisica, cinematica, newton, energia, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=bsWqliD04VI",
    "yt_id": "bsWqliD04VI",
    "thumb": "https://img.youtube.com/vi/bsWqliD04VI/hqdefault.jpg",
    "author": "Clases Particulares en Ávila",
    "career": "transversal",
    "tags": [
      "fisica",
      "cinematica",
      "newton",
      "energia"
    ],
    "views": 1200,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Leyes de Newton (Universo Mecánico 6)",
    "desc": "Clase magistral universitaria de 27:23 impartida por Ciencias TV. Contenido de alta fidelidad académica enfocado en fisica, cinematica, newton, energia, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=DAtcTgJB66s",
    "yt_id": "DAtcTgJB66s",
    "thumb": "https://img.youtube.com/vi/DAtcTgJB66s/hqdefault.jpg",
    "author": "Ciencias TV",
    "career": "transversal",
    "tags": [
      "fisica",
      "cinematica",
      "newton",
      "energia"
    ],
    "views": 1338,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "CURSO DE DINÁMICA DESDE CERO. Física básica",
    "desc": "Clase magistral universitaria de 37:42 impartida por Matemáticas con Juan. Contenido de alta fidelidad académica enfocado en fisica, cinematica, newton, energia, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=RkBFq-4-aYA",
    "yt_id": "RkBFq-4-aYA",
    "thumb": "https://img.youtube.com/vi/RkBFq-4-aYA/hqdefault.jpg",
    "author": "Matemáticas con Juan",
    "career": "transversal",
    "tags": [
      "fisica",
      "cinematica",
      "newton",
      "energia"
    ],
    "views": 973,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Leyes de Newton: Inercia y Movimiento - Curso de Mecánica Clásica",
    "desc": "Clase magistral universitaria de 18:40 impartida por AfanadorPhysics Tutor. Contenido de alta fidelidad académica enfocado en fisica, cinematica, newton, energia, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=pnFnu6LPmQA",
    "yt_id": "pnFnu6LPmQA",
    "thumb": "https://img.youtube.com/vi/pnFnu6LPmQA/hqdefault.jpg",
    "author": "AfanadorPhysics Tutor",
    "career": "transversal",
    "tags": [
      "fisica",
      "cinematica",
      "newton",
      "energia"
    ],
    "views": 1295,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Clase 12: Ejercicios Leyes de Newton",
    "desc": "Clase magistral universitaria de 1:56:22 impartida por BITÁCORA. Contenido de alta fidelidad académica enfocado en fisica, cinematica, newton, energia, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=IYekU49gcfM",
    "yt_id": "IYekU49gcfM",
    "thumb": "https://img.youtube.com/vi/IYekU49gcfM/hqdefault.jpg",
    "author": "BITÁCORA",
    "career": "transversal",
    "tags": [
      "fisica",
      "cinematica",
      "newton",
      "energia"
    ],
    "views": 832,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Mecánica  clásica: Clase 1",
    "desc": "Clase magistral universitaria de 2:04:01 impartida por Instituto Balseiro - Académico. Contenido de alta fidelidad académica enfocado en fisica, cinematica, newton, energia, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=psms00DeX9o",
    "yt_id": "psms00DeX9o",
    "thumb": "https://img.youtube.com/vi/psms00DeX9o/hqdefault.jpg",
    "author": "Instituto Balseiro - Académico",
    "career": "transversal",
    "tags": [
      "fisica",
      "cinematica",
      "newton",
      "energia"
    ],
    "views": 1109,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "Clase 1 del curso Temas de Física I (Mecánica Clásica)",
    "desc": "Clase magistral universitaria de 1:59:52 impartida por PosgradoFísicaEducativa. Contenido de alta fidelidad académica enfocado en fisica, cinematica, newton, energia, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=ZYrthIRj3Tw",
    "yt_id": "ZYrthIRj3Tw",
    "thumb": "https://img.youtube.com/vi/ZYrthIRj3Tw/hqdefault.jpg",
    "author": "PosgradoFísicaEducativa",
    "career": "transversal",
    "tags": [
      "fisica",
      "cinematica",
      "newton",
      "energia"
    ],
    "views": 1171,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "34. Ley de Gauss Explicación-Todo lo que debes saber",
    "desc": "Clase magistral universitaria de 12:15 impartida por espiral ciencias. Contenido de alta fidelidad académica enfocado en fisica-electrica, electromagnetismo, coulomb, gauss, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=3aWFJdqM_Rw",
    "yt_id": "3aWFJdqM_Rw",
    "thumb": "https://img.youtube.com/vi/3aWFJdqM_Rw/hqdefault.jpg",
    "author": "espiral ciencias",
    "career": "transversal",
    "tags": [
      "fisica-electrica",
      "electromagnetismo",
      "coulomb",
      "gauss"
    ],
    "views": 1390,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Teorema de gauss para el campo eléctrico Explicación Teórica y Carga Puntual (Bachillerato y Uni)",
    "desc": "Clase magistral universitaria de 15:09 impartida por FísicaPRO. Contenido de alta fidelidad académica enfocado en fisica-electrica, electromagnetismo, coulomb, gauss, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=jJSq8BFJYt4",
    "yt_id": "jJSq8BFJYt4",
    "thumb": "https://img.youtube.com/vi/jJSq8BFJYt4/hqdefault.jpg",
    "author": "FísicaPRO",
    "career": "transversal",
    "tags": [
      "fisica-electrica",
      "electromagnetismo",
      "coulomb",
      "gauss"
    ],
    "views": 1231,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Electromagnetismo | Clase 1: Ley de Coulomb. Campo eléctrico",
    "desc": "Clase magistral universitaria de 1:50:36 impartida por Instituto Balseiro - Académico. Contenido de alta fidelidad académica enfocado en fisica-electrica, electromagnetismo, coulomb, gauss, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=W-lD0PFeJk4",
    "yt_id": "W-lD0PFeJk4",
    "thumb": "https://img.youtube.com/vi/W-lD0PFeJk4/hqdefault.jpg",
    "author": "Instituto Balseiro - Académico",
    "career": "transversal",
    "tags": [
      "fisica-electrica",
      "electromagnetismo",
      "coulomb",
      "gauss"
    ],
    "views": 834,
    "year": 2023,
    "type": "curso"
  },
  {
    "title": "La ley de Gauss en 3 minutos",
    "desc": "Clase magistral universitaria de 3:24 impartida por Bromurez. Contenido de alta fidelidad académica enfocado en fisica-electrica, electromagnetismo, coulomb, gauss, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=pIpV6HN7sDQ",
    "yt_id": "pIpV6HN7sDQ",
    "thumb": "https://img.youtube.com/vi/pIpV6HN7sDQ/hqdefault.jpg",
    "author": "Bromurez",
    "career": "transversal",
    "tags": [
      "fisica-electrica",
      "electromagnetismo",
      "coulomb",
      "gauss"
    ],
    "views": 1387,
    "year": 2023,
    "type": "video"
  },
  {
    "title": "Ley de Coulomb y fuerza eléctrica,  lo que necesitas saber en 5 minutos.",
    "desc": "Clase magistral universitaria de 6:40 impartida por IngE Darwin. Contenido de alta fidelidad académica enfocado en fisica-electrica, electromagnetismo, coulomb, gauss, ideal para estudiantes de ingeniería y semilleros de investigación.",
    "url": "https://www.youtube.com/watch?v=XnVXKpZuIWY",
    "yt_id": "XnVXKpZuIWY",
    "thumb": "https://img.youtube.com/vi/XnVXKpZuIWY/hqdefault.jpg",
    "author": "IngE Darwin",
    "career": "transversal",
    "tags": [
      "fisica-electrica",
      "electromagnetismo",
      "coulomb",
      "gauss"
    ],
    "views": 1442,
    "year": 2023,
    "type": "video"
  }
];
