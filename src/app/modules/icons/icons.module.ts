import { NgModule } from '@angular/core';

import { NgIconsModule } from '@ng-icons/core';
import {
  heroMagnifyingGlass,
  heroExclamationTriangle,
  heroEllipsisHorizontal,
  heroCreditCard,
  heroPlusCircle,
  heroPencil,
  heroTrash,
} from '@ng-icons/heroicons/outline';

@NgModule({
  imports: [
    NgIconsModule.withIcons({
      heroMagnifyingGlass,
      heroExclamationTriangle,
      heroEllipsisHorizontal,
      heroCreditCard,
      heroPlusCircle,
      heroPencil,
      heroTrash
    })
  ],
  exports: [
    NgIconsModule
  ]
})
export class IconsModule { }
