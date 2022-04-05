// config/plugins.js

module.exports = ({ env }) => ({
  'raw-query': {
    enabled: true,
  },
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'frdndattivi@gmail.com',
        defaultReplyTo: 'frdndattivi@gmail.com',
      },
    },
  },
  });