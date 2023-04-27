import axios from 'axios';
import { Bundle, Device, Patient } from 'fhir/r4';
import Appsettings from '../helpers/AppSettings';

export const getResourceById = async (resourceType: string, id: number): Promise<Patient> => {
  const response = await axios.get(`/${resourceType}/${id}`);
  return response.data as Patient;
};


export const getPatients = async () : Promise<Patient[]>  => {
  const bundle = await axios.get<Bundle>(
    Appsettings.BaseUrl + "Patient?_format=json"
  );
  const resources = bundle.data.entry;
  if(!resources){
    return [];
  }
  const patients = resources.map(x=>x.resource as Patient);
  return patients;
};

export const getDevices = async () : Promise<Device[]>  => {
  const bundle = await axios.get<Bundle>(
    Appsettings.BaseUrl + "Device?_format=json"
  );
  const resources = bundle.data.entry;
  if(!resources){
    return [];
  }
  const devices = resources.map(x=>x.resource as Device);
  return devices;
};