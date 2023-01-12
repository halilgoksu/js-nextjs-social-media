
export default function Message({ children, avatar, username, description }) {
  console.log(description)
  return (
    <div className="bg-indigo-00  p-6 m-2 border-b-2 border-white rounded-lg w-2/3 ">
      <div className="flex items-center gap-2 ">
        <img src={avatar} className="w-10 rounded-full" alt="image" />
        <h2 className="text-purple-900 text-lg">{username}</h2>
      </div>
      <div className="py-2 bg-purple-900 rounded-md flex items-center text-left ">
        <p className="text-purple-200 text-xs break-all py-2">{description}</p>
      </div>
      {children}
    </div>
  );
}
// dasboardimda bulunan mesaj(post) kartinin kalibi 
// her post bu kaliba uymak zorundadir 

