import "./SignupForm.css";
import { useState } from "react";
import { signup } from "../services/authService";
import { useNavigate } from "react-router-dom";

const SignupForm = () =>{
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("");

    const handleSignup = (e) =>{
        e.preventDefault();
        if(password !== confirmPassword){
            setError("Password and confirm password does not match!");
            return;
        }
        else{
        signup(firstName, lastName, email, password, confirmPassword)
        .then(res=>{
            localStorage.setItem("token", res.data.token);
            alert("Signup success");
            navigate("/signin")
        })
        .catch(()=>alert("Invalid values"))
        }

    }

    return (
        <div className="glass-container">
            <h2>Create an Account</h2>

            <form onSubmit={handleSignup}>
                <div className="form-input">
                    <label>First Name</label>
                    <input type="text" onChange={e=>setFirstName(e.target.value)}/>
                </div>
                <div className="form-input">
                    <label>Last Name</label>
                    <input type="text" onChange={e=>setLastName(e.target.value)}/>
                </div>
                <div className="form-input">
                    <label>Email Address</label>
                    <input type="email" onChange={e=>setEmail(e.target.value)}/>
                </div>
                <div className="form-input">
                    <label>Password</label>
                    <input type="password" onChange={e=>setPassword(e.target.value)}/>
                </div>

                <div className="form-input">
                    <label>Confirm Password</label>
                <input 
                    type="password"
                    onChange={e => {
                        setConfirmPassword(e.target.value);
                        setError("");
                    }}
                />
                </div>
                {error && <p className="error-msg">{error}</p>}

                <div className="submit-button">
                    <button type="submit">Signup</button>
                </div>
            </form>

        </div>
    )
}
export default SignupForm