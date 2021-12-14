import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Professor } from '../models/Professor';


@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})

export class ProfessoresComponent implements OnInit {
    
  titulo = 'Professores';
  
  public professorForm: FormGroup;
  public professorSelecionado:Professor;
  public professores = [
  
    {id: 1, nome:'Arnaldo', disciplina:'matematica' },
    {id: 2, nome:'Paixao', disciplina: 'portugues'},
    {id: 3, nome:'Camargo',  disciplina:'geografia'},
    {id: 4, nome:'Angela',  disciplina:'fisica'},
    {id: 5, nome:'Beth', disciplina: 'quimica'},
    {id: 6, nome:'Madruga', disciplina:'artes' },     
    {id: 7, nome:'Juraci', disciplina:'ed.fisica' },
  
  ];

  constructor(private fb: FormBuilder) {
    this.criarForm ();  
  }
 
  ngOnInit(): void {
  }

  criarForm(){
    this.professorForm = this.fb.group({
      nome: ['', Validators.required],
      disciplina:['', Validators.required],

    });
  }

  professorSubmit() {
    console.log(this.professorForm.value);
  }
  
  professorSelect(professor: Professor){
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }
  
  
  voltar(): void{
    
    this.professorSelecionado = null
  
  }
  

}
