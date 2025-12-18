# 📱 Guía de Compilación - Ruben Burguer App

Esta guía te ayudará a compilar la aplicación Ruben Burguer para Android e iOS.

## 📋 Requisitos Previos

### Para ambas plataformas
- Node.js v14 o superior instalado
- Git instalado
- npm o yarn

### Para Android
- Android Studio (última versión estable)
- JDK 11 o superior
- Android SDK con las siguientes herramientas:
  - Android SDK Platform 33 (o superior)
  - Android SDK Build-Tools
  - Android SDK Platform-Tools

### Para iOS (solo macOS)
- Xcode 14 o superior
- CocoaPods instalado: `sudo gem install cocoapods`
- Cuenta de desarrollador de Apple (para distribución)

## 🚀 Preparación del Proyecto

### 1. Clonar el repositorio e instalar dependencias

```bash
git clone <repository-url>
cd Ruben_burguer
npm install
```

### 2. Generar los iconos de la aplicación

1. Abrir `generate-icons.html` en un navegador
2. Hacer clic en "Generar Todos los Iconos"
3. Guardar cada icono en la carpeta `www/img/`
4. Nombres requeridos: `icon-72x72.png`, `icon-96x96.png`, etc.

**Alternativamente**, puedes usar tus propios iconos personalizados.

## 📱 Compilación para Android

### Paso 1: Preparar el proyecto Android

```bash
npm run android
```

Este comando:
1. Añade la plataforma Android al proyecto
2. Sincroniza los archivos web con el proyecto Android
3. Abre Android Studio automáticamente

### Paso 2: Configurar Android Studio

Una vez que Android Studio se abra:

1. **Esperar la sincronización de Gradle** (primera vez puede tardar varios minutos)

2. **Configurar el dispositivo de prueba:**
   - Opción A: Conectar un dispositivo físico Android con depuración USB activada
   - Opción B: Crear un emulador desde Tools > Device Manager

3. **Verificar la configuración:**
   - Menú: Build > Select Build Variant
   - Seleccionar "debug" para pruebas o "release" para producción

### Paso 3: Compilar y ejecutar

#### Para pruebas (Debug):
```bash
# Desde la terminal
cd android
./gradlew assembleDebug

# O desde Android Studio
# Click en el botón "Run" (▶️) o Shift+F10
```

El APK de debug se generará en:
`android/app/build/outputs/apk/debug/app-debug.apk`

#### Para producción (Release):

1. **Generar keystore** (solo primera vez):
```bash
keytool -genkey -v -keystore ruben-burguer.keystore -alias ruben-burguer -keyalg RSA -keysize 2048 -validity 10000
```

2. **Configurar signing en Android Studio:**
   - Build > Generate Signed Bundle / APK
   - Seleccionar "APK"
   - Seleccionar el keystore creado
   - Ingresar las contraseñas
   - Seleccionar "release" build variant

3. **Compilar:**
```bash
cd android
./gradlew assembleRelease
```

El APK firmado estará en:
`android/app/build/outputs/apk/release/app-release.apk`

### Paso 4: Instalar en dispositivo

```bash
# Instalar APK debug
adb install android/app/build/outputs/apk/debug/app-debug.apk

# O arrastrar el APK al dispositivo y abrir
```

## 🍎 Compilación para iOS (solo macOS)

### Paso 1: Preparar el proyecto iOS

```bash
npm run ios
```

Este comando:
1. Añade la plataforma iOS al proyecto
2. Sincroniza los archivos web con el proyecto iOS
3. Abre Xcode automáticamente

### Paso 2: Instalar dependencias de CocoaPods

```bash
cd ios/App
pod install
cd ../..
```

### Paso 3: Configurar Xcode

Una vez que Xcode se abra:

1. **Seleccionar el equipo de desarrollo:**
   - Seleccionar el proyecto "App" en el navegador izquierdo
   - Ir a la pestaña "Signing & Capabilities"
   - En "Team", seleccionar tu cuenta de desarrollador de Apple
   - Xcode configurará automáticamente el provisioning

2. **Configurar el Bundle Identifier:**
   - Verificar que sea: `com.rubenburguer.app`
   - Si necesitas cambiarlo, modifica también `capacitor.config.json`

3. **Seleccionar dispositivo:**
   - En la barra superior, seleccionar un simulador iOS o un dispositivo físico conectado

### Paso 4: Compilar y ejecutar

