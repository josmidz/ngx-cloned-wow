<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.jsdelivr.net/gh/tinesoft/ngx-wow@master/demo/src/assets/logo.svg">
</p>

# ngx-cloned-wows - Cloned Angular module for WOW.js.

[![npm version](https://badge.fury.io/js/ngx-wow.svg)](https://badge.fury.io/js/ngx-wow)
[![Build Status](https://travis-ci.org/tinesoft/ngx-wow.svg?branch=master)](https://travis-ci.org/tinesoft/ngx-wow)
[![Coverage Status](https://coveralls.io/repos/github/tinesoft/ngx-wow/badge.svg?branch=master)](https://coveralls.io/github/tinesoft/ngx-wow?branch=master)
[![dependency Status](https://david-dm.org/tinesoft/ngx-wow/status.svg)](https://david-dm.org/tinesoft/ngx-wow)
[![devDependency Status](https://david-dm.org/tinesoft/ngx-wow/dev-status.svg?branch=master)](https://david-dm.org/tinesoft/ngx-wow#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/tinesoft/ngx-wow.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://tinesoft.github.io/ngx-wow

## Dependencies

* [Angular](https://angular.io) (*requires* Angular 10+


## Installation

Install above dependencies via *npm*. In particular for `WOW JS`, run:
```shell
npm install --save wowjs
```

---
##### Angular-CLI

>**Note**: If you are using `angular-cli` to build your app, make sure that `wowjs` is properly listed as a [global library](https://github.com/angular/angular-cli#global-library-installation), by editing your `angular-cli.json` as such:
```
      "scripts": [
        "../node_modules/wowjs/dist/wow.js"
      ],
```

Also make sure that [Animate.css](which is already installed and used internally by `wowjs` to actually animate items) is listed as [global style](https://github.com/angular/angular-cli/wiki/stories-global-styles), by either:

* editing `angular-cli.json` as such:
```
      "styles": [
        "../node_modules/animate.css/animate.css"
      ],
```
* or by importing in your main `styles.scss` (or `styles.sass`, `styles.less`, `styles.styl`) file as such:
```sass
...
@import "~animate.css/animate.css";
...
```
 
Now install `ngx-cloned-wows` via:
```shell
npm install --save ngx-cloned-wows
```

Once installed you need to import the main module:
```ts
import { NgxClonedWowsModule } from 'ngx-cloned-wows';
```

```ts
import { NgxClonedWowsModule } from 'ngx-cloned-wows';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgxClonedWowsModule, ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```


## Usage

Once the module is imported, you can use the `NgwWowService` in your component (i.e. `AppComponent`) to trigger reveal animation by calling `init()` or to be notified by WOW when an element is revealed.

Here is how it works:

```ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgwWowService } from 'ngx-cloned-wows';
import { Subscription }   from 'rxjs/Subscription';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  // keep refs to subscription to be abble to unsubscribe later
  // (NOTE: unless you want to be notified when an item is revealed by WOW,
  //  you absolutely don't need this line and related, for the library to work
  // only the call to `this.wowService.init()` at some point is necessary
  private wowSubscription: Subscription;

  constructor(private router: Router, private wowService: NgwWowService){
    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(event => {
        // Reload WoW animations when done navigating to page,
        // but you are free to call it whenever/wherever you like
        this.wowService.init();
      });
  
  }

  ngOnInit() {
    // you can subscribe to WOW observable to react when an element is revealed
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (item:HTMLElement) => {
        // do whatever you want with revealed element
      });
  }

  ngOnDestroy() {
    // unsubscribe (if necessary) to WOW observable to prevent memory leaks
    this.wowSubscription.unsubscribe();
  }
}

```

See [WOW.js Documentation](https://github.com/matthieua/WOW#advanced-usage) to see more about how to customize animation settings.

## Credits

`ngx-cloned-wows` is built upon [WOW.js](http://mynameismatthieu.com/WOW/), created by [Matthieu Aussaguel](http://mynameismatthieu.com/)

## License

Copyright (c) 2023 Josmidz Z. Licensed under the MIT License (MIT)

