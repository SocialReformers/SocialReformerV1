import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { AutoCompleteComponent } from './auto-complete/auto-complete';
@NgModule({
	declarations: [AutoCompleteComponent],
	imports: [FormsModule,
		IonicModule.forRoot(AutoCompleteComponent)],
	exports: [AutoCompleteComponent]
})
export class ComponentsModule {}
