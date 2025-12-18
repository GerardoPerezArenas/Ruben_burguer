# 📲 Guía de Instalación - My Little Diner TPV

## 🎯 Requisitos Previos

- Un dispositivo móvil (Android/iOS) o computadora
- Navegador moderno (Chrome, Safari, Edge)
- Conexión a internet (solo para la primera instalación)

## 📱 Instalación en Android

### Método 1: Chrome (Recomendado)

1. **Abre Chrome** en tu dispositivo Android
2. **Navega** a la URL de la aplicación
3. Busca el **banner de instalación** que aparece automáticamente
4. Toca **"Añadir a pantalla de inicio"** o **"Instalar"**
5. Confirma la instalación
6. ¡Listo! La app aparecerá en tu lista de aplicaciones

### Método 2: Manual

1. Abre la aplicación en Chrome
2. Toca el menú **⋮** (tres puntos) en la esquina superior derecha
3. Selecciona **"Añadir a pantalla de inicio"**
4. Escribe un nombre para el acceso directo
5. Toca **"Añadir"**

## 🍎 Instalación en iOS (iPhone/iPad)

### Safari (Único método oficial)

1. **Abre Safari** (debe ser Safari, otros navegadores no soportan PWA en iOS)
2. **Navega** a la URL de la aplicación
3. Toca el botón de **compartir** 📤 en la parte inferior
4. Desplázate hacia abajo y toca **"Añadir a pantalla de inicio"**
5. Edita el nombre si lo deseas
6. Toca **"Añadir"**
7. La app aparecerá como un icono en tu pantalla de inicio

**Nota importante**: En iOS, la PWA solo funciona correctamente con Safari. Chrome y otros navegadores en iOS no soportan completamente las PWAs.

## 💻 Instalación en Desktop/PC

### Windows/Mac/Linux

#### Chrome/Edge:

1. Abre la aplicación en Chrome o Edge
2. Busca el icono **⊕** o **🖥️** en la barra de direcciones
3. Haz clic en **"Instalar"**
4. La app se instalará como una aplicación de escritorio
5. Puedes anclarla a la barra de tareas o escritorio

#### Método alternativo:

1. Abre el menú del navegador **⋮**
2. Selecciona **"Instalar My Little Diner TPV"**
3. Confirma la instalación

## 🌐 Instalación desde Servidor Local

Si tienes los archivos descargados:

### Opción 1: Python Simple Server

```bash
# Navega a la carpeta del proyecto
cd Ruben_burguer

# Inicia el servidor (Python 3)
python -m http.server 8000

# O Python 2
python -m SimpleHTTPServer 8000

# Abre en navegador: http://localhost:8000
```

### Opción 2: Node.js http-server

```bash
# Instala http-server (una sola vez)
npm install -g http-server

# O usa npx (sin instalación)
npx http-server -p 8000

# Abre en navegador: http://localhost:8000
```

### Opción 3: PHP

```bash
# Inicia servidor PHP
php -S localhost:8000

# Abre en navegador: http://localhost:8000
```

### Opción 4: npm start

```bash
# Si tienes Node.js instalado
npm start
# Esto abrirá automáticamente el navegador
```

## ☁️ Despliegue en Internet

### GitHub Pages (Gratis)

1. Sube los archivos a un repositorio de GitHub
2. Ve a **Settings** → **Pages**
3. Selecciona la rama **main** y carpeta **/ (root)**
4. Guarda los cambios
5. Tu app estará disponible en: `https://usuario.github.io/repo`

### Netlify (Gratis)

1. Crea cuenta en [netlify.com](https://netlify.com)
2. Arrastra la carpeta del proyecto a Netlify Drop
3. ¡Listo! Tu app estará online en segundos
4. Obtendrás una URL como: `https://nombre-app.netlify.app`

### Vercel (Gratis)

1. Crea cuenta en [vercel.com](https://vercel.com)
2. Instala Vercel CLI: `npm install -g vercel`
3. En la carpeta del proyecto: `vercel`
4. Sigue las instrucciones
5. Tu app estará online

## ✅ Verificar Instalación

Una vez instalada, verifica que:

- [ ] El icono de la app aparece en tu pantalla de inicio
- [ ] Al abrir la app, se ve en pantalla completa (sin barra del navegador)
- [ ] Funciona sin conexión a internet (modo offline)
- [ ] Los datos persisten al cerrar y abrir la app
- [ ] Puedes acceder al panel de administración

## 🔄 Actualización de la App

La aplicación se actualiza automáticamente cuando:

1. Hay una nueva versión disponible
2. Abres la aplicación con conexión a internet
3. El Service Worker detecta cambios

Si ves el mensaje "Nueva versión disponible":
- Cierra completamente la app
- Vuelve a abrirla
- La nueva versión se cargará automáticamente

## 🛠️ Solución de Problemas

### ❌ No aparece la opción de instalación

**Solución**:
- Verifica que uses HTTPS (o localhost)
- Usa Chrome en Android o Safari en iOS
- Asegúrate de que el `manifest.json` esté accesible
- Limpia la cache del navegador

### ❌ La app no funciona offline

**Solución**:
- Abre la app al menos una vez con internet
- Verifica que el Service Worker se haya registrado
- Abre DevTools → Application → Service Workers
- Comprueba que esté activo

### ❌ Los iconos no aparecen

**Solución**:
- Verifica que `icon-192.svg` y `icon-512.svg` existan
- Comprueba las rutas en `manifest.json`
- Limpia cache y reinstala

### ❌ Se pierden los datos

**Solución**:
- No uses modo incógnito
- Permite almacenamiento local en configuración del navegador
- Haz backups regulares desde el panel de admin
- Verifica que el navegador no borre datos automáticamente

### ❌ No puedo hacer login

**Usuarios por defecto**:
- Admin: `admin` / `admin123`
- Camarero: `camarero` / `cam123`

## 📞 Soporte Técnico

Si encuentras problemas:

1. **Revisa la consola**:
   - Presiona F12 (PC) o inspecciona elemento
   - Ve a la pestaña Console
   - Copia los errores

2. **Revisa Service Worker**:
   - F12 → Application → Service Workers
   - Verifica el estado

3. **Limpia datos**:
   - Configuración del navegador
   - Borrar datos de sitio web
   - Reinstala la app

4. **Backup de datos**:
   - Antes de cualquier acción, usa Backup Manual
   - Panel Admin → Herramientas Avanzadas → Backup

## 🎓 Recursos Adicionales

- [MDN: Progressive Web Apps](https://developer.mozilla.org/es/docs/Web/Progressive_web_apps)
- [Google: PWA Checklist](https://web.dev/pwa-checklist/)
- [Can I Use: Service Worker](https://caniuse.com/serviceworkers)

## ✨ Características Post-Instalación

Una vez instalada, la app ofrece:

- ✅ **Modo offline completo**
- ✅ **Notificaciones push** (si las activas)
- ✅ **Actualizaciones automáticas**
- ✅ **Experiencia nativa**
- ✅ **Sin publicidad**
- ✅ **Menor consumo de datos**
- ✅ **Mayor rendimiento**

---

**¿Necesitas ayuda?** Revisa el README.md para más información.
