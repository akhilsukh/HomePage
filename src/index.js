window.onload = function () {
    var search = document.getElementById('search-id')
    var google = document.getElementById('google')
    var duck = document.getElementById('duck')

    search.addEventListener("keyup", function (event) {
        //search.focus() puts the cursor in the input field
        search.focus()
        if (event.keyCode === 13) {
            event.preventDefault()
            if (search.value === '') {
                search.placeholder = "Try Entering Text"
            }
            else {
                var searchQuery = "http://www.google.com/search?q=" + search.value
                window.location.href = searchQuery
                // search.value = null
            }
        }
    });

    google.addEventListener("click", function (event) {
        if (search.value === '') {
            search.placeholder = "Try Entering Text"
        }
        else {
            var searchQuery = "http://www.google.com/search?q=" + search.value
            window.location.href = searchQuery
        }
    })

    duck.addEventListener("click", function (event) {
        if (search.value === '') {
            search.placeholder = "Try Entering Text"
        }
        else {
            var searchQuery = "https://duckduckgo.com/?q=" + search.value
            window.location.href = searchQuery
        }
    })

}

