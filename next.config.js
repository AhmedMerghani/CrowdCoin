module.exports = {
  async rewrites() {
    return [
      {
        source: "/campaigns/:address",
        destination: "/campaigns/show",
      },
      {
        source: "/campaigns/:address/requests",
        destination: "/campaigns/requests/index",
      },
    ];
  },
};
