import { useState } from "react";

export default  function Form() {

    const [form , setForm] = useState({
        name:"",
        email:"",
        passwoed:"",
        confirmPassword:"",
    });



    return(
      <div>
        <h1>Welcom in Rigester Form</h1>
        <Form>
            <label>Name:</label>
            <input type="text"
            value={form}
            onChange={(e)=> setForm(e.target.value)}
            />

              <label>Email:</label>
            <input type="email"
            value={form}
            onChange={(e)=> setForm(e.target.value)}
            />

              <label>Password:</label>
            <input type="password"
            value={form}
            onChange={(e)=> setForm(e.target.value)}
            />

              <label>Confirm Password:</label>
            <input type="password"
            value={form}
            onChange={(e)=> setForm(e.target.value)}
            />

            <button>Rigester</button>
        </Form>

        </div>
    )
}