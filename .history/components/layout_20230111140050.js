import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="w-screen h-csreen bg-indigo-500">
      <Nav className="w-full"/>
      <main className="flex w-screen h-screen">{children}</main>
    </div>
  );
}
//navbar ve cocuklarrdan olusan kisim  
//Navbar kismi sabit, alt kisim duruma gore degisir 

