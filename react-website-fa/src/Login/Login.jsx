import React from "react";

function Login() {
  return (
    <div>
      <form action="">
        <h1>LOGIN</h1>
        <div className="input-box">
          <input type="text" placeholder="username" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" required />
        </div>
        <button type="submit">Login</button>

        <div className="register-link">
          <p>
            Don't have an account? <a href="/register">Register Here</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
