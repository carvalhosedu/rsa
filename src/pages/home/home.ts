import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Rsa } from "../../models/rsa";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rsa = {} as Rsa;
  alfabeto = [];

  constructor(public navCtrl: NavController) {

  }

  criptografar(){

    if(this.rsa.p && this.rsa.q && this.rsa.msg){
      console.log(this.rsa.p);
      console.log(this.rsa.q);
      console.log(this.rsa.msg);

      this.alfabetoRSA(this.rsa.msg);
    }

  }

  alfabetoRSA( letra: string ){

    this.alfabeto = [{
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15,
      g: 16,
      h: 17,
      i: 18,
      j: 19,
      k: 20,
      l: 21,
      m: 22,
      n: 23,
      o: 24,
      p: 25,
      q: 26,
      r: 27,
      s: 28,
      t: 29,
      u: 30,
      v: 31,
      w: 32,
      x: 33,
      y: 34,
      z: 35,
      ' ': 36
    }];

    Object.keys(this.alfabeto).forEach(key=> {
      console.log(key);
    });
    return;
  }

}
