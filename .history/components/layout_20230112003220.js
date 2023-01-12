import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="w-full h-screen bg-indigo-200 items-center justify-center text-center">
      <Nav/>
      <main>{children}</main>
      <div className='flex justify-center items-center text-center  text-gray-900 text-xs bg-slate-400 w-full
        inline'>
         Created by <a className='cursor-pointer rounded-lg p-1 bg- '
          title='Go' href="https://www.halilgoksu.com">©Goksu</a>
      </div>
    </div>
  );
}
//navbar ve cocuklarrdan olusan kisim  
//Navbar kismi sabit, alt kisim duruma gore degisir 

