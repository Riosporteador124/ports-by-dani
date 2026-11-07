# Ports by Dani

Catálogo estático de ports y adaptadores para R36S, R36 Max y Linux ARM. Abre `index.html` en tu navegador para probarlo. El sitio no necesita instalar paquetes.

## Publicar en GitHub Pages

1. Crea un repositorio público llamado `ports-by-dani` en tu cuenta de GitHub.
2. Descomprime el ZIP y sube los archivos a la raíz del repositorio en la rama `main`. Mantén la carpeta `assets/` y el archivo `.nojekyll`.
3. Abre **Settings → Pages**. En **Source**, elige **Deploy from a branch**. Selecciona **main** y **/(root)** y pulsa **Save**.
4. Cuando termine el despliegue, encontrarás el enlace en **Settings → Pages**.

Consulta la [guía de publicación de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Añadir tus proyectos

Edita `proyectos.js`. Las siete entradas con `ejemplo: true` sirven para ver el diseño. Reemplázalas por las tuyas o bórralas cuando quieras. Copia una ficha y usa un `id` distinto para cada proyecto.

```js
{
  id: 'mi-port',
  titulo: 'Mi port',
  tipo: 'port',
  imagen: 'assets/mi-port.webp',
  consolas: ['R36S', 'Linux ARM'],
  motor: 'Godot',
  version: '1.0.0',
  estado: 'Disponible',
  fecha: '2026-11-07',
  color: 'cyan',
  ejemplo: false,
  descripcion: 'Describe el port, sus requisitos y cómo instalarlo.',
  descarga: '',
  repositorio: ''
},
```

- Usa `tipo: 'adaptador'` para mostrarlo en **Adaptadores**.
- Guarda la portada en `assets/` y pon su ruta en `imagen`. Puedes dejar `imagen` vacía.
- Pega en `descarga` el enlace directo al archivo en GitHub Releases. También puedes usar una ruta local como `descargas/mi-port.zip` si subes el archivo con el sitio.
- En `repositorio`, pega la URL del código o de las instrucciones del proyecto. Los campos de enlace vacíos se ocultan.
- Usa `YYYY-MM-DD` en `fecha` para ordenar el catálogo y mostrar la ficha en **Actualizaciones**.
- Los estados previstos son `Disponible`, `En pruebas` y `En desarrollo`. Los colores de borde son `cyan`, `pink`, `violet` y `gold`.

Cada cambio publicado en `main` actualiza GitHub Pages. El catálogo guarda las fichas en el repositorio.
