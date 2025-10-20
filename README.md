# Banner - Microfrontend

Microfrontend de Banner usando Angular 20 y Module Federation.

Este MFE expone un **componente standalone** (`BannerComponent`) que puede ser consumido dinámicamente por el host.

## 🏗️ Arquitectura

- **Tipo**: Remote MFE
- **Framework**: Angular 20
- **Module Federation**: @angular-architects/module-federation
- **Puerto**: 4202
- **Componente Expuesto**: `BannerComponent` (standalone)

## 🚀 Development server

Para iniciar el servidor de desarrollo, ejecuta:

```bash
ng serve
```

El servidor estará disponible en `http://localhost:4202/`

## 📦 Componente Expuesto

### BannerComponent

Componente standalone que muestra un banner dinámico con título y mensaje.

**Configuración en webpack.config.js:**
```javascript
exposes: {
  './BannerComponent': './src/app/banner/banner.component.ts'
}
```

**Uso en el Host:**
```typescript
import { loadRemoteModule } from '@angular-architects/module-federation';

const BannerComponent = await loadRemoteModule({
  type: 'module',
  remoteEntry: 'http://localhost:4202/remoteEntry.js',
  exposedModule: './BannerComponent'
}).then(m => m.BannerComponent);

// Renderizar dinámicamente
viewContainerRef.createComponent(BannerComponent);
```

## 🔗 Integración con Host

El componente se consume en el host a través de `RemoteBannerWrapperComponent`, que:
1. Carga el componente remoto usando `loadRemoteModule`
2. Lo renderiza dinámicamente en un `ViewContainerRef`
3. Maneja estados de carga y errores

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
