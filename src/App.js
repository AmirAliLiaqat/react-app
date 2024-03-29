import React from "react";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Search from "./components/Search";
import Blog from "./components/Blog";
import User from "./User";
import Error from "./components/Error";
import TempApp from "./projects/tempApp/TempApp";
import TodoList from "./projects/todoList/TodoList";

const App = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/about" element={<About/>}>About</Route>
        <Route path="/services" element={<Services/>}>Services</Route>
        <Route path="/portfolio" element={<Portfolio/>}>Portfolio</Route>
        <Route path="/blog" element={<Blog/>}>Blog</Route>
        <Route path="/contact" element={<Contact/>}>Contact</Route>
        <Route path="/search" element={<Search/>}>Search</Route>
        <Route path="/weather-app" element={<TempApp/>}>Weather App</Route>
        <Route path="/todo-list" element={<TodoList/>}>Todo List</Route>
        <Route path="/user/:fname/:lname" element={<User/>}>User</Route>
        <Route path="*" element={<Error/>}>Error</Route>
      </Routes>
    </>
  )
}

export default App;