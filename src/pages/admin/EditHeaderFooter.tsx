import { useState } from "react";
import { Save, Upload, Plus, Trash2, GripVertical, ChevronDown, ChevronUp } from "lucide-react";

const Section = ({ title, description, children, defaultOpen = false }: { title: string; description: string; children: React.ReactNode; defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl bg-card border border-border/50 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 hover:bg-muted/30 transition-colors">
        <div className="text-left">
          <h3 className="font-display text-sm font-bold text-foreground">{title}</h3>
          <p className="font-body text-xs text-muted-foreground mt-0.5">{description}</p>
        </div>
        {open ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
      </button>
      {open && <div className="px-5 pb-5 space-y-4 border-t border-border/30 pt-4">{children}</div>}
    </div>
  );
};

const Field = ({ label, value, multiline, placeholder }: { label: string; value: string; multiline?: boolean; placeholder?: string }) => (
  <div>
    <label className="block font-display text-xs font-semibold text-foreground mb-1.5">{label}</label>
    {multiline ? (
      <textarea defaultValue={value} placeholder={placeholder} rows={3} className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none" />
    ) : (
      <input defaultValue={value} placeholder={placeholder} className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50" />
    )}
  </div>
);

const ImageField = ({ label }: { label: string }) => (
  <div>
    <label className="block font-display text-xs font-semibold text-foreground mb-1.5">{label}</label>
    <div className="flex items-center gap-3">
      <div className="h-16 w-16 rounded-xl bg-muted border border-border/50 flex items-center justify-center shrink-0"><Upload className="h-4 w-4 text-muted-foreground" /></div>
      <button className="rounded-xl border border-border px-4 py-2 font-display text-xs font-semibold text-foreground hover:bg-muted transition-colors"><Upload className="h-3 w-3 inline mr-1" />Upload</button>
    </div>
  </div>
);

const SaveButton = () => (
  <button className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-display text-sm font-bold text-primary-foreground hover:-translate-y-px hover:shadow-lg transition-all active:scale-[0.98]">
    <Save className="h-4 w-4" />Save Changes
  </button>
);

const EditHeaderFooter = () => (
  <div className="space-y-4 max-w-4xl">
    <div className="flex items-center justify-between mb-2">
      <div>
        <h2 className="font-display text-xl font-extrabold text-foreground">Header & Footer</h2>
        <p className="font-body text-sm text-muted-foreground">Edit navigation, logo and footer content</p>
      </div>
      <SaveButton />
    </div>

    {/* HEADER */}
    <Section title="Header — Logo" description="Logo image and clinic name" defaultOpen>
      <ImageField label="Logo Image" />
      <Field label="Clinic Name" value="Rubi Smile" />
      <Field label="Subtitle" value="Dental Clinic" />
    </Section>

    <Section title="Header — Navigation Links" description="Menu items shown in slide-out menu">
      {[
        { label: "Home", to: "/" },
        { label: "Services", to: "/services" },
        { label: "Gallery", to: "/gallery" },
        { label: "About", to: "/about" },
        { label: "Contact", to: "/contact" },
      ].map((link, i) => (
        <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-muted/30 border border-border/30">
          <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab shrink-0" />
          <div className="flex-1 grid grid-cols-2 gap-3">
            <Field label="Label" value={link.label} />
            <Field label="URL" value={link.to} />
          </div>
          <button className="text-muted-foreground hover:text-destructive p-1"><Trash2 className="h-4 w-4" /></button>
        </div>
      ))}
      <button className="flex items-center gap-1.5 font-display text-xs font-semibold text-accent"><Plus className="h-3.5 w-3.5" /> Add Nav Link</button>
    </Section>

    <Section title="Header — CTA Button" description="Book Now button in header">
      <Field label="Button Text" value="Book Now" />
      <Field label="Phone Number" value="+2349024403837" />
    </Section>

    <Section title="Header — Mobile Menu CTAs" description="Bottom buttons in slide-out menu">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Primary CTA Text" value="WhatsApp Us" />
        <Field label="Primary CTA Link" value="https://wa.me/2349038535214" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Secondary CTA Text" value="Call Now" />
        <Field label="Secondary CTA Link" value="tel:+2349024403837" />
      </div>
    </Section>

    {/* FOOTER */}
    <Section title="Footer — About Text" description="Clinic description in footer">
      <Field label="Clinic Name" value="Rubi Smile" />
      <Field label="Description" value="Expert dental care that feels like family. Modern, gentle dentistry at No 6 November Street, near Chief Palace Layout, Karu, Abuja." multiline />
    </Section>

    <Section title="Footer — Contact Info" description="Address, phone, email displayed in footer">
      <Field label="Address" value="No 6 November Street, near Chief Palace Layout, Karu, Abuja" />
      <Field label="WhatsApp" value="0903 853 5214" />
      <Field label="WhatsApp Link" value="https://wa.me/2349038535214" />
      <Field label="Phone" value="0902 440 3837" />
      <Field label="Phone Link" value="tel:+2349024403837" />
      <Field label="Email" value="rubiismiledentalclinic@gmail.com" />
      <Field label="Working Hours" value="Mon – Fri: 9AM – 5:30PM | Sat: 9AM – 3:30PM" />
    </Section>

    <Section title="Footer — Quick Links" description="Navigation links in footer">
      {["Home", "Services", "About", "Contact"].map((l, i) => (
        <div key={i} className="flex items-center gap-2">
          <GripVertical className="h-3 w-3 text-muted-foreground cursor-grab" />
          <input defaultValue={l} className="flex-1 rounded-lg border border-border bg-background px-3 py-1.5 font-body text-xs focus:outline-none focus:ring-2 focus:ring-accent/50" />
          <button className="text-muted-foreground hover:text-destructive"><Trash2 className="h-3 w-3" /></button>
        </div>
      ))}
    </Section>

    <Section title="Footer — Legal Links" description="Privacy, Terms, Disclaimer links">
      {["Privacy Policy", "Terms & Conditions", "Disclaimer"].map((l, i) => (
        <div key={i} className="flex items-center gap-2">
          <input defaultValue={l} className="flex-1 rounded-lg border border-border bg-background px-3 py-1.5 font-body text-xs focus:outline-none focus:ring-2 focus:ring-accent/50" />
        </div>
      ))}
    </Section>

    <Section title="Footer — Copyright" description="Bottom copyright text">
      <Field label="Copyright Text" value="© {year} Rubi Smile Dental Clinic. All rights reserved." />
    </Section>

    <div className="pt-4"><SaveButton /></div>
  </div>
);

export default EditHeaderFooter;
