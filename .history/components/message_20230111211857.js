
export default function Message({ children, avatar, username, description }) {
  return (
    <div className="bg-purple-300 p-8 m-2 border-b-2 border-white rounded-lg  flex-col
     items-center justify-center text-center ">
      <div className="flex items-center gap-2">
        <img src={avatar} className="w-10 rounded-full" alt="image" />
        <h2 className="text-purple-900 ">{username}</h2>
      </div>
      <div className="py-4 bg-purple-700 rounded-md w-1/2">
        <p className="text-white text-sm flex w-3 over">{description}</p>
      </div>
      {children}
    </div>
  );
}
// dasboardimda bulunan mesaj(post) kartinin kalibi 
// her post bu kaliba uymak zorundadir 

