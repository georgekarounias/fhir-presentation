import axios from 'axios';
import { Bundle, Device, Observation, ObservationComponent, Patient } from 'fhir/r4';
import Appsettings from '../helpers/AppSettings';
import { convertDatetoIsoStringWithoutTimeZone } from '../helpers/DateHandler';

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
  const startDateStr = convertDatetoIsoStringWithoutTimeZone(startDate).slice(0,10);
  const endDateStr = convertDatetoIsoStringWithoutTimeZone(endDate).slice(0, 10);
  const url = Appsettings.BaseUrl + `Observation?patient=${patientId}&date=ge${startDateStr}&date=le${endDateStr}&code=${code}&_sort=date&_format=json`;
  const bundle = await axios.get<Bundle>(
    url
  );
  const resources = bundle.data.entry;
  if(!resources){
    return [];
  }
  const observations = resources.map(x=>x.resource as Observation);
  return observations;
}