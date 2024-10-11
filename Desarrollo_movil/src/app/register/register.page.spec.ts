import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registerForm: FormGroup;
  passwordMismatch = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['']
    });

    this.registerForm.valueChanges.subscribe(() => {
      this.passwordMismatch = this.registerForm.get('password').value !== this.registerForm.get('confirmPassword').value;
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      // Lógica para registro
      console.log('Formulario válido y registrado');
    }
  }
}
