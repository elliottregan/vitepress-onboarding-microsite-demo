<script setup>
import Counter from './components/Counter.vue'
import CodeTabs from './components/CodeTabs.vue'
import DiagramRenderer from './components/DiagramRenderer.vue'

const diagram = `
graph TD
A[Shell Application] --> B[Property Dashboard MFE]
A --> C[Tenant Management MFE]
A --> D[Maintenance Portal MFE]
subgraph 'Shared Resources'
E[Design System]
F[Authentication]
G[Core Services]
end

B --> E
B --> F
B --> G

C --> E
C --> F
C --> G

D --> E
D --> F
D --> G

`
</script>

# Application Architecture 🏗️

## Overview 📋

Our application follows a modular architecture with clear separation of concerns.

```
src/
├── app/
│   ├── core/          # Singleton services, guards
│   ├── shared/        # Shared components, pipes
│   ├── features/      # Feature modules
│   └── layout/        # App layout components
```

## Micro Frontend Architecture 🏢

<DiagramRenderer :data="diagram"/>

## Core Principles 🎯

1. **Modularity**

   - Feature-based modules
   - Lazy loading
   - Clear boundaries

2. **State Management**

   - NgRx store
   - Feature states
   - Selectors pattern

3. **Component Design**
   - Smart/Container components
   - Presentational components
   - Composition over inheritance

## Code Examples

<CodeTabs :labels="['TypeScript', 'JavaScript', 'HTML']">
  <template #tab-0>

```typescript
// src/app/features/property/property.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from './models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = '/api/properties';

  constructor(private http: HttpClient) {}

  getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.apiUrl);
  }

  getProperty(id: string): Observable<Property> {
    return this.http.get<Property>(`${this.apiUrl}/${id}`);
  }

  createProperty(property: Property): Observable<Property> {
    return this.http.post<Property>(this.apiUrl, property);
  }

  updateProperty(id: string, property: Property): Observable<Property> {
    return this.http.put<Property>(`${this.apiUrl}/${id}`, property);
  }

  deleteProperty(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
```

  </template>
  <template #tab-1>

```javascript
// src/app/features/property/property.service.js
export class PropertyService {
  constructor(http) {
    this.http = http;
    this.apiUrl = '/api/properties';
  }

  getProperties() {
    return this.http.get(this.apiUrl);
  }

  getProperty(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createProperty(property) {
    return this.http.post(this.apiUrl, property);
  }

  updateProperty(id, property) {
    return this.http.put(`${this.apiUrl}/${id}`, property);
  }

  deleteProperty(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
```

  </template>
  <template #tab-2>

```html
<!-- src/app/features/property/property-list/property-list.component.html -->
<div class="property-list-container">
  <h2>Properties</h2>

  <div class="filters">
    <input
      type="text"
      placeholder="Search properties..."
      [(ngModel)]="searchTerm"
      (input)="filterProperties()"
    />

    <select [(ngModel)]="filterType" (change)="filterProperties()">
      <option value="all">All Properties</option>
      <option value="apartment">Apartments</option>
      <option value="house">Houses</option>
      <option value="commercial">Commercial</option>
    </select>
  </div>

  <div class="property-grid">
    <app-property-card
      *ngFor="let property of filteredProperties"
      [property]="property"
      (click)="selectProperty(property)"
    ></app-property-card>
  </div>

  <div class="pagination">
    <button
      [disabled]="currentPage === 1"
      (click)="changePage(currentPage - 1)"
    >
      Previous
    </button>

    <span>Page {{ currentPage }} of {{ totalPages }}</span>

    <button
      [disabled]="currentPage === totalPages"
      (click)="changePage(currentPage + 1)"
    >
      Next
    </button>
  </div>
</div>
```

  </template>
</CodeTabs>

## Data Flow 🔄

```
┌────────────┐    ┌─────────┐    ┌──────────┐
│ Component  │ ─> │  Store  │ ─> │ Effects  │
└────────────┘    └─────────┘    └──────────┘
      ▲               │               │
      └───────────────┴───────────────┘
```

## Security 🔒

- Route guards
- JWT authentication
- CSRF protection
- XSS prevention

## Performance 🚀

- Lazy loading
- Change detection strategy
- Virtual scrolling
- Image optimization

## Interactive Demo

<Counter />

::: info
This interactive counter component demonstrates a simple Vue component embedded in markdown.
:::

::: tip
Components like these can be reused throughout your documentation to provide interactive examples.
:::

::: warning
Remember to register your components in the theme configuration for them to work properly.
:::
