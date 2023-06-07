import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { KataForFunService } from './kata-for-fun.service';
import { Result } from './model/result';
import { TestCase } from './model/test-case';
import { environment } from 'src/environments/environment';

describe('KataForFunService', () => {
  let service: KataForFunService;
  let httpController: HttpTestingController;

  const ENDPOINT = "/kata-for-fun/";

  const testCases: TestCase[] = [
    { input: 1, output: '1' },
    { input: 3, output: 'KataKata' },
    { input: -3, output: 'KataKata' },
    { input: 5, output: 'ForFor' },
    { input: 7, output: 'Fun'},
    { input: 9, output: 'Kata'},
    { input: 51, output: 'KataFor'},
    { input: 53, output: 'ForKata'},
    { input: 33, output: 'KataKataKata'},
    { input: 27, output: 'KataFun'},
    { input: 15, output: 'KataForFor' },

  ];
  
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(KataForFunService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  testCases.forEach((testCase: TestCase) => {

    it(`should return ${testCase.output} for an input number of ${testCase.input}`, () => {
        const expectedResult: Result = { result: testCase.output };
    
        service.getConvertedNumber(testCase.input).subscribe((data:Result) => {
            expect(data).toBe(expectedResult);
            console.log(data.result);
        });
        
        const req = httpController.expectOne(environment.serverApi + ENDPOINT + testCase.input);
        expect(req.request.method).toEqual('GET');
        req.flush(expectedResult);
      });
  })
});