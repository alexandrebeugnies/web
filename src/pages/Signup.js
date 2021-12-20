import  Axios  from "axios";
import React, { useState,useEffect } from "react";

const Signup = () => {
  const signup = () => {
    Axios.post("http://localhost:8080/signup",
      {
        username: userRegistration.username,
        name: userRegistration.name,
        firstname: userRegistration.firstname,
        gender: userRegistration.gender,
        birthdate: userRegistration.birthdate,
        address: userRegistration.address,
        email: userRegistration.email,
        tel: userRegistration.tel,
        password: userRegistration.password,
      }).then((res) => {
        console.log(res);
      });
  };
  /*useEffect(()=>{
        fetch("http://localhost:8080/signup")
        .then(
            (r)=>{
               r.json().then(
                   data=>console.log(data)
               )
            }
        )

    },[])*/

  const [userRegistration, setUserRegistration] = useState({
    username: "",
    name: "",
    firstname: "",
    gender: "",
    birthdate: "",
    address: "",
    email: "",
    tel: "",
    password: "",
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };
    setRecords([...records, newRecord]);

    setUserRegistration({
      username: "",
      name: "",
      firstname: "",
      gender: "",
      birthdate: "",
      address: "",
      email: "",
      tel: "",
      password: "",
    });
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            autoComplete="off"
            placeholder="Username"
            value={userRegistration.username}
            onChange={handleInput}
            name="username"
            id="username"
          />
        </div>
        <div>
          <input
            type="text"
            autoComplete="off"
            placeholder="Name"
            value={userRegistration.name}
            onChange={handleInput}
            name="name"
            id="name"
          />
        </div>
        <div>
          <input
            type="text"
            autoComplete="off"
            placeholder="First Name"
            value={userRegistration.firstname}
            onChange={handleInput}
            name="firstname"
            id="firstname"
          />
        </div>
        <div>
          <input
            type="text"
            autoComplete="off"
            placeholder="Gender"
            value={userRegistration.gender}
            onChange={handleInput}
            name="gender"
            id="gender"
          />
        </div>
        <div>
          <input
            type="text"
            autoComplete="off"
            placeholder="Birth Date"
            value={userRegistration.birthdate}
            onChange={handleInput}
            name="birthdate"
            id="birthdate"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Address"
            autoComplete="off"
            value={userRegistration.address}
            onChange={handleInput}
            name="address"
            id="address"
          />
        </div>
        <div>
          <input
            type="text"
            autoComplete="off"
            placeholder="Phone Number"
            value={userRegistration.tel}
            onChange={handleInput}
            name="tel"
            id="tel"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            autoComplete="off"
            value={userRegistration.email}
            onChange={handleInput}
            name="email"
            id="email"
          />
        </div>
        <div>
          <input
            type="password"
            autoComplete="off"
            placeholder="Password"
            value={userRegistration.password}
            onChange={handleInput}
            name="password"
            id="password"
          />
        </div>
        <div>
          <input
            type="password"
            autoComplete="off"
            placeholder="Confirm Password"
            value={userRegistration.password}
            onChange={handleInput}
            name="password"
            id="password"
          />
        </div>
        <button onClick={signup} type="submit">Registration</button>
      </form>

      <div>
        {records.map((curElem) => {
          const {
            id,
            username,
            name,
            firstname,
            gender,
            birthdate,
            address,
            email,
            tel,
            password,
          } = curElem;
          return (
            <div className="showDataStyle" key={id}>
              <p>{username}</p>
              <p>{name}</p>
              <p>{firstname}</p>
              <p>{gender}</p>
              <p>{birthdate}</p>
              <p>{address}</p>
              <p>{email}</p>
              <p>{tel}</p>
              <p>{password}</p>
              
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Signup;
