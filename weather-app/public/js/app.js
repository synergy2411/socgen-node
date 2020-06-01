$(document).ready(() => {
    console.log("Document is Ready.");
    $("#btnForecast").on("click", event => {
        event.preventDefault();
        const location = $("#address").val();
        fetch(`http://localhost:3030/address?location=${location}`)
            .then(response => response.json())
            .then(result => {
                // console.log("RESULT : ", result);
                $("#result").append(`
                    <p class="display-5">
                        Below is the forecast for ${result.placeName}
                    </p>
                    <p>
                        It seems, it will be ${result.temperature} degree. 
                        The forecast is ${result.summary}.
                    </p>
                `)
                $("#address").val('');
            })
            .catch(err => console.log(err))
    })
})