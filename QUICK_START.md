# 🚀 Quick Start - Ruben Burguer App

Guía rápida para comenzar con la aplicación móvil de Ruben Burguer.

## ⚡ Inicio Rápido (5 minutos)

### 1. Instalar dependencias
```bash
npm install
```

### 2. Probar en navegador
```bash
npm run serve
```

Abre http://localhost:8080 en tu navegador

### 3. Generar iconos
1. Abre `generate-icons.html` en un navegador
2. Click en "Generar Todos los Iconos"
3. Guarda cada icono en `www/img/`

### 4. Compilar para móvil

#### Android:
```bash
npm run android
```
- Se abrirá Android Studio
- Conecta un dispositivo o inicia un emulador
- Click en "Run" (▶️)

#### iOS (solo macOS):
```bash
npm run ios
```
- Se abrirá Xcode
- Selecciona un simulador o dispositivo
- Click en "Run" (▶️)

## 📁 Estructura de Archivos

```
www/
├── index.html          # Página principal
├── manifest.json       # Configuración PWA
├── sw.js              # Service Worker (offline)
├── css/
│   └── styles.css     # Todos los estilos
├── js/
│   └── app.js         # Toda la lógica
└── img/               # Iconos de la app
```

## 🔧 Modificar la App

### Cambiar estilos:
Edita `www/css/styles.css`

### Cambiar funcionalidad:
Edita `www/js/app.js`

### Cambiar estructura HTML:
Edita `www/index.html`

**Después de cualquier cambio:**
```bash
npm run sync
```

## 📱 Funcionalidades Principales

### Login
- Usuario predeterminado: **Admin**
- Contraseña: **admin123**

### Gestión de Mesas
- Click en una mesa libre → Crear pedido
- Click en mesa ocupada → Ver/editar pedido
- Long press en mesa → Opciones rápidas

### Panel Admin
- Gestión de usuarios
- Gestión de productos
- Gestión de zonas
- Analytics y reportes

### Pedidos Para Llevar
- Click en botón flotante 🥡
- Añadir productos
- Guardar con nombre de cliente

## 🎨 Personalización Rápida

### Cambiar colores principales:
Edita en `www/css/styles.css`:
```css
:root {
  --c-brand: #f85065;      /* Color principal */
  --c-accent: #63907a;     /* Color secundario */
  --c-brand-light: #f6a9bc; /* Color de fondo */
}
```

### Cambiar nombre de la app:
Edita `capacitor.config.json`:
```json
{
  "appName": "Tu Nombre Aquí"
}
```

### Cambiar logo:
Reemplaza los iconos en `www/img/` o usa `generate-icons.html`

## 🐛 Problemas Comunes

### "No se pueden cargar los estilos"
```bash
# Verifica que los archivos estén en www/
ls -la www/css/
ls -la www/js/
```

### "La app no se actualiza"
```bash
# Limpia y sincroniza
npm run sync
# Luego recompila desde Android Studio o Xcode
```

### "Error al instalar dependencias"
```bash
# Elimina node_modules y reinstala
rm -rf node_modules package-lock.json
npm install
```

## 📚 Próximos Pasos

1. ✅ Lee el [README.md](README.md) completo
2. ✅ Revisa la [BUILD_GUIDE.md](BUILD_GUIDE.md) para publicar
3. ✅ Personaliza según tus necesidades
4. ✅ Prueba en dispositivos reales
5. ✅ Compila versión de producción

## 🆘 Ayuda

- 📖 [Documentación de Capacitor](https://capacitorjs.com/docs)
- 🐛 [Reportar problema](issues)
- 💬 Contacto: [tu-email@ejemplo.com]

## ✨ Características

- ✅ Offline first (funciona sin internet)
- ✅ Optimizado para móviles
- ✅ PWA instalable
- ✅ Almacenamiento local
- ✅ Backup automático
- ✅ Interface intuitiva
- ✅ Gestos táctiles
- ✅ Notificaciones
- ✅ Analytics integrado

---

**¡Listo para empezar! 🎉**
