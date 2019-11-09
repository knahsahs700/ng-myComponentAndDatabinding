import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') heading: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor is called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnInit is called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit is called!');
    console.log('-------->Text Content: ' + this.heading.nativeElement.textContent);
    console.log('-------->Text Content of Paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck is called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is called!');
    console.log('-------->Text Content of Paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked is called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is called!');
    console.log('-------->Text Content: ' + this.heading.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked is called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy is called!');
  }
}
