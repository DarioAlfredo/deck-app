# MERN Deck App - Shuffle & Sort Cards

## 🗂️ Project Structure
```
- backend/
  - src/
    - index.js
  - deck.js
  - package.json
  - Dockerfile

- frontend/
  - public/
    - index.html
  - src/
    - App.js
    - index.js
    - index.css
- .dockerignore
- package.json
- Dockerfile
- compose.yml
```

## 🚀 Quick Start with Docker
Make sure Docker is installed and running.

### 🔧 Step-by-Step Instructions
1. **Clone or download this repo**
2. **Open terminal in the root directory (where `docker-compose.yml` is)**
3. **Run this command to build and start all containers:**
   ```bash
   docker-compose up --build
   ```
4. Open your browser and navigate to:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:5000/deck](http://localhost:5000/deck)

## 🛠️ Features
- Shuffle deck
- Randomized sorting method
- Two independent sort algorithms
- Fully responsive UI
- Styled using Tailwind CSS

## 🧪 API Endpoints
| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| GET    | `/deck`        | Returns current deck     |
| POST   | `/shuffle`     | Shuffles and returns deck|
| POST   | `/sort`        | Randomly sorts deck      |

## ⚙️ Docker Compose Services
```yaml
services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    restart: always

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - backend
    restart: always
```

## 🧼 Useful Commands
Rebuild all containers:
```bash
docker-compose up --build
```
Stop services:
```bash
docker-compose down
```

## 📦 Dependencies
### Frontend
- React 18
- Tailwind CSS
- serve (for production build)

### Backend
- Express
- CORS

---
Author: Dario Alfredo 🃏
