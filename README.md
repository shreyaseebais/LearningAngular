# Angular

### Table of Contents

| No. | Questions |
| --- | --------- |
| 1 | [Single page application](#What-is-Single-page-application) |
| 2 | [Angular vs Plain javascript or jquery](#Why-should-you-use-Angular-vs-Plain-javascript-or-jquery) |
| 3 | [](#) |
| 4 | [](#) |
| 5 | [](#) |
| 6 | [](#) |
| 7 | [](#) |
| 8 | [](#) |
| 9 | [](#) |
| 10 | [](#) |
| 11 | [](#) |
| 12 | [](#) |
| 13 | [](#) |
| 14 | [](#) |





**[⬆ Back to Top](#table-of-contents)**

## What is Single page application

1. When you change the sections webpage(Index.html) is same, but only the content is changed. Hence refresh icon in browser will never spin. 
2. 	SPA makes  web application faster & gives user a reactive experience.
3. 	Using js to change the content of the webpage is dynamically much faster than having to reach out to the server for every page change and for every new piece of data we want to display.
4.	If we need some data from the server we can load It in the background without making the webpage unresponsive.





**[⬆ Back to Top](#table-of-contents)**

## Why should you use Angular vs Plain javascript or jquery

1.  Vanilla JS or jquery becomes hard to maintain and we will need a way to properly structure our application.
2.	A lot of applications built using vanilla JS & jquery is hard to test.
3.	Angular more testable.
4.	Lot of utility code which can be re-used in lot of aplications especially when dealing with user navigation & browser history.
5.	Angular gives our application a clean  & loosely coupled structure that is easy to understand & maintain.

| Feature                    | Plain Javascript                                                                | Angular|
| ---------------------------| ------------------------------------------------------------------------------- | -------------------------------------------------------------------|
| Architecture	             | No predefined structure; relies on custom organization.	                       | Component-based architecture for scalability and modularity.       |
| Language	                 | JavaScript (dynamically typed).	                                               | TypeScript (statically typed, with type safety).                   |
| Data Binding	             | Manual DOM manipulation required.	                                           | Built-in two-way data binding, reducing manual effort.             |
| Performance	             | Requires manual optimizations.	                                               | Optimized with features like AOT and change detection.             | 
| Dependency Management      | No native dependency injection system.                                          | Built-in hierarchical dependency injection, simplifying dependency management. |
| Reusability	             | Code reuse requires manual structuring.	                                       | Reusable components encapsulate logic, view, and styles.           |
| Built-in Features          | No built-in features; requires libraries for routing, forms, and HTTP.          | Offers built-in routing, forms handling, and HTTP client.          |
| Scalability	             | Limited scalability; challenging for large projects.                            | Designed for enterprise-scale applications with modules and services. |
| Tooling	                 | Limited tooling support.	                                                       | Robust tools like Angular CLI for scaffolding, testing, and building.  |
| Testing	                 | Requires separate setups for testing frameworks.	                               | Easy testing with built-in support for unit testing and end-to-end testing. |
| Learning Curve             | Easier to learn and use for small projects.	Steeper learning curve due to its advanced features. | Steeper learning curve due to its advanced features.   |
| Community and Ecosystem	 | Large community but no cohesive framework.                                      | Large ecosystem with regular updates and community support.   |
| Suitability	             | Best for small projects or adding interactivity to static sites.	               | Ideal for dynamic, scalable, and feature-rich applications. |






**[⬆ Back to Top](#table-of-contents)**

## Angular Code Flow

*   Application Bootstrapping 
    * File: src/main.ts
    * The Angular application is bootstrapped by loading the root module (AppModule).
    * The function platformBrowserDynamic().bootstrapModule(AppModule) initializes the app.


* Module Initialization
File: src/app/app.module.ts

Manages the overall application structure by declaring components, importing other modules, and providing services.
Root component (AppComponent) is defined in the bootstrap array.


* Component Loading 
File: src/app/app.component.ts
Controls the logic and data binding for a particular part of the UI.


* Routing 
Purpose: Manages navigation between different views.





**[⬆ Back to Top](#table-of-contents)**

## Angular Project structure 






**[⬆ Back to Top](#table-of-contents)**
</div>



## Lifecycle hooks

**Constructor:**
Constructor does this

**ngOnChanges:**
onchanges does this

**ngOnInit:**

**ngOnContentInit:**

**ngOnContentChecked:**

**ngOnDestroy:**







**[⬆ Back to Top](#table-of-contents)**

## Dependency Injection (DI) 
 Dependency Injection (DI) in Angular is a design pattern and a core concept that provides a way to supply dependencies (objects or services) to components, directives, pipes, or other services. Instead of creating dependencies manually, Angular’s DI system automatically resolves and injects them where needed, making the code more modular, reusable, and testable.

 
 **How to Use Dependency Injection in Angular**

 * Creating an Injectable Service
 Use the @Injectable decorator to mark a class as injectable.

    ```typescript
        import { Injectable } from '@angular/core';

        @Injectable({
        providedIn: 'root', // Makes the service available application-wide
        })
        export class LoggerService {
        log(message: string) {
            console.log(message);
        }
        }
    ```
providedIn: 'root': The service is registered at the root level and is a singleton.

    * Injecting a Service into a Component
    To use the service, inject it into the constructor of a component or another service.

```typescript
    import { Component } from '@angular/core';
    import { LoggerService } from './logger.service';

    @Component({
    selector: 'app-root',
    template: `<h1>Check the console for logs!</h1>`,
    })
    export class AppComponent {
    constructor(private logger: LoggerService) {
        this.logger.log('AppComponent initialized!');
    }
    }
```

Angular automatically provides an instance of LoggerService to the component.

* Hierarchical Dependency Injection

    Angular uses a hierarchical DI system:

    * 1. Root Injector: Services provided at the root level (providedIn: 'root') are available throughout the application.
  
    * 2. Component Injector: Services provided in a component’s providers array are available only to that component and its children.
    
Example of component-level provider:

```typescript
    import { Component } from '@angular/core';
    import { LoggerService } from './logger.service';

    @Component({
    selector: 'app-child',
    template: `<p>Child component</p>`,
    providers: [LoggerService], // Unique instance for this component and its children
    })
    export class ChildComponent {
    constructor(private logger: LoggerService) {
        this.logger.log('ChildComponent initialized!');
    }
    }
```





**[⬆ Back to Top](#table-of-contents)**

### What are Pipes? Pure vs Impure pipes?
A Pipe in Angular is used to transform data in the template.
*  Pipes format, filter, or manipulate data before displaying it in the UI.
*  They are pure functions, meaning they do not modify the original data.

Eg of Builtin pipes:  uppercase, lowercase, currency, date, json, percent, slice, async.

1️⃣ Pure Pipes
* Default behavior in Angular.
* Runs only when the input changes.
* Best for performance optimization.

```javascript
    @Pipe({
    name: 'example',
    pure: true // Default behavior
    })
```

2️⃣ Impure Pipes
* Runs on every change detection cycle (even if input hasn’t changed).
* Useful when working with arrays, objects, or dynamic data.
* Can affect performance negatively if overused.

```javascript
    @Pipe({
    name: 'example',
    pure: false // Runs on every change detection
    })
```




**[⬆ Back to Top](#table-of-contents)**

### HostBinding vs HostListener

*  HostBinding Binds host element properties/attributes. Adding/removing CSS classes, modifying attributes.
*  HostListener Listens for events on the host element. Handling clicks, mouse events, key events, etc.

```typescript
    import { Directive, HostBinding, HostListener } from '@angular/core';

    @Directive({
    selector: '[appHoverHighlight]'
    })
    export class HoverHighlightDirective {
        // Bind the 'highlight' CSS class to this directive
        @HostBinding('class.highlight') isHighlighted = false;

        // Listen for mouse enter event and apply the class
        @HostListener('mouseenter') onMouseEnter() {
            this.isHighlighted = true;
        }

        // Listen for mouse leave event and remove the class
        @HostListener('mouseleave') onMouseLeave() {
            this.isHighlighted = false;
        }
    }
```




**[⬆ Back to Top](#table-of-contents)**

### Property Binding vs HostBinding

| Feature                                           |	Property Binding ([property])	                    |   HostBinding (@HostBinding)                          |
|---------------------------------------------------|-------------------------------------------------------|-------------------------------------------------------|
| Scope	                                            |   Works in templates (HTML)                           |	Works inside directives/components                  |            
| Usage                                             |	Binds properties of elements and components         |	Binds properties of the host element                |
| Best For	                                        | Setting attributes & passing data to child components |	Custom directives that modify their host element    |
| Syntax	                                        | [property]="value"	                                |   @HostBinding('property')                            |


Property Binding
```typescript
    @Component({
    selector: 'app-child',
    template: `<p>{{ message }}</p>`
    })
    
    export class ChildComponent {
    @Input() message!: string;
    
    }
```

```html
    <app-child [message]="'Hello from Parent'"></app-child>
```

Host Binding

```typescript

    import { Directive, HostBinding, Input } from '@angular/core';

    @Directive({
    selector: '[appHighlight]'
    })
    export class HighlightDirective {
    @Input() isActive = false;

    @HostBinding('class.active') get applyClass() {
        return this.isActive;
    }
    }

```

```html
    <p appHighlight [isActive]="true">This is highlighted</p>
```




**[⬆ Back to Top](#table-of-contents)**

### What is Conditional Attribute Directive ?

ConditionalAttrDirective.js
```typescript
    import { Directive, ElementRef, Input, Renderer2, OnChanges } from '@angular/core';

    @Directive({
    selector: '[appConditionalAttr]'
    })
    export class ConditionalAttrDirective implements OnChanges {
    @Input() appConditionalAttr: boolean = false;
    @Input() attributeName: string = '';

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngOnChanges() {
        if (this.appConditionalAttr) {
        this.renderer.setAttribute(this.el.nativeElement, this.attributeName, '');
        } else {
        this.renderer.removeAttribute(this.el.nativeElement, this.attributeName);
        }
    }
    }
```

component.html
```html
    <button [appConditionalAttr]="isDisabled" attributeName="disabled">Click Me</button>
```

component.ts
```typescript
    isDisabled = true; // Change dynamically
```




**[⬆ Back to Top](#table-of-contents)**

### What is Renderer2 in Angular?

Renderer2 is an Angular service used to safely manipulate the DOM without directly accessing it. 
This is important for security and cross-platform compatibility (e.g., when using Angular with SSR or Web Workers).

Why Use Renderer2 Instead of Direct DOM Manipulation?
* Security: Prevents direct manipulation of the DOM, reducing security risks like XSS.
* Cross-platform Support: Works in SSR (Server-Side Rendering) and Web Workers, where document is unavailable.
* Encapsulation: Ensures Angular optimally handles DOM updates.

For eg.
* Instead of: this.el.nativeElement.style.backgroundColor = 'yellow';
* We use: this.renderer.setStyle(...) (Safer & more Angular-friendly).





**[⬆ Back to Top](#table-of-contents)**

### Custom Style Directives in Angular
A custom style directive in Angular allows you to dynamically modify the appearance of elements using HostBinding, HostListener, and Renderer2. 

Eg.

shadow-effect.directive.ts

```typescript
    import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

    @Directive({
    selector: '[appShadowEffect]'
    })
    export class ShadowEffectDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) {}

    @HostListener('mouseenter') onMouseEnter() {
        this.renderer.setStyle(this.el.nativeElement, 'boxShadow', '4px 4px 10px rgba(0, 0, 0, 0.2)');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.renderer.setStyle(this.el.nativeElement, 'boxShadow', 'none');
    }
    }
```

```html
    <div appShadowEffect style="padding: 20px; border: 1px solid #ccc;">
    Hover over me to see a shadow!
    </div>
```




**[⬆ Back to Top](#table-of-contents)**

### Structure Directive

*ngIf , *ngFor, *ngSwitch are few inbuilt structural directives. 
Apart from them we can also create Custom Structural Directives.


Eg. permission.directive.ts

```typescript
    import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

    @Directive({
    selector: '[appPermission]'
    })

    export class PermissionDirective {
    private currentUserRole: string = 'admin'; // Assume a user role (can be fetched from a service)

    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

    @Input() set appPermission(allowedRoles: string[]) {
            if (allowedRoles.includes(this.currentUserRole)) {
            this.viewContainer.createEmbeddedView(this.templateRef); // Show content
            } else {
            this.viewContainer.clear(); // Hide content
            }
        }
    }

```

```html
    <p *appPermission="['admin', 'moderator']">Only admins & moderators can see this!</p>
```


**[⬆ Back to Top](#table-of-contents)**

### ViewEncapsulation

|               Encapsulation Type          |	Behavior                                            |
|-------------------------------------------|-------------------------------------------------------|
|               Emulated (Default)	        | Scopes styles using unique attributes (_ngcontent)    |
|               ShadowDom	                | Uses real Shadow DOM, preventing style leakage        |
|               None	                    | Styles are global and affect the entire app           |

 ViewEncapsulation in Angular controls how component styles are applied to the DOM.
🔹 It determines whether styles are global or scoped to a specific component.
🔹 Angular provides three encapsulation modes:


*   Emulated (Default)
*   Shadow DOM
*   None (Global styles)


1. Emulated (Default)
✅ Angular scopes the styles to the component by adding unique attribute selectors.
✅ Uses regular CSS, but applies it as if it were scoped.
✅ Styles are only applied within this component.
✅ Prevents styles from leaking into other components.

```html
    <h2 _ngcontent-xyz> Hello World </h2>
    <style>
    h2[_ngcontent-xyz] { color: red; }
    </style>
```


2. Shadow DOM (ViewEncapsulation.ShadowDom)
✅ Uses native Shadow DOM to scope styles to the component.
✅ Styles do not affect other components.
✅ Works only in browsers that support Shadow DOM.
The component is rendered inside a Shadow DOM boundary:
```html
    <app-example>
    #shadow-root
        <h2>Hello World</h2>
        <style>
        h2 { color: blue; }
        </style>
    </app-example>
```
✅ Styles are completely isolated and do not leak out.
✅ Components outside cannot override these styles.


3. None (ViewEncapsulation.None)
✅ Styles are global and affect all components.
✅ No encapsulation—styles apply to everything in the app.
✅ The styles are placed globally in the <head> of the document:
❌ Danger: Styles may override other components unintentionally.





**[⬆ Back to Top](#table-of-contents)**

### What are Services?
🔹 Services are singleton objects in Angular that encapsulate business logic, data retrieval, and shared functionalities.
🔹 We use them to maintain code modularity, improve performance, and facilitate data sharing across components.






**[⬆ Back to Top](#table-of-contents)**

### What are the different ways to provide a service in Angular?
There are three ways to provide a service:

* Global (Root Level) – providedIn: 'root' (Recommended)
* Module Level – Inside the providers[] array in @NgModule
* Component Level – Inside the providers[] array in @Component






**[⬆ Back to Top](#table-of-contents)**

### Explain Dependency Injection (DI) in Angular Services.
🔹 Dependency Injection (DI) is a design pattern in which dependencies (services) are injected into components rather than being created manually.
🔹 This makes the application more scalable, testable, and maintainable.


Example of Constructor-Based Injection:

 ```typescript
    constructor(private myService: MyService) {}
 ```


Example of injecting a service into another service

```typescript
    @Injectable({ providedIn: 'root' })
    export class AuthService {
    constructor(private apiService: ApiService) { }
    }
```





**[⬆ Back to Top](#table-of-contents)**

### What is the difference between providedIn: 'root' and providedIn: 'any'?
|               Option                      |                       	Behavior                                            |
|-------------------------------------------|-------------------------------------------------------------------------------|
|   providedIn: 'root'                      |	Service is singleton and available globally.                                |
|   providedIn: 'any'	                    |   Creates separate instances for different modules (eager/lazy-loaded).       |





**[⬆ Back to Top](#table-of-contents)**

### Hierarchical Dependency Injection

Hierarchical Dependency Injection (DI) in Angular is a design pattern that allows services to be provided and managed at different levels of the component tree, creating a hierarchy of injectors. This approach optimizes memory usage, ensures better encapsulation, and improves performance.

*   Root Level (@Injectable({ providedIn: 'root' }))

The service is available throughout the application.
A single instance is shared across all components.
```typescript
    @Injectable({ providedIn: 'root' })
    export class GlobalService {
    constructor() {
        console.log('GlobalService instance created');
    }
    }

```


*  Module Level (providers in @NgModule)

When a service is provided inside an Angular module (e.g., AppModule or FeatureModule), it creates a separate instance for that module.

```typescript
    @NgModule({
    providers: [ModuleService]
    })
    export class FeatureModule { }
```


* Component Level (providers in @Component)

A new instance is created for each component and its children.
If a service is provided at the component level, it will not share the same instance with other components.

```typescript
    @Component({
    selector: 'app-child',
    template: `<p>Child works!</p>`,
    providers: [ChildService] // New instance for each component
    })
    export class ChildComponent {
    constructor(private childService: ChildService) {}
    }

```
✅ Providing services at the root level (providedIn: 'root') is the most common and efficient approach unless a separate instance is required.





**[⬆ Back to Top](#table-of-contents)**

### How Dependency Resolution Works?
Angular follows a hierarchical structure when resolving dependencies:

1. It starts searching in the component injector.
2. If the service is not found, it moves up to the module injector.
3. If still not found, it moves up to the root injector.
4. If the service is unavailable at all levels, Angular throws an error.




**[⬆ Back to Top](#table-of-contents)**

### How can you share data between components using a service?

```typescript
    import { Injectable } from '@angular/core';
    import { BehaviorSubject } from 'rxjs';

    @Injectable({ providedIn: 'root' })
    export class DataService {
    private messageSource = new BehaviorSubject<string>('Initial Message');
    currentMessage = this.messageSource.asObservable();

    changeMessage(message: string) {
        this.messageSource.next(message);
    }
    }
```




**[⬆ Back to Top](#table-of-contents)**

### What is a Singleton Service in Angular?
A singleton service in Angular is a service that has only one instance throughout the entire application lifecycle. 
This means that all components and modules share the same instance of the service, 
which helps in managing global data, state, or logic efficiently.


### How to Create a Singleton Service?

1. Using providedIn: 'root' (Recommended)

This is the most common way to create a singleton service in Angular. 
By setting providedIn: 'root', Angular ensures that a single instance is created and shared across the app.
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Singleton service
})
export class SingletonService {
  private data: string = '';

  setData(value: string) {
    this.data = value;
  }

  getData(): string {
    return this.data;
  }
}
```

2. Providing in AppModule (Alternative)
Another way to create a singleton service is by adding it to the providers array in AppModule.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SingletonService } from './singleton.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [SingletonService], // Singleton instance for the entire app
  bootstrap: [AppComponent]
})
export class AppModule { }
```



**[⬆ Back to Top](#table-of-contents)**




### Angular injection token

In Angular, an injection token is a unique identifier used for dependency injection,
allowing you to inject values that are not classes, such as interfaces, configurations, 
or primitive types.Since interfaces are not present at runtime in TypeScript, 
Angular cannot use them as type tokens. 
Instead, you create an InjectionToken object to serve as the token for dependency injection.


api-url.token
```typescript
    import { InjectionToken } from '@angular/core';

    export const API_URL = new InjectionToken<string>('API_URL');
```


Module.ts
```typescript
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { AppComponent } from './app.component';
    import { API_URL } from './api-url.token';

    @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: [{ provide: API_URL, useValue: 'https://api.example.com' }],
    bootstrap: [AppComponent],
    })
    export class AppModule {}
```

component.ts
```typescript
    import { Component, Inject } from '@angular/core';
    import { API_URL } from './api-url.token';

    @Component({
    selector: 'app-root',
    template: '<h1>Welcome to Angular!</h1>',
    })
    export class AppComponent {
    constructor(@Inject(API_URL) private apiUrl: string) {
        console.log('API URL:', this.apiUrl);
    }
    }
```


**[⬆ Back to Top](#table-of-contents)**

### How would you handle API calls inside a service?

```typescript
    import { HttpClient } from '@angular/common/http';
    import { Observable } from 'rxjs';

    @Injectable({ providedIn: 'root' })
    export class ApiService {
    private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient) {}

    getPosts(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }
    }

```
*  Use RxJS catchError to handle API failures.
```typescript
    getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
        catchError(error => {
        console.error('Error:', error);
        return throwError(() => new Error('Something went wrong!'));
        })
    );
    }
```




**[⬆ Back to Top](#table-of-contents)**

###  ViewProviders vs. Providers

* providers: The service is available to the component and its children.
* viewProviders: The service is available only inside the component’s view.

```typescript
    @Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    providers: [SomeService],
    viewProviders: [OtherService]
    })
    export class ExampleComponent { }
```

### Multi-Providers

When multiple providers are needed for the same token, use multi: true.

```typescript
const Logger1 = { log: () => console.log('Logger 1') };
const Logger2 = { log: () => console.log('Logger 2') };

providers: [
  { provide: 'LOGGER', useValue: Logger1, multi: true },
  { provide: 'LOGGER', useValue: Logger2, multi: true }
]
```




### What are the key differences between Observables and Promises in JavaScript?

**Multiple vs. Single Values:**
Observables can emit multiple values over time, 
making them suitable for handling streams of data such as user inputs or WebSocket messages.
In contrast, Promises are designed to handle a single asynchronous event.​

**Lazy vs. Eager Execution:**
Observables are lazy; they don't execute until a subscription is made, 
allowing for the setup of the execution context at the time of subscription. 
Promises execute immediately upon creation.​

**Cancellability:** 
Subscriptions to Observables can be unsubscribed, effectively canceling the data stream.
Promises, once initiated, cannot be canceled.​

**Operators and Functional Composition:** 
Observables come with a rich set of operators that enable complex data manipulation and composition, 
promoting a functional programming style. 
Promises lack this capability.




**[⬆ Back to Top](#table-of-contents)**


### Can you explain the difference between mergeMap, switchMap, and concatMap operators in RxJS?

**mergeMap:** 
Projects each source value to an Observable and merges multiple inner Observables concurrently.

**switchMap:**
Projects each source value to an Observable, 
but unsubscribes from the previous inner Observable when a new value is emitted. 

**concatMap:**
Projects each source value to an Observable and subscribes to them one at a time, 
waiting for each to complete before moving to the next. 





**[⬆ Back to Top](#table-of-contents)**

### Why use BehaviorSubject instead of Subject?

BehaviorSubject retains the last emitted value, while Subject does not.




**[⬆ Back to Top](#table-of-contents)**

### What are some best practices for optimizing performance when using RxJS in large-scale applications?

**Unsubscription Management:** 
Always unsubscribe from Observables to prevent memory leaks, especially in Angular components. 
Utilize operators like takeUntil or the AsyncPipe in templates.​

**Avoid Nested Subscriptions:** 
Instead of nesting subscriptions, use higher-order mapping operators (mergeMap, switchMap) 
to handle dependent asynchronous operations.​

**Utilize Schedulers:** 
Schedulers control the execution context of Observables. 
For performance-critical applications, 
choosing the appropriate scheduler (e.g., asyncScheduler, queueScheduler) 
can optimize execution.​

**Debounce and Throttle:** 
Use debounceTime or throttleTime operators to limit the rate of emissions, 
which is particularly useful for handling rapid user inputs or events.​

**Error Handling:** 
Implement comprehensive error handling to ensure that Observables fail gracefully without disrupting the entire stream.




**[⬆ Back to Top](#table-of-contents)**

### xyz



**[⬆ Back to Top](#table-of-contents)**

### xyz



**[⬆ Back to Top](#table-of-contents)**

### xyz



**[⬆ Back to Top](#table-of-contents)**

### xyz


Q1:   What is Routing Guard in Angular?  
Q1b:  How will you do Role Based Login Authentication? 
Q :   Eager loading vs Lazy loading? 
Q2:   What is a Module, and what does it contain? 
Q3:   How would you run unit test?  
Q4:   What is a Service, and when will you use it?
Q5:   What is Interpolation?  
Q6:   What is the difference between Structural and Attribute directives in Angular? 
Q7:   What are the differences between AngularJS (angular 1.x) and Angular (Angular 2.x and
 beyond)? 
Q8:   What is the purpose of base href tag?  
Q9:   What's the difference between an Angular Component and Module?  
Q10:   How would you protect a component being activated through the router?  
Q11:   What is an Observable?  
Q12:   What is a Component? Why would you use it?  
Q13:   What is the minimum  definition of a Component?  
Q14:   What is a bootstrapping  module?  
Q15:   What is an Observer?   
Q16:   What are Observables? 
Q17:   What is the difference  between @Component and @Directive in Angular?  
Q18:   What is the equivalent of ngShow and ngHide in Angular?  
Q19:   What is the difference between *ngIf vs [hidden]?
Q20:   You have an HTML response I want to display. How do I do that?   
Q21:   What is Subscribing?   
Q22:   What is Router Outlet? 
Q23:   What is Router State?  
Q24:   What is Angular Universal?  
Q25:   What is Protractor?   
Q26:   What is Bazel?   
Q27:   What is Activated route?
Q28:   What are the utility functions provided by RxJS?   
Q29:   Why would you use a spy in a test?  
Q30:   Explain the difference  between Constructor and ngOnInit  
Q31:   Why Incremental DOM  has low memory footprint?  
Q32:   Can you explain the  difference between Promise and  Observable in Angular? In what  scenario can we use each  case?  
Q33:   What happens if you use < script> tag inside template?  
Q34:   What is AOT?   
Q35:   What is Redux and how  does it relate to an Angular app? 
Q36:   Why should ngOnInit be used, if we already have a constructor? 
Q37:   When would you use  eager module loading?  
Q38:   How to inject base href?    
Q39:   How do you perform error handling in Observables?  
Q40:   What are the ways to  control AOT compilation?  
Q41:   Explain Lazy Loading in  Angular?  
Q42:   What is the purpose of  Wildcard route?  
Q43:   What is TestBed?  
Q44:   Explain how Custom  Elements works internally?  
Q45:   What are Custom elements?  
Q46:   What are dynamic components?  
Q47:   What is the option to choose between Inline and External template file?  
Q48:   What is Multicasting?   
Q49:   How do you perform Error Handling for HttpClient?  
Q50:   What is a Parameterized pipe?  
Q51:   What is the difference between @Component and @Directive in Angular?  
Q52:   Do I always need a Routing Module?  
Q53:   What is difference between declarations, providers and import in NgModule?  
Q54:   What is the use of Codelyzer?  
Q55:   What is the difference between promise and observable?  
Q56:   What is Angular Ivy?  
Q57:   Explain the difference between Promise and Observable in Angular?  
Q58:   How do you categorize data binding types?  
Q59:   What's new in Angular 6 and why shall we upgrade to it?  
Q60:   What does detectChanges do in Angular Jasmine tests?  
Q61:   Do I need to bootstrap custom elements?  
Q62:   What are the mapping rules between Angular component and custom element?  
Q63:   Angular 9: What are some new features in Angular 9?  
Q64:   When does a lazy  loaded module is loaded?  
Q65:   What is ngUpgrage?    
Q66:   What does a just-in time (JIT) compiler do (in general)?  
Q67:   Why would you use lazy loading modules in Angular app?  
Q68:   What is difference between Incremental DOM and Virtual DOM?  Related To: React
Q69:   Why would you use  renderer methods instead of using native element  methods?  
Q70:   How do you create application to use scss?  
Q71:   Why do we need  compilation process in Angular?  
Q72:   Explain the purpose of  Service Workers in Angular  
Q73:   What is the need for  SystemJS in Angular?  
Q74:   What is Reactive  Programming and how does it relate to Angular?  
Q75:   Are there any  pros/cons (especially performance-wise) in using local storage to replace cookie functionality?  
Q76:   What is Ivy Renderer?   
Q77:   What are the lifecycle hooks for components and directives?  
Q78:   Name and explain  some Angular Module Loading examples  
Q79:   What would be a good  use for NgZone service?  
Q80:   What is the difference  between pure and impure pipe?  
Q81:   How would you insert  an embedded view from a prepared TemplateRef?  
Q82:   What is Incremental  DOM? How is it different from Virtual DOM?  
Q83:   How to detect a route  change in Angular?  
Q84:   Name some security  best practices in Angular  
Q85:   What are the  advantages with AOT?   
Q86:   Why we should use  Bazel for Angular builds?  
Q87:   What is Zone in  Angular?  
Q88:   Name some differences  between SystemJS vs webpack?  Related To: Webpack
Q89:   When to use query  parameters versus matrix parameters in Url?  
Q90:   How would you extract  webpack config from angular cli project?  
Q91:   How does Ivy affect the  (Re)build time?  
Q92:   What are observable  creation functions?  
Q93:   Angular 8: What are  some changes in Location module?  
Q94:   Angular 9: Explain  improvements in Tree Shaking  
Q95:   Could you provide  some particular examples of using ngZone?  
Q96:   Do you know how you  can run AngularJS and Angular side by side?  
Q97:   What is Locality  principle for Ivy?  
Q98:   Why did the Google  team go with incremental DOM instead of virtual DOM?  
Q99:   Just-in-Time (JIT) vs  Ahead-of-Time (AOT)compilation. Explain the  difference.  
Q100:   Why Angular uses Url  segment?  
Q101:   What is the difference  between BehaviorSubject vs Observable?  
Q102:   Why Incremental DOM  is Tree Shakable?  
Q103:   How Would You Compare View Engine vs Ivy?  
Q104:   Is there no equivalent  to $scope.emit() or $scope.broadcast() in  Angular?  
Q1:   What are Pipes? Give me  an example.  
Q2:   How can I select an element in a component template?  
Q3:   What does this line do?   
Q4:   How to bundle an  Angular app for production?  
Q5:   How would you control  size of an element on resize of the window in a  component?   
Q6:   How to set headers for every request in Angular?  
Q7:   Could I use jQuery  with Angular?  
Q8:   What is the Angular  equivalent to an AngularJS  $watch? 
