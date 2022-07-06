import React from 'react'
import Nav from "../components/Nav"
import img from "../images/log.png"
import { Link} from 'react-router-dom'
import "../App.css"
import { useState } from 'react'
import { useNavigate} from 'react-router'
import axios from 'axios'



const Signup= () => {
  const base = "http://localhost:4355"
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setpassword]=useState("");
    const navigate=useNavigate();

    function signup(){
      let data = {
        name:name,
        email: email,
        password: password
    }

    axios.post(`${base}/user/login`, data).then(res => {
           
if(res.data.message="valid"){
  navigate("/")

}
        })
        .catch(err => {
            return err;
        })
    }
  return (
    <div>
    <Nav></Nav>
    <div class='container'>

      <div class="row loginb gx-4">

<div class=' col-sm-12 col-xl-6'>
<img src={img} class="img-fluid" alt="" />
</div>

<div class="col-xl-6  col-sm-12">

<h2 class='lead'>Signup To continue</h2>


<div className='row'>
<form action="" className=''>   
<div class="mb-3">
                            <label for="last-name" class="col-form-label">
                          user name
                        </label>

                            <input value={name} onChange={(e)=>{
                                setName(e.target.value);
                            }} type="text" class="form-control" id=" last-name"/>

                        </div>         
                        <div class="mb-3">
                            <label for="last-name" class="col-form-label">
                           Email
                        </label>

                            <input value={email} onChange={(e)=>{
                                setEmail(e.target.value);
                            }} type="text" class="form-control" id=" last-name"/>

                        </div>
                        <div class="mb-3" className=''>
                            <label for="last-name" class="col-form-label">
                           Password
                        </label>

                            <input onChange={(e)=>{setpassword (e.target.value)}} value={password} type="password" class="form-control" id=" last-name"/>

                        </div>
                    </form>

                    <div class="enW">
                    <button type="button" onClick={(e)=>{e.preventDefault();signup()}} class="btn col-12  btn-primary">Login</button>
                    </div>
<div class="d-flex flex-row  justify-content-start py-4">


<Link to="/signup">

  <div class="p-2">
    <a href="">Have no account?sign_up</a>
  </div>
  </Link>

</div>
                  
</div>

</div>

      </div>


        </div>

   
    </div>
  )
}

export default Signup;