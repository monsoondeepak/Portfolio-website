import AnimationWrapper from "../common/page-animation";
import InputBox from "../components/inputcomponent";
import googleIcon from "../imgs/google.png";
import {Link, Navigate} from 'react-router-dom';
import {Toaster, toast} from "react-hot-toast";
import axios from "axios";
import { storeInSession } from "../common/session";
import { UserContext } from "../App";
import { useContext} from "react";


const UserAuthForm = ({type}) =>{
  let {userAuth: {access_token}, setUserAuth } = useContext(UserContext)
  console.log(access_token)
 
  const  userAuthThroughServer = (serverRoute, formData) =>{
      axios.post(import.meta.env.VITE_SERVER_DOMAIN + serverRoute, formData)
      .then(({data})=>{
        storeInSession("user", JSON.stringify(data))
       setUserAuth(data)
        
      })
      .catch(({response})=>{
        toast.error(response.data.error)
      })
      
  }
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    let serverRoute = type == "sign-in" ? "/signin" : '/signup';
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password
    //formData 
    let form = new FormData(formElement);
    let formData = {};
    for(let [key,value] of form.entries()){
      formData[key] = value;
    }
    // form validation
    let {fullname,email,password} = formData;
   if(fullname){
    if (fullname.length < 3) {
      return toast.error
        ("Fullname must be at least 3 letters long");
    }
   }
    if (!email.length) {
      return toast.error("Enter Fullname & email");
    }
    if (!emailRegex.test(email)) {
      return toast.error("Email is invalid");
    }
    
    if (!passwordRegex.test(password)) {
      return toast.error
        (
            "Password should be 6 to 20 characters long with a numeric, 1 lowercase and 1 uppercase letters",
        );
    }
    userAuthThroughServer(serverRoute, formData)
  }
  return (
    access_token ? 
    <Navigate to="/" /> 
    :
   <AnimationWrapper keyValue={type}>
    <section className="h-cover flex items-center justify-center mt-8">
      <Toaster/>
      <form id="formElement" className="w-[80%] max-w-[400px] text-base">
        <h1 className="text-4xl font-gelasio capitalize text-center mb-2">
          {type == "sign-in" ? "Welcome back please log in" : "Join us today"}
        </h1>

        {
          type != "sign-in" ?
          <InputBox 
            name="fullname"
            type="text"
            placeholder="Full Name"
            icon="fi-rr-user"
          />
          
          : ""
          }
          <InputBox 
            name="email"
            type="email"
            placeholder="Email"
            icon="fi-rr-envelope"
          />
          <InputBox 
            name="password"
            type="password"
            placeholder="Password"
            icon="fi-rr-key"
          />

          <button className="btn-dark center mt-7" type="submit" onClick={handleSubmit}>
              {type.replace("-"," ")}
          </button>
          <div className="relative w-full flex items-center gap-2 my-10 uppercase font-bold">
            <hr className="w-1/2 h-[0.1px] border-black bg-[#b7b7c73d]" />
            <p>or</p>
            <hr className="w-1/2 h-[0.1px] border-black bg-[#b7b7c73d]"/>

          </div>
          <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center">
            <img src={googleIcon} className="w-5"alt="" />
            Continue With Google
          </button>
          {
            type == "sign-in" ? 
            <p className="mt-6 text-dark-grey text-xl text-center">
              Don't have an account ?
              <Link to="/signup" className="underline text-xl ml-1">
              Join us today
              </Link>
            </p>
            :
            <p className="mt-6 text-dark-grey text-xl text-center">
              Already have an account ?
              <Link to="/signin" className="underline text-xl ml-1">
              Sign in here.
              </Link>
            </p>
          }
      </form>

    </section>
    </AnimationWrapper>
  )
}

export default UserAuthForm;