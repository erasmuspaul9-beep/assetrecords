/* @ds-bundle: {"format":3,"namespace":"AssetRecordsDesignSystem_625ab6","components":[],"sourceHashes":{"ui_kits/marketing/CTAFooter.jsx":"20666224cd5d","ui_kits/marketing/FeatureGrid.jsx":"cb22e40e5549","ui_kits/marketing/Hero.jsx":"0f7ebf6bb11d","ui_kits/marketing/LogoCloud.jsx":"0368540ea1ad","ui_kits/marketing/Navbar.jsx":"80a1093c9cb0","ui_kits/marketing/Pricing.jsx":"00bccf063e0a","ui_kits/marketing/ProductShowcase.jsx":"05b3e94ccae8","ui_kits/marketing/StatStrip.jsx":"d0cb59941793","ui_kits/marketing/Testimonial.jsx":"4d9022de0228","ui_kits/marketing/common.jsx":"6ef9c5be435e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AssetRecordsDesignSystem_625ab6 = window.AssetRecordsDesignSystem_625ab6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/marketing/CTAFooter.jsx
try { (() => {
// Final CTA + footer.

function CTASection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "ar-cta"
  }, /*#__PURE__*/React.createElement(Container, {
    narrow: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-cta-card"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "#8AD3C0"
  }, "Ready when you are"), /*#__PURE__*/React.createElement("h2", null, "Bring your portfolio in from the spreadsheet."), /*#__PURE__*/React.createElement("p", null, "30-minute walkthrough with someone who's run a portfolio. No deck, no pitch \u2014 bring your messiest building and we'll show you how it would land in AssetRecords."), /*#__PURE__*/React.createElement("div", {
    className: "ar-hero-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "on-dark-primary",
    size: "lg",
    iconRight: "arrow-right"
  }, "Get a demo"), /*#__PURE__*/React.createElement(Button, {
    variant: "on-dark-ghost",
    size: "lg"
  }, "Talk to sales")))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "ar-footer"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "ar-footer-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-footer-brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-full-light.svg",
    alt: "AssetRecords"
  }), /*#__PURE__*/React.createElement("p", null, "Smarter portfolio management for landlords, asset managers and the service providers who keep buildings running."), /*#__PURE__*/React.createElement("div", {
    className: "ar-footer-social"
  }, /*#__PURE__*/React.createElement("a", {
    "aria-label": "LinkedIn"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "brand-linkedin"
  })), /*#__PURE__*/React.createElement("a", {
    "aria-label": "X"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "brand-x"
  })), /*#__PURE__*/React.createElement("a", {
    "aria-label": "YouTube"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "brand-youtube"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "ar-footer-col"
  }, /*#__PURE__*/React.createElement("h6", null, "Product"), /*#__PURE__*/React.createElement("a", null, "Lease management"), /*#__PURE__*/React.createElement("a", null, "Inspections"), /*#__PURE__*/React.createElement("a", null, "Work orders"), /*#__PURE__*/React.createElement("a", null, "Recoveries"), /*#__PURE__*/React.createElement("a", null, "Documents"), /*#__PURE__*/React.createElement("a", null, "Integrations")), /*#__PURE__*/React.createElement("div", {
    className: "ar-footer-col"
  }, /*#__PURE__*/React.createElement("h6", null, "Solutions"), /*#__PURE__*/React.createElement("a", null, "Landlords"), /*#__PURE__*/React.createElement("a", null, "Asset managers"), /*#__PURE__*/React.createElement("a", null, "Property managers"), /*#__PURE__*/React.createElement("a", null, "Service providers")), /*#__PURE__*/React.createElement("div", {
    className: "ar-footer-col"
  }, /*#__PURE__*/React.createElement("h6", null, "Company"), /*#__PURE__*/React.createElement("a", null, "About"), /*#__PURE__*/React.createElement("a", null, "Customers"), /*#__PURE__*/React.createElement("a", null, "Careers"), /*#__PURE__*/React.createElement("a", null, "Press"), /*#__PURE__*/React.createElement("a", null, "Contact")), /*#__PURE__*/React.createElement("div", {
    className: "ar-footer-col"
  }, /*#__PURE__*/React.createElement("h6", null, "Resources"), /*#__PURE__*/React.createElement("a", null, "Guides"), /*#__PURE__*/React.createElement("a", null, "Help centre"), /*#__PURE__*/React.createElement("a", null, "API docs"), /*#__PURE__*/React.createElement("a", null, "Security"), /*#__PURE__*/React.createElement("a", null, "Status"))), /*#__PURE__*/React.createElement("div", {
    className: "ar-footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 AssetRecords. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    className: "ar-footer-legal"
  }, /*#__PURE__*/React.createElement("a", null, "Terms"), /*#__PURE__*/React.createElement("a", null, "Privacy"), /*#__PURE__*/React.createElement("a", null, "Cookies"), /*#__PURE__*/React.createElement("a", null, "DPA")))));
}
Object.assign(window, {
  CTASection,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/CTAFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/FeatureGrid.jsx
try { (() => {
// Feature grid — three columns, navy headings, AR primary scale for tinted icons.

const FEATURES = [{
  icon: "building-community",
  title: "Portfolio at a glance",
  body: "Buildings, units, leases and tenants — every property linked to its documents, contacts and history."
}, {
  icon: "clipboard-check",
  title: "Inspections that travel",
  body: "Run checklists in the field on any device. Work offline; sync when you're back online; export a PDF you can hand to a client."
}, {
  icon: "tool",
  title: "Work orders without the chase",
  body: "Assign jobs to staff or external suppliers, watch them progress, and keep a clean audit trail on every asset."
}, {
  icon: "file-description",
  title: "Documents in their right place",
  body: "Templates, requests, signatures. Every doc lives on the unit, the lease or the contact it actually belongs to."
}, {
  icon: "wallet",
  title: "Cost recoveries, made transparent",
  body: "Recover utilities, repairs and shared costs from tenants. They see the request, you see the dispute log."
}, {
  icon: "shield-check",
  title: "Compliance you can prove",
  body: "Certificates, fire safety, occupancy — all tracked with renewal dates. Auditors get a link, not a folder."
}];
function FeatureGrid() {
  return /*#__PURE__*/React.createElement("section", {
    className: "ar-features",
    id: "features"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "What's inside",
    title: "Built for the way buildings really run.",
    subtitle: "Six surfaces, one source of truth. Use what you need today; switch on the rest when you're ready.",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ar-feature-grid"
  }, FEATURES.map(f => /*#__PURE__*/React.createElement("div", {
    className: "ar-feature",
    key: f.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-feature-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h4", null, f.title), /*#__PURE__*/React.createElement("p", null, f.body))))));
}
window.FeatureGrid = FeatureGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/FeatureGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
// Hero — Tagline lifted from the product login screen: "Smarter portfolio management starts here."
// Background is the AR hero gradient (green → navy → deep navy with indigo overlay).

function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "ar-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-hero-bg"
  }), /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "ar-hero-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-hero-copy"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "#8AD3C0"
  }, "Property management, made calm"), /*#__PURE__*/React.createElement("h1", null, "Smarter portfolio", /*#__PURE__*/React.createElement("br", null), "management starts here."), /*#__PURE__*/React.createElement("p", null, "Track buildings, log issues, and stay compliant \u2014 without the chaos of spreadsheets. AssetRecords is the single source of truth for landlords, asset managers and the service providers who keep buildings running."), /*#__PURE__*/React.createElement("div", {
    className: "ar-hero-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "on-dark-primary",
    size: "lg",
    iconRight: "arrow-right"
  }, "Get a demo"), /*#__PURE__*/React.createElement(Button, {
    variant: "on-dark-ghost",
    size: "lg",
    icon: "player-play"
  }, "Watch a 2-min tour")), /*#__PURE__*/React.createElement("div", {
    className: "ar-hero-meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14
  }), " No credit card"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14
  }), " Set up in a day"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14
  }), " SOC 2 Type II"))), /*#__PURE__*/React.createElement("div", {
    className: "ar-hero-art"
  }, /*#__PURE__*/React.createElement(DashboardPreview, null)))));
}

