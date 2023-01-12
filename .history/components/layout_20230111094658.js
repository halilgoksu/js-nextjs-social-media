import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="mx-6 md:max-w-2xl md:mx-auto font-poppins bg-blue-800 p-4">
      <Nav />
      <main>{children}</main>
    </div>
  );
}
