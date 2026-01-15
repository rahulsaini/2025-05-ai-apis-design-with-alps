# Angular + Spring Boot Timeline Carousel

This scaffold includes a Spring Boot API and an Angular UI for a timeline-based image carousel.

## Structure

- `backend/` - Spring Boot API serving timeline image metadata.
- `frontend/` - Angular application rendering the carousel and timeline.

## Backend (Spring Boot)

```bash
cd backend
mvn spring-boot:run
```

The API exposes `GET /api/timeline` with sample data.

## Frontend (Angular)

```bash
cd frontend
npm install
npm start
```

The UI calls `/api/timeline` to populate the carousel. Configure a proxy in Angular if you run the API
on a different host or port.
