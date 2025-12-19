# 🍔 My Little Diner TPV - Sistema de Punto de Venta

## 📱 Aplicación Móvil PWA

Sistema completo de punto de venta (TPV) diseñado específicamente para restaurantes. Funciona como una aplicación web progresiva (PWA) que puede instalarse en dispositivos móviles y ordenadores.

## ✨ Características Principales

### 🎯 Gestión de Mesas
- Vista en tiempo real del estado de todas las mesas
- Estados visuales: Libre, Ocupada, Pagado
- Control de tiempo de ocupación
- Gestión por zonas (Terraza, Barra, Comedor, etc.)

### 📋 Sistema de Pedidos
- Catálogo completo de productos por categorías
- Búsqueda rápida de productos
- Modificadores y personalizaciones
- Información de alérgenos
- Pedidos para llevar
- Sistema de combos paso a paso

### 💰 Gestión de Cobros
- Múltiples métodos de pago (Efectivo, Tarjeta, Bizum)
- Impresión de tickets
- Registro de propinas
- Histórico de ventas

### 👥 Control de Personal
- Sistema de usuarios con roles (Admin/Camarero)
- Autenticación segura con contraseñas
- Registro de actividad por usuario
- Estadísticas de ventas por camarero

### 📊 Analytics y Reportes
- Dashboard con métricas en tiempo real
- Reportes de ventas detallados
- Productos más vendidos
- Análisis de horarios pico
- Exportación de datos

### 🔧 Características Técnicas
- **PWA**: Se instala como aplicación nativa
- **Offline**: Funciona sin conexión a internet
- **LocalStorage**: Persistencia local de datos
- **Responsive**: Optimizado para móviles y tablets
- **Service Worker**: Cache inteligente
- **Backup automático**: Copias de seguridad cada 10 minutos
- **Sistema de recuperación**: Manejo robusto de errores

## 🚀 Instalación

### Opción 1: Instalar como PWA (Recomendado)

1. Abre la aplicación en tu navegador móvil (Chrome, Safari, Edge)
2. Busca la opción "Añadir a pantalla de inicio" o "Instalar app"
3. La aplicación se instalará como una app nativa en tu dispositivo

### Opción 2: Servidor Web Local

```bash
# Usando Python
python -m http.server 8000

# Usando Node.js
npx http-server -p 8000

# Luego abre en tu navegador:
# http://localhost:8000
```

### Opción 3: Servidor Web

Sube los archivos a cualquier hosting web:
- GitHub Pages
- Netlify
- Vercel
- Tu propio servidor Apache/Nginx

## 📂 Estructura de Archivos

```
Ruben_burguer/
├── index.html              # Aplicación principal
├── manifest.json           # Configuración PWA
├── sw.js                   # Service Worker
├── icon-192.svg            # Icono 192x192
├── icon-512.svg            # Icono 512x512
├── package.json            # Configuración del proyecto
└── README.md               # Este archivo
```

## 🔐 Usuarios por Defecto

### Administrador
- **Usuario**: admin
- **Contraseña**: admin123
- **Permisos**: Acceso completo al sistema

### Camarero
- **Usuario**: camarero
- **Contraseña**: cam123
- **Permisos**: Gestión de pedidos y cobros

## 💡 Uso Rápido

1. **Login**: Usa las credenciales de administrador o camarero
2. **Seleccionar Mesa**: Click en una mesa libre
3. **Añadir Productos**: Selecciona productos del menú
4. **Confirmar Pedido**: Guarda el pedido
5. **Cobrar**: Cuando el cliente termine, cobra la mesa
6. **Liberar Mesa**: La mesa queda lista para el siguiente cliente

## 🛠️ Panel de Administración

El administrador tiene acceso a:
- ➕ Gestión de productos
- 👥 Gestión de usuarios
- 🗺️ Configuración de zonas y mesas
- 📊 Reportes y analytics
- 🔧 Herramientas del sistema
- 💾 Backup y restauración

## 📱 Características PWA

### Ventajas de la PWA
- ✅ Se instala como app nativa
- ✅ Funciona offline
- ✅ Actualizaciones automáticas
- ✅ Push notifications (opcional)
- ✅ Ocupa menos espacio que app nativa
- ✅ No requiere App Store ni Google Play
- ✅ Se actualiza instantáneamente

### Compatibilidad
- ✅ Android: Chrome, Edge, Samsung Internet
- ✅ iOS: Safari 11.3+
- ✅ Desktop: Chrome, Edge, Opera
- ⚠️ Firefox (soporte limitado de PWA)

## 🔒 Seguridad y Privacidad

- Todos los datos se almacenan localmente en el dispositivo
- No se envían datos a servidores externos
- Sistema de autenticación con contraseñas hasheadas
- Backup automático de datos
- Sistema de recuperación ante errores

## 🆘 Solución de Problemas

### La app no se instala
- Verifica que uses HTTPS (o localhost)
- Usa Chrome o Edge en Android
- Usa Safari en iOS
- Limpia la cache del navegador

### Los datos se pierden
- Usa la función de backup manual
- Verifica que el navegador no borre datos automáticamente
- No uses modo incógnito

### Error de permisos
- Permite que la app acceda a almacenamiento local
- Verifica permisos en configuración del navegador

## 🔄 Actualizaciones

El sistema incluye Service Worker que detecta automáticamente nuevas versiones. Cuando hay una actualización:

1. Verás una notificación
2. Recarga la página
3. La nueva versión se descarga automáticamente

## 🛡️ Sistema de Recuperación

El sistema incluye:
- Backup automático cada 10 minutos
- Recuperación automática ante errores
- Sistema de logs para debugging
- Validación de integridad de datos

## 📞 Soporte

Para soporte o reportar problemas:
1. Revisa la consola del navegador (F12)
2. Usa el sistema de logs integrado
3. Crea un backup antes de cualquier cambio importante

## 📝 Licencia

Este proyecto es privado y está protegido por derechos de autor.

## 🎨 Personalización

Para personalizar la app:
1. Modifica los colores en las variables CSS (`:root`)
2. Cambia el logo (sube `logo.png` en la raíz)
3. Edita el nombre en `manifest.json`
4. Configura productos, mesas y zonas desde el panel admin

## 🚀 Tecnologías

- HTML5
- CSS3 (Variables CSS, Grid, Flexbox)
- JavaScript (ES6+)
- Service Worker API
- Cache API
- LocalStorage API
- PWA APIs

---

**Versión**: 9.0  
**Última actualización**: Diciembre 2024  
**Estado**: Producción ✅
