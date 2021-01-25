
//let addBook = document.querySelector('#addBook');
//let showBooks = document.querySelector('#showBooks');

let library =[];


function Books(bookTitle,bookAuthor,nop,read) {
	this.bookTitle = bookTitle;
	this.bookAuthor = bookAuthor;
	this.nop = nop;
	this.read=read;
}


function showPerticularBook({bookTitle,bookAuthor,nop,read},index) {
	var book = `<tr><td>`+ bookTitle + `</td><td>` + bookAuthor + `</td><td>`
		+ nop +`</td><td> <input type="button" id="deleteButton" value="del" onclick="deleteFunction(${index})"></td><td>` + read + `</td></tr>`;
	document.getElementById("bookMenu").innerHTML += book;
}

function addNewBook(){

	var local_bookTitle =  document.getElementById("bookTitle_id").value;
	var local_bookAuthor = document.getElementById("bookAuthor_id").value;
	var local_nop =  document.getElementById("nop_id").value;
	var local_readStatus=false;
	if(document.getElementById("yes").checked == true)
		local_readStatus=true;

	let newBook = new Books(local_bookTitle,local_bookAuthor,local_nop,local_readStatus);
	library.push(newBook);

	showPerticularBook(newBook, library.length-1);
	document.getElementById("totalBooks").innerHTML = `Total Books :  ${library.length}`;
}

function showAllBooks(){
	for(let i=0;i<library.length;i++) {
		showPerticularBook(library[i],i);
	}
}

function deleteFunction(index) {
	console.log(index);
	library.splice(index,1);
	document.getElementById("bookMenu").innerHTML ="";
	showAllBooks();
	document.getElementById("totalBooks").innerHTML = `Total Books :  ${library.length}`;

}

document.querySelector('#addBook').addEventListener("click", addNewBook);
//document.querySelector('#deleteBook').addEventListener("click", deletePerticularBook);