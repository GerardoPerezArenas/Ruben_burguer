# Ruben Burguer TPV - Aplicación Móvil

Sistema de Punto de Venta (TPV) para restaurante convertido en aplicación móvil nativa usando Capacitor.

## 📱 Características

- ✅ Aplicación nativa para Android e iOS
- ✅ Funciona offline con almacenamiento local
- ✅ Interfaz optimizada para móviles
- ✅ Sistema de gestión de mesas y pedidos
- ✅ Panel de administración
- ✅ Analytics y reportes
- ✅ Sistema de recuperación automática
- ✅ PWA (Progressive Web App)

## 🚀 Instalación

### Requisitos previos

- Node.js (v14 o superior)
- npm o yarn
- Para Android: Android Studio
- Para iOS: Xcode (solo en macOS)

### Instalar dependencias

```bash
npm install
```

## 🛠️ Desarrollo

### Probar en navegador

```bash
npm run serve
```

Esto iniciará un servidor local en http://localhost:8080

### Sincronizar cambios con las plataformas nativas

```bash
npm run sync
```

## 📦 Compilar para plataformas

### Android

1. Añadir y abrir proyecto Android:
```bash
npm run android
```

2. En Android Studio:
   - Conectar un dispositivo Android o iniciar un emulador
   - Click en "Run" o presionar Shift+F10

### iOS (solo en macOS)

1. Añadir y abrir proyecto iOS:
```bash
npm run ios
```

2. En Xcode:
   - Seleccionar un dispositivo iOS o simulador
   - Click en "Run" o presionar Cmd+R

## 📂 Estructura del proyecto

```
Ruben_burguer/
├── www/                    # Archivos web (HTML, CSS, JS)
│   ├── index.html         # Página principal
│   ├── manifest.json      # Manifest PWA
│   ├── sw.js             # Service Worker
│   ├── css/
│   │   └── styles.css    # Estilos de la aplicación
│   ├── js/
│   │   └── app.js        # Lógica de la aplicación
│   └── img/              # Imágenes e iconos
├── android/               # Proyecto Android (generado)
├── ios/                   # Proyecto iOS (generado)
├── capacitor.config.json  # Configuración de Capacitor
├── package.json          # Dependencias y scripts
└── README.md             # Este archivo
```

## ⚙️ Configuración

### Capacitor

La configuración de Capacitor se encuentra en `capacitor.config.json`:

```json
{
  "appId": "com.rubenburguer.app",
  "appName": "Ruben Burguer",
  "webDir": "www"
}
```

### Manifest PWA

El archivo `www/manifest.json` contiene la configuración para Progressive Web App.

## 🎨 Personalización

### Iconos de la app

Los iconos de la aplicación se deben colocar en `www/img/` con los siguientes tamaños:
- 72x72, 96x96, 128x128, 144x144, 152x152, 192x192, 384x384, 512x512

### Colores

Los colores principales están definidos en `www/css/styles.css`:
- Brand: #F85065 (rosa)
- Accent: #63907a (verde)
- Background: #f6a9bc (rosa claro)

## 📱 Funcionalidades principales

### Sistema de Mesas
- Visualización de mesas por zonas
- Estados: Libre, Ocupada, Pagado
- Tiempo de ocupación en tiempo real

### Gestión de Pedidos
- Añadir productos al pedido
- Modificadores de productos
- Pedidos para llevar
- Historial de pedidos

### Panel de Administración
- Gestión de usuarios
- Gestión de productos
- Gestión de zonas
- Analytics y reportes
- Herramientas avanzadas

### Sistema de Recuperación
- Backup automático cada 10 minutos
- Backup manual bajo demanda
- Restauración desde archivo
- Verificación de integridad

## 🔧 Scripts disponibles

- `npm run serve` - Inicia servidor de desarrollo
- `npm run android` - Prepara y abre proyecto Android
- `npm run ios` - Prepara y abre proyecto iOS
- `npm run sync` - Sincroniza cambios con plataformas nativas
- `npm run copy` - Copia archivos web a plataformas nativas
- `npm run update` - Actualiza plugins de Capacitor

## 🐛 Solución de problemas

### La app no carga en Android/iOS

1. Verificar que los archivos estén en `www/`
2. Ejecutar `npm run sync`
3. Limpiar y reconstruir el proyecto en Android Studio/Xcode

### Error de CORS en desarrollo

Usar `npm run serve` para evitar problemas de CORS en desarrollo local.

### Cambios no se reflejan en la app

1. Hacer cambios en los archivos de `www/`
2. Ejecutar `npm run sync`
3. Reconstruir la app desde Android Studio/Xcode

## 📄 Licencia

MIT

## 👨‍💻 Autor

Ruben Burguer Team

## 🆘 Soporte

Para problemas o preguntas, abrir un issue en el repositorio.

## 🔄 Actualizaciones

### Version 9.0.0
- ✅ Conversión a aplicación móvil nativa
- ✅ Implementación de Capacitor
- ✅ Optimizaciones para móviles
- ✅ Service Worker para funcionamiento offline
- ✅ PWA completa
