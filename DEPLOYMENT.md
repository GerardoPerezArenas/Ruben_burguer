# 🚀 Guía de Despliegue - Ruben Burguer App

Guía completa para desplegar la aplicación en diferentes plataformas.

## 📱 Opciones de Despliegue

1. **Aplicación Móvil Nativa** (Android/iOS)
2. **Progressive Web App** (PWA)
3. **Servidor Web** (Hosting tradicional)

---

## 1. 📱 Aplicación Móvil Nativa

### Android - Google Play Store

#### Requisitos previos:
- Cuenta de desarrollador de Google Play ($25 USD, pago único)
- Android Studio instalado
- Keystore generado para firma de APKs

#### Pasos:

1. **Generar APK firmado:**
```bash
cd android
./gradlew bundleRelease
```

2. **Ubicar el Bundle:**
`android/app/build/outputs/bundle/release/app-release.aab`

3. **Subir a Google Play Console:**
   - Ir a https://play.google.com/console
   - Crear nueva aplicación
   - Completar información de la app:
     - Nombre
     - Descripción corta y larga
     - Capturas de pantalla (mínimo 2)
     - Icono de la aplicación (512x512 px)
     - Gráfico destacado (1024x500 px)
     - Categoría
     - Clasificación de contenido
   - Subir el AAB en "Versiones de la aplicación"
   - Enviar para revisión

4. **Proceso de revisión:**
   - Google revisa en 1-3 días
   - Recibirás notificaciones por email
   - Una vez aprobada, estará disponible en Play Store

#### Actualizaciones posteriores:
```bash
# Incrementar versionCode y versionName en android/app/build.gradle
# Compilar nueva versión
./gradlew bundleRelease
# Subir nuevo AAB a Google Play Console
```

---

### iOS - Apple App Store

#### Requisitos previos:
- Apple Developer Program ($99 USD/año)
- Mac con Xcode
- Certificado de distribución

#### Pasos:

1. **Preparar en Xcode:**
   - Incrementar Build y Version en Info.plist
   - Product > Archive
   - Esperar compilación

2. **Distribuir:**
   - Window > Organizer
   - Seleccionar el archivo
   - "Distribute App" > "App Store Connect"
   - Seguir el asistente

3. **App Store Connect:**
   - Ir a https://appstoreconnect.apple.com
   - Completar información:
     - Nombre
     - Descripción
     - Palabras clave
     - Capturas de pantalla (varios tamaños)
     - Icono (1024x1024 px)
     - Categoría
     - Clasificación por edades
   - Enviar para revisión

4. **Proceso de revisión:**
   - Apple revisa en 1-5 días
   - Puede solicitar cambios o aclaraciones
   - Una vez aprobada, puedes publicarla manualmente o automáticamente

---

## 2. 🌐 Progressive Web App (PWA)

La aplicación ya está configurada como PWA. Solo necesitas un servidor HTTPS.

### Opciones de Hosting:

#### A) Netlify (Gratuito, Recomendado)

1. **Instalar Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Desplegar:**
```bash
cd /ruta/a/Ruben_burguer
netlify deploy --dir=www --prod
```

3. **Configurar dominio personalizado** (opcional) en el panel de Netlify

#### B) Vercel (Gratuito)

1. **Instalar Vercel CLI:**
```bash
npm install -g vercel
```

2. **Desplegar:**
```bash
cd /ruta/a/Ruben_burguer
vercel --prod
```

3. **Configurar:**
   - Directorio: `www`
   - Framework: None
   - Build Command: (dejar vacío)
   - Output Directory: `www`

#### C) GitHub Pages (Gratuito)

1. **Crear repositorio en GitHub** (si no existe)

2. **Configurar GitHub Actions:**
Crear `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./www
```

3. **Habilitar GitHub Pages** en Settings > Pages

#### D) Firebase Hosting (Gratuito)

1. **Instalar Firebase CLI:**
```bash
npm install -g firebase-tools
```

2. **Inicializar Firebase:**
```bash
firebase login
firebase init hosting
```

3. **Configurar:**
   - Public directory: `www`
   - Single-page app: Yes
   - Automatic builds: No

4. **Desplegar:**
```bash
firebase deploy
```

---

## 3. 🖥️ Servidor Web Tradicional

