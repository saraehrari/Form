import { useState } from "react";



const [form, setForm] = useState({
  name1:"",
  lastname:"",
  email:"",
  password:"",
  confirmpassword:""
});
const[error, setError] = useState({});

 function Validation(){
  const NewError=({})


if (!form.name1.trim()){
 NewError.name1="Name is Requried!"
}

if(!form.lastname.trim()){
  NewError.lastname="Last Name is Requuried!"
}

if(!form.email.trim()){
NewError.email="Email is Requried!"}
 else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test (form.email)){
  NewError.email="Please enter a valid email address!"
 }

if(!form.password.trim()){
  NewError.password="Password is Requried!"}
   else if (form.password.length< 8){
    NewError.password="Password must be at least 8 characters!"
   }

   if(!form.confirmpassword.trim()){
    NewError.confirmpassword ="Confrim Password is Requried!"
   }
   else if(form.password !== form.confirmpassword){
    NewError.confirmpassword="Confrim Password do not Match"
   }

  };

  const handleSubmit=(e)=>{
  e.preventDefault();

  const NewError = Validation();

  if(Object.keys.length===0){
    alert("Registration Successful!")

    setForm({
   name1:"",
   lastname:"",
   email:"",
   password:"",
   confirmpassword:""

    })
   setError({});

  }  else {
    setError(NewError);
  }
  }
  
  return (
  <div className="page-container">
    <form className="register-form" onSubmit={handleSubmit}>

      <h1>Create Account</h1>
      <p className="form-subtitle">
        Join us and start your journey today.
      </p>

      <label>Name:</label>
      <input
        type="text"
        value={form.name1}
        onChange={(e) =>
          setForm({ ...form, name1: e.target.value })
        }
      />
      <span className="error">{error.name1}</span>

      <label>Last Name:</label>
      <input
        type="text"
        value={form.lastname}
        onChange={(e) =>
          setForm({ ...form, lastname: e.target.value })
        }
      />
      <span className="error">{error.lastname}</span>

      <label>Email:</label>
      <input
        type="email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />
      <span className="error">{error.email}</span>

      <label>Password:</label>
      <input
        type="password"
        value={form.password}
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />
      <span className="error">{error.password}</span>

      <label>Confirm Password:</label>
      <input
        type="password"
        value={form.confirmpassword}
        onChange={(e) =>
          setForm({ ...form, confirmpassword: e.target.value })
        }
      />
      <span className="error">{error.confirmpassword}</span>

      <button type="submit">Create Account</button>

    </form>
  </div>
);