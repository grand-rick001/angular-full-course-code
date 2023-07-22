## Dependency Injection Using an `Object` instead of a `Class`

1. Create an `AppConfig` folder just under the `./app/` directory.
    Add an `appconfig.service.ts` file for the minimal data logic and an `appconfig.interface.ts` file for the typing.
    Sample content for each files.
    ```typescript
    //appconfig.service.ts
    import { InjectionToken } from '@angular/core';
    import { AppConfig } from './appconfig.interface';

    export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');

    export const APP_CONFIG: AppConfig = {
        apiEndpoint: 'http://localhost:8000'
    }

    //appconfig.interface.ts
    export interface AppConfig {
    apiEndpoint: string;
    }
    ```

1. Register it to the `app.module.ts` file by adding it into the `providers` property.
    For example
    ```typescript
    providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG
    }
    ]
    ```
1. Final step is to use it in your preferred service.
    - You first import the actual service and interface from their respective locations.
        e.g 
        ```typescript
            import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
            import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
        ```
    - Import the `Inject` property from `@angular/core'.

    - Inject it into the constructor. You can test whether it works by logging a value.
    e.g

    ```typescript
        constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
            console.log(this.config.apiEndpoint);
        }
    ```