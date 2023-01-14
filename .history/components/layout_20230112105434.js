import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="w-full h-screen bg-indigo-200 items-center justify-center text-center">
      <Nav/>
      <main className="h-screen border-4 bg-indigo-200 w-2/3 justify-center items-center text-center">{children}</main>
      <div className='flex justify-center items-center text-center  text-gray-900 text-xs  w-full h-6
        bg-indigo-200 '>
         Created by <a className='cursor-pointer rounded-lg '
          title='Go' href="https://www.halilgoksu.com">©Goksu</a>
      </div>
    </div>
  );
}
//navbar ve cocuklarrdan olusan kisim  
//Navbar kismi sabit, alt kisim duruma gore degisir 
// 

