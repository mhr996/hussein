"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  FileText,
  BarChart3,
  Smartphone,
  Trophy,
  Shield,
  MapPinIcon,
  HelpCircle,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const { t, language, switchLanguage } = useTranslation();
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

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

  const LanguageSwitcherMobile = () => (
    <div className="relative">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setMobileLangOpen(!mobileLangOpen)}
          className="text-sm text-gray-300 hover:text-white transition-colors">
          <Globe className="w-7 h-7 text-white" />
        </button>
      </div>
      <AnimatePresence>
        {mobileLangOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-2 right-0 bg-gray-800 text-white rounded-md shadow-lg z-50 ring-1 ring-white/20">
            <button
              onClick={() => {
                switchLanguage("en");
                setMobileLangOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors">
              English
            </button>
            <button
              onClick={() => {
                switchLanguage("ar");
                setMobileLangOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors">
              العربية
            </button>
          </motion.div>
        )}
      </AnimatePresence>
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
            <div className="flex items-center gap-1">
              <div className="md:hidden mx-1">
                <LanguageSwitcherMobile />
              </div>
              <motion.a
                href="#contact"
                className="px-3 py-2 sm:px-4 md:px-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 sm:text-[14px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                {t("nav.getInTouch")}
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>
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
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8 lg:mb-12">
                <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto lg:mx-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 mb-6 hero-avatar">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <span className="text-2xl lg:text-4xl font-bold gradient-text">HH</span>
                  </div>
                </div>
              </motion.div> */}
              <motion.h1 {...fadeInUp} className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6">
                <span className="gradient-text">{t("hero.name")}</span>
              </motion.h1>
              {/* <motion.p
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
              </motion.p> */}

              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.5 }}
                className="mb-8 lg:min-w-[600px] lg:mb-12 p-6 rounded-2xl ">
                <h3
                  className={`text-lg lg:text-xl font-semibold mb-4 text-blue-400  text-left
                  }`}>
                  {t("hero.investmentDetails.title")}
                </h3>
                <ul className={`space-y-3 ${language === "en" ? "text-left" : "text-right"}`}>
                  <li
                    className={`flex items-start gap-2 ${
                      language === "en" ? "flex-row justify-start" : "flex-row-reverse justify-end"
                    }`}>
                    <span className="text-blue-400 mt-1">1.</span>
                    <span className="text-gray-300">
                      {t("hero.investmentDetails.propertyPrice")}
                    </span>
                  </li>
                  <li
                    className={`flex items-start gap-2 ${
                      language === "en" ? "flex-row justify-start" : "flex-row-reverse justify-end"
                    }`}>
                    <span className="text-blue-400 mt-1">2.</span>
                    <span className="text-gray-300">{t("hero.investmentDetails.downPayment")}</span>
                  </li>
                  <li
                    className={`flex items-start gap-2 ${
                      language === "en" ? "flex-row justify-start" : "flex-row-reverse justify-end"
                    }`}>
                    <span className="text-blue-400 mt-1">3.</span>
                    <span className="text-gray-300">
                      {t("hero.investmentDetails.monthlyInstallment")}
                    </span>
                  </li>
                  <li
                    className={`flex items-start gap-2 ${
                      language === "en" ? "flex-row justify-start" : "flex-row-reverse justify-end"
                    }`}>
                    <span className="text-blue-400 mt-1">4.</span>
                    <span className="text-gray-300">{t("hero.investmentDetails.delivery")}</span>
                  </li>
                  <li
                    className={`flex items-start gap-2 ${
                      language === "en" ? "flex-row justify-start" : "flex-row-reverse justify-end"
                    }`}>
                    <span className="text-blue-400 mt-1">5.</span>
                    <span className="text-gray-300">
                      {t("hero.investmentDetails.tenantCoverage")}
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.6 }}
                className={`mb-8 lg:mb-12 text-center ${
                  language === "en" ? "lg:text-left" : "lg:text-right"
                }`}>
                <p className="text-base lg:text-lg text-blue-400 font-medium">
                  👇 {t("hero.ctaText")}
                </p>
              </motion.div>
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
              <h2 className="text-4xl pb-2 md:text-5xl font-bold mb-6 gradient-text">
                {t("about.title")}
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
                <Image
                  alt="about"
                  src="/about-img.webp"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Award className="w-12 h-12 text-white" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investment Tools Section */}
      <section id="investment-tools" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">
                {language === "en"
                  ? "Learn More About Your Real Estate Investment in Dubai"
                  : "اعرف أكثر عن استثمارك العقاري في دبي"}
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto">
              {language === "en"
                ? "Before you start your investment, know the most important official tools that help you make the right investment decisions and make you a controlled and conscious investor"
                : "قبل ما تبدأ، إستثمارك إعرف أهم الأدوات الرسمية اللي بتساعدك تاخد قرارات استثمارية صح وتخليك متحكم ومستثمر واعي"}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
              whileHover={{ y: -10 }}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                {language === "en" ? "Dubai Land Department" : "دائرة الأراضي والأملاك"}
              </h3>
              <p className="text-gray-300 mb-6">
                {language === "en"
                  ? "Know the annual service charges for your project and track official ownership status through the official platform."
                  : "من خلالها بتعرف أسعار الرسوم السنوية (Service Charge) على المشروع اللي ناوي تستثمر فيه، وكمان تتابع وضع الملكية الرسمية."}
              </p>
              <a
                href="https://dubailand.gov.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                {language === "en" ? "Visit Website" : "زيارة الموقع"}
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
              whileHover={{ y: -10 }}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">DXB Interact</h3>
              <p className="text-gray-300 mb-6">
                {language === "en"
                  ? "A platform that gives you real data about rental prices, sales, and purchases in the project or area you're interested in."
                  : "منصة بتعطيك بيانات حقيقية عن أسعار الإيجارات، البيع، والشراء في المشروع أو المنطقة اللي مهتم فيها، حتى تختار بعقل."}
              </p>
              <a
                href="https://dxbinteract.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                {language === "en" ? "Visit Website" : "زيارة الموقع"}
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
              whileHover={{ y: -10 }}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                {language === "en" ? "Dubai REST App" : "تطبيق Dubai REST"}
              </h3>
              <p className="text-gray-300 mb-6">
                {language === "en"
                  ? "Helps you verify if the developer has an escrow account for projects and track their delivered projects and delivery history."
                  : "بيساعدك تتأكد إذا المطور العقاري عنده حساب ضمان للمشاريع، وكمان تتابع مشاريعهم المسلمة وتاريخ تسليمها."}
              </p>
              <a
                href="https://dubailand.gov.ae/en/eservices/dubai-rest/#/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                {language === "en" ? "Visit Website" : "زيارة الموقع"}
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Dubai Section */}
      <section
        id="why-dubai"
        className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">
                {language === "en" ? "Why Dubai? Dubai by Numbers" : "ليش دبي؟ دبي بالأرقام"}
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-8">
              {language === "en"
                ? "Before you start your investment, let me be honest with you: If you're a real investor, dreaming of a better future, and ready to take a smart step, Dubai is the golden opportunity that doesn't repeat."
                : "قبل ما تبدأ استثمارك، خليني أكون صريح معك: لو أنت مستثمر حقيقي، بتحلم بمستقبل أفضل، ومستعد تخطو خطوة ذكية، فدبي هي الفرصة الذهبية يلي ما بتتكرر."}
            </p>
            <p className="text-blue-400 text-lg font-semibold">
              {language === "en"
                ? "7 numbers and reasons that prove why Dubai is the top destination for investors worldwide:"
                : "7 أرقام وأسباب بتثبت ليش دبي هي الوجهة الأولى للمستثمرين حول العالم:"}
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                number: "0%",
                title: language === "en" ? "Income Tax" : "ضرائب على الدخل",
                description:
                  language === "en"
                    ? "Every dirham you earn stays yours"
                    : "كل درهم بتربحه يظل إلك",
              },
              {
                number: "6-9%",
                title: language === "en" ? "Annual ROI" : "عائد استثماري سنوي",
                description:
                  language === "en"
                    ? "Continuous income from your real estate investment"
                    : "دخل مستمر من استثمارك العقاري",
              },
              {
                number: "100%",
                title: language === "en" ? "Foreign Ownership" : "ملكية للأجانب",
                description:
                  language === "en"
                    ? "Your home in your name, with investor residency"
                    : "بيتك باسمك، مع إقامة مستثمر",
              },
              {
                number: "200+",
                title: language === "en" ? "Nationalities" : "جنسية",
                description:
                  language === "en"
                    ? "Living together without complications"
                    : "عايشة مع بعض بدون تعقيد",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-blue-400 mb-2">{stat.title}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Trophy,
                title:
                  language === "en"
                    ? "Golden Visa & Long-term Visas"
                    : "إقامة ذهبية وتأشيرات طويلة الأمد",
                description:
                  language === "en"
                    ? "Your investment protects you and your family"
                    : "استثمارك يحميك ويحمي عيلتك",
              },
              {
                icon: Shield,
                title: language === "en" ? "Safe & Sophisticated City" : "مدينة آمنة وراقية",
                description: language === "en" ? "With a luxurious lifestyle" : "مع نمط حياة فاخر",
              },
              {
                icon: Globe,
                title: language === "en" ? "Global Strategic Location" : "موقع استراتيجي عالمي",
                description: language === "en" ? "Easy travel anywhere" : "سهولة السفر لأي مكان",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-blue-400">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center">
            <div className="mb-8">
              <p className="text-xl text-red-400 font-bold mb-4">
                🔥{" "}
                {language === "en"
                  ? "The opportunity is in front of you, and those who started long ago now have steady income and real estate assets."
                  : "الفرصة قدامك، واللي بلّشوا من زمان صار عندهم دخل ثابت وأصول عقارية حقيقية."}
              </p>
              <p className="text-2xl font-bold text-white mb-6">
                {language === "en" ? "What are you waiting for?" : "شو ناطر؟"}
              </p>
            </div>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-600 px-8 py-4 rounded-full text-lg font-bold text-white hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <span>
                {language === "en"
                  ? "Start Your Investment Journey With Me Today"
                  : "ابدأ رحلتك الاستثمارية معي اليوم"}
              </span>
              <Phone className="w-5 h-5" />
            </motion.a>
          </motion.div>{" "}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">
                {language === "en" ? "Frequently Asked Questions" : "الأسئلة الشائعة (الإعتراضات)"}
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto">
              {language === "en"
                ? "Common questions and inquiries from investors"
                : "الأسئلة الشائعة والاستفسارات من المستثمرين"}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8">
            {[
              {
                question:
                  language === "en"
                    ? "Is there real demand for real estate in Dubai?"
                    : "هل في طلب حقيقي على العقارات في دبي؟",
                answer:
                  language === "en"
                    ? "Yes, Dubai enjoys an active real estate market with continuous demand from residents and tenants. Due to population growth, strong infrastructure, and welcoming foreign investors, demand for rental and purchase is constant and stable."
                    : "نعم، دبي تتمتع بسوق عقاري نشط مع طلب مستمر من السكان والمستأجرين. بسبب النمو السكاني، والبنية التحتية القوية، واحتضان المستثمرين الأجانب، الطلب على الإيجار والشراء دائم ومستقر.",
              },
              {
                question:
                  language === "en"
                    ? "Will anyone rent my property after delivery?"
                    : "هل في حد بيستأجر عقاري بعد التسليم؟",
                answer:
                  language === "en"
                    ? "Yes, Dubai's rental market is very strong, especially in prime areas. You can rely on stable rental income after receiving the property, with property management companies helping you rent the property effortlessly."
                    : "نعم، سوق الإيجارات في دبي قوي جداً، وخاصة في المناطق الحيوية. يمكنك الاعتماد على دخل إيجاري ثابت بعد استلام العقار، مع وجود شركات إدارة عقارية تساعدك في تأجير العقار بدون عناء.",
              },
              {
                question:
                  language === "en"
                    ? "How can I guarantee my investment? Will the developer deliver on time and with required quality?"
                    : "كيف بضمان استثماري؟ هل المطور بيسلمني المشروع على الوقت وبالجودة المطلوبة؟",
                answer:
                  language === "en"
                    ? "Dubai Land Department imposes strict laws on developers, including having an escrow account that guarantees project completion and delivery. Additionally, official contracts protect your rights, and you can track the project through official apps like Dubai REST."
                    : "دائرة الأراضي والأملاك في دبي تفرض قوانين صارمة على المطورين، ومنها وجود حساب ضمان (Escrow Account) يضمن استكمال المشروع وتسليمه. بالإضافة، العقود الرسمية تضمن حقوقك، ويمكنك متابعة المشروع من خلال تطبيقات رسمية مثل Dubai REST.",
              },
              {
                question:
                  language === "en"
                    ? "Do I need to be a resident or present in Dubai to invest?"
                    : "هل لازم أكون مقيم أو موجود في دبي للاستثمار؟",
                answer:
                  language === "en"
                    ? "No, it's not necessary to be a resident or present in Dubai to invest. You can manage your investment remotely through certified agents and professional property management services."
                    : "لا، ليس من الضروري أن تكون مقيمًا أو متواجدًا في دبي للاستثمار. يمكنك إدارة استثمارك عن بعد من خلال وكلاء معتمدين وخدمات إدارة عقارات محترفة.",
              },
              {
                question:
                  language === "en"
                    ? "Is ownership free for all nationalities?"
                    : "هل التملك حر لجميع الجنسيات؟",
                answer:
                  language === "en"
                    ? "Yes, Dubai allows 100% freehold ownership for foreigners in designated areas, with full government protection and clear rights."
                    : "نعم، دبي تتيح التملك الحر 100% للأجانب في المناطق المخصصة لذلك، مع حماية كاملة من الحكومة وحقوق واضحة.",
              },
              {
                question:
                  language === "en"
                    ? "Is my investment legally guaranteed?"
                    : "هل استثماري مضمون من ناحية القوانين؟",
                answer:
                  language === "en"
                    ? "Yes, Dubai provides a transparent and regulated legal environment to protect investors, with real estate market regulation laws and direct supervision from the Land Department."
                    : "نعم، دبي توفر بيئة قانونية شفافة ومحكمة لحماية المستثمرين، مع قوانين تنظيم السوق العقاري والإشراف المباشر من دائرة الأراضي.",
              },
              {
                question:
                  language === "en"
                    ? "Do I need prior experience or knowledge of real estate investment in Dubai?"
                    : "هل أحتاج خبرة أو معرفة مسبقة بالاستثمار العقاري في دبي؟",
                answer:
                  language === "en"
                    ? "No, our role as consultants is to guide you step by step and provide all the necessary support to make sound investment decisions."
                    : "لا، دورنا كمستشارين هو توجيهك خطوة بخطوة، وتقديم كل الدعم اللازم لاتخاذ قرارات استثمارية صحيحة.",
              },
              {
                question:
                  language === "en"
                    ? "Can I sell or exit the investment easily?"
                    : "هل ممكن أبيع أو أخرج من الاستثمار بسهولة؟",
                answer:
                  language === "en"
                    ? "Yes, Dubai's real estate market is very liquid with demand for property purchases, especially in prime areas. There are also options for easy resale through a wide network of buyers."
                    : "نعم، سوق دبي العقاري سيّال جداً ويوجد طلب على شراء العقارات، خاصة في المناطق الرئيسية. كما أن هناك خيارات لإعادة البيع بسهولة عبر شبكة واسعة من المشترين.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-gradient-to-br from-blue-600/5 to-purple-600/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-semibold text-blue-400 `}>{faq.question}</h3>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p
                    className={`text-gray-300 leading-relaxed `}
                    dir={language === "ar" ? "rtl" : "ltr"}>
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16">
            <p className="text-lg text-gray-300 mb-6">
              {language === "en"
                ? "Still have questions? Let's discuss your investment opportunities."
                : "لسه عندك أسئلة؟ يلا نناقش فرصك الاستثمارية."}
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <span>
                {language === "en" ? "Get Your Questions Answered" : "احصل على إجابات لأسئلتك"}
              </span>
              <Phone className="w-5 h-5" />
            </motion.a>
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
                <p className="text-gray-300 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
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

      {/* Construction Companies Section */}
      <section id="developers" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">شركات الإنشاء</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto">
              {language === "en"
                ? "Leading real estate developers in Dubai with their official websites"
                : "أكبر شركات التطوير العقاري في دبي مع روابط مواقعهم الرسمية"}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                name: "اعمار",
                url: "https://properties.emaar.com/ar/",
                englishName: "Emaar",
              },
              {
                name: "نخيل",
                url: "https://nakheeldevelopments.com/ar/home-page/",
                englishName: "Nakheel",
              },
              {
                name: "ميراس",
                url: "https://marasdev.com/",
                englishName: "Meraas",
              },
              {
                name: "امنيات",
                url: "https://www.omniyat.com/",
                englishName: "Omniyat",
              },
              {
                name: "شوبا",
                url: "https://sobharealty.com/ar/",
                englishName: "Sobha",
              },
              {
                name: "داماك",
                url: "https://www.damacproperties.com/ar/",
                englishName: "Damac",
              },
              {
                name: "بن غاطي",
                url: "https://binghatti-realestate.com/",
                englishName: "Binghatti",
              },
              {
                name: "امتياز",
                url: "https://imtiaz.ae/",
                englishName: "Imtiaz",
              },
              {
                name: "سمانا",
                url: "https://www.samanadevelopers.com/",
                englishName: "Samana",
              },
              {
                name: "عزيزي",
                url: "https://www.azizidevelopments.com/ar",
                englishName: "Azizi",
              },
              {
                name: "شركة HRE",
                url: "https://hredevelopment.com/",
                englishName: "HRE Development",
              },
            ].map((company, index) => (
              <motion.div key={index} variants={fadeInUp} className="group">
                <motion.a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-2xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/5"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}>
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors mb-2">
                        {company.name}
                      </h3>
                      <p className="text-sm text-gray-400 flex items-center justify-center gap-1">
                        <ExternalLink className="w-3 h-3" />
                        {language === "en" ? "Visit Website" : "زيارة الموقع"}
                      </p>
                    </div>
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16">
            <p className="text-lg text-gray-300 mb-6">
              {language === "en"
                ? "Ready to explore investment opportunities with these leading developers?"
                : "مستعد تستكشف الفرص الاستثمارية مع هذه الشركات الرائدة؟"}
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <span>
                {language === "en" ? "Get Investment Consultation" : "احصل على استشارة استثمارية"}
              </span>
              <Phone className="w-5 h-5" />
            </motion.a>
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
