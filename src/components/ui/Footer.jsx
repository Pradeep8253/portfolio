export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-premium-black border-t border-premium-border/50 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono tracking-widest text-premium-offwhite/50">
        <div>
          &copy; {currentYear} PRADEEP YADAV. ALL RIGHTS RESERVED.
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-premium-accent transition-colors interactable">GITHUB</a>
          <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="hover:text-premium-accent transition-colors interactable">LEETCODE</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-premium-accent transition-colors interactable">LINKEDIN</a>
        </div>
      </div>
    </footer>
  );
}
