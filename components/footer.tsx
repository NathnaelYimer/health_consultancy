import Link from "next/link"
import { Facebook, Linkedin, Youtube, Twitter, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 py-16 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Brand / About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white/10 p-3 hover:bg-primary transition-all duration-300 hover:scale-110">
                <span className="font-bold text-lg">DA</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Dr. Abel Health Consulting</h3>
                <p className="text-sm text-slate-300">Evidence-based consultancy for policy, practice, and people.</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              We help organisations translate health evidence into policy and practice across Ethiopia and beyond.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <Link href="#" aria-label="Facebook" className="p-2 rounded-lg bg-white/5 hover:bg-primary hover:scale-110 transition-all duration-300">
                <Facebook className="h-5 w-5 text-slate-100" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/5 hover:bg-primary hover:scale-110 transition-all duration-300">
                <Linkedin className="h-5 w-5 text-slate-100" />
              </Link>
              <Link href="#" aria-label="YouTube" className="p-2 rounded-lg bg-white/5 hover:bg-primary hover:scale-110 transition-all duration-300">
                <Youtube className="h-5 w-5 text-slate-100" />
              </Link>
              <Link href="#" aria-label="Twitter" className="p-2 rounded-lg bg-white/5 hover:bg-primary hover:scale-110 transition-all duration-300">
                <Twitter className="h-5 w-5 text-slate-100" />
              </Link>
              <Link href="#" aria-label="Instagram" className="p-2 rounded-lg bg-white/5 hover:bg-primary hover:scale-110 transition-all duration-300">
                <Instagram className="h-5 w-5 text-slate-100" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-1">
            <div>
              <h4 className="font-semibold mb-4 text-lg">Explore</h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>
                  <Link href="/about" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">About</Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Projects</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Services</Link>
                </li>
                <li>
                  <Link href="/publications" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Publications</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Legal & Help</h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>
                  <Link href="/privacy" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Privacy</Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Terms</Link>
                </li>
                <li>
                  <Link href="/data-protection" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Data Protection</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter / Contact */}
          <div className="lg:pt-2">
            <h4 className="font-semibold mb-3 text-lg">Stay Connected</h4>
            <p className="text-sm text-slate-300 mb-4">Sign up for our newsletter or follow us on social media</p>

            <form action="/api/contact" method="post" className="flex flex-col sm:flex-row gap-3 mb-6">
              <input type="hidden" name="type" value="newsletter" />
              <label htmlFor="email" className="sr-only">Email</label>
              <input id="email" name="email" type="email" required placeholder="Enter your email" className="flex-1 rounded-lg border-2 border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all" />
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Mail className="h-4 w-4" /> Subscribe
              </button>
            </form>

            <div className="mt-6 text-sm text-slate-300">
              <p className="font-medium mb-3">Follow us on:</p>
              <div className="flex items-center gap-3 mb-4">
                <Link href="#" aria-label="Facebook" className="inline-flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-primary hover:scale-110 transition-all duration-300">
                  <Facebook className="h-5 w-5 text-slate-100" /> <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" aria-label="LinkedIn" className="inline-flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-primary hover:scale-110 transition-all duration-300">
                  <Linkedin className="h-5 w-5 text-slate-100" /> <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" aria-label="YouTube" className="inline-flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-primary hover:scale-110 transition-all duration-300">
                  <Youtube className="h-5 w-5 text-slate-100" /> <span className="sr-only">YouTube</span>
                </Link>
              </div>

              <div className="mt-4 space-y-1">
                <p className="font-medium">Hawassa, Ethiopia</p>
                <p>Phone: <a href="tel:+251912445575" className="hover:text-white transition-colors">+251 912 445575</a></p>
                <p>Email: <a href="mailto:abel.gedefaw@yahoo.com" className="hover:text-white transition-colors">abel.gedefaw@yahoo.com</a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t-2 border-white/10 pt-6 text-center text-sm text-slate-400">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p>&copy; {new Date().getFullYear()} Dr. Abel Health Consulting. All rights reserved.</p>
            <p className="flex items-center gap-2">
              <span>Built with care</span>
              <span className="text-primary">·</span>
              <span>Designed for impact</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
