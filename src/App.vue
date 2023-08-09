<template>

<div class="container">

<div class="fixed-top">
    <a href="#Home"><img src="./assets/img/icon/home-white.png" style="width:1.5rem;"></a>
    <a href="#Produk"><img src="./assets/img/icon/mamber-white.png" style="width:1.5rem;"></a>
    <a href="#About_Us"><img src="./assets/img/icon/user-white.png" style="width:1.5rem;"></a>
    <a href="#Tentang_Kami"><img src="./assets/img/icon/kontak-white.png" style="width:1.5rem;"></a>
</div>


<section id="Home">
    <div class="row">
        <div class="col-md-4">
            <h4><img src="./assets/img/icon/home-white.png" style="width:1.5rem;"><br>Home</h4>
            <img src="./assets/img/logo/barista-torra-kopi.gif" style="width:80%; padding-top:50px;">
        </div>  
        <div class="col-md-8">
            <h3 align="center">Welcome To Kopi Shop "Kopi Torra"</h3>

      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        
        <div class="carousel-inner">


          
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="./assets/img/kategori/kategori-dessert.jpg" class="d-block w-100" alt="..." style="height:250px;">
            <h5 style="font-size:1rem; color:#FFF8DC; font-family:'Comic Sans MS'; text-align:left; background:rgba(0,204,0,0.8);">Kategori Dessert</h5>
          </div>
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="./assets/img/kategori/kategori-kopi.jpg" class="d-block w-100" alt="..." style="height:250px;">
            <h5 style="font-size:1rem; color:#FFF8DC; font-family:'Comic Sans MS'; text-align:left; background:rgba(0,204,0,0.8);">Kategori Kopi</h5>
          </div>
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="./assets/img/kategori/kategori-makan.jpg" class="d-block w-100" alt="..." style="height:250px;">
            <h5 style="font-size:1rem; color:#FFF8DC; font-family:'Comic Sans MS'; text-align:left; background:rgba(0,204,0,0.8);">Kategori Makanan</h5>
          </div>

        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>




         

</div>
    </div>      
</section>



<section id="Produk">
<div class="row">

<h4 style="text-align:right;">Produk Kami <img src="./assets/img/icon/mamber-white.png" style="width:3rem;"></h4>


<data class="col-sm-4 mb-2">

    <div class="card sm-3">
      <div class="card-body">
        <h5 class="card-title" style="text-align:left;">
          Mille Crepes
          <img src="./assets/img/produk/dessert-1.jpg" width="100%" height="150px"> 
        </h5>
        <div id="isi">

          <p class="card-text" style="text-align:justify; height:100px; overflow:auto; padding-right:5px;">
            Mille Crepes yang berlapis dan disiram dengan saus cokelat atau strawberry yang melengkapi rasa krim di antara lapisannya.
          </p>
        </div>
        <hr class="dropdown-divider" style="height:1px; background:#000; border:none; margin:10px 0px;">
        <h5 class="card-title" style="text-align:left;">Rp. 25000</h5>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#produk1" style="float:right; padding:5px; width:100%;">Pesan</button>

      </div>
    </div>

</data>

<data class="col-sm-4 mb-2">

    <div class="card sm-3">
      <div class="card-body">
        <h5 class="card-title" style="text-align:left;">
          Pankeki cokelat
          <img src="./assets/img/produk/dessert-2.jpg" width="100%" height="150px"> 
        </h5>
        <div id="isi">

          <p class="card-text" style="text-align:justify; height:100px; overflow:auto; padding-right:5px;">
            Pankeki cokelat meruapakan souffle pancake dengan topping vla  cokelat yang meleleh di atasnya. Jadi semakin istimewa karena ditambah lagi dengan boba brown sugar yang kenyal dan memanjakan lidah.
          </p>
        </div>
        <hr class="dropdown-divider" style="height:1px; background:#000; border:none; margin:10px 0px;">
        <h5 class="card-title" style="text-align:left;">Rp. 30000</h5>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#produk2" style="float:right; padding:5px; width:100%;">Pesan</button>

      </div>
    </div>

