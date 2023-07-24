import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home/Home/Home";
import CardDetails from "../page/CardDetails/CardDetails";
import CollagePage from "../page/CollagePage/CollagePage";
import PageCartDetails from "../page/CollagePage/PageCartDetails";
import Registration from "../page/Registration/Registration";
import Login from "../page/Login/Login";
import ResetPassword from "../page/ResetPassword/ResetPassword";
import Admission from "../page/Admission/Admission";
import AdmissionForm from "../page/AdmissionForm/Admissionform";
import MyCollege from "../page/MyCollege/MyCollege";
import PrivetRout from "../../PrivetRout/PrivetRout";
import ErrorPage from "../page/ErrorPage/ErrorPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/:id',
        element: <PrivetRout><CardDetails></CardDetails></PrivetRout>,
        loader: ({ params }) => fetch(`https://collage-booking-server-md-hasan-akon1.vercel.app/${params.id}`)
      },
      {
        path: '/page/:id',
        element: <PrivetRout><PageCartDetails></PageCartDetails></PrivetRout>,
        loader: ({ params }) => fetch(`https://collage-booking-server-md-hasan-akon1.vercel.app/page/${params.id}`)
      },
      {
        path: '/collagepage',
        element: <CollagePage></CollagePage>
      },
      {
        path:'/registration',
        element:<Registration></Registration>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/resetpass',
        element:<ResetPassword></ResetPassword>
      },
      {
        path:'/admission',
        element:<PrivetRout><Admission></Admission></PrivetRout>
      },
      {
        path:'/admissionFrom/:id',
        element:<PrivetRout><AdmissionForm></AdmissionForm></PrivetRout>,
        loader:({params})=>fetch(`https://collage-booking-server-md-hasan-akon1.vercel.app/admissionFrom/${params.id}`)
      },
      {
        path:'/mycollege',
        element:<PrivetRout><MyCollege></MyCollege></PrivetRout>
      }
    ]
  },
]);

export default router;