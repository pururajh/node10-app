import { TestBed, inject } from '@angular/core/testing';

import { PostalAddressService } from './postal-address.service';

describe('PostalAddressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostalAddressService]
    });
  });

  it('should be created', inject([PostalAddressService], (service: PostalAddressService) => {
    expect(service).toBeTruthy();
  }));
});
