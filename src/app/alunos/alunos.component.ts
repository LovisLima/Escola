import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})

export class AlunosComponent implements OnInit {
  public alunoForm: FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno;
  public textSimple:string;  

public alunos = [
  {id: 1, nome:'Paula', sobrenome:'Kent', telefone: 365855 },
  {id: 2, nome:'Marta', sobrenome:'Isabela', telefone: 32355 },
  {id: 3, nome:'Laura', sobrenome:'Antonia', telefone: 448855 },
  {id: 4, nome:'Luiza', sobrenome:'Maria', telefone: 663555},
  {id: 5, nome:'Lucas', sobrenome:'Machado', telefone: 365755 },
  {id: 6, nome:'Pedro', sobrenome:'Alvares', telefone:258755 },     
  {id: 7, nome:'Paulo', sobrenome:'Carvalho', telefone: 662255 }, 
];

constructor(private fb: FormBuilder) {
  this.criarForm ();
   
}

ngOnInit(): void {
}



criarForm(){
  this.alunoForm = this.fb.group({
    nome: ['', Validators.required],
    sobrenome:['', Validators.required],
    telefone:['', Validators.required]
  });
}

alunoSubmit() {
  console.log(this.alunoForm.value);
}


alunoSelect(aluno: Aluno){
  this.alunoSelecionado = aluno ;
  this.alunoForm.patchValue(aluno);
}

voltar(){
  this.alunoSelecionado = null;
  
}



}
