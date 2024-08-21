import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SharedModule, HeaderComponent, FooterComponent], // Ensure imports are correct
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Saree Shop';
  isLoggedIn = false;

  constructor(private authService: AuthService) { // Remove HttpClient if not used directly here
    this.authService.isLoggedIn.subscribe(loggedIn => this.isLoggedIn = loggedIn);
  }

  logout() {
    this.authService.logout();
  }
}
