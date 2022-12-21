
export default function Message({ children, avatar, username, description }) {
  return (
    <div className="bg-blue-00 p-8 m-2 border-b-2 rounded-lg ">
      <div className="flex items-center gap-2">
        <img src={avatar} className="w-10 rounded-full" alt="image" />
        <h2>{username}</h2>
      </div>
      <div className="py-4 ">
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}
