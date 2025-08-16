import { Facebook, Twitter, Instagram, Linkedin, InstagramIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-10 px-5 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
            <li><a href="/press" className="hover:underline">Press</a></li>
          </ul>
        </div>

        {/* For Patients */}
        <div>
          <h3 className="font-semibold mb-3">For Patients</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/find-doctors" className="hover:underline">Find Doctors</a></li>
            <li><a href="/book-appointment" className="hover:underline">Book Appointment</a></li>
            <li><a href="/consult-online" className="hover:underline">Consult Online</a></li>
          </ul>
        </div>

        {/* For Doctors */}
        <div>
          <h3 className="font-semibold mb-3">For Doctors</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/join" className="hover:underline">Join HealthSlot</a></li>
            <li><a href="/doctor-login" className="hover:underline">Doctor Login</a></li>
            <li><a href="/support" className="hover:underline">Support</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"><InstagramIcon size={18} /></a>
            <a href="#" className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"><Twitter size={18} /></a>
            <a href="#" className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"><Facebook size={18} /></a>
            <a href="#" className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-200 pt-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <div className="space-x-4 mb-3 md:mb-0">
          <a href="/legal" className="hover:underline">Legal</a>
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/cookies" className="hover:underline">Cookies</a>
          <a href="/accessibility" className="hover:underline">Accessibility</a>
        </div>
        <p>© {new Date().getFullYear()} HealthSlot. All rights reserved.</p>
      </div>
    </footer>
  );
}
