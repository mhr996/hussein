"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CircleCheck, X } from "lucide-react";

interface SuccessPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessPopup({ isOpen, onClose }: SuccessPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-6xl mx-auto">
              {/* Enhanced Background decorative elements */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
              </div>

              {/* Main Container */}
              <div className="relative bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-indigo-900/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
                {/* Close Button */}
                <motion.button
                  onClick={onClose}
                  className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group z-10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6 text-white group-hover:text-gray-200" />
                </motion.button>

                {/* Desktop 2-column layout, Mobile single column */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Left Column - Message Content */}
                  <motion.div
                    className="space-y-6 lg:space-y-6 text-center lg:text-right order-2 lg:order-1"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {/* Success Icon */}
                    <motion.div
                      className="text-center lg:text-right"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                    >
                      <div className="inline-block ">
                        <motion.div
                          className="text-4xl"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                        >
                        <CircleCheck className="w-12 h-12 text-green-400" />
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Success Message */}
                    <div className="space-y-4 lg:space-y-6">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed">
                        شكرًا على ثقتك!
                      </h3>

                      <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                        أنا أو فريقي راح نتواصل معك خلال 24 ساعة لنبدأ سوا رحلتك
                        الاستثمارية في دبي.
                      </p>

                      {/* Decorative line */}
                      <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto lg:mx-0 lg:mr-0"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      />
                    </div>

                    {/* Additional message for desktop */}
                    <motion.p
                      className="hidden lg:block text-gray-400 text-lg leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      استمتع بالفيديو وابدأ رحلتك الاستثمارية معنا
                    </motion.p>
                  </motion.div>

                  {/* Right Column - Video Content */}
                  <motion.div
                    className="order-2"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {/* YouTube Video */}
                    <div className="relative aspect-[1/1] max-w-md lg:max-w-sm xl:max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                      {/* Video container with enhanced styling */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-1">
                        <iframe
                          src="https://www.youtube.com/embed/_L2odOccwhk?playlist=_L2odOccwhk"
                          title="Success Video"
                          className="w-full h-full rounded-xl"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>

                      {/* Decorative elements around video */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full blur-sm animate-pulse"></div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-sm animate-pulse delay-500"></div>
                    </div>
                  </motion.div>
                </div>

                {/* Additional decorative elements */}
                <div className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-lg animate-pulse"></div>
                <div className="absolute bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-lg animate-pulse delay-1000"></div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
