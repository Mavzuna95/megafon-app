/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/contacts/Contact";
import Header from "./components/header/Header";
import AddUser from "./components/contacts/AddUser";
import Favorites from "./components/favorite/Favorites";

function App() {
  const [newUsers, setNewUsers] = useState([]);
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("favorite")) || []
  );

  useEffect(() => {
    if (newUsers) {
      fetch("http://localhost:3003/users")
        .then((response) => response.json())
        .then((json) => setNewUsers(json));
    }
  }, []);

  const addToFav = (user) => {
    if (favorite.findIndex((el) => el.id === user.id) > -1) {
      setFavorite(favorite.filter((el) => el.id !== user.id));
    } else {
      setFavorite([...favorite, user]);
    }
  };
  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);
  return (
    <div className="">
      <Header favorite={favorite} />
      <Routes>
        <Route
          path="/"
          element={
            <Contact
              newUsers={newUsers}
              setNewUsers={setNewUsers}
              favorite={favorite}
              addToFav={addToFav}
            />
          }
        />
        <Route
          path="/adduser"
          element={<AddUser newUsers={newUsers} setNewUsers={setNewUsers} />}
        />
        <Route
          path="/favorite"
          element={<Favorites addToFav={addToFav} favorite={favorite} />}
        />
      </Routes>
    </div>
  );
}

export default App;
