import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsFillPenFill } from "react-icons/bs";


export default function Nav() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex justify-between  items-center  py-10 bg-blue-500 ">
      <Link  href="/" title="">
        <div className="flex content-center justify-around w-30  text-xl border-4
         border-black  font-medium rounded-sm  bg-white cursor-pointer font-large gap-2 p-1 m-1">
          <BsFillPenFill className=""/>  
          <p>Poet</p>
        </div>
      </Link>
      <div className="flex items-center gap-10">
        {!user && (
          <Link href={"/auth/login"}>
            <a className="py-2 px-4 text-sm  text-black bg-white border-black border-4   rounded-lg font-medium ml-8">
              Join Now
            </a>
          </Link>
        )}
        {user && (
          <div className="flex items-center gap-6">
            <Link href="/post">
              <button className="font-small bg-blue-300 text-black py-2 px-4 border-4 
              rounded-full
               textx-sm">
                Post
              </button>
            </Link>
            <Link href="/dashboard">
              <img
                className="w-12 rounded-full border-white border-4 rounded-sm cursor-pointer m-3"
                src={user.photoURL}
              />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
