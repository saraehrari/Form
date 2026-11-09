import { useState } from "react";

export default  function Form() {

    const [form , setForm] = useState({
        name1:"",
        email:"",
        passwoed:"",
        confirmPassword:"",
    });

    return(
      <div>
        <h1>Welcom in Rigester Form</h1>
        <form>
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

              <label>Password:</label>
            <input type="password"
            value={form.passwoed}
            onChange={(e)=> setForm(e.target.value)}
            />

              <label>Confirm Password:</label>
            <input type="password"
            value={form.confirmPassword}
            onChange={(e)=> setForm(e.target.value)}
            />

            <button>Rigester</button>
        </form>

        </div>
    )
}