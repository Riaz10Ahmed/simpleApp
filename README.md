# simpleApp
A simple app with News API and TODO

# Run the App
1. Clone the app
2. Run "npm install"
3. Run "ionic serve" or "ionic cordova run browser"

# Apk File
Apk file is also attached "IonicApp.apk"

# Deploy for Android
1. Set paths
   - export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64/
   - export ANDROID_HOME=$HOME/Android/Sdk/
   - export PATH=$PATH:$ANDROID_HOME/tools

2. ionic cordova platform rm android
3. ionic cordova platform add android
4. ionic cordova build --release android
5. zip -d platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk META-INF/\*
6. jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ionicapp.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk ionic
  
  It will prompt for password : simpleapp123
  
7. zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk IonicApp.apk
