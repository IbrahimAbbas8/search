import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchForComponent } from './search/search-for.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'search';
}
