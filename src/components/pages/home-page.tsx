import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ENDPOINTS_URL } from "@/enums/endpoints.enum";

const HomePage = () => {
  return (
    <section className="mx-auto my-auto flex w-full max-w-[1280px] flex-grow flex-col gap-10">
      <h1 className="font-paytone text-center text-5xl">Klasifikasi Gerakan Yoga</h1>
      <p className="mx-auto max-w-[600px] text-center text-2xl">
        Sistem aplikasi klasifikasi gerakan yoga berbasis web. Sistem ini memanfaatkan teori <b>Graph Neural Network</b> dalam menyelesaikan kasus klasifikasi
        gambar.
      </p>
      <div className="flex flex-col gap-5">
        <Button className="mx-auto w-[600px] text-xl" size="lg">
          <Link to={ENDPOINTS_URL.KLASIFIKASI}>Klasifikasi</Link>
        </Button>
        <div className="mx-auto flex w-[600px] gap-5 text-lg">
          <Button className="w-full" size="lg" variant="secondary">
            <Link to={ENDPOINTS_URL.YOGA}>Pengelanan Gerakan Yoga</Link>
          </Button>
          <Button className="w-full" size="lg" variant="secondary">
            <Link to={ENDPOINTS_URL.GNN}>Pengenalan GNN</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
