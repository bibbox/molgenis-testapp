import api from '@molgenis/molgenis-api-client'

export const RessourceType = async () => {
  const url = '/api/v2/eu_bbmri_eric_biobanks'
  const { items } = await api.get(url)
  const items_ = items.map((obj) => `[ ${obj.id} ]`)
  console.log(items_[0])
  return items_[0]
}
