import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss'],
})
export class TarjetasComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  cList: any = [
    {
      cNum: "4519 5133 0799 0830",
      eMonth: "08",
      eYear: "27",
      cvv: "111",
      pName: "Poulami H."
    },
    {
      cNum: "4519 0923 5419 1234",
      eMonth: "12",
      eYear: "12",
      cvv: "111",
      pName: "Luz D."
    }
  ]

}
