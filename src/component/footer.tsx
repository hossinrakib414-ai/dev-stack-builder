export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8 font-sans text-gray-500 mt-16 w-full">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-xs shadow-xs">
                DS
              </div>
              <span className="text-xl font-bold text-gray-900">
                Dev<span className="text-pink-500">Stack</span>
              </span>
            </div>

            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex items-center gap-4 text-xs font-medium text-gray-600 pt-2">
              <a href="#" className="hover:text-gray-900 transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
              PRODUCT
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
              LEGAL
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
