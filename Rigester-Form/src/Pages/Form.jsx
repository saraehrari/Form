import { useState } from "react";

export default  function Form() {

    const [form , setForm] = useState({
        name1:"",
        email:"",
        password:"",
        confirmPassword:"",
    });

    const [error , setError] = useState({});

    const formVlidation = ()=>{

        const newErrors= {}

          if (!form.name1) {
      newErrors.name = "Name is Required!";
    }
    
    if(!form.email){
        newErrors.email= "Email is Requird!"

    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)){
     newErrors.email="Email is Invalid!"
    }
     
    if(!form.password){
      newErrors.password = "Password is Requried!"
    } 
    
    else if (form.password.length <6){
      newErrors.password = "Password is Invalid!"
    }

    if (!form.confirmPassword){
      newErrors.confirmPassword = "Confirm Password is Requried"
    }

    else if(form.confirmPassword !== form.password){
      newErrors.confirmPassword ="Password do not Match"
    }
     setError(newErrors);

     return Object.keys(newErrors).length===0;
      
   

    } 
   
   const handleSubmit = (e) => {
  e.preventDefault();

  if (formVlidation()) {
    alert("Registration successful!");

    setForm({
      name1: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setError({});
  }
};
    
     

    return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <h1>Create Account</h1>
          <p>Join us and start your journey today.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={form.name1}
              onChange={(e) =>
                setForm({ ...form, name1: e.target.value })
              }
            />
            {error.name && <span className="error">{error.name}</span>}
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
            {error.email && <span className="error">{error.email}</span>}
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
            {error.password && (
              <span className="error">{error.password}</span>
            )}
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
            />
            {error.confirmPassword && (
              <span className="error">{error.confirmPassword}</span>
            )}
          </div>

          <button type="submit" className="register-btn">
            Create Account
          </button>
        </form>

        <p className="form-footer">
          Already have an account? <span>Sign in</span>
        </p>
      </div>
    </div>
  );}
  