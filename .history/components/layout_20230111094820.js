import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className=" bg-blue-800 p-2">
      <Nav />
      <main>{children}</main>
    </div>
  );
}
