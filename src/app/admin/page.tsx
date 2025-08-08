"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Download,
  Search,
  Calendar,
  User,
  Mail,
  Phone,
  MessageSquare,
  Trash2,
} from "lucide-react";
import ConfirmModal from "../../components/ConfirmModal";
import { adminContent } from "../../content/admin-arabic";

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [deleteLoading, setDeleteLoading] = useState<number | null>(null);
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    contactId: number | null;
    contactName: string;
  }>({
    isOpen: false,
    contactId: null,
    contactName: "",
  });

  useEffect(() => {
    if (searchTerm) {
      const filtered = contacts.filter(
        (contact) =>
          contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.phone.includes(searchTerm) ||
          contact.message.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredContacts(filtered);
    } else {
      setFilteredContacts(contacts);
    }
  }, [searchTerm, contacts]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true);
        setContacts(data.contacts);
        // Store password for delete operations
        localStorage.setItem("adminPassword", password);
        setPassword("");
      } else {
        setError(data.error || adminContent.login.authenticationFailed);
      }
    } catch {
      setError(adminContent.login.networkError);
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (contactId: number) => {
    setDeleteLoading(contactId);
    setError("");

    try {
      const adminPassword = localStorage.getItem("adminPassword");
      const response = await fetch("/api/admin/contacts/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: adminPassword,
          contactId,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Remove the contact from the local state
        setContacts((prev) =>
          prev.filter((contact) => contact.id !== contactId)
        );
        setError("");
        setConfirmModal({ isOpen: false, contactId: null, contactName: "" });
      } else {
        setError(data.error || adminContent.delete.deleteError);
      }
    } catch {
      setError(adminContent.login.networkError);
    } finally {
      setDeleteLoading(null);
    }
  };

  const handleDeleteClick = (contact: Contact) => {
    setConfirmModal({
      isOpen: true,
      contactId: contact.id,
      contactName: `${contact.firstName} ${contact.lastName}`,
    });
  };

  const handleConfirmDelete = () => {
    if (confirmModal.contactId) {
      deleteContact(confirmModal.contactId);
    }
  };

  const handleCancelDelete = () => {
    setConfirmModal({ isOpen: false, contactId: null, contactName: "" });
  };

  const exportToCSV = () => {
    const headers = [
      adminContent.table.headers.id,
      adminContent.table.headers.firstName,
      adminContent.table.headers.lastName,
      adminContent.table.headers.email,
      adminContent.table.headers.phone,
      adminContent.table.headers.message,
      adminContent.table.headers.date,
    ];
    const csvContent = [
      headers.join(","),
      ...filteredContacts.map((contact) =>
        [
          contact.id,
          `"${contact.firstName}"`,
          `"${contact.lastName}"`,
          `"${contact.email}"`,
          `"${contact.phone}"`,
          `"${contact.message.replace(/"/g, '""')}"`,
          `"${new Date(contact.createdAt).toLocaleString()}"`,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute(
        "download",
        `contacts_${new Date().toISOString().split("T")[0]}.csv`
      );
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md p-8 rounded-2xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/10 backdrop-blur-sm"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              {adminContent.login.title}
            </h1>
            <p className="text-gray-400">
              Enter password to view contact submissions
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={adminContent.login.passwordPlaceholder}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 focus:outline-none transition-colors pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm text-center"
              >
                {error}
              </motion.p>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading
                ? adminContent.login.authenticating
                : adminContent.login.loginButton}
            </motion.button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {adminContent.dashboard.title}
              </h1>
              <p className="text-gray-400">
                Total submissions: {contacts.length} | Showing:{" "}
                {filteredContacts.length}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={adminContent.dashboard.search}
                  className="pl-10 pr-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              <motion.button
                onClick={exportToCSV}
                className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                {adminContent.dashboard.export}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
          >
            <p className="text-red-400 text-sm">{error}</p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    ID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Name
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Message
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Date
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {filteredContacts.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-6 py-12 text-center text-gray-400"
                    >
                      {searchTerm
                        ? "No contacts found matching your search."
                        : "No contact submissions yet."}
                    </td>
                  </tr>
                ) : (
                  filteredContacts.map((contact, index) => (
                    <motion.tr
                      key={contact.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-gray-300">
                        #{contact.id}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          <div className="font-medium text-white">
                            {contact.firstName} {contact.lastName}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          {contact.email}
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={`tel:${contact.phone}`}
                          className="text-sm text-green-400 hover:text-green-300 transition-colors"
                        >
                          {contact.phone}
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-300 max-w-xs">
                          <div className="truncate" title={contact.message}>
                            {contact.message.length > 100
                              ? `${contact.message.substring(0, 100)}...`
                              : contact.message}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">
                        {formatDate(contact.createdAt)}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDeleteClick(contact)}
                          disabled={deleteLoading === contact.id}
                          className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Delete contact"
                        >
                          {deleteLoading === contact.id ? (
                            <div className="w-4 h-4 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <Trash2 className="w-4 h-4" />
                          )}
                        </button>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <button
            onClick={() => {
              setIsAuthenticated(false);
              setContacts([]);
              setSearchTerm("");
              localStorage.removeItem("adminPassword");
            }}
            className="text-gray-400 hover:text-white transition-colors underline"
          >
            {adminContent.dashboard.logout}
          </button>
        </motion.div>

        {/* Custom Confirm Modal */}
        <ConfirmModal
          isOpen={confirmModal.isOpen}
          onClose={handleCancelDelete}
          onConfirm={handleConfirmDelete}
          title={adminContent.delete.confirmTitle}
          message={`${adminContent.delete.confirmMessage} ${confirmModal.contactName}؟`}
          confirmText={adminContent.delete.confirmButton}
          cancelText={adminContent.delete.cancelButton}
          isLoading={deleteLoading !== null}
          type="danger"
        />
      </div>
    </div>
  );
}
