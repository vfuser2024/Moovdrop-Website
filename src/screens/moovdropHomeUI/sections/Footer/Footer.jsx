import React from "react";
import { quickLinks, supportLinks, socialLinks } from "../../../../data/navigation";

export const Footer = () => {
  return (
    <footer className="relative w-full bg-moovdrop-primary py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1 sm:col-span-2">
            <div className="mb-4">
              <div className="w-40 h-11 bg-[url(https://c.animaapp.com/F0ApqIw8/img/screenshot-2025-11-24-at-10-51-18-pm-1@2x.png)] bg-cover bg-center" />
            </div>
            <p className="text-sm md:text-base text-white leading-relaxed max-w-md opacity-90">
              MoovDrop - Your trusted partner for fast, reliable, and affordable delivery services.
              Book trusted drivers in minutes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans font-bold text-white mb-4 text-base md:text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm md:text-base text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-sans font-bold text-white mb-4 text-base md:text-lg">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm md:text-base text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-white/20 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                className="text-white/80 hover:text-white transition-colors duration-200"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="font-sans font-normal text-white/70 text-sm text-center md:text-left">
            © {new Date().getFullYear()} MoovDrop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

