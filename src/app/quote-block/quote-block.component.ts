import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-block',
  templateUrl: './quote-block.component.html',
  styleUrls: ['./quote-block.component.css']
})
export class QuoteBlockComponent implements OnInit {
  @ Input()
  quotes:Quotes[] = [
    new Quotes (1, "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", "James Cameron", 0, 0, new Date(27,7,1992)),
    new Quotes (2, "Life is what happens when you're busy making other plans.", "John Lennon", 0, 0, new Date(17,12,2004)),
    new Quotes (3, "Whoever is happy will make others happy too.", "Anne Frank", 0, 0, new Date(10,18,2017)),
    new Quotes (4, "The secret of getting ahead is getting started", "Mark Twain", 0, 0, new Date(4,8,2014))
  ]
  deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      this.quotes.splice(index,1)
    }
  }

  newQuotation(quote: Quotes) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength++;
    quote.datePast = new Date(quote.datePast);
    this.quotes.push(quote);
  }
  isTop(){
    // let votes = this.quotes.
    // if(this.quotes.)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
