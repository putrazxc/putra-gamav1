import { Linkedin, Instagram, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white py-32 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="
          bg-[#F8F8F9]
          rounded-3xl
          p-12
          border border-gray-200
        ">

          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#111439]">
              Let’s Work Together
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl">
              Interested in collaborating, hiring, or discussing a project?
              Reach me through any platform below.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/putragama"
              target="_blank"
              className="group bg-white rounded-2xl p-6 border hover:shadow-lg transition"
            >
              <Linkedin className="text-blue-600 mb-4" />
              <h3 className="font-semibold text-[#111439]">LinkedIn</h3>
              <p className="text-sm text-gray-500">
                Professional profile
              </p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6287845333239"
              target="_blank"
              className="group bg-white rounded-2xl p-6 border hover:shadow-lg transition"
            >
              <Phone className="text-green-500 mb-4" />
              <h3 className="font-semibold text-[#111439]">WhatsApp</h3>
              <p className="text-sm text-gray-500">
                Quick chat & discussion
              </p>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/ptrgama_"
              target="_blank"
              className="group bg-white rounded-2xl p-6 border hover:shadow-lg transition"
            >
              <Instagram className="text-pink-500 mb-4" />
              <h3 className="font-semibold text-[#111439]">Instagram</h3>
              <p className="text-sm text-gray-500">
                Personal & tech content
              </p>
            </a>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=putragamas2002@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Putra,%0A%0AI%20am%20interested%20in%20working%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 border hover:shadow-lg transition"
            >
              <Mail className="text-gray-700 mb-4" />
              <h3 className="font-semibold text-[#111439]">Email</h3>
              <p className="text-sm text-gray-500">
                Send me an email via Gmail
              </p>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
