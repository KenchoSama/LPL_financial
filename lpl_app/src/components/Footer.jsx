import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#investor-relations" className="hover:underline">Investor Relations</a></li>
            <li><a href="#careers" className="hover:underline">Careers at LPL</a></li>
            <li><a href="#contact-us" className="hover:underline">Contact Us</a></li>
            <li><a href="#disclosures" className="hover:underline">Disclosures</a></li>
            <li><a href="#privacy" className="hover:underline">Privacy/Security</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <ul className="flex space-x-4">
            <li><a href="https://www.facebook.com/LPLFinancial" className="hover:underline">Facebook</a></li>
            <li><a href="https://www.linkedin.com/company/lpl-financial" className="hover:underline">LinkedIn</a></li>
            <li><a href="https://www.youtube.com/user/lplfinancial" className="hover:underline">YouTube</a></li>
            <li><a href="https://www.instagram.com/lpl_financial" className="hover:underline">Instagram</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Legal</h2>
          <p>© 2025 LPL Financial. All rights reserved.</p>
          <p>Member FINRA/SIPC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
