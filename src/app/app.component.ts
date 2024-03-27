import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ContentExampleComponent } from './components/content-example/content-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent, ContentExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked

{
  title = 'myapp';

  constructor(){
    console.log('Init')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges', 'ParentComponent')
  }

  ngOnInit(): void {
    console.log('onInit', 'ParentComponent')
  }

  ngAfterViewInit(): void {
    console.log('afterViewInit', 'ParentComponent')
  }

  ngAfterContentInit(): void {
    console.log('afterContentInit', 'ParentComponent')
  }

  ngDoCheck(): void {
    console.log('doCheck', 'ParentComponent')
  }

  ngAfterViewChecked(): void {
    console.log('afterViewChecked', 'ParentComponent')
  }

  ngAfterContentChecked(): void {
    console.log('afteContendChecked', 'ParentComponent')
  }
}
