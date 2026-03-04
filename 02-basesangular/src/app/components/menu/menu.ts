import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css'],
})
export class Menu {
  readonly rutas = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];
}
