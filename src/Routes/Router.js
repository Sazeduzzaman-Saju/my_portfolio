import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Menu/Menu";
import About from "../Page/About/About";
import Contact from "../Page/Contact/Contact";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Resume from "../Page/Resume/Resume";
import Service from "../Page/Service/Service";
import Testimonial from "../Page/Testimonial/Testimonial";
import Welcome from "../Page/Welcome/Welcome";
import ProjectDetails from "../Page/Works/ProjectDetails/ProjectDetails";
import Works from "../Page/Works/Works";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
    },
    {
        path: '/welcome',
        element: <Welcome></Welcome>
    },
    {
        path: '/about',
        element: <About></About>
    },
    {
        path: '/services',
        element: <Service></Service>
    },
    {
        path: '/resume',
        element: <Resume></Resume>
    },
    {
        path: '/works',
        element: <Works></Works>,
        loader: () => fetch('https://my-portfolio-server-xi.vercel.app/projects')
    },
    {
        path: '/testimonial',
        element: <Testimonial></Testimonial>
    },
    {
        path: '/contact',
        element: <Contact></Contact>
    },
    {
        path: '/projects/:id',
        element: <ProjectDetails></ProjectDetails>,
        loader: ({ params }) => fetch(`https://my-portfolio-server-xi.vercel.app/projects/${params.id}`)
    },
])
export default router;