</data>

<data class="col-sm-4 mb-2">

    <div class="card sm-3">
      <div class="card-body">
        <h5 class="card-title" style="text-align:left;">
          Oyatsudo
          <img src="./assets/img/produk/dessert-3.jpg" width="100%" height="150px"> 
        </h5>
        <div id="isi">

          <p class="card-text" style="text-align:justify; height:100px; overflow:auto; padding-right:5px;">
            Oyatsudo merupakan salah satu menu dessert kue bolu lapis dengan rasa yang pas, dengan aneka topping didalamnya seperti cokelat, stoberi dan masih banyak topping lainnya, disajikan dengan saos khas korea yang membuatnya kekinian bangket.
          </p>
        </div>
        <hr class="dropdown-divider" style="height:1px; background:#000; border:none; margin:10px 0px;">
        <h5 class="card-title" style="text-align:left;">Rp. 35000</h5>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#produk3" style="float:right; padding:5px; width:100%;">Pesan</button>

      </div>
    </div>

</data>


<data class="col-sm-4 mb-2">

    <div class="card sm-3">
      <div class="card-body">
        <h5 class="card-title" style="text-align:left;">
          Bubur ayam
          <img src="./assets/img/produk/makanan-1.jpg" width="100%" height="150px"> 
        </h5>
        <div id="isi">

          <p class="card-text" style="text-align:justify; height:100px; overflow:auto; padding-right:5px;">
            Bubur ayam yang kami sajikan menggunakan bumbu  racikan khas rempa-rempa khas palembang dengan tambahan topping sate jerohan seperti kikil, babat, dan aneka jerohan lainnya.
          </p>
        </div>
        <hr class="dropdown-divider" style="height:1px; background:#000; border:none; margin:10px 0px;">
        <h5 class="card-title" style="text-align:left;">Rp. 15000</h5>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#produk4" style="float:right; padding:5px; width:100%;">Pesan</button>

      </div>
    </div>

</data>

<data class="col-sm-4 mb-2">

    <div class="card sm-3">
      <div class="card-body">
        <h5 class="card-title" style="text-align:left;">
          Nasi Uduk
          <img src="./assets/img/produk/makanan-2.jpg" width="100%" height="150px"> 
        </h5>
        <div id="isi">

          <p class="card-text" style="text-align:justify; height:100px; overflow:auto; padding-right:5px;">
            Nasi Uduk (Nasasi Gemuk) yang kami sajikan sama seperti nasi gemuk pada umumnya dimana yang membedakan dengan nasi gemuk yang kami sajikan adaalah toppingnya dimana topping yang kami beri seperti telur, kerupuk ikan, bihun jagung dan aneka jerohan.
          </p>
        </div>
        <hr class="dropdown-divider" style="height:1px; background:#000; border:none; margin:10px 0px;">
        <h5 class="card-title" style="text-align:left;">Rp. 20000</h5>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#produk5" style="float:right; padding:5px; width:100%;">Pesan</button>

      </div>
    </div>

</data>


<data class="col-sm-4 mb-2">

    <div class="card sm-3">
      <div class="card-body">
        <h5 class="card-title" style="text-align:left;">
          Nasi goreng
          <img src="./assets/img/produk/makanan-3.jpg" width="100%" height="150px"> 
        </h5>
        <div id="isi">

          <p class="card-text" style="text-align:justify; height:100px; overflow:auto; padding-right:5px;">
            Nasi goreng yang kami sajikan sama seperti nasi goreng pada umumnya dimana yang membedakan dengan nasi goreng yang kami sajikan adaalah toppingnya dimana topping yang kami beri seperti telur, kerupuk ikan, bihun jagung dan aneka jerohan.
          </p>
        </div>
        <hr class="dropdown-divider" style="height:1px; background:#000; border:none; margin:10px 0px;">
        <h5 class="card-title" style="text-align:left;">Rp. 25000</h5>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#produk6" style="float:right; padding:5px; width:100%;">Pesan</button>

      </div>
    </div>

