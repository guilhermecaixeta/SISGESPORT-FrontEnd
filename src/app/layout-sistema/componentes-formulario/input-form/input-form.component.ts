import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-form',
  template: `
  <div class="form-group">
    <input type="text" class="form-control " formControlName="{[nomeCampo]}" placeholder="{{legenda}}">
    <app-validator [field]="campo"></app-validator>
  </div>
  `,
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  @Input() legenda: string = null;
  @Input() campo: FormControl = null;
  @Input() nomeCampo: string;

  constructor() { }

  ngOnInit() {
  }

}
