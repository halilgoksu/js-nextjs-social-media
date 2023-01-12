import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsFillPenFill } from "react-icons/bs";
import Image from "next/image";


export default function Nav() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex justify-between  items-center  py-10 bg-blue-500  ">
      <Link  href="/" title="asdfasdf">
        <a className="bg-white btn btn-blue-500 hover:bg-blue-100 first-letter 
             text-black font-bold py-2 px-4 rounded m-2">
          <BsFillPenFill className=""/>  
        </a>
      </Link>
      <div className="flex items-center gap-10">
        {!user && (
          <Link href={"/auth/login"}>
            <a className="bg-white btn btn-blue-500 hover:bg-blue-200 first-letter 
             text-black font-bold py-2 px-4 rounded m-2">
              Join Now
            </a>
    
          </Link>
        )}
        {user && (
          <div className="flex items-center gap-2 bg-blue-200  btn btn-blue-500 first-letter 
          text-black font-bold py-2 px-4 rounded">

            <Link href="/post">
            <button className="bg-white btn btn-blue-500 hover:bg-blue-400 first-letter 
             text-black font-bold py-2 px-4 rounded text-sm">
             Post
            </button>
            </Link>

            <Link href="/dashboard">
              <Image alt="img"
               className="bg-white btn btn-blue-500 hover:bg-blue-400 first-letter 
               text-black h-10  p-1  px-4 rounded m-2 cursor-pointer"
                src={user.photoURL}
              />
            </Link>
          </div>
          
        )}
      </div>
    </nav>
  );
}
