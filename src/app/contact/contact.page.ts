import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  constructor() { }

  ngOnInit() {
    // Aquí puedes inicializar datos si es necesario
  }

  onSubmit() {
    if (this.isFormValid()) {
      console.log('Formulario enviado', this.contact);
      // Aquí puedes manejar el envío del formulario, por ejemplo, enviándolo a un servidor
      this.resetForm();
    }
  }

  private isFormValid(): boolean {
    return this.contact.name.trim() !== '' && 
           this.contact.email.trim() !== '' && 
           this.contact.message.trim() !== '';
  }

  private resetForm() {
    this.contact = {
      name: '',
      email: '',
      message: ''
    };
  }
}
