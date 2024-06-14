import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";

import HomePage from "./pages/HomePage.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";

export const UserDataContext = React.createContext();

function App() {
  const userData = {
    username: "John",
    avatar: "https://placedog.net/100/100",
    level: "platinum",
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <UserDataContext.Provider
                value={{
                  user: userData,
                }}
              >
                <HomePage />
              </UserDataContext.Provider>
            }
          />
          <Route
            path="/product/view/:id"
            element={
              <UserDataContext.Provider
                value={{
                  user: userData,
                }}
              >
                <ViewProductPage />
              </UserDataContext.Provider>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
