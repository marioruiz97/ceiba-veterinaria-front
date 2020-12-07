import { ResponsableMascota } from '@feature/responsable-mascota/shared/model/responsable-mascota';
import { MatDialog } from '@angular/material/dialog';
import { MascotaService } from './../../shared/service/mascota.service';
import { Mascota } from './../../shared/model/mascota';
import {
  AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { GuardarMascotaComponent } from '../guardar-mascota/guardar-mascota.component';
import { DIALOG_CONFIG } from '@shared/app.constants';

@Component({
  selector: 'app-listar-mascota',
  templateUrl: './listar-mascota.component.html',
  styleUrls: ['./listar-mascota.component.css'],
})
export class ListarMascotaComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  displayedColumns = ['idMascota', 'nombre', 'fechaNacimiento', 'peso', 'rasgosCaracteristicos', 'acciones'];
  datasource = new MatTableDataSource<Mascota>();
  mostrarLista = false;
  private suscripciones: Subscription[] = [];

  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  @Output() ocultarLista = new EventEmitter();
  @Input() responsable!: ResponsableMascota;

  constructor(private service: MascotaService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.suscripciones.push(
      this.service.debeRecargarse.subscribe((recargarLista: boolean) => {
        if (recargarLista) {
          this.consultar();
        }
      })
    );
    this.service.debeRecargarse.next(true);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.responsable.currentValue !== changes.responsable.previousValue) {
      this.service.debeRecargarse.next(true);
    }
  }

  private consultar(): void {
    this.suscripciones.push(
      this.service.consultarPorResponsable(this.responsable.idResponsable).subscribe((list) => {
        this.datasource.data = list;
        this.mostrarLista = list.length !== 0;
      }, err => {
        this.datasource.data = [];
        this.mostrarLista = false;
      })
    );
  }

  ocultar(): void {
    this.ocultarLista.emit();
  }

  ngAfterViewInit(): void {
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
  }

  doFilter($event: any): void {
    const filterString: string = $event.target.value;
    this.datasource.filter = filterString.trim().toLocaleLowerCase();
  }

  crearMascota(): void {
    if (this.responsable && this.responsable.idResponsable !== 0) {
      this.matDialog.open(GuardarMascotaComponent, { ...DIALOG_CONFIG, data: { idResponsableMascota: this.responsable.idResponsable } });
    }
  }

  editarMascota(mascota: Mascota): void {
    if (this.responsable && this.responsable.idResponsable !== 0) {
      this.matDialog.open(GuardarMascotaComponent, { ...DIALOG_CONFIG, data: { ...mascota } });
    }
  }

  ngOnDestroy(): void {
    if (this.suscripciones) {
      this.suscripciones.forEach((sub) => sub.unsubscribe());
    }
  }
}
