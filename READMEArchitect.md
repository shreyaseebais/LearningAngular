# Architecture

### Table of Contents

| No. | Questions |
| --- | --------- |
| 1 | [](#) |
| 2 | [](#) |
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

### ChatGPT
Generate a list of the top 20 interview questions for a Solution Architect role at Software Industry. Include behavioral, technical, and industry-specific questions. Provide model answers tailored to my experience in Angular,Node,ReactJS





**[⬆ Back to Top](#table-of-contents)**

### owasp, CQRS, Cao, CAP
Concept	Key Idea
OWASP:	Security best practices for web applications (Top 10 vulnerabilities).
CQRS:	Separates read (query) and write (command) operations for better scalability.
CAO:    Likely a reference to CAP theorem trade-offs (Consistency, Availability, Partition Tolerance).
CAP:	Distributed systems can only guarantee 2 out of 3: Consistency, Availability, or Partition Tolerance.




**[⬆ Back to Top](#table-of-contents)**

### Why Use ORM (Object-Relational Mapping)?
ORM (Object-Relational Mapping) is a technique that allows developers to interact with databases using objects and classes instead of writing raw SQL queries. It bridges the gap between relational databases and object-oriented programming.

|       ORM             |           Supported Databases             |	Features                                    |
|-----------------------|-------------------------------------------|-----------------------------------------------|
|   Sequelize	        |   MySQL, PostgreSQL, SQLite, MSSQL	    |   Full-featured, widely used in Node.js.      |
|   TypeORM	            |   MySQL, PostgreSQL, MongoDB	            |   Works well with TypeScript.                 |
|   Prisma	            |   MySQL, PostgreSQL, MongoDB	            |   Modern, easy-to-use, best for TypeScript.   |   
|   Mongoose	        |   MongoDB	                                |   ODM (Object-Document Mapper) for MongoDB.   |





**[⬆ Back to Top](#table-of-contents)**

### What is SSR?
SSR (Server-Side Rendering) is a technique where a web page is generated on the server and sent as a fully rendered HTML page to the browser. This improves performance, SEO, and initial page load times.





**[⬆ Back to Top](#table-of-contents)**

### CSR (Client-Side Rendering) vs. ISR (Incremental Static Regeneration)

CSR means the entire page is rendered in the browser using JavaScript. The server only sends a minimal HTML file, and the client fetches data asynchronously.

ISR is a hybrid approach that combines SSG (Static Site Generation) and CSR. It allows pages to be statically pre-rendered but updated incrementally in the background.





**[⬆ Back to Top](#table-of-contents)**

### 🛠️ CSR vs. ISR vs. Other Methods
|   Rendering Type	                      | First Load Speed |	SEO-Friendly  |   Server Load |	Best Use Case                    |
|-----------------------------------------|------------------|----------------|---------------|----------------------------------|
|   CSR (Client-Side Rendering)	          | Slow	         |   ❌ No	    | Low	         | SPAs, dashboards                 |
|   SSR (Server-Side Rendering)	          | Medium	         |   ✅ Yes	    |High	         | Blogs, e-commerce                |
|   SSG (Static Site Generation)	      | Fast	         |   ✅ Yes	    |Low	         | Marketing sites                  |
|   ISR (Incremental Static Regeneration) |	Fast	         |   ✅ Yes	    |Medium	         | Large sites with frequent updates|


**[⬆ Back to Top](#table-of-contents)**

### What is Caching?
Caching is the process of storing frequently used data in a temporary storage layer so that future requests can be served faster without hitting the database or server.


**[⬆ Back to Top](#table-of-contents)**

### What is Memory leakage? Did it happen to your project?


### What is Middleware? 


### SOLID principles
Single Responsibility Principle (SRP)
Open/Closed Principle (OCP)
Liskov Substitution Principle (LSP)
Interface Segregation Principle (ISP)
Dependency Inversion Principle (DIP)

 
| Principle |  Explanation                                           |	Example Fix                                         |
|-----------|--------------------------------------------------------|------------------------------------------------------|
|   SRP     | A class should have only one reason to change.         | Separate concerns into different classes.            |
|   OCP     | Open for extension, closed for modification.	         | Use polymorphism instead of modifying existing code. |
|   LSP	    | Subtypes should be substitutable for their base types. | Avoid breaking behavior in derived classes.          |
|   ISP	    | Avoid forcing classes to implement unnecessary methods.| Create smaller, more specific interfaces.            |
|   DIP	    | Depend on abstractions, not concrete implementations.	 | Use dependency injection for flexibility.            |


**[⬆ Back to Top](#table-of-contents)**

### OWASP (Open Web Application Security Project)
OWASP is a non-profit organization focused on improving software security. It provides tools, documentation, and guidelines to help developers build secure web applications.

One of the most well-known OWASP projects is the OWASP Top 10, which lists the most critical web application security risks.


**[⬆ Back to Top](#table-of-contents)**

### What are techniques to communicate frontend with backend ?
When communicating with a back-end server or a service, there are two primary techniques: PULL and PUSH. 

|       Technique	|           Type	    |       Connection Type         |	Real-Time           |   	Efficiency           |
|-------------------|-----------------------|-------------------------------|------------------------|---------------------------|
|   Polling	        |   Pull        	    |   HTTP	                    |   ❌ No               |   	❌ Low                 |
|   Long Polling	|   Pull	            |   HTTP	                    |   ✅ Yes              |	⚠️ Medium              |
|   WebSockets	    |   Push	            |   WebSocket	                |   ✅ Yes              |	✅ High                |
|   SSE	            |   Push	            |   HTTP	                    |   ✅ Yes	           |    ✅ High                |
|   Push Notif.	    |   Push	            |   Push Service	            |   ✅ Yes              |	✅ High                |


**[⬆ Back to Top](#table-of-contents)**

### How do you handle trade-offs between performance, scalability, and maintainability?
I follow a balanced approach based on the application’s requirements. For instance, in an Angular-based enterprise app, I optimized performance by implementing lazy loading and OnPush change detection. For scalability, I leveraged GraphQL with Node.js to reduce over-fetching of data. To maintain clean architecture, I enforced SOLID principles and design patterns like Factory and Singleton.


**[⬆ Back to Top](#table-of-contents)**

### Can you describe a time when you designed a complex application architecture?
In my previous role, I designed a scalable microservices architecture using Node.js and Express for the backend, with React.js as the frontend. To handle high traffic, I implemented Redis caching and an NGINX reverse proxy. The system supported multi-tenancy, where each tenant had isolated data storage in MongoDB. The architecture was modular, making it easy to onboard new tenants without affecting existing ones.



**[⬆ Back to Top](#table-of-contents)**

###  How do you ensure security in a web application?
I apply OWASP security best practices, such as:

1. Input validation to prevent XSS and SQL Injection.
2. Using JWT tokens for secure authentication in React/Angular apps.
3. Implementing CORS policies to restrict unauthorized access.
4. Using Rate limiting in Node.js with Express.js middleware like express-rate-limit to prevent DDoS attacks.



**[⬆ Back to Top](#table-of-contents)**

### How do you apply OWASP For Node.js/Express.js Apps?
1. Use Helmet.js to secure HTTP headers:
```javascript
const helmet = require('helmet');
app.use(helmet());
```
2. Validate input with Joi, Zod, or express-validator
3. Use bcrypt for password hashing
4. Implement rate limiting to prevent abuse


**[⬆ Back to Top](#table-of-contents)**

### Polling in Angular
Polling is a technique where the client (Angular app) repeatedly requests data from the server at a fixed interval. This is useful when you need to update the UI periodically but don't require real-time updates.


When to Use Polling in Angular?
* Periodic updates like stock prices, weather, or dashboards.
* When WebSockets or Server-Sent Events are not available.
* When real-time performance is not critical.

```typescript
ngOnInit() {
  setInterval(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => console.log(data));
  }, 5000); // Polls every 5 seconds
}
```

```typescript
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-polling',
  templateUrl: './polling.component.html',
  styleUrls: ['./polling.component.css']
})
export class PollingComponent implements OnInit, OnDestroy {
  data: any;
  private pollingSubscription!: Subscription;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.pollingSubscription = interval(5000) // Emit every 5 seconds
      .pipe(switchMap(() => this.http.get('/api/data'))) // Make API call
      .subscribe(response => {
        this.data = response;
        console.log('Data updated:', this.data);
      });
  }

  ngOnDestroy() {
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe(); // Prevent memory leaks
    }
  }
}
```




**[⬆ Back to Top](#table-of-contents)**

### Long Polling in Angular
Long polling is a technique where the client makes a request to the server, and the server holds the request open until new data is available. 

When to Use Long Polling?
* When WebSockets are not available.
* Real-time applications (Chat apps, notifications).
* When updates don’t happen frequently, but you need real-time data.

```javascript
    import { Component, OnDestroy, OnInit } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { Subscription } from 'rxjs';
    import { switchMap } from 'rxjs/operators';

    @Component({
    selector: 'app-long-polling',
    templateUrl: './long-polling.component.html',
    styleUrls: ['./long-polling.component.css']
    })
    export class LongPollingComponent implements OnInit, OnDestroy {
    data: any;
    private pollingSubscription!: Subscription;

    constructor(private http: HttpClient) {}

    longPoll() {
        this.pollingSubscription = this.http.get('/api/data', { responseType: 'json' })
        .pipe(switchMap(() => this.http.get('/api/data'))) // Immediately send another request
        .subscribe(response => {
            this.data = response;
            console.log('Updated Data:', this.data);
            this.longPoll(); // Recursively call longPoll to continue polling
        });
    }

    ngOnInit() {
        this.longPoll();
    }

    ngOnDestroy() {
        if (this.pollingSubscription) {
        this.pollingSubscription.unsubscribe(); // Prevent memory leaks
        }
    }
    }
```




**[⬆ Back to Top](#table-of-contents)**

### WebSockets 

WebSockets provide real-time, full-duplex communication between the client and server, making them ideal for applications like chat apps, stock market updates, and live dashboards.

How WebSockets Work?

The client establishes a WebSocket connection with the server.
The connection remains open, allowing both client and server to send messages anytime.
The connection stays alive until explicitly closed.


websocket.service.ts

```typescript
import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket$!: WebSocketSubject<any>;

  constructor() {
    this.connect();
  }

  private connect() {
    this.socket$ = webSocket('ws://localhost:3000'); // WebSocket Server URL
  }

  sendMessage(message: any) {
    this.socket$.next(message);
  }

  getMessages() {
    return this.socket$.asObservable();
  }

  closeConnection() {
    this.socket$.complete();
  }
}

```


websocket.component.ts
```typescript
import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebSocketService } from '../services/websocket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.css'],
})
export class WebSocketComponent implements OnInit, OnDestroy {
  messages: any[] = [];
  private socketSubscription!: Subscription;
  userMessage: string = '';

  constructor(private wsService: WebSocketService) {}

  ngOnInit() {
    this.socketSubscription = this.wsService.getMessages().subscribe((message) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    if (this.userMessage.trim()) {
      this.wsService.sendMessage({ text: this.userMessage });
      this.userMessage = ''; // Clear input after sending
    }
  }

  ngOnDestroy() {
    if (this.socketSubscription) {
      this.socketSubscription.unsubscribe();
      this.wsService.closeConnection();
    }
  }
}


```

websocket.component.html

```typescript
<div class="chat-container">
  <h2>Angular WebSocket Chat</h2>
  <div class="messages">
    <div *ngFor="let message of messages" class="message">
      {{ message.text }}
    </div>
  </div>
  <input [(ngModel)]="userMessage" placeholder="Type a message..." />
  <button (click)="sendMessage()">Send</button>
</div>

```

websocket.component.css

```typescript
.chat-container {
  max-width: 400px;
  margin: auto;
  text-align: center;
  font-family: Arial, sans-serif;
}

.messages {
  border: 1px solid #ddd;
  height: 200px;
  overflow-y: auto;
  padding: 10px;
  margin-bottom: 10px;
}

.message {
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

input {
  width: 70%;
  padding: 5px;
}

button {
  width: 25%;
  padding: 5px;
  background: blue;
  color: white;
  border: none;
  cursor: pointer;
}
```

app.module.ts

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WebSocketComponent } from './websocket/websocket.component';
import { WebSocketService } from './services/websocket.service';

@NgModule({
  declarations: [AppComponent, WebSocketComponent],
  imports: [BrowserModule, FormsModule],
  providers: [WebSocketService],
  bootstrap: [AppComponent],
})
export class AppModule {}
```


**Websocket in Serverside (Nodejs)**  

server.js

```javascript
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

server.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('message', (message) => {
    console.log('Received:', message);

    // Broadcast message to all connected clients
    server.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server running on ws://localhost:3000');
```

When to Use WebSockets in Angular?
✅ Real-time chat apps
✅ Live data streaming (Stock prices, sports scores)
✅ Multi-user collaboration tools (Google Docs-like apps)
✅ IoT and monitoring dashboards





**[⬆ Back to Top](#table-of-contents)**

### Server-Sent Events (SSE)
Unlike WebSockets, SSE is one-way (server → client), making it great for applications like live notifications, dashboards, and stock market updates.


How Server-Sent Events Work?

* Client sends an initial HTTP request to the server.
* Server keeps the connection open and sends updates as events occur.
* Client listens for updates in real-time.
* The connection remains open until the server closes it or the client disconnects.

 
When to Use SSE in Angular?
* Live notifications (news, alerts).
* Stock price updates.
* Real-time analytics dashboards.
* IoT & sensor data streaming.


sse.service.ts

```typescript
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SseService {
  constructor(private zone: NgZone) {}

  getServerEvents(url: string): Observable<any> {
    return new Observable((observer) => {
      const eventSource = new EventSource(url);

      eventSource.onmessage = (event) => {
        this.zone.run(() => observer.next(JSON.parse(event.data)));
      };

      eventSource.onerror = (error) => {
        console.error('SSE Error:', error);
        eventSource.close();
        observer.error(error);
      };

      return () => {
        eventSource.close();
      };
    });
  }
}
```

sse.component.ts
```typescript
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SseService } from '../services/sse.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sse',
  templateUrl: './sse.component.html',
  styleUrls: ['./sse.component.css'],
})
export class SseComponent implements OnInit, OnDestroy {
  messages: any[] = [];
  private sseSubscription!: Subscription;

  constructor(private sseService: SseService) {}

  ngOnInit() {
    this.sseSubscription = this.sseService
      .getServerEvents('http://localhost:3000/events')
      .subscribe((message) => {
        this.messages.push(message);
      });
  }

  ngOnDestroy() {
    if (this.sseSubscription) {
      this.sseSubscription.unsubscribe();
    }
  }
}
```

sse.component.html
```html
<div class="sse-container">
  <h2>Live Server Updates</h2>
  <div class="messages">
    <div *ngFor="let msg of messages" class="message">
      {{ msg.text }} - <small>{{ msg.timestamp }}</small>
    </div>
  </div>
</div>
```


sse.component.css
```css
.sse-container {
  max-width: 400px;
  margin: auto;
  text-align: center;
  font-family: Arial, sans-serif;
}

.messages {
  border: 1px solid #ddd;
  height: 200px;
  overflow-y: auto;
  padding: 10px;
  margin-top: 10px;
}

.message {
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
```


server.js (Backend)

```javascript
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  setInterval(() => {
    const message = { text: "New update!", timestamp: new Date().toISOString() };
    res.write(`data: ${JSON.stringify(message)}\n\n`);
  }, 3000); // Send update every 3 seconds
});

app.listen(3000, () => console.log('SSE Server running on port 3000'));
```


**[⬆ Back to Top](#table-of-contents)**