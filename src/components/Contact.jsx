
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Code2,
  Globe,
  Send,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  // Replace with Seijuro's actual email address
  const contactEmail = 'your.email@example.com'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

    setSubmitted(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent(formData.subject)

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )

    const mailtoLink = `mailto:${contactEmail}?subject=${subject}&body=${body}`

    window.location.href = mailtoLink

    setSubmitted(true)
  }

  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: contactEmail,
      href: `mailto:${contactEmail}`,
    },
    {
      icon: Globe,
      label: 'LinkedIn',
      value: 'Connect professionally',
      href: 'https://www.linkedin.com/',
    },
    {
      icon: Code2,
      label: 'GitHub',
      value: 'Explore my repositories',
      href: 'https://github.com/',
    },
  ]

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0b1220] px-6 py-24 lg:px-10"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-sky-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
            Get In Touch
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Let's Start a{' '}
            <span className="text-sky-400">
              Conversation
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            Have a project in mind, a question, or an opportunity?
            I'd be happy to connect and hear from you.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white">
                Let's Connect
              </h3>

              <p className="mt-4 max-w-md text-sm leading-8 text-slate-400">
                I'm open to professional conversations,
                collaborations, and opportunities where I
                can contribute my skills and continue growing.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactDetails.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[#111c30] p-5 transition-all duration-300 hover:border-sky-500/30 hover:bg-sky-500/[0.04]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-slate-500">
                        {item.label}
                      </p>

                      <p className="mt-1 truncate text-sm font-medium text-slate-200">
                        {item.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-slate-600 transition-colors group-hover:text-sky-400"
                    />
                  </a>
                )
              })}
            </div>

            {/* Availability */}
            <div className="flex items-center gap-3 border-t border-white/10 pt-6">
              <MapPin size={19} className="text-sky-400" />

              <span className="text-sm text-slate-400">
                Available for professional opportunities
              </span>
            </div>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-white/10 bg-[#0d1628] p-6 sm:p-8"
          >
            <div className="mb-7 flex items-center gap-3">
              <div className="rounded-lg bg-sky-500/10 p-3">
                <MessageCircle
                  size={22}
                  className="text-sky-400"
                />
              </div>

              <div>
                <h3 className="font-bold text-white">
                  Send a Message
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Fill out the form below to get in touch.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-white/10 bg-[#080d1a] px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-sky-500"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-white/10 bg-[#080d1a] px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-sky-500"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  className="w-full rounded-lg border border-white/10 bg-[#080d1a] px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-sky-500"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-lg border border-white/10 bg-[#080d1a] px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-sky-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/20"
              >
                Send Message
                <Send size={17} />
              </button>

              {submitted && (
                <p className="flex items-center gap-2 text-xs text-emerald-400">
                  <CheckCircle2 size={15} />
                  Your email application should open with your message.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
