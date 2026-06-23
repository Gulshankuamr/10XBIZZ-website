import React from 'react';

const integrations = [
  {
    name: "HRMS",
    label: "HRMS",
    icon: (
      <svg width="42" height="42" viewBox="0 0 42 42">
        <rect width="42" height="42" rx="21" fill="#1E293B" />
        <text
          x="21" y="25"
          fontSize="10" fontWeight="800" fill="white"
          textAnchor="middle" fontFamily="Montserrat,sans-serif" letterSpacing="0.5"
        >HRMS</text>
      </svg>
    ),
  },
  {
    name: "Outlook",
    label: "Outlook",
    icon: (
      <svg width="36" height="36" viewBox="0 0 48 48">
        <rect x="2" y="6" width="24" height="36" rx="2" fill="#0078d4" />
        <rect x="22" y="6" width="24" height="36" rx="2" fill="#1a9cf4" />
        <rect x="6" y="14" width="12" height="3" rx="1" fill="white" opacity=".9" />
        <rect x="6" y="20" width="12" height="3" rx="1" fill="white" opacity=".9" />
        <rect x="6" y="26" width="12" height="3" rx="1" fill="white" opacity=".9" />
        <rect x="26" y="14" width="16" height="3" rx="1" fill="white" opacity=".7" />
        <rect x="26" y="20" width="16" height="3" rx="1" fill="white" opacity=".7" />
        <rect x="26" y="26" width="16" height="3" rx="1" fill="white" opacity=".7" />
      </svg>
    ),
  },
  {
    name: "Gmail",
    label: "Gmail",
    icon: (
      <svg width="36" height="36" viewBox="0 0 48 48">
        <path fill="#EA4335" d="M24 20.5L8 10h32z" />
        <path fill="#34A853" d="M40 10v28L24 27.5z" />
        <path fill="#FBBC05" d="M8 38V10l16 17.5z" />
        <path fill="#4285F4" d="M8 38h32l-16-10.5z" />
      </svg>
    ),
  },
  {
    name: "QuickBooks",
    label: "QuickBooks",
    icon: (
      <svg width="36" height="36" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="10" fill="#2CA01C" />
        <text
          x="24" y="30" fontSize="17" fontWeight="900" fill="white"
          textAnchor="middle" fontFamily="Montserrat,sans-serif"
        >QB</text>
      </svg>
    ),
  },
  {
    name: "Xero",
    label: "Xero",
    icon: (
      <svg width="44" height="22" viewBox="0 0 80 28">
        <text
          x="0" y="22" fontSize="26" fontWeight="900" fill="#00B5D8"
          fontFamily="Montserrat,sans-serif" letterSpacing="-1.5"
        >xero</text>
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    label: "WhatsApp",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="#25D366">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966C16.53 1.975 14.063.953 11.444.953c-5.441 0-9.865 4.371-9.87 9.8-.001 1.736.46 3.431 1.334 4.93L1.93 22.062l6.717-1.754z" />
      </svg>
    ),
  },
  {
    name: "Zoom",
    label: "Zoom",
    icon: (
      <svg width="36" height="36" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="10" fill="#2D8CFF" />
        <rect x="6" y="14" width="22" height="14" rx="3" fill="white" />
        <polygon points="30,16 42,10 42,38 30,32" fill="white" />
      </svg>
    ),
  },
  {
    name: "Teams",
    label: "Teams",
    icon: (
      <svg width="36" height="36" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="10" fill="#5059C9" />
        <circle cx="18" cy="17" r="5" fill="#7B83EB" />
        <path d="M10 33c0-6 3.5-10 8-10h12c4.5 0 8 4 8 10H10z" fill="#7B83EB" />
        <circle cx="18" cy="17" r="4" fill="white" />
        <circle cx="30" cy="15" r="4" fill="#7B83EB" opacity=".85" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    label: "Stripe",
    icon: (
      <svg width="36" height="36" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="10" fill="#635BFF" />
        <path
          d="M24 10c-2.8 0-5 1.5-5 4 0 2.2 1.6 3.4 4 4.3 1.6.6 2 .9 2 1.7 0 .9-.8 1.4-2.1 1.4-1.8 0-3.2-.6-4.3-1.4l-.8 3.1c1.3.9 3 1.4 4.7 1.4V27h2.6v-2.4c3-.5 4.8-2.3 4.8-4.8 0-2.3-1.5-3.5-4-4.4-1.6-.6-2.2-.9-2.2-1.7 0-.8.6-1.3 1.7-1.3 1.4 0 2.8.5 3.8 1.2l.8-3c-1.1-.7-2.5-1.1-3.9-1.2V10H24z"
          fill="white"
        />
      </svg>
    ),
  },
];

export default function CRMIntegrations() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');

        .crm-section {
          font-family: 'Montserrat', ui-sans-serif, system-ui, sans-serif;
          background: #F0F4F8;
          padding: 72px 24px;
          width: 100%;
          user-select: none;
          overflow: hidden;
        }

        .crm-inner {
          max-width: 900px;
          margin: 0 auto;
        }

        .crm-header {
          text-align: center;
          max-width: 660px;
          margin: 0 auto 48px;
        }

        .crm-header h2 {
          font-size: clamp(26px, 4vw, 38px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.025em;
          color: #0F172A;
          margin: 0 0 16px;
        }

        .crm-grad {
          background: linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .crm-header p {
          font-size: 15px;
          font-weight: 500;
          line-height: 1.8;
          color: #64748B;
          margin: 0;
        }

        .crm-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 32px 36px;
          border: 1.5px solid #E2E8F0;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .crm-card:hover {
          border-color: #a855f7;
          box-shadow: 0 14px 40px -8px rgba(100, 0, 161, 0.14);
        }

        .crm-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 24px;
        }

        .crm-card-top h3 {
          font-size: 17px;
          font-weight: 700;
          color: #0F172A;
          letter-spacing: -0.01em;
        }

        .crm-badge {
          background: linear-gradient(125.94deg, #6400A1, #BB000F);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 14px;
          border-radius: 999px;
          letter-spacing: 0.04em;
        }

        .crm-divider {
          height: 1px;
          background: #F1F5F9;
          margin-bottom: 28px;
        }

        .crm-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          justify-content: flex-start;
        }

        .crm-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          width: 72px;
        }

        .crm-ring {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #fff;
          border: 1.5px solid #E8EDF5;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
          flex-shrink: 0;
        }

        .crm-ring:hover {
          border-color: #6400A1;
          transform: scale(1.1);
          box-shadow: 0 6px 18px rgba(100, 0, 161, 0.16);
        }

        .crm-label {
          font-size: 10px;
          font-weight: 700;
          color: #94A3B8;
          text-align: center;
          letter-spacing: 0.03em;
          line-height: 1.3;
          white-space: nowrap;
        }
      `}</style>

      <section className="crm-section">
        <div className="crm-inner">

          <div className="crm-header">
            <h2>
              Everything Connected{" "}
              <span className="crm-grad">For Faster Growth</span>
            </h2>
            <p className="text-gray-900 font-semibold">
              Capture leads from your website, Meta Ads, Google Ads, WhatsApp, and forms.
              Automatically organize, nurture, and convert them through a fully connected
              CRM and automation system.
            </p>
          </div>

          <div className="crm-card">
            <div className="crm-card-top">
              <h3>Software Integrations</h3>
              <span className="crm-badge">9 Integrations</span>
            </div>
            <div className="crm-divider" />
            <div className="crm-grid">
              {integrations.map((item, idx) => (
                <div key={idx} className="crm-item" title={item.name}>
                  <div className="crm-ring">
                    {item.icon}
                  </div>
                  <span className=" text-black font-semibold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}