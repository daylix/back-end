module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-do',
      providerOptions: {
        key: env('DO_SPACE_ACCESS_KEY'),
        secret: env('DO_SPACE_SECRET_KEY'),
        endpoint: env('DO_SPACE_ENDPOINT', 'fra1.digitaloceanspaces.com'),
        space: env('DO_SPACE_BUCKET', 'daylix'),
        directory: env('DO_SPACE_DIRECTORY', 'uploads'),
        cdn: env('DO_SPACE_CDN', 'https://daylix.fra1.digitaloceanspaces.com')
      },
    },
  },
});
