const Contact = () => {
  const contactInfo = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      detail: "mingduo@berkeley.edu",
      link: "mailto:mingduo@berkeley.edu",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Office",
      detail: "Berkeley Haas School of Business\nBerkeley, CA 94720",
      link: "https://maps.google.com/?q=Berkeley+Haas+School+of+Business",
      color: "from-green-500 to-green-600",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H8a2 2 0 00-2-2V6m8 0H8m0 0v-.5A1.5 1.5 0 019.5 4h5A1.5 1.5 0 0116 5.5V6m-8 0H8"
          />
        </svg>
      ),
      title: "LinkedIn",
      detail: "Connect on LinkedIn",
      link: "https://linkedin.com/in/mingduo-zhao",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "CV",
      detail: "Download full CV",
      link: "/CV (4).pdf",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const availableFor = [
    "Research Collaborations",
    "Guest Lectures",
    "Workshop Presentations",
    "Academic Consulting",
    "Peer Review",
    "Conference Discussions",
  ];

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Let's Connect
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary-400 to-purple-400 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in discussing research opportunities,
            collaborations, and sharing insights about digital marketing and
            consumer behavior.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                Get in Touch
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    target={
                      contact.link.startsWith("http") ? "_blank" : "_self"
                    }
                    rel={
                      contact.link.startsWith("http")
                        ? "noopener noreferrer"
                        : ""
                    }
                    className="group block bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 touch-manipulation"
                  >
                    <div
                      className={`inline-flex p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${contact.color} text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {contact.icon}
                    </div>
                    <h4 className="text-base sm:text-lg font-bold mb-2">
                      {contact.title}
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                      {contact.detail}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* Available For */}
            <div>
              <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Available For
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {availableFor.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Send a Message
            </h3>
            <form className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 focus:outline-none transition-colors text-sm sm:text-base"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 focus:outline-none transition-colors resize-vertical text-sm sm:text-base"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-purple-500 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:from-primary-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 touch-manipulation text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Other Ways to Connect
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="mailto:mingduo@berkeley.edu"
                className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors touch-manipulation"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm sm:text-base">Direct Email</span>
              </a>
              <div className="hidden sm:block w-px h-6 bg-white/20"></div>
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors touch-manipulation"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="text-sm sm:text-base">CV</span>
              </a>
              <div className="hidden sm:block w-px h-6 bg-white/20"></div>
              <span className="text-gray-400 text-sm sm:text-base">
                Response within 24-48 hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
