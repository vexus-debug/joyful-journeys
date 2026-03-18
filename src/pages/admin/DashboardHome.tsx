import { Home, Stethoscope, Users, Phone, Image, FileText, PanelLeft, Settings, ArrowRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const pages = [
  { label: "Home Page", desc: "Hero, stats, about, services, testimonials, FAQ, location & CTA", to: "/admin/home", icon: Home, sections: 10 },
  { label: "Services Page", desc: "Service categories, why choose us, gallery strip, booking modal", to: "/admin/services", icon: Stethoscope, sections: 7 },
  { label: "About Page", desc: "Hero, story, stats, mission/vision, values, milestones, gallery", to: "/admin/about", icon: Users, sections: 8 },
  { label: "Contact Page", desc: "Contact info, map embed, WhatsApp & phone links", to: "/admin/contact", icon: Phone, sections: 3 },
  { label: "Gallery Page", desc: "Images, categories, lightbox settings", to: "/admin/gallery", icon: Image, sections: 3 },
  { label: "Header & Footer", desc: "Logo, navigation links, CTA buttons, footer content", to: "/admin/header-footer", icon: PanelLeft, sections: 6 },
  { label: "Legal Pages", desc: "Privacy policy, terms & conditions, disclaimer", to: "/admin/legal", icon: FileText, sections: 3 },
  { label: "Site Settings", desc: "SEO, meta tags, favicon, social links, analytics", to: "/admin/settings", icon: Settings, sections: 4 },
];

const DashboardHome = () => (
  <div className="space-y-8">
    {/* Welcome */}
    <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 text-primary-foreground">
      <h2 className="font-display text-2xl font-extrabold">Welcome back!</h2>
      <p className="font-body text-sm text-primary-foreground/80 mt-2 max-w-lg">
        Manage every section of your Rubi Smile Dental Clinic website from this dashboard.
      </p>
      <Link
        to="/"
        target="_blank"
        className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary-foreground/20 backdrop-blur-sm px-5 py-2.5 font-display text-xs font-bold text-primary-foreground hover:bg-primary-foreground/30 transition-all"
      >
        <Eye className="h-3.5 w-3.5" />
        View Live Site
      </Link>
    </div>

    {/* Quick stats */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {[
        { label: "Total Pages", value: "8" },
        { label: "Editable Sections", value: "44" },
        { label: "Gallery Images", value: "14" },
        { label: "Services", value: "7" },
      ].map((s) => (
        <div key={s.label} className="rounded-2xl bg-card border border-border/50 p-5 text-center">
          <div className="font-display text-2xl font-extrabold text-primary">{s.value}</div>
          <div className="font-body text-xs text-muted-foreground mt-1">{s.label}</div>
        </div>
      ))}
    </div>

    {/* Page cards */}
    <div>
      <h3 className="font-display text-lg font-bold text-foreground mb-4">Edit Pages</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {pages.map((page) => (
          <Link
            key={page.to}
            to={page.to}
            className="group flex items-start gap-4 rounded-2xl bg-card border border-border/50 p-5 hover:shadow-card hover:border-accent/30 transition-all duration-200"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
              <page.icon className="h-5 w-5 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="font-display text-sm font-bold text-foreground">{page.label}</h4>
                <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="font-body text-xs text-muted-foreground mt-1 line-clamp-1">{page.desc}</p>
              <span className="inline-block mt-2 rounded-full bg-muted px-2.5 py-0.5 font-display text-[10px] font-semibold text-muted-foreground">
                {page.sections} sections
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default DashboardHome;
