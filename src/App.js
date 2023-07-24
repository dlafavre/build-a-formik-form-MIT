import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      alert("Login Successful");
    },
    validate: (values) =>{
      let errors = {};
      if(!values.email) errors.email = 'Field Required';
      if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) errors.email = 'Invalid email address';
      if(!values.password) errors.password = 'Field Required';
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input type="text" name="email" id="emailField" 
        onChange={formik.handleChange} 
        value={formik.values.email}/>
        {formik.errors.email ? (
          <div id="emailError" style={{color:'red'}}>{formik.errors.email}
          </div>
        ) : null}
        <div>Password:</div>
        <input type="text" name="password" id="pswField" 
        onChange={formik.handleChange} 
        value={formik.values.password}/><br/>
        {formik.errors.password ? (
          <div style={{color:'red'}}>{formik.errors.password}
          </div>
        ) : null}
        <button type="submit" id="submitButton">Submit</button>
      </form>
    </div>
  );
}

export default App;
