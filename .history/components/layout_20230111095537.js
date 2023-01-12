import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="w-screen h-csreen bg-blue-800 ">
      <Nav />
      <main className="flex w-screen h-screen border-purple-700">{children}</main>
    </div>
  );
}
//navbar ve cocuklarrdan olusan kisim 
