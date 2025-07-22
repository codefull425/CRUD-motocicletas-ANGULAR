import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class IndexComponent implements OnInit {
  motos: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/api/motos/')
      .subscribe((data: any) => this.motos = data);
  }

  editar(id: number) {
    this.router.navigate(['/motos/edit', id]);
  }

  criar() {
    this.router.navigate(['/motos/create']);
  }
  

  excluirMoto(id: number): void {
    if (confirm('Tem certeza que deseja excluir esta moto?')) {
      this.http.delete(`http://127.0.0.1:8000/api/motos/${id}`)
      .subscribe(() => this.ngOnInit())
    }
  }
}