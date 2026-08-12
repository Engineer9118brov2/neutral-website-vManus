/* Signal Atlas navigation: simple top-level routes for the managed preview. */
import { Link, useLocation } from "wouter";
const nav = [{ href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/products", label: "Products" }, { href: "/contact", label: "Contact" }];
export function PreviewHeader() { const [location] = useLocation(); return <header className="sp-nav"><Link href="/" className="sp-nav-brand"><span>N</span><b>neutral</b></Link><nav>{nav.map((item) => <Link key={item.href} href={item.href} className={location === item.href ? "isActive" : ""}>{item.label}</Link>)}</nav><Link href="/contact" className="sp-nav-cta">Contact <span>↗</span></Link></header>; }
