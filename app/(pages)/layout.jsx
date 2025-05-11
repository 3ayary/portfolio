import Navbar from "../(ui)/Navbar";

export default function Layout({ children }) {
  return (
   
      <div>
<Navbar />
        {children}
      </div>
  
  );
}
