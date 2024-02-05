import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./sharpage/navbar/navbar.component";
import { FooterComponent } from "./sharpage/footer/footer.component";
import { FilmebodyComponent } from "./sharpage/filmebody/filmebody.component";
import { FilmeHolderComponent } from "./sharpage/filme-holder/filme-holder.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, FooterComponent, FilmebodyComponent, FilmeHolderComponent]
})
export class AppComponent {
  title = 'filmeweb';
}