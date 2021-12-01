import { Component } from '@angular/core';
import { MyPipePipe } from './pipes/myPipeName.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombreCurso = 'Programacion';
  listadoFichas = ["2250070", "2207854"]
  PI = Math.PI;
  porcentaje = 0.5891;
  password = 'A12345';
  enable = true;
  apoyoSostenimiento = 435000.5;
  miFecha = new Date();
  persona = {
    nombre: 'Julian',
    apellido: 'Lozada',
    profesion: 'Estudiante',
    competencia: ['Trabajo En Equipo'],
    canaldeyoutube: 'Si Hay :3 https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    direccion: {
      calle : '12',
      carrera: '29',
      ciudad: 'Armenia'
    }
  }
}
