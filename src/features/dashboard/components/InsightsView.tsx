import { useLanguage } from '../../../core/context/LanguageContext';

interface InsightsViewProps {
  onBackClick: () => void;
}

export const InsightsView = ({ onBackClick }: InsightsViewProps) => {
  const { lang } = useLanguage();

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      
      {/* Back button & Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid hsl(var(--border) / 0.8)', paddingBottom: '12px' }}>
        <button
          className="btn btn-secondary"
          style={{ flex: 'none', padding: '6px 12px', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px' }}
          onClick={onBackClick}
        >
          ⬅️ {lang === 'en' ? "Back to Dashboard" : lang === 'te' ? "డ్యాష్‌బోర్డ్‌కు తిరిగి వెళ్ళు" : "डैशबोर्ड पर वापस जाएं"}
        </button>
        <h3 style={{ margin: 0, fontSize: '0.92rem', color: 'hsl(var(--primary))', fontWeight: 800 }}>
          💡 Orvakal Industrial Hub
        </h3>
      </div>

      {/* 1. Context on Industrial Presence */}
      <div className="card" style={{ borderLeft: '4px solid #be123c', padding: '14px' }}>
        <h4 style={{ fontSize: '0.82rem', color: '#be123c', fontWeight: 800, margin: 0 }}>
          🏢 Context on Industrial Presence
        </h4>
        <p style={{ fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))', marginTop: '6px', lineHeight: 1.4, margin: '6px 0 0 0' }}>
          It is important to distinguish between large-scale anchor industries and the numerous smaller engineering and manufacturing units already operating in the Kurnool district, many of which serve the regional industrial ecosystem.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px', paddingLeft: '8px', borderLeft: '2px solid hsl(var(--border))' }}>
          <div>
            <strong style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))' }}>• Diverse Sectoral Base:</strong>
            <span style={{ fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))', marginLeft: '4px' }}>
              Historically, the area has hosted various small to medium-scale machinery manufacturers, foundries, and fabrication units. You may find local listings for entities involved in engineering, packaging, and industrial equipment supplying to the region.
            </span>
          </div>
          <div>
            <strong style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))' }}>• Upcoming Growth:</strong>
            <span style={{ fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))', marginLeft: '4px' }}>
              The state government is actively marketing the hub to reach a massive investment target of ₹50,000 crore. Consequently, many more "registrations" and land allotments are expected as the infrastructure (power, water, and logistics) is finalized.
            </span>
          </div>
        </div>
      </div>

      {/* 2. Key Companies Recently Linked to Orvakal */}
      <div className="card" style={{ borderLeft: '4px solid #0369a1', padding: '14px' }}>
        <h4 style={{ fontSize: '0.82rem', color: '#0369a1', fontWeight: 800, margin: 0 }}>
          🏭 Key Companies Recently Linked to Orvakal
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
          <div style={{ padding: '8px', backgroundColor: 'hsl(var(--muted) / 0.4)', borderRadius: '6px' }}>
            <strong style={{ fontSize: '0.75rem', color: 'hsl(var(--foreground))' }}>Virupaksha Organics Ltd</strong>
            <p style={{ margin: '2px 0 0 0', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.35 }}>
              A Hyderabad-based company that has received approval for the allotment of over 100 acres in the Guttapadu Industrial Cluster. They are establishing a major manufacturing facility for Active Pharmaceutical Ingredients (APIs) and organic chemicals, with a substantial investment commitment (approx. ₹1,225 crore) creating 1,500+ jobs.
            </p>
          </div>
          <div style={{ padding: '8px', backgroundColor: 'hsl(var(--muted) / 0.4)', borderRadius: '6px' }}>
            <strong style={{ fontSize: '0.75rem', color: 'hsl(var(--foreground))' }}>Sigachi Industries Ltd</strong>
            <p style={{ margin: '2px 0 0 0', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.35 }}>
              Another Hyderabad-based firm specializing in pharmaceutical excipients, such as microcrystalline cellulose (MCC). They are expanding their operations to the Orvakal node to establish a facility for Bulk Drugs, Drug Intermediates, and Specialty Chemicals on approximately 25 acres (Plot A-10).
            </p>
          </div>
          <div style={{ padding: '8px', backgroundColor: 'hsl(var(--muted) / 0.4)', borderRadius: '6px' }}>
            <strong style={{ fontSize: '0.75rem', color: 'hsl(var(--foreground))' }}>Sri Mandava Bio-Tech & Partners</strong>
            <p style={{ margin: '2px 0 0 0', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.35 }}>
              Developing high-value agro-processing and biological packaging operations to leverage the local logistics networks and primary agricultural produce in the Kurnool district.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Key Infrastructure & Support Features */}
      <div className="card" style={{ borderLeft: '4px solid #15803d', padding: '14px' }}>
        <h4 style={{ fontSize: '0.82rem', color: '#15803d', fontWeight: 800, margin: 0 }}>
          🔌 Key Infrastructure & Support Features
        </h4>
        <p style={{ fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))', marginTop: '6px', lineHeight: 1.4, margin: '6px 0 0 0' }}>
          To attract investment, the Andhra Pradesh government provides a business-friendly environment at the Orvakal Industrial Hub by focusing on "plug-and-play" infrastructure and strategic policy support.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
          <div>
            <strong style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))' }}>• Power & Water:</strong>
            <p style={{ margin: '2px 0 0 8px', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
              Dedicated, reliable power supply and water allocation (sourced from the Srisailam foreshore/Muchumarri project) are key priorities for industrial utility.
            </p>
          </div>
          <div>
            <strong style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))' }}>• Logistics:</strong>
            <p style={{ margin: '2px 0 0 8px', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
              The hub is designed with integrated logistics zones, internal road networks, and storm drainage systems to support heavy and light manufacturing.
            </p>
          </div>
          <div>
            <strong style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))' }}>• Waste Management:</strong>
            <p style={{ margin: '2px 0 0 8px', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
              Planned Common Effluent Treatment Plants (CETPs) and bio-waste disposal facilities are included in the master plan to meet environmental compliance standards.
            </p>
          </div>
          <div>
            <strong style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))' }}>• Sector-Specific Parks:</strong>
            <p style={{ margin: '2px 0 0 8px', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
              The hub includes dedicated clusters like the Guttapadu MSME Park, which is specifically designed to provide smaller enterprises with ready-to-use land and supporting utilities at subsidized rates to encourage rapid scaling.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Policy Incentives & Land Allotment */}
      <div className="card" style={{ borderLeft: '4px solid #6d28d9', padding: '14px' }}>
        <h4 style={{ fontSize: '0.82rem', color: '#6d28d9', fontWeight: 800, margin: 0 }}>
          ⚖️ Policy Incentives & Land Allotment
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
          <div>
            <strong style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))' }}>• MSME Support:</strong>
            <p style={{ margin: '2px 0 0 8px', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.35 }}>
              Incentives for small and medium-sized enterprises are generally aligned with state industrial policies (such as the Industrial Development Policy), which often include subsidies on capital investment, power cost reimbursements, and interest subvention for loans.
            </p>
          </div>
          <div>
            <strong style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))' }}>• Land Allotment:</strong>
            <p style={{ margin: '2px 0 0 8px', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.35 }}>
              The Andhra Pradesh Industrial Infrastructure Corporation (APIIC) acts as the nodal agency, facilitating land allotment and ensuring that the land is properly cleared for industrial use.
            </p>
          </div>
        </div>
      </div>

      {/* 5. Getting Started & Resources */}
      <div className="card" style={{ borderLeft: '4px solid #b45309', padding: '14px' }}>
        <h4 style={{ fontSize: '0.82rem', color: '#b45309', fontWeight: 800, margin: 0 }}>
          🔗 Getting Started & Resources
        </h4>
        <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', marginTop: '4px', margin: '4px 0' }}>
          For companies interested in setting up operations, the following resources are typically used to access official incentive details and land application processes:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
          <div style={{ fontSize: '0.7rem' }}>
            <strong style={{ color: 'hsl(var(--foreground))' }}>APIIC (Andhra Pradesh Industrial Infrastructure Corporation):</strong>
            <p style={{ margin: '2px 0 0 8px', color: 'hsl(var(--muted-foreground))' }}>
              The primary authority for land allotments and infrastructure development. You can monitor their site for active RFPs (Requests for Proposal) and land availability.
            </p>
          </div>
          <div style={{ fontSize: '0.7rem' }}>
            <strong style={{ color: 'hsl(var(--foreground))' }}>Andhra Pradesh e-Procurement Portal:</strong>
            <p style={{ margin: '2px 0 0 8px', color: 'hsl(var(--muted-foreground))' }}>
              Often used for bidding on industrial projects or accessing tender documents related to the development of the Orvakal hub.
            </p>
          </div>
          <div style={{ fontSize: '0.7rem' }}>
            <strong style={{ color: 'hsl(var(--foreground))' }}>Invest India / India Investment Grid (IIG):</strong>
            <p style={{ margin: '2px 0 0 8px', color: 'hsl(var(--muted-foreground))' }}>
              A national platform that tracks major infrastructure projects and often lists specific investment opportunities and contact details for the project sponsors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
