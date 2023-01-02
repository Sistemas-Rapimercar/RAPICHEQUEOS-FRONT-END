import { Departamento } from './Departameto';
import { Familia } from './Familia';
import { Seccion } from './Seccion';
import { SubFamilia } from './SubFamilia';

export interface Chequeo {
  id: number;
  departamento: Departamento;
  seccion: Seccion;
  familia: Familia;
  subFamilia: SubFamilia;
  estado: string;
}
