import { style } from '@angular/animations';
import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import {MenuItem, PrimeIcons} from 'primeng/api';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    title = 'srzktask';

    kp: MenuItem[] = [];



    items2: MenuItem[] = [];
    value2: number = 1.00;
    countries: any[] = [];
  selectedCity1: any;

  selectedCity2: any;


    ngOnInit() {
        this.kp = [
            {
                label: 'Personal',
            },
            {
                label: 'Business',
            }
        ];


        this.items2 = [
            { label: 'Convert', icon: 'pi pi-fw pi-dollar'},
            { label: 'Send', icon: 'pi pi-fw pi-send'},
            { label: 'Charts', icon: 'pi pi-chart-line'},
            { label: 'Alerts', icon: 'pi pi-bell'}
        ];
    }



}