</data>

</div>
</section>

<section id="About_Us">
    <div class="row">
        <div class="col-md-4">
            <h4><img src="./assets/img/icon/user-white.png" style="width:3rem;"><br> About Us</h4>
            <img src="./assets/img/barista.jpg" width="100%">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#barista" style="font-size:12px; padding:2px 10px; border-radius:0px;">Barista Adalah ?</button> 
        </div>  
        <div class="col-md-8">
            <img src="./assets/img/coffee-shop.jpg" width="100%" height="300px">
            <p style="color:#000; text-align:justify;">
              <b>Coffee Shop</b> merupakan bagian dari UMKM yang berperan penting dalam meningkatkan lapangan pekerjaan pada suatu kota atau negara, khususnya di wilayah kota yang ada di indonesia, hampir semua orang menyukai kopi. Maka dari itu UMKM memiliki peran yang sangat penting dalam perkembangan ekonomi nasional maupun daerah.
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cafe_shop" style="font-size:12px; padding:2px 10px; border-radius:0px;">Lebih Lengkap</button>   
            </p>
        </div>      
    </div>  
</section>

<section id="Tentang_Kami">
    <div class="row">
        <h4 style="text-align:left;"><img src="./assets/img/icon/kontak-white.png" style="width:3rem;">Tentang Kami</h4>

            <div class="col-sm-4 mb-2" style="background:#c1c1c1;">
              <img src="./assets/img/LOGO-KOPI-TORRA.png" style="width:80%;">
            </div>

            <div class="col-sm-4 mb-2" style="background:#c9c9c9;">
                <h5 style="text-align:left;">Kontak Kami</h5>
                <p style="text-align:left;">
                  <img src="./assets/img/icon/kontak-white.png" style="width:26px; background:#000; border-radius:25px; padding:1px;"><br> 
                   Rizky prayogo 
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#profil" style="font-size:12px; padding:2px 10px; border-radius:0px;">profil</button>
                   <br>
                  <img src="./assets/img/logo/gmail.png" width="25px"><br>rizkyyoga281@gmail.com<br>
                   <img src="./assets/img/logo/headphone.png" width="25px"><br>
                   087763578343
                </p>
            </div>

            <div class="col-sm-4 mb-2" style="background:#c1c1c1;">
                <h5 style="text-align:left;">Akun</h5>
                <p style="text-align:left;">
                   <img src="./assets/img/logo/github.png" width="25px"><br>
                   Rizkyyoga20/layanan-pasien <br>
                   <img src="./assets/img/logo/instagram.png" width="25px"><br>
                   rizky_yoga17
                </p>
            </div>

    </div>
