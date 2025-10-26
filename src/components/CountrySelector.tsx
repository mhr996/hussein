"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Country {
  name: string;
  code: string;
  dialCode: string;
}

const getFlagUrl = (code: string) =>
  `https://catamphetamine.gitlab.io/country-flag-icons/3x2/${code}.svg`;

const countries: Country[] = [
  { name: "الإمارات", code: "AE", dialCode: "+971" },
  { name: "السعودية", code: "SA", dialCode: "+966" },
  { name: "قطر", code: "QA", dialCode: "+974" },
  { name: "الكويت", code: "KW", dialCode: "+965" },
  { name: "البحرين", code: "BH", dialCode: "+973" },
  { name: "عمان", code: "OM", dialCode: "+968" },
  { name: "مصر", code: "EG", dialCode: "+20" },
  { name: "الأردن", code: "JO", dialCode: "+962" },
  { name: "لبنان", code: "LB", dialCode: "+961" },
  { name: "العراق", code: "IQ", dialCode: "+964" },
  { name: "سوريا", code: "SY", dialCode: "+963" },
  { name: "المغرب", code: "MA", dialCode: "+212" },
  { name: "الجزائر", code: "DZ", dialCode: "+213" },
  { name: "تونس", code: "TN", dialCode: "+216" },
  { name: "ليبيا", code: "LY", dialCode: "+218" },
  { name: "السودان", code: "SD", dialCode: "+249" },
  { name: "فلسطين", code: "PS", dialCode: "+970" },
  { name: "اليمن", code: "YE", dialCode: "+967" },
  { name: "تركيا", code: "TR", dialCode: "+90" },
  { name: "أفغانستان", code: "AF", dialCode: "+93" },
  { name: "ألبانيا", code: "AL", dialCode: "+355" },
  { name: "أرمينيا", code: "AM", dialCode: "+374" },
  { name: "الأرجنتين", code: "AR", dialCode: "+54" },
  { name: "أستراليا", code: "AU", dialCode: "+61" },
  { name: "النمسا", code: "AT", dialCode: "+43" },
  { name: "أذربيجان", code: "AZ", dialCode: "+994" },
  { name: "بنغلاديش", code: "BD", dialCode: "+880" },
  { name: "بلجيكا", code: "BE", dialCode: "+32" },
  { name: "البرازيل", code: "BR", dialCode: "+55" },
  { name: "كندا", code: "CA", dialCode: "+1" },
  { name: "سويسرا", code: "CH", dialCode: "+41" },
  { name: "الصين", code: "CN", dialCode: "+86" },
  { name: "كولومبيا", code: "CO", dialCode: "+57" },
  { name: "ألمانيا", code: "DE", dialCode: "+49" },
  { name: "الدنمارك", code: "DK", dialCode: "+45" },
  { name: "إسبانيا", code: "ES", dialCode: "+34" },
  { name: "إثيوبيا", code: "ET", dialCode: "+251" },
  { name: "فنلندا", code: "FI", dialCode: "+358" },
  { name: "فرنسا", code: "FR", dialCode: "+33" },
  { name: "بريطانيا", code: "GB", dialCode: "+44" },
  { name: "جورجيا", code: "GE", dialCode: "+995" },
  { name: "اليونان", code: "GR", dialCode: "+30" },
  { name: "هونغ كونغ", code: "HK", dialCode: "+852" },
  { name: "كرواتيا", code: "HR", dialCode: "+385" },
  { name: "المجر", code: "HU", dialCode: "+36" },
  { name: "إندونيسيا", code: "ID", dialCode: "+62" },
  { name: "أيرلندا", code: "IE", dialCode: "+353" },
  { name: "إسرائيل", code: "IL", dialCode: "+972" },
  { name: "الهند", code: "IN", dialCode: "+91" },
  { name: "إيران", code: "IR", dialCode: "+98" },
  { name: "أيسلندا", code: "IS", dialCode: "+354" },
  { name: "إيطاليا", code: "IT", dialCode: "+39" },
  { name: "اليابان", code: "JP", dialCode: "+81" },
  { name: "كينيا", code: "KE", dialCode: "+254" },
  { name: "كوريا الجنوبية", code: "KR", dialCode: "+82" },
  { name: "كازاخستان", code: "KZ", dialCode: "+7" },
  { name: "سريلانكا", code: "LK", dialCode: "+94" },
  { name: "ليتوانيا", code: "LT", dialCode: "+370" },
  { name: "لوكسمبورغ", code: "LU", dialCode: "+352" },
  { name: "لاتفيا", code: "LV", dialCode: "+371" },
  { name: "موريشيوس", code: "MU", dialCode: "+230" },
  { name: "المالديف", code: "MV", dialCode: "+960" },
  { name: "المكسيك", code: "MX", dialCode: "+52" },
  { name: "ماليزيا", code: "MY", dialCode: "+60" },
  { name: "نيجيريا", code: "NG", dialCode: "+234" },
  { name: "هولندا", code: "NL", dialCode: "+31" },
  { name: "النرويج", code: "NO", dialCode: "+47" },
  { name: "نيوزيلندا", code: "NZ", dialCode: "+64" },
  { name: "باكستان", code: "PK", dialCode: "+92" },
  { name: "بولندا", code: "PL", dialCode: "+48" },
  { name: "البرتغال", code: "PT", dialCode: "+351" },
  { name: "رومانيا", code: "RO", dialCode: "+40" },
  { name: "صربيا", code: "RS", dialCode: "+381" },
  { name: "روسيا", code: "RU", dialCode: "+7" },
  { name: "السويد", code: "SE", dialCode: "+46" },
  { name: "سنغافورة", code: "SG", dialCode: "+65" },
  { name: "سلوفينيا", code: "SI", dialCode: "+386" },
  { name: "سلوفاكيا", code: "SK", dialCode: "+421" },
  { name: "تايلاند", code: "TH", dialCode: "+66" },
  { name: "أوكرانيا", code: "UA", dialCode: "+380" },
  { name: "أمريكا", code: "US", dialCode: "+1" },
  { name: "فيتنام", code: "VN", dialCode: "+84" },
  { name: "جنوب أفريقيا", code: "ZA", dialCode: "+27" },
];

