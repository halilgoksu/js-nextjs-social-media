
export default function Message({ children, avatar, username, description }) {
  return (
    <div className="bg-indigo-400 p-8 m-2 border-b-2 rounded-lg w-2/3 flex-col
     items-center justify-center text-center">
      <div className="flex items-center gap-2">
        <img src={avatar} className="w-10 rounded-full" alt="image" />
        <h2 className="text-indigo-900 ">{username}</h2>
      </div>
      <div className="py-4 bg-indigo-200 rounded-md">
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}
// dasboardimda bulunan mesaj(post) kartinin kalibi 
// her post bu kaliba uymak zorundadir 

