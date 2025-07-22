import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './create.html',
  styleUrls: ['./create.scss']
})
export class CreateComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.form = this.fb.group({
      marca: [''],
      modelo: [''],
      ano: [''],
      preco: ['']
    });
  }

  onSubmit(): void {
    this.http.post('http://localhost:8000/api/motos', this.form.value)
      .subscribe(() => this.router.navigate(['/motos']));
  }
}


