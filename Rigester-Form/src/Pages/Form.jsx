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

          if (!form.name1.trim()) {
      newErrors.name = "Name is Required!";
    }
    
    if(!form.email.trim()){
        newErrors.email= "Email is Requird!"

    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)){
     newErrors.email="Email is Invalid!"
    }
     
    if(!form.password.trim()){
      newErrors.password = "Password is Requried!"
    } 
    
    else if (form.password<6){
      newErrors.password = "Password is Invalid!"
    }

    if (!form.confirmPassword.trim()){
      newErrors.confirmPassword = "Confirm Password is Requried"
    }

    else if(form.confirmPassword !== form.password){
      newErrors.confirmPassword ="Password do not Match"
    }


     return Object.keys(newErrors).length===0;
      
   

    } 
    setError(newErrors);
    
    

    const handleSubmit=(e)=>{
      e.preventDefault();
     }

     if(formVlidation){
      alert("Registration successful!")
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

              <label>Email:</label>
            <input type="email"
            value={form.email}
            onChange={(e)=> setForm({...form, email:e.target.value})}
            />

               {error.name}

              <label>Password:</label>
            <input type="password"
            value={form.passwoed}
            onChange={(e)=> setForm(e.target.value)}
            />
                {error.name}

              <label>Confirm Password:</label>
            <input type="password"
            value={form.confirmPassword}
            onChange={(e)=> setForm({...form,confirmPassword:e.target.value})}
            />

                {error.name}

            <button type="submit">Rigester</button>
        </form>

        </div>
    )
}