import Nav from "./Nav";
import CreatedBy from './CreatedBy'

export default function Layout({ children }) {
  return (
    <div className="w-80 h-fit items-center justify-center text-center  bg-indigo-400 ">
      <Nav />
      <main className="flex h-full w-full flex-col border-2">
        {children}
        <CreatedBy />
      </main>
  
    </div>
  );
}
//navbar ve cocuklarrdan olusan kisim  
//Navbar kismi sabit, alt kisim duruma gore degisir 
// durum Navbarin uzerindeki butonlara tikladigimiz zaman degisir 


