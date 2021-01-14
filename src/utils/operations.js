import api from '@molgenis/molgenis-api-client'

export const RessourceType = async () => {
// destructure the query part from the multi-filter
  const url = '/api/v2/eu_bbmri_eric_biobanks'
  // url = `localhost:82${url}`
  const { items } = await api.get(url)

  console.log('Hallo')
  const items_ = items.map((obj) => `[ ${obj.id} ]`)
  console.log(items_[0])
  return items_[0]
}
