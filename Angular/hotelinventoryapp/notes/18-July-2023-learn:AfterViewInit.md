# WHAT I LEARNED TODAY
- AfterViewInit Lifecycle hook
- ExpressionHasChangedAfterItHasBeenCheckedError
    - Pretty much explains what it does
    - Appears after changing a value in the AfterViewInit life cycle hook.
- ViewChild Decorator
    - Can be used in three ways
        1. To reference a component, and modify a components properties or call it's methods
        1. To Dynamically Add a component to the Template e.g ```
        @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

        ngAfterViewInit(): void {
            const componentRef = this.vcr.createComponent(RoomsComponent);
            componentRef.instance.numberOfRooms = 50;
        }
        ```
        1. To access an HTML element and modify it's properties
- ViewChildren Decorator
    - Used hand in hand with the `QueryList` type to reference an array of similar DOM elements.