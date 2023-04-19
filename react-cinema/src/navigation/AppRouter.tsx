import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import EventDetail from "../pages/EventDetail";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/utente",
        element: <AuthPage />
    },
    {
        path: "/detail/:eventId",
        element: <EventDetail />
    }
]);