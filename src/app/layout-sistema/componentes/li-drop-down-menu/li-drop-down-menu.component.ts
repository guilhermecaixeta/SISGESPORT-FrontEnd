import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-li-drop-down-menu',
  templateUrl: './li-drop-down-menu.component.html',
  styleUrls: ['./li-drop-down-menu.component.scss']
})
export class LiDropDownMenuComponent implements OnInit {

  @Input() lista: any[];
  @Input() value: string[];
  @Input() isTask: boolean = false;
  @Output() emitLang = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  clickEmitLang(event: any) {
    this.emitLang.emit(event);
  }
}
