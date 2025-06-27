"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  isLoading?: boolean;
  type?: "danger" | "warning" | "info";
}

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  isLoading = false,
  type = "danger",
}: ConfirmModalProps) {
  const typeColors = {
    danger: {
      icon: "text-red-400",
      button: "from-red-600 to-red-700 hover:from-red-700 hover:to-red-800",
      border: "border-red-500/20",
    },
    warning: {
      icon: "text-yellow-400",
      button: "from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800",
      border: "border-yellow-500/20",
    },
    info: {
      icon: "text-blue-400",
      button: "from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
      border: "border-blue-500/20",
    },
  };

  const colors = typeColors[type];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`relative w-full max-w-md p-6 rounded-2xl bg-gradient-to-br from-gray-900/95 to-black/95 border ${colors.border} backdrop-blur-xl shadow-2xl`}
            onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={onClose}
              disabled={isLoading}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <X className="w-5 h-5" />
            </button>

            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-800/50">
              <AlertTriangle className={`w-8 h-8 ${colors.icon}`} />
            </div>

            {/* Content */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-300 leading-relaxed">{message}</p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                disabled={isLoading}
                className="flex-1 px-4 py-3 rounded-lg font-semibold text-gray-300 bg-gray-700/50 hover:bg-gray-600/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                {cancelText}
              </button>

              <button
                onClick={onConfirm}
                disabled={isLoading}
                className={`flex-1 px-4 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${colors.button} transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}>
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  confirmText
                )}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
