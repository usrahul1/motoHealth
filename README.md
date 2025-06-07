# 🚗 MotoHealth - Vehicle Comparison Dashboard

MotoHealth is a dashboard web application that helps users compare various vehicles before making a purchase decision. It also allows users to maintain their own inventory and compare their owned vehicles side-by-side.

---

## ✨ Features

- 🔍 Compare specifications of multiple vehicles
- 🧾 Add and manage personal vehicle inventory
- 📊 Side-by-side vehicle comparison
- 📱 Responsive and user-friendly dashboard UI

---

## 🔧 Tech Stack

| Category        | Technologies Used                                    |
|-----------------|-----------------------------------------------------|
| Frontend        | Next.js, TypeScript, Tailwind CSS, DaisyUI, Shadcn UI |
| Backend         | Firebase, Supabase, GraphQL                          |
| Authentication  | Firebase Auth                                       |
| Database        | Supabase (PostgreSQL)                               |
| Styling         | Tailwind CSS + DaisyUI + Shadcn Components          |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/usrahul1/MotoHealth.git
cd MotoHealth
```

## 2. Setup Frontend

```bash
cd frontend
npm install
# or
yarn install

npm run dev
# or
yarn dev
```

## 3. Setup Backend

```bash
cd ../backend
npm install
# or
yarn install

npm start
# or
yarn start
```
---

## ⚙️ Environment Variables

> Note: The frontend and backend have **separate environment variable files**.

### Frontend `.env.local` example

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_API_URL=

```

## Backend .env

```env
DATABASE_URL=
DIRECT_URL=
PORT=3000
FRONTEND=http://localhost:5173
```
