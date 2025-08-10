"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "../content/arabic";
import ContactForm from "../components/ContactForm";
import { useMobileMenu } from "../components/MobileMenuProvider";
import {
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Award,
  Users,
  Building,
  CheckCircle,
  Target,
  BarChart3,
  Shield,
  Heart,
  Book,
  ArrowLeft,
  ArrowRight,
  Instagram,
  MessageCircle,
  X,
  AlertTriangle,
  Quote,
  ChevronLeft,
  ChevronRight,
  Menu,
  Video,
  Youtube,
} from "lucide-react";
import Image from "next/image";

// Testimonials Carousel Component
const TestimonialsCarousel = ({ testimonials }: { testimonials: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const nextSlide = () => {
    setAutoPlay(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setAutoPlay(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      {/* Main Testimonial Card */}
      <div className="relative min-h-[500px] md:h-[450px] px-4 md:px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Desktop Elevated Design */}
            <div className="hidden md:block relative bg-white/80 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 h-full overflow-hidden">
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-white/30 to-indigo-700/20 rounded-3xl"></div>

              {/* Animated background elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>

              <div className="relative h-full flex items-center p-12">
                {/* Content Grid */}
                <div className="grid grid-cols-12 gap-8 w-full items-center">
                  {/* Client Image Section - 3 columns */}
                  <div className="col-span-3 flex justify-center">
                    <div className="relative">
                      {/* Decorative rings */}
                      <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-lg animate-pulse"></div>
                      <div className="absolute -inset-2 bg-gradient-to-br from-white/40 to-blue-100/40 rounded-full backdrop-blur-sm"></div>

                      <motion.div
                        className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl backdrop-blur-sm"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ duration: 0.4, type: "spring" }}
                      >
                        <Image
                          src={
                            testimonials[currentIndex].image ||
                            "/testimonials/placeholder.jpg"
                          }
                          alt={testimonials[currentIndex].name}
                          width={144}
                          height={144}
                          className="w-full h-full object-cover z-10 relative"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display =
                              "none";
                          }}
                        />
                        {/* Fallback avatar */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-4xl">
                          {testimonials[currentIndex].name.charAt(0)}
                        </div>
                      </motion.div>

                      {/* Floating quote icon */}
                      <motion.div
                        className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-xl border-2 border-white/30"
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Quote className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Testimonial Content - 9 columns */}
                  <div className="col-span-9 space-y-6">
                    {/* Stars with enhanced design */}
                    <div className="flex justify-start items-center gap-1">
                      {[...Array(testimonials[currentIndex].rating || 5)].map(
                        (_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                              delay: 0.1 * i,
                              type: "spring",
                              stiffness: 200,
                            }}
                          >
                            <Star className="w-7 h-7 text-yellow-400 fill-current drop-shadow-lg" />
                          </motion.div>
                        )
                      )}
                      <span className="ml-3 text-sm font-semibold text-gray-500 bg-white/60 px-3 py-1 rounded-full">
                        {testimonials[currentIndex].rating || 5}.0
                      </span>
                    </div>

                    {/* Quote with enhanced typography */}
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="absolute -top-4 -right-4 text-6xl text-blue-200/30 font-serif">
                        "
                      </div>
                      <p className="text-xl text-gray-800 leading-relaxed font-medium relative z-10 pr-8">
                        {testimonials[currentIndex].content}
                      </p>
                      <div className="absolute -bottom-2 -left-2 text-6xl text-blue-200/30 font-serif rotate-180">
                        "
                      </div>
                    </motion.div>

                    {/* Client Info with enhanced design */}
                    <motion.div
                      className="flex items-center gap-4 pt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {testimonials[currentIndex].name}
                        </h3>
                        <p className="text-blue-600 font-semibold flex items-center text-right">
                          {testimonials[currentIndex].occupation}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Design (unchanged) */}
            <div className="md:hidden relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 border border-blue-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-800/10 rounded-3xl blur-xl"></div>

              <div className="relative h-full flex flex-col items-center gap-6">
                {/* Client Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <motion.div
                      className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-200 shadow-2xl"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={
                          testimonials[currentIndex].image ||
                          "/testimonials/placeholder.jpg"
                        }
                        alt={testimonials[currentIndex].name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover z-10 relative"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                      {/* Fallback avatar */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                    </motion.div>

                    {/* Quote Icon */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <Quote className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center w-full">
                  {/* Stars */}
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentIndex].rating || 5)].map(
                      (_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 * i, type: "spring" }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      )
                    )}
                  </div>

                  {/* Quote */}
                  <motion.p
                    className="text-base text-gray-700 leading-relaxed mb-4 italic px-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    style={{ lineHeight: "1.6" }}
                  >
                    "{testimonials[currentIndex].content}"
                  </motion.p>

                  {/* Client Info */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-lg font-bold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-blue-600 font-semibold">
                      {testimonials[currentIndex].location}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows - Enhanced for desktop, positioned outside */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:-left-6 top-[80%] lg:top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white/90 md:bg-white/90 backdrop-blur-lg border-2 border-blue-200/50 md:border-blue-200/30 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 md:hover:bg-blue-50 hover:border-blue-300 md:hover:border-blue-400 transition-all duration-300 z-20 shadow-lg md:shadow-2xl hover:shadow-xl md:hover:shadow-3xl hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:-right-6 top-[80%] lg:top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white/90 md:bg-white/90 backdrop-blur-lg border-2 border-blue-200/50 md:border-blue-200/30 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 md:hover:bg-blue-50 hover:border-blue-300 md:hover:border-blue-400 transition-all duration-300 z-20 shadow-lg md:shadow-2xl hover:shadow-xl md:hover:shadow-3xl hover:scale-110"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Enhanced Dots Indicator */}
      <div className="flex justify-center mt-8 gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoPlay(false);
              setCurrentIndex(index);
            }}
            className={`transition-all duration-300 ${
              index === currentIndex
                ? "w-8 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg scale-125"
                : "w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400 hover:scale-110"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 },
  };

  // Brand color: Cerulean Blue
  const brandColor = "#2A61B0";
  // Gold accent color: Elegant gold
  const goldColor = "#caa52dff";

  return (
    <div className="min-h-screen bg-white">
      {/* Custom animations */}
      <style jsx global>{`
        @keyframes animate-spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes animate-spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-spin-slow {
          animation: animate-spin-slow 20s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: animate-spin-slow-reverse 25s linear infinite;
        }
      `}</style>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50  border-b py-2 transition-all duration-300 ${
          isScrolled
            ? "bg-blue-600/90 border-blue-500/20 shadow-lg backdrop-blur-lg"
            : "bg-transparent border-transparent shadow-none"
        }`}
        style={isScrolled ? { backgroundColor: `${brandColor}` } : {}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/logo.webp"
                alt={content.hero.name}
                width={120}
                height={120}
                className="h-14 w-auto"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { text: content.nav.about, href: "#about" },
                { text: content.nav.services, href: "#services" },
                { text: content.nav.testimonials, href: "#testimonials" },
                { text: "الأسئلة الشائعة", href: "#faq" },
                { text: content.nav.contact, href: "#contact" },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="relative text-white/90 hover:text-white font-medium transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {item.text}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <motion.a
              href="#contact"
              className="hidden md:block px-6 py-2 rounded-xl text-blue-600 font-semibold bg-white/90 hover:bg-white backdrop-blur-sm transition-all shadow-lg hover:shadow-xl border border-white/20"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {content.nav.getInTouch}
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative z-50 p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ position: "relative", zIndex: 9999 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-14 px-4 pb-6 sm:px-6 lg:px-8 lg:pb-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden"
      >
        <img
          src="/hero-bg.jpg"
          alt="Hero Image"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-right lg:row-auto row-start-2 sm:row-start-1">
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white mb-6 leading-normal"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span
                  style={{
                    color: goldColor,
                  }}
                >
                  {content.hero.name}
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl mb-4 font-semibold"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {content.hero.title}
              </motion.p>

              <motion.p
                className="text-lg font-medium text-white/90 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {content.hero.subtitle}
              </motion.p>

              <motion.p
                className="text-lg text-white/80 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {content.hero.description}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.a
                  href="#contact"
                  className="px-8 py-4 rounded-2xl text-lg font-semibold text-blue-900 transition-all shadow-xl hover:shadow-2xl"
                  style={{
                    background: goldColor,
                  }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {content.hero.ctaButton}
                </motion.a>
                <motion.a
                  href="#about"
                  className="px-8 py-4 rounded-2xl text-lg font-semibold border-2 transition-all shadow-lg hover:shadow-xl hover:bg-opacity-10"
                  style={{
                    borderColor: goldColor,
                    color: goldColor,
                    backgroundColor: "transparent",
                  }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {content.hero.secondaryButton}
                </motion.a>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              className="relative lg:row-auto row-start-1 sm:row-start-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute inset-0 rounded-3xl blur-2xl opacity-50 scale-110"></div>

                {/* Main image container */}
                <div className="relative">
                  <Image
                    src="/hero-img.webp"
                    alt={content.hero.name}
                    width={1000}
                    height={1200}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Hussein Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-normal">
              {content.whyChoose.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.whyChoose.subtitle}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-12"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {content.whyChoose.points.map((point, index) => {
              const icons = {
                investor: TrendingUp,
                analysis: BarChart3,
                values: Heart,
              };
              const IconComponent = icons[point.icon as keyof typeof icons];

              const gradients = [
                "from-blue-500 to-blue-700",
                "from-blue-600 to-blue-800",
                "from-yellow-500 to-yellow-600",
              ];

              return (
                <motion.div
                  key={index}
                  className="relative group"
                  variants={fadeInUp}
                  whileHover={{ y: -15, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 group-hover:bg-white">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center mb-8 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center group-hover:text-gray-800 transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-center group-hover:text-gray-700 transition-colors">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="inline-block px-8 py-4 rounded-lg text-lg font-semibold text-white hover:opacity-90 transition-all shadow-lg"
              style={{ backgroundColor: brandColor }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {content.whyChoose.cta}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-indigo-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-pink-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-cyan-300/10 to-blue-400/10 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg">
                التحديات والحلول
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6 leading-normal">
              {content.challenges.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {content.challenges.subtitle}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-16"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {content.challenges.items.map((item, index) => {
              // Different icons for each challenge
              const challengeIcons = [AlertTriangle, Shield, Target, Building];
              const IconComponent = challengeIcons[index] || AlertTriangle;

              return (
                <motion.div
                  key={index}
                  className="relative group h-full"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50/50 to-indigo-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl"></div>

                  {/* Main card */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-500 group-hover:border-white/80 h-full flex flex-col">
                    <div className="flex flex-col md:flex-row items-start gap-8 flex-1">
                      {/* Icon section */}
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-indigo-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        <motion.div
                          className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl"
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-white" />
                        </motion.div>

                        {/* Floating decorative elements */}
                        <motion.div
                          className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-70"
                          animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <motion.div
                          className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-60"
                          animate={{
                            y: [-2, 2, -2],
                            x: [-1, 1, -1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                          }}
                        />
                      </div>

                      {/* Content section */}
                      <div className="flex-1 space-y-4 flex flex-col">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors leading-tight">
                          {item.challenge}
                        </h3>

                        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full group-hover:w-38 transition-all duration-300"></div>

                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors text-lg flex-1">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Enhanced conclusion section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-r from-white/90 to-blue-50/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60">
              <div className="text-center space-y-6">
                <motion.div
                  className="inline-block p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  <Target className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  النتيجة المضمونة
                </h3>

                <p className="text-xl font-semibold text-gray-800 max-w-2xl mx-auto leading-relaxed">
                  {content.challenges.conclusion}
                </p>

                <motion.div
                  className="flex justify-center gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  {["🎯", "✨", "🏆"].map((emoji, index) => (
                    <motion.span
                      key={index}
                      className="text-2xl"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How I Work Section */}
      <section
        id="services"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-yellow-400/10 to-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-indigo-400/5 to-cyan-600/5 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div className="text-center mb-20" {...fadeInUp}>
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 text-sm font-bold rounded-full shadow-lg">
                خطة العمل المنهجية
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-yellow-200 bg-clip-text text-transparent mb-6 leading-normal">
              {content.howIWork.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {content.howIWork.subtitle}
            </p>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Central Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 via-blue-400 to-purple-400 rounded-full shadow-lg"></div>

            {/* Mobile Timeline Line - Left side on mobile */}
            <div className="md:hidden absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-yellow-400 via-blue-400 to-purple-400 rounded-full shadow-lg"></div>

            {/* Animated progress line */}
            <motion.div
              className="absolute md:left-1/2 left-8 md:transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-yellow-300 to-blue-300 rounded-full shadow-2xl"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            />

            <div className="space-y-12 md:space-y-16">
              {content.howIWork.steps.map((step, index) => {
                const isEven = index % 2 === 0;
                const stepIcons = [Book, Target, BarChart3, Users, CheckCircle];
                const StepIcon = stepIcons[index] || CheckCircle;

                return (
                  <motion.div
                    key={index}
                    className={`relative flex items-center ${
                      isEven
                        ? "md:justify-end justify-start"
                        : "md:justify-start justify-start"
                    }`}
                    initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.3 }}
                  >
                    {/* Timeline Node */}
                    <motion.div
                      className="absolute md:left-1/2 left-8 md:transform md:-translate-x-1/2 transform -translate-x-1/2 z-20"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.3 + 0.5,
                        type: "spring",
                      }}
                    >
                      <div className="relative">
                        {/* Outer glow ring */}
                        <motion.div
                          className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full blur-lg opacity-60"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.6, 0.8, 0.6],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />

                        {/* Main node */}
                        <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-white via-yellow-100 to-amber-200 rounded-full flex items-center justify-center shadow-2xl border-4 border-yellow-300/50">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center shadow-lg">
                            <StepIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                          </div>
                        </div>

                        {/* Step number badge */}
                        <div className="absolute -top-2 -right-2 w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-xs md:text-sm shadow-lg border-2 border-white">
                          {step.number}
                        </div>
                      </div>
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                      className={`relative w-full md:max-w-md max-w-none ${
                        isEven
                          ? "md:ml-auto ml-0 md:pl-16 pl-20"
                          : "md:mr-auto mr-0 md:pl-16 pl-20"
                      }`}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      {/* Connecting line - Hidden on mobile */}
                      <div
                        className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-12 h-0.5 bg-gradient-to-r from-yellow-300 to-blue-300 ${
                          isEven ? "left-4" : "right-4"
                        }`}
                      >
                        <motion.div
                          className="w-full h-full bg-gradient-to-r from-yellow-200 to-blue-200"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            duration: 0.8,
                            delay: index * 0.3 + 0.8,
                          }}
                        />
                      </div>

                      {/* Mobile connecting line */}
                      <div className="md:hidden absolute top-1/2 left-4 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-yellow-300 to-blue-300">
                        <motion.div
                          className="w-full h-full bg-gradient-to-r from-yellow-200 to-blue-200"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            duration: 0.8,
                            delay: index * 0.3 + 0.8,
                          }}
                        />
                      </div>

                      {/* Card background effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-blue-500/10 rounded-3xl blur-xl opacity-50"></div>

                      <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border border-white/30 group hover:bg-white transition-all duration-500">
                        {/* Decorative corner elements */}
                        <div
                          className={`absolute top-4 ${
                            isEven ? "md:left-4 right-4" : "md:right-4 right-4"
                          } w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-yellow-200/30 to-amber-300/30 rounded-full blur-sm`}
                        ></div>

                        <div className="space-y-4">
                          <div
                            className={`flex items-center gap-4 ${
                              isEven
                                ? "md:flex-row-reverse flex-row"
                                : "flex-row"
                            }`}
                          >
                            <div className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-lg"></div>
                            <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
                          </div>

                          <h3
                            className={`text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors ${
                              isEven ? "md:text-right text-right" : "text-right"
                            }`}
                          >
                            {step.title}
                          </h3>

                          <p
                            className={`text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors text-base md:text-base ${
                              isEven ? "md:text-right text-right" : "text-right"
                            }`}
                          >
                            {step.description}
                          </p>

                          {/* Progress indicator */}
                          <div
                            className={`flex items-center gap-2 pt-4 ${
                              isEven
                                ? "md:justify-end justify-end"
                                : "justify-end"
                            }`}
                          >
                            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-400"></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Enhanced For Whom Section */}
          <motion.div
            className="mt-24 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {/* Section background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl"></div>

            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <motion.div
                className="text-center mb-12"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.7 }}
              >
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Users className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {content.howIWork.forWhom.title}
                  </h3>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mx-auto"></div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Dos - Enhanced */}
                <motion.div
                  className="space-y-4 md:space-y-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.9 }}
                >
                  <div className="text-center mb-6 md:mb-8">
                    <div className="inline-flex items-center gap-3 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl border border-green-300/30">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                      <span className="text-green-200 font-semibold text-sm md:text-base">
                        مناسب لك إذا كنت
                      </span>
                    </div>
                  </div>
                  {content.howIWork.forWhom.dos.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 md:gap-4 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-300" />
                      </div>
                      <p className="text-gray-200 leading-relaxed group-hover:text-white transition-colors text-sm md:text-base">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Don'ts - Enhanced */}
                <motion.div
                  className="space-y-4 md:space-y-6"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 2.1 }}
                >
                  <div className="text-center mb-6 md:mb-8">
                    <div className="inline-flex items-center gap-3 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl border border-red-300/30">
                      <X className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
                      <span className="text-red-200 font-semibold text-sm md:text-base">
                        غير مناسب لك إذا كنت
                      </span>
                    </div>
                  </div>
                  {content.howIWork.forWhom.donts.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 md:gap-4 group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 2.2 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-red-500/30 to-orange-500/30 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                        <X className="w-3 h-3 md:w-4 md:h-4 text-red-300" />
                      </div>
                      <p className="text-gray-200 leading-relaxed group-hover:text-white transition-colors text-sm md:text-base">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            <div className="relative inline-block">
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-amber-500/30 to-orange-500/30 rounded-2xl blur-xl"
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.a
                href="#contact"
                className="relative inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 border-2 border-yellow-300/50"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{content.howIWork.cta}</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-300/10 to-indigo-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-purple-300/10 to-pink-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-yellow-300/5 to-orange-400/5 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 text-sm font-bold rounded-full shadow-lg">
                معرض الصور
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6 leading-normal">
              صور تذكارية مع عملاء حسين
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              لحظات سعيدة مع العملاء الكرام
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Main Featured Image */}
            <motion.div
              className="md:col-span-2 lg:col-span-2 lg:row-span-2 relative group"
              variants={fadeInUp}
           
            >
              <div className="relative aspect-[4/3] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-yellow-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Image container */}
                <div className="relative h-full bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                  <img
                    src="/testimonials/limona.JPG"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Overlay with subtle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-sm animate-pulse delay-500"></div>
              </div>
            </motion.div>

            {/* Gallery Item 2 */}
            <motion.div
              className="relative group row-span-2"
              variants={fadeInUp}
            >
              <div className="relative aspect-[4/6.2] rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-red-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative h-full bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl overflow-hidden border-3 border-white shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                  <img
                    src="/testimonials/with-clients.JPG"
               
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                </div>
              </div>
            </motion.div>

          </motion.div>

    
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold rounded-full shadow-lg">
                شهادات العملاء
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6 leading-normal">
              {content.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {content.testimonials.subtitle}
            </p>
          </motion.div>

          {/* Modern Carousel */}
          <TestimonialsCarousel testimonials={content.testimonials.items} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: `${brandColor}05` }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-normal"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {content.finalCta.title}
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content.finalCta.subtitle}
          </motion.p>

          <motion.a
            href="#contact"
            className="inline-block px-10 py-5 rounded-lg text-xl font-semibold text-white hover:opacity-90 transition-all shadow-xl"
            style={{ backgroundColor: brandColor }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            {content.finalCta.button}
          </motion.a>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
      >
        {/* Enhanced Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main gradient orbs */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"></div>

          {/* Floating particles */}
          <div className="absolute top-20 left-1/4 w-4 h-4 bg-blue-400/40 rounded-full blur-sm animate-bounce"></div>
          <div className="absolute bottom-32 right-1/4 w-6 h-6 bg-yellow-400/30 rounded-full blur-sm animate-bounce delay-500"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400/50 rounded-full blur-sm animate-bounce delay-1000"></div>

          {/* Geometric patterns */}
          <div className="absolute top-16 right-16 w-32 h-32 border border-white/10 rounded-full animate-spin-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div className="text-center mb-20" {...fadeInUp}>
            <motion.div
              className="inline-block mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-full shadow-2xl backdrop-blur-sm border border-white/20">
                ✨ تواصل معي الآن ✨
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-yellow-200 bg-clip-text text-transparent mb-8 leading-tight">
              {content.contact.title}
            </h2>

            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 rounded-full mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {content.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Welcome Message - Enhanced */}
            <motion.div
              {...fadeInUp}
              className="flex items-center justify-center"
            >
              <div className="relative  p-8 md:p-12 h-full flex items-center">
                <div className="relative text-center lg:text-right space-y-6">
                  {/* Welcome icon */}
                  <motion.div
                    className="inline-block mb-6"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center shadow-lg mx-auto lg:mx-0">
                      <span className="text-3xl">✨</span>
                    </div>
                  </motion.div>

                  {/* Welcome text */}
                  <div className="space-y-4">
                    <h3 className="text-4xl md:text-3xl font-bold text-white leading-relaxed">
                      أهلًا فيك، أنا حسين حوش 👋
                    </h3>

                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium">
                      جاهز أساعدك تبدأ استثمارك في دبي بثقة وأمان.
                    </p>

                    <p className="text-lg text-gray-400 leading-relaxed">
                      بس عبّي بياناتك، وأنا أو فريقي راح نتواصل معك خلال 24
                      ساعة.
                    </p>
                  </div>

                  {/* Decorative line */}
                  <motion.div
                    className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mx-auto lg:mx-0"
                    initial={{ width: 0 }}
                    animate={{ width: 96 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-lg animate-pulse"></div>
                <div className="absolute bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-amber-400/20 to-yellow-400/20 rounded-full blur-lg animate-pulse delay-1000"></div>
              </div>
            </motion.div>

            {/* Contact Form - Enhanced */}
            <motion.div className="relative group" {...fadeInUp}>
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

              {/* Glassmorphism container */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-500">
                {/* Form header with enhanced design */}
                <div className="text-center mb-10">
                  <motion.div
                    className="inline-flex items-center gap-3 mb-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl lg:text-3xl font-bold text-white">
                      {content.contact.form.title}
                    </h3>
                  </motion.div>

                  <motion.div
                    className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto"
                    initial={{ width: 0 }}
                    animate={{ width: 80 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </div>

                <ContactForm />

                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-lg animate-pulse"></div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-lg animate-pulse delay-1000"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold rounded-full shadow-lg">
                الأسئلة الشائعة
              </span>
            </motion.div>

            <h2
              style={{ lineHeight: "1.5" }}
              className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight"
            >
              إجابات على أكثر الأسئلة شيوعاً
            </h2>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            <p className="text-xl text-gray-600 leading-relaxed">
              احصل على إجابات لأسئلتك
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question:
                  "كيف بضمان استثماري؟ هل المطور بيسلمني المشروع على الوقت وبالجودة المطلوبة؟",
                answer:
                  "دائرة الأراضي والأملاك في دبي تفرض قوانين صارمة على المطورين، ومنها وجود حساب ضمان (Escrow Account) يضمن استكمال المشروع وتسليمه. بالإضافة، العقود الرسمية تضمن حقوقك، ويمكنك متابعة المشروع من خلال تطبيقات رسمية مثل Dubai REST.",
              },
              {
                question: "هل لازم أكون مقيم أو موجود في دبي للاستثمار؟",
                answer:
                  "لا، ليس من الضروري أن تكون مقيمًا أو متواجدًا في دبي للاستثمار. يمكنك إدارة استثمارك عن بعد من خلال وكلاء معتمدين وخدمات إدارة عقارات محترفة.",
              },
              {
                question: "هل التملك حر لجميع الجنسيات؟",
                answer:
                  "نعم، دبي تتيح التملك الحر 100% للأجانب في المناطق المخصصة لذلك، مع حماية كاملة من الحكومة وحقوق واضحة.",
              },
              {
                question: "هل استثماري مضمون من ناحية القوانين؟",
                answer:
                  "نعم، دبي توفر بيئة قانونية شفافة ومحكمة لحماية المستثمرين، مع قوانين تنظيم السوق العقاري والإشراف المباشر من دائرة الأراضي.",
              },
              {
                question:
                  "هل أحتاج خبرة أو معرفة مسبقة بالاستثمار العقاري في دبي؟",
                answer:
                  "لا، دورنا كمستشارين هو توجيهك خطوة بخطوة، وتقديم كل الدعم اللازم لاتخاذ قرارات استثمارية صحيحة.",
              },
              {
                question: "هل ممكن أبيع أو أخرج من الاستثمار بسهولة؟",
                answer:
                  "نعم، سوق دبي العقاري سيّال جداً ويوجد طلب على شراء العقارات، خاصة في المناطق الرئيسية. كما أن هناك خيارات لإعادة البيع بسهولة عبر شبكة واسعة من المشترين.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              >
                <motion.div
                  className="relative bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden"
                  whileHover={{ y: -2 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      {/* Question Number */}
                      <motion.div
                        className="flex-shrink-0 w-9 h-9 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-white font-bold text-lg">
                          {index + 1}
                        </span>
                      </motion.div>

                      <div className="flex-1 space-y-4">
                        {/* Question */}
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight group-hover:text-blue-800 transition-colors duration-300">
                          {faq.question}
                        </h3>

                        {/* Decorative line */}
                        <motion.div
                          className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full group-hover:w-24 transition-all duration-300"
                          initial={{ width: 64 }}
                          whileInView={{ width: 96 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.1 + 0.8,
                          }}
                        />

                        {/* Answer */}
                        <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                          {faq.answer}
                        </p>
                      </div>

                      {/* Decorative icon */}
                      <motion.div
                        className="flex-shrink-0 w-8 h-8 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <CheckCircle className="w-6 h-6 text-blue-500" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border-2 border-blue-100">
              {/* Background decorative elements */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-indigo-200/30 to-purple-300/30 rounded-full blur-2xl"></div>
              </div>

              <div className="relative space-y-6">
                <motion.div
                  className="inline-block p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.05, rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  <MessageCircle className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  لسه عندك أسئلة؟
                </h3>

                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  يلا نناقش فرصك الاستثمارية
                </p>

                <motion.div className="pt-4">
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span className="text-lg">ابدأ النقاش الآن</span>
                    <motion.div
                      className="w-2 h-2 bg-white rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-yellow-400/10 to-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-3xl blur-xl"></div>
                <div className="relative space-y-6">
                  {/* Logo and Name */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Building className="w-8 h-8 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {content.footer.name}
                      </h3>
                      <p className="text-yellow-300 font-semibold">
                        {content.footer.title}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    خبير عقاري متخصص في تقديم أفضل الحلول الاستثمارية والعقارية
                    في دبي. نساعدك في اتخاذ القرارات المناسبة لتحقيق أهدافك
                    الاستثمارية.
                  </p>

                  {/* Social Media */}
                  <div className="flex gap-4">
                    {[
                      {
                        icon: MessageCircle,
                        label: "WhatsApp",
                        color: "from-green-500 to-green-600",
                        link: "https://wa.me/971559337244",
                      },
                      {
                        icon: Instagram,
                        label: "Instagram",
                        color: "from-pink-500 to-purple-600",
                        link: "https://www.instagram.com/hussein_housh",
                      },
                      {
                        icon: Youtube,
                        label: "YouTube",
                        color: "from-red-500 to-red-600",
                        link: "https://www.youtube.com/channel/UCc9goubUu_pkLpmieBryYlw",
                      },
                      {
                        icon: Mail,
                        label: "Email",
                        color: "from-blue-500 to-blue-600",
                        link: "mailto:husseinhoush@gmail.com",
                      },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link || "#"}
                        target="_blank"
                        className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="w-5 h-5 text-white" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-3xl blur-xl"></div>
                <div className="relative space-y-6">
                  <h4 className="text-xl font-bold text-white flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    روابط سريعة
                  </h4>

                  <div className="space-y-3">
                    {[
                      { text: "من أنا", href: "#about" },
                      { text: "خدماتي", href: "#services" },
                      { text: "التحديات والحلول", href: "#challenges" },
                      { text: "آراء العملاء", href: "#testimonials" },
                      { text: "تواصل معي", href: "#contact" },
                    ].map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        className="block text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-white/10 backdrop-blur-sm"
                        whileHover={{ x: 5 }}
                      >
                        {link.text}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-amber-600/10 rounded-3xl blur-xl"></div>
                <div className="relative space-y-6">
                  <h4 className="text-xl font-bold text-white flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-gray-900" />
                    </div>
                    تواصل معي
                  </h4>

                  <div className="space-y-4">
                    {[
                      {
                        icon: MessageCircle,
                        label: "واتساب",
                        value: "+971 559 337 244",
                        color: "text-green-400",
                        link: "https://wa.me/971559337244",
                      },
                      {
                        icon: Mail,
                        label: "البريد الإلكتروني",
                        value: "husseinhoush@gmail.com",
                        color: "text-blue-400",
                        link: "mailto:husseinhoush@gmail.com",
                      },
                      {
                        icon: MapPin,
                        label: "الموقع",
                        value: "دبي، الإمارات",
                        color: "text-purple-400",
                      },
                    ].map((contact, index) => (
                      <a
                        href={contact.link || "#"}
                        target="_blank"
                        key={index}
                        className="flex items-start gap-3"
                      >
                        <contact.icon
                          className={`w-5 h-5 ${contact.color} mt-1 flex-shrink-0`}
                        />
                        <div>
                          <div className="text-gray-400 text-sm">
                            {contact.label}
                          </div>
                          <div
                            className="text-white font-medium"
                            style={{ direction: "ltr" }}
                          >
                            {contact.value}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>احجز استشارتك الآن</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="mt-16 pt-8 border-t border-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-right">
                  <p className="text-gray-300 text-sm">
                    {content.footer.copyright}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    جميع الحقوق محفوظة © {new Date().getFullYear()}
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>متاح الآن</span>
                  </div>

                  <div className="flex gap-3">
                    {["🏆", "⭐", "💎"].map((emoji, index) => (
                      <motion.span
                        key={index}
                        className="text-lg"
                        animate={{
                          y: [0, -5, 0],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      >
                        {emoji}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