### Apache

1. **Copiar archivos:**
```bash
cp -r www/* /var/www/html/ruben-burguer/
```

2. **Configurar .htaccess:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Habilitar HTTPS
<IfModule mod_headers.c>
  Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
</IfModule>

# Cache para assets estáticos
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType image/png "access plus 1 year"
</IfModule>
```

### Nginx

1. **Copiar archivos:**
```bash
cp -r www/* /usr/share/nginx/html/ruben-burguer/
```

2. **Configurar nginx.conf:**
```nginx
server {
    listen 80;
    server_name tudominio.com;
    root /usr/share/nginx/html/ruben-burguer;
    index index.html;

    # Redirigir a HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name tudominio.com;
    root /usr/share/nginx/html/ruben-burguer;
    index index.html;

    # Certificados SSL
    ssl_certificate /ruta/a/cert.pem;
    ssl_certificate_key /ruta/a/key.pem;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache para assets
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Service Worker sin cache
    location = /sw.js {
        add_header Cache-Control "no-cache";
    }
}
```

3. **Reiniciar Nginx:**
```bash
sudo systemctl restart nginx
```

---

## 📊 Checklist de Pre-Despliegue

- [ ] Todas las funcionalidades probadas
- [ ] Iconos generados y en su lugar
- [ ] Manifest.json configurado correctamente
- [ ] Service Worker funcionando
- [ ] Versión actualizada en package.json
- [ ] Sin errores en consola del navegador
- [ ] Probado en múltiples dispositivos
- [ ] Capturas de pantalla preparadas
- [ ] Descripciones escritas
- [ ] Políticas de privacidad preparadas (requerido para stores)
- [ ] Términos de servicio preparados (requerido para stores)

---

## 🔐 Seguridad

### HTTPS Obligatorio
- Las PWAs requieren HTTPS para funcionar completamente
- Usa Let's Encrypt (gratuito) o certificados de tu proveedor

### Content Security Policy (CSP)
Añadir en el `<head>` de index.html:
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' 'unsafe-eval'; 
               style-src 'self' 'unsafe-inline';">
```

### Headers de Seguridad
En tu servidor, configurar:
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: no-referrer-when-downgrade
```

---

## 📈 Analytics y Monitoreo

### Google Analytics
Añadir en `www/index.html` antes de `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Sentry (Monitoreo de errores)
```bash
npm install @sentry/browser
```

En `www/js/app.js` al inicio:
```javascript
import * as Sentry from "@sentry/browser";
Sentry.init({ dsn: "TU_DSN_DE_SENTRY" });
```

---

## 🔄 Actualización de la App

### PWA
1. Modificar archivos en `www/`
2. Actualizar versión en `www/manifest.json`
3. Redesplegar en tu servidor
4. Los usuarios recibirán la actualización automáticamente

### App Nativa
1. Incrementar versión en package.json
2. Actualizar versionCode/versionName (Android)
3. Actualizar version/build (iOS)
4. Recompilar
5. Subir a stores
6. Los usuarios verán la actualización disponible

---

## 💰 Costos Estimados

| Servicio | Costo |
|----------|-------|
| Google Play Developer | $25 USD (único) |
| Apple Developer Program | $99 USD/año |
| Netlify/Vercel/Firebase (hosting) | Gratis (plan básico) |
| Dominio personalizado | $10-15 USD/año |
| Certificado SSL | Gratis (Let's Encrypt) |

**Total mínimo para apps nativas:** ~$124 USD primer año, ~$99/año después

**Total para solo PWA:** $0-15 USD/año

---

## 🆘 Soporte de Despliegue

### Problemas comunes:

**"App rechazada por la store"**
- Leer atentamente el feedback
- Corregir los problemas señalados
- Reenviar para revisión

**"PWA no se instala"**
- Verificar HTTPS activo
- Comprobar manifest.json válido
- Verificar Service Worker registrado

**"Errores 404 en producción"**
- Configurar correctamente el servidor para SPA
- Ver configuraciones de Apache/Nginx arriba

---

## 📞 Contacto

Para asistencia con el despliegue:
- Email: [tu-email@ejemplo.com]
- Issues: [repositorio-github]

---

**¡Buena suerte con el lanzamiento! 🚀**
