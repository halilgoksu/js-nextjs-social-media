import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="w-screen h-csreen bg-blue-800 border-2 border-red-300 ">
      <Nav />
      <main className="w-full h-full">{children}</main>
    </div>
  );
}
