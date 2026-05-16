import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/procurement",
        destination: "/services/marine-procurement-ship-chandlery",
        permanent: true,
      },
      {
        source: "/technical",
        destination: "/services/vessel-inspection-registration",
        permanent: true,
      },
      {
        source: "/crew-management",
        destination: "/services/crew-change-services",
        permanent: true,
      },
      {
        source: "/ship-management",
        destination: "/services/ship-management-operation",
        permanent: true,
      },
      {
        source: "/services/crew-management-visas",
        destination: "/services/crew-change-services",
        permanent: true,
      },
      {
        source: "/services/technical-services-audits",
        destination: "/services/vessel-inspection-registration",
        permanent: true,
      },
      {
        source: "/services/spare-parts-supply",
        destination: "/services/marine-procurement-ship-chandlery",
        permanent: true,
      },
      {
        source: "/services/freight-passenger-transportation",
        destination: "/services/shipping-lines-freight-passenger-transportation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
