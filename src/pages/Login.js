import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/login.css"; // Import your custom styles

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const lowerCaseUsername = username.toLowerCase();
    const lowerCasePassword = password.toLowerCase();

    if (lowerCaseUsername === "user" && lowerCasePassword === "user") {
      navigate("/work");}

      else if (lowerCaseUsername === "USER" && lowerCasePassword === "USER") {
        navigate("/work");}

        else if (lowerCaseUsername === "User" && lowerCasePassword === "User") {
          navigate("/work");}
    
  
     else if (lowerCaseUsername === "admin" && lowerCasePassword === "admin")  {
      navigate("/work2"); // Redirect to work2.js
} 
else if (lowerCaseUsername === "ADMIN" && lowerCasePassword === "ADMIN")  {
  navigate("/work2"); // Redirect to work2.js
}else if (lowerCaseUsername === "admin" && lowerCasePassword === "ADMIN")  {
  navigate("/work2"); // Redirect to work2.js
}


else {
      console.log("Invalid credentials");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
