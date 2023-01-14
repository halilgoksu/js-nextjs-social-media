import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
//can check if user sing in or not 

//login sayfasi 

export default function Login() {
  const route = useRouter();
  //useRouteri route adi ile kullancagiz 

  const [user, loading] = useAuthState(auth);
  //useAuthState 
  //default durumu auth olan , degismeye hazir bir user elamamaniz 
  //auth utils/fireabase dosyasindan gelir 

  //Sign in with google
  const googleProvider = new GoogleAuthProvider();
  //GoogleAuthProvider firebaseden gelen elemanimiz 
  //o elemanin kalibindan googleProvider denilen yeni bir aleman yarattik
  //sikistirdik de diyebilirsin 
  //sex is everywhere yani :) 

  const GoogleLogin = async () => {
    //butona tikladiginda buraya gelip calistirir
    try {
      const result = await signInWithPopup(auth, googleProvider);
      route.push("/");
      //eger yukleme basarili olursa anasayfaya yonlendir 
    } catch (error) {
      console.log(error);
    }
  };
  // Firebase Authentication library's signInWithPopup method to sign 
  // the user in with their Google account, and then redirecting them 
  // to the homepage ("/") using the route.push method. The auth variable 
  // is likely a reference to the Firebase Authentication instance, 
  

  useEffect(() => {
    if (user) {
      route.push("/");
    } else {
      //console.log("login");
    }
  }, [user]);
  //user her degistiginde anasayfaya git 


  return (
  <container className="flex  flex-col justify-center items-center w-full h-fit py-8 border-2 shadow-lg">
    <div  className="w-2/3 max-w-lg  p-2 flex flex-col items-center justify-center text-center 
        border-2 ">
    <h2 className="text-md font-medium">Join Today</h2>
      <div className="py-4 m-1">
        <h3 className="py-4 text-sm">Sign in with one of the providers</h3>
        <button
          onClick={GoogleLogin}
          className="text-white bg-gray-700 w-fit font-medium rounded-lg flex align-middle p-4 gap-2
          text-center text-md"
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
