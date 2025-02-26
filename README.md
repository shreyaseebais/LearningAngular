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

### What are Pipes? Pure vs Impure pipes?
A Pipe in Angular is used to transform data in the template.
✅  Pipes format, filter, or manipulate data before displaying it in the UI.
✅  They are pure functions, meaning they do not modify the original data.

Eg of Builtin pipes:  uppercase, lowercase, currency, date, json, percent, slice, async.

1️⃣ Pure Pipes
✅ Default behavior in Angular.
✅ Runs only when the input changes.
✅ Best for performance optimization.

```javascript
    @Pipe({
    name: 'example',
    pure: true // Default behavior
    })
```

2️⃣ Impure Pipes
✅ Runs on every change detection cycle (even if input hasn’t changed).
✅ Useful when working with arrays, objects, or dynamic data.
✅ Can affect performance negatively if overused.

```javascript
    @Pipe({
    name: 'example',
    pure: false // Runs on every change detection
    })
```

'

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


### What is Renderer2 in Angular?

Renderer2 is an Angular service used to safely manipulate the DOM without directly accessing it. 
This is important for security and cross-platform compatibility (e.g., when using Angular with SSR or Web Workers).

Why Use Renderer2 Instead of Direct DOM Manipulation?
✅ Security: Prevents direct manipulation of the DOM, reducing security risks like XSS.
✅ Cross-platform Support: Works in SSR (Server-Side Rendering) and Web Workers, where document is unavailable.
✅ Encapsulation: Ensures Angular optimally handles DOM updates.

For eg.
✅ Instead of: this.el.nativeElement.style.backgroundColor = 'yellow';
✅ We use: this.renderer.setStyle(...) (Safer & more Angular-friendly).



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
