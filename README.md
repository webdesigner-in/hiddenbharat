# 🌏 HiddenBharat

**HiddenBharat** is a modern travel discovery platform focused on uncovering **hidden, offbeat, and meaningful destinations across India**.

Unlike typical travel apps that promote overcrowded tourist spots, HiddenBharat is built around **slow travel, storytelling, and curated exploration** — designed to feel personal, calm, and premium.

🚀 **Live:** https://hiddenbharat.vercel.app

---

## ✨ Features

### 🧭 Destination Discovery
- Curated destinations across India
- Featured destinations highlighted by admins
- Category and tag-based exploration
- Smooth, responsive carousels (mobile & desktop)

### 🔐 Authentication
- Email & Password authentication
- Google OAuth login
- Secure session handling using Appwrite
- Logged-in users cannot access auth pages (login/signup)

### 👤 User & Roles
- Role-based access control
- Supported roles:
  - `user`
  - `admin`
  - `superadmin`
- Secure routing using centralized guards

### 📊 Dashboard
- Personalized travel dashboard
- Featured and curated destinations
- Designed for discovery, not analytics
- Seamless continuation of exploration

### 🧠 Architecture
- Centralized authentication store
- Centralized Appwrite service layer
- Normalized backend → frontend data flow
- Clean separation of concerns
- Scalable and production-ready structure

---

## 🛠 Tech Stack

### Frontend
- React
- React Router
- Tailwind CSS
- Embla Carousel
- Lucide Icons

### Backend
- Appwrite
  - Authentication
  - Google OAuth
  - Database
  - User Preferences (roles)

### Deployment
- Vercel

---

## 🗂 Project Structure

```txt
src/
├─ components/
│  ├─ ProfileComponent.jsx
│  ├─ PlaceCard.jsx
│  ├─ PlaceCrousel.jsx
│
├─ pages/
│  ├─ Dashboard.jsx
│  ├─ Destinations.jsx
│  ├─ Login.jsx
│  ├─ NotFound.jsx
│
├─ routes/
│  ├─ SecureRoute.jsx
│  ├─ PublicRoute.jsx
│
├─ services/
│  ├─ destination.service.js
│
├─ store/
│  ├─ auth.store.jsx
│
├─ lib/
│  ├─ appwrite.js
