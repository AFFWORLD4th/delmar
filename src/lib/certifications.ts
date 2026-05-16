import { Award, CheckCircle2, ShieldCheck, type LucideIcon } from "lucide-react";

export type Certification = {
  slug: string;
  title: string;
  area: string;
  summary: string;
  icon: LucideIcon;
  details: string[];
  controls: string[];
  fileUrl?: string;
};

export const certifications: Certification[] = [
  {
    slug: "iso-9001",
    title: "ISO 9001:2015",
    area: "Quality Management",
    summary:
      "Quality management practices for consistent ship management, procurement, documentation, and client service delivery.",
    icon: Award,
    details: [
      "Structured service delivery and internal process control",
      "Supplier and procurement quality checks",
      "Corrective action tracking for operational improvements",
      "Documented client communication and service records",
    ],
    controls: ["Process accountability", "Supplier review", "Service consistency", "Continuous improvement"],
    fileUrl: "/KESHAR-ISO SOFT COPY.pdf",
  },
  {
    slug: "iso-14001",
    title: "ISO 14001:2015",
    area: "Environmental Management",
    summary:
      "Environmental management principles supporting responsible marine operations, pollution prevention, and sustainable procurement.",
    icon: ShieldCheck,
    details: [
      "Environmental risk awareness in marine operations",
      "Support for compliant handling of chemicals, waste, and technical stores",
      "Supplier coordination with attention to responsible sourcing",
      "Operational practices aligned with pollution prevention goals",
    ],
    controls: ["Environmental risk review", "Pollution prevention", "Responsible sourcing", "Waste awareness"],
  },
  {
    slug: "ism-doc",
    title: "ISM DOC",
    area: "Document of Compliance",
    summary:
      "Safety management alignment for the safe operation of ships, emergency readiness, and controlled marine procedures.",
    icon: CheckCircle2,
    details: [
      "Safety management documentation and operational discipline",
      "Emergency response awareness and escalation support",
      "Vessel operation support aligned with international safety expectations",
      "Follow-up of deficiencies, corrective actions, and compliance records",
    ],
    controls: ["Safety procedures", "Emergency readiness", "Deficiency follow-up", "Compliance records"],
  },
];

export const getCertificationBySlug = (slug: string) =>
  certifications.find((certification) => certification.slug === slug);
