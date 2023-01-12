import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="w-screen h-reen bg-indigo-200">
      <Nav/>
      <main className="">{children}</main>
    </div>
  );
}
//navbar ve cocuklarrdan olusan kisim  
//Navbar kismi sabit, alt kisim duruma gore degisir 

