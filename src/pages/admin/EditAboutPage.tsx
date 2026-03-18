import { useState } from "react";
import { Save, Upload, Plus, Trash2, ChevronDown, ChevronUp } from "lucide-react";

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
      <div className="h-20 w-20 rounded-xl bg-muted border border-border/50 flex items-center justify-center shrink-0"><Upload className="h-5 w-5 text-muted-foreground" /></div>
      <button className="rounded-xl border border-border px-4 py-2.5 font-display text-xs font-semibold text-foreground hover:bg-muted transition-colors"><Upload className="h-3.5 w-3.5 inline mr-1.5" />Upload</button>
    </div>
  </div>
);

const SaveButton = () => (
  <button className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-display text-sm font-bold text-primary-foreground hover:-translate-y-px hover:shadow-lg transition-all active:scale-[0.98]">
    <Save className="h-4 w-4" />Save Changes
  </button>
);

const EditAboutPage = () => (
  <div className="space-y-4 max-w-4xl">
    <div className="flex items-center justify-between mb-2">
      <div>
        <h2 className="font-display text-xl font-extrabold text-foreground">About Page</h2>
        <p className="font-body text-sm text-muted-foreground">Edit all sections of the about page</p>
      </div>
      <SaveButton />
    </div>

    <Section title="Hero Section" description="Top banner with heading" defaultOpen>
      <Field label="Badge Text" value="About Rubi Smile" />
      <Field label="Heading" value="Dentistry with Heart" />
      <Field label="Description" value="We believe everyone deserves access to quality, compassionate dental care. That's the promise behind every smile we create." multiline />
      <ImageField label="Hero Background Image" />
    </Section>

    <Section title="Our Story" description="Clinic history and mission narrative">
      <Field label="Section Label" value="Our Story" />
      <Field label="Heading" value="A family practice with a gentle touch" />
      <Field label="Paragraph 1" value="Located at No 6 November Street, near Chief Palace Layout, Karu, Abuja..." multiline />
      <Field label="Paragraph 2" value="We serve families, young professionals, and NHIS patients..." multiline />
      <Field label="Paragraph 3" value="We understand that visiting the dentist can be anxiety-inducing..." multiline />
      <div className="grid grid-cols-2 gap-3">
        <ImageField label="Image 1" />
        <ImageField label="Image 2" />
        <ImageField label="Image 3" />
        <ImageField label="Image 4" />
      </div>
    </Section>

    <Section title="Stats Bar" description="Key statistics displayed in accent band">
      {[
        { value: "1000+", label: "Happy Patients" },
        { value: "7+", label: "Service Categories" },
        { value: "6 Days", label: "Open Weekly" },
        { value: "NHIS", label: "Insurance Accepted" },
      ].map((s, i) => (
        <div key={i} className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-muted/30 border border-border/30">
          <Field label="Value" value={s.value} />
          <Field label="Label" value={s.label} />
        </div>
      ))}
    </Section>

    <Section title="Mission & Vision" description="Two-column mission and vision statements">
      <Field label="Mission Text" value="To provide exceptional, patient-centered dental care that is accessible, affordable, and delivered with compassion..." multiline />
      <Field label="Vision Text" value="To be the most trusted dental clinic in Abuja — known for gentle care, modern facilities, and a genuine commitment..." multiline />
    </Section>

    <Section title="Core Values" description="6 value cards">
      {["Gentle Care", "Family Focus", "Trust & Transparency", "Excellence", "Patient-First", "Education"].map((v, i) => (
        <div key={i} className="grid sm:grid-cols-2 gap-3 p-3 rounded-xl bg-muted/30 border border-border/30">
          <Field label="Title" value={v} />
          <Field label="Description" value="" placeholder="Value description..." />
        </div>
      ))}
      <button className="flex items-center gap-1.5 font-display text-xs font-semibold text-accent"><Plus className="h-3.5 w-3.5" /> Add Value</button>
    </Section>

    <Section title="Milestones" description="Timeline of clinic growth">
      {[
        { year: "Founded", title: "Rubi Smile Opens" },
        { year: "Growing", title: "Expanding Services" },
        { year: "Today", title: "1000+ Happy Patients" },
        { year: "Future", title: "Always Improving" },
      ].map((m, i) => (
        <div key={i} className="p-3 rounded-xl bg-muted/30 border border-border/30 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Field label="Period" value={m.year} />
            <Field label="Title" value={m.title} />
          </div>
          <Field label="Description" value="" multiline placeholder="Milestone description..." />
          <button className="text-xs text-destructive font-display font-semibold flex items-center gap-1"><Trash2 className="h-3 w-3" /> Remove</button>
        </div>
      ))}
      <button className="flex items-center gap-1.5 font-display text-xs font-semibold text-accent"><Plus className="h-3.5 w-3.5" /> Add Milestone</button>
    </Section>

    <Section title="Clinic Gallery Grid" description="Photo grid showing inside the clinic">
      <p className="font-body text-xs text-muted-foreground">Images sourced from Gallery. Manage on <a href="/admin/gallery" className="text-accent font-semibold">Gallery Page</a>.</p>
      <Field label="Section Heading" value="Take a Look Inside" />
      <Field label="Section Description" value="Our modern, welcoming clinic is designed with your comfort in mind." />
    </Section>

    <Section title="Location & CTA" description="Visit info and final call-to-action">
      <Field label="Address" value="No 6 November Street, near Chief Palace Layout, Karu, Abuja" />
      <Field label="Hours" value="Mon – Fri: 9:00 AM – 5:30 PM | Sat: 9:00 AM – 3:30 PM" />
      <Field label="WhatsApp" value="0903 853 5214" />
      <Field label="Phone" value="0902 440 3837" />
      <Field label="CTA Heading" value="Ready to Experience the Rubi Smile Difference?" />
      <Field label="CTA Description" value="Book your appointment today via WhatsApp or phone." />
    </Section>

    <div className="pt-4"><SaveButton /></div>
  </div>
);

export default EditAboutPage;
