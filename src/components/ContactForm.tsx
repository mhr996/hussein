"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { content } from "../content/arabic";
import { CheckCircle, AlertCircle } from "lucide-react";
import { useSuccessPopup } from "../contexts/SuccessPopupContext";
import CountrySelector, { countries, type Country } from "./CountrySelector";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormStatus {
  type: "success" | "error" | null;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<FormStatus>({ type: null, message: "" });
  const { setShowSuccessPopup } = useSuccessPopup();
  const [selectedCountry, setSelectedCountry] = useState<Country>(
    countries.find((c) => c.code === "AE") || countries[0]
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const fullPhoneNumber = `${selectedCountry.dialCode}${formData.phone}`;

      console.log("[CONTACT_FORM] Starting form submission...", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: fullPhoneNumber,
        hasMessage: !!formData.message,
      });

      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          phone: fullPhoneNumber,
        }),
      });

      console.log("[CONTACT_FORM] Response received:", {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
      });

      const data = await response.json();
      console.log("[CONTACT_FORM] Response data:", data);

      if (response.ok) {
        console.log("[CONTACT_FORM] Submission successful");
        setStatus({
          type: "success",
          message: content.contact.form.successMessage,
        });
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        // Show success popup
        setShowSuccessPopup(true);
      } else {
        console.log("[CONTACT_FORM] Submission failed with error:", data.error);
        setStatus({
          type: "error",
          message: data.error || content.contact.form.errorMessage,
        });
      }
    } catch (error) {
      console.error("[CONTACT_FORM] Network error:", error);
      setStatus({
        type: "error",
        message: content.contact.form.networkError,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {status.type && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-2xl flex items-center gap-4 backdrop-blur-sm border-2 ${
            status.type === "success"
              ? "bg-green-500/20 border-green-400/40 text-green-100"
              : "bg-red-500/20 border-red-400/40 text-red-100"
          }`}
        >
          {status.type === "success" ? (
            <CheckCircle className="w-6 h-6 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-6 h-6 flex-shrink-0" />
          )}
          <span className="font-medium text-lg">{status.message}</span>
        </motion.div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          className="relative group"
          whileFocus={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder={content.contact.form.firstName}
            className="w-full px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-lg border-2 border-white/20 focus:border-blue-400/60 focus:bg-white/20 focus:outline-none transition-all duration-300 text-white placeholder-gray-300 text-lg shadow-xl group-hover:shadow-2xl flex items-center"
            style={{ lineHeight: "2", minHeight: "56px" }}
            required
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </motion.div>

        <motion.div
          className="relative group"
          whileFocus={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder={content.contact.form.lastName}
            className="w-full px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-lg border-2 border-white/20 focus:border-blue-400/60 focus:bg-white/20 focus:outline-none transition-all duration-300 text-white placeholder-gray-300 text-lg shadow-xl group-hover:shadow-2xl flex items-center"
            style={{ lineHeight: "2", minHeight: "56px" }}
            required
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          className="relative group"
          whileFocus={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={content.contact.form.email}
            className="w-full px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-lg border-2 border-white/20 focus:border-blue-400/60 focus:bg-white/20 focus:outline-none transition-all duration-300 text-white placeholder-gray-300 text-lg shadow-xl group-hover:shadow-2xl flex items-center"
            style={{ lineHeight: "2", minHeight: "56px" }}
            required
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </motion.div>

        <motion.div
          className="relative group"
          whileFocus={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative w-full rounded-2xl bg-white/10 backdrop-blur-lg border-2 border-white/20 focus-within:border-blue-400/60 focus-within:bg-white/20 transition-all duration-300 shadow-xl group-hover:shadow-2xl">
            <div className="flex items-center" dir="ltr">
              <div className="flex-shrink-0 border-l border-white/20 self-stretch flex items-center">
                <CountrySelector
                  value={selectedCountry}
                  onChange={setSelectedCountry}
                />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="501234567"
                className="flex-1 px-6 py-4 bg-transparent border-none focus:outline-none text-white placeholder-gray-400 text-lg"
                style={{ lineHeight: "2", minHeight: "56px" }}
                required
              />
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="relative group"
        whileFocus={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <textarea
          rows={6}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={content.contact.form.message}
          className="w-full px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-lg border-2 border-white/20 focus:border-blue-400/60 focus:bg-white/20 focus:outline-none transition-all duration-300 text-white placeholder-gray-300 text-lg resize-none shadow-xl group-hover:shadow-2xl"
          style={{ lineHeight: "1.4" }}
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </motion.div>

      <motion.div className="relative">
        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl"
          animate={{ scale: [1, 1.02, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.button
          type="submit"
          disabled={loading}
          className="relative w-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 text-white px-10 py-6 rounded-2xl text-xl font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl hover:shadow-blue-500/25 border-2 border-white/20"
          whileHover={{ scale: loading ? 1 : 1.02, y: loading ? 0 : -2 }}
          whileTap={{ scale: loading ? 1 : 0.98 }}
        >
          <div className="flex items-center justify-center gap-3">
            {loading && (
              <motion.div
                className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            )}
            <span>
              {loading
                ? content.contact.form.sending
                : content.contact.form.submit}
            </span>
            {!loading && (
              <motion.div
                className="w-3 h-3 bg-white rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </div>
        </motion.button>
        <p className="mt-3 text-xs text-center">معلوماتك سرية 100%</p>
      </motion.div>
    </form>
  );
}
