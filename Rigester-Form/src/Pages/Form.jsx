import { useState } from "react";



const [form, setForm] = useState({
  name1:"",
  lastname:"",
  email:"",
  password:"",
  confirmpassword:""
});
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
    
  }
  }