interface CountrySelectorProps {
  value: Country;
  onChange: (country: Country) => void;
}

export default function CountrySelector({
  value,
  onChange,
}: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.includes(searchQuery) ||
      country.dialCode.includes(searchQuery) ||
      country.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-4 hover:bg-white/5 transition-colors duration-200 h-full"
      >
        <img
          src={getFlagUrl(value.code)}
          alt={value.name}
          className="w-6 h-4 object-cover rounded-sm shadow-sm"
        />
        <span className="font-semibold text-white text-sm whitespace-nowrap">
          {value.dialCode}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-gray-300 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[100] md:hidden"
              onClick={() => {
                setIsOpen(false);
                setSearchQuery("");
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="fixed md:h-[270px] md:absolute left-1/2 md:left-0 top-1/2 md:top-auto md:bottom-full -translate-x-1/2 md:translate-x-0 -translate-y-3/4 md:translate-y-0 w-[100%] md:w-80 max-w-md md:max-w-none bg-white rounded-xl shadow-2xl border border-gray-200 z-[101] overflow-hidden md:mb-2"
              dir="ltr"
            >
              {/* Search Box */}
              <div className="p-3 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 relative z-10">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search country..."
                    className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm relative z-10 text-gray-900"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>

              {/* Countries List */}
              <div
                className="max-h-64 overflow-y-auto"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#3b82f6 #f3f4f6",
                }}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    width: 8px;
                  }
                  div::-webkit-scrollbar-track {
                    background: #f3f4f6;
                  }
                  div::-webkit-scrollbar-thumb {
                    background: #3b82f6;
                    border-radius: 4px;
                  }
                  div::-webkit-scrollbar-thumb:hover {
                    background: #2563eb;
                  }
                `}</style>
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((country) => (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => {
                        onChange(country);
                        setIsOpen(false);
                        setSearchQuery("");
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors duration-150 text-left ${
                        value.code === country.code
                          ? "bg-blue-100 border-l-4 border-blue-500"
                          : ""
                      }`}
                    >
                      <img
                        src={getFlagUrl(country.code)}
                        alt={country.name}
                        className="w-7 h-5 object-cover rounded shadow-sm"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-slate-800 text-sm">
                          {country.name}
                        </div>
                      </div>
                      <div className="font-semibold text-blue-600 text-sm">
                        {country.dialCode}
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-8 text-center text-gray-500">
                    No results found
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export { countries };
export type { Country };
