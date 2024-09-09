import { Navigate, Route, Routes, Outlet } from "react-router-dom";
import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import { Restaurante } from "../V8/pages/Restaurante";
import Takeaway2 from "./pages/Takeaway2";
import MesaReservacion from "./components/componentesMesa/MesaReservacion";
import { OrdenPay } from "./components/componenteTakeaway/Pay/OrdenPay";
import PayMetodo from "./components/componenteTakeaway/Pay/PayMetodo";
import ReciboPay from "./components/componenteTakeaway/Pay/ReciboPay";
import NumbreOrden from "./components/componenteTakeaway/Pay/NumbreOrden";
import OrdenCreada from "./components/componenteTakeaway/OrdenCreada";
import CashMetodo from "./components/componenteTakeaway/Pay/CashMetodo";
import ConfirmPrintf from "./components/componenteTakeaway/Pay/ConfirmPrintf";
import NumbreVoid from "./components/componenteTakeaway/Pay/NumberVoid";
import { OrdenPayDescuento } from "../V8/components/componenteTakeaway/Pay/OrdenPayDescuento";
import PayMetodoDescuento from "./components/componenteTakeaway/Pay/PayMetodoDescuento";
import CardMetodoDesc from "./components/componenteTakeaway/Pay/CardMetodoDesc";
import PayMetodoDescuentoCash from "./components/componenteTakeaway/Pay/PayMetodoDescuentoCash";
import PayMetodoDesc from "./components/componenteTakeaway/Pay/PayMetodoDesc";
import PayMetodoCard from "./components/componenteTakeaway/Pay/PayMetodoCard";
import PayMetodoDescuentoCard from "./components/componenteTakeaway/Pay/PayMetodoDescuentoCard";
import ConfirmPrintfDesc from "./components/componenteTakeaway/Pay/ConfirmPrintfDesc";
import TakeawayDesc from "./components/componenteTakeaway/Pay/TakeawayDesc";

const V8: Array<PageLink> = [
  {
    title: "V8",
    path: "/crafted/v8/Takeaway",
    isSeparator: false,
    isActive: true,
  },
];

const V8Page = () => {
  return (
    <Routes>
      {/* Ruta principal */}
      <Route path="/restaurante/*" element={<Restaurante />} />

      {/* Ruta secundaria anidada */}
      <Route
        path="/restaurante/mesaReservacion"
        element={<MesaReservacion />}
      />
      <Route path="/restaurante/ordenPay" element={<OrdenPay />} />
      <Route
        path="/restaurante/OrdenPayDescuento"
        element={<OrdenPayDescuento />}
      />
      <Route path="/restaurante/PayMetodo" element={<PayMetodo />} />
      <Route
        path="/restaurante/PayMetodoDescuento"
        element={<PayMetodoDescuento />}
      />
      <Route path="/restaurante/CashMetodo" element={<CashMetodo />} />
      <Route path="/restaurante/CardMetodoDesc" element={<CardMetodoDesc />} />
      <Route path="/restaurante/PayMetodoDesc" element={<PayMetodoDesc />} />
      <Route path="/restaurante/PayMetodoCard" element={<PayMetodoCard />} />
      <Route path="/restaurante/TakeawayDesc" element={<TakeawayDesc />} />
      <Route
        path="/restaurante/ConfirmPrintfDesc"
        element={<ConfirmPrintfDesc />}
      />
      <Route
        path="/restaurante/PayMetodoDescuentoCard"
        element={<PayMetodoDescuentoCard />}
      />
      <Route
        path="/restaurante/PayMetodoDescuentoCash"
        element={<PayMetodoDescuentoCash />}
      />

      <Route path="/Takeaway/*" element={<Takeaway2 />} />

      <Route path="/Takeaway/ReciboPay" element={<ReciboPay />} />
      <Route path="/Takeaway/NumbreVoid" element={<NumbreVoid />} />
      <Route path="/Takeaway/NumbreOrden" element={<NumbreOrden />} />
      <Route path="/OrdenCreada" element={<OrdenCreada />} />

      <Route path="/ConfirmPrintf" element={<ConfirmPrintf />} />
    </Routes>
  );
};

export default V8Page;
