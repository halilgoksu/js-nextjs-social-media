
export default function Message({ children, avatar, username, description }) {
  console.log(description)
  return (
    <div className="bg-purple-300 p-8 m-2 border-b-2 border-white rounded-lg flex flex-col
     items-center justify-center text-center max">
      <div className="flex items-center gap-2 ">
        <img src={avatar} className="w-10 rounded-full" alt="image" />
        <h2 className="text-purple-900 ">{username}</h2>
      </div>
      <div className=" bg-purple-200 rounded-md flex items-center text-left max-w-xs  min-w-full ">
        <p className="text-white text-sm break-all">{description}</p>
      </div>
      {children}
    </div>
  );
}
// dasboardimda bulunan mesaj(post) kartinin kalibi 
// her post bu kaliba uymak zorundadir 

