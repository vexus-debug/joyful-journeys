import { useState } from "react";
import { Save, ChevronDown, ChevronUp } from "lucide-react";

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

const EditContactPage = () => (
  <div className="space-y-4 max-w-4xl">
    <div className="flex items-center justify-between mb-2">
      <div>
        <h2 className="font-display text-xl font-extrabold text-foreground">Contact Page</h2>
        <p className="font-body text-sm text-muted-foreground">Edit contact information and settings</p>
      </div>
      <SaveButton />
    </div>

    <Section title="Page Header" description="Title and intro text" defaultOpen>
      <Field label="Badge Text" value="Get In Touch" />
      <Field label="Page Title" value="Contact Us" />
      <Field label="Description" value="Ready to book an appointment or have a question? We'd love to hear from you." multiline />
    </Section>

    <Section title="Contact Information" description="Address, phone, email and hours">
      <Field label="Address" value="No 6 November Street, near Chief Palace Layout, Karu, Abuja" />
      <Field label="Phone / Enquiry" value="0902 440 3837" />
      <Field label="Email" value="rubiismiledentalclinic@gmail.com" />
      <Field label="Working Hours" value="Mon – Fri: 9:00 AM – 5:30 PM | Sat: 9:00 AM – 3:30 PM | Sun: Closed" />
      <Field label="WhatsApp Number" value="2349038535214" />
      <Field label="WhatsApp Button Text" value="WhatsApp Us" />
      <Field label="Call Button Text" value="Call Now" />
    </Section>

    <Section title="Google Maps Embed" description="Map embed URL for location">
      <Field label="Map Embed URL" value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31522.52408!2d7.55!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a1!2sKaru!5e0!3m2!1sen!2sng!4v1" multiline />
      <p className="font-body text-xs text-muted-foreground">Paste the full Google Maps embed URL. You can get this from Google Maps → Share → Embed a map.</p>
    </Section>

    <div className="pt-4"><SaveButton /></div>
  </div>
);

export default EditContactPage;
