/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestComponentService } from './test-component.service';

describe('Service: TestComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestComponentService]
    });
  });

  it('should ...', inject([TestComponentService], (service: TestComponentService) => {
    expect(service).toBeTruthy();
  }));
});
