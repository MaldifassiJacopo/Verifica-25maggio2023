import { Component } from '@angular/core';
import { Primo } from '../piatti.models.ts/piatti.models';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-primi',
  templateUrl: './primi.component.html',
  styleUrls: ['./primi.component.css']
})
export class PrimiComponent {
  @Input() primi:Primo[];
  constructor(private router:Router){
    this.primi =this.router.getCurrentNavigation().extras.state as Primo[];
  }
}