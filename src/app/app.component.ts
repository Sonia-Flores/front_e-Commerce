import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FootendComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FootendComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front_e-Commerce';
}
