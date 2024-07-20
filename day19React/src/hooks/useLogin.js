import { useContext } from "react";
import AppContext from "../context/appContext";

const useLogin = () => {
    const { appLogin } = useContext(AppContext);
  const login = async ({ email, password }) => {
    try{
        console.log("--login called --");

        const URL = "http://localhost:1400/api/v1/auth/login";
        const OPTIONS = {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        };
  
        const res = await fetch(URL, OPTIONS);
        console.log(res);
        const data = await res.json();
        if(data.status == "sucess"){
        //   console.log("login success");
        //   alert("Loged In")
        appLogin(data.data.user);
        localStorage.setItem("authorization", data.data.user)
        }
        else{
          console.log("login failed");
          alert("login failed");
        }
  
  

    }
    catch(err){
        console.log(err);
        alert("Error: ", data.message);
        }
    
     
  };

  return { login };
};

export default useLogin;