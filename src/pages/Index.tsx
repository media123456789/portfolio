import { Linkedin, Mail, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-trading.jpg";

// Placeholder URLs - replace with actual values
const GOOGLE_FORM_URL = "https://forms.google.com/YOUR_FORM_ID";
const LINKEDIN_URL = "https://linkedin.com/in/YOUR_PROFILE";
const EMAIL = "contact@example.com";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative">
        <div className="container mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground tracking-tight">
                Quantitative Trading Infrastructure & Automated Portfolio Systems
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Built for founders, creators & high-income individuals.
              </p>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-base font-medium hover:opacity-90 transition-opacity"
              >
                Apply for Private Access
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Trading terminal with candlestick charts and server infrastructure"
                className="w-full h-auto shadow-lg"
                fetchPriority="high"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-16">
            Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <ServiceItem
              title="Automated Portfolio Systems"
              description="Fully autonomous portfolio management with dynamic rebalancing and risk-adjusted allocation."
            />
            <ServiceItem
              title="Market Making Bots"
              description="Custom market makers for CEX/DEX with spread optimization and inventory management."
            />
            <ServiceItem
              title="HFT / Low-Latency Infrastructure"
              description="Sub-millisecond execution pipelines with co-location and optimized network stacks."
            />
            <ServiceItem
              title="Risk Management & Analytics"
              description="Real-time PnL tracking, drawdown controls, and portfolio stress testing frameworks."
            />
            <ServiceItem
              title="Custom Trading Algorithms"
              description="Bespoke strategies including statistical arbitrage, momentum, and mean reversion models."
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 lg:py-28 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-16">
            Case Studies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <CaseStudyCard
              title="Momentum Strategy Backtest"
              stat="+12.4%"
              statLabel="Annual Return"
              description="Multi-asset momentum strategy with 0.87 Sharpe ratio across a 3-year backtest period."
            />
            <CaseStudyCard
              title="Latency Optimization"
              stat="340μs"
              statLabel="Execution Time"
              description="Reduced order-to-fill latency from 2.1ms to 340 microseconds for a crypto market maker."
            />
            <CaseStudyCard
              title="ML Signal Integration"
              stat="+8.2%"
              statLabel="Alpha Improvement"
              description="Integrated gradient boosting signals into existing systematic strategy, improving risk-adjusted returns."
            />
          </div>
        </div>
      </section>

      {/* Work With Me Section */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Exclusive Client Application
          </h2>
          <p className="text-muted-foreground mb-8">
            Services open only to clients located in USA, UK, UAE, Singapore, Canada — selective intake (3–4 clients at a time).
          </p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-base font-medium hover:opacity-90 transition-opacity"
          >
            Submit Application
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-sm text-muted-foreground mt-8">
            By submitting, you agree to our privacy policy. We do not share your information with third parties.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Contact
              </h2>
              <p className="text-muted-foreground text-sm">
                Selective collaborations only.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Quantitative Trading Systems. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ServiceItem = ({ title, description }: { title: string; description: string }) => (
  <article className="space-y-3">
    <h3 className="text-lg font-medium text-foreground">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
  </article>
);

const CaseStudyCard = ({
  title,
  stat,
  statLabel,
  description,
}: {
  title: string;
  stat: string;
  statLabel: string;
  description: string;
}) => (
  <article className="bg-background p-8 border border-border">
    <h3 className="text-base font-medium text-foreground mb-4">{title}</h3>
    <div className="mb-4">
      <span className="text-3xl font-semibold text-foreground">{stat}</span>
      <span className="text-sm text-muted-foreground ml-2">{statLabel}</span>
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </article>
);

export default Index;
