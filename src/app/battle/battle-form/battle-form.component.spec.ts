import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleFormComponent } from './battle-form.component';

describe('BattleFormComponent', () => {
  let component: BattleFormComponent;
  let fixture: ComponentFixture<BattleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
