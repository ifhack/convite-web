import { Component, Input } from '@angular/core'

@Component({
  selector: 'inv-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() reverse: boolean
}
