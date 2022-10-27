import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = ''

  @Input('img')
    set changeImg(newImg: string){
      this.img = newImg;
      console.log('change just img =>', this.img);
      //code
    }
  @Input() alt: string = '';

  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/descarga.jpg';
  //counter = 0;
  //counterFn: number | undefined;

  constructor() {
    //before render
    //NO async -- once time
    console.log('construcor','imgValue=> ', this.img);

   }

   ngOnDestroy(): void {
     //delete
     console.log('ngOnDestroy');
     //window.clearInterval(this.counterFn);
   }

   ngAfterViewInit(): void {
     //after render
     //handler children
     console.log('ngAfterViewInit');
   }

   ngOnChanges(changes: SimpleChanges) {
     //before - during render
     //changes inputs -- times
     console.log('ngOnChanges','imgValue=> ', this.img);
     console.log('changes',changes);
   }

  ngOnInit(): void {
    //before render
    //async - fetch -- once time
    console.log('ngOnInit','imgValue=> ', this.img);
    //this.counterFn = window.setInterval(()=> {
    //  this.counter += 1;
    //  console.log('run counter');
    //}, 1000);
  }


  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
