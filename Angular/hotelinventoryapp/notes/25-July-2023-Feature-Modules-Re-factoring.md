# Key Take away

1. Feature Modules
    - It is good practice to re-organize multiple components into their respective feature modules.
    - This reduces clutter in the `app Module`
    - When using a re-usable component in a re-usable module, add the `exports` property below the `declarations` and `imports` properties in their modules. This allows for other modules to use them.
    - When generating modules, use the `--flat=true` flag in pre-existing components to avoid creating new folders.

    N/B: Components cannot be imported twice from different modules, however, modules can be imported into different modules as per demands. Hence using feature modules will increase flexibility.

1. Routing (!Lazy Loading)
    - To avoid the `404 error` even though a route is correctly configured, always make sure the `AppRoutingModule` is always below the feature modules.
    - This is because the code runs sequentially, and the wildcard (`**`) route will be called first before the pre-configured routes.