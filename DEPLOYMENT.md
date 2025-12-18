# 馃殌 Gu铆a de Despliegue - My Little Diner TPV

Esta gu铆a proporciona instrucciones detalladas para desplegar la aplicaci贸n TPV como una aplicaci贸n web progresiva (PWA) accesible desde dispositivos m贸viles.

## 馃摫 Qu茅 es una PWA

Una Progressive Web App (PWA) es una aplicaci贸n web que se comporta como una app nativa:
- Se instala en el dispositivo sin necesidad de App Store/Play Store
- Funciona offline despu茅s de la primera carga
- Aparece en la pantalla de inicio con su propio icono
- Se ejecuta a pantalla completa sin barras del navegador
- M谩s r谩pida que una web tradicional
- Actualizaciones autom谩ticas sin necesidad de reinstalar

## 馃寪 Opciones de Hosting

### 1. GitHub Pages (Recomendado - Gratis)

**Ventajas**: Gratis, HTTPS autom谩tico, f谩cil de configurar
**Desventajas**: P煤blico (cualquiera puede ver el c贸digo)

**Pasos**:

1. Aseg煤rate de tener una cuenta de GitHub
2. El repositorio debe ser p煤blico o usar GitHub Pro para repos privados
3. Ve a Settings 鈫?Pages
4. En "Source", selecciona la rama `main` o `master`
5. Guarda los cambios
6. Tu aplicaci贸n estar谩 disponible en: `https://[usuario].github.io/[repositorio]`

**Tiempo de despliegue**: 2-5 minutos

### 2. Netlify (Recomendado - Gratis con m谩s caracter铆sticas)

**Ventajas**: Gratis, HTTPS autom谩tico, dominio personalizado, despliegue continuo
**Desventajas**: Requiere cuenta

**Pasos**:

