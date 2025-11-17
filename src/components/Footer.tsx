export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} Professional Painting Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
