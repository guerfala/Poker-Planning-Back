import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  template: `
    <span *ngFor="let star of stars" class="star" [ngClass]="{'filled': star <= rating}">
      &#9733; <!-- Étoile pleine -->
    </span>
  `,
  styles: [`
    .star {
      color: #FFD700; /* Couleur jaune pour les étoiles */
    }
    .filled {
      color: #FFD700; /* Couleur jaune pour les étoiles remplies */
    }
  `]
})
export class StarRatingComponent {
  @Input() rating: number = 0; // Évaluation (nombre d'étoiles)
  stars: number[] = []; // Tableau de nombres d'étoiles

  ngOnChanges() {
    this.stars = Array.from({ length: this.rating }, (_, i) => i + 1);
  }
}
