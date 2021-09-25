import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, private router: Router) {
    this.onInitForm();
  }

  ngOnInit(): void {
  }

  onInitForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.form.valid) {
      this.router.navigate(['app/home/dashboard']);
    } else {
      alert('Verificar el formulario')
    }
  }

}
