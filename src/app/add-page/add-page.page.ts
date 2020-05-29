import { Component, OnInit } from '@angular/core';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.page.html',
  styleUrls: ['./add-page.page.scss'],
})
export class AddPagePage implements OnInit {
  endodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private barcodeScanner: BarcodeScanner) {
    this.endodeData = "https://FreakyJolly.com"; //changed encodeData to endodeData check lateron!
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
   }

   scanCode(){
     this.barcodeScanner
     .scan()
     .then(barcodeData => {
       alert("barcode data" + JSON.stringify(barcodeData));
       this.scannedData = barcodeData;
     })
     .catch(err => {
       console.log("Barcode Scanner Error", err);
     })
   }

   encodedText() {
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.endodeData)
      .then(
        encodedData => {
          console.log(encodedData);
          this.endodeData = encodedData;
        },
        err => {
          console.log("Error occured : " + err);
        }
      );
  }
  ngOnInit() {
  }

}
