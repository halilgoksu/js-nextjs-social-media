import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsFillPenFill } from "react-icons/bs";

export default function Nav() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex justify-between  items-center  py-10 bg-blue-900 w-1/2 ">
      <Link href="/" title="asdfasdf">
        <div className="flex items-center justify-center w-20px text-center p-4 bg-orange-300 m-2">
        <BsFillPenFill className="" />
        </div>
      </Link>
    
      <div className="flex items-center">
        {!user && (
          <Link href={"/auth/login"}>
            <a
              className="bg-white btn btn-blue-500 hover:bg-blue-200 first-letter 
             text-black font-bold py-2 px-4 rounded m-2"
            >
              Join Now
            </a>
          </Link>
        )}
        {user && (
          <div
            className="flex items-center gap-2 bg-blue-200  btn btn-blue-500 first-letter 
          text-black font-bold py-2 px-4 border-2 border-red-900"
          >
            <Link href="/post">
              <button
                className="bg-white btn btn-blue-500 hover:bg-blue-400 first-letter 
             text-black font-bold py-2 px-4 rounded text-sm"
              >
                InsightStream
              </button>
            </Link>

            <Link href="/dashboard">
              <img
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