</section>




        <div class="modal fade" id="cafe_shop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Coffee Shop</h5>
                <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-backspace-fill" viewBox="0 0 16 16">
                    <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
                  </svg>      
                </button>
              </div>
              <div class="modal-body">

                <img src="./assets/img/coffee-shop.jpg" width="100%" height="300px">
                <p style="color:#000; text-align:justify;">
                  <b>Coffee Shop</b> merupakan bagian dari UMKM yang berperan penting dalam meningkatkan lapangan pekerjaan pada suatu kota atau negara, khususnya di wilayah kota yang ada di indonesia, hampir semua orang menyukai kopi. Maka dari itu UMKM memiliki peran yang sangat penting dalam perkembangan ekonomi nasional maupun daerah. Coffee Shop merupakan salah satu usaha di bidang kuliner yang tidak pernah kehabisan peminat khusunya anak remaja. kedai kopi cukup sering dikunjungi masyarakat, baik yang hanya duduk santai menikmati suasana hingga memesan minuman untuk dibawa pulang. Kedai kopi  merupakan istilah bagi seseorang untuk menamai sebuah tempat usaha yang tidak hanya menjual kopi, tapi juga berbagai macam minuman panas atau dingin. Fungsi dari coffee shop itu sendiri yaitu sebagai tempat menikmati makanan dan minuman serta sebagai tempat bersantai yang informal. Coffee shop merupakan suatu tempat yang digunakan untuk orang - orang yang ingin menikmati minuman sambil bersantai ria. Sambil mendengarkan musik.    
                </p>

              </div>

              <div class="modal-footer">
                Kopi Shop "Kopi Torra"
              </div>


            </div>
          </div>
        </div>



        <div class="modal fade" id="barista" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Barista</h5>
                <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-backspace-fill" viewBox="0 0 16 16">
                    <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
                  </svg>      
                </button>
              </div>
              <div class="modal-body">

                <img src="./assets/img/barista.jpg" width="100%">
                <p style="color:#000; text-align:justify;">
                  <b>Barista</b> merupakan peran paling penting dalam sebuah cafe. Barista mengerjakan hampir semua hal mengenai kopinya, termasuk membuat kopi, melayani pemesanan kopi dari konsumen, dan menjelaskan jenis-jenis kopi yang dijual ke konsumen.              
                </p>

              </div>

              <div class="modal-footer">
                Kopi Shop "Kopi Torra"
              </div>


            </div>
          </div>
        </div>





        <div class="modal fade" id="barista" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Barista</h5>
                <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-backspace-fill" viewBox="0 0 16 16">
                    <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
                  </svg>      
                </button>
              </div>
              <div class="modal-body">

                <img src="./assets/img/barista.jpg" width="100%">
                <p style="color:#000; text-align:justify;">
                  <b>Barista</b> merupakan peran paling penting dalam sebuah cafe. Barista mengerjakan hampir semua hal mengenai kopinya, termasuk membuat kopi, melayani pemesanan kopi dari konsumen, dan menjelaskan jenis-jenis kopi yang dijual ke konsumen.              
                </p>

              </div>

              <div class="modal-footer">
                Kopi Shop "Kopi Torra"
              </div>


            </div>
          </div>
        </div>




        <div class="modal fade" id="produk1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Mille Crepes</h5>
                <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-backspace-fill" viewBox="0 0 16 16">
                    <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
                  </svg>      
                </button>
              </div>
              <div class="modal-body">

                    <img src="./assets/img/produk/dessert-1.jpg" style="width:100%;"> 
                    <p class="card-text" style="text-align:justify;">
                      Mille Crepes yang berlapis dan disiram dengan saus cokelat atau strawberry yang melengkapi rasa krim di antara lapisannya.
                    </p>

                  <hr class="dropdown-divider" style="height:1px; background:#000; border:none; margin:10px 0px;">
                  <h5 class="card-title" style="text-align:left; margin-bottom:5px;">Rp. 25000</h5>


                <form action="" method="POST">
                  <input type="text" name="jumlah_pesanan" placeholder="Jumlah pesanan" class="form-control" style="margin-bottom:5px;">
                  <textarea name="keterangan" class="form-control" style="margin-bottom:5px;"></textarea>
                  <button type="submit" style="float:right;" class="btn btn-primary">
                    <img src="./assets/img/logo/keranjang.png" style="width:25px;">
                  </button>
                </form>

              </div>

              <div class="modal-footer">
                Kopi Shop "Kopi Torra"
              </div>


            </div>
          </div>
        </div>



        <div class="modal fade" id="produk2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Pankeki cokelat</h5>
                <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-backspace-fill" viewBox="0 0 16 16">
                    <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
                  </svg>      
                </button>
              </div>
              <div class="modal-body">

                  <img src="./assets/img/produk/dessert-2.jpg" style="width:100%;">
                  <p class="card-text" style="text-align:justify;">
                    Pankeki cokelat meruapakan souffle pancake dengan topping vla  cokelat yang meleleh di atasnya. Jadi semakin istimewa karena ditambah lagi dengan boba brown sugar yang kenyal dan memanjakan lidah.
                  </p>
                <hr class="dropdown-divider" style="height:1px; background:#000; border:none; margin:10px 0px;">
                <h5 class="card-title" style="text-align:left;">Rp. 30000</h5>



                <form action="" method="POST">
                  <input type="text" name="jumlah_pesanan" placeholder="Jumlah pesanan" class="form-control" style="margin-bottom:5px;">
                  <textarea name="keterangan" class="form-control" style="margin-bottom:5px;"></textarea>
                  <button type="submit" style="float:right;" class="btn btn-primary">
                    <img src="./assets/img/logo/keranjang.png" style="width:25px;">
                  </button>
                </form>




              </div>

              <div class="modal-footer">
                Kopi Shop "Kopi Torra"
              </div>


            </div>
          </div>
        </div>



        <div class="modal fade" id="produk3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Oyatsudo</h5>
                <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-backspace-fill" viewBox="0 0 16 16">
                    <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
                  </svg>      
                </button>
              </div>
              <div class="modal-body">


                   
                    <img src="./assets/img/produk/dessert-3.jpg" style="width:100%;"> 
                    <p class="card-text" style="text-align:justify;">
                      Oyatsudo merupakan salah satu menu dessert kue bolu lapis dengan rasa yang pas, dengan aneka topping didalamnya seperti cokelat, stoberi dan masih banyak topping lainnya, disajikan dengan saos khas korea yang membuatnya kekinian bangket.
                    </p>
                  <hr class="dropdown-divider" style="height:1px; background:#000; border:none; margin:10px 0px;">
                  <h5 class="card-title" style="text-align:left;">Rp. 35000</h5>


                <form action="" method="POST">
                  <input type="text" name="jumlah_pesanan" placeholder="Jumlah pesanan" class="form-control" style="margin-bottom:5px;">
                  <textarea name="keterangan" class="form-control" style="margin-bottom:5px;"></textarea>
                  <button type="submit" style="float:right;" class="btn btn-primary">
                    <img src="./assets/img/logo/keranjang.png" style="width:25px;">
                  </button>
                </form>




              </div>

              <div class="modal-footer">
                Kopi Shop "Kopi Torra"
              </div>


            </div>
          </div>
        </div>


        <div class="modal fade" id="produk4" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Bubur ayam</h5>
                <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-backspace-fill" viewBox="0 0 16 16">
                    <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
                  </svg>      
                </button>
              </div>
              <div class="modal-body">

                      
                      <img src="./assets/img/produk/makanan-1.jpg" style="width:100%;">
                      <p class="card-text" style="text-align:justify;">
                        Bubur ayam yang kami sajikan menggunakan bumbu  racikan khas rempa-rempa khas palembang dengan tambahan topping sate jerohan seperti kikil, babat, dan aneka jerohan lainnya.
                      </p>
                    <hr class="dropdown-divider" style="height:1px; background:#000; border:none; margin:10px 0px;">
                    <h5 class="card-title" style="text-align:left;">Rp. 15000</h5>


                <form action="" method="POST">
                  <input type="text" name="jumlah_pesanan" placeholder="Jumlah pesanan" class="form-control" style="margin-bottom:5px;">
                  <textarea name="keterangan" class="form-control" style="margin-bottom:5px;"></textarea>
                  <button type="submit" style="float:right;" class="btn btn-primary">
                    <img src="./assets/img/logo/keranjang.png" style="width:25px;">
                  </button>
                </form>


              </div>

              <div class="modal-footer">
                Kopi Shop "Kopi Torra"
              </div>


            </div>
          </div>
        </div>


        <div class="modal fade" id="produk5" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Nasi Uduk</h5>
                <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-backspace-fill" viewBox="0 0 16 16">
                    <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
                  </svg>      
                </button>
              </div>
              <div class="modal-body">

                    <img src="./assets/img/produk/makanan-2.jpg" style="width:100%;"> 
                    <p class="card-text" style="text-align:justify;">
                      Nasi Uduk (Nasasi Gemuk) yang kami sajikan sama seperti nasi gemuk pada umumnya dimana yang membedakan dengan nasi gemuk yang kami sajikan adaalah toppingnya dimana topping yang kami beri seperti telur, kerupuk ikan, bihun jagung dan aneka jerohan.
                    </p>

                  <hr class="dropdown-divider" style="height:1px; background:#000; border:none; margin:10px 0px;">
                  <h5 class="card-title" style="text-align:left;">Rp. 20000</h5>

                <form action="" method="POST">
                  <input type="text" name="jumlah_pesanan" placeholder="Jumlah pesanan" class="form-control" style="margin-bottom:5px;">
                  <textarea name="keterangan" class="form-control" style="margin-bottom:5px;"></textarea>
                  <button type="submit" style="float:right;" class="btn btn-primary">
                    <img src="./assets/img/logo/keranjang.png" style="width:25px;">
                  </button>
                </form>



              </div>

              <div class="modal-footer">
                Kopi Shop "Kopi Torra"
              </div>


            </div>
          </div>
        </div>


        <div class="modal fade" id="produk6" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Nasi goreng</h5>
                <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-backspace-fill" viewBox="0 0 16 16">
                    <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
                  </svg>      
                </button>
              </div>
              <div class="modal-body">

                    <img src="./assets/img/produk/makanan-3.jpg" style="width:100%;"> 
                    <p class="card-text" style="text-align:justify;">
                      Nasi goreng yang kami sajikan sama seperti nasi goreng pada umumnya dimana yang membedakan dengan nasi goreng yang kami sajikan adaalah toppingnya dimana topping yang kami beri seperti telur, kerupuk ikan, bihun jagung dan aneka jerohan.
                    </p>
                  <hr class="dropdown-divider" style="height:1px; background:#000; border:none; margin:10px 0px;">
                  <h5 class="card-title" style="text-align:left;">Rp. 25000</h5>


                <form action="" method="POST">
                  <input type="text" name="jumlah_pesanan" placeholder="Jumlah pesanan" class="form-control" style="margin-bottom:5px;">
                  <textarea name="keterangan" class="form-control" style="margin-bottom:5px;"></textarea>
                  <button type="submit" style="float:right;" class="btn btn-primary">
                    <img src="./assets/img/logo/keranjang.png" style="width:25px;">
                  </button>
                </form>




              </div>

              <div class="modal-footer">
                Kopi Shop "Kopi Torra"
              </div>


            </div>
          </div>
        </div>







        <div class="modal fade" id="profil" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Profil</h5>
                <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-backspace-fill" viewBox="0 0 16 16">
                    <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
                  </svg>      
                </button>
              </div>
              <div class="modal-body">

                <h4>Profil not fond!!</h4>



              </div>

              <div class="modal-footer">
                Kopi Shop "Kopi Torra"
              </div>


            </div>
          </div>
        </div>




</div>




</template>




<style type="text/css">
    body{font-family:'Comic Sans MS';}
    section {
        padding-top:80px;
    }

    section h4{
        padding:10px;
        background:rgba(0,204,0,0.8);
        color:#fff;
        border-radius:5px;
    }

    .fixed-top{
        background:#cfcfcf; 
        padding:7px;
    }   
    .fixed-top a{
        float:left;
        color:#fff;
        padding:10px;
        background:rgba(0,204,0,0.8);
        margin:5px;
        border-radius:0px 0px 5px 5px;
        text-decoration:none;
    }


    ::-webkit-scrollbar {
    width: 8px;
    height:7px;
    background:#fff;
    -webkit-border-radius:0px;
    border-radius:0px;
    }
    ::-webkit-scrollbar-thumb {
    background:rgba(0,204,0,0.8);
    -webkit-border-radius:0px;
    border-radius:0px;
    }


</style>
