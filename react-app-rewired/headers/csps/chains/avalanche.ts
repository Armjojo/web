import type { Csp } from '../../types'

export const csp: Csp = {
  'connect-src': [
    process.env.REACT_APP_AVALANCHE_NODE_URL!,
    process.env.REACT_APP_UNCHAINED_AVALANCHE_HTTP_URL!,
    process.env.REACT_APP_UNCHAINED_AVALANCHE_WS_URL!,
    'https://api.avax.network/ext/bc/C/rpc',
  ],
}
