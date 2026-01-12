## Background Finder

A simple **React (Vite + TypeScript)** application that displays background images grouped into categories.  
A local **JSON Server** is used as a mock backend API.

## Features

- React with TypeScript
- Vite as the build tool
- Component-based architecture
- Tailwind CSS integration

## Project structure

```
background-finder/
├── client/
│  ├── src/
|  |   ├── components/
|  |   ├── pages/
|  |   ├── utils/
|  |   └── App.tsx
│  ├── index.html
│  ├── package.json
│  └── vite.config.ts
│
├── server/
│  ├──  images/
│  └── db.json
│
├── .gitignore
├── .prettierignore
├── .prettierrc
└──  README.md
```

## Getting started

Make sure you have the following installed:

- **Node.js** (v18 or newer recommended)
- **npm**
- **JSON Server**

```bash
npm install -g json-server
```

### 1. Clone the repository

```bash
git clone https://github.com/denisu02/background-finder.git
cd background-finder
```

### 2. Run server (backend)

```bash
cd server
json-server --watch db.json --static ./images --port 3000
```

The backend API will be available at `http://localhost:3000`.

### 2. Run client (frontend)

Install dependencies

```bash
cd client
npm install
```

Start the development server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser to view the app.
