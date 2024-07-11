import { useState } from "react";
import useSignUp from "../hooks/useSignUp";

const SignUp = () => {
    const { signUp } = useSignUp();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validate = () => {
        // let validation = true;
        
        // if (validation) {
        //     signUp({ email, password });
        // } else {
        //     alert("Validation error...");
        // }

        let validate1 = email.length>4;
        let validate2 = password.length>= 8;
        if (validate1 && validate2) {
            signUp({ email, password });
        } else if(!validate1){
            alert("Invalid email...");
        }
        else if(!validate2){
            alert("Password must be greater than 7 characters");
            }
            else{
                alert("Validation error...");
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

export default SignUp;