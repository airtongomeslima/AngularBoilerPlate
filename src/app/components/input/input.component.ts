import { Component, OnInit, Output, Input, EventEmitter, AfterContentInit } from '@angular/core';
import { SimpleList } from '../../models/simpleListModel';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {
  @Input() inputModel: string;
  @Input() name: string;
  @Input() label: string;
  @Input() type: string;
  @Input() placeholder: string;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() checkboxchecked: boolean;
  @Input() checkboxlabel: string;
  @Input() options: Array<SimpleList>;
  @Output() checkboxChanged = new EventEmitter<boolean>();
  @Output() inputModelChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.type = 'text';
    this.placeholder = '';
    this.disabled = false;
    this.required = false;
    this.checkboxchecked = false;
  }

  eventBlur(field) {
    // console.log('blured', field);
  }

}
