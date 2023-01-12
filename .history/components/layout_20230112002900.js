import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="w-screen h-screen bg-indigo-200 items-center justify-center text-center">
      <Nav/>
      <main>{children}</main>
      <div className='flex m-2 justify-center items-center text-center mt-3 text-gray-900 text-xs bg-slate-400 w-full h-full '>
         Created by <a className='cursor-pointer rounded-lg p-1 bg- '
          title='Go' href="https://www.halilgoksu.com">©Goksu</a>
      </div>
    </div>
  );
}
//navbar ve cocuklarrdan olusan kisim  
//Navbar kismi sabit, alt kisim duruma gore degisir 

