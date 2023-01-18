import Head from "next/head";
import Message from "../components/message";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Link from "next/link";
//Anasayfamizdir
//butun postlar render edilir 


export default function Home() {
  //Create a state with all the posts
  const [allPosts, setAllPosts] = useState([]);

  const getPosts = async () => {
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    //postlarini silarmasi en son post edilen en en ustte durmasini provide eder
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAllPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    //onSnapshot datamizin aninda update olamasini saglar 
    //getDoc  in farkli bir sekli de denilebilir 
    return unsubscribe;
  };

  useEffect(() => {
    getPosts();
  }, []);


  return (
    <container className="flex  flex-col justify-center items-center w-full h-full  bg-indigo-400 ">
    <Head>
        <title>Posti</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="" />
      </Head>

      <div  className="indexhome w-2/3 max-w-lg  p-3 flex flex-col items-center text-center  gap-4 h-full ">
        {allPosts.map((post) => (
          <Message key={post.id} {...post}>
            <Link href={{ pathname: `/${post.id}`, query: { ...post } }}>
              <button className="text-purple-900 border-b-2 comments ">
                {post.comments?.length > 0 ? post.comments?.length : 0} comments
              </button>
            </Link>
          </Message>
        ))}
      </div>
    </container>
  );
}

