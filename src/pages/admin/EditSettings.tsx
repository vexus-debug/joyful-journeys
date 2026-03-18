import { useState } from "react";
import { Save, Upload, ChevronDown, ChevronUp } from "lucide-react";

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

const EditSettings = () => (
  <div className="space-y-4 max-w-4xl">
    <div className="flex items-center justify-between mb-2">
      <div>
        <h2 className="font-display text-xl font-extrabold text-foreground">Site Settings</h2>
        <p className="font-body text-sm text-muted-foreground">Global settings, SEO, and meta information</p>
      </div>
      <SaveButton />
    </div>

    <Section title="SEO & Meta Tags" description="Search engine optimization settings" defaultOpen>
      <Field label="Site Title" value="Rubi Smile Dental Clinic — Quality Dental Care in Karu, Abuja" />
      <Field label="Meta Description" value="Rubi Smile Dental Clinic offers comprehensive dental care in Karu, Abuja. Services include preventive, cosmetic, restorative, orthodontic and pediatric dentistry. NHIS accepted." multiline />
      <Field label="Meta Keywords" value="dental clinic abuja, dentist karu, NHIS dental, teeth whitening abuja, braces abuja" />
      <Field label="Author" value="Rubi Smile Dental Clinic" />
    </Section>

    <Section title="Open Graph / Social Media" description="How your site appears when shared on social media">
      <Field label="OG Title" value="Rubi Smile Dental Clinic" />
      <Field label="OG Description" value="Quality dental care for the whole family in Karu, Abuja. NHIS accepted." multiline />
      <ImageField label="OG Image (1200×630 recommended)" />
      <Field label="Twitter Card Type" value="summary_large_image" />
    </Section>

    <Section title="Favicon & Branding" description="Browser tab icon and branding">
      <ImageField label="Favicon (ICO/PNG)" />
      <ImageField label="Favicon JPG (for mobile)" />
      <Field label="Site Name" value="Rubi Smile Dental Clinic" />
    </Section>

    <Section title="WhatsApp Floating Button" description="Global WhatsApp chat button settings">
      <Field label="WhatsApp Number" value="2349038535214" />
      <Field label="Default Message" value="Hello Rubi Smile! I'd like to book an appointment." />
      <Field label="Button Text" value="Chat on WhatsApp" />
      <div>
        <label className="block font-display text-xs font-semibold text-foreground mb-1.5">Show Button</label>
        <select defaultValue="all" className="rounded-xl border border-border bg-background px-4 py-2 font-body text-sm">
          <option value="all">All Pages</option>
          <option value="home">Home Only</option>
          <option value="none">Hidden</option>
        </select>
      </div>
    </Section>

    <div className="pt-4"><SaveButton /></div>
  </div>
);

export default EditSettings;
