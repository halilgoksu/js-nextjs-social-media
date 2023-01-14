import Nav from "./Nav";
import CreatedBy from './CreatedBy'

export default function Layout({ children }) {
  return (
    <div className="w-screen h-screen items-center justify-center text-center  bg-indigo-400 ">
      <Nav />
      <main className="flex h-fit w- flex-col">
        {children}
        <CreatedBy />
      </main>
  
    </div>
  );
}
//navbar ve cocuklarrdan olusan kisim  
//Navbar kismi sabit, alt kisim duruma gore degisir 
// durum Navbarin uzerindeki butonlara tikladigimiz zaman degisir 


