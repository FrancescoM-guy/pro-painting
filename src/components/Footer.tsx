export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-6 border-t-4 border-accent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm text-primary-foreground/90">
            © {new Date().getFullYear()} Professional Painting Services
          </p>
          <p className="text-sm text-primary-foreground/90">
            734-291-5619 &middot; Hikid1330@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};
