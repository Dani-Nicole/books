const form = document.querySelector('#book-form')
form.addEventListener('submit', addBook)
function addBook(event){
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value

    const bookRow = document.createElement('tr')
    bookRow.innerHTML = `
                        <td>${title}</td>
                        <td>${author}</td>
                        <td>${isbn}</td>
                        <td><a href="#">X</a> </td>`
    const booksTable = document.querySelector('#books')
    booksTable.appendChild(bookRow)

    const book = [title, author, isbn]
    console.log(book)

    let books //array for user inputs
    if(localStorage.getItem('books') == null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }

    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))

    document.querySelector('#title').value =''
    document.querySelector('#author').value =''
    document.querySelector('#isbn').value =''
    event.preventDefault()
}