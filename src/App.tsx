import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/root/layout";
import HomePage from "./components/pages/home-page";
import { ENDPOINTS_URL } from "./enums/endpoints.enum";
import YogaPage from "./components/pages/yoga-page";
import GNNPage from "./components/pages/gnn-page";
import KlasifikasiPage from "./components/pages/klasifikasi-page";
import HasilKlasifikasiPage from "./components/pages/hasil-klasifikasi-page";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ENDPOINTS_URL.HOME,
        element: <HomePage />,
      },
      {
        path: ENDPOINTS_URL.YOGA,
        element: <YogaPage />,
      },
      {
        path: ENDPOINTS_URL.GNN,
        element: <GNNPage />,
      },
      {
        path: ENDPOINTS_URL.KLASIFIKASI,
        element: <KlasifikasiPage />,
      },
      {
        path: ENDPOINTS_URL.HASIL_KLASIFIKASI,
        element: <HasilKlasifikasiPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
