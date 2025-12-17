import React from "react";
import { quickLinks, supportLinks, socialLinks } from "../../../../data/navigation";

export const Footer = () => {
  return (
    <footer className="relative w-full bg-moovdrop-primary py-12 md:py-16">
      <div className="max-w-7xl mx-auto section-padding-x">
        <div className="grid grid-cols-1 md:grid-cols-4 content-gap-lg mb-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <div className="w-[161.85px] h-[44.05px] bg-[url(https://c.animaapp.com/F0ApqIw8/img/screenshot-2025-11-24-at-10-51-18-pm-1@2x.png)] bg-cover bg-[50%_50%]" />
            </div>
            <p className="body-base text-white leading-relaxed max-w-md opacity-90">
              MoovDrop - Your trusted partner for fast, reliable, and affordable delivery services.
              Book trusted drivers in minutes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="label-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="body-base text-white/80 hover:text-white transition-colors duration-moovdrop-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="label-bold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="body-base text-white/80 hover:text-white transition-colors duration-moovdrop-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                className="text-white/80 hover:text-white transition-colors duration-moovdrop-base"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="font-dm-sans font-normal text-white/70 text-sm">
            © {new Date().getFullYear()} MoovDrop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

