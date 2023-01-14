import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="w-screen h-screen items-center justify-center text-center ">
      <Nav />
      <main className="flex  h-full w-f  bg-indigo-400 ">
        {children}
      </main>
  
    </div>
  );
}
//navbar ve cocuklarrdan olusan kisim  
//Navbar kismi sabit, alt kisim duruma gore degisir 
// durum Navbarin uzerindeki butonlara tikladigimiz zaman degisir 


