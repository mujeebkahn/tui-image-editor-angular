import { Component, OnInit, AfterViewInit, VERSION } from '@angular/core';
//import ImageEditor = require("tui-image-editor");
//import blackTheme = require('./js/theme/black-theme.js');

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {}

  ngAfterViewInit(): void {
    var ImageEditor = require('tui-image-editor');
    //var FileSaver = require('file-saver'); //to download edited image to local. Use after npm install file-saver
    // var blackTheme = require('./js/theme/black-theme.js');
    var locale_ru_RU = {
      // override default English locale to your custom
      Crop: 'Обзрезать',
      'Delete-all': 'Удалить всё',
      // etc...
    };
    var instance = new ImageEditor(
      document.querySelector('#tui-image-editor'),
      {
        includeUI: {
          loadImage: {
            path: 'img/sampleImage.jpg',
            name: 'SampleImage',
          },
          locale: locale_ru_RU,
          initMenu: 'filter',
          menuBarPosition: 'bottom',
        },
        cssMaxWidth: 700,
        cssMaxHeight: 500,
        selectionStyle: {
          cornerSize: 20,
          rotatingPointOffset: 70,
        },
      }
    );
  }
}
