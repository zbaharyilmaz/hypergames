const Footer = () => {
  return (
    <footer className="bg-color-brown py-4">
      <div className="container text-center px-2 mx-auto">
        <div className="flex justify-center gap-2 text-xs">
          <a href="#" className="hover:bg-color-darkred flex-wrap transition">
            About
          </a>
          <span>|</span>
          <a href="#" className="hover:bg-color-darkred flex-wrap transition">
            Support
          </a>
          <span>|</span>
          <a href="#" className="hover:bg-color-darkred flex-wrap transition">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:bg-color-darkred flex-wrap transition">
            Terms of Service
          </a>
        </div>
        <p className="text-[0.7rem] mt-4">
          &copy; {new Date().getFullYear()} HyperGames. All rights reserved.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
