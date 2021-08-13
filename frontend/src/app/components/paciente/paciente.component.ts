import { Component, OnInit } from '@angular/core';
import { PacientesService } from "../../services/pacientes.service";
import { NgForm } from '@angular/forms';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  

  constructor(public pacienteService: PacientesService) { }

  ngOnInit(): void {
    this.getPacientes();
  }

  resetForm(form : NgForm){
    form.reset();
  }


  getPacientes(){
    this.pacienteService.getPacientes().subscribe(
      (res) => {
        this.pacienteService.pacientes = res;
      },
      (err) => console.log(err)
    )
  }

  createPaciente(form: NgForm){
    if (form.value._id) {
      this.pacienteService.putPaciente(form.value).subscribe(
        (res) =>{
          this.getPacientes();
          form.reset(); 
        },
        (err) => console.log(err)
      );
      
    } else {
      this.pacienteService.createPaciente(form.value).subscribe(
        (res) =>{
          this.getPacientes();
          form.reset(); 
        },
        (err) => console.log(err)
      );
    }
  }

  editPaciente(paciente: Paciente){
    this.pacienteService.selectedPaciente = paciente;
  }

  deletePaciente(paciente: Paciente){

    if (confirm ('Seguro que desea eliminar?')){
      this.pacienteService.deletePaciente(paciente).subscribe(
        (res) => {
          this.getPacientes();
        },
        (err) => console.error(err)
      );
    }
  }


  
  



}
