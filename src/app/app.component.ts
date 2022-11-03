import { style } from '@angular/animations';
import { NgTemplateOutlet } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

import { ConverterService } from './converter.service';



interface City {
    name: string,
    code: string
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    static selectedCountry: any;
    
    [x: string]: any;

    title = 'srzktask';

    kp: MenuItem[] = [];



    items2: MenuItem[] = [];
    value2: number = 1.00;
    //   selectedCity1: any;

    //   selectedCity2: any;

    //   ======================================


    selectedCountry: any;

    selectedCountry2: any;

    countries: any[];

    totalAngularPackages: any;

    constructor(private converter: ConverterService) {



        this.countries = [
            { code: "AED", name: "United Arab Emirates Dirham" },
            { code: "AFN", name: "Afghan Afghani" },
            { code: "ALL", name: "Albanian Lek" },
            { code: "AMD", name: "Armenian Dram" },
            { code: "ANG", name: "Netherlands Antillean Guilder" },
            { code: "AOA", name: "Angolan Kwanza" },
            { code: "ARS", name: "Argentine Peso" },
            { code: "AUD", name: "Australian Dollar" },
            { code: "AWG", name: "Aruban Florin" },
            { code: "AZN", name: "Azerbaijani Manat" },
            { code: "BAM", name: "Bosnia-Herzegovina Convertible Mark" },
            { code: "BBD", name: "Barbadian Dollar" },
            { code: "BDT", name: "Bangladeshi Taka" },
            { code: "BGN", name: "Bulgarian Lev" },
            { code: "BHD", name: "Bahraini Dinar" },
            { code: "BIF", name: "Burundian Franc" },
            { code: "BMD", name: "Bermudan Dollar" },
            { code: "BND", name: "Brunei Dollar" },
            { code: "BOB", name: "Bolivian Boliviano" },
            { code: "BRL", name: "Brazilian Real" },
            { code: "BSD", name: "Bahamian Dollar" },
            { code: "BTC", name: "Bitcoin" },
            { code: "BTN", name: "Bhutanese Ngultrum" },
            { code: "BWP", name: "Botswanan Pula" },
            { code: "BYN", name: "New Belarusian Ruble" },
            { code: "BYR", name: "Belarusian Ruble" },
            { code: "BZD", name: "Belize Dollar" },
            { code: "CAD", name: "Canadian Dollar" },
            { code: "CDF", name: "Congolese Franc" },
            { code: "CHF", name: "Swiss Franc" },
            { code: "CLF", name: "Chilean Unit of Account (UF)" },
            { code: "CLP", name: "Chilean Peso" },
            { code: "CNY", name: "Chinese Yuan" },
            { code: "COP", name: "Colombian Peso" },
            { code: "CRC", name: "Costa Rican Colón" },
            { code: "CUC", name: "Cuban Convertible Peso" },
            { code: "CUP", name: "Cuban Peso" },
            { code: "CVE", name: "Cape Verdean Escudo" },
            { code: "CZK", name: "Czech Republic Koruna" },
            { code: "DJF", name: "Djiboutian Franc" },
            { code: "DKK", name: "Danish Krone" },
            { code: "DOP", name: "Dominican Peso" },
            { code: "DZD", name: "Algerian Dinar" },
            { code: "EGP", name: "Egyptian Pound" },
            { code: "ERN", name: "Eritrean Nakfa" },
            { code: "ETB", name: "Ethiopian Birr" },
            { code: "EUR", name: "Euro" },
            { code: "FJD", name: "Fijian Dollar" },
            { code: "FKP", name: "Falkland Islands Pound" },
            { code: "GBP", name: "British Pound Sterling" },
            { code: "GEL", name: "Georgian Lari" },
            { code: "GGP", name: "Guernsey Pound" },
            { code: "GHS", name: "Ghanaian Cedi" },
            { code: "GIP", name: "Gibraltar Pound" },
            { code: "GMD", name: "Gambian Dalasi" },
            { code: "GNF", name: "Guinean Franc" },
            { code: "GTQ", name: "Guatemalan Quetzal" },
            { code: "GYD", name: "Guyanaese Dollar" },
            { code: "HKD", name: "Hong Kong Dollar" },
            { code: "HNL", name: "Honduran Lempira" },
            { code: "HRK", name: "Croatian Kuna" },
            { code: "HTG", name: "Haitian Gourde" },
            { code: "HUF", name: "Hungarian Forint" },
            { code: "IDR", name: "Indonesian Rupiah" },
            { code: "ILS", name: "Israeli New Sheqel" },
            { code: "IMP", name: "Manx pound" },
            { code: "INR", name: "Indian Rupee" },
            { code: "IQD", name: "Iraqi Dinar" },
            { code: "IRR", name: "Iranian Rial" },
            { code: "ISK", name: "Icelandic Krona" },
            { code: "JEP", name: "Jersey Pound" },
            { code: "JMD", name: "Jamaican Dollar" },
            { code: "JOD", name: "Jordanian Dinar" },
            { code: "JPY", name: "Japanese Yen" },
            { code: "KES", name: "Kenyan Shilling" },
            { code: "KGS", name: "Kyrgystani Som" },
            { code: "KHR", name: "Cambodian Riel" },
            { code: "KMF", name: "Comorian Franc" },
            { code: "KPW", name: "North Korean Won" },
            { code: "KRW", name: "South Korean Won" },
            { code: "KWD", name: "Kuwaiti Dinar" },
            { code: "KYD", name: "Cayman Islands Dollar" },
            { code: "KZT", name: "Kazakhstani Tenge" },
            { code: "LAK", name: "Laotian Kip" },
            { code: "LBP", name: "Lebanese Pound" },
            { code: "LKR", name: "Sri Lankan Rupee" },
            { code: "LRD", name: "Liberian Dollar" },
            { code: "LSL", name: "Lesotho Loti" },
            { code: "LTL", name: "Lithuanian Litas" },
            { code: "LVL", name: "Latvian Lats" },
            { code: "LYD", name: "Libyan Dinar" },
            { code: "MAD", name: "Moroccan Dirham" },
            { code: "MDL", name: "Moldovan Leu" },
            { code: "MGA", name: "Malagasy Ariary" },
            { code: "MKD", name: "Macedonian Denar" },
            { code: "MMK", name: "Myanma Kyat" },
            { code: "MNT", name: "Mongolian Tugrik" },
            { code: "MOP", name: "Macanese Pataca" },
            { code: "MRO", name: "Mauritanian Ouguiya" },
            { code: "MUR", name: "Mauritian Rupee" },
            { code: "MVR", name: "Maldivian Rufiyaa" },
            { code: "MWK", name: "Malawian Kwacha" },
            { code: "MXN", name: "Mexican Peso" },
            { code: "MYR", name: "Malaysian Ringgit" },
            { code: "MZN", name: "Mozambican Metical" },
            { code: "NAD", name: "Namibian Dollar" },
            { code: "NGN", name: "Nigerian Naira" },
            { code: "NIO", name: "Nicaraguan Córdoba" },
            { code: "NOK", name: "Norwegian Krone" },
            { code: "NPR", name: "Nepalese Rupee" },
            { code: "NZD", name: "New Zealand Dollar" },
            { code: "OMR", name: "Omani Rial" },
            { code: "PAB", name: "Panamanian Balboa" },
            { code: "PEN", name: "Peruvian Nuevo Sol" },
            { code: "PGK", name: "Papua New Guinean Kina" },
            { code: "PHP", name: "Philippine Peso" },
            { code: "PKR", name: "Pakistani Rupee" },
            { code: "PLN", name: "Polish Zloty" },
            { code: "PYG", name: "Paraguayan Guarani" },
            { code: "QAR", name: "Qatari Rial" },
            { code: "RON", name: "Romanian Leu" },
            { code: "RSD", name: "Serbian Dinar" },
            { code: "RUB", name: "Russian Ruble" },
            { code: "RWF", name: "Rwandan Franc" },
            { code: "SAR", name: "Saudi Riyal" },
            { code: "SBD", name: "Solomon Islands Dollar" },
            { code: "SCR", name: "Seychellois Rupee" },
            { code: "SDG", name: "Sudanese Pound" },
            { code: "SEK", name: "Swedish Krona" },
            { code: "SGD", name: "Singapore Dollar" },
            { code: "SHP", name: "Saint Helena Pound" },
            { code: "SLL", name: "Sierra Leonean Leone" },
            { code: "SOS", name: "Somali Shilling" },
            { code: "SRD", name: "Surinamese Dollar" },
            { code: "STD", name: "São Tomé and Príncipe Dobra" },
            { code: "SVC", name: "Salvadoran Colón" },
            { code: "SYP", name: "Syrian Pound" },
            { code: "SZL", name: "Swazi Lilangeni" },
            { code: "THB", name: "Thai Baht" },
            { code: "TJS", name: "Tajikistani Somoni" },
            { code: "TMT", name: "Turkmenistani Manat" },
            { code: "TND", name: "Tunisian Dinar" },
            { code: "TOP", name: "Tongan Pa'anga" },
            { code: "TRY", name: "Turkish Lira" },
            { code: "TTD", name: "Trinidad and Tobago Dollar" },
            { code: "TWD", name: "New Taiwan Dollar" },
            { code: "TZS", name: "Tanzanian Shilling" },
            { code: "UAH", name: "Ukrainian Hryvnia" },
            { code: "UGX", name: "Ugandan Shilling" },
            { code: "USD", name: "United States Dollar" },
            { code: "UYU", name: "Uruguayan Peso" },
            { code: "UZS", name: "Uzbekistan Som" },
            { code: "VEF", name: "Venezuelan Bolívar Fuerte" },
            { code: "VND", name: "Vietnamese Dong" },
            { code: "VUV", name: "Vanuatu Vatu" },
            { code: "WST", name: "Samoan Tala" },
            { code: "XAF", name: "CFA Franc BEAC" },
            { code: "XAG", name: "Silver (troy ounce)" },
            { code: "XAU", name: "Gold (troy ounce)" },
            { code: "XCD", name: "East Caribbean Dollar" },
            { code: "XDR", name: "Special Drawing Rights" },
            { code: "XOF", name: "CFA Franc BCEAO" },
            { code: "XPF", name: "CFP Franc" },
            { code: "YER", name: "Yemeni Rial" },
            { code: "ZAR", name: "South African Rand" },
            { code: "ZMK", name: "Zambian Kwacha (pre-2013)" },
            { code: "ZMW", name: "Zambian Kwacha" },
            { code: "ZWL", name: "Zimbabwean Dollar" }
        ];


        // =====================API====================\

        // this.converter.getData(this.selectedCountry, this.selectedCountry2).subscribe(data => {
        //     console.log(data);
        //     this.totalAngularPackages = data;
        // })
    }

