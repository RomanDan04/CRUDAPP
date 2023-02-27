import { Component, Input, forwardRef, Attribute, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent)
    }
  ]
})
export class InputComponent implements ControlValueAccessor, OnInit{
  @Attribute('value') value = ""
  @Input() type = "text"
  @Input() min: number
  @Input() max: number
  @Input() pattern: string
  @Input() bgColor = ""
  @Input() warning = false
  @Input() placeholder = ""
  @Input() readonly = false
  @Input() required = false
  @Input() contentFirst = false

  ngOnInit(){
    if(!this.pattern){
      switch(this.type){
        case 'number':
          this.pattern = "\\d+\\.\\d+|\\d+"
        break
        default:
          this.pattern = ".*"
        break
      }
    }
  }

  writeValue(value: string): void {
    this.value = value
  }
  
  onChange = (_value: string) => { _value }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  
  onTouche: () => {}
  registerOnTouched(fn: any): void {
    this.onTouche = fn
  }

  isDisabled: boolean
  setDisabledState(disabled: boolean): void {
    this.isDisabled = disabled
  }
}
