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
    * File: src/app/app.module.ts
 Manages the overall application structure by declaring components, importing other modules, and providing services.
Root component (AppComponent) is defined in the bootstrap array.


* Component Loading 
File: src/app/app.component.ts
Controls the logic and data binding for a particular part of the UI.


* Routing 
* Purpose: Manages navigation between different views.





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

## @HostListener 

@HostListener is a decorator used to listen to DOM events on the host element of a directive or component. 

Syntax
```javascript
@HostListener(eventName: string, args?: string[])
```

* Listen to a click event 

```javascript
    import { Directive, HostListener } from '@angular/core';

    @Directive({
    selector: '[appClickLogger]'
    })
    export class ClickLoggerDirective {
    @HostListener('click', ['$event'])
    handleClick(event: Event) {
        console.log('Element clicked:', event);
    }
    }
```

* Handling Window Events
```javascript
    import { Component, HostListener } from '@angular/core';

    @Component({
    selector: 'app-root',
    template: `<h1>Resize the window to see the effect!</h1>`
    })
    export class AppComponent {
    @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
        console.log('Window resized:', (event.target as Window).innerWidth);
    }
    }

```





**[⬆ Back to Top](#table-of-contents)**

## @HostBinding

@HostBinding is a decorator used to bind a property of a directive or component to a property or attribute of its host element. 

Syntax
```javascript
    @HostBinding(bindingPropertyName: string)
```

**bindingPropertyName** is The name of the property, style, class, or attribute on the host element to bind to. Examples include class.someClass, style.backgroundColor, attr.aria-label, or directly id, disabled, etc.

```javascript
    import { Directive, HostBinding } from '@angular/core';

    @Directive({
    selector: '[appDynamicHost]'
    })
    export class DynamicHostDirective {
    @HostBinding('class.active') isActive = true;
    @HostBinding('style.border') border = '1px solid red';
    @HostBinding('attr.role') role = 'button';
    }

```





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

