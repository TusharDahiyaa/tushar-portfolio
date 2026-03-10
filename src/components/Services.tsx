import { Button } from "./ui/button";

type ServiceProps = {
  title: string;
  priceUSD: number;
  delivery: string;
  description: string;
  features: string[];
  startingFrom?: boolean;
  featured?: boolean;
};

const formatUSD = (amount: number) => `$${amount.toLocaleString("en-US")}`;

const WhatsAppButton = ({ text }: { text: string }) => {
  const whatsappNumber = "919211591677";
  const message = encodeURIComponent(text);

  return (
    <Button asChild variant="CTA" size="lg">
      <a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noreferrer"
      >
        Discuss Project
      </a>
    </Button>
  );
};

const ServiceBlock = ({
  title,
  priceUSD,
  delivery,
  description,
  features,
  startingFrom = false,
  featured = false,
}: ServiceProps) => {
  const prefill = `Hi, I'd like to discuss the ${title}.`;

  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
      <div className="mb-6 flex flex-col gap-2">
        {featured && (
          <span className="mb-2 inline-block w-fit rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
            Most Popular
          </span>
        )}

        <h3 className="text-2xl font-bold">{title}</h3>

        <p className="text-xl font-semibold text-emerald-400">
          {formatUSD(priceUSD)}
          {startingFrom && "+"}

          {title === "Maintenance & Support" && (
            <span className="text-sm font-normal text-neutral-400">
              {" "}
              / month
            </span>
          )}
        </p>

        <p className="text-sm text-neutral-400">Delivery: {delivery}</p>

        <p className="text-xs text-neutral-500">
          Timeline depends on project scope and content readiness.
        </p>
      </div>

      <p className="mb-6 text-neutral-300">{description}</p>

      <ul className="mb-8 space-y-2 text-neutral-400">
        {features.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>

      <WhatsAppButton text={prefill} />
    </div>
  );
};

const Services = () => (
  <section className="mx-auto w-[90%] md:w-[70%] pt-12 pb-24">
    <h1 className="mb-6 text-center text-3xl font-bold md:text-5xl">
      Services
    </h1>

    <p className="mx-auto mb-20 max-w-2xl text-center text-neutral-500 md:text-lg">
      Choose the system that fits your business goals. Each project is built to
      generate enquiries, improve your online presence, and support long-term
      growth.
    </p>

    <div className="grid gap-12">
      <ServiceBlock
        title="Starter Website (Small Site)"
        priceUSD={450}
        delivery="5–7 business days"
        description="A clean, fast website for individuals or small businesses that need a professional online presence without unnecessary complexity."
        features={[
          "Up to 3 pages (Home, About, Contact)",
          "Responsive design for mobile and desktop",
          "Lead capture with WhatsApp or contact form",
          "Basic SEO setup",
          "Fast-loading lightweight build",
          "Deployment and go-live support",
        ]}
      />

      <ServiceBlock
        title="Business Website (Medium Site)"
        priceUSD={900}
        startingFrom
        featured
        delivery="10–14 business days"
        description="A structured, conversion-focused website designed to clearly present your services and consistently generate client enquiries."
        features={[
          "Up to 6 pages (Home, About, Services, Contact)",
          "Custom design aligned with your brand",
          "Mobile-first responsive layout",
          "Lead capture forms and enquiry flows",
          "SEO foundations (meta tags, sitemap, schema)",
          "Performance optimization",
          "Production deployment",
        ]}
      />

      <ServiceBlock
        title="Advanced Website (Large Site)"
        priceUSD={1600}
        startingFrom
        delivery="3–4 weeks"
        description="A scalable website for growing businesses that require advanced features, integrations, and flexible content structures."
        features={[
          "8–12 pages or dynamic sections",
          "Advanced UI interactions and animations",
          "CMS or admin-controlled content (if required)",
          "Multiple lead capture flows",
          "Enhanced SEO structure",
          "Scalable architecture",
          "Priority deployment and handover",
        ]}
      />

      <ServiceBlock
        title="Landing Page + Lead Capture"
        priceUSD={350}
        delivery="3–5 business days"
        description="A high-conversion landing page focused on a single offer, product, or marketing campaign."
        features={[
          "Conversion-focused hero section and CTAs",
          "Lead capture form with notifications",
          "Analytics setup",
          "Fast performance optimization",
        ]}
      />

      <ServiceBlock
        title="AI Workflow & Tool Integrations"
        priceUSD={700}
        startingFrom
        delivery="1–2 weeks"
        description="Automation systems that connect tools, eliminate repetitive work, and streamline business processes."
        features={[
          "Custom AI workflows",
          "API integrations between tools",
          "AI task helpers and assistants",
          "Webhook triggers",
          "Automated alerts and task handling",
        ]}
      />

      <ServiceBlock
        title="Maintenance & Support"
        priceUSD={60}
        delivery="Ongoing"
        description="Monthly maintenance to keep your website secure, updated, and performing reliably."
        features={[
          "Uptime monitoring",
          "Updates and backups",
          "Bug fixes and small improvements",
          "Priority support",
          "Does not include major redesigns or new features",
        ]}
      />
    </div>

    <p className="mt-16 text-center text-sm text-neutral-500">
      Projects start at the listed price and may vary based on scope,
      integrations, or additional pages.
    </p>

    <p className="mt-2 text-center text-xs text-neutral-600">
      Hosting, domain, and third-party services are billed separately unless
      explicitly included in the project scope.
    </p>

    <p className="mt-2 text-center text-xs text-neutral-600">
      All projects follow a defined scope, timeline, and handover process.
    </p>
  </section>
);

export default Services;
