import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import {bagHandleOutline} from 'ionicons/icons'
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonBackButton, IonGrid, IonRow,IonCol,IonLabel,IonButton,IonIcon, } from '@ionic/angular/standalone';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton ,IonGrid, IonRow,IonCol,IonLabel,IonButton,IonIcon,  ]
})
export class IndexPage implements OnInit {

  constructor() { 
    addIcons ({ bagHandleOutline })
  }

  ngOnInit() {
  }

}
