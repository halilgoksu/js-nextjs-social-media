import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="w-screen h-csreen bg-blue-800 border">
      <Nav />
      <main>{children}</main>
    </div>
  );
}
