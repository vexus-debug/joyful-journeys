import { useState } from "react";
import { Save, Upload, Plus, Trash2, GripVertical, ChevronDown, ChevronUp } from "lucide-react";

/* ─── Reusable section wrapper ─── */
const Section = ({ title, description, children, defaultOpen = false }: { title: string; description: string; children: React.ReactNode; defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl bg-card border border-border/50 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 hover:bg-muted/30 transition-colors"
      >
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

const ImageField = ({ label, current }: { label: string; current?: string }) => (
  <div>
    <label className="block font-display text-xs font-semibold text-foreground mb-1.5">{label}</label>
    <div className="flex items-center gap-3">
      <div className="h-20 w-20 rounded-xl bg-muted border border-border/50 overflow-hidden shrink-0 flex items-center justify-center">
        {current ? <img src={current} alt="" className="h-full w-full object-cover" /> : <Upload className="h-5 w-5 text-muted-foreground" />}
      </div>
      <button className="rounded-xl border border-border px-4 py-2.5 font-display text-xs font-semibold text-foreground hover:bg-muted transition-colors">
        <Upload className="h-3.5 w-3.5 inline mr-1.5" />
        Upload Image
      </button>
    </div>
  </div>
);

const SaveButton = () => (
  <button className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-display text-sm font-bold text-primary-foreground hover:-translate-y-px hover:shadow-lg transition-all active:scale-[0.98]">
    <Save className="h-4 w-4" />
    Save Changes
  </button>
);

/* ─── Home Page Editor ─── */
const EditHomePage = () => (
  <div className="space-y-4 max-w-4xl">
    <div className="flex items-center justify-between mb-2">
      <div>
        <h2 className="font-display text-xl font-extrabold text-foreground">Home Page</h2>
        <p className="font-body text-sm text-muted-foreground">Edit all sections of the homepage</p>
      </div>
      <SaveButton />
    </div>

    <Section title="Hero Section" description="Main banner with headline, description and CTA" defaultOpen>
      <Field label="Badge Text" value="Now Accepting NHIS Patients" />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Heading Line 1" value="Welcome to" />
        <Field label="Heading Highlight" value="Rubi Smile" />
      </div>
      <Field label="Subtitle" value="Dental Clinic" />
      <Field label="Description" value="Your partner for a complete, confident smile. We blend cutting-edge dental care with a warm, patient-centered environment for every member of the family." multiline />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Primary CTA Text" value="Our Services" />
        <Field label="Primary CTA Link" value="/services" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Secondary CTA Text" value="Book a Visit" />
        <Field label="Secondary CTA Link (WhatsApp)" value="https://wa.me/2349038535214" />
      </div>
      <ImageField label="Hero Background Image" />
      <ImageField label="Hero Side Image (Waiting Area)" />
      <ImageField label="Hero Overlapping Image (Front Desk)" />
    </Section>

    <Section title="Stats Section" description="Key numbers displayed below the hero">
      {[
        { value: "7+", label: "Service Categories" },
        { value: "1000+", label: "Happy Patients" },
        { value: "NHIS", label: "Accepted" },
        { value: "6 Days", label: "Open Weekly" },
      ].map((s, i) => (
        <div key={i} className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-muted/30 border border-border/30">
          <Field label={`Stat ${i + 1} Value`} value={s.value} />
          <Field label={`Stat ${i + 1} Label`} value={s.label} />
        </div>
      ))}
      <button className="flex items-center gap-1.5 font-display text-xs font-semibold text-accent hover:text-accent/80">
        <Plus className="h-3.5 w-3.5" /> Add Stat
      </button>
    </Section>

    <Section title="About Us Section" description="Brief clinic introduction with images">
      <Field label="Section Label" value="About Us" />
      <Field label="Heading" value="Achieve a Confident Smile With Us" />
      <Field label="Paragraph 1" value="Rubi Smile Dental Clinic is a premier dental practice dedicated to providing comprehensive oral health care. From routine cleanings to advanced oral surgery, we combine modern equipment with a compassionate approach." multiline />
      <Field label="Paragraph 2" value="Our team is passionate about making dental visits comfortable and anxiety-free for patients of all ages. We accept NHIS insurance, making quality dental care accessible to everyone." multiline />
      <Field label="Link Text" value="Learn more about us" />
      <ImageField label="Main Image" />
      <ImageField label="Secondary Image" />
    </Section>

    <Section title="Why Choose Us" description="Feature cards showcasing clinic advantages">
      <Field label="Section Heading" value="Gentle dentistry, brilliant results" />
      <Field label="Section Description" value="We combine modern equipment with a compassionate approach to make every visit comfortable." multiline />
      {["Modern Equipment", "NHIS Accepted", "Personalized Care"].map((title, i) => (
        <div key={i} className="p-4 rounded-xl bg-muted/30 border border-border/30 space-y-3">
          <Field label={`Card ${i + 1} Title`} value={title} />
          <Field label={`Card ${i + 1} Description`} value="" multiline placeholder="Card description..." />
          <ImageField label={`Card ${i + 1} Image`} />
        </div>
      ))}
    </Section>

    <Section title="Services Section" description="Service cards grid with titles and descriptions">
      <Field label="Section Heading" value="Comprehensive dental care" />
      <Field label="Section Description" value="Everything your smile needs under one roof — from prevention to restoration." />
      {["Preventive Dentistry", "General Dentistry", "Restorative Dentistry", "Cosmetic Dentistry", "Orthodontics", "Oral Surgery", "Pediatric Dentistry"].map((s, i) => (
        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/30">
          <GripVertical className="h-4 w-4 text-muted-foreground shrink-0 cursor-grab" />
          <div className="flex-1 grid sm:grid-cols-2 gap-3">
            <Field label="Title" value={s} />
            <Field label="Description" value="" placeholder="Brief description..." />
          </div>
          <button className="text-muted-foreground hover:text-destructive transition-colors p-1">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ))}
      <button className="flex items-center gap-1.5 font-display text-xs font-semibold text-accent hover:text-accent/80">
        <Plus className="h-3.5 w-3.5" /> Add Service
      </button>
    </Section>

    <Section title="Parallax Banner" description="Full-width image banner with overlay text">
      <Field label="Heading" value="Building Smiles That Last a Lifetime" />
      <Field label="Subtext" value="Over 1,000 patients trust us with their dental health" />
      <ImageField label="Banner Image" />
    </Section>

    <Section title="How It Works" description="Step-by-step process for new patients">
      {[
        { num: "01", title: "Book Online", desc: "WhatsApp us or call to schedule a convenient time." },
        { num: "02", title: "Consultation", desc: "Meet our dentist for a thorough check-up and treatment plan." },
        { num: "03", title: "Treatment", desc: "Receive gentle, expert care using modern equipment." },
        { num: "04", title: "Smile Bright", desc: "Walk out with a healthier, more confident smile." },
      ].map((s, i) => (
        <div key={i} className="grid grid-cols-[50px_1fr] gap-3 p-3 rounded-xl bg-muted/30 border border-border/30">
          <Field label="Step" value={s.num} />
          <div className="space-y-3">
            <Field label="Title" value={s.title} />
            <Field label="Description" value={s.desc} />
          </div>
        </div>
      ))}
    </Section>

    <Section title="Gallery Preview" description="Image grid shown on homepage">
      <p className="font-body text-xs text-muted-foreground">Manage gallery images on the <a href="/admin/gallery" className="text-accent font-semibold">Gallery Page</a>.</p>
      <Field label="Section Heading" value="See Our Work in Action" />
      <Field label="Section Description" value="A glimpse into our modern facility, advanced procedures, and the beautiful smiles we create every day." multiline />
    </Section>

    <Section title="Testimonials" description="Patient reviews and ratings">
      {[
        { name: "Adaeze O.", text: "Rubi Smile made my first dental visit so comfortable..." },
        { name: "Ibrahim M.", text: "I had a root canal here and was amazed at how painless it was..." },
        { name: "Blessing A.", text: "My kids love going to the dentist now — that says everything!..." },
      ].map((t, i) => (
        <div key={i} className="p-4 rounded-xl bg-muted/30 border border-border/30 space-y-3">
          <Field label="Name" value={t.name} />
          <Field label="Review" value={t.text} multiline />
          <div>
            <label className="block font-display text-xs font-semibold text-foreground mb-1.5">Rating</label>
            <select defaultValue="5" className="rounded-xl border border-border bg-background px-4 py-2 font-body text-sm">
              {[1, 2, 3, 4, 5].map((r) => <option key={r} value={r}>{r} Stars</option>)}
            </select>
          </div>
          <button className="text-xs text-destructive font-display font-semibold flex items-center gap-1">
            <Trash2 className="h-3 w-3" /> Remove
          </button>
        </div>
      ))}
      <button className="flex items-center gap-1.5 font-display text-xs font-semibold text-accent hover:text-accent/80">
        <Plus className="h-3.5 w-3.5" /> Add Testimonial
      </button>
    </Section>

    <Section title="FAQ Section" description="Frequently asked questions">
      {[
        { q: "Do you accept NHIS insurance?", a: "Yes! We accept NHIS for eligible treatments..." },
        { q: "Is the first consultation free?", a: "We offer affordable initial consultations..." },
        { q: "How do I book an appointment?", a: "You can book via WhatsApp, phone call, or walk in..." },
        { q: "Do you handle dental emergencies?", a: "Yes, we accommodate dental emergencies..." },
        { q: "Is teeth whitening safe?", a: "Absolutely. We use clinically proven treatments..." },
      ].map((f, i) => (
        <div key={i} className="p-3 rounded-xl bg-muted/30 border border-border/30 space-y-3">
          <Field label="Question" value={f.q} />
          <Field label="Answer" value={f.a} multiline />
          <button className="text-xs text-destructive font-display font-semibold flex items-center gap-1">
            <Trash2 className="h-3 w-3" /> Remove
          </button>
        </div>
      ))}
      <button className="flex items-center gap-1.5 font-display text-xs font-semibold text-accent hover:text-accent/80">
        <Plus className="h-3.5 w-3.5" /> Add FAQ
      </button>
    </Section>

    <Section title="Location Section" description="Address, hours, and contact info">
      <Field label="Section Heading" value="Visit us in Karu, Abuja" />
      <Field label="Address" value="No 6 November Street, near Chief Palace Layout, Karu, Abuja" />
      <Field label="Working Hours" value="Mon – Fri: 9:00 AM – 5:30 PM" />
      <Field label="Saturday Hours" value="Sat: 9:00 AM – 3:30 PM | Sun: Closed" />
      <Field label="Phone Number" value="+2349024403837" />
      <Field label="Secondary Phone" value="07043298987" />
      <ImageField label="Location Image" />
    </Section>

    <Section title="CTA Section" description="Final call-to-action at bottom of page">
      <Field label="Heading" value="Ready for a brighter smile?" />
      <Field label="Description" value="Book your appointment today. Walk-ins welcome for emergencies. Your healthiest smile is just one visit away." multiline />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Primary CTA Text" value="WhatsApp Us" />
        <Field label="Primary CTA Link" value="https://wa.me/2349038535214" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Secondary CTA Text" value="Call Now" />
        <Field label="Secondary CTA Link" value="tel:+2349024403837" />
      </div>
    </Section>

    <div className="pt-4">
      <SaveButton />
    </div>
  </div>
);

export default EditHomePage;
