import { useEffect} from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const PaymentStatus = () => {
  const [searchParams] = useSearchParams();
  const message = searchParams.get("message");
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("token");

    if (!userToken) {
      navigate("/signin"); 
    } else {
      const t = setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="bg-white border-2 text-card-foreground shadow-lg border-slate-200 md:w-1/4 text-center py-10  rounded-md px-5 m-4 text-blue-700 font-bold text-3xl">
        {message}
        <div className="text-center text-black text-sm font-semibold py-4">
          Redirecting to Dashboard 
        </div>
      </div>
    </div>
  );
};
