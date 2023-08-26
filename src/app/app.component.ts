// Import Angular core libraries
import { Component } from '@angular/core';

// Component decorator to define metadata
@Component({
  selector: `app-root`, // HTML tag where this component will be inserted
  templateUrl: `./app.component.html`, // Path to the HTML template
  styleUrls: [`./app.component.css`], // Path to the CSS styles
})
export class AppComponent {
  title = `Book List`; // Title of the application
  bookName: string = ``; // Variable to hold the name of the book to be added
  books: string[] = []; // Array to hold the list of books

  // Method to add a book to the list
  addBook() {
    // Check if the bookName is not empty
    if (this.bookName) {
      this.books.push(this.bookName); // Add the book to the books array
      this.bookName = ``; // Clear the input field
    }
  }
}
