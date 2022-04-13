import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-recover-code-confirmation',
  templateUrl: './recover-code-confirmation.component.html',
  styleUrls: ['./recover-code-confirmation.component.css']
})
export class RecoverCodeConfirmationComponent implements OnInit {
  hide: boolean = true;
  form = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(40)
    ]),
    confirmPassword: new FormControl('', Validators.compose([Validators.required]))
  })
  constructor(public s: ServerService) { }

  ngOnInit(): void {
  }

}
