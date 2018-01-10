<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Visualizador de Viveros</title>
    <link rel="stylesheet" href="build/compressed.min.css">
    <link rel="stylesheet" href="https://js.arcgis.com/3.23/esri/css/esri.css">
</head>
<body>
    <div class="top-headbar">
        <div class="headbar-container">
            <div class="topbar-buttons">
                <ul>
                    <li>
                        <a href="#!" onclick="toogleTools()">
                            <i class="fa fa-wrench fa-lg"></i>&nbsp&nbsp<i class="lg-hidden fa fa-chevron-down"></i>
                            <span class="sm-hidden">&nbsp&nbspHerramientas&nbsp&nbsp<i class="fa fa-chevron-down"></i></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="main">
        <div class="menu-bar">
            <div class="menu-bar-header">
                <h2>Menú de Operaciones</h2>    
            </div>
            <div class="menu-item">
                <h3 class="menu-item-title"><i class="fa fa-file-code-o fa-lg"></i>&nbsp&nbspCarga de Archivos<i class="fa fa-chevron-right fa-lg chevron"></i></h3>
                <div class="menu-item-content">
                    <form enctype="multipart/form-data" method="post" id="file-upload-form">
                        <label>Selecciona un archivo SHP comprimido para cargar</label>
                        <input type="file" name="datafile" id="datafile">
                    </form>
                    <div id="upload-status">En espera...</div>
                </div>
            </div>
            <div class="menu-item">
                <h3 class="menu-item-title"><i class="fa fa-tree fa-lg"></i>&nbsp&nbspListado de Viveros<i class="fa fa-chevron-right fa-lg chevron"></i></h3>
                <div class="menu-item-content">
                    <div class="item-vivero">

                    </div>
                </div>
            </div>
        </div>
        <div class="map-area" id="map"></div>
    </div>
    
    <footer>
        <div class="footer-container">
            <div class="site-info">
                
            </div>
            <div class="serv-cliente">
                
            </div>
        </div>
    </footer>
    <script src="https://js.arcgis.com/3.23/"></script>
    <script src="build/compressed.min.js"></script>
</body>
</html>