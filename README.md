# Proyecto con Astro: Violet Evergarden

Este proyecto utiliza [Astro](https://astro.build "Web Page de Astro"), un generador de sitios estáticos. Astro renderiza el sitio como HTML en el servidor y envía solo HTML, CSS y el código JavaScript mínimo necesario al cliente. Lo que permite escribir componentes con HTML nativo, o usar React, Vue o Svelte en el mismo sitio, o incuso usar md o mdx, pues Astro renderizará el contenido a una versión estática del sitio.

## Particularidades
La aplicación utiliza TailwindCSS para el diseño, y se basa en el diseño de [Violet Evergarden](https://tv.violet-evergarden.jp/ "Pagina oficial de Violet Evergarden en japón"). Con una paleta de colores basada en el diseño original, y con un diseño responsive.

La aplicación tiene el fin de usar un sistema de rutas dinámicas en el futuro, lo que permitirá crear rutas para cada uno de los personajes de la serie de manera casi automática. Esto se logrará con el uso del archivo `data` y el uso de [`getStaticPaths`](https://docs.astro.build/es/reference/api-reference/#getstaticpaths "Documentación oficial de getStaticPaths") de Astro. 


## Violet Evergarden
### [Visualiza el sitio](https://paman00violetfanpage.netlify.app/ "Violet Evergarden Fanpage - Paman00")

![Preview del sitio en mobile](./public/preview.png "Web Page de Violet Evergarden - Paman00")

_(Deploy en Netlify)_

## Estructura de carpetas actual del proyecto
```text
├───public
│   └───favicons
└───src
    ├───components
    │   └───navbar
    ├───data
    ├───icons
    ├───images
    ├───layouts
    ├───pages
    │   └───see-more
    └───types
```

## Instalación

Para instalar el proyecto, sigue estos pasos:

1. Clona el repositorio en tu máquina local usando `git clone https://github.com/Paman00/violet-evergarden-fanpage`.

2. Navega al directorio del proyecto con `cd violet-evergarden-fanpage`.

3. Instala las dependencias con `yarn`.

Y listo!

## Ejecución en modo desarrollo

Para ejecutar el proyecto en modo desarrollo, usa el comando `yarn`. Esto iniciará un servidor de desarrollo en `http://localhost:4321` de forma predeterminada. 

## Sobre mi
Conóceme más, en la biografía en la página **about-me** de la aplicación. [About me en Violet Evergarden](https://paman00violetfanpage.netlify.app/about-me/ "Violet Evergarden Fanpage - Paman00")
