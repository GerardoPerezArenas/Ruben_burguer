# 🚀 Guía de Despliegue - My Little Diner TPV

Esta guía explica cómo publicar tu aplicación en internet para que puedas instalarla en cualquier dispositivo.

## 📋 Requisitos Previos

Para desplegar una PWA necesitas:
- ✅ **HTTPS**: Obligatorio para PWAs (o localhost para desarrollo)
- ✅ **Manifest.json**: Ya incluido ✓
- ✅ **Service Worker**: Ya incluido ✓
- ✅ **Iconos**: Ya incluidos ✓

## 🌐 Opciones de Despliegue

### 1️⃣ GitHub Pages (Gratis y Fácil) ⭐ RECOMENDADO

**Ventajas:**
- ✅ Completamente gratis
- ✅ HTTPS automático
- ✅ Dominio personalizado gratuito
- ✅ Actualización fácil con git push

**Pasos:**

1. **Sube tu código a GitHub** (si aún no lo has hecho)
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **Activa GitHub Pages**
   - Ve a tu repositorio en GitHub
   - Click en **Settings** (Configuración)
   - Scroll hasta **Pages** en el menú lateral
   - En **Source**, selecciona **main** branch y **/ (root)**
   - Click en **Save**

3. **Espera unos minutos**
   - GitHub procesará tu sitio
   - Recibirás un mensaje con la URL

4. **Tu app estará en:**
   ```
   https://[tu-usuario].github.io/[nombre-repo]/
   ```

**Dominio personalizado (opcional):**
- En la misma página de Settings → Pages
- Añade tu dominio en "Custom domain"
- Configura un registro CNAME en tu proveedor de dominio

---

### 2️⃣ Netlify (Más Rápido y Potente) ⚡

**Ventajas:**
- ✅ Deploy en segundos
- ✅ HTTPS automático
- ✅ CDN global
- ✅ Preview de branches
- ✅ Dominio personalizado gratis

**Opción A: Drag & Drop (Más Fácil)**

