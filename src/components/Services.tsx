type ServiceProps = {
  title: string;
  priceINR: number;
  delivery: string;
  description: string;
  features: string[];
  startingFrom?: boolean;
  featured?: boolean;
};

const USD_RATE = 85; // Example exchange rate, you can update this as needed
const formatINR = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

const formatUSD = (amount: number) =>
  `≈ $${Math.round(amount / USD_RATE).toLocaleString("en-US")}`;

const WhatsAppButton = ({ text }: { text: string }) => {
  const whatsappNumber = "919211591677"; // replace with your number
  const message = encodeURIComponent(text);

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="inline-block rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-black transition hover:bg-emerald-500"
    >
      Discuss on WhatsApp
    </a>
  );
};

const ServiceBlock = ({
  title,
  priceINR,
  delivery,
  description,
  features,
  startingFrom = false,
  featured = false,
}: ServiceProps) => {
  const prefill = `Hi, I’d like to discuss the ${title}.`;
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
          {formatINR(priceINR)}
          {startingFrom && "+"}
          <span className="ml-2 text-sm font-normal text-neutral-400">
            ({formatUSD(priceINR)}
            {startingFrom && "+"})
          </span>
          {title === "Maintenance & Support" && (
            <span className="text-sm font-normal text-neutral-400">
              {" "}
              / month
            </span>
          )}
        </p>
        <p className="text-sm text-neutral-400">Delivery: {delivery}</p>
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
  <section className="mx-auto w-[90%] md:w-[70%] pt-32 pb-24">
    <h1 className="mb-6 text-center text-3xl font-bold md:text-5xl">
      Services
    </h1>

    <p className="mx-auto mb-20 max-w-2xl text-center text-neutral-500 md:text-lg">
      Choose the system that fits your business goals. Prices, timelines, and
      deliverables are clear so you know what you’re buying.
    </p>

    <div className="grid gap-12">
      <ServiceBlock
        title="Starter Website (Small Site)"
        priceINR={25000}
        delivery="7–10 days"
        description="A clean, fast website for individuals or small businesses that need a professional online presence without complexity."
        features={[
          "Up to 3 pages (Home, About, Contact)",
          "Responsive design for all devices",
          "WhatsApp inquiry button",
          "Basic SEO setup",
          "Fast-loading, lightweight build",
          "Deployment & go-live support",
        ]}
      />

      <ServiceBlock
        title="Business Website (Medium Site)"
        priceINR={45000}
        startingFrom
        featured
        delivery="2–3 weeks"
        description="A structured, conversion-focused website designed to clearly present your services and generate consistent inquiries. Additional pages can be added if required."
        features={[
          "Up to 6 pages (Home, About, Services, Contact, etc.)",
          "Custom design aligned with your brand",
          "Mobile-first responsive layout",
          "WhatsApp + form-based lead capture",
          "SEO foundations (meta tags, sitemap, schema)",
          "Performance optimization",
          "Production deployment",
        ]}
      />

      <ServiceBlock
        title="Advanced Website (Large Site)"
        priceINR={75000}
        startingFrom
        delivery="4–5 weeks"
        description="A feature-rich website for growing businesses that need advanced pages, integrations, and long-term scalability."
        features={[
          "8–12 pages or dynamic sections",
          "Advanced UI interactions & animations",
          "CMS or admin-controlled content (if required)",
          "Multiple lead capture flows",
          "Enhanced SEO structure",
          "Scalable architecture",
          "Priority deployment & handover",
        ]}
      />

      {/* Landing Page + Lead Capture */}
      <ServiceBlock
        title="Landing Page + Lead Capture"
        priceINR={20000}
        delivery="1 week"
        description="High-conversion landing page tailored to one offer, campaign, or product with lead capture and tracking."
        features={[
          "Compelling hero + CTA design",
          "Lead capture form with notifications",
          "Analytics setup (Google Analytics)",
          "A/B readiness (optional)",
          "Fast performance optimization",
        ]}
      />

      {/* Web App / SaaS MVP
      <ServiceBlock
        title="Web App / SaaS MVP"
        price="₹1,25,000+"
        delivery="6–8 weeks"
        description="Minimum viable product for your SaaS idea with auth, database, roles, and core features."
        features={[
          "User authentication & roles",
          "PostgreSQL/MongoDB data layer",
          "Dashboard + user flows",
          "API design & documentation",
          "Basic analytics",
          "Deployable and maintainable stack",
        ]}
      /> */}

      {/* AI-Enhanced Workflow & Integrations */}
      <ServiceBlock
        title="AI Workflow & Tool Integrations"
        priceINR={35000}
        startingFrom
        delivery="2–3 weeks"
        description="Automation workflows that connect systems, reduce manual work, and streamline operations."
        features={[
          "n8n / Zapier workflows",
          "Custom API integrations",
          "AI task helpers",
          "Webhook triggers",
          "Alert & task automation",
        ]}
      />

      {/* Maintenance & Support Plans */}
      <ServiceBlock
        title="Maintenance & Support"
        priceINR={5000}
        delivery="Ongoing"
        description="Keep your site secure, updated, and running smoothly with monthly maintenance."
        features={[
          "Uptime & monitoring",
          "CMS updates & backups",
          "Bug fixes & small tweaks",
          "Priority WhatsApp support",
          "Does not include new features or redesigns",
        ]}
      />
    </div>
    <p className="mt-16 text-center text-sm text-neutral-500">
      Hosting, domain, paid tools, and third-party services are billed
      separately unless stated otherwise.
    </p>
    <p className="mt-2 text-center text-xs text-neutral-600">
      All projects follow a defined scope, timeline, and handover process.
    </p>
    <p className="mt-2 text-center text-xs text-neutral-600">
      USD prices are approximate and calculated using a reference exchange rate.
    </p>
  </section>
);

export default Services;
