# Equipo Cromo - Codethon

¡Bienvenido al repositorio del equipo Cromo para Codethon!

En este repositorio encontrarás todos los archivos relacionados con la información de los integrantes del equipo Cromo, el diseño gráfico de la aplicación y los prototipos desarrollados en lenguajes como HTML, CSS y Angular (sin Ionic).

- **Diseño Gráfico**: Todos los recursos visuales utilizados en el proyecto.
- **Prototipos**: Archivos de las aplicaciones desarrolladas en HTML, CSS y Angular.
- **[Enlace a la Aplicación en Ionic](https://github.com/Pablops2219/ionic-app)**: Accede al repositorio de la aplicación final.

# Instalación de la Aplicación Móvil Ricardo Tormo

Esta guía te proporcionará instrucciones detalladas sobre cómo desplegar la aplicación móvil del equipo Cromo. La aplicación puede ser desplegada de dos formas:

- A través del archivo APK proporcionado en la raíz de este repositorio.
- Clonando el repositorio y compilando el proyecto con Angular/Ionic.

:warning: **¡Atención!** Es preferible que la aplicación sea desplegada en un dispositivo móvil debido a que muchas de las funcionalidades presentes no funcionan en la web o son versiones adaptadas. Sin embargo, si no hay más opciones, sigue [la guía para el despliegue desde un ordenador](#instalacion-con-angular-ionic).

## Instalación desde APK

1. Descarga [el archivo APK](RicardoTormo.apk) de la aplicación desde el enlace proporcionado.
2. Habilita la opción "Fuentes desconocidas" en la configuración de seguridad de tu dispositivo. Esto te permitirá instalar aplicaciones desde fuentes que no sean Google Play Store.
3. Navega hasta la ubicación donde descargaste el archivo APK usando un administrador de archivos en tu dispositivo.
4. Abre el archivo APK descargado para iniciar el proceso de instalación.
5. Listo! La aplicación debería aparecer en tu pantalla de inicio.

## Instalación con Angular Ionic

1. Asegúrate de tener Android Studio, Node.js y npm instalados en tu sistema. Puedes descargarlos desde: [Web de Node.js](https://nodejs.org/), [Web de Android Studio](https://developer.android.com/studio?hl=es-419).
2. Clona el repositorio de GitHub de la aplicación utilizando el siguiente comando en tu terminal:

   ```bash
   git clone https://github.com/Pablops2219/ionic-app
   ```

3. Navega al directorio recién creado:

   ```bash
   cd ionic-app
   ```

4. Instala las dependencias del proyecto utilizando npm:

   ```bash
   npm install
   ```

5. Compila el proyecto para generar los archivos necesarios para la aplicación **en Android**:

   ```bash
   ionic build
   ionic cap sync
   ```

6. Abre la aplicación en Android Studio utilizando el siguiente comando:

   ```bash
   ionic cap open android
   ```

7. En Android Studio, compila la aplicación con el icono del martillo ubicado en la barra de herramientas y después ábrela con el botón de iniciar (Es necesaria la instalación de un emulador de android dentro de Android Studio).

   ![Instalación 1](img/install1.png) ![Instalación 2](img/install2.png)

8. Una vez completados estos pasos, la aplicación "Ricardo Tormo" debería ejecutarse en el emulador de Android Studio.

¡Disfruta de la aplicación "Ricardo Tormo"!
