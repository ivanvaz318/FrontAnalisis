import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {
  pagina = new BehaviorSubject<string>("");
  btnmenu = new BehaviorSubject<boolean>(false);

  constructor() { }
}
