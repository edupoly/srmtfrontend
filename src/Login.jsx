import React from "react";
function Login() {
  var [user, setUser] = React.useState({
    username: "",
    password: "",
  });
  function userLogin(ev) {
    ev.preventDefault();
    fetch("http://localhost:4500/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }
  return (
    <div>
      <form
        onSubmit={(event) => {
          userLogin(event);
        }}
      >
        <input
          type="text"
          name="username"
          onChange={(event) => {
            setUser({ ...user, username: event.target.value });
          }}
        />
        <br />
        <input
          type="password"
          name="password"
          onChange={(event) => {
            setUser({ ...user, password: event.target.value });
          }}
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
