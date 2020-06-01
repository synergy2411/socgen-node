$(document).ready(() => {
    console.log("Document is Ready.");
    $("#btnForecast").on("click", event => {
        event.preventDefault();
        const location = $("#address").val();
        fetch(`http://localhost:3030/address?location=${location}`)
            .then(response => response.json())
            .then(result => {
                console.log("RESULT : ", result);
            })
            .catch(err => console.log(err))
    })
})