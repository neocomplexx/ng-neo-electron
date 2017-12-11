# ng-neo-electron

## Installation

To install this library, run:

```bash
$ npm install ng-neo-electron --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import library
import { NeoElectronModule } from 'ng-neo-electron';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify library as an import
    NeoElectronModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once library is imported, you can use it in your Angular application:

```typescript
import { NeoElectronService } from 'ng-neo-electron';

constructor(private electronService: NeoElectronService){}

// In any function
if( this.electronService.isElectronApp())
  window.alert('This is a electron app')
```


## License

MIT © [Neocomplexx](mailto:info@neocomplexx.com)
