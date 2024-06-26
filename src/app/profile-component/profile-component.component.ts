import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-component',
  standalone: true,
  imports: [],
  templateUrl: './profile-component.component.html',
  styleUrl: './profile-component.component.css'
})
export class ProfileComponentComponent {
  @Input() username!: string;
}
