import "./SignupForm.css";

const SignupForm = () =>{

    return (
        <div className="glass-container">
            <h2>Create an Account</h2>

            <form method="POST" action="">
                <div className="form-input">
                    <label>First Name</label>
                    <input type="text" />
                </div>
                <div className="form-input">
                    <label>Last Name</label>
                    <input type="text" />
                </div>
                <div className="form-input">
                    <label>Email Address</label>
                    <input type="email" />
                </div>
                <div className="form-input">
                    <label>Password</label>
                    <input type="password" />
                </div>
                <div className="form-input">
                    <label>Confirm Password</label>
                    <input type="password" />
                </div>

                <div className="submit-button">
                    <input type="submit" value="Signup"/>
                </div>

            </form>

        </div>
    )
}
export default SignupForm