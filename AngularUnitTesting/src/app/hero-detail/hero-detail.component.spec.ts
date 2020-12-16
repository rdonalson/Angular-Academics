import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { of } from 'rxjs/internal/observable/of';
import { FormsModule } from '@angular/forms';

import { HeroService } from '../hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import { tick } from '@angular/core/src/render3';


describe('HeroDetailComponent', () => {
  let fixture: ComponentFixture<HeroDetailComponent>;
  let mockActivatedRoute, mockHeroService, mockLocation;

  beforeEach(() => {
    mockActivatedRoute = {
      // tslint:disable-next-line: arrow-return-shorthand
      snapshot: { paramMap: { get: () => { return '3'; } } }  // Old
    };

    mockHeroService = jasmine.createSpyObj(['getHero', 'updateHero']);
    mockLocation = jasmine.createSpyObj(['back']);

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [HeroDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: HeroService, useValue: mockHeroService },
        { provide: Location, useValue: mockLocation }
      ]
    });
    fixture = TestBed.createComponent(HeroDetailComponent);

    mockHeroService.getHero.and.returnValue(of({ id: 3, name: 'SuperDude', strength: 100 }));
  });

  it('should render hero name in an H2 tag', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h2').textContent).toContain('SUPERDUDE');
  });

  it('should call updateHero when save is called', fakeAsync(() => {
    mockHeroService.updateHero.and.returnValue(of({}));
    fixture.detectChanges();

    fixture.componentInstance.save();
    flush();

    expect(mockHeroService.updateHero).toHaveBeenCalled();
  }));
});
