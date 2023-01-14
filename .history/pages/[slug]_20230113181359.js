import Message from "../components/message";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth, db } from "../utils/firebase";
import { toast } from "react-toastify";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  updateDoc,
} from "firebase/firestore";

//commetlere tiklaridgimizda geldigimiz sayfa
//commentine tikladigimzi mesaji alip buraya getirir ki insalar comment yapsin
//diger mesajlar ile alakasi yok

export default function Details() {
  const router = useRouter();
  const routeData = router.query;
  const [message, setMessage] = useState("");
  const [allMessage, setAllMessages] = useState([]);

  //Submit a message
  const submitMessage = async () => {
    //Check if the user is logged
    if (!auth.currentUser) return router.push("/auth/login");

    if (!message) {
      console.log(message);
      toast.error("Don't leave an empty message 😅", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      return;
    }
    const docRef = doc(db, "posts", routeData.id);
    //su anki postu al ve postun icine bir de comments ekle
    //yeni bir array olusturur ve asagidaki objeyi arrayin icine atar
    await updateDoc(docRef, {
      comments: arrayUnion({
        message,
        avatar: auth.currentUser.photoURL,
        userName: auth.currentUser.displayName,
        time: Timestamp.now(),
      }),
    });
    setMessage("");
  };
  //arrayUnion firebaseden gelir yeni bir tane array olusturur

  //Get Comments
  const getComments = async () => {
    const docRef = doc(db, "posts", routeData.id);
    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      setAllMessages(snapshot.data().comments);
    });
    return unsubscribe;
  };
  //sanpshot sayfayi f5 yapmak  gorevini caktiramdan yapar
  //aninda update icin kullanilir

  useEffect(() => {
    if (!router.isReady) return;
    getComments();
  }, [router.isReady]);
  //her router data hazir oldugunda calisir

  return (
    <container className="flex  flex-col justify-center items-center w-full h-fit p-4 border-2">
      <div
        className="w-2/3 max-w-lg  p-2 flex flex-col items-center justify-center text-center 
        border-2 gap-3"
      >
        <Message {...routeData}></Message>
        <div className="w-full border-2 border-yellow-500 p-2">
          <div className="flex gap-1 ">
            <input
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              value={message}
              placeholder="Add comment 😀"
              className=" w-full p-2 text-white text-sm  btn btn-blue-500 bg-gray-800 hover:bg-gray-900 first-letter 
             font-bold py-2 px-4 rounded"
            />
            <button
              onClick={submitMessage}
              className="btn  first-letter  font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
          <div className="py-6">
            <h2 className="font-bold ">Comments</h2>
            <hr />
            {allMessage?.map((message) => (
              <div
                className="bg-white p-4 my-4 border-2 rounded-lg"
                key={message.time}
              >
                <div className="flex items-center gap-2 mb-4 bg-purple-300 ">
                  <img
                    className="w-10 rounded-full"
                    src={message.avatar}
                    alt=""
                  />
                  <h2>{message.userName}</h2>
                </div>
                <h2>{message.message}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </container>
  );
}
