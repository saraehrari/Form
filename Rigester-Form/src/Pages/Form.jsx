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
   
    const handleSubmit=(e)=>{
      e.preventDefault();
      
      if(formVlidation()){
      alert("Registration successful!")
     }
     }
    const handleReset = ()=>{
      setForm({
    name1: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  setError({})
    }
     

    return(
      <div>
        <h1>Welcom in Rigester Form</h1>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text"
            value={form.name1}
            onChange={(e)=> setForm({...form ,name1:e.target.value})}
            />

             {error.name}

              <label>Email:</label>
            <input type="email"
            value={form.email}
            onChange={(e)=> setForm({...form, email:e.target.value})}
            />

               {error.email}

              <label>Password:</label>
            <input type="password"
            value={form.password}
            onChange={(e)=> setForm({ form,password:e.target.value})}
            />
                {error.password}

              <label>Confirm Password:</label>
            <input type="password"
            value={form.confirmPassword}
            onChange={(e)=> setForm({...form,confirmPassword:e.target.value})}
            />

                {error.confirmPassword}

            <button type="submit" onSubmit={handleReset}>Rigester</button>
        </form>

        </div>
    )
}