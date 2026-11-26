import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link to="/help" className="hover:underline">AI Help</Link>
            <Link to="/auth?next=/admin/photos" className="hover:underline">Owner Photo Login</Link>
            <a href="tel:7342915619" className="hover:underline">734-291-5619</a>
            <a href="mailto:Hikid1330@gmail.com" className="hover:underline">Hikid1330@gmail.com</a>
          </div>
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} Professional Painting Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
