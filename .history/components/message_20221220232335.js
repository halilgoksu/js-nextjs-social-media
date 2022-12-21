import Image from "next/image";

export default function Message({ children, avatar, username, description }) {
  return (
    <div className="bg-blue-100 p-8 border-b-2 rounded-lg ">
      <div className="flex items-center gap-2">
        <Image src={avatar} className="w-10 rounded-full"  />
        <h2>{username}</h2>
      </div>
      <div className="py-4">
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}
