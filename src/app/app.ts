import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  mySnap! : FaceSnap;
  mySnap2! : FaceSnap;
  mySnap3! : FaceSnap;
  mySnap4! : FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      "Mon premier snap",
      "https://imgs.search.brave.com/0qN8nDQ83C20JZsg4FkPC8-7kFgXDsw5JCsxWdXulGo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YXZjbGFicy5jb20v/YXNzZXRzL2ltYWdl/cy9ibG9nL2ZhY2Ut/c3dhcC1zbmFwY2hh/dC5qcGc",
      "Ceci est mon premier snap, j'espère qu'il vous plaira !",
      new Date(),
      53
    );
    this.mySnap2 = new FaceSnap(
      "Mon deuxième snap",
      "https://imgs.search.brave.com/ur8MQz7PZJrBBgwt7oD7E3Yu4Hj0R9sVRqbeg24hWxA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbGF5/LWxoLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9OdGZYWHVETlRJ/SW1DZ1JLeXlHeVNK/dFR6WVhXQVZCYjRQ/QnVJMHpWQUNmMVF1/ZVpxU3czam1GaXhv/d2RMd2haREpnPXc1/MjYtaDI5Ni1ydw",
      "Ceci est mon deuxième snap, j'espère qu'il vous plaira !",
      new Date(),
      23
    );
    this.mySnap3 = new FaceSnap(
      "Mon troisième snap",
      "https://imgs.search.brave.com/DlNCDJuo8bMjlVFdRCP2OzEthxcVFXUR0ajjioMAO6I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvUGhv/dG9GVExQL0hvbGlk/YXlzU2Vhc29uYWwt/NTE2MDEyMzI4Lmpw/Zw",
      "Ceci est mon troisième snap, j'espère qu'il vous plaira !",
      new Date(),
      45
    );
    this.mySnap4 = new FaceSnap(
      "Mon quatrième snap",
      "https://imgs.search.brave.com/0qN8nDQ83C20JZsg4FkPC8-7kFgXDsw5JCsxWdXulGo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YXZjbGFicy5jb20v/YXNzZXRzL2ltYWdl/cy9ibG9nL2ZhY2Ut/c3dhcC1zbmFwY2hh/dC5qcGc",
      "Ceci est mon quatrième snap, j'espère qu'il vous plaira !",
      new Date(),
      12
    );
  }
}
