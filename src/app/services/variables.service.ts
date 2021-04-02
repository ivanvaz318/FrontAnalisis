import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RespuestaGra } from '../shared/models/respuestaGraficas.model';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {
  pagina = new BehaviorSubject<string>("");
  btnmenu = new BehaviorSubject<boolean>(false);
  resAnalisis = new BehaviorSubject<RespuestaGra>(null);
  constructor() { }
}
