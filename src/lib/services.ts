import {
  Anchor,
  ClipboardCheck,
  FileCheck,
  Package,
  Ship,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";

export type ServiceOffering = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  summary: string;
  overview: string;
  icon: LucideIcon;
  image: string;
  heroImage?: string;
  highlights: string[];
  deliverables: string[];
  process: string[];
  outcomes: string[];
  coverage: string[];
};

export const serviceCatalog: ServiceOffering[] = [
  {
    slug: "ship-management-operation",
    title: "Ship Management & Operation",
    shortTitle: "Ship Management",
    category: "Technical & Operational Management",
    summary:
      "Technical management, operational oversight, crew coordination, voyage performance optimization, and regulatory compliance management.",
    overview:
      "Keshar Marine delivers disciplined ship management and daily operational support for owners and operators. The service covers technical supervision, operational coordination, crew interfaces, voyage performance follow-up, and compliance control so vessels remain safe, efficient, and commercially dependable.",
    icon: Ship,
    image: "/images/ship-management-operation.jpg",
    heroImage: "/images/ship-management-operation.jpg",
    highlights: [
      "Technical management",
      "Operational oversight",
      "Crew coordination",
      "Voyage performance optimization",
    ],
    deliverables: [
      "Technical management",
      "Operational oversight",
      "Crew coordination",
      "Voyage performance optimization",
      "Regulatory compliance management",
    ],
    process: [
      "Review vessel condition, operating requirements, crew interfaces, and compliance status.",
      "Build a vessel operating plan covering technical, crew, voyage, and regulatory priorities.",
      "Coordinate daily follow-up with owners, vessel teams, agents, and technical suppliers.",
      "Report performance, exceptions, compliance actions, and upcoming operational needs.",
    ],
    outcomes: [
      "Reliable daily vessel operation",
      "Improved voyage performance visibility",
      "Stronger regulatory control",
      "Clear owner communication",
    ],
    coverage: ["UAE", "Oman", "Singapore", "China", "Hong Kong", "Global partner ports"],
  },
  {
    slug: "marine-procurement-ship-chandlery",
    title: "Marine Procurement & Ship Chandlery",
    shortTitle: "Procurement & Chandlery",
    category: "Marine Supply",
    summary:
      "OEM machinery spares, safety equipment, lubricants, chemicals, paints, provisions, bonded stores, cabin supplies, and electrical components.",
    overview:
      "Our marine procurement and ship chandlery service supports vessels with verified stores, spares, consumables, provisions, bonded stores, and safety items. Keshar Marine coordinates sourcing, supplier checks, consolidation, documentation, and delivery so vessels receive the right items at the right port.",
    icon: Package,
    image: "/images/marine-procurement.png",
    heroImage: "/images/marine-procurement.png",
    highlights: [
      "OEM machinery spares",
      "LSA / FFA equipment",
      "Marine lubricants and chemicals",
      "Provisions and bonded stores",
    ],
    deliverables: [
      "OEM & genuine machinery spare parts - deck & engine",
      "LSA / FFA safety equipment & consumables",
      "Marine lubricants, chemicals & paints",
      "Provisions, bonded stores & cabin supplies",
      "Electrical & electronic components",
    ],
    process: [
      "Receive requisitions and clarify maker, model, certificates, brand preferences, and delivery windows.",
      "Source from qualified suppliers and confirm price, lead time, documents, and availability.",
      "Consolidate goods, inspect packing, and prepare delivery documentation.",
      "Coordinate vessel delivery by port, launch, truck, or local partner support.",
    ],
    outcomes: [
      "Faster vessel replenishment",
      "Cleaner purchase records",
      "Better supplier accountability",
      "Reduced procurement friction",
    ],
    coverage: ["UAE", "Oman", "Singapore", "China", "GCC ports", "Global sourcing partners"],
  },
  {
    slug: "crew-change-services",
    title: "Crew Change Services",
    shortTitle: "Crew Change",
    category: "Crew Logistics",
    summary:
      "Crew coordination and logistics including travel, accommodation, visa facilitation, and port coordination for crew changes worldwide.",
    overview:
      "Keshar Marine handles crew change coordination from planning through boarding or sign-off. The service includes travel arrangements, accommodation, visa facilitation, immigration support, port access, and communication between vessel, agent, manning office, and owner.",
    icon: Users,
    image: "/images/crew-change.png",
    heroImage: "/images/crew-change.png",
    highlights: [
      "Travel and accommodation",
      "Visa facilitation",
      "Port coordination",
      "Worldwide crew change support",
    ],
    deliverables: [
      "Crew coordination & logistics including:",
      "Travel, accommodation",
      "Visa facilitation",
      "Port coordination for crew changes worldwide",
    ],
    process: [
      "Collect crew details, vessel ETA, port requirements, and immigration constraints.",
      "Confirm travel, hotel, visa, transport, and port access arrangements.",
      "Coordinate arrival, sign-on, sign-off, launch, and transfer requirements.",
      "Close the crew movement with status confirmation and supporting documents.",
    ],
    outcomes: [
      "Reduced crew change delays",
      "Clearer document control",
      "Better crew welfare",
      "More predictable port coordination",
    ],
    coverage: ["Dubai", "UAE ports", "Oman", "Singapore", "China", "Worldwide partner network"],
  },
  {
    slug: "sea-shipping-lines-agents",
    title: "Sea Shipping Lines Agents",
    shortTitle: "Shipping Line Agents",
    category: "Port Agency",
    summary:
      "Vessel handling, port formalities, documentation, customs clearance, crew coordination, immigration support, and UAE, Oman, Singapore port coverage.",
    overview:
      "Keshar Marine acts as a dependable local partner for shipping lines, principals, owners, and operators. We coordinate port formalities, vessel handling, customs documentation, local authorities, crew and immigration support, and daily operational communication during port calls.",
    icon: Anchor,
    image: "/images/shipping-agency.png",
    heroImage: "/images/top.jpeg",
    highlights: [
      "Vessel handling",
      "Port formalities",
      "Customs clearance",
      "Crew immigration support",
    ],
    deliverables: [
      "Vessel handling & port formalities",
      "Documentation & customs clearance",
      "Crew coordination & immigration support",
      "UAE, Oman & Singapore port coverage",
    ],
    process: [
      "Confirm vessel ETA, port requirements, cargo scope, and principal instructions.",
      "Prepare arrival documentation and coordinate port, terminal, customs, and vendors.",
      "Monitor port stay and keep principals updated on status, risks, and changes.",
      "Complete sailing formalities and submit post-departure documentation.",
    ],
    outcomes: [
      "Smoother port calls",
      "Better stakeholder visibility",
      "Reduced local delays",
      "Cleaner voyage documentation",
    ],
    coverage: ["UAE", "Oman", "Singapore", "China", "Suez and regional transit partners"],
  },
  {
    slug: "ship-charter-rental-intermediator",
    title: "Ship Charter & Rental Intermediator",
    shortTitle: "Ship Charter",
    category: "Commercial Support",
    summary:
      "Voyage and time charter negotiations, charter party documentation review, owner and charterer representation, and operational coordination.",
    overview:
      "Our ship charter and rental intermediary service connects practical vessel availability with commercial requirements. Keshar Marine supports owner and charterer communication, voyage and time charter negotiations, charter party documentation review, and operational coordination from enquiry through fixture support.",
    icon: FileCheck,
    image: "/images/ship-charter.png",
    heroImage: "/images/ship-charter.png",
    highlights: [
      "Voyage charter support",
      "Time charter support",
      "Charter party review",
      "Owner and charterer representation",
    ],
    deliverables: [
      "Voyage & time charter negotiations",
      "Charter party documentation & review",
      "Owner & charterer representation",
      "Operational coordination & support",
    ],
    process: [
      "Clarify cargo, route, laycan, vessel type, schedule, and commercial expectations.",
      "Identify suitable vessel options or cargo opportunities through trusted contacts.",
      "Coordinate negotiation support, documentation review, and operational assumptions.",
      "Assist with handover to agency, operations, or post-fixture support teams.",
    ],
    outcomes: [
      "Faster commercial matching",
      "Better vessel suitability checks",
      "Clearer fixture coordination",
      "Reduced communication gaps",
    ],
    coverage: ["GCC", "Indian Ocean", "South Asia", "Southeast Asia", "Worldwide chartering contacts"],
  },
  {
    slug: "vessel-inspection-registration",
    title: "Vessel Inspection & Registration",
    shortTitle: "Inspection & Registration",
    category: "Flag & Survey Support",
    summary:
      "Flag state and class registration, pre-purchase and condition surveys, compliance audits, and certification support.",
    overview:
      "Keshar Marine assists owners and operators with vessel inspection and registration requirements. We support flag state and class registration, pre-purchase and condition surveys, compliance audits, certification follow-up, document readiness, and technical attendance where required.",
    icon: ClipboardCheck,
    image: "/images/vessel-inspection.png",
    heroImage: "/images/about-hero.png",
    highlights: [
      "Flag state registration",
      "Class registration",
      "Condition surveys",
      "Certification support",
    ],
    deliverables: [
      "Flag state & class registration",
      "Pre-purchase & condition surveys",
      "Compliance audits & certification support",
    ],
    process: [
      "Review vessel particulars, ownership documents, class status, and intended flag requirements.",
      "Prepare document lists, coordinate submissions, and track authority feedback.",
      "Arrange inspection attendance or technical review where required.",
      "Close the file with status notes, certificates, and renewal reminders.",
    ],
    outcomes: [
      "Cleaner registration files",
      "Lower documentation rework",
      "Better inspection visibility",
      "More confident vessel transfers",
    ],
    coverage: ["UAE", "Oman", "International flag support", "Class and survey partner network"],
  },
  {
    slug: "shipping-lines-freight-passenger-transportation",
    title: "Shipping Lines of Freight & Passenger Transportation",
    shortTitle: "Freight & Passenger",
    category: "Transport Operations",
    summary:
      "Cargo and passenger transport management, regional and international route operations, and safe, efficient, fully compliant voyages.",
    overview:
      "Keshar Marine coordinates freight and passenger transportation requirements with attention to vessel suitability, route planning, schedule visibility, documentation, and operational compliance. The service supports regional and international movement requirements through practical maritime coordination.",
    icon: Truck,
    image: "/images/freight-transport.png",
    heroImage: "/images/freight-transport.png",
    highlights: [
      "Cargo transport management",
      "Passenger transport management",
      "Regional route operations",
      "International route operations",
    ],
    deliverables: [
      "Cargo & passenger transport management",
      "Regional & international route operations",
      "Safe, efficient & fully compliant voyages",
    ],
    process: [
      "Confirm cargo or passenger requirements, ports, schedule, and documentation needs.",
      "Match the movement with a suitable vessel, route, and local coordination plan.",
      "Manage operational updates through loading, voyage, arrival, and discharge or disembarkation.",
      "Complete voyage close-out with documents and exception notes.",
    ],
    outcomes: [
      "Safer movement planning",
      "Better schedule transparency",
      "Reduced local coordination gaps",
      "Stronger compliance control",
    ],
    coverage: ["GCC", "Middle East routes", "South Asia", "Southeast Asia", "International partner ports"],
  },
];

export const getServiceBySlug = (slug: string) =>
  serviceCatalog.find((service) => service.slug === slug);
