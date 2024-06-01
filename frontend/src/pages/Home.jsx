import { useNavigate, Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Button2 } from "../components/Button2";
import logo from "../images/logo.png"; 
import Pp_logo from "../images/Pp_logo.png"

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          <Link href="#" prefetch={false}>
            <img src={logo} alt="PayPal" className="w-32" />
          </Link>
          <div className="flex items-center space-x-4">
          <Button
              onClick={async () => {navigate('/signin')}}
              label={"Sign in"}
              className="w-full text-md py-1"
            />
          </div>
        </div>
      </header>

      <main className="flex flex-col">
        <section className="bg-[#003087] py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center text-white">
            <div className="max-w-3xl">
              <img src={Pp_logo} alt="PayPal" className="mx-auto w-40 md:w-52 mb-6" />
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Secure Payments for Everyone</h1>
              <p className="text-lg md:text-xl mb-8">
                PayPal makes it easy and secure to send and receive payments online.
              </p>
              <Button2
                onClick={() => {
                navigate("/signup");
                }}
                className="text-md text-#003087 font-bold"
                label={"Sign Up for Free"}
             />
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose PayPal?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <ShieldIcon className="w-12 h-12 text-[#003087] mb-4" />
                <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
                <p className="text-gray-600">PayPal's advanced security features protect your transactions.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <WalletIcon className="w-12 h-12 text-[#003087] mb-4" />
                <h3 className="text-xl font-bold mb-2">Easy to Use</h3>
                <p className="text-gray-600">Seamless checkout experience across devices and platforms.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <GlobeIcon className="w-12 h-12 text-[#003087] mb-4" />
                <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                <p className="text-gray-600">Accept payments from customers around the world.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <DollarSignIcon className="w-12 h-12 text-[#003087] mb-4" />
                <h3 className="text-xl font-bold mb-2">Low Fees</h3>
                <p className="text-gray-600">Competitive rates and transparent pricing for your business.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#F5F5F5] py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Accepting Payments with PayPal</h2>
            <p className="text-gray-600 mb-8">
              Join millions of businesses that trust PayPal to securely process their payments.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}


function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function WalletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}