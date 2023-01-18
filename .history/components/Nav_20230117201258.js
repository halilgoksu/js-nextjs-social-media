import Link from "next/link";
import { MdPostAdd } from "react-icons/md";
import { GiAllSeeingEye } from "react-icons/gi";
import { IoIosLogIn } from "react-icons/io";

import { auth } from "../utils/firebase";
//user ile ilgili her bi sey yapmak istedigimizde
//userin kim olugunu anlamak icin bunu import et

import { useAuthState } from "react-firebase-hooks/auth";
//userin olup olamdigini kontroll eder

export default function Nav() {
  const [user, loading] = useAuthState(auth);
  //auth ile login yapabilen bir state miz mevcut
  //eger user yuklenirse user false olur 
  return (
    <nav className="smnavbar flex  flex-col justify-center items-center  bg-indigo-900  text-white  py-2 w-full ">
      <div className="flex  gap-5">
        <Link href="/">
          <div
            className="cursor-pointer flex flex-col items-center text-center p-1 bg-purple-800 m-2
          rounded-lg shadow-md">
            <GiAllSeeingEye className="text-4xl" />
          </div>
        </Link>
        {/* NextJS in guzelligi Root ile ugrasmana gerek yok Link arasina tikladiginda nereye gideceksen 
       direk href in icine yaz o hallder */}
        <div className="flex empowering items-center  text-center justify-center">
          <p className="text-xs font-serif italic font-thin text-purple-400 text-center">
            Empowering voices, fostering understanding.
          </p>
        </div>

        <div className="flex items-center shadow-sm">
          {!user && (
            <Link href={"/auth/login"}>
              <div
                className="cursor-pointer flex flex-col items-center text-center p-1 bg-purple-900 m-2
              rounded-lg ">
                <IoIosLogIn className="text-4xl" />
              </div>
            </Link>
          )}
          {/* //eger user yuklemedi ise sadece login iconunu renderla  
             //icon a tiklarsan /auth/login componentine gidersin 
          */}

          {user && (
            <div
              className="post-logo cursor-pointer flex flex-row items-center text-center p-1 bg-purple-900 m-2
              rounded-lg w-40 "
            >
              <Link href="/post">
                <div className="cursor-pointer flex flex-col items-center text-center h-full w-full ">
                  <MdPostAdd className="text-4xl text-purple-300 border-2 border-purple-700 p-1 " />
                </div>
              </Link>
              <Link href="/dashboard">
                <div className="cursor-pointer flex flex-col items-center text-center h-full w-full">
                  <img
                    className="h-9 w-9 rounded-sm border-2 p-1 border-purple-700"
                    src={user.photoURL}
                  />
                </div>
              </Link>
            </div>
          )}
          {/* //eger user varsa userin logosunu ve ismini ve post comp render eder
          //post yeni post yapar
          //userin usten tiklayinca da dashboard a gider  */}
        </div>
      </div>
      <div className="empowerdown hidden items-center  text-center justify-center">
      <p className="text-xs font-serif italic font-thin text-purple-400 text-center">
          Empowering voices, fostering understanding.
        </p>
      </div>
      {/* //eger ekran kuculurese gostercegim yazi  */}
    </nav>
  );
}
