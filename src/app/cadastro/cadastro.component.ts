import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  formulario: FormGroup;


  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
     nome: ['', [Validators.required, Validators.minLength(3)]],
     email:['', Validators.required, Validators.email],
     idade: ['',Validators.required, Validators.min(18)]
    });
  }

  onSubmit() {
       if (this.formulario.valid) {
      console.log(this.formulario.value);
      alert('Formulário enviado com sucesso!');
    } else {
      this.formulario.markAllAsTouched(); // Garante que os erros sejam exibidos
    }
  }


}
