module.exports = {
  async rewrites() {
    return [
      {
        source: "/campaigns/:address",
        destination: "/campaigns/show",
      },
    ];
  },
};
