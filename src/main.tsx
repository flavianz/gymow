import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./sites/Home/Home.tsx";
import Sportliches from "./sites/schulleben/sportliches/Sportliches.tsx";

const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/schulleben/sportliches",
        element: <Sportliches />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
