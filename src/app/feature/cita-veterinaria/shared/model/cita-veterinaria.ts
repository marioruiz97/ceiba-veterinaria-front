import { TipoCita } from './../../../tipo-cita/shared/model/tipo-cita';
import { Mascota } from '@feature/mascota/shared/model/mascota';
import { Veterinario } from '@feature/veterinario/shared/model/veterinario';

export interface CitaVeterinaria {
    codigoCita: number;
    fechaCita: Date;
    medicoVeterinario: Veterinario;
    mascota: Mascota;
    tipoCita: TipoCita;
    valorFinal: number;
}
