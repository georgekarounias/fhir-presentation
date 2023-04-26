import axios from 'axios';
import { Patient } from 'fhir/r4';

export const getResourceById = async (resourceType: string, id: number): Promise<Patient> => {
  const response = await axios.get(`/${resourceType}/${id}`);
  return response.data as Patient;
};
