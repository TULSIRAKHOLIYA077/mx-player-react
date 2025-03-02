import { useState } from "react";
import Header from "./Header";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { checkValidData } from "../utils/validate";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignUp, setSignUp] = useState(false);
  const [name, setName] = useState(null); 
  const [email, setEmail] = useState(null); 
  const [password, setPassword] = useState(null); 
  const [errorMessage,setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  
  const handleButtonClick = () => {
    const message = checkValidData(email,password);
    setErrorMessage(message);
    if(message) return;
    if(isSignUp){
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name
        }).then(() => {
          // Profile updated!
          const {uid, email, displayName} = auth.currentUser;
          dispatch(addUser({uid: uid, email: email, displayName: displayName}));
        }).catch((error) => {
          // An error occurred
          setErrorMessage(error.message)
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" +errorMessage);
        // ..
      });
    }else{
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" +errorMessage);
      });
    }
  }

  const toggleSignUpForm = () =>{
    setSignUp(!isSignUp);
  }
  return (
    <div className="bg-[#010101] w-[100%] h-[100vh] overflow-hidden text-white">
      <Header/>
      <div className="p-16 w-[100%] h-[100vh] flex justify-center items-center">
        <div className="flex flex-col items-center w-[100%] sm:w-[60%] md:w[70%] lg:w-[50%] m-auto border-2 rounded-xl border-zinc-500 p-1 sm:p-2 md:p-4">
          <h1 className="font-bold text-xl sm:text-3xl text-center">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h1>
          
          <p className={`text-zinc-500 sm:text-lg pt-2 sm:p-3 font-semibold text-center ${
                    isSignUp ? "hidden sm:inline" : "inline"
                  }`}>Premium OTT service in India, where you can watch original series, TV & Web shows, movies, and trending shows for free.</p>

          <form onSubmit={(e)=> e.preventDefault()} className="w-[70%] m-5 sm:m-3 flex flex-col items-center " action="">
            {isSignUp && <input 
            className="bg-transparent border rounded-md w-full p-1 sm:p-2 lg:p-3" value={name}  
            type="text" 
            placeholder="Name" 
            onChange={(e) => setName(e.target.value)}
            required
            />                    
            }
            <input className="bg-transparent border rounded-md w-full p-1 sm:p-2 lg:p-3 mt-7" value={email} type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>

            <input className="bg-transparent border rounded-md w-full p-1 sm:p-2 lg:p-3 mt-7" value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

            <p className="text-white font-bold sm:text-lg mt-5">
              {errorMessage}
            </p>

            <button className="bg-[#0079FF] rounded-md w-full p-1 sm:p-2 lg:p-3 mt-5" onClick={handleButtonClick}>
            {isSignUp ? "Sign Up" : "Sign In"}
            </button>

            <p className="mt-3 lg:mt-7 cursor-pointer" onClick={toggleSignUpForm}>
              {isSignUp ?  (
                <>Already registered? <strong>Sign in now...</strong></>
              ) : (
                <>New to MXPLAYER? <strong>Sign up now.</strong></>
              )}
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;