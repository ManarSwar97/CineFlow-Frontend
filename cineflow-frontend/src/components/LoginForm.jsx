import "./LoginForm.css";
import { useState } from "react";
import { login } from "../services/authService";


const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) =>{
        e.preventDefault();
        login(email, password)
        .then(res=>{
            localStorage.setItem("token", res.data.token);
            alert("Login success");
        })
        .catch(()=>alert("Invalid credentials"));
    }

    return(
        <div className="glass-container">
            <div className="login-details">
            <a href="">← BACK TO HOME</a>
            <h2>Sign In</h2>
            <p className="login-subtitle">
                Manage your bookings!
            </p>
            </div>
            <form onSubmit={handleLogin}>
                <div className="form-input">
                    <label>Email Address</label>
                    <input type="email" onChange={e=>setEmail(e.target.value)}/>
                </div>
                <div className="form-input">
                    <label>Password</label>
                    <input type="password" onChange={e=>setPassword(e.target.value)}/>
                </div>

                <div className="submit-button">
                    <button type="submit">Login</button>
                </div>

                <div className="account">
                    <span>Don't have an account? <a href="" className="account-link">Sign up</a></span>
                </div>

            </form>

        </div>

    )
}
export default LoginForm;
