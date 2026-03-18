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

const SaveButton = () => (
  <button className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-display text-sm font-bold text-primary-foreground hover:-translate-y-px hover:shadow-lg transition-all active:scale-[0.98]">
    <Save className="h-4 w-4" />Save Changes
  </button>
);

const galleryImages = [
  { alt: "Clinic exterior", category: "Clinic" },
  { alt: "Entrance signage", category: "Clinic" },
  { alt: "Clinic banner", category: "Clinic" },
  { alt: "Services signage", category: "Clinic" },
  { alt: "Waiting area", category: "Waiting & Reception" },
  { alt: "Reception lounge", category: "Waiting & Reception" },
  { alt: "Reception desk", category: "Waiting & Reception" },
  { alt: "Dental operatory", category: "Surgery Rooms" },
  { alt: "Dental chair", category: "Surgery Rooms" },
  { alt: "Treatment 1", category: "Treatment" },
  { alt: "Treatment 2", category: "Treatment" },
  { alt: "Treatment 3", category: "Treatment" },
  { alt: "Orthodontics", category: "Treatment" },
  { alt: "Clinic exterior 2", category: "Clinic" },
];

const EditGalleryPage = () => (
  <div className="space-y-4 max-w-4xl">
    <div className="flex items-center justify-between mb-2">
      <div>
        <h2 className="font-display text-xl font-extrabold text-foreground">Gallery Page</h2>
        <p className="font-body text-sm text-muted-foreground">Manage gallery images and categories</p>
      </div>
      <SaveButton />
    </div>

    <Section title="Page Header" description="Gallery hero section" defaultOpen>
      <Field label="Badge Text" value="Our Gallery" />
      <Field label="Heading" value="See our clinic in action" />
      <Field label="Description" value="Take a tour of Rubi Smile Dental Clinic — our modern facilities, expert team, and real patient treatments." multiline />
    </Section>

    <Section title="Categories" description="Filter categories for gallery">
      <div className="flex flex-wrap gap-2">
        {["All", "Clinic", "Waiting & Reception", "Surgery Rooms", "Treatment"].map((cat) => (
          <div key={cat} className="flex items-center gap-2 rounded-full bg-muted px-4 py-2">
            <span className="font-display text-xs font-semibold text-foreground">{cat}</span>
            {cat !== "All" && <button className="text-muted-foreground hover:text-destructive"><Trash2 className="h-3 w-3" /></button>}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <input placeholder="New category name" className="rounded-xl border border-border bg-background px-4 py-2 font-body text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-accent/50" />
        <button className="rounded-xl bg-accent px-4 py-2 font-display text-xs font-bold text-accent-foreground"><Plus className="h-3.5 w-3.5 inline mr-1" />Add</button>
      </div>
    </Section>

    <Section title="Gallery Images" description="All images in the gallery (14 total)">
      <div className="grid sm:grid-cols-2 gap-4">
        {galleryImages.map((img, i) => (
          <div key={i} className="rounded-xl bg-muted/30 border border-border/30 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-display text-xs font-bold text-foreground">Image {i + 1}</span>
              <button className="text-muted-foreground hover:text-destructive"><Trash2 className="h-3.5 w-3.5" /></button>
            </div>
            <div className="h-32 rounded-xl bg-muted border border-border/50 flex items-center justify-center">
              <Upload className="h-6 w-6 text-muted-foreground" />
            </div>
            <Field label="Alt Text" value={img.alt} />
            <div>
              <label className="block font-display text-xs font-semibold text-foreground mb-1.5">Category</label>
              <select defaultValue={img.category} className="w-full rounded-xl border border-border bg-background px-4 py-2 font-body text-sm">
                {["Clinic", "Waiting & Reception", "Surgery Rooms", "Treatment"].map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <button className="rounded-xl border border-border px-3 py-2 font-display text-xs font-semibold text-foreground hover:bg-muted transition-colors w-full">
              <Upload className="h-3 w-3 inline mr-1" /> Replace Image
            </button>
          </div>
        ))}
      </div>
      <button className="flex items-center gap-1.5 font-display text-xs font-semibold text-accent hover:text-accent/80 mt-2">
        <Plus className="h-3.5 w-3.5" /> Add Image
      </button>
    </Section>

    <div className="pt-4"><SaveButton /></div>
  </div>
);

export default EditGalleryPage;
