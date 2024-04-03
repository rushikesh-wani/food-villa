import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import ContactForm from "./components/ContactForm";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import Carousal from "./components/Carousal/Carousel";

const About = lazy(() => import("./components/About"));
const Instamart = lazy(() => import("./components/Instamart"));
// JSX have only one parent
// <React.Fragment> </React.Fragment> or <> </>
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Rushikesh Wani",
    email: "rushi@gmail.com",
  });

  return (
    <>
      <Provider store={AppStore}>
        <UserContext.Provider
          value={{
            user: user,
          }}
        >
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: (
          <Suspense
            fallback={
              <h1 style={{ marginTop: "6rem", textAlign: "center" }}>
                Loading...
              </h1>
            }
          >
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,

        children: [
          {
            path: "contact-form",
            element: <ContactForm />,
          },
        ],
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:restoId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={appRouter} />);
