import { ResponsableMascotaService } from './../../shared/service/responsable-mascota.service';
import { ResponsableMascota } from './../../shared/model/responsable-mascota';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-listar-responsable-mascota',
  templateUrl: './listar-responsable-mascota.component.html',
  styleUrls: ['./listar-responsable-mascota.component.css']
})
export class ListarResponsableMascotaComponent implements OnInit, AfterViewInit, OnDestroy {

  private subscripciones: Subscription[] = [];
  displayedColumns = ['idResponsable', 'identificacion', 'nombre', 'apellido1', 'telefonoContacto', 'acciones'];
  datasource = new MatTableDataSource<ResponsableMascota>();

  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private servicio: ResponsableMascotaService) { }

  ngOnInit(): void {
    this.consultar();
  }

  ngAfterViewInit(): void {
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
  }

  consultar(): void {
    this.subscripciones.push(
      this.servicio.consultar().subscribe(list => this.datasource.data = list,
        err => this.servicio.mostrarError(err)
      ));
  }

  doFilter($event: any): void {
    const filterString = $event.target.value;
    this.datasource.filter = filterString.trim().toLocaleLowerCase();
  }

  formatearTelefono(telefono: string): string {
    let telefonoFormateado: string = this.obtenerCaracteres(telefono, 0, 3) + ' ';
    if (telefono.length === 7) {
      telefonoFormateado += this.obtenerCaracteres(telefono, 3, telefono.length);
    } else {
      telefonoFormateado += this.obtenerCaracteres(telefono, 3, 6) + ' ' + this.obtenerCaracteres(telefono, 6, telefono.length);
    }

    return telefonoFormateado;
  }

  private obtenerCaracteres(cadena: string, indiceInicial: number, indiceFinal: number): string {
    return cadena.substring(indiceInicial, indiceFinal);

  }

  ngOnDestroy(): void {
    if (this.subscripciones) { this.subscripciones.forEach(sub => sub.unsubscribe()); }
  }
}
