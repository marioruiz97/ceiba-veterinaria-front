import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitaVeterinaria } from '@feature/cita-veterinaria/shared/model/cita-veterinaria';
import { CitaVeterinariaService } from '@feature/cita-veterinaria/shared/service/cita-veterinaria.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-cita-veterinaria',
  templateUrl: './listar-cita-veterinaria.component.html',
  styleUrls: [],
})
export class ListarCitaVeterinariaComponent implements OnInit, AfterViewInit, OnDestroy {

  private subscripciones: Subscription[] = [];
  displayedColumns = ['codigoCita', 'fechaCita', 'medicoVeterinario', 'mascota', 'tipoCita', 'valorFinal'];
  datasource = new MatTableDataSource<CitaVeterinaria>();

  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private servicio: CitaVeterinariaService) { }

  ngOnInit(): void {
    this.consultar();
    this.setSortingAccesor();
    this.datasource.filterPredicate = this.createFilter();
  }

  ngAfterViewInit(): void {
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
  }

  consultar(): void {
    this.subscripciones.push(
      this.servicio.consultar().subscribe(
        (list) => (this.datasource.data = list),
        (err) => this.servicio.mostrarError(err)
      )
    );
  }


  private setSortingAccesor(): any {
    this.datasource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'codigoCita': return item.codigoCita;
        case 'fechaCita': return new Date(item.fechaCita).toDateString();
        case 'medicoVeterinario': return item.medicoVeterinario.nombre + item.medicoVeterinario.apellido1;
        case 'mascota': return item.mascota.idResponsableMascota + item.mascota.nombre;
        case 'tipoCita': return item.tipoCita.nombre;
        case 'valorFinal': return item.valorFinal;
        default: return item.codigoCita;
      }
    };
  }

  private createFilter(): (data: CitaVeterinaria, filter: string) => boolean {
    const filterFunction = (data: CitaVeterinaria, filter: string): boolean => {
      const codigocita = data.codigoCita.toString().indexOf(filter.trim().toLowerCase()) !== -1;
      const medico = data.medicoVeterinario.nombre.trim().toLowerCase().concat(' ' + data.medicoVeterinario.apellido1.trim().toLowerCase())
        .indexOf(filter.trim().toLowerCase()) !== -1;
      const mascota = data.mascota.nombre.trim().toLowerCase().concat(' ' + data.mascota.responsableMascota?.nombre.trim().toLowerCase())
        .indexOf(filter.trim().toLowerCase()) !== -1;
      const tipoCita = data.tipoCita.nombre.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1;
      const valorFinal = data.valorFinal.toString().indexOf(filter.trim().toLowerCase()) !== -1;
      return codigocita || medico || mascota || tipoCita || valorFinal;
    };
    return filterFunction;
  }


  doFilter($event: any): void {
    const filterString = $event.target.value;
    this.datasource.filter = filterString.trim().toLocaleLowerCase();
  }

  ngOnDestroy(): void {
    if (this.subscripciones) {
      this.subscripciones.forEach((sub) => sub.unsubscribe());
    }
  }
}