1. Crea una cuenta en [netlify.com](https://netlify.com)
2. Haz clic en "Add new site" 鈫?"Deploy manually"
3. Arrastra la carpeta del proyecto a la zona de drop
4. Netlify desplegar谩 autom谩ticamente
5. Tu app estar谩 en: `https://[nombre-aleatorio].netlify.app`
6. Puedes personalizar el nombre o usar tu propio dominio

**Tiempo de despliegue**: 1-2 minutos

### 3. Vercel (Gratis)

**Ventajas**: Muy r谩pido, HTTPS autom谩tico, excelente para PWAs
**Desventajas**: Requiere CLI o cuenta de GitHub

**Pasos**:

1. Crea una cuenta en [vercel.com](https://vercel.com)
2. Instala Vercel CLI: `npm install -g vercel`
3. En la carpeta del proyecto, ejecuta: `vercel`
4. Sigue las instrucciones en pantalla
5. Tu app estar谩 desplegada con URL: `https://[proyecto].vercel.app`

**Tiempo de despliegue**: 1-2 minutos

### 4. Cloudflare Pages (Gratis)

**Ventajas**: Red CDN global, muy r谩pido, HTTPS autom谩tico
**Desventajas**: Requiere cuenta

**Pasos**:

1. Crea una cuenta en [pages.cloudflare.com](https://pages.cloudflare.com)
2. Conecta tu repositorio de GitHub
3. Configura el proyecto (sin build command necesario)
4. Despliega
5. Tu app estar谩 en: `https://[proyecto].pages.dev`

**Tiempo de despliegue**: 2-3 minutos

### 5. Firebase Hosting (Gratis)

**Ventajas**: Infraestructura de Google, muy confiable
**Desventajas**: Requiere Firebase CLI y configuraci贸n

**Pasos**:

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login en Firebase
firebase login

# Inicializar proyecto
firebase init hosting

# Seleccionar la carpeta actual como directorio p煤blico
# No configurar como SPA

# Desplegar
firebase deploy
```

**Tiempo de despliegue**: 5-10 minutos (primera vez)

## 馃捇 Servidor Propio

### Requisitos

- Servidor web (Apache, Nginx, etc.)
- HTTPS configurado (obligatorio para PWA)
- Acceso FTP/SSH

### Configuraci贸n Apache

```apache
<VirtualHost *:443>
    ServerName tpv.tudominio.com
    DocumentRoot /var/www/ruben-burguer
    
    SSLEngine on
    SSLCertificateFile /path/to/cert.pem
    SSLCertificateKeyFile /path/to/key.pem
    
    <Directory /var/www/ruben-burguer>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
        
        # Cache headers para PWA
        <FilesMatch "\.(html|htm)$">
            Header set Cache-Control "no-cache, no-store, must-revalidate"
        </FilesMatch>
        
        <FilesMatch "\.(js|css)$">
            Header set Cache-Control "public, max-age=31536000"
        </FilesMatch>
        
        # Service Worker debe servirse con tipo correcto
        <FilesMatch "sw\.js$">
            Header set Content-Type "application/javascript"
            Header set Cache-Control "no-cache"
        </FilesMatch>
    </Directory>
</VirtualHost>
```

### Configuraci贸n Nginx

```nginx
server {
    listen 443 ssl http2;
    server_name tpv.tudominio.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    root /var/www/ruben-burguer;
    index index.html;
    
    # Cache para archivos est谩ticos
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Sin cache para HTML
    location ~* \.html$ {
        expires -1;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }
    
    # Service Worker sin cache
    location = /sw.js {
        add_header Cache-Control "no-cache";
        add_header Content-Type "application/javascript";
    }
    
    # Manifest sin cache
    location = /manifest.json {
        add_header Cache-Control "no-cache";
        add_header Content-Type "application/manifest+json";
    }
    
    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 馃攳 Verificaci贸n del Despliegue

Despu茅s de desplegar, verifica:

### 1. HTTPS Funcionando
- La URL debe comenzar con `https://`
- El candado de seguridad debe estar verde

### 2. PWA Instalable
- Abre Chrome DevTools (F12)
- Ve a la pesta帽a "Application" o "Aplicaci贸n"
- En la secci贸n "Manifest", verifica que no haya errores
- En "Service Workers", verifica que el SW est茅 activo

### 3. Lighthouse Audit
- Abre Chrome DevTools
- Ve a la pesta帽a "Lighthouse"
- Ejecuta un audit para PWA
- El puntaje debe ser >80

### 4. Probar Instalaci贸n
- En m贸vil: Verifica que aparezca el banner "A帽adir a pantalla de inicio"
- En desktop: Verifica que aparezca el icono de instalaci贸n en la barra de direcciones

## 馃洝锔?Configuraci贸n de Dominio Personalizado

### Para Netlify

1. Ve a Site settings 鈫?Domain management
2. Haz clic en "Add custom domain"
3. Ingresa tu dominio
4. Configura los DNS seg煤n las instrucciones
5. Netlify proporcionar谩 HTTPS autom谩ticamente

### Para GitHub Pages

1. Ve a Settings 鈫?Pages
2. En "Custom domain", ingresa tu dominio
3. Crea un archivo `CNAME` en el repositorio con tu dominio
4. Configura los DNS:
   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   CNAME www   [usuario].github.io
   ```

### Para Vercel

1. Ve a Settings 鈫?Domains
2. Haz clic en "Add"
3. Ingresa tu dominio
4. Configura los DNS seg煤n las instrucciones

## 馃搱 Monitoreo y Mantenimiento

### Analytics (Opcional)

Puedes a帽adir Google Analytics u otras herramientas:

```html
<!-- A帽adir antes de </head> en index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Actualizaciones

Para actualizar la aplicaci贸n:

1. Modifica los archivos necesarios
2. Incrementa la versi贸n en `sw.js` (CACHE_VERSION)
3. Commit y push a tu repositorio
4. El servicio de hosting desplegar谩 autom谩ticamente

### Backup

Aunque la app funciona client-side:
- Los datos se guardan en localStorage del navegador del usuario
- Cada usuario debe exportar sus datos regularmente
- Considera implementar un sistema de backup en la nube

## 馃摰 URLs de Ejemplo

Despu茅s del despliegue, comparte estas URLs:

- **URL principal**: `https://tu-dominio.com`
- **URL de instalaci贸n iOS**: `https://tu-dominio.com` (abrir en Safari)
- **URL de instalaci贸n Android**: `https://tu-dominio.com` (abrir en Chrome)

## 馃 Checklist de Despliegue

- [ ] Archivos subidos al hosting
- [ ] HTTPS funcionando correctamente
- [ ] manifest.json cargando sin errores
- [ ] Service Worker registrado correctamente
- [ ] App instalable en iOS (Safari)
- [ ] App instalable en Android (Chrome)
- [ ] Funcionalidad offline verificada
- [ ] Iconos mostr谩ndose correctamente
- [ ] Lighthouse PWA score > 80
- [ ] Pruebas en dispositivos reales realizadas

## 馃捇 Soporte

Si encuentras problemas:

1. Verifica la consola del navegador (F12)
2. Revisa la pesta帽a Application 鈫?Service Workers
3. Limpia cache y recarga (Ctrl+Shift+R)
4. Verifica que HTTPS est茅 funcionando
5. Prueba en modo inc贸gnito

---

**Nota**: Esta aplicaci贸n es una PWA pura, no requiere backend ni base de datos. Todos los datos se almacenan localmente en el dispositivo del usuario.
