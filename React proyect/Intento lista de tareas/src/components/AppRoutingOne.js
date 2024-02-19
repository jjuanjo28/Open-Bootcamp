import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  redirect,
  Route,
  Routes,
  Link,
  Navigate,
  useNavigate,
  Outlet,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/profilePage";
import TasksPage from "./pages/tasks/TasksPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import StatePage from "./pages/home/StatePage";

function AppRoutingOne() {
  const [logged, setLogged] = useState(false);
  let taskList = [
    {
      id: 1,
      name: "Task 1",
      description: "My First task",
    },
    {
      id: 2,
      name: "Task 2",
      description: "My Second task",
    },
    {
      id: 3,
      name: "Task 3",
      description: "My Third task",
    },
  ];
  useEffect(() => {
    console.log("cambió logged");
    console.log("User logged:", logged);
  }, [logged]);

  function LoginTrue() {
    if (logged) {
      console.log("loged true:", logged);
      return <Navigate to="/" replace={true} />;
    } else {
      const data = localStorage.getItem("credentials");
        if (data) {
        setLogged(true);
        return <Navigate repleace to="/profile" />;
      }
      console.log("logged false: ", logged);
      return <LoginPage />;
    }
  }

  return (
    <Router>
      <aside>
        <Link to="/">||Home|</Link>
        <Link to="/about">|About|</Link>
        <Link to="/faqs">|Faqs|</Link>
        <Link to="*">|Not found page|</Link>
        <Link to="/task/1">|Task 1</Link>
        <Link to="/task/2">|Task 2</Link>
        <Link to="/task/3">|Task 3</Link>
        <Link to="/profile">|Profile|</Link>
        <Link to="/login">|Login||</Link>
      </aside>
      <main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/online-state" element={<StatePage/>} />
          <Route path="/login" element={<LoginTrue />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faqs" element={<AboutPage />} />
          <Route
            path="/profile"
            element={
              logged ? <ProfilePage /> : <Navigate repleace to="/login" />
            }
          />

          {/* Esto lo debo proteger */}

          <Route path="/task" element={<TasksPage></TasksPage>} />

          <Route
            path="/task/:id"
            element={<TaskDetailPage task={taskList} />}
          />
          <Route path="*" element={<NotFoundPage></NotFoundPage>} />
        </Routes>
      </main>
    </Router>
  );
}

export default AppRoutingOne;
