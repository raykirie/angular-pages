import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-content-example',
  standalone: true,
  imports: [],
  templateUrl: './content-example.component.html',
  styleUrl: './content-example.component.css'
})
export class ContentExampleComponent implements
OnInit,
AfterViewInit,
AfterContentInit,
AfterViewChecked,
AfterContentChecked

{


constructor(){
  console.log('Init')
}

ngOnInit(): void {
  console.log('%c onInit ChildComponent', 'color: red')
}

ngAfterViewInit(): void {
  console.log('afterViewInit', 'ChildComponent')
}

ngAfterContentInit(): void {
  console.log('afterContentInit', 'ChildComponent')
}

ngAfterViewChecked(): void {
  console.log('afterViewChecked', 'ChildComponent')
}

ngAfterContentChecked(): void {
  console.log('afteContendChecked', 'ChildComponent')
} 

}
