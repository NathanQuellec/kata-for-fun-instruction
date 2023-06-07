import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { KataForFunService } from '../kata-for-fun.service';
import { Result } from '../model/result';

@Component({
  selector: 'app-kata-for-fun',
  templateUrl: './kata-for-fun.component.html'
})
export class KataForFunComponent implements OnInit, OnDestroy {

  convertedValues: NumberConverted[] = [];

  constructor(private kataForFunService: KataForFunService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  convertNumber(inputNumber: number): void {
    this.kataForFunService.getConvertedNumber(inputNumber)
                          .subscribe((data:Result) => this.convertedValues.push(
                            {
                              "numberToConvert": inputNumber,
                              "result": data.result
                            }));
  }
}

interface NumberConverted {
  numberToConvert: number;
  result: string;
}
