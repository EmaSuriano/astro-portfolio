import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/FranPacelli',
  linkedin: 'https://www.linkedin.com/in/franco-pacelli/',
  mail: 'mailto:franpacelli@gmail.com',
  instagram: 'https://www.instagram.com/frannpacelli/',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Trabajo',
  DESCRIPTION: 'Experiencias de trabajo.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Doctor en Ciencias Biologicas',
    institution: 'Universidad de Buenos Aires',
    link: 'https://exactas.uba.ar',
    date: '2020 - En curso',
  },
  {
    title: 'Ingeniero Agronomo',
    institution: 'Universidad de Buenos Aires',
    link: 'https://www.agro.uba.ar',
    date: '2012 - 2017',
  },
]

export const EXPERIENCE = [
  {
    company: 'Green Tech Science SAS',
    location: 'Buenos Aires, Argentina',
    position: 'Jefe de campo',
    start: 'Marzo 2024',
    link: 'https://www.greentech.science',
    end: 'Agosto 2024',
    tasks: [
      'Supervisar y coordinar las actividades agrícolas en el campo, asegurando el cumplimiento de los estándares de calidad y productividad. 
      Colaborar con otros departamentos para garantizar la alineación de las estrategias corporativas con las operaciones agrícolas.
      Realizar análisis y evaluaciones constantes para mejorar los procesos y optimizar los recursos. 
      Gestionar equipos de trabajo, brindando apoyo y liderazgo para el desarrollo profesional de los colaboradores.',
    ],
  },
  {
    company: 'INTA',
    location: 'Buenos Aires, Argentina',
    position: 'Investigadpr',
    link: 'https://www.argentina.gob.ar/inta',
    start: 'Marzo 2020',
    end: 'Abril 2024',
    tasks: [
      'Estudio del comportamiento de selección de hospedadores en A. fraterculus, considerando el efecto de factores externos
       e internos a las hembras sobre su preferencia. También la asociación entre la elección de la hembra y el desarrollo de 
       su progenie en distintas especies frutales, así como otros factores que podrían modular el comportamiento, 
       como interacciones intraespecíficas e interespecíficas.',
    ],
  },
  {
    company: 'GeoAgris',
    link: 'https://geoagris.com',
    location: 'Buenos Aires, Argentina',
    position: 'Ingeniero Agronomo',
    start: 'Junio 2017',
    end: 'Mayo 2020',
    tasks: [
      'Manejo de Sistemas de Información Geográfica y Teledetección. 
       Procesamiento y Análisis de proyectos de Agricultura de Precisión; análisis y elaboración de mapas de heterogeneidad espacial, 
       prescripciones de aplicación variable de insumos y gestión de calidad de siembra. 
       Tareas de sistemas GIS. Ambientación de superficies mediante análisis de imágenes satelitales.
       Sector Comercial. Contacto con los clientes - solucion de problemas - y adquisicion de nuevos clientes.',
    ],
  },
  {
    company: 'Facultad de Agronomia',
    location: 'Buenos Aires, Argentina',
    position: 'Ayudante Ad Honorem',
    start: '2014',
    link: 'https://www.agro.uba.ar',
    end: '2017',
    tasks: [
      'Ayudar en clases al profesor, despejar dudas a los alumnos, ordenar el material, colaborar en exámenes finales.
       Compromiso asumido en tiempo horario destinado a investigaciones de la UBA. 
       La investigación realizada en el transcurso de la beca es la misma que finalmente se presentara como trabajo de tesis.
       La tesis finalizo luego de cumplida esta beca estimulo.',
    ],
  },
]

export const PROJECTS = [
  {
    name: 'Bioestadística básica aplicada, mediada con entorno R.',
    description: 'Analisis de datos biologicos mediante el software R',
    img: 'https://fcefyn.unc.edu.ar/media/images/Banner_WEB_Diplomatura-_Bioe.eade1377.fill-1600x390-c100.jpg',
    website: 'https://fcefyn.unc.edu.ar/facultad/secretarias/extension/area-de-formacion-continua/diplomatura-bioestadistica-basica-aplicada-mediada-con-entorno-r/',
  },
  {
    name: 'Ecología Experimental',
    description: 'Analisis de diseños de ensayos y experimentos basados en la ecologia',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEGM4HBs6JzpFz0PabLrBWf1ogh8-RVuHuiQ&s',
    website: 'https://bibliotecadigital.exactas.uba.ar/collection/programa/document/programa_n20220856',
  },
  {
    name: 'Interacción planta-insecto. Bases moleculares e implicancias ecológicas y productivas',
    description: 'Estudio de los factores involucrados en la interaccion entre insectos y plantas',
    img: 'https://www.gardentech.com/-/media/project/oneweb/gardentech/images/blog/plant-pest-detective-identifying-common-plant-pests/plant_pest-bug_bud.jpg',
    website: 'http://epg.agro.uba.ar/course/interaccion-planta-insecto-bases-moleculares-e-implicancias-ecologicas-y-productivas/',
  },
]
