import React from 'react'
import {auth} from "../utils/firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES} from '../utils/constants';
import { FaSearch } from "react-icons/fa";
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {


  const dispatch=useDispatch();
  const navigate=useNavigate();

  const user=useSelector(store=>store.user);
  //console.log(user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    const handleSignOut= ()=>{
      signOut(auth).then(() => {
        // Sign-out successful.
 
      }).catch((error) => {
        // An error happened.
        navigate("/error");
      });
    }

    
    useEffect(()=>{

      const unsubscribe =onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid, email , displayName , photoURL} = user;
          dispatch(addUser({uid:uid, email:email ,displayName:displayName , photoURL:photoURL}));
          navigate("/browse");
         
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
        }
      });

      //Unsubscribe when the component is unmount
      return () => unsubscribe();

    },[]);

    const handleGptSearchClick = ()=>{
      dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (e) => {
      dispatch(changeLanguage(e.target.value));
    };

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>

        <img className="w-44" src={LOGO} alt="logo"/>

        { user && (<div className='flex p-2'>

          {showGptSearch && (
            <select
              className="p-2 m-2 bg-transparent text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier} className='bg-black text-white'>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
              <button className=' px-4 mx-4 my-2 bg-white text-black rounded-sm flex items-center' onClick={handleGptSearchClick} 
              >{!showGptSearch && <FaSearch className='m-2'/>}
              {showGptSearch?"HomePage":"GPT Search"}
              </button>

              <img
              className='w-12 h-12 rounded-xl my-2'
              alt="userIcon" 
              src={user.photoURL}
              />
              <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
            </div>)
        }

    </div>
  )
}

export default Header