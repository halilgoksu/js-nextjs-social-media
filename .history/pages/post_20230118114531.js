import { auth, db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Router, { useRouter } from "next/router";
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
  const [post, setPost] = useState({ description: "" });

  const [user, loading] = useAuthState(auth);
  const route = useRouter();
  const routeData = route.query;

  //Submit Post
  const submitPost = async (e) => {
    e.preventDefault();
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
    <div className=" flex  flex-col justify-center items-center w-full h-fit p-4 ">
      <form
        onSubmit={submitPost}
        className="postcontainer w-2/3 max-w-lg  p-2  items-center justify-center text-center 
        border-2 rounded-lg border-purple-400"
      >
        <h1 className="text-sm text-purple-900 w-full text-center p-2 ">
          {post.hasOwnProperty("id") ? "Edit your post" : "Write post"}
        </h1>
        <textarea
          className="textareainput bg-purple-700  text-white rounded-lg  text-xs resize-none w-full h-40  
         border-2  border-purple-900 outline-none p-4 "
          maxLength="100"
          value={post.description}
          onChange={(e) => setPost({ ...post, description: e.target.value })}
        ></textarea>
        <p
          className={`font-medium text-xs ${
            post.description.length > 90 ? "text-red-600" : "text-purple-900"
          }`}
        >
          {post.description.length}/100
        </p>
        <button
          type="submit"
          className=" bg-purple-900 text-white font-medium p-2 my-2 rounded-lg text-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
