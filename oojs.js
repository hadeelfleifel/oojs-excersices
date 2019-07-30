/*SuperHero
_Make a base  class. Give it some properties, and actions (methods) that change those properties.
*/
function SuperHero (name,age){
        this.name =name;
        this.age = age;
        this.change = function(){
            console.log(this.name )
            console.log(this.age)
        }
    }  
    

 var aseel=new SuperHero('hadeel',26) ;
aseel.change();

/*Sing a Song 
* 1. Create a class called `Song()` with two properties:
  - `songName` - i.e., 'A day in the Life'
  - `bandName` - i.e., 'The Beatles'
1. create a new instance of the class, storing it in a variable
1. Add two methods to the prototype:
  - `countName` - return the total number of words in the song name
  - `createElement` - create a new DOM element with jQuery
1. Create an instance with the `new` keyword
1. Append the instance to the DOM
*/

function Song(songName,bandName){
    this.songName=songName;
    this.bandName=bandName;
}
Song.prototype.count= function(){
    console.log(this.songName.length);

}
Song.prototype.create= function(){
    $('body').append(`<h1>${this.bandName}</h1>`)
 }

newSong = new Song('A day in the Life','The Beatles');
newSong.count();
newSong.create();

secSong = new Song('A day in the Life Life','The Beatles');
secSong.count();
secSong.create();

/*The Cat

_Write yourself a virtual cat - animals with a CLI are so much nicer than ones with fur._

*   Create an object that represents a cat. It should have properties for `tiredness`, `hunger`, `lonliness` and `happiness`
*   Next, write methods that increase and decrease those properties. Call them something that actually represents what would increase or decrease these things, like "feed", "sleep", or "pet".
*   Last, write a method that prints out the cat's status in each area. (Be creative e.g. Paws is really hungry, Paws is VERY happy.) 
*   Bonus: Make the functions take arguments that increase or decrease arbitrary amounts
*   Bonus: Make the functions as arbitrary as cats are - sometimes make it so the cat doesn't _want_ to be petted.
*/

function TheCat(tiredness,hunger,lonliness,happiness){
    this.tiredness =tiredness;
    this.hunger=hunger;
    this.lonliness=lonliness;
    this.happiness=happiness;

    this.feed = function (){
      
        console.log(this.hunger=hunger-1);
        console.log(this.tiredness,this.hunger,this.lonliness,this.happiness);


    }
    this.sleep = function (){
                    console.log(this.tiredness=tiredness-1);
                    console.log(this.tiredness,this.hunger,this.lonliness,this.happiness);



    }
    this.pet = function (){
        console.log(this.happiness=happiness+1);
        console.log(this.tiredness,this.hunger,this.lonliness,this.happiness);
    }
this.play = function (){
    console.log(this.lonliness=lonliness-1);
    console.log(this.tiredness,this.hunger,this.lonliness,this.happiness);
}

  }
  TheCat.prototype.status = function (){
      if(this.hunger <5){
console.log('Paws is really hungry')    
  } 
  else {
      console.log('Paws is VERY happy')
  }
  }
newCat = new TheCat (10,5,8,9);
newCat.feed();
newCat.sleep();
newCat.play();
newCat.pet();
newCat.status();

/*The Reading List

_An object-oriented book-list!_

*   Create a class `BookList`
*   Create another class called `Book`

*   **BookLists** should have the following properties:
	*   Number of books marked as read
	*   Number of books marked not read yet
	*   A reference to the next book to read (book object)
	*   A reference to the current book being read (book object)
	*   A reference to the last book read (book object)
	*   An array of all the Books
*   Each **Book** should have several properties:
	*   Title
	*  Genre
	*  Author
	*   Read (true or false)
	*   Read date, can be blank, otherwise needs to be a [JS Date() object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
*   Every **Booklist** should have a few methods: 
	* .add(book)
		* should add a **book** to the books list.
	*   .finishCurrentBook()
		*   should mark the **book** that is currently being read as "read"
		*   Give it a read date of new Date(Date.now())
		*   Change the last **book** read to be the book that just got finished
		*   Change the current **book** to be the next book to be read
		*   Change the next **book** to be read property to be the first unread book you find in the list of books

*   **Booklists** and **Books** might need more methods than that. Try to think of more that might be useful.
 */
// function BookList( Number_read,Number_not_read,Book){
// this.num1=Number_read;
// this.num2=Number_not_read;
// this.read=Book.Title;
// this.notRead=Book.Title;
// this.being=Book.Title;
// this.array=[];
// }
// function Book( Title,Genre,Author, Read,Read_date){
// this.Title=Title;
// this.Genre=Genre;
// this.Author=Author;
// this.Read=Read;
// this.Read_date=Read_date;
// }
// amman=new Book ('amman','art','hadeel','done','last year')
// amman = new BookList (20,15,Book)


function BookList (
    Number_of_books_marked_as_read,
	  Number_of_books_marked_not_read_yet,
	 A_reference_to_the_next_book_to_read,
	 A_reference_to_the_current_book_being_read,
	 A_reference_to_the_last_book_read,
     An_array_of_all_the_Books,
     Book
){
this.Number_of_books_marked_as_read = Number_of_books_marked_as_read;
this.Number_of_books_marked_not_read_yet=Number_of_books_marked_not_read_yet;
this.A_reference_to_the_current_book_being_read =A_reference_to_the_current_book_being_read;
this.A_reference_to_the_last_book_read=A_reference_to_the_last_book_read;
this.A_reference_to_the_next_book_to_read=A_reference_to_the_next_book_to_read;
}
function Book( Title,Genre,Author, Read,Read_date){
    this.T=Title;
    this.G=genre;
    this.A=Author;
    this.R=Read;
    this.rDate=Read_date;
    }