const Footer = () => {
  return (
    <footer className="bg-color-brown py-4">
      <div className="container text-center px-2 mx-auto">
        <div className="flex justify-center gap-2 text-sm sm:text-base">
          <a href="#" className="hover:bg-color-darkred flex-wrap transition">
            About
          </a>
          <a href="#" className="hover:bg-color-darkred flex-wrap transition">
            Support
          </a>
          <a href="#" className="hover:bg-color-darkred flex-wrap transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:bg-color-darkred flex-wrap transition">
            Terms of Service
          </a>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram text-xl"></i>
          </a>
        </div>
        <p className="text-xs sm:text-sm mt-4">
          &copy; {new Date().getFullYear()} HyperGames. All rights reserved.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
