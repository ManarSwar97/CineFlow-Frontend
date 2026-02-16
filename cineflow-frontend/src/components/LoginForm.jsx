import "./LoginForm.css";

const LoginForm = () => {

    return(
        <div className="glass-container">
            <h2>Login Form</h2>

            <form method="POST" action="">
                <div className="form-input">
                    <label>Email Address</label>
                    <input type="email" />
                </div>
                <div className="form-input">
                    <label>Password</label>
                    <input type="password" />
                </div>

                <div className="submit-button">
                    <input type="submit" value="Login"/>
                </div>

                <div className="account">
                    <span>Don't have an account? <a href="" className="account-link">Sign up</a></span>
                </div>

            </form>

        </div>

    )
}
export default LoginForm;
