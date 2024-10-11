import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importa herramientas para trabajar con formularios
import { ToastController } from '@ionic/angular'; // Importa para mostrar mensajes de notificación
import { Router } from '@angular/router'; // Importa para redirigir entre páginas

@Component({
  selector: 'app-login2', // Define el nombre del componente
  templateUrl: './login2.page.html', // Ubicación del archivo HTML del componente
  styleUrls: ['./login2.page.scss'], // Ubicación de los estilos CSS del componente
})
export class Login2Page {
  loginForm: FormGroup; // Define un formulario reactivo que se vinculará con el HTML

  constructor(
    private formBuilder: FormBuilder, // FormBuilder se utiliza para inicializar y gestionar el formulario de inicio de sesión (loginForm)
    private toastController: ToastController, // ToastController permite crear y mostrar mensajes breves de notificación (toasts)
    private router: Router // Router se utiliza para redirigir al usuario entre las diferentes páginas de la aplicación
  )
   {
    // Inicializa el formulario con dos campos: email y password, y aplica validaciones
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], // El email es obligatorio y debe tener formato válido
      password: ['', Validators.required] // La contraseña es obligatoria
    });
  }

  async onLogin() {
    // Define credenciales válidas para el usuario.
    const validUser = 'user@example.com';
    const validPassword = 'qwerty123';

    // Extrae los valores de email y password ingresados en el formulario
    const { email, password } = this.loginForm.value;

    // Verifica si las credenciales coinciden con las credenciales válidas
    if (email === validUser && password === validPassword) {
      // Si son válidas, redirige al usuario a la página 'home'
      this.router.navigate(['/home']);
    } else {
      // Si no son válidas, muestra un mensaje de error utilizando un Toast
      const toast = await this.toastController.create({
        message: 'Usuario o contraseña no válidos', // Mensaje de error
        duration: 2000, // Duración del mensaje en milisegundos (2 segundos)
        color: 'danger' // Color rojo para resaltar el error
      });
      await toast.present(); // Muestra el Toast
    }
  }
}
