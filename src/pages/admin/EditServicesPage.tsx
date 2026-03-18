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
      <div className="h-20 w-20 rounded-xl bg-muted border border-border/50 flex items-center justify-center shrink-0">
        <Upload className="h-5 w-5 text-muted-foreground" />
      </div>
      <button className="rounded-xl border border-border px-4 py-2.5 font-display text-xs font-semibold text-foreground hover:bg-muted transition-colors">
        <Upload className="h-3.5 w-3.5 inline mr-1.5" />Upload
      </button>
    </div>
  </div>
);

const SaveButton = () => (
  <button className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-display text-sm font-bold text-primary-foreground hover:-translate-y-px hover:shadow-lg transition-all active:scale-[0.98]">
    <Save className="h-4 w-4" />Save Changes
  </button>
);

const serviceCategories = [
  { title: "Preventive Dentistry", subtitle: "Stay Ahead of Problems", items: ["Scaling & polishing", "Routine checkups", "Fluoride treatments", "Dental sealants", "Oral hygiene education", "Gum disease prevention", "Bad breath treatment"] },
  { title: "General Dentistry", subtitle: "Everyday Dental Care", items: ["Tooth fillings", "Basic extractions", "Gum treatment", "Tooth sensitivity", "Minor infections"] },
  { title: "Restorative Dentistry", subtitle: "Rebuild & Restore", items: ["Root canal therapy", "Dental crowns", "Dental bridges", "Dentures", "Dental implants", "Tooth reconstruction"] },
  { title: "Cosmetic Dentistry", subtitle: "Smile Makeover", items: ["Teeth whitening", "Dental veneers", "Smile design", "Teeth reshaping", "Gap closure"] },
  { title: "Orthodontics", subtitle: "Straighten & Align", items: ["Traditional braces", "Clear aligners", "Bite correction", "Teeth alignment"] },
  { title: "Oral Surgery & Emergency", subtitle: "Expert Surgical Solutions", items: ["Surgical extraction", "Emergency pain relief", "Abscess drainage", "Trauma management", "Infection control"] },
  { title: "Pediatric Dentistry", subtitle: "Kid-Friendly Care", items: ["Child-friendly care", "Preventive care for kids", "Fluoride for children", "Space maintainers", "Early orthodontic assessment", "Behavioral management"] },
];

const EditServicesPage = () => (
  <div className="space-y-4 max-w-4xl">
    <div className="flex items-center justify-between mb-2">
      <div>
        <h2 className="font-display text-xl font-extrabold text-foreground">Services Page</h2>
        <p className="font-body text-sm text-muted-foreground">Edit all sections of the services page</p>
      </div>
      <SaveButton />
    </div>

    <Section title="Hero Section" description="Banner with heading and CTA buttons" defaultOpen>
      <Field label="Badge Text" value="Comprehensive Dental Care" />
      <Field label="Heading" value="Expert Care for Every Smile" />
      <Field label="Description" value="From routine cleanings to advanced procedures — 7 specialized service categories tailored to your family's needs." multiline />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="CTA Button Text" value="Book Appointment" />
        <Field label="Call Button Text" value="Call for Enquiry" />
      </div>
      <Field label="WhatsApp Number" value="2349038535214" />
      <Field label="Phone Number" value="+2349024403837" />
      <ImageField label="Hero Background Image" />
    </Section>

    <Section title="Service Categories" description="All 7 service categories with treatments">
      {serviceCategories.map((cat, i) => (
        <div key={i} className="p-4 rounded-xl bg-muted/30 border border-border/30 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-display text-xs font-bold text-accent">Category {i + 1}</span>
            <button className="text-muted-foreground hover:text-destructive transition-colors p-1"><Trash2 className="h-3.5 w-3.5" /></button>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="Title" value={cat.title} />
            <Field label="Subtitle" value={cat.subtitle} />
          </div>
          <Field label="Description" value="" multiline placeholder="Category description..." />
          <ImageField label="Category Image" />
          <div>
            <label className="block font-display text-xs font-semibold text-foreground mb-1.5">Treatments</label>
            {cat.items.map((item, j) => (
              <div key={j} className="flex items-center gap-2 mb-1.5">
                <GripVertical className="h-3 w-3 text-muted-foreground cursor-grab shrink-0" />
                <input defaultValue={item} className="flex-1 rounded-lg border border-border bg-background px-3 py-1.5 font-body text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50" />
                <button className="text-muted-foreground hover:text-destructive"><Trash2 className="h-3 w-3" /></button>
              </div>
            ))}
            <button className="flex items-center gap-1 font-display text-[10px] font-semibold text-accent mt-1"><Plus className="h-3 w-3" /> Add Treatment</button>
          </div>
        </div>
      ))}
      <button className="flex items-center gap-1.5 font-display text-xs font-semibold text-accent hover:text-accent/80">
        <Plus className="h-3.5 w-3.5" /> Add Category
      </button>
    </Section>

    <Section title="Why Choose Us" description="Trust points and advantages">
      {["Experienced Team", "Modern Equipment", "NHIS Accepted", "Patient-First Approach", "Transparent Pricing", "Flexible Scheduling"].map((t, i) => (
        <div key={i} className="grid sm:grid-cols-2 gap-3 p-3 rounded-xl bg-muted/30 border border-border/30">
          <Field label="Title" value={t} />
          <Field label="Description" value="" placeholder="Brief description..." />
        </div>
      ))}
    </Section>

    <Section title="Gallery Strip" description="Scrolling image strip">
      <p className="font-body text-xs text-muted-foreground">Images are pulled from the Gallery. Manage on <a href="/admin/gallery" className="text-accent font-semibold">Gallery Page</a>.</p>
      <Field label="Heading" value="Inside Our Clinic" />
      <Field label="Subtitle" value="Modern facilities designed for your comfort" />
    </Section>

    <Section title="Treatment Process" description="Step-by-step journey">
      {["Book", "Consult", "Treat", "Smile"].map((step, i) => (
        <div key={i} className="grid grid-cols-[50px_1fr] gap-3 p-3 rounded-xl bg-muted/30 border border-border/30">
          <Field label="Step" value={String(i + 1).padStart(2, "0")} />
          <div className="space-y-3">
            <Field label="Title" value={step} />
            <Field label="Description" value="" placeholder="Step description..." />
          </div>
        </div>
      ))}
    </Section>

    <Section title="Booking CTA" description="Bottom call-to-action with booking modal">
      <Field label="Heading" value="Ready to Book Your Appointment?" />
      <Field label="Description" value="Select services above or book directly. We're here to help you smile brighter." multiline />
      <ImageField label="Background Image" />
    </Section>

    <Section title="Booking Modal" description="WhatsApp booking form settings">
      <Field label="Modal Title" value="Book Appointment" />
      <Field label="Modal Subtitle" value="Fill in your details to book via WhatsApp" />
      <Field label="WhatsApp Number" value="2349038535214" />
      <Field label="Default Message" value="Hello Rubi Smile! I'd like to book an appointment." />
    </Section>

    <div className="pt-4"><SaveButton /></div>
  </div>
);

export default EditServicesPage;
