import Head from "next/head";
import Message from "../components/message";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Link from "next/link";

export default function Home() {
  //Create a state with all the posts
  const [allPosts, setAllPosts] = useState([]);

  const getPosts = async () => {
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAllPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsubscribe;
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Head>
        <title>Posti</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="my-12 text-lg font-medium flex flex-col w-screen justify-center text-center items-center overflow-scroll">
        {allPosts.map((post) => (
          <Message key={post.id} {...post}>
            <Link href={{ pathname: `/${post.id}`, query: { ...post } }}>
              <button className="text-purple-900 border-b-2 ">
                {post.comments?.length > 0 ? post.comments?.length : 0} comments
              </button>
            </Link>
          </Message>
        ))}
      </div>
      <div className='flex  justify-center items-center text-center mt-3 text-gray-900 text-xs w-fit '>
         Created by <a className='cursor-pointer border-1 rounded-lg p-1 bg-white ' title='Go' href="https://www.halilgoksu.com">©Goksu</a>
      </div>

      {/* 
       // anasyafadaki mesagglerin altinda comments componanenti
       // tikladiginda baska bir sayfaya avar
       // sayfada yeni comment yapmak icin input alani 
       // mesajin kendisi ve kimin yazdigi 
       // commentin kime ait oldugu bulunur  
      */}
    </div>
  );
}