// Inline preview of a portfolio dashboard — built from the AR brand palette, no screenshots required.
function DashboardPreview() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ar-dash"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-dash-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ar-dash-url"
  }, "app.assetrecords.io/portfolio")), /*#__PURE__*/React.createElement("div", {
    className: "ar-dash-body"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "ar-dash-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-dash-side-logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    alt: ""
  })), ['dashboard', 'building', 'door', 'file-text', 'clipboard-check', 'tool', 'wallet', 'users', 'settings'].map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: `ar-dash-side-item ${i === 1 ? 'active' : ''}`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 20
  })))), /*#__PURE__*/React.createElement("main", {
    className: "ar-dash-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-dash-top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ar-dash-eyebrow"
  }, "PORTFOLIO"), /*#__PURE__*/React.createElement("div", {
    className: "ar-dash-title"
  }, "Equites Holdings")), /*#__PURE__*/React.createElement("div", {
    className: "ar-dash-pills"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pill active"
  }, "All"), /*#__PURE__*/React.createElement("span", {
    className: "pill"
  }, "Industrial"), /*#__PURE__*/React.createElement("span", {
    className: "pill"
  }, "Retail"))), /*#__PURE__*/React.createElement("div", {
    className: "ar-dash-stats"
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Buildings",
    value: "127",
    delta: "+3 this month"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Units",
    value: "863",
    delta: "+15 this month"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Occupancy",
    value: "94.2%",
    delta: "+1.4% QoQ",
    tone: "green"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Open WOs",
    value: "37",
    delta: "9 overdue",
    tone: "orange"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ar-dash-chart"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-dash-chart-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-dash-chart-title"
  }, "Occupancy trend"), /*#__PURE__*/React.createElement("div", {
    className: "ar-dash-chart-legend"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lg-dot a"
  }), "Industrial", /*#__PURE__*/React.createElement("span", {
    className: "lg-dot b"
  }), "Retail")), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 480 140",
    preserveAspectRatio: "none",
    className: "ar-dash-svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "gA",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#5EC090",
    stopOpacity: "0.32"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#5EC090",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M0 90 L60 80 L120 92 L180 70 L240 62 L300 50 L360 56 L420 38 L480 30 L480 140 L0 140 Z",
    fill: "url(#gA)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 90 L60 80 L120 92 L180 70 L240 62 L300 50 L360 56 L420 38 L480 30",
    fill: "none",
    stroke: "#449F7E",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 110 L60 108 L120 112 L180 100 L240 102 L300 92 L360 96 L420 88 L480 82",
    fill: "none",
    stroke: "#0F2F53",
    strokeWidth: "2",
    strokeDasharray: "4 4"
  }))))));
}
function Stat({
  label,
  value,
  delta,
  tone = "navy"
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ar-dash-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-dash-stat-label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "ar-dash-stat-value"
  }, value), /*#__PURE__*/React.createElement("div", {
    className: `ar-dash-stat-delta tone-${tone}`
  }, delta));
}
Object.assign(window, {
  Hero,
  DashboardPreview,
  Stat
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/LogoCloud.jsx
try { (() => {
// Customer logo strip — placeholders. Real partners would replace these.
function LogoCloud() {
  return /*#__PURE__*/React.createElement("section", {
    className: "ar-logos"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "ar-logos-label"
  }, "Trusted by landlords, asset managers and property teams across the continent"), /*#__PURE__*/React.createElement("div", {
    className: "ar-logos-row"
  }, ["EQUITES", "SANDTON CREST", "GROWTHPOINT", "HYPROP", "ATTACQ", "REDEFINE", "CITICAPITAL", "BALWIN"].map(n => /*#__PURE__*/React.createElement("div", {
    className: "ar-logo-mark",
    key: n
  }, n)))));
}
window.LogoCloud = LogoCloud;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/LogoCloud.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Navbar.jsx
try { (() => {
// Marketing top navigation — fixed, transitions from transparent (over hero) to white-on-shadow on scroll.

function Navbar({
  invertOnTop = true
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const dark = invertOnTop && !scrolled;
  return /*#__PURE__*/React.createElement("nav", {
    className: `ar-nav ${scrolled ? "scrolled" : ""} ${dark ? "on-dark" : ""}`
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "ar-nav-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-nav-left"
  }, /*#__PURE__*/React.createElement("a", {
    className: "ar-nav-logo",
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    src: dark ? "../../assets/logo-full-light.svg" : "../../assets/logo-full-dark.svg",
    alt: "AssetRecords"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ar-nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#features"
  }, "Product"), /*#__PURE__*/React.createElement("a", {
    href: "#solutions"
  }, "Solutions"), /*#__PURE__*/React.createElement("a", {
    href: "#pricing"
  }, "Pricing"), /*#__PURE__*/React.createElement("a", {
    href: "#customers"
  }, "Customers"), /*#__PURE__*/React.createElement("a", {
    href: "#resources"
  }, "Resources"))), /*#__PURE__*/React.createElement("div", {
    className: "ar-nav-right"
  }, /*#__PURE__*/React.createElement("a", {
    className: "ar-nav-login",
    href: "#login"
  }, "Log in"), /*#__PURE__*/React.createElement(Button, {
    variant: dark ? "on-dark" : "primary",
    size: "sm",
    iconRight: "arrow-right"
  }, "Get a demo")))));
}
window.Navbar = Navbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Pricing.jsx
try { (() => {
// Pricing — three tiers, middle highlighted with AR Navy.

const TIERS = [{
  name: "Starter",
  price: "R 1,490",
  cadence: "per month",
  blurb: "For owners with a single portfolio and a small team.",
  cta: "Start free trial",
  variant: "outline",
  features: ["Up to 50 units", "Lease & document management", "Mobile inspections", "Email support"]
}, {
  name: "Operator",
  price: "R 4,890",
  cadence: "per month",
  blurb: "For asset managers running multiple buildings with field teams.",
  cta: "Get a demo",
  variant: "primary",
  highlight: true,
  features: ["Up to 1,000 units", "Work orders & assignable suppliers", "Cost recoveries", "Custom report templates", "Priority support + onboarding"]
}, {
  name: "Enterprise",
  price: "Custom",
  cadence: "annual contract",
  blurb: "For portfolios at scale — SSO, audit, and a dedicated CSM.",
  cta: "Contact sales",
  variant: "outline",
  features: ["Unlimited units", "SSO / SAML, role-based access", "SOC 2 reports & DPA", "Dedicated success manager", "Procurement & legal support"]
}];
function Pricing() {
  return /*#__PURE__*/React.createElement("section", {
    className: "ar-pricing",
    id: "pricing"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "Pricing",
    title: "One price per portfolio. No per-seat surprises.",
    subtitle: "Every plan includes unlimited team members and unlimited documents. You pay for the units you manage.",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ar-tiers"
  }, TIERS.map(t => /*#__PURE__*/React.createElement("div", {
    className: `ar-tier ${t.highlight ? "highlight" : ""}`,
    key: t.name
  }, t.highlight && /*#__PURE__*/React.createElement("div", {
    className: "ar-tier-flag"
  }, "Most popular"), /*#__PURE__*/React.createElement("div", {
    className: "ar-tier-head"
  }, /*#__PURE__*/React.createElement("h4", null, t.name), /*#__PURE__*/React.createElement("p", null, t.blurb)), /*#__PURE__*/React.createElement("div", {
    className: "ar-tier-price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, t.price), /*#__PURE__*/React.createElement("span", {
    className: "cadence"
  }, t.cadence)), /*#__PURE__*/React.createElement(Button, {
    variant: t.highlight ? "on-dark-primary" : "outline",
    size: "lg"
  }, t.cta), /*#__PURE__*/React.createElement("ul", null, t.features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16
  }), f))))))));
}
window.Pricing = Pricing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/ProductShowcase.jsx
try { (() => {
// Product showcase — tabbed image+copy alternation. Three product surfaces (Lease, Inspections, Recoveries).

const SHOWCASE = [{
  key: "lease",
  eyebrow: "Lease Management",
  title: "One lease record per unit — with every receipt, signature and renewal attached.",
  bullets: ["Move-in, renewal and move-out flows with audit trails", "Recurring charges and escalations on a schedule", "Renewal reminders fire — to the tenant and your team"],
  cta: "See Lease Management",
  layout: "image-right",
  visual: /*#__PURE__*/React.createElement(LeaseVisual, null)
}, {
  key: "inspections",
  eyebrow: "Inspections & Checklists",
  title: "Run inspections in the field. Sync when you're back online.",
  bullets: ["Build checklists per asset type — re-use across properties", "Photo evidence and signatures captured on-site", "Export a polished PDF the client can read in 30 seconds"],
  cta: "See Inspections",
  layout: "image-left",
  visual: /*#__PURE__*/React.createElement(InspectionsVisual, null)
}, {
  key: "recoveries",
  eyebrow: "Cost Recoveries",
  title: "Recover utilities, repairs and shared costs — with the receipts to prove it.",
  bullets: ["Send a recovery request, get a clear yes / no / dispute back", "Tenants get a phone-friendly view; you keep the desk view", "Disputes route to the right person, every time"],
  cta: "See Recoveries",
  layout: "image-right",
  visual: /*#__PURE__*/React.createElement(RecoveriesVisual, null)
}];
function ProductShowcase() {
  return /*#__PURE__*/React.createElement("section", {
    className: "ar-showcase",
    id: "solutions"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "Inside the platform",
    title: "Three surfaces. One source of truth.",
    align: "center"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ar-showcase-stack"
  }, SHOWCASE.map(s => /*#__PURE__*/React.createElement("div", {
    className: `ar-showcase-row ${s.layout}`,
    key: s.key
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "ar-showcase-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-showcase-copy"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, s.eyebrow), /*#__PURE__*/React.createElement("h3", null, s.title), /*#__PURE__*/React.createElement("ul", null, s.bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, b)))), /*#__PURE__*/React.createElement(Button, {
    variant: "subtle",
    iconRight: "arrow-right"
  }, s.cta)), /*#__PURE__*/React.createElement("div", {
    className: "ar-showcase-visual"
  }, s.visual)))))));
}

