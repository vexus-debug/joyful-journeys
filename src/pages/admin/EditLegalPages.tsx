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

const Field = ({ label, value, multiline, rows = 4 }: { label: string; value: string; multiline?: boolean; rows?: number }) => (
  <div>
    <label className="block font-display text-xs font-semibold text-foreground mb-1.5">{label}</label>
    {multiline ? (
      <textarea defaultValue={value} rows={rows} className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none" />
    ) : (
      <input defaultValue={value} className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50" />
    )}
  </div>
);

const SaveButton = () => (
  <button className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-display text-sm font-bold text-primary-foreground hover:-translate-y-px hover:shadow-lg transition-all active:scale-[0.98]">
    <Save className="h-4 w-4" />Save Changes
  </button>
);

const EditLegalPages = () => (
  <div className="space-y-4 max-w-4xl">
    <div className="flex items-center justify-between mb-2">
      <div>
        <h2 className="font-display text-xl font-extrabold text-foreground">Legal Pages</h2>
        <p className="font-body text-sm text-muted-foreground">Edit privacy policy, terms, and disclaimer</p>
      </div>
      <SaveButton />
    </div>

    <Section title="Privacy Policy" description="Data collection and usage policies" defaultOpen>
      <Field label="Page Title" value="Privacy Policy" />
      <Field label="Last Updated" value="March 2026" />
      <Field label="Section 1: Information We Collect" value="We collect personal information you provide when booking appointments, including your name, phone number, email address, and medical/dental history relevant to your treatment." multiline rows={4} />
      <Field label="Section 2: How We Use Your Information" value="Your information is used to: provide dental care and treatment, schedule and manage appointments, communicate with you about your care, process NHIS claims where applicable, improve our services, and comply with legal obligations." multiline rows={4} />
      <Field label="Section 3: Data Protection" value="We implement appropriate security measures to protect your personal and medical information. Access to patient records is restricted to authorized dental professionals involved in your care." multiline rows={3} />
      <Field label="Section 4: Third-Party Sharing" value="We do not sell your personal information. We may share information with NHIS for insurance processing, dental laboratories for treatment purposes, or as required by Nigerian law." multiline rows={3} />
      <Field label="Section 5: Your Rights" value="You have the right to access, correct, or request deletion of your personal information. Contact us at rubiismiledentalclinic@gmail.com for any privacy-related requests." multiline rows={2} />
      <Field label="Section 6: Contact" value="For questions about this privacy policy, contact Rubi Smile Dental Clinic at rubiismiledentalclinic@gmail.com or +234 902 440 3837." multiline rows={2} />
    </Section>

    <Section title="Terms & Conditions" description="Service terms and patient responsibilities">
      <Field label="Page Title" value="Terms & Conditions" />
      <Field label="Last Updated" value="March 2026" />
      <Field label="Section 1: Services" value="Rubi Smile Dental Clinic provides dental healthcare services including preventive, restorative, cosmetic, surgical, orthodontic, and pediatric dentistry. All treatments are provided by qualified dental professionals." multiline rows={3} />
      <Field label="Section 2: Appointments" value="Appointments can be booked via phone, WhatsApp, or in person. We request at least 24 hours notice for cancellations. Repeated no-shows may affect future scheduling priority." multiline rows={3} />
      <Field label="Section 3: Payment" value="Payment is due at the time of service unless covered by NHIS. We accept cash, bank transfers, and applicable insurance. Treatment plans with associated costs will be discussed before procedures begin." multiline rows={3} />
      <Field label="Section 4: NHIS Patients" value="NHIS coverage is subject to the terms of your insurance plan. Some treatments may not be covered and will require out-of-pocket payment." multiline rows={2} />
      <Field label="Section 5: Patient Responsibilities" value="Patients are responsible for providing accurate medical history, following post-treatment instructions, and attending scheduled follow-up appointments." multiline rows={2} />
      <Field label="Section 6: Limitation of Liability" value="While we strive for the best outcomes, dental procedures carry inherent risks. Rubi Smile Dental Clinic will not be liable for complications arising from patient non-compliance." multiline rows={2} />
    </Section>

    <Section title="Disclaimer" description="Medical and legal disclaimers">
      <Field label="Page Title" value="Disclaimer" />
      <Field label="Last Updated" value="March 2026" />
      <Field label="Medical Disclaimer" value="The information provided on this website is for general informational purposes only and does not constitute medical or dental advice." multiline rows={3} />
      <Field label="No Doctor-Patient Relationship" value="Browsing this website or contacting us through our website does not create a doctor-patient relationship." multiline rows={2} />
      <Field label="Treatment Outcomes" value="Results from dental treatments vary by individual. Images or descriptions of treatments on this website are for illustrative purposes and do not guarantee specific outcomes." multiline rows={2} />
      <Field label="External Links" value="This website may contain links to external websites. Rubi Smile Dental Clinic is not responsible for the content or accuracy of external sites." multiline rows={2} />
      <Field label="Emergency Notice" value="If you are experiencing a dental emergency, please call us directly at +234 800 000 0000 or visit our clinic immediately." multiline rows={2} />
    </Section>

    <div className="pt-4"><SaveButton /></div>
  </div>
);

export default EditLegalPages;
