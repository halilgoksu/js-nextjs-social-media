
export default function Message({ children, avatar, username, description }) {
  //avatar:profil fotomuz //username : kullanici adi 
  return (
    <div className="bg-fuchsia-300  border-b-2 border-white rounded-lg w-full h">
      <div className="border-2 rounded-lg p-3 ">
        <div className="flex items-center gap-2 ">
         <img src={avatar} className="w-10 rounded-full" alt="image" />
         <h2 className="text-purple-900 text-lg username">{username}</h2>
        </div>

        <div className="p-2 bg-purple-800 rounded-md flex items-center text-left ">
          <p className="text-purple-200 text-xs break-all py-2 description">{description}</p>
        </div>
        {children}
        {/* //render edilcek her mesaj kartini ifade eder propdan gelir 
        //ne kadar mesaj o kadar children  */}
     </div>
    </div>
  );
}
// dasboardimda bulunan mesaj(post) kartinin kalibi 
// her post bu kaliba uymak zorundadir
// dasboard ve index.js tarafindan impport edilir 
//kalibin icine ne girecekse propslar araciligi ile gelir 


