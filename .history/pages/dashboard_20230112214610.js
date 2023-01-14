import { auth, db } from "../utils/firebase";
//auth sigout yapmak icinin kullancagiz 
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {collection, deleteDoc, doc, onSnapshot, query,where} from "firebase/firestore";
import Message from "../components/message";
import { BsTrash2Fill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import Link from "next/link";
//kendi logomuza tikladigmiz zaman geldigmiz dasboardimiz

export default function Dashboard() {
  const route = useRouter();
  //useRouter i route adi ile kullan 

  const [user, loading] = useAuthState(auth);
  //userin olup oladigina bakar 
  //user varsa loading false olur 

  const [posts, setPosts] = useState([]);
  //eger user yoksa postlari gosteme 


  const getData = async () => {
    if (loading) return;
    //eger user varsa bi sey yapma geri don 
    if (!user) return route.push("/auth/login");
    //user yoksa 
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, where("user", "==", user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsubscribe;
  };
  //eger user yoksa login sayfasina git 
  //user varsa firebase de bulunan postlari burda renderla 

  //Delete Post
  const deletePost = async (id) => {
    const docRef = doc(db, "posts", id);
    await deleteDoc(docRef);
  };

  //Get users data
  useEffect(() => {
    getData();
  }, [user, loading]);
   //her user ve loggin degistiginde Data() yi calistir 

  return (
    <container className="h-screen w-full  items-center ">
      <div className="h-full w-full flex flex-col items-center  text-center text-purple-900 p-2">
        <h1 className=" border-b-purple-900">Your posts</h1>
        <div className="w-full  flex flex-col items-center   text-center ">
          {posts.map((post) => {
            return (
              <Message {...post} key={post.id}>
                <div className="flex  flex-row items-center justify-center gap-3  text-center mt-1 ">
                  <button
                    onClick={() => deletePost(post.id)}
                    className="text-pink-700 flex items-center justify-center  py-2 text-sm "
                  >
                    <BsTrash2Fill className="text-2xl" /> Delete
                  </button>
                  <Link href={{ pathname: "/post", query: post }}>
                    <button className="text-teal-600 flex items-center justify-center  py-2 text-sm">
                      <AiFillEdit className="text-2xl" />
                      Edit
                    </button>
                  </Link>
                </div>
              </Message>
            );
          })}
        </div>
        <button
          className="font-medium text-white bg-gray-800 py-2 px-4 my-6"
          onClick={() => auth.signOut()}
        >
          Sign out
        </button>
      </div>
    </container>
  );
}
//kenid logomuza tikladigmiz zaman yondlendirme sonucu
//kendi postlarimizin hepsini gorebilecegimiz sayfayi temsil eder
//kendi dashboardumuz yani
