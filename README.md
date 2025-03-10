# 🎬 MovieGPT

MovieGPT is a modern web application that combines movie discovery with AI-powered recommendations. Users can search movies, watch trailers, and get personalized movie suggestions powered by Google's Gemini 1.5 Flash generative model.


## ✨ Features

- **🔐 User Authentication**: Secure login and registration powered by Firebase
- **🔍 Movie Discovery**: Browse and search movies using TMDB API data
- **🤖 AI Recommendations**: Get personalized movie suggestions based on your preferences using Gemini 1.5 Flash
- **▶️ Trailer Viewing**: Watch movie trailers directly via YouTube integration
- **📱 Responsive Design**: Crafted with Tailwind CSS for a seamless experience across all devices

## 🛠️ Tech Stack

- **⚛️ Frontend**: React.js with Redux Toolkit for state management
- **🔥 Authentication**: Firebase Authentication
- **🎨 Styling**: Tailwind CSS
- **🌐 APIs**:
  - TMDB API for movie data
  - Google's Gemini 1.5 Flash API for AI-powered recommendations
- **🧭 Routing**: React Router for navigation

## 💡 React Concepts Used

- ⚙️ React Hooks (useState, useEffect, useContext)
- 🔄 Custom Hooks for reusable logic
- 🧭 React Router for navigation
- 🔄 Redux Toolkit for state management
- 🧩 Component composition and reusability

## 🚀 Getting Started

### Prerequisites

- React.js (v16.0.0 or later)
- npm or yarn
- Firebase account
- TMDB API key
- Gemini API key

### 📥 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rajasrakhe20/netflix-gpt.git
   cd MovieGPT
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
   
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key
   
   REACT_APP_GEMINI_API_KEY=your_gemini_api_key
   ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
├── pages/                # Page components
├── hooks/                # Custom React hooks
├── store/                # Redux store configuration
│   ├── slices/           # Redux slices
│   └── index.js          # Store configuration
├── services/             # API services
│   ├── tmdb.js           # TMDB API service
│   └── gemini.js         # Gemini API service
├── utils/                # Utility functions
├── firebase/             # Firebase configuration
├── App.js                # Main app component
└── index.js              # Entry point
```

## 🔥 Firebase Setup

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com)
2. Enable Authentication (Email/Password, Google, etc.)
3. Create a web app in your Firebase project
4. Copy the Firebase configuration to your `.env` file

## 🎞️ TMDB API Setup

1. Create an account at [themoviedb.org](https://www.themoviedb.org)
2. Request an API key
3. Add the API key to your `.env` file

## 🤖 Gemini API Setup

1. Get access to Gemini API through [Google AI Studio](https://ai.google.dev)
2. Generate an API key
3. Add the API key to your `.env` file

## 🚀 Deployment

To build the project for production:

```bash
npm run build
# or
yarn build
```

You can deploy the `build` folder to services like:
- 🔥 Firebase Hosting
- ▲ Vercel
- 🌐 Netlify
- 🐙 GitHub Pages


<!-- ## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details. -->

## 🙏 Acknowledgments

- 🎬 TMDB for providing the movie database
- 🤖 Google for Gemini API
- 🔥 Firebase for authentication services

