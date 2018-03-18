module.exports = {
  servers: {
    one: {
      host: "13.124.225.230",
      username: 'ubuntu',
      pem: "../../alphatoeic-website.pem"
    }
  },
  meteor: {
    name: 'alphatoeic',
    path:"../",
    servers: {
      one: {}
    },
    buildOptions: {
      debug: false,
      serverOnly: true,
    },
    env: {
      ROOT_URL: "http://ec2-13-124-225-230.ap-northeast-2.compute.amazonaws.com"
    },
    dockerImage: 'abernix/meteord:node-8.4.0-base',
    deployCheckWaitTime: 60
  },
  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
