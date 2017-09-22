<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Visualizador de Viveros</title>
    <link rel="stylesheet" href="CSS/bootstrap.min.css" type="text/css">
    <link rel="stylesheet" href="CSS/main.css" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
</head>
<body>
    <header>
      <nav class="row">
        <h1 class="logo">Visualizador</h1>
        <ul>
          <li><a href="">Inicio</a></li>
          <li><a href="">Administración</a></li>
          <li><a href="">Historicos</a></li>
        </ul>
      </nav>
    </header>
    
    <main class="container-fluid">
      <div class="row">
        <div class="col-lg-8 col-sm-12">
          <div id="map" class="col-sm-12"></div>
        </div>
        <div class="col-lg-4 col-sm-12">
          <div class="col-sm-12">
            <h3>Herramientas</h3>
          </div>
        </div>
      </div>
    </main>
    
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-sm-12">
            <h5 class="white-text">Información del Sitio</h5>
            <p class="grey-text text-lighten-4">
              El proposito de este sitio es permitir visualizar los viveros localizados en México, así como permitir registrar la información historica de los mismos. 
            </p>
          </div>
          <div class="col-lg-4 col-lg-offset-2 col-sm-12">
            <h5 class="white-text">Enlaces de Interés</h5>
            <ul>
              <li>
                <a class="grey-text text-lighten-3" href="https://developers.google.com/maps/documentation/javascript/tutorial?hl=es-419" target="_blank">
                  Google Maps API
                </a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="http://www.conafor.gob.mx/portal/" target="_blank">
                  CONAFOR
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          copyright &copy 2017
        </div>
      </div>
    </footer>

    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script src="JS/bootstrap.min.js"></script>
    <script type="text/javascript" src="JS/main.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBlFsOGuiesyTBdAWWygBZbRPZUH9e-Sog&callback=initMap" async defer></script>
</body>
</html>