1. Ve a [netlify.com](https://netlify.com) y crea cuenta
2. Click en **"Add new site"** → **"Deploy manually"**
3. Arrastra la carpeta de tu proyecto
4. ¡Listo! Tu app estará online en segundos

**Opción B: Desde Git (Automático)**

1. Ve a [netlify.com](https://netlify.com) y crea cuenta
2. Click en **"Add new site"** → **"Import from Git"**
3. Conecta tu repositorio de GitHub
4. Configuración:
   - **Build command**: `(leave empty)`
   - **Publish directory**: `./`
5. Click en **Deploy**

**Tu app estará en:**
```
https://[nombre-generado].netlify.app
```

**Cambiar nombre del sitio:**
- Site settings → Change site name
- Ahora será: `https://[tu-nombre].netlify.app`

---

### 3️⃣ Vercel (Optimizado para Velocidad) 🚀

**Ventajas:**
- ✅ Deploy ultra rápido
- ✅ HTTPS automático
- ✅ CDN Edge Network
- ✅ Analytics incluido

**Pasos:**

1. Instala Vercel CLI
   ```bash
   npm install -g vercel
   ```

2. En la carpeta del proyecto
   ```bash
   vercel
   ```

3. Sigue las instrucciones:
   - Login con GitHub/GitLab/Bitbucket
   - Set up and deploy? **Yes**
   - Which scope? (tu cuenta)
   - Link to existing project? **No**
   - What's your project's name? **my-little-diner**
   - In which directory is your code? **.**
   - Override settings? **No**

4. ¡Listo! Recibirás una URL tipo:
   ```
   https://my-little-diner-xxx.vercel.app
   ```

**Deploy futuro:**
```bash
vercel --prod
```

---

### 4️⃣ Firebase Hosting (Google) 🔥

**Ventajas:**
- ✅ Infraestructura de Google
- ✅ HTTPS automático
- ✅ CDN global
- ✅ Integración con otros servicios

**Pasos:**

1. Instala Firebase CLI
   ```bash
   npm install -g firebase-tools
   ```

2. Login en Firebase
   ```bash
   firebase login
   ```

3. Inicia proyecto
   ```bash
   firebase init hosting
   ```

4. Configuración:
   - Use existing project? **Create new project**
   - Public directory? **.** (punto)
   - Single-page app? **No**
   - GitHub actions? **No**

5. Deploy
   ```bash
   firebase deploy
   ```

**Tu app estará en:**
```
https://[tu-proyecto].web.app
```

---

### 5️⃣ Cloudflare Pages 🔶

**Ventajas:**
- ✅ Red global ultra rápida
- ✅ Unlimited bandwidth
- ✅ HTTPS automático

**Pasos:**

1. Ve a [pages.cloudflare.com](https://pages.cloudflare.com)
2. Conecta tu repositorio de GitHub
3. Configuración:
   - Build command: (dejar vacío)
   - Build output directory: `/`
4. Click **Save and Deploy**

**Tu app estará en:**
```
https://[proyecto].pages.dev
```

---

### 6️⃣ Render (Backend + Frontend) 🎨

**Ventajas:**
- ✅ Plan gratuito
- ✅ HTTPS automático
- ✅ Custom domains

**Pasos:**

1. Ve a [render.com](https://render.com)
2. **New** → **Static Site**
3. Conecta repositorio de GitHub
4. Configuración:
   - Build Command: (vacío)
   - Publish Directory: `.`
5. **Create Static Site**

---

### 7️⃣ Servidor Propio (Apache/Nginx)

**Para Apache:**

1. Copia archivos al directorio web
   ```bash
   sudo cp -r * /var/www/html/diner/
   ```

2. Asegura permisos
   ```bash
   sudo chown -R www-data:www-data /var/www/html/diner
   ```

3. Configura HTTPS (con Let's Encrypt)
   ```bash
   sudo certbot --apache -d tudominio.com
   ```

**Para Nginx:**

1. Copia archivos
   ```bash
   sudo cp -r * /usr/share/nginx/html/diner/
   ```

2. Configura site
   ```nginx
   server {
       listen 80;
       server_name tudominio.com;
       root /usr/share/nginx/html/diner;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

3. Habilita HTTPS
   ```bash
   sudo certbot --nginx -d tudominio.com
   ```

---

## ✅ Verificación Post-Despliegue

Después de desplegar, verifica:

### 1. PWA Checklist
- [ ] La app se carga con HTTPS
- [ ] El manifest.json es accesible
- [ ] Los iconos se cargan correctamente
- [ ] El Service Worker se registra
- [ ] Aparece opción de "Instalar app"
- [ ] Funciona offline después de instalación

### 2. Test en Dispositivos
- [ ] Android Chrome: ¿Muestra banner de instalación?
- [ ] iOS Safari: ¿Se puede añadir a inicio?
- [ ] Desktop Chrome: ¿Muestra botón de instalar?

### 3. Lighthouse Test
1. Abre Chrome DevTools (F12)
2. Ve a pestaña **Lighthouse**
3. Selecciona **Progressive Web App**
4. Click **Generate report**
5. Score debería ser >80

---

## 🔧 Troubleshooting

### ❌ "Manifest no se carga"
**Solución:**
- Verifica ruta en `<link rel="manifest">`
- Comprueba MIME type: `application/json`
- Asegúrate de que sea accesible vía HTTPS

### ❌ "Service Worker no se registra"
**Solución:**
- Solo funciona en HTTPS (o localhost)
- Verifica ruta del sw.js
- Revisa consola para errores

### ❌ "No aparece opción de instalar"
**Solución:**
- Usa Chrome en Android o Safari en iOS
- Verifica que tengas manifest válido
- Confirma Service Worker activo
- Limpia cache y recarga

### ❌ "Los iconos no aparecen"
**Solución:**
- Verifica rutas en manifest.json
- Comprueba que archivos existan
- Prueba con diferentes tamaños

---

## 📊 Monitoreo y Analytics

### Google Analytics (Opcional)

Añade al `<head>` de index.html:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Plausible Analytics (Privacidad)

```html
<script defer data-domain="tudominio.com" src="https://plausible.io/js/script.js"></script>
```

---

## 🔄 Actualización de la App

### Método 1: Git Push (GitHub Pages, Netlify, Vercel)
```bash
git add .
git commit -m "Update app"
git push
```
La actualización es automática.

### Método 2: Manual (Netlify Drag & Drop)
1. Arrastra nueva carpeta a Netlify
2. Listo

### Método 3: CLI (Vercel, Firebase)
```bash
vercel --prod
# o
firebase deploy
```

---

## 🌍 Dominios Personalizados

### En Netlify:
1. Site settings → Domain management
2. Add custom domain
3. Configura DNS:
   ```
   CNAME: www → [sitio].netlify.app
   A: @ → 75.2.60.5
   ```

### En Vercel:
1. Project settings → Domains
2. Add domain
3. Sigue instrucciones DNS

### En GitHub Pages:
1. Settings → Pages → Custom domain
2. Añade dominio
3. Configura CNAME en tu DNS:
   ```
   CNAME: www → [usuario].github.io
   ```

---

## 💰 Costos

| Servicio | Plan Gratuito | Límites |
|----------|---------------|---------|
| **GitHub Pages** | ✅ Gratis | 100 GB/mes bandwidth |
| **Netlify** | ✅ Gratis | 100 GB/mes bandwidth |
| **Vercel** | ✅ Gratis | 100 GB/mes bandwidth |
| **Firebase** | ✅ Gratis | 10 GB/mes storage |
| **Cloudflare** | ✅ Gratis | Unlimited |
| **Render** | ✅ Gratis | 100 GB/mes bandwidth |

Todos suficientes para una aplicación de restaurante.

---

## 🎯 Recomendación Final

**Para comenzar:**
→ **GitHub Pages** (más simple)

**Para producción:**
→ **Netlify** (más completo)

**Para máximo rendimiento:**
→ **Cloudflare Pages** (más rápido)

---

## 📞 Soporte

¿Problemas con el despliegue?
1. Revisa la consola del navegador (F12)
2. Verifica que HTTPS esté activo
3. Comprueba que todos los archivos se suban
4. Consulta documentación del servicio elegido

---

**¡Tu app estará online en minutos! 🚀**
