import { ResponsableMascota } from '@feature/responsable-mascota/shared/model/responsable-mascota';
export interface Mascota {
    idMascota: number;
    nombre: string;
    fechaNacimiento: Date;
    peso: number;
    rasgosCaracteristicos: string;
    idResponsableMascota: number;
    responsableMascota?: ResponsableMascota;
}
