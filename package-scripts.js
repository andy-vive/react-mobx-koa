
const {
  concurrent,
  series,
  crossEnv,
  commonTags,
  copy
} = require('nps-utils')

const {oneLine} = commonTags

module.exports = {
  scripts: {
    nps: 'nps',
    install: {
      default: {
        description: 'Install dependencies for both web client and server',
        script: concurrent.nps('install.client', 'install.server'),
      },
      client: {
        script: series('cd client', 'npm install'),
        description: 'install dependencies for web client',
      },
      server: {
        script: series('cd server', 'npm install'),
        description: 'install dependencies for server',
      },
    },
    dev: {
      default: {
        description: 'Starts everything in dev mode',
        script: concurrent.nps('dev.client', 'dev.server'),
      },
      client: {
        description: 'Starts web client in dev mode',
        script: series('cd client', 'npm run start'),
      },
      server: {
        description: 'Starts server in dev mode',
        script: series('cd server', 'npm run start'),
      },
    },
    migrate: {
			default: {
				description: 'Starts mirate database',
				script: series('cd server', 'npm run db:migrate'),
			},
    },
  }
};