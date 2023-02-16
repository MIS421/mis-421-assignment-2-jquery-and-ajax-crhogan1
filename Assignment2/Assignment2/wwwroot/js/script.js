var len;
var results = '';

function clickSearch() {
    apiSearch();
}

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com//v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "1c97dc2ad66c4b82a8fd4751b7d98f26");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}

function backgroundChange() {
    document.getElementById("background").style.backgroundImage = "url(./css/images/lemon.jpg)";
    document.getElementById("btnTime").style.backgroundColor = "#F5F750";
}


function dialog() {

    var date = new Date();
    var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    HHmm = hour + ":" + minutes;

    var time = document.getElementById("time");
    time.innerHTML = HHmm

    $("#time").dialog({
        modal: true,
        autoOpen: false,
        title: "Current Time",
        width: 300,
        height: 150
    });
    $("#btnTime").click(function () {
        $('#time').dialog('open');
    });
}

function luckySearch() {
    var params = {
        "q": $("#query").val(),
        "count": "50",
        "offset": "0",
        "mkt": "en-us"
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com//v7.0/search?' + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "1c97dc2ad66c4b82a8fd4751b7d98f26");
        },
        type: "GET",
    })
        .done(function (data) {
            var firstPage = data.webPages.value[0].url;
            window.open(firstPage);
            
        })
        .fail(function () {
            alert("error");
        });
}