#### Para pruebas en simulador:
1. Seleccionar un simulador iOS (ej: iPhone 14)
2. Click en el botón "Run" (▶️) o presionar Cmd+R
3. Esperar a que compile e instale

#### Para pruebas en dispositivo físico:
1. Conectar el iPhone/iPad por USB
2. Confiar en el ordenador desde el dispositivo
3. Seleccionar el dispositivo en Xcode
4. Click en "Run"
5. En el dispositivo, ir a Ajustes > General > VPN y gestión de dispositivos
6. Confiar en el perfil de desarrollador

#### Para producción (App Store):

1. **Preparar la app:**
   - Product > Archive
   - Esperar a que compile el archivo

2. **Distribuir:**
   - En Organizer, seleccionar el archivo
   - Click en "Distribute App"
   - Seleccionar "App Store Connect"
   - Seguir el asistente
   - Subir a App Store Connect

3. **En App Store Connect:**
   - Configurar metadatos, capturas de pantalla
   - Enviar para revisión

## 🔄 Actualizar la app después de cambios

Después de realizar cambios en `www/`:

### Método rápido:
```bash
npm run sync
```

### Método completo:
```bash
# Sincronizar cambios
npm run sync

# Para Android, recompilar en Android Studio
# Para iOS, recompilar en Xcode
```

## 🎨 Personalización adicional

### Cambiar el nombre de la app

1. Editar `capacitor.config.json`:
```json
{
  "appName": "Tu Nombre Aquí"
}
```

2. Sincronizar:
```bash
npm run sync
```

### Cambiar el Bundle ID / Package Name

1. Editar `capacitor.config.json`:
```json
{
  "appId": "com.tuempresa.tuapp"
}
```

2. Eliminar las carpetas android e ios
3. Volver a ejecutar `npm run android` o `npm run ios`

### Cambiar iconos

Reemplazar los archivos en `www/img/icon-*.png` y ejecutar `npm run sync`

## 🐛 Solución de Problemas Comunes

### Android

**Error: "SDK location not found"**
```bash
# Crear archivo local.properties en android/
echo "sdk.dir=/ruta/a/tu/Android/sdk" > android/local.properties
```

**Error de Gradle**
```bash
cd android
./gradlew clean
cd ..
npm run sync
```

**App no actualiza**
1. Desinstalar la app del dispositivo
2. Limpiar build: `cd android && ./gradlew clean`
3. Recompilar

### iOS

**Error: "No se puede verificar el desarrollador"**
- En el dispositivo: Ajustes > General > VPN y gestión de dispositivos > Confiar

**Error de CocoaPods**
```bash
cd ios/App
pod repo update
pod install
cd ../..
```

**Error de firma**
- Verificar que tienes una cuenta de desarrollador de Apple válida en Xcode
- Preferences > Accounts > Añadir cuenta si es necesario

## 📊 Tamaños de compilación aproximados

- **APK Debug Android:** ~15-20 MB
- **APK Release Android:** ~10-15 MB
- **IPA iOS:** ~20-25 MB

## ✅ Checklist antes de publicar

- [ ] Probada en múltiples dispositivos/simuladores
- [ ] Todos los iconos configurados correctamente
- [ ] Splash screen configurado
- [ ] Versión actualizada en package.json
- [ ] Compilación en modo release exitosa
- [ ] Probadas todas las funcionalidades críticas
- [ ] Descripción y capturas de pantalla preparadas
- [ ] Cuenta de desarrollador activa (Google Play / App Store)

## 📚 Recursos adicionales

- [Documentación de Capacitor](https://capacitorjs.com/docs)
- [Guía de Android Studio](https://developer.android.com/studio/intro)
- [Guía de Xcode](https://developer.apple.com/xcode/)
- [Google Play Console](https://play.google.com/console)
- [App Store Connect](https://appstoreconnect.apple.com/)

## 💡 Consejos

1. **Siempre prueba primero en debug** antes de compilar release
2. **Guarda tu keystore de Android** en un lugar seguro
3. **Mantén actualizados** Android Studio, Xcode y las dependencias
4. **Usa control de versiones** (Git) para todos los cambios
5. **Documenta cualquier configuración especial** que hagas

## 🆘 Soporte

Si encuentras problemas, revisa:
1. Los logs de Android Studio / Xcode
2. La consola del navegador (para errores web)
3. Los issues del repositorio de Capacitor
4. Stack Overflow con el tag "capacitor"

---

**¡Buena suerte con tu aplicación!** 🍔📱
