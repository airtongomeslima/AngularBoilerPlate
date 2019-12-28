import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.css']
})
export class UserEditorComponent implements OnInit {
  @Input() user: UserModel;
  @Input() isEdit: boolean;
  @Output() cancelEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() save: EventEmitter<UserModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.isEdit = false;
  }

  public saveUser(): void {
    this.save.emit(this.user);
  }

  public cancel(): void {
    this.user = new UserModel();
    this.cancelEvent.emit(false);
    this.isEdit = false;
  }

}
