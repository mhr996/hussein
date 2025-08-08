"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Menu,
  Users,
  Building,
  Star,
  CheckCircle,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";
import { content } from "../content/arabic";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9997]"
            onClick={() => setIsOpen(false)}
          />

          {/* Mobile Menu Panel */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.25, type: "spring", damping: 30 }}
            className="fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-blue-900 via-blue-800 to-indigo-900 z-[9998] overflow-hidden"
          >
            <motion.button
              className="absolute top-6 left-6 p-2 z-99 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.1 }}
              
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
            </div>

            {/* Menu Content */}
            <div className="relative h-full flex flex-col p-8 pt-20">
              {/* Close Button */}

              {/* Header */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-center mb-12"
              >
                <h3 className="text-2xl font-bold text-white mb-2">القائمة</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-auto"></div>
              </motion.div>

              {/* Navigation Links */}
              <div className="space-y-4 flex-1">
                {[
                  { text: content.nav.about, href: "#about", icon: Users },
                  {
                    text: content.nav.services,
                    href: "#services",
                    icon: Building,
                  },
                  {
                    text: content.nav.testimonials,
                    href: "#testimonials",
                    icon: Star,
                  },
                  { text: "الأسئلة الشائعة", href: "#faq", icon: CheckCircle },
                  {
                    text: content.nav.contact,
                    href: "#contact",
                    icon: MessageCircle,
                  },
                ].map((item, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.2 + index * 0.2,
                      type: "spring",
                    }}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 w-full text-left"
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleNavClick(item.href)}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium text-lg group-hover:text-yellow-200 transition-colors">
                      {item.text}
                    </span>
                    <motion.div
                      className="mr-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowLeft className="w-5 h-5 text-yellow-400" />
                    </motion.div>
                  </motion.button>
                ))}
              </div>

              {/* Mobile CTA Button */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <motion.button
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-400 to-green-500 text-gray-900 font-bold rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNavClick("#contact")}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{content.nav.getInTouch}</span>
                </motion.button>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute bottom-32 left-8 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-lg animate-pulse delay-1000"></div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
