import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor( private http: HttpClient) { }

  URL_API = 'http://localhost:4000/api/pacientes'

  pacientes : Paciente[] = [];
  
  selectedPaciente: Paciente = {
    mrn: 0,
    nombre: '',
    edad: 0,
    direccion: ''
  };
  
  
  getPacientes(){
    return this.http.get<Paciente[]>(this.URL_API); 
  }

  createPaciente(paciente: Paciente){
    return this.http.post(this.URL_API, paciente);
    
  }

  putPaciente(paciente: Paciente){
    return this.http.put(`${this.URL_API}/${paciente._id}`, paciente);
  }

  deletePaciente(paciente: Paciente){
    const id = paciente._id;
    return this.http.delete(`${this.URL_API}/` + id);
  
    //return this.http.delete(`${this.URL_API}/${_id}`)
  }

}
