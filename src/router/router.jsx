import FilmDescription from "../pages/FilmDescription";
import FilmSearch from "../pages/FilmSearch";

export const routes = [
    {path: '/films', element: <FilmSearch/>},
    {path: '/films/:id', element: <FilmDescription/>}
];