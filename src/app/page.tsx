"use client";

import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Home,
  Key,
  TrendingUp,
  Award,
  Users,
  Building,
  ChevronDown,
  ExternalLink,
  Globe,
} from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const { t, language, switchLanguage } = useTranslation();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const services = [
    {
      icon: Home,
      title: t("services.luxuryHomes.title"),
      description: t("services.luxuryHomes.description"),
    },
    {
      icon: Key,
      title: t("services.propertyManagement.title"),
      description: t("services.propertyManagement.description"),
    },
    {
      icon: TrendingUp,
      title: t("services.investmentConsulting.title"),
      description: t("services.investmentConsulting.description"),
    },
    {
      icon: Building,
      title: t("services.commercialRealEstate.title"),
      description: t("services.commercialRealEstate.description"),
    },
  ];

  const achievements = [
    { number: "500+", label: t("about.achievements.propertiesSold") },
    { number: "15+", label: t("about.achievements.yearsExperience") },
    { number: "98%", label: t("about.achievements.clientSatisfaction") },
    { number: "$2B+", label: t("about.achievements.salesVolume") },
  ];

  const testimonials = [
    {
      name: t("testimonials.client1.name"),
      role: t("testimonials.client1.role"),
      content: t("testimonials.client1.content"),
      rating: 5,
    },
    {
      name: t("testimonials.client2.name"),
      role: t("testimonials.client2.role"),
      content: t("testimonials.client2.content"),
      rating: 5,
    },
    {
      name: t("testimonials.client3.name"),
      role: t("testimonials.client3.role"),
      content: t("testimonials.client3.content"),
      rating: 5,
    },
  ];

  const LanguageSwitcher = () => (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4" />
      <button
        onClick={() => switchLanguage(language === "en" ? "ar" : "en")}
        className="text-sm hover:text-blue-400 transition-colors">
        {language === "en" ? "العربية" : "English"}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div className="text-2xl font-bold gradient-text" whileHover={{ scale: 1.05 }}>
              {t("hero.name")}
            </motion.div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#home" className="hover:text-blue-400 transition-colors">
                {t("nav.home")}
              </a>
              <a href="#about" className="hover:text-blue-400 transition-colors">
                {t("nav.about")}
              </a>
              <a href="#services" className="hover:text-blue-400 transition-colors">
                {t("nav.services")}
              </a>
              <a href="#testimonials" className="hover:text-blue-400 transition-colors">
                {t("nav.testimonials")}
              </a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">
                {t("nav.contact")}
              </a>
              <LanguageSwitcher />
            </div>
            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              {t("nav.getInTouch")}
            </motion.a>
          </div>
        </div>
      </motion.nav>{" "}
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>{" "}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center hero-grid">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-center ${
                language === "en" ? "lg:text-left" : "lg:text-right"
              } hero-content-column hero-content`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8 lg:mb-12">
                <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto lg:mx-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 mb-6 hero-avatar">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <span className="text-2xl lg:text-4xl font-bold gradient-text">HH</span>
                  </div>
                </div>
              </motion.div>
              <motion.h1 {...fadeInUp} className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6">
                <span className="gradient-text">{t("hero.name")}</span>
              </motion.h1>
              <motion.p
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-lg lg:text-xl xl:text-2xl text-gray-300 mb-4">
                {t("hero.title")}
              </motion.p>
              <motion.p
                {...fadeInUp}
                transition={{ delay: 0.4 }}
                className="text-base lg:text-lg text-gray-400 mb-8 lg:mb-12">
                {t("hero.description")}
              </motion.p>{" "}
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start hero-buttons">
                <motion.a
                  href="#contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  <Phone className="w-4 lg:w-5 h-4 lg:h-5" />
                  {t("hero.contactMe")}
                </motion.a>
                <motion.a
                  href="#services"
                  className="border-2 border-white/20 px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  {t("hero.viewServices")}
                  <ExternalLink className="w-4 lg:w-5 h-4 lg:h-5" />
                </motion.a>
              </motion.div>
            </motion.div>
            {/* Right Column - Video */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative floating lg:mx-12">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/10 p-2 backdrop-blur-sm z-50 video-container">
                <div className="aspect-square rounded-xl overflow-hidden bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/_L2odOccwhk?autoplay=0&mute=1&controls=1&showinfo=0&rel=0&modestbranding=1"
                    title="Dubai Real Estate Showcase"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"></iframe>
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-60"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}></motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-60"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}></motion.div>

              {/* Video quality badge */}
              <motion.div
                className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white border border-white/20"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}>
                4K Quality
              </motion.div>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t("about.title")} <span className="gradient-text">{t("about.name")}</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6">{t("about.description1")}</p>
              <p className="text-gray-300 text-lg mb-8">{t("about.description2")}</p>

              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-gray-400">{achievement.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="w-full p-2  rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 flex items-center justify-center">
                {/* <div className="text-8xl gradient-text font-bold">HH</div> */}
                <Image alt="about" className="w-full h-full object-cover rounded-lg" src={require("../../public/about-img.webp")} />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Award className="w-12 h-12 text-white" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">{t("services.title")}</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">{t("services.subtitle")}</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                  whileHover={{ y: -10 }}>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">{t("testimonials.title")}</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">{t("testimonials.subtitle")}</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">{t("contact.title")}</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">{t("contact.subtitle")}</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8">
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-2 p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6">{t("contact.form.title")}</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder={t("contact.form.firstName")}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder={t("contact.form.lastName")}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="email"
                    placeholder={t("contact.form.email")}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder={t("contact.form.phone")}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <textarea
                  rows={4}
                  placeholder={t("contact.form.message")}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 focus:outline-none transition-colors resize-none"></textarea>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}>
                  {t("contact.form.submit")}
                </motion.button>
              </form>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">{t("contact.info.phone")}</div>
                    <div className="text-gray-400">+971 50 123 4567</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">{t("contact.info.email")}</div>
                    <div className="text-gray-400">hussein@dubaiproperties.ae</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">{t("contact.info.location")}</div>
                    <div className="text-gray-400">Dubai, UAE</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">{t("contact.info.available")}</div>
                    <div className="text-gray-400">{t("contact.info.availableText")}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text mb-4">{t("footer.name")}</div>
            <p className="text-gray-400 mb-4">{t("footer.title")}</p>
            <p className="text-gray-500 text-sm">{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
