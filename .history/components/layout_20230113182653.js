import Nav from "./Nav";
import Cre

export default function Layout({ children }) {
  return (
    <div className="w-screen h-screen items-center justify-center text-center  bg-indigo-400 ">
      <Nav />
      <main className="flex h-fit w-full ">
        {children}
        <CreatedBy 
      </main>
  
    </div>
  );
}
//navbar ve cocuklarrdan olusan kisim  
//Navbar kismi sabit, alt kisim duruma gore degisir 
// durum Navbarin uzerindeki butonlara tikladigimiz zaman degisir 


