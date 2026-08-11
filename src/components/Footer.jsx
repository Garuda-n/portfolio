import { profile } from '../data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-bg-secondary py-8 border-t border-border">
      <div className="max-w-[1152px] mx-auto px-8 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-text-muted text-sm text-center md:text-left">
          &copy; {year} {profile.name}. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6 text-sm text-text-muted">
          <a href={profile.contact.github} className="hover:text-accent transition-colors">GitHub</a>
          <a href={profile.contact.linkedin} className="hover:text-accent transition-colors">LinkedIn</a>
          <a href={`mailto:${profile.contact.email}`} className="hover:text-accent transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
