import 'server-only'

import { experimental_taintUniqueValue } from 'react'

export const token = 'skFgo3LoJjE3kuiefJUNSTF8fUlGI9XdDF3glcvnb13MhfPN9MXgRZeoZpETQrmmZ3QxZeGtuX5LETKqRG3mhcFtOsUMWwRUkxYVKpIazumOhaA44x3e8MtVZeOgNTYmYwoD3rJaEUlNM7rIeeavhUFknBc2OtrttTOmObHu2oMEroctUv2G'

if (!token) {
  throw new Error('Missing SANITY_API_READ_TOKEN')
}

experimental_taintUniqueValue(
  'Do not pass the sanity API read token to the client.',
  process,
  token,
)
