$(document).ready(function () {

    $('#searchButton').click(function () {

        var searchBox = $('#searchBox').val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchBox + "&format=json&callback=?"

        $.getJSON(url, function (data) {
            $('#result').html('');
            for (var i = 0; i < data[1].length; i++) {
                $('#result').prepend('<li><a href=' + data[3][i] + '>' + data[1][i] + '</a><p>' + data[2][i] + '</li>');
            };
        });

    });
});
