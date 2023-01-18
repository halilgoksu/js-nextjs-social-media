import Nav from "./Nav";
import CreatedBy from './CreatedBy'

export default function Layout({ children }) {
  return (
    <div className="container items-center justify-center text-center  bg-indigo-400 h-screen">
      <Nav />
      <main className=" flex h-full w-full flex-col   bg-indigo-400">
        {children}
        <CreatedBy />
      </main>
  
    </div>
  );
}


