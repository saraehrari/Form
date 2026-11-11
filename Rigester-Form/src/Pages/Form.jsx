import { useState } from "react";



const [form, setForm] = useState({
  name1:"",
  lastname:"",
  email:"",
  password:"",
  confirmpassword:"",
});
 function Validation(){
  const NewError=({})


if (!form.name1.trim()){
 NewError.name1="Name is Requried!"
}

if(!form.lastname.trim()){
  NewError.lastname="Last Name is Requuried!"
}

if(!form.password.trim()){
  NewError.password="Password is Requried!"
}
};