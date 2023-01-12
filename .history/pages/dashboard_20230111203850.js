import { auth, db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {collection,deleteDoc, doc,onSnapshot, query,where,} from "firebase/firestore";
import Message from "../components/message";
import { BsTrash2Fill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import Link from "next/link";
//kendi logomuza tikladigmiz zaman geldigmiz dasboardimiz 


export default function Dashboard() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    if (loading) return;
    if (!user) return route.push("/auth/login");
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, where("user", "==", user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsubscribe;
  };

  //Delete Post
  const deletePost = async (id) => {
    const docRef = doc(db, "posts", id);
    await deleteDoc(docRef);
  };

  //Get users data
  useEffect(() => {
    getData();
  }, [user, loading]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-between  text-center text-purple-900 p-2">
      <h1 className=" border-b-purple-900">Your posts</h1>
      <div className="w-full flex flex-col items-center justify-between  text-center">
        {posts.map((post) => {
          return (
            <Message {...post} key={post.id}>
              <div className="flex  flex-row items-center justify-around  text-center mt-1">
                <button
                  onClick={() => deletePost(post.id)}
                  className="text-indigo-900flex items-center justify-center gap-2 py-2 text-sm"
                >
                  <BsTrash2Fill className="text-2xl" /> Delete
                </button>
                <Link href={{ pathname: "/post", query: post }}>
                  <button className="text-teal-600 flex items-center justify-center gap-2 py-2 text-sm">
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
  );
}
//kenid logomuza tikladigmiz zaman yondlendirme sonucu 
//kendi postlarimizin hepsini gorebilecegimiz sayfayi temsil eder 
//kendi dashboardumuz yani 
