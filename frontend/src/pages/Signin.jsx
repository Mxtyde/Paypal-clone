import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { useEffect, useState } from "react";
import Pp_logo from "../images/Pp_logo.png";
import axios from "axios";

export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("token");

    
    if (userToken) {
      navigate("/dashboard"); 
    }
  }, [navigate]);

  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="rounded-lg text-card-foreground shadow-lg bg-white border-2 border-gray-200 w-96 text-center p-8 h-max">
          <img src={Pp_logo} alt="" className=" h-16 mb-4" style={{marginLeft:'110px'}} />
          <div className="text-gray-400"><b>Sign In</b></div>
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Email"
            className="text-lg py-10 px-10 w-15 mb-5"
            style={{padding:'12px',fontSize:'16px'}}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            className="text-lg py-3 px-4 mb-4"
          />
          <div className="pt-4 w-full">
            <Button
              onClick={async () => {
                const response = await axios.post(
                  import.meta.env.VITE_SERVER_URL + "/api/v1/user/signin",
                  {
                    username,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
              }}
              label={"Sign in"}
              className="w-full text-lg py-3"
            />
          </div>
          <div className="text-gray-400 mt-2 mb-2"> ──────────── or ──────────── </div>
          <Button
            className="bg-blue-700"
            onClick={()=>{
              navigate('/signup')
            }}
            label={"Sign up"}
          />
        </div>
      </div>
    </div>
  );
};
