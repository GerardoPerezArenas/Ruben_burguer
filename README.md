# 馃崝 My Little Diner TPV - Rub茅n Burguer

Sistema de Punto de Venta (TPV) profesional para restaurantes, dise帽ado espec铆ficamente para Rub茅n Hamburguer. Una aplicaci贸n web progresiva (PWA) que funciona como una app nativa en dispositivos m贸viles y tablets.

## 鉁?Caracter铆sticas

- 馃摫 **PWA (Progressive Web App)**: Inst谩lala como una app nativa en tu dispositivo
- 馃寪 **Funciona Offline**: Acceso completo sin conexi贸n a internet
- 馃摎 **Responsive**: Optimizada para m贸viles, tablets y escritorio
- 馃崝 **Gesti贸n de Mesas**: Control completo de mesas y zonas
- 馃摐 **Pedidos para Llevar**: Sistema de pedidos takeaway
- 馃搳 **Estad铆sticas en Tiempo Real**: Ventas, ticket medio, servicios
- 馃懁 **Multi-usuario**: Sistema de roles (Administrador, Camarero, Cocinero)
- 馃幆 **Impresi贸n de Tickets**: Generaci贸n autom谩tica de tickets de venta
- 馃帀 **Interfaz Moderna**: Dise帽o intuitivo y f谩cil de usar

## 馃殌 Instalaci贸n en M贸vil

### iPhone / iPad (iOS)

1. **Abre la app en Safari**
   - Visita la URL de la aplicaci贸n en Safari (no funciona en Chrome u otros navegadores)
   
2. **A帽adir a la pantalla de inicio**
   - Toca el bot贸n de compartir (馃摦) en la parte inferior de la pantalla
   - Despl谩zate y selecciona "A帽adir a pantalla de inicio"
   - Personaliza el nombre si deseas
   - Toca "A帽adir"

3. **Usar como app**
   - La aplicaci贸n aparecer谩 en tu pantalla de inicio con un icono
   - 脕brela desde ah铆 para usarla como una app nativa
   - Funcionar谩 a pantalla completa sin la barra de Safari

### Android

#### M茅todo 1: Desde Chrome

1. **Abre la app en Chrome**
   - Visita la URL de la aplicaci贸n en Google Chrome
   
2. **Instalar PWA**
   - Aparecer谩 autom谩ticamente un banner de instalaci贸n
   - O toca el men煤 (鈺?) y selecciona "Instalar aplicaci贸n" o "A帽adir a pantalla de inicio"
   
3. **Confirmar instalaci贸n**
   - Toca "Instalar" en el di谩logo que aparece
   - La app se instalar谩 como una aplicaci贸n nativa

#### M茅todo 2: Desde otros navegadores

1. Abre el navegador y visita la URL
2. Accede al men煤 de opciones
3. Selecciona "A帽adir a pantalla de inicio"
4. Confirma la instalaci贸n

### Tablet / Desktop

1. **Chrome o Edge**
   - Visita la URL
   - Haz clic en el icono de instalaci贸n (+) en la barra de direcciones
   - O ve a Men煤 鈫?M谩s herramientas 鈫?Crear acceso directo / Instalar

2. **Firefox**
   - No soporta instalaci贸n PWA completa, pero puedes a帽adir un marcador

## 馃摫 Requisitos del Sistema

- **iOS**: Safari 11.3 o superior
- **Android**: Chrome 70 o superior, Firefox 80+
- **Windows**: Chrome 70+, Edge 79+
- **macOS**: Safari 11.3+, Chrome 70+
- **Linux**: Chrome 70+, Firefox 80+

## 馃捇 Desarrollo Local

### Pre-requisitos

- Un servidor web local (puedes usar Python, Node.js, o cualquier servidor HTTP)
- Navegador web moderno

### Opci贸n 1: Con Python

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Luego abre: `http://localhost:8000`

### Opci贸n 2: Con Node.js

```bash
# Instalar servidor est谩tico global
npm install -g http-server

# Ejecutar servidor
http-server -p 8000
```

Luego abre: `http://localhost:8000`

### Opci贸n 3: Con PHP

```bash
php -S localhost:8000
```

Luego abre: `http://localhost:8000`

### Opci贸n 4: Extensi贸n VS Code

Si usas Visual Studio Code:
1. Instala la extensi贸n "Live Server"
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

## 馃搱 Estructura del Proyecto

