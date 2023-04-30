import axios from 'axios';
import { Bundle, Device, Observation, ObservationComponent, Patient } from 'fhir/r4';
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

export const getPatientsObesrvations = async (patientId: number, startDate: Date, endDate: Date, code: string): Promise<Observation[]> =>{
  const startDateStr = startDate.toISOString();
  const endDateStr = endDate.toISOString()
  const bundle = await axios.get<Bundle>(
    //http://localhost:8080/fhir/Observation?patient=1&_value-date=ge2023-04-01&_value-date=le2023-04-30&_sort=value-date
    Appsettings.BaseUrl + `Observation?patient=${patientId}&_value-date=ge${startDateStr}&_value-date=le${endDateStr}&_sort=value-date&_format=json`
  );
  const resources = bundle.data.entry;
  if(!resources){
    return [];
  }
  const observations = resources.map(x=>x.resource as Observation);
  return observations;
}