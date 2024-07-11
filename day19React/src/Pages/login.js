import { useState } from "react";
import uselogin from "../hooks/useLogin";

const Login = () => {
    const { login } = uselogin();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validate = () => {
        

        let validate1 = email.length>4;
        let validate2 = password.length>8;
        if (validate1 && validate2) {
            login({ email, password });
        } else if (!validate1) {
            alert("Incorrect Email");
        } else {
            alert("Password must be greater than 7 characters");
        }
    };

   
    return (
        <div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <input value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={validate}>Sign Up</button>
        </div>
    );
};

export default Login;