"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";

export default function HomePage() {
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
      title: "Luxury Home Sales",
      description:
        "Exclusive access to Dubai's most prestigious properties and luxury developments.",
    },
    {
      icon: Key,
      title: "Property Management",
      description: "Comprehensive property management services for your real estate investments.",
    },
    {
      icon: TrendingUp,
      title: "Investment Consulting",
      description:
        "Expert guidance on Dubai's real estate market trends and investment opportunities.",
    },
    {
      icon: Building,
      title: "Commercial Real Estate",
      description: "Specialized services for commercial properties and business real estate needs.",
    },
  ];

  const achievements = [
    { number: "500+", label: "Properties Sold" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "$2B+", label: "Sales Volume" },
  ];

  const testimonials = [
    {
      name: "Sarah Al-Mansouri",
      role: "Property Investor",
      content:
        "Hussein helped me find the perfect investment property in Downtown Dubai. His expertise and dedication are unmatched.",
      rating: 5,
    },
    {
      name: "Michael Johnson",
      role: "Homebuyer",
      content:
        "Professional, knowledgeable, and always available. Hussein made our home buying process seamless and stress-free.",
      rating: 5,
    },
    {
      name: "Fatima Hassan",
      role: "Seller",
      content:
        "Sold my property above asking price within two weeks. Hussein's market knowledge is exceptional.",
      rating: 5,
    },
  ];

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
              Hussein Housh
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-blue-400 transition-colors">
                About
              </a>
              <a href="#services" className="hover:text-blue-400 transition-colors">
                Services
              </a>
              <a href="#testimonials" className="hover:text-blue-400 transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              Get In Touch
            </motion.a>
          </div>
        </div>
      </motion.nav>{" "}
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(156,146,172,0.15) 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 mb-8">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">HH</span>
              </div>
            </div>
          </motion.div>

          <motion.h1 {...fadeInUp} className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Hussein Housh</span>
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-4">
            Premier Real Estate Agent in Dubai
          </motion.p>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Transforming dreams into reality with unparalleled expertise in Dubai's luxury real
            estate market. Your trusted partner in finding the perfect property in the heart of the
            UAE.
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <Phone className="w-5 h-5" />
              Contact Me
            </motion.a>
            <motion.a
              href="#services"
              className="border-2 border-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              View Services
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div>
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
                About <span className="gradient-text">Hussein Housh</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                With over 15 years of experience in Dubai's dynamic real estate market, I have
                established myself as a trusted advisor for discerning clients seeking exceptional
                properties in the world's most vibrant city.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                My deep understanding of Dubai's neighborhoods, market trends, and luxury
                developments ensures that every client receives personalized service and achieves
                their real estate goals.
              </p>

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
              <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 flex items-center justify-center">
                <div className="text-8xl gradient-text font-bold">HH</div>
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
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Comprehensive real estate solutions tailored to meet your unique needs in Dubai's
              competitive market.
            </p>
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
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Don't just take my word for it. Here's what my satisfied clients have to say.
            </p>
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
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Ready to make your real estate dreams come true? Let's discuss how I can help you find
              the perfect property in Dubai.
            </p>
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
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <textarea
                  rows={4}
                  placeholder="Tell me about your real estate needs..."
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 focus:outline-none transition-colors resize-none"></textarea>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}>
                  Send Message
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
                    <div className="font-semibold">Phone</div>
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
                    <div className="font-semibold">Email</div>
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
                    <div className="font-semibold">Location</div>
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
                    <div className="font-semibold">Available</div>
                    <div className="text-gray-400">7 Days a Week</div>
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
            <div className="text-2xl font-bold gradient-text mb-4">Hussein Housh</div>
            <p className="text-gray-400 mb-4">Premier Real Estate Agent in Dubai</p>
            <p className="text-gray-500 text-sm">
              © 2025 Hussein Housh. All rights reserved. | Licensed Real Estate Professional
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
