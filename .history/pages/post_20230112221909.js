import { auth, db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Router, { useRouter } from "next/router";
//componenetler arasi gecis yapar 
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

export default function Post() {
  //Form state
  const [post, setPost] = useState({ description: "" });
  //descriptionu her an degisecek olan bir  string olan post
  //post ayni zamnada textarea nin defaulet value s 

  const [user, loading] = useAuthState(auth);
  const route = useRouter();
  const routeData = route.query;

  //Submit Post
  const submitPost = async (e) => {
    e.preventDefault();
    //Run checks for description
    if (!post.description) {
      toast.error("Description Field empty 😅", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      return;
    }
    if (post.description.length > 300) {
      toast.error("Description too long 😅", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      return;
    }

    if (post?.hasOwnProperty("id")) {
      const docRef = doc(db, "posts", post.id);
      const updatedPost = { ...post, timestamp: serverTimestamp() };
      await updateDoc(docRef, updatedPost);
      return route.push("/");
    } else {
      //Make a new post
      const collectionRef = collection(db, "posts");
      await addDoc(collectionRef, {
        ...post,
        timestamp: serverTimestamp(),
        user: user.uid,
        avatar: user.photoURL,
        username: user.displayName,
      });
      setPost({ description: "" });
      toast.success("Post has been made 🚀", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      return route.push("/");
    }
  };

  //Check our user
  const checkUser = async () => {
    if (loading) return;
    if (!user) route.push("/auth/login");
    if (routeData.id) {
      setPost({ description: routeData.description, id: routeData.id });

    }
  };

  useEffect(() => {
    checkUser();
  }, [user, loading]);

  return (
    <container className="h-full w-full ">
      <div className="p-12 ">
        <form onSubmit={submitPost}>
          <h1 className="text-xl  text-purple-900">
            {post.hasOwnProperty("id") ? "Edit your post" : "Write post"}
            {/* //formun basligini duruma gore degistirmek icin kullanirz  */}
          </h1>
          <div className="py-2">
            <textarea
              maxLength="100"
              value={post.description}
              onChange={(e) =>
                setPost({ ...post, description: e.target.value })
              }
              className="bg-purple-800 h-28 w-full text-white rounded-lg p-2 text-sm"
            ></textarea>
            <p
              className={`font-medium text-sm ${
                post.description.length > 90
                  ? "text-red-600"
                  : "text-purple-900"
              }`}
            >
              {post.description.length}/100
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-900 text-white font-medium p-2 my-2 rounded-lg text-sm"
          >
            Submit
          </button>
        </form>
      </div>
    </container>
  );
}