    // ====================================
// =================================API ==================

    public callApi(){
        console.log("click")
        this.converter.getData(this.selectedCountry, this.selectedCountry2).subscribe(data => {
            console.log(data);
            this.totalAngularPackages = data * this.value2;
        })
    }

// ============================
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
            { label: 'Convert', icon: 'pi pi-fw pi-dollar' },
            { label: 'Send', icon: 'pi pi-fw pi-send' },
            { label: 'Charts', icon: 'pi pi-chart-line' },
            { label: 'Alerts', icon: 'pi pi-bell' }
        ];
        // const headers = {
        //     'X-RapidAPI-Key': '42b0f52196mshef169a3a69256ebp104b31jsn4f7bba9b8d0d',
        //     'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        // }
        // this.http.get<any>('https://currency-exchange.p.rapidapi.com/exchange?from=USD&to=INR&q=1.0', { headers }).subscribe({
        // next: data => {
        //     this.totalAngularPackages = data.total;
        // }
        // })
 

    }





    // constructor() {
    //     this.countries = [
    //         {name: 'Australia', code: 'AU'},
    //         {name: 'Brazil', code: 'BR'},
    //         {name: 'China', code: 'CN'},
    //         {name: 'Egypt', code: 'EG'},
    //         {name: 'France', code: 'FR'},
    //         {name: 'Germany', code: 'DE'},
    //         {name: 'India', code: 'IN'},
    //         {name: 'Japan', code: 'JP'},
    //         {name: 'Spain', code: 'ES'},
    //         {name: 'United States', code: 'US'}
    //     ];

    // }

    // onLazyLoad(event) {
    //     this.loading = true;

    //     if (this.loadLazyTimeout) {
    //         clearTimeout(this.loadLazyTimeout);
    //     }

    //     //imitate delay of a backend call
    //     this.loadLazyTimeout = setTimeout(() => {
    //         const { first, last } = event;
    //         const lazyItems = [...this.lazyItems];

    //         for (let i = first; i < last; i++) {
    //             lazyItems[i] = { label: `Item #${i}`, value: i };
    //         }

    //         this.lazyItems = lazyItems;
    //         this.loading = false;
    //     }, Math.random() * 1000 + 250);
    // }


}
