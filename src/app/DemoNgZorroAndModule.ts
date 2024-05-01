import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AppComponent } from './app.component';



@NgModule({
  imports: [
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NzDatePickerModule,
    NzModalModule,
    NzTableModule,
    NzFormModule,
    NzTabsModule,
    NzSelectModule,
    NzRadioModule,
    NzUploadModule,
    NzMessageModule,
    NzNotificationModule,
    NzLayoutModule,
    
  ],
 
  exports: [
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NzCheckboxModule

  ],
providers: [],
bootstrap: [AppComponent]
}) 
export class NgZorroAntdModule {}