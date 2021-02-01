import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit,OnChanges,OnDestroy {

  showImage = false
  pageTitle = 'Product list'
  filterQuery = "";
  productsList : IProduct[] = [
    {
      "artistName": "Pooh Shiesty",
        "id": "1548999027",
        "releaseDate": "2021-02-05",
        "name": "Shiesty Season",
        "kind": "album",
        "copyright": "℗ 2021 Atlantic Recording Corporation and 1017 Global Music, LLC.",
        "artistId": "1456620250",
        "contentAdvisoryRating": "Explicit",
        "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/47/5a/7a/475a7ab3-6b7f-ca25-106e-31af86833d47/075679792266.jpg/200x200bb.png"
    },{
      "artistName": "Mat Kearney",
      "id": "1549769582",
      "releaseDate": "2021-05-21",
      "name": "January Flower",
      "kind": "album",
      "copyright": "℗ 2021 Tomorrow Music",
      "artistId": "27491554",
      "contentAdvisoryRating": "Implicit",
      "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/81/08/ef/8108ef6b-4885-4203-f79b-b6cc5ac5819b/21UMGIM03288.rgb.jpg/200x200bb.png"
    },{
      "artistName": "Florida Georgia Line",
      "id": "1541974083",
      "releaseDate": "2021-02-12",
      "name": "Life Rolls On",
      "kind": "album",
      "copyright": "℗ 2021 Big Machine Label Group, LLC",
      "artistId": "399241518",
      "contentAdvisoryRating": "Implicit",
      "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/4c/31/ba/4c31ba09-c78d-897e-6249-f25afe489382/20BMR0002146.rgb.jpg/200x200bb.png"
    },{
      "artistName": "Charlotte Lawrence",
      "id": "1550356146",
      "releaseDate": "2021-03-05",
      "name": "Charlotte - EP",
      "kind": "album",
      "copyright": "℗ 2021 Atlantic Recording Corporation & Gold Tooth Records",
      "artistId": "766217679",
      "contentAdvisoryRating": "Explicit",
      "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/07/26/58/072658cd-8020-2d96-62a6-2160e7ab556c/075679799944.jpg/200x200bb.png"
    },{
      artistName : "Sraavan Chevireddy",
      id : "1234",
      releaseDate : "2021-02-01",
      name : "That should be his name",
      kind : "that kind",
      contentAdvisoryRating : "Implicit",
      artistId : "123",
      artworkUrl100 : "http://www.blogwithintegrity.com/badges/BWI_125sq.jpg",
      copyright : "© Copyright 2021 Hehe."
    }
  ]
  constructor() { }
  
  toggleImage(): void{
    this.showImage = !this.showImage
  }

  // Lifecycle Hooks
  ngOnInit(): void {}
  ngOnChanges():void{}
  ngOnDestroy():void{}

}
