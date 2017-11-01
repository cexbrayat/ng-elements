import { NgModule, Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'ns-pony',
  template: `<p (click)="onClick()">{{ ponyName }}</p>`
})
export class PonyComponent {
  @Input() ponyName;
  @Output() selected = new EventEmitter<boolean>();

  onClick() {
    this.selected.emit(true);
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [PonyComponent],
  entryComponents: [PonyComponent]
})
export class PonyModule {
  ngDoBootstrap(){}
}