import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">

        {/* Brand */}
        <div>
          <Link to="/" className="logo footer-logo">
            <span>NC</span> NaijaCart
          </Link>

          <p>
            Modern shopping for everyday Nigeria. Quality products,
            clear pricing and reliable delivery.
          </p>

          <div className="socials">
            <a href="#" aria-label="Facebook">
              f
            </a>

            <a href="#" aria-label="Instagram">
              ◎
            </a>

            <a href="#" aria-label="Twitter">
              𝕏
            </a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4>Shop</h4>

          <Link to="/products">All Products</Link>
          <Link to="/products/smartphones">Smartphones</Link>
          <Link to="/products/laptops">Laptops</Link>
          <Link to="/products/Beauty">Beauty</Link>
        </div>

        {/* Help */}
        <div>
          <h4>Help</h4>

          <a href="#">Customer Service</a>
          <a href="#">Delivery Information</a>
          <a href="#">Returns</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>

        {/* Contact */}
        <div>
          <h4>Contact</h4>

          <p>
            <Phone size={15} />
            +234 800 123 4567
          </p>

          <p>
            <Mail size={15} />
            naijacart@gmail.com
          </p>

          <p>
            <MapPin size={15} />
            Lagos · Abuja · Ibadan
          </p>

          <div className="newsletter">
            <input
              type="email"
              placeholder="Your email"
            />

            <button>Join</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} NaijaCart. Demo storefront for
        portfolio use.
      </div>
    </footer>
  );
}