import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SharedModule], // Ensure imports are correct
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'Saree Shop';
  isLoggedIn = false;

  constructor(private authService: AuthService) { // Remove HttpClient if not used directly here
    this.authService.isLoggedIn.subscribe(loggedIn => this.isLoggedIn = loggedIn);
  }

  logout() {
    this.authService.logout();
  }
}
