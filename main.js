


(function getApi() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {



            var item = this.responseText;

            var element = JSON.parse(item);

            var data = element.products;

            var myText = "";


            for (var i = 0; i < data.length; i++) {

                var cartoona = `<div class="col-md-4 text-center mb-4">

                           <img src="${data[i].images[0]}" style="height:350px" class="img-fluid">

                           <h2>${data[i].id}</h2>

                           <h5>${data[i].title}</h5>

                           <h5>${data[i].category}</h5>

                           <h5>${data[i].price}$</h5>

                            </div>
                            `;
                myText = myText + cartoona;
            }

            document.querySelector(".test").innerHTML = myText;
        }
    };



    xhttp.open("GET", "https://dummyjson.com/products", true);
    xhttp.send();


})();
