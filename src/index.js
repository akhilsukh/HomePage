window.onload = function () {
    var search = document.getElementById('search-id')

    search.addEventListener("keyup", function (event) {
        search.focus()
        if (event.keyCode === 13) {
            event.preventDefault()
            if (search.value === '') {
                search.placeholder = "Try Entering Text"
            }
            else {
                var searchQuery = "http://www.google.com/search?q=" + search.value
                window.location.href = searchQuery
            }
        }
    });

}

