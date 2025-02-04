import { FaBars } from "react-icons/fa6";
import amazon from "../Asset/amazon.png";
import favicon from "../Asset/favicon.png";
import { FaHome, FaFire } from "react-icons/fa";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => { 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); 
  const user = useSelector((store)=> store.user);

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,displayName,email} = user;
        dispatch(addUser({uid:uid, displayName:displayName, email:email}));
        
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
        }
    });

    return () => unsubscribe();

  },[]) ;

  const isShowsPage = location.pathname === "/shows";
  const isHomePage = location.pathname === "/browse";
  const isMoviesPage = location.pathname === "/movies";
  const isNewHotPage = location.pathname === "/movies";
  const isVdesiPage = location.pathname === "/vdesi";
  const isTrailerPage = location.pathname === "/tailer";


  return (
    <div className=" absolute z-20 top-0  flex items-center justify-between text-white bg-[#000000] bg-opacity-80 shadow-lg shadow-slate-900 px-10">
      <div className="flex items-center w-2/12 gap-2">
        <img className="w-[19%] h-[3%]" src={amazon} alt="Logo"/> <div className="text-2xl mb-2">|</div>
        <img className="w-[9%]" src={favicon} alt="MxPlayer-Logo"/>
        <div>  
          <span className="font-bold">MX</span>PLAYER
        </div>
      </div>

    { user && (  
      <>   
        <ul className="flex items-center justify-start font-bold w-6/12 text-white gap-10 ">
              <li><Link to="/browse"><FaHome className={`cursor-pointer hover:text-[#0079FF] ${
                isHomePage ? "text-[#0079FF]" : ""
              }`}/></Link></li>

              <li className={`cursor-pointer hover:text-[#0079FF] ${
                isShowsPage ? "text-[#0079FF]" : ""
              }`}><Link to="/shows">Shows</Link></li>

              <li className={`cursor-pointer hover:text-[#0079FF] ${
                isMoviesPage ? "text-[#0079FF]" : ""
              }`}><Link to="/movies">Movies</Link></li>

              <li className={`cursor-pointer hover:text-[#0079FF] ${
                isNewHotPage ? "text-[#0079FF]" : ""
              }`}><Link className="flex items-center" to="/newhot">New & Hot<span><FaFire className="text-[#F7630C]"/></span> </Link> </li>

              <li className={`cursor-pointer hover:text-[#0079FF] ${
                isVdesiPage ? "text-[#0079FF]" : ""
              }`}><Link to="/vdesi">MX VDesi</Link></li>

              <li className={`cursor-pointer hover:text-[#0079FF] ${
                isTrailerPage ? "text-[#0079FF]" : ""
              }`}><Link to="/tailer">Trailers</Link></li>
        </ul>

        <div className="flex items-center gap-6">
          <button className="font-bold cursor-pointer hover:text-[#0079FF]" onClick={handleSignOut}>Sign Out</button>
          <FaBars className="cursor-pointer hover:text-[#0079FF]"/>
        </div>
      </>
      )
    }    
    </div>
  )
}

export default Header;