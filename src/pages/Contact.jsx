import React from "react";
import { FiSend } from "react-icons/fi";

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const occasion = formData.get("occasion");
    const message = formData.get("message");

    const whatsappNumber = "919080759896"; // 🔥 REPLACE WITH YOUR NUMBER (no +)

    const text = `
Hello! I would like to place a custom order.

Name: ${name}
Email: ${email}
Occasion: ${occasion}
Message: ${message}
    `;

    const encodedText = encodeURIComponent(text);

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedText}`,
      "_blank"
    );

    e.target.reset(); // reset form after sending
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-rose-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="w-full md:w-2/5 bg-gray-900 text-white p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-serif font-bold mb-4">
                Let's Craft Something!
              </h2>
              <p className="text-gray-300 mb-8">
                Have a birthday coming up? Want a surprise box? Fill out the form and let's discuss your custom order.
              </p>

              <div className="space-y-4 text-sm text-gray-300">
                <p>Location: Kumbakonam, Tamilnadu</p>
              </div>
            </div>

            <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-rose-500 rounded-full opacity-20"></div>
            <div className="absolute bottom-[-20px] left-[-20px] w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
          </div>

          {/* Form Side */}
          <div className="w-full md:w-3/5 p-10">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter Your Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Occasion
                </label>
                <select
                  name="occasion"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all"
                >
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Surprise Gift</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell us about your idea..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-colors shadow-lg shadow-green-200 flex items-center justify-center gap-2"
              >
                Send via WhatsApp <FiSend />
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
