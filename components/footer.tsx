import Link from "next/link"
import { Facebook, Linkedin, Youtube, Twitter, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <div className="container mx-auto px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Brand / About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white/10 p-3">
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
              <Link href="#" aria-label="Facebook" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition">
                <Facebook className="h-5 w-5 text-slate-100" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition">
                <Linkedin className="h-5 w-5 text-slate-100" />
              </Link>
              <Link href="#" aria-label="YouTube" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition">
                <Youtube className="h-5 w-5 text-slate-100" />
              </Link>
              <Link href="#" aria-label="Twitter" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition">
                <Twitter className="h-5 w-5 text-slate-100" />
              </Link>
              <Link href="#" aria-label="Instagram" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition">
                <Instagram className="h-5 w-5 text-slate-100" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-1">
            <div>
              <h4 className="font-semibold mb-3">Explore</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/about" className="hover:text-white">About</Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-white">Projects</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">Services</Link>
                </li>
                <li>
                  <Link href="/publications" className="hover:text-white">Publications</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Legal & Help</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/privacy" className="hover:text-white">Privacy</Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">Terms</Link>
                </li>
                <li>
                  <Link href="/data-protection" className="hover:text-white">Data Protection</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter / Contact */}
          <div className="lg:pt-2">
            <h4 className="font-semibold mb-3">Stay Connected</h4>
            <p className="text-sm text-slate-300 mb-4">Sign up for our newsletter or follow us on social media</p>

            <form action="/api/contact" method="post" className="flex flex-col sm:flex-row gap-3">
              <input type="hidden" name="type" value="newsletter" />
              <label htmlFor="email" className="sr-only">Email</label>
              <input id="email" name="email" type="email" required placeholder="Enter your email" className="flex-1 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary" />
              <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white shadow hover:brightness-105">
                <Mail className="h-4 w-4" /> Subscribe
              </button>
            </form>

            <div className="mt-6 text-sm text-slate-300">
              <p className="font-medium">Follow us on:</p>
              <div className="flex items-center gap-3 mt-2">
                <Link href="#" aria-label="Facebook" className="inline-flex items-center gap-2 p-2 rounded-md bg-white/5 hover:bg-white/10 transition">
                  <Facebook className="h-5 w-5 text-slate-100" /> <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" aria-label="LinkedIn" className="inline-flex items-center gap-2 p-2 rounded-md bg-white/5 hover:bg-white/10 transition">
                  <Linkedin className="h-5 w-5 text-slate-100" /> <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" aria-label="YouTube" className="inline-flex items-center gap-2 p-2 rounded-md bg-white/5 hover:bg-white/10 transition">
                  <Youtube className="h-5 w-5 text-slate-100" /> <span className="sr-only">YouTube</span>
                </Link>
              </div>

              <div className="mt-4">
                <p>Hawassa, Ethiopia</p>
                <p className="mt-1">Phone: +251 912 445575</p>
                <p className="mt-1">Email: <a href="mailto:abel.gedefaw@yahoo.com" className="hover:text-white">abel.gedefaw@yahoo.com</a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-center text-sm text-slate-400">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p>&copy; {new Date().getFullYear()} Dr. Abel Health Consulting. All rights reserved.</p>
            <p>Built with care · Designed for impact</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
