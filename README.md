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


### 1. What is Single page application

1. When you change the sections webpage(Index.html) is same, but only the content is changed. Hence refresh icon in browser will never spin. 
2. 	SPA makes  web application faster & gives user a reactive experience.
3. 	Using js to change the content of the webpage is dynamically much faster than having to reach out to the server for every page change and for every new piece of data we want to display.
4.	If we need some data from the server we can load It in the background without making the webpage unresponsive.


### 2. Why should you use Angular vs Plain javascript or jquery

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


### 3. Lifecycle hooks

**Constructor:**
Constructor does this

**ngOnChanges:**
onchanges does this

**ngOnInit:**

**ngOnContentInit:**

**ngOnContentChecked:**

**ngOnDestroy:**

**[⬆ Back to Top](#table-of-contents)**



### 4. @HostListener 

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


### 5. @HostBinding

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