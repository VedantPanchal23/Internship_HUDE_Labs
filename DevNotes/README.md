# DevNotes

DevNotes is a full-stack **note-taking web application** built for developers. It allows users to **create, view, and delete notes** seamlessly. Designed using the **MERN** stack and containerized with **Docker** and **NGINX**, this app is optimized for efficient deployment and scalability.

---

## Tech Stack

* **Frontend:** [React](https://reactjs.org/), [Vite](https://vitejs.dev/)
* **Backend:** [Node.js](https://nodejs.org/), [Express](https://expressjs.com/)
* **Database:** [MongoDB](https://www.mongodb.com/)
* **Reverse Proxy:** [NGINX](https://www.nginx.com/)
* **Containerization:** [Docker](https://www.docker.com/), [Docker Compose](https://docs.docker.com/compose/)

---

## Project Structure

```
DevNotes/
│
├── backend/             # Express.js API
│   ├── index.js
│   ├── package.json
│   └── Dockerfile
│
├── frontend/            # React app
│   ├── src/
│   │   └── App.jsx
│   ├── index.html
│   ├── package.json
│   └── Dockerfile
│
├── nginx/               # NGINX config
│   └── default.conf
│
├── docker-compose.yaml
└── README.md
```

---

## Getting Started

Make sure **Docker** and **Docker Compose** are installed on your system.

### 1. Clone the Repository

```bash
git clone https://github.com/VedantPanchal23/Internship_Docker.git
cd Internship_Docker
cd devnotes
```

### 2. Build and Start the Containers

```bash
docker-compose up --build
```

### Services

* **Frontend**: [http\://localhost:3000](http\://localhost:3000)
* **Backend API**: [http\://localhost:5000/api/notes](http\://localhost:5000/api/notes)
* **MongoDB**: runs in container

---

## API Endpoints

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | `/api/notes`     | Fetch all notes     |
| POST   | `/api/notes`     | Create a new note   |
| DELETE | `/api/notes/:id` | Delete a note by ID |

---

## Environment Variables

The project uses default environment values defined in Docker Compose:

* **MongoDB URI**: `mongodb://mongo:27017/devnotes`
* **Server Port**: `5000`

You can customize these inside `docker-compose.yml` or use `.env` files as needed.

---

## Development Notes

* The **React frontend** is served through **NGINX** for performance and production readiness.
* The **Express backend** runs in a separate container and connects to MongoDB via Docker networking.
* Ensure frontend API calls in `App.jsx` target the correct backend service name (e.g., `http://localhost:5000` or use Docker-internal networking like `http://backend:5000` inside containers).

---

## Future Enhancements

* Add note categories/tags
* User authentication
* Edit existing notes
* Markdown support

---

## Support

If you find this project helpful, feel free to give it a ⭐ on [GitHub](https://github.com/VedantPanchal23/Internship_Docker.git)!
