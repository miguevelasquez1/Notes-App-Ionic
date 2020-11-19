<h1>Notes App Migración</h1>

<p>El objetivo del proyecto es construir una aplicación de notas en Ionic v1 e ir
  implementado configuraciones que permitan que la aplicación en la parte de desarrollo
  se parezca a una versión más actualizada de Ionic y Angular</p>
  
<h2>Acerca del proyecto</h2>
<p>Inicialmente vino con con el paquete de modulos Bower. Se instaló webpack para que permita hacer la transpilación en el archivo bundle.js y permita usar archivos .ts.</p>
<p> También inicialmente vino con AngularJS y se actualizó con la librería llamada: "Angular-ts-decorators" </p>

<h2>Tecnologías usadas</h2>
<ul>
  <li>Ionic v1</li>
  <li>Webpack</li>
  <li>npm</li>
  <li>Typescript</li>
  <li>Angular 2+ (angular-ts-decorators)</li>
  <li>Bootstrap</li>
  
</ul>

<h2>Ejecución</h2>
<p>1. Todo lo que está en la carpeta src debe ir en la carpeta www.</p>
<p>2. Despues de hacer actualizaciones ejecutar npm run build y luego si ejecutar ionic serve.</p>

<h3>PD:</h3>
<p>No logré implementar Firebase a la aplicación debido a que el decorador "angular-ts-decorators" no contiene el paquete "@angular/core" (Actualmente en el repositorio no hay una base de datos que cubra a la app).
 
 Pienso que no es una buena forma de migrar la app con ese decorador y mi propuesta es ir cambiando las configuraciones internas como sería ir configurando el polyfills para permitir el uso de ES6 y que cualquier navegador/dispositivo pueda tener acceso a la app. También instalar todas las dependencias de Angular actuales e ir migrando de a pocos. Encontré una solución para que AngularJS y Angular sean compatibles y sea bastante fácil la migración. https://codecraft.tv/courses/angularjs-migration/
 
 Las versiones actuales de Ionic están empezando a deprecar cordova y no veo viable usar firebase conectado a Cordova, sino que desde un inicio se debería hacer un servicio especificamente para los métodos de firebase en las ultimas versiones de Angular isntalando una dependencia de "@angular/firebase" y conectarlos con los componentes (así estén en AngularJS funciona).
 
 </p>
