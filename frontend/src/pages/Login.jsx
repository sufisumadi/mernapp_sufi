import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'

function Login() {
    const [formData, setFormData] = useState({
        email:'',
        password:'',
    })

    const { email, password } = formData

    const onChange = (e) => {
        setFormData((prevState)=>({ 
        ...prevState,
        [e.target.name]: e.target.value,
        }))
    }

   const onSubmit = (e) =>{
    e.preventDefault()
   } 

  return(
  <> 
  <section classname="healing">
    <h1>
        <FaSignInAlt /> Login
    </h1>
    <p>Login and start setting goals</p>
  </section>

  <section classname="form">
    <form on onSubmit={onSubmit}>
       
        <div classname="form-group">
        <input 
            type="email"
            classname="form-control"
            id="email"
            name="email"
            value={email} 
            placeholder= 'Enter your email' 
            onChange={onChange}
            />
        </div>
        <div classname="form-group">
        <input 
            type="password"
            classname="form-control"
            id="password"
            name="password"
            value={password} 
            placeholder= 'Enter password' 
            onChange={onChange}
         />
         </div>
         
        <div classname='form-group'>
            <button type='submit' classname='btn btn-block'>
                Submit
                </button>
        </div>
    </form>
  </section>
  </>
  )
}

export default Login