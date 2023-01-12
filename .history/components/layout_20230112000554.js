import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="w-screen ">
      <Nav/>
      <main>{children}</main>
    </div>
  );
}
//navbar ve cocuklarrdan olusan kisim  
//Navbar kismi sabit, alt kisim duruma gore degisir 