```
Ruben_burguer/
鈹溾攢鈹?index.html          # Aplicaci贸n principal (TPV completo)
鈹溾攢鈹?manifest.json       # Manifiesto PWA (metadatos de la app)
鈹溾攢鈹?sw.js               # Service Worker (funcionalidad offline)
鈹斺攢鈹?README.md           # Este archivo
```

## 馃摐 Uso de la Aplicaci贸n

### Primer Acceso

1. **Usuario por defecto**: Selecciona un usuario del desplegable
2. **Contrase帽a por defecto**: Usa el PIN asignado a cada usuario
3. Las credenciales iniciales est谩n configuradas en el sistema

### Funcionalidades Principales

#### 馃懁 Gesti贸n de Usuarios
- Administrador: Acceso completo al sistema
- Camarero: Gesti贸n de mesas y pedidos
- Cocinero: Visualizaci贸n de pedidos para cocina

#### 馃崝 Gesti贸n de Mesas
- Abrir nueva mesa
- Asignar productos a la mesa
- Modificar pedidos
- Cerrar y cobrar mesa
- Ver estado de todas las mesas

#### 馃摐 Pedidos para Llevar
- Crear pedido takeaway
- Asignar productos
- Imprimir ticket
- Cobrar pedido

#### 馃搱 Estad铆sticas
- Mesas ocupadas
- Servicios del d铆a
- Ventas totales
- Ticket medio
- Pedidos para llevar

#### 馃帹 Gesti贸n de Productos
- A帽adir/Editar productos
- Organizar por categor铆as
- Gestionar precios
- Activar/Desactivar productos

## 馃寪 Despliegue en Producci贸n

### Opci贸n 1: GitHub Pages (Gratis)

1. Sube los archivos a un repositorio de GitHub
2. Ve a Settings 鈫?Pages
3. Selecciona la rama principal
4. Tu app estar谩 disponible en: `https://usuario.github.io/repositorio`

### Opci贸n 2: Netlify (Gratis)

1. Crea una cuenta en [Netlify](https://netlify.com)
2. Arrastra la carpeta del proyecto a Netlify
3. Tu app estar谩 disponible con HTTPS autom谩tico

### Opci贸n 3: Vercel (Gratis)

1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta: `vercel`
3. Sigue las instrucciones

### Opci贸n 4: Servidor Propio

1. Sube los archivos a tu servidor web
2. Aseg煤rate de que el servidor soporte HTTPS (requerido para PWA)
3. Configura los permisos apropiados

## 馃敀 Seguridad

- 鉁?**HTTPS Requerido**: Para PWA y Service Workers
- 鉁?**Datos Locales**: Todos los datos se almacenan en localStorage del navegador
- 鉁?**Sin Backend**: No requiere servidor de base de datos
- 鈿狅笍 **Backup**: Exporta regularmente los datos desde el panel de administraci贸n

## 馃З Soporte de Navegadores

| Navegador | Soporte PWA | Offline | Notificaciones |
|-----------|-------------|---------|----------------|
| Chrome (Android) | 鉁?| 鉁?| 鉁?|
| Safari (iOS) | 鉁?| 鉁?| 鉁?|
| Edge | 鉁?| 鉁?| 鉁?|
| Firefox | Parcial | 鉁?| 鉁?|
| Samsung Internet | 鉁?| 鉁?| 鉁?|

## 馃洜锔?Soluci贸n de Problemas

### La app no se instala
- Aseg煤rate de estar usando HTTPS (no HTTP)
- Verifica que est茅s usando un navegador compatible
- Intenta limpiar la cach茅 del navegador

### No funciona offline
- La primera visita requiere conexi贸n para cargar recursos
- Abre la consola del navegador (F12) y verifica el Service Worker
- Refresca la p谩gina con Ctrl+F5

### Los datos se perdieron
- localStorage puede limpiarse si se borran los datos del navegador
- Exporta regularmente desde el panel de administrador
- Considera usar el backup autom谩tico del sistema

### Problemas de rendimiento
- Cierra otras pesta帽as del navegador
- Reinicia la aplicaci贸n
- Limpia datos antiguos desde el panel de administraci贸n

## 馃搫 Licencia

Este proyecto es propietario y est谩 dise帽ado espec铆ficamente para Rub茅n Hamburguer.

## 馃摟 Contacto

Para soporte o consultas sobre la aplicaci贸n, contacta con el administrador del sistema.

---

**Versi贸n**: 3.5  
**脷ltima actualizaci贸n**: Diciembre 2024  
**Desarrollado para**: Rub茅n Hamburguer 馃崝
