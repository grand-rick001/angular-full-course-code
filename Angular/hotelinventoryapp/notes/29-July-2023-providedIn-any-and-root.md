# Difference between providedIn: root and any

This two properties are used in services or dependency injection, and they have quite the difference.

```Typescript
    @Injectable({
        providedIn: 'any'
    })

        AND

    @Injectable({
        providedIn: 'root'
    })
```

## providedIn: 'root'
- The `root` provider basically creates a singleton instance of the service class, that is used for all the files within that module. One Instance for all.

## providedIn: 'any'
- The 'any provider creates a new instance for lazy-loaded modules. It won't work with different non lazy-loaded modules.

An example used in this lesson, is by using an `Injection Token` and injecting it to the root module and lazy loaded modules, providing them with different values. Lazy-loaded modules using the service with the `any` provider will have different values, owing to the creation of new instances, while all modules including lazy-loaded, that use a service with the `root` provider, will have similar values. This is because, the single instance created will be used across all modules, without creating new ones.

The application of the `any` provider can become useful in some web apps, to have different values for different modules, while the `root` provider can be used to have similar values across all modules.
