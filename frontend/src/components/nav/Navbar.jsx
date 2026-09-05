import { Link } from 'react-router-dom';
import logo from './logo.png'; // Or use src="/logo.png" if inside the public/ folder

const Navbar = () => {
  return (
    <header className=" sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container justify-center flex h-14 items-center px-4">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="Oreogram Logo" 
            className="h-8 w-auto object-contain" 
          />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;