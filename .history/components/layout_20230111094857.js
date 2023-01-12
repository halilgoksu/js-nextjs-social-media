import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="w-screen h-csreen bg-blue-800 border-2 ">
      <Nav />
      <main>{children}</main>
    </div>
  );
}
