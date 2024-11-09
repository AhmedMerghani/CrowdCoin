module.exports = {
  async rewrites() {
    return [
      {
        source: "/campaigns/:address",
        destination: "/campaigns/show",
      },
      {
        source: "/campaigns/:address/requests",
        destination: "/campaigns/requests/",
      },
      {
        source: "/campaigns/:address/requests/new",
        destination: "/campaigns/requests/new?address=:address",
      },
    ];
  },
};
