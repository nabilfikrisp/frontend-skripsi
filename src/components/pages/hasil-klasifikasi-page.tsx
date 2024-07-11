import { ENDPOINTS_URL } from "@/enums/endpoints.enum";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type StateSchema = {
  data: {
    className: string;
    probability: number;
  };
  previewUrl: string;
};

const displayPercent = (percent: number) => `${(percent * 100).toFixed(0)}%`;
const colorPercent = (probability: number) => {
  if (probability < 0.8) return "text-orange-600";
  if (probability < 0.25) return "text-red-600";
  return "text-primary";
};

type YogaPoseString = "warrior2" | "tree" | "plank" | "goddess" | "downdog";
const renderImageExample: Record<YogaPoseString, string> = {
  warrior2: "/yoga-pose/warrior-2.jpg",
  tree: "/yoga-pose/tree.jpg",
  plank: "/yoga-pose/plank.png",
  goddess: "/yoga-pose/goddess.jpg",
  downdog: "/yoga-pose/downdog.png",
};

const HasilKlasifikasiPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as StateSchema;

  useEffect(() => {
    fetch(state.previewUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid Blob URL");
        }
      })
      .catch(() => {
        navigate(ENDPOINTS_URL.KLASIFIKASI);
      });
  }, [state.previewUrl, navigate]);

  if (!state.data || !state.previewUrl) {
    return <Navigate to={ENDPOINTS_URL.KLASIFIKASI} />;
  }

  const isBelowThreshold = state.data.probability < 0.8;

  return (
    <section className="mx-auto my-auto flex w-full max-w-[800px] flex-grow flex-col justify-center gap-5 py-10">
      <h2 className="font-paytone text-4xl">Input Gambar</h2>
      <div className="flex h-[400px] w-full justify-center border-2 border-slate-500 p-2">
        <img src={state.previewUrl} alt="gambar input pengguna" className="max-h-[400px]" />
      </div>
      <h2 className="mt-2 font-paytone text-4xl">Hasil Klasifikasi</h2>
      <div>
        <div className="flex">
          <div className="flex w-full flex-col gap-2 border-2 border-slate-500 p-2">
            <div className="text-xl">Gerakanmu adalah gerakan</div>
            <div className="text-3xl font-bold capitalize text-primary">{state.data.className}</div>
          </div>
          <div className="flex w-full flex-col gap-2 border-2 border-l-0 border-slate-500 p-2 px-4">
            <div className="text-xl">Confidence Level</div>
            <span className={cn("text-3xl font-bold", colorPercent(state.data.probability))}>{displayPercent(state.data.probability)}</span>
          </div>
        </div>
        <div className="flex w-full items-center gap-2 border-2 border-t-0 border-slate-500 p-2 px-4">
          <span>0%</span>
          <Progress className="h-5 flex-grow" value={Number((state.data.probability * 100).toFixed(0))} withColorPercent />
          <span>100%</span>
        </div>
      </div>
      {isBelowThreshold && (
        <>
          <h2 className="mt-2 font-paytone text-4xl">Saran</h2>
          <div className="flex flex-col gap-4 border-2 border-slate-500 p-2 px-4 text-xl">
            <p>Model tidak cukup yakin dalam memprediksi gambar gerakan yoga Anda.</p>
            <p>Cobalah untuk menginput gambar dengan kontras yang jelas antara latar belakang dan gerakan.</p>
            <p>
              Anda dapat melihat contoh gerakan yoga di halaman{" "}
              <Link to={ENDPOINTS_URL.YOGA} className="text-primary underline">
                pengenalan gerakan yoga
              </Link>
              .
            </p>
          </div>
          <h2 className="mt-2 font-paytone text-4xl">
            Contoh gambar gerakan <span className="font-semibold font-paytone capitalize text-primary">{state.data.className}</span>
          </h2>
          <div className="flex h-[400px] w-full border-2 border-slate-500 p-2">
            <img src={renderImageExample[state.data.className as YogaPoseString]} alt="saran gambar gerakan yoga" className="mx-auto max-h-[400px]" />
          </div>
        </>
      )}
      <Link to={ENDPOINTS_URL.KLASIFIKASI}>
        <Button>Klasifikasi Ulang</Button>
      </Link>
    </section>
  );
};

export default HasilKlasifikasiPage;
