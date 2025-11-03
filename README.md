# TripNest
# 🏝️ TripNest – Discover Hidden Gems Around the World

TripNest is a **frontend travel accommodation platform** built using **Next.js** and **Tailwind CSS**, designed to let users explore, search, and view various types of stays like villas, hotels, dormitories, and resorts. It provides a beautiful and interactive UI with smooth animations and category-based browsing — all without needing a backend connection.

---

## 🚀 Features

### 🌍 Explore Destinations
- Beautifully categorized sections for **Villas**, **Hotels**, **Dormitories/Hostels**, **Resorts**, and **Cottages**.  
- Each stay is displayed in a modern card-based layout with responsive design.

### 🔍 Frontend Search Functionality
- Users can **search** for accommodations directly from the homepage.
- The app dynamically redirects to a `/search` page that filters available listings (from a static frontend dataset) based on user queries.

### 👤 User Authentication (Frontend Simulation)
- Local login and signup simulation using `localStorage`.
- **Dynamic Dashboard and Signup button visibility** – automatically updates when users log in or log out.

### 🧭 Navigation
- Built with **Next.js App Router**.
- Smooth page transitions using `useRouter`.
- Conditional rendering for authenticated vs. unauthenticated users.

### 🎨 Modern UI & UX
- Developed using **Tailwind CSS** for a clean, responsive design.
- Custom icons, typography, and hover effects for a premium aesthetic.
- Mobile-friendly layout optimized for all screen sizes.

---

## 🧱 Tech Stack

| Technology | Description |
|-------------|-------------|
| **Next.js 14+** | React-based framework for building the frontend. |
| **React.js** | Component-based library for dynamic UI. |
| **Tailwind CSS** | Utility-first CSS framework for rapid styling. |
| **Axios** | For handling frontend HTTP requests (if backend is added). |
| **React Icons** | Beautiful and scalable icons for UI elements. |

---

## 📁 Folder Structure
TripNest/
│
├── app/
│ ├── page.js # Homepage (with sliders & search)
│ ├── search/page.js # Search results page
│ ├── Signup/page.js # Signup component
│ ├── Dashboard/page.js # Dashboard (visible after login)
│ ├── api/ # (Optional) API routes if backend is added later
│
├── components/
│ ├── Slider1.js # Villas section
│ ├── Slider2.js # Dormitories/Hostels section
│ ├── Slider3.js # Hotels section
│ ├── Slider4.js # Resorts section
│ ├── Slider5.js # Cottages section
│
├── public/
│ ├── Hotels/ # Hotel images
│ ├── Villas/ # Villa images
│ ├── Resorts/ # Resort images
│
├── styles/
│ └── globals.css # Global Tailwind and custom styles


🤝 Contributing

Pull requests are welcome!
If you find bugs or want to suggest new features, feel free to open an issue.
