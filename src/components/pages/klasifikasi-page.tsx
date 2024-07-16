import { ENDPOINTS_URL } from "@/enums/endpoints.enum";
import { Link } from "react-router-dom";
import KlasifikasiForm from "../klasifikasi-form";

const KlasifikasiPage = () => {
  return (
    <section className="mx-auto my-auto flex w-full max-w-[1280px] flex-grow flex-col gap-2 xl:gap-5 px-5 sm:-px-0 py-10">
      <h1 className="text-center font-paytone text-5xl">Klasifikasi Gerakan Yoga</h1>
      <div className="mx-auto max-w-[800px] text-center text-lg hidden sm:block">
        <p className="hidden xl:block">Silahkan upload gambar gerakan yoga yang akan diklasifikasi.</p>
        <p>
          Silahkan lihat halaman{" "}
          <span className="text-primary hover:underline">
            <Link to={ENDPOINTS_URL.YOGA}>pengenalan gerakan yoga</Link>
          </span>{" "}
          untuk melihat gerakan apa saja yang dapat diklasifikasi.
        </p>
      </div>
      <div className="mx-auto w-full max-w-[800px]">
        <KlasifikasiForm />
      </div>
    </section>
  );
};

export default KlasifikasiPage;
