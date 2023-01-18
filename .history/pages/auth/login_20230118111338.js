import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";


export default function Login() {
  const route = useRouter();

  const [user, loading] = useAuthState(auth);


  const googleProvider = new GoogleAuthProvider();
 

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      route.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      route.push("/");
    } else {
    }
  }, [user]);
  //user her degistiginde anasayfaya git 


  return (
  <container className="flex  flex-col justify-center items-center w-full h-fit py-8  shadow-lg">
    <div  className="w-2/3 max-w-lg  p-2 flex flex-col items-center justify-center text-center">
    <h2 className="text-md font-medium">Join Today</h2>
      <div className="py-4 m-1">
        <h3 className="py-4 text-sm">Sign in with one of the providers</h3>
        <button
          onClick={GoogleLogin}
          className="text-white bg-gray-700 w-fit font-medium rounded-lg flex align-middle p-4 gap-2
          text-center text-sm"
        >
          <FcGoogle className="text-2xl" />
          Sign in with Google
        </button>
        {/* //uzerine tikladiginda GoogleLogin fonk calistir  */}
      </div>
    </div>
    </container>
  );
}
