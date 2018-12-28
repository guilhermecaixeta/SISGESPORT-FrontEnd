import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-label',
  templateUrl: './input-label.component.html'
})
export class InputLabelComponent implements OnInit {
  @Input() id = "";
  @Input() valor = "";
  @Input() tipo = "text";
  @Input() legenda = "";
  @Input() classe = "col-12";
  constructor() { }

  ngOnInit() {
  }
}