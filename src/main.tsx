import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./sites/Home/Home.tsx";
import {
    Dienste,
    Extern,
    Fussball,
    Gymnasiade,
    Intern,
    Leitbild,
    Mitwirkungsstruktur,
    Schneesportlager,
    Schuladministration,
    Schulleben,
    Schulrat,
    SOGO,
    Sportliches,
    Tenero,
    Theater,
    Unihockey,
    Volleyball,
} from "./sites/Schulleben.tsx";

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
    {
        path: "/schulleben/sportliches/volleyball",
        element: <Volleyball />,
    },
    {
        path: "/schulleben/leitbild",
        element: <Leitbild />,
    },
    {
        path: "/schulleben",
        element: <Schulleben />,
    },
    {
        path: "/schulleben/organisationseinheit/mitwirkungsstruktur",
        element: <Mitwirkungsstruktur />,
    },
    {
        path: "/schulleben/organisationseinheit/schulrat",
        element: <Schulrat />,
    },
    {
        path: "/schulleben/organisationseinheit/schuladministration",
        element: <Schuladministration />,
    },
    {
        path: "/schulleben/organisationseinheit/sogo",
        element: <SOGO />,
    },
    {
        path: "/schulleben/organisationseinheit/dienste",
        element: <Dienste />,
    },
    {
        path: "/schulleben/beratung/intern",
        element: <Intern />,
    },
    {
        path: "/schulleben/beratung/extern",
        element: <Extern />,
    },
    {
        path: "/schulleben/kulturelles/theater",
        element: <Theater />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
