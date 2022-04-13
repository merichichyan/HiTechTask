import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InvalidDialogComponent } from '../invalid-dialog/invalid-dialog.component';
import { LanguagesService } from '../languages.service';
import { ServerService } from '../server.service';
import { WarningDialogComponent } from '../warning-dialog/warning-dialog.component';

@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.css']
})
export class TeacherRegisterComponent implements OnInit {

  hide: boolean = true;
  sign_up_form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required, Validators.maxLength(25),
      Validators.minLength(5)
    ]),
    lastName: new FormControl('', [
      Validators.required, Validators.maxLength(25),
      Validators.minLength(1)
    ]),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    tell: new FormControl('', Validators.required),
    phoneCode: new FormControl('', Validators.required),
    region: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    school: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    grade: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(40)
    ]),
    confirmPassword: new FormControl('', Validators.required)
  })

  states: string[] = ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum',]
  cities: any = []
  city: string = ""
  schools: any = []
  school: string = ""
  subjects: any = []
  subject: string = ""
  codes: any = []
  code: string = ""
  constructor(private dialog: MatDialog, private s: ServerService,
    public l: LanguagesService, private router: Router
  ) {

  }

  ngOnInit(): void {
    this.s.getCities().subscribe(data => {
      this.cities = data
    })

    this.s.getSchools().subscribe(data => {
      this.schools = data
    })

    this.s.getSubject().subscribe(data => {
      this.subjects = data
    })

    this.s.getCode().subscribe(data => {
      this.codes = data
    })


  }

  getCities() {
    return this.cities.filter((c: any) => {
      return c.name[this.l.getLanguage()].toLowerCase().includes(this.city.trim().toLowerCase())
    })
  }


  getSchools() {
    return this.schools.filter((s: any) => {
      return s.name[this.l.getLanguage()].toLowerCase().includes(this.school.trim().toLowerCase())
    })
  }

  getSubject() {
    return this.subjects.filter((sub: any) => {
      return sub.name[this.l.getLanguage()].toLowerCase().includes(this.subject.trim().toLowerCase())
    })
  }

  getCodes() {
    return this.codes.filter((c: any) => {
      return c.name.toLowerCase().includes(this.code.trim().toLowerCase())
    })
  }

  setCity(e: any) {
    this.city = e.target.value
  }

  setSchool(e: any) {
    this.school = e.target.value
  }

  setSubject(e: any) {
    this.subject = e.target.value
  }
  openInvalisDialog() {
    console.log(this.sign_up_form.controls);
    this.sign_up_form.updateValueAndValidity();
    if (this.sign_up_form.valid) {
      this.router.navigate(['/sign-in']);
    } else {
      this.dialog.open(InvalidDialogComponent, {
        height: '70wh',
        width: '50wh'
      })
    }
  }

  openWarningDialog() {
    this.dialog.open(WarningDialogComponent, {
      height: '70wh',
      width: '50wh',
      data: { link: '/donor-register' }
    })
  }
}

