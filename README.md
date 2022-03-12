# REACT CANDY GAME
- Proyecto basado en el famoso juego *Candy Crush* realizado en *REACT*, *TypeScript*, *Ionic* y *Capacitor*.
- Puede probar el juego en [reactCandyGame](https://manuuarizaa/github.io/reactCandyGame).
- Por ahora, solo compatible en web desde PC.

### Instrucciones para ponerlo en marcha
- Instalar [Ionic CLI](https://ionicframework.com/docs/intro/cli): `npm install -g @ionic/cli`
- Instalar librerías de Node: `npm install`
- Ejecutar el comando `ionic serve` para lanzar el juego en localhost (Añadir la etiqueta `--prod` si queremos lanzarlo en modo de producción)

### Compilar el juego en Android
- Si no existe la carpeta **android**: `ionic cap add android`
- `ionic cap run android` (Si lo queremos en modo producción añadir la etiqueta `--prod` al comando)

### Compilar el juego en iOS
- Si no existe la carpeta **ios**: `ionic cap add ios`
- `ionic cap run ios` (Si lo queremos en modo producción añadir la etiqueta `--prod` al comando)

### Problemas con EACCESS al instalar paquete globales (etiqueta -g en la instalación)
- Instalar nvm con el comando `sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`
- Cierra la terminal actual y abre una nueva
- Ejecuta `command -v nvm`, si el comando imprime algo, se ha instalado **nvm** de forma satisfactoria
- `nvm install --lts`
- `nvm alias default lts/*`
- Ejecuta `which npm` y ahora saldrá como respuesta que npm está sobre la carpeta **~/.nvm**. Los paquetes globales ahora se instalarán sin problema
- Más información en la página de [ionicframework](https://ionicframework.com/docs/developing/tips#resolving-permission-errors)


