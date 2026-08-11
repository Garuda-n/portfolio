import { profile } from '../../data/profile';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {profile.name}. Designed & Built for practicality.
        </p>
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#home" className="text-muted hover:text-primary transition-colors">Home</a>
          <a href="#projects" className="text-muted hover:text-primary transition-colors">Projects</a>
          <a href={profile.contact.email} className="text-muted hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
