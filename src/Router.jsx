import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeOne from "./components/HomeOne/index.jsx";
import HomeOneSingle from "./components/HomeOne/index-single.jsx";
import HomeOneBoxed from "./components/HomeOne/index-boxed.jsx";
import HomeTwo from "./components/HomeTwo/index.jsx";
import HomeTwoSingle from "./components/HomeTwo/index-single-two.jsx";
import HomeTwoBoxed from "./components/HomeTwo/index-two-boxed.jsx";
import AboutUs from "./components/AboutUs/index.jsx";
import Projects from "./components/ProjectsPages/index.jsx";
import News from "./components/NewsPages/index.jsx";
import NewsDetails from "./components/NewsPages/NewsDetails.jsx";
import Course from "./components/Course/index.jsx";
import CourseDetails from "./components/Course/CourseDetails.jsx";
import TeamDetails from "./components/TeamPages/TeamDetails.jsx";
import Contact from "./components/ContactPages/Contact.jsx";
import Testimonial from "./components/TestimonialPages/Testimonial.jsx";
import ProjectsDetails from "./components/ProjectsPages/ProjectsDetails.jsx";
import Pricing from "./components/PricingPages/Pricing.jsx";
import Team from "./components/TeamPages/index.jsx";
import Layout from "./components/Helper/Layout.jsx";
import Faq from "./components/FaqPages/Faq.jsx";
import Error from "./components/ErrorPages/Error.jsx";
import Products from "./components/ShopPages/Products.jsx";
import ProductsSidebar from "./components/ShopPages/ProductsSidebar.jsx";
import ProductsDetails from "./components/ShopPages/ProductsDetails.jsx";
import Cart from "./components/ShopPages/Cart.jsx";
import Checkout from "./components/ShopPages/Checkout.jsx";

/** Develop initialized */

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        element: <HomeOne />,
      },

      {
        path: "/home-one-single",
        element: <HomeOneSingle />,
      },

      {
        path: "/home-one-boxed",
        element: <HomeOneBoxed />,
      },

      {
        path: "/home-two",
        element: <HomeTwo />,
      },
      {
        path: "/home-two-single",
        element: <HomeTwoSingle />,
      },

      {
        path: "/home-two-boxed",
        element: <HomeTwoBoxed />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/products-sidebar",
        element: <ProductsSidebar />,
      },
      {
        path: "/products-details",
        element: <ProductsDetails />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/news-details",
        element: <NewsDetails />,
      },
      {
        path: "/course",
        element: <Course />,
      },
      {
        path: "/course-details",
        element: <CourseDetails />,
      },
      {
        path: "/contact",
        element: <Contact Pages />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/team-details",
        element: <TeamDetails />,
      },
      {
        path: "/testimonial",
        element: <Testimonial />,
      },
      {
        path: "/projects-details",
        element: <ProjectsDetails />,
      },
      {
        path: "/Faq",
        element: <Faq />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },

      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