// — Visuals — lightweight mocks built from the system, not screenshots.

function LeaseVisual() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ar-vis ar-vis-lease"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-crumbs"
  }, "Properties ", /*#__PURE__*/React.createElement("span", null, "\u203A"), " Sandton Crest ", /*#__PURE__*/React.createElement("span", null, "\u203A"), " Unit 4B"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Active lease")), /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-label"
  }, "Tenant"), /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-name"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ar-avatar"
  }, "JM"), "Jabu Mokoena"), /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-meta"
  }, "Lease #LSE-2024-0418")), /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-label"
  }, "Term"), /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-value"
  }, "12 months"), /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-meta"
  }, "Jan 1, 2026 \u2192 Dec 31, 2026")), /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-label"
  }, "Rent"), /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-value"
  }, "R 18,400 ", /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "/mo")), /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-meta"
  }, "+ 7% annual"))), /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-events"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ev"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot green"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Renewal reminder sent"), /*#__PURE__*/React.createElement("span", null, "Today, 09:14"))), /*#__PURE__*/React.createElement("div", {
    className: "ev"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot blue"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Annual escalation applied"), /*#__PURE__*/React.createElement("span", null, "Jan 1, 2026"))), /*#__PURE__*/React.createElement("div", {
    className: "ev"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot navy"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Lease signed"), /*#__PURE__*/React.createElement("span", null, "Dec 12, 2025")))));
}
function InspectionsVisual() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ar-vis ar-vis-inspect"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-crumbs"
  }, "Inspections ", /*#__PURE__*/React.createElement("span", null, "\u203A"), " Building 4 Annual"), /*#__PURE__*/React.createElement(Badge, {
    tone: "warning"
  }, "In progress")), /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-progress-bar"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "68%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-progress-meta"
  }, /*#__PURE__*/React.createElement("b", null, "17 / 25"), " items complete \xB7 ", /*#__PURE__*/React.createElement("span", null, "3 with photos"))), /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-checklist"
  }, [{
    label: "Roof access hatch — clear and secured",
    state: "done"
  }, {
    label: "Fire extinguisher tag (Bay 4)",
    state: "done"
  }, {
    label: "Loading dock seal — check for damage",
    state: "flag",
    note: "Tear at top-left, photo attached"
  }, {
    label: "Emergency lighting — test all",
    state: "todo"
  }, {
    label: "Mechanical room: water ingress?",
    state: "todo"
  }].map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: `ar-vis-item ${it.state}`,
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }, it.state === "done" ? "✓" : it.state === "flag" ? "!" : ""), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-item-label"
  }, it.label), it.note && /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-item-note"
  }, it.note))))));
}
function RecoveriesVisual() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ar-vis ar-vis-recover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-crumbs"
  }, "Recoveries ", /*#__PURE__*/React.createElement("span", null, "\u203A"), " Q4 Utilities \u2014 142 units"), /*#__PURE__*/React.createElement(Badge, {
    tone: "info"
  }, "Sent to tenants")), /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-recover-stats"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "128"), /*#__PURE__*/React.createElement("div", null, "Acknowledged")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "num green"
  }, "109"), /*#__PURE__*/React.createElement("div", null, "Approved")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "num orange"
  }, "11"), /*#__PURE__*/React.createElement("div", null, "Disputed")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "R 384,210"), /*#__PURE__*/React.createElement("div", null, "Recovered"))), /*#__PURE__*/React.createElement("div", {
    className: "ar-vis-recover-list"
  }, [{
    unit: "Unit 4B",
    name: "J. Mokoena",
    amt: "R 1,840",
    status: "Approved",
    tone: "success"
  }, {
    unit: "Unit 7A",
    name: "S. Naidoo",
    amt: "R 2,210",
    status: "Disputed",
    tone: "warning"
  }, {
    unit: "Unit 12C",
    name: "M. de Beer",
    amt: "R 1,620",
    status: "Approved",
    tone: "success"
  }, {
    unit: "Unit 18B",
    name: "R. Khumalo",
    amt: "R 940",
    status: "Pending",
    tone: "info"
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "row",
    key: i
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, r.unit), /*#__PURE__*/React.createElement("span", null, r.name)), /*#__PURE__*/React.createElement("div", {
    className: "amt"
  }, r.amt), /*#__PURE__*/React.createElement(Badge, {
    tone: r.tone
  }, r.status)))));
}
Object.assign(window, {
  ProductShowcase,
  LeaseVisual,
  InspectionsVisual,
  RecoveriesVisual
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/ProductShowcase.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/StatStrip.jsx
try { (() => {
// Stats strip — quiet, real-feeling numbers.

function StatStrip() {
  return /*#__PURE__*/React.createElement("section", {
    className: "ar-stats"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "ar-stats-row"
  }, [{
    n: "R 4.2 bn",
    l: "in rentals managed"
  }, {
    n: "127,000+",
    l: "units on AssetRecords"
  }, {
    n: "38 hrs",
    l: "saved per portfolio, per month"
  }, {
    n: "99.97%",
    l: "uptime, last 12 months"
  }].map(s => /*#__PURE__*/React.createElement("div", {
    className: "ar-stat",
    key: s.l
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, s.l))))));
}
window.StatStrip = StatStrip;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/StatStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Testimonial.jsx
try { (() => {
// Testimonial — single quote, navy card, customer detail.

function Testimonial() {
  return /*#__PURE__*/React.createElement("section", {
    className: "ar-testimonial",
    id: "customers"
  }, /*#__PURE__*/React.createElement(Container, {
    narrow: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-testimonial-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-testimonial-mark"
  }, "\""), /*#__PURE__*/React.createElement("blockquote", null, "We replaced four spreadsheets, three WhatsApp groups and one binder with AssetRecords. The audit team got their report in ", /*#__PURE__*/React.createElement("em", null, "fifteen minutes"), ". That alone paid for the year."), /*#__PURE__*/React.createElement("div", {
    className: "ar-testimonial-by"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ar-avatar lg"
  }, "TN"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, "Thandi Nkosi"), /*#__PURE__*/React.createElement("div", {
    className: "role"
  }, "Asset Manager, Equites Holdings"))))));
}
window.Testimonial = Testimonial;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Testimonial.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/common.jsx
try { (() => {
// Shared primitives — Button, Eyebrow, Container, SectionTitle
// Used by every component in the AssetRecords marketing UI kit.

const Container = ({
  children,
  narrow,
  style = {},
  className = ""
}) => /*#__PURE__*/React.createElement("div", {
  className: `ar-container ${narrow ? "narrow" : ""} ${className}`,
  style: style
}, children);
const Eyebrow = ({
  children,
  color
}) => /*#__PURE__*/React.createElement("div", {
  className: "ar-eyebrow",
  style: color ? {
    color
  } : undefined
}, children);
const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  invert
}) => /*#__PURE__*/React.createElement("div", {
  className: `ar-section-title ${align} ${invert ? "invert" : ""}`
}, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h2", null, title), subtitle && /*#__PURE__*/React.createElement("p", null, subtitle));
const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  onClick,
  href
}) => {
  const cls = `ar-btn ar-btn-${variant} ar-btn-${size}`;
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement("i", {
    className: `ti ti-${icon}`,
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("span", null, children), iconRight && /*#__PURE__*/React.createElement("i", {
    className: `ti ti-${iconRight}`,
    "aria-hidden": true
  }));
  if (href) return /*#__PURE__*/React.createElement("a", {
    className: cls,
    href: href,
    onClick: onClick
  }, inner);
  return /*#__PURE__*/React.createElement("button", {
    className: cls,
    onClick: onClick
  }, inner);
};
const Badge = ({
  children,
  tone = "success"
}) => /*#__PURE__*/React.createElement("span", {
  className: `ar-badge ar-badge-${tone}`
}, /*#__PURE__*/React.createElement("span", {
  className: "dot"
}), children);
const Icon = ({
  name,
  size = 18,
  color
}) => /*#__PURE__*/React.createElement("i", {
  className: `ti ti-${name}`,
  "aria-hidden": true,
  style: {
    fontSize: size,
    color,
    lineHeight: 1
  }
});
Object.assign(window, {
  Container,
  Eyebrow,
  SectionTitle,
  Button,
  Badge,
  Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/common.jsx", error: String((e && e.message) || e) }); }

})();
