import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./sites/Home/Home.tsx";
import {
    Fussball,
    Gymnasiade,
    Schneesportlager,
    Sportliches,
    Tenero,
    Unihockey,
} from "./sites/schulleben/Sportliches.tsx";

const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/schulleben/sportliches",
        element: <Sportliches />,
    },
    {
        path: "/schulleben/sportliches/fussball",
        element: <Fussball />,
    },
    {
        path: "/schulleben/sportliches/gymnasiade",
        element: <Gymnasiade />,
    },
    {
        path: "/schulleben/sportliches/schneesportlager",
        element: <Schneesportlager />,
    },
    {
        path: "/schulleben/sportliches/tenero",
        element: <Tenero />,
    },
    {
        path: "/schulleben/sportliches/unihockey",
        element: <Unihockey />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
