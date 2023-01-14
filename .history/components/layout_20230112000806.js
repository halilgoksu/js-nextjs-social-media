import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="w-screen h-screen bg-indigo-200 items-center jus">
      <Nav/>
      <main>{children}</main>
    </div>
  );
}
//navbar ve cocuklarrdan olusan kisim  
//Navbar kismi sabit, alt kisim duruma gore degisir 
