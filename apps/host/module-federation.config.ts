import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'host',
  remotes: ['remote1'],
};

export default config;
