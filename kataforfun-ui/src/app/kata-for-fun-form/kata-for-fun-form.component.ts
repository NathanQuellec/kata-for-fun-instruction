import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kata-for-fun-form',
  templateUrl: './kata-for-fun-form.component.html'
})
export class KataForFunFormComponent implements OnInit {

  @Output() submitNumberOutput: EventEmitter<number> = new EventEmitter<number>();

  conversionForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.conversionForm = this.formBuilder.group({
      inputNumberForm: ['', [Validators.required, Validators.pattern(/^\d+$/)]]
    });
  }

  ngOnInit(): void {
  }

  submitNumber(inputNumberForm: string): void {
    const inputNumber = Number(inputNumberForm);
    this.submitNumberOutput.emit(inputNumber);
    this.conversionForm.reset();
  }

}
