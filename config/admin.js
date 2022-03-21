module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1b821a86f2016326cdf78cbdbd853f71'),
  },
});
