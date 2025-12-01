export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="/Untitled design (1).png"
              alt="Signs & Computers"
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              Professional computer services and custom printing solutions in Houston, Texas.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>Computer Repair & Upgrades</li>
              <li>Custom PC Builds</li>
              <li>Business Cards & Logos</li>
              <li>Signs & Banners</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>6295 Hwy 6 South</li>
              <li>Houston, TX 77083</li>
              <li>832-770-9984</li>
              <li>411printings@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Signs & Computers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
