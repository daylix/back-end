export default ({ env }) => {
  return ({
    "video-field":{
      enabled: true
    },
    upload: {
      config: {
        provider: "aws-s3",
        providerOptions: {
          s3Options: {
            endpoint: env("DO_SPACE_ENDPOINT", 'https://fra1.digitaloceanspaces.com'),
            region: env("DO_SPACE_REGION", "fra1"),
            credentials: {
              accessKeyId: env("DO_SPACE_ACCESS_KEY"),
              secretAccessKey: env("DO_SPACE_SECRET_KEY"),
            },
            params: {
              Bucket: env("DO_SPACE_BUCKET"),
            },
          },
        },
      },
    },
  });
};
