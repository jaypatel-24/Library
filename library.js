
let library =[];


function Books(bookTitle,bookAuthor,noOfPages,readStatus) {
	this.bookTitle = bookTitle;
	this.bookAuthor = bookAuthor;
	this.noOfPages = noOfPages;
	this.readStatus = readStatus;
}


function showPerticularBook({bookTitle,bookAuthor,noOfPages,readStatus},index) {
	var book = `<tr><td>`+ bookTitle + `</td><td>` + bookAuthor + `</td><td>`
		+ noOfPages +`</td><td> <input type="button" id="deleteButton" value="del" onclick="deleteFunction(${index})"></td><td>` + readStatus + 
		`</td><td> <input type="button" id="changeReadStatus" value="Change Read Status" onclick="changeReadStatusOfBook(${index})"></td></tr>`;
	document.getElementById("listOfBooks").innerHTML += book;
}

function addNewBook(){

	var local_bookTitle =  document.getElementById("bookTitle_id").value;
	var local_bookAuthor = document.getElementById("bookAuthor_id").value;
	var local_noOfPages =  document.getElementById("noOfPages_id").value;
	var local_readStatus = false;
	if(document.getElementById("yes").checked == true)
		local_readStatus=true;

	let newBook = new Books(local_bookTitle, local_bookAuthor, local_noOfPages, local_readStatus);
	library.push(newBook);

	showPerticularBook(newBook, library.length-1);
	document.getElementById("totalBooks").innerHTML = `Total Books :  ${library.length}`;
	resetFormValues();
}

function resetFormValues() {
	document.getElementById("bookTitle_id").value ='';
	document.getElementById("bookAuthor_id").value='';
	document.getElementById("noOfPages_id").value='';
	document.getElementById("yes").checked = false;
	document.getElementById("no").checked = false;
}

function showAllBooks(){
	for(let i=0;i<library.length;i++) {
		showPerticularBook(library[i], i);
	}
}

function deleteFunction(index) {
	library.splice(index,1);
	document.getElementById("listOfBooks").innerHTML ="";
	showAllBooks();
	document.getElementById("totalBooks").innerHTML = `Total Books :  ${library.length}`;

}

function changeReadStatusOfBook(index) {
	if(library[index].readStatus == true){
		library[index].readStatus = false; 
	} else {
		library[index].readStatus = true; 
	}

	document.getElementById("listOfBooks").innerHTML ="";
	showAllBooks();
}

document.querySelector('#addNewBook').addEventListener("click", addNewBook);