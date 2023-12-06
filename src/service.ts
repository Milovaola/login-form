import axios from 'axios'
import { CountryEntity } from './interfaces'

/**
 * Get countries from API.
 */
export const getCountries = async (): Promise<CountryEntity[]> => {
  try {
    const response = await axios.get(
      'https://restcountries.com/v3.1/all?fields=name'
    )

    return response.data.sort((a: CountryEntity, b: CountryEntity) =>
      a.name.common.localeCompare(b.name.common)
    )
  } catch (error) {
    throw error
  }
}
