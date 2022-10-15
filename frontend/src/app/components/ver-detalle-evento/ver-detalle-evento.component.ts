import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ver-detalle-evento',
  templateUrl: './ver-detalle-evento.component.html',
  styleUrls: ['./ver-detalle-evento.component.css']
})

/*
export class GalleriaAutoplayDemo implements OnInit {
  images: any[];

  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
      this.photoService.getImages().then(images => this.images = images)
  }
}
*/
export class VerDetalleEventoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


