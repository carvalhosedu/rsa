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
  w = '';
  contador = 0;
  a = 0;
  b = 10;
  n = 1;
  lambida = 3;
  criptografada = [];
  desCriptografada = '';
  criptografadaMSG = '';
  d = 0;
  modTemp = 0;
  descTemp = 0;

  constructor(public navCtrl: NavController) {

  }

  criptografar(){

    if(this.rsa.p && this.rsa.q && this.rsa.msg){

      this.alfabetoRSA();
    }

  }

  alfabetoRSA(){

    this.alfabeto[10] = 'A';
    this.alfabeto[11] = 'B';
    this.alfabeto[12] = 'C';
    this.alfabeto[13] = 'D';
    this.alfabeto[14] = 'E';
    this.alfabeto[15] = 'F';
    this.alfabeto[16] = 'G';
    this.alfabeto[17] = 'H';
    this.alfabeto[18] = 'I';
    this.alfabeto[19] = 'J';
    this.alfabeto[20] = 'K';
    this.alfabeto[21] = 'L';
    this.alfabeto[22] = 'M';
    this.alfabeto[23] = 'N';
    this.alfabeto[24] = 'O';
    this.alfabeto[25] = 'P';
    this.alfabeto[26] = 'Q';
    this.alfabeto[27] = 'R';
    this.alfabeto[28] = 'S';
    this.alfabeto[29] = 'T';
    this.alfabeto[30] = 'U';
    this.alfabeto[31] = 'V';
    this.alfabeto[32] = 'W';
    this.alfabeto[33] = 'X';
    this.alfabeto[34] = 'Y';
    this.alfabeto[35] = 'Z';
    this.alfabeto[36] = ' ';

    this.n = this.rsa.p * this.rsa.q;
    this.contador = 0;
    this.criptografadaMSG = '';
    this.desCriptografada = '';
    this.d = 0;
    this.descTemp = 0;

    for (this.a = 0; this.a < this.rsa.msg.length; this.a++) {
      // a = contador inicia 0
      // w = letra

      this.w = this.rsa.msg[this.a];
      //this.mensagem[this.a] = this.w[0].toUpperCase() + this.w.slice(1); //letras separadas em array

      for (this.b = 10; this.b < this.alfabeto.length; this.b++) {
        // b = contador inicia 0
        // w = letra
        if(this.rsa.msg[this.a].toUpperCase() === this.alfabeto[this.b]){
          this.criptografada[this.contador] = (this.b ** this.lambida) % this.n;
          this.contador = this.contador + 1;
        }
      }
    }

    this.modTemp = (this.rsa.p - 1) * (this.rsa.q - 1);

    for (this.b = 0; this.b < 100; this.b++) {
      this.d = (3 * this.b) % this.modTemp;

      if(this.d === 1){
        this.d = this.b;
        this.b = 1000;
      }
    }

    for (this.a = 0; this.a < this.criptografada.length; this.a++) {

      if(this.a < this.criptografada.length - 1){
        this.criptografadaMSG = this.criptografadaMSG + this.criptografada[this.a] + ' - ';
      } else {
        this.criptografadaMSG = this.criptografadaMSG + this.criptografada[this.a];
      }

      this.descTemp = (this.criptografada[this.a] ** this.d) % this.n;

      if(this.a < this.criptografada.length - 1){
        this.desCriptografada = this.desCriptografada + this.descTemp + ' - ';
      } else {
        this.desCriptografada = this.desCriptografada + this.descTemp;
      }


    }

    return;
  }

}
