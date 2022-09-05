import * as c from '../../../constants';

import { FieldData, UserFields } from '../../types';
import { InstitucionEntFields } from './types';

export const userFields: FieldData[] = [
  { name: 'username', label: c.l_usuario, placeholder: c.p_usuario, isRequired: true },
  { name: 'password', label: c.l_password, dataType: c.password, isRequired: true },
  { name: 'email', label: c.l_correo, placeholder: c.p_correo, dataType: 'email', isRequired: true },
];

export const institucionFields: FieldData[] = [
  { name: c.nombre, label: 'Nombre institución - Razón social', isRequired: true },
  { name: c.domicilio, label: c.l_domicilio, isRequired: true },
  { name: c.pais, label: c.l_pais, isRequired: true },
  { name: c.provincia, label: c.l_provincia, isRequired: true},
  { name: c.localidad, label: c.l_localidad, isRequired: true },
  { name: c.telefono, label: c.l_telefono, isRequired: true },
  { name: c.fecha_fundacion, label: c.l_fecha_fundacion, dataType: 'date' },
  { name: c.director, label: c.l_director, isRequired: true },
  { name: c.cant_empleados, label: c.l_cant_empleados },
  { name: c.descripcion, label: c.l_descripcion },
  { name: c.cbu, label: c.l_cbu },
  { name: c.cuenta_bancaria, label: c.l_cuenta_bancaria },
];

export const initialValues: InstitucionEntFields & UserFields = {
  // User
  username: '',
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  //Inst
  nombre: '',
  director: '',
  fecha_fundacion: '',
  domicilio: '',
  localidad: '',
  provincia: '',
  pais: '',
  telefono: '',
  cant_empleados: 0,
  descripcion: '',
  cbu: 0,
  cuenta_bancaria: '',
};