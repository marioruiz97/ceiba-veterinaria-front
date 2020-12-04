import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cards = [
    {
      avatar: 'book_online',
      title: 'Agendamiento de citas',
      subtitle: 'Asigna las citas veterinarias',
      img: '/assets/img/assign.jpg',
      button: 'Agendar Cita',
      urlTo: '/citas',
    },
    {
      avatar: 'people',
      title: 'Clientes y Mascotas',
      subtitle: 'Crea los clientes y sus mascotas',
      img: '/assets/img/pets.jpg',
      button: 'Ir a crear clientes',
      urlTo: '/responsables',
    },
    {
      avatar: 'assignment_ind',
      title: 'Veterinario',
      subtitle: 'Ingresa la información de los veterinarios',
      img: '/assets/img/veterinary.jpg',
      button: 'Ir a crear veterinarios',
      urlTo: '/veterinarios',
    },
    {
      avatar: 'next_week',
      title: 'Tipos de Cita',
      subtitle: 'Gestiona los diferentes tipos de cita',
      img: '/assets/img/appointment-type.jpg',
      button: 'Ir a tipos de cita',
      urlTo: '/tipo-citas',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
