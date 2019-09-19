import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';

fdescribe("header",()=>
{
  let componet : FooterComponent;
  let myfixture : ComponentFixture<FooterComponent>;
beforeEach(async()=>{
  TestBed.configureTestingModule({
    declarations:[FooterComponent],
    imports:[MatToolbarModule],
    providers:[]
  }).compileComponents();

}) //beforeeach1

beforeEach( ()=> {
  myfixture=TestBed.createComponent(FooterComponent);
  componet=myfixture.componentInstance;
})

it('footer there',()=>
{
  expect(componet).toBeTruthy();
})
it('title there',()=>
{
let txt=myfixture.debugElement.query(By.css('mat-toolbar'))
expect(txt).toBeTruthy();
expect(txt.nativeElement.textContent).toBe('Keep');
}
)

it('button label submit',()=>
{
let txt=myfixture.debugElement.query(By.css('button'))
expect(txt).toBeTruthy();
expect(txt.nativeElement.textContent).toBe('Submit');
}
)

}
)

/*
describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); */
