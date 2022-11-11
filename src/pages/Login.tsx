import { useState } from "react";
import "./Login.css";

interface User {
  username: string;
  email: string;
  password: any;
}

function Login() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e: any, User: User): User => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="formPage">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="username"
          required
          autoComplete="off"
          value={inputs.username || ""}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          required
          autoComplete="off"
          value={inputs.email || ""}
          onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          required
          autoComplete="off"
          value={inputs.password || ""}
          onChange={handleChange}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
