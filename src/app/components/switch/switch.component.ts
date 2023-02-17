import { Component, Attribute, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  providers: [
    {
      useExisting: forwardRef(() => SwitchComponent),
      provide: NG_VALUE_ACCESSOR,
      multi: true,
    }
  ]
})
export class SwitchComponent implements ControlValueAccessor {
  constructor(@Attribute('checked') public checked: boolean){ }

  onChange: any = () => {};
  onTouch: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(checked: boolean): void {
    this.checked = checked
  }

  onModelChange(event:boolean){
    this.onChange(event)
  }

  isDisabled: boolean
  setDisabledState(disabled: boolean): void {
    this.isDisabled = disabled
  }
}
