import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './edit.html',
  styleUrls: ['./edit.scss']
})
export class EditComponent implements OnInit {
  form: FormGroup;
  id!: number;

  constructor(
    private route: ActivatedRoute,
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

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get(`http://localhost:8000/api/motos/${this.id}`)
      .subscribe((moto: any) => this.form.patchValue(moto));
  }


  onSubmit(): void {
    this.http.put(`http://127.0.0.1:8000/api/motos/${this.id}`, this.form.value)
      .subscribe(() => this.router.navigate(['/motos']));
  }
}