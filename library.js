
//let addBook = document.querySelector('#addBook');
//let showBooks = document.querySelector('#showBooks');

let library =[];		

function Books(bookTitle,bookAuthor,nop) {
	this.bookTitle = bookTitle;
	this.bookAuthor = bookAuthor;
	this.nop = nop;
}

var book1 = new Books('jay','jeet','10');
//showPerticularBook(book1);
library.push(book1);

function showPerticularBook({bookTitle,bookAuthor,nop}) {
	var book = `<tr><td>`+ bookTitle + `</td><td>` + bookAuthor + `</td><td>`
		+ nop +`</td></tr>`;
	document.getElementById("bookMenu").innerHTML += book;
}

function addNewBook(){

	var local_bookTitle =  document.getElementById("bookTitle_id").value;
	var local_bookAuthor = document.getElementById("bookAuthor_id").value;
	var local_nop =  document.getElementById("nop_id").value;

	let newBook = new Books(local_bookTitle,local_bookAuthor,local_nop);
	library.push(newBook);
	//document.write(library.length);
	showPerticularBook(newBook);
}

function showAllBooks(){
	for(let i=0;i<library.length;i++) {
		showPerticularBook(library[i]);
	}
}
function openForm(){
	var x = document.getElementById("formClass");

	if(x.style.display === "none")
		x.style.display = "block";
	else 
		x.style.display = "none";
}

document.querySelector('#addBook').addEventListener("click", addNewBook);
// document.querySelector('#showBooks').addEventListener("click", showAllBooks);

/*



//display the list of books



//to open the form

*/