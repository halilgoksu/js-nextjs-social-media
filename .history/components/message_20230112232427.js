
export default function Message({ children, avatar, username, description }) {
  //avatar:profil fotomuz //username : kullanici adi 
  console.log(children)
  return (
    <div className="bg-fuchsia-300 p-6 m-2 border-b-2 border-white rounded-lg w-2/3 ">
     <div className="border-2 rounded-lg p-3 ">
       <div className="flex items-center gap-2 ">
        <img src={avatar} className="w-10 rounded-full" alt="image" />
        <h2 className="text-purple-900 text-lg username">{username}</h2>
      </div>
      <div className="p-2 bg-purple-800 rounded-md flex items-center text-left ">
        <p className="text-purple-200 text-xs break-all py-2 description">{description}</p>
      </div>
      {children}
     </div>
    </div>
  );
}
// dasboardimda bulunan mesaj(post) kartinin kalibi 
// her post bu kaliba uymak zorundadir
// dasboard ve index.js tarafindan impport edilir 


