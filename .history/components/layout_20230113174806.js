import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="w-screen h-screen items-center justify-center text-center ">
      <Nav />
      <main className="flex  h-full w-full  bg-indigo-400 ">
        {children}
      </main>
   
  );
}
//navbar ve cocuklarrdan olusan kisim  
//Navbar kismi sabit, alt kisim duruma gore degisir 
// durum Navbarin uzerindeki butonlara tikladigimiz zaman degisir 


