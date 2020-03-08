import { TestBed, inject } from '@angular/core/testing';

import { EditStudentService } from './edit-student.service';

describe('EditStudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditStudentService]
    });
  });

  it('should be created', inject([EditStudentService], (service: EditStudentService) => {
    expect(service).toBeTruthy();
  }));
});
