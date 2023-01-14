import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="w-full h-screen bg-indigo-200 items-center justify-center text-center">
      <Nav/>
      <main className="h-screen border-2 border-yellow-900 bg-indigo-200 ">{children}</main>
      <div className='inline justify-center items-center text-center  text-gray-900 text-xs  w-full 
        '>
         Created by <a className='cursor-pointer rounded-lg p-1 '
          title='Go' href="https://www.halilgoksu.com">©Goksu</a>
      </div>
    </div>
  );
}
//navbar ve cocuklarrdan olusan kisim  
//Navbar kismi sabit, alt kisim duruma gore degisir 
// 

