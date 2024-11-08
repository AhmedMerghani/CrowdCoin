module.exports = {
  async rewrites() {
    return [
      {
        source: "/campaigns/:id",
        destination: "/campaigns?id=:id",
      },
    ];
  },
};
