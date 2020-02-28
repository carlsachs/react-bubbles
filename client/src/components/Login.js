import React, { useState } from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [ login, setLogin ] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setLogin({
        ...login,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
        .post('login', login)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.payload);
            props.history.push('/creatures');
        })
        .catch(err => console.log(`Login.js axiosWithAuth error:`, err.response ))
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
};

export default Login;
