$(document).ready(function(){
    // Menü öğelerine tıklandığında menüyü kapatma ve seçili hale getirme
    $('.navbar-nav>li>a').on('click', function(e){
      e.stopPropagation();
      $('.navbar-nav>li').removeClass('active');
      $(this).closest('li').addClass('active');
    });
  
    // Menü dışındaki herhangi bir yere tıklandığında menüyü kapatma
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.navbar').length) {
        $('.navbar-collapse').collapse('hide');
      }
    });
  
    // Butona tıklandığında menüyü açma/kapama
    $('.navbar-toggler').on('click', function(e){
      $('.navbar-collapse').collapse('toggle');
    });
  
    // Özgeçmiş butonuna tıklandığında içeriği ekrana getir
    $('#ozgecmis-link').on('click', function(e){
      e.preventDefault();
     
    });
  
    // Şehrim butonuna tıklandığında içeriği ekrana getir
    $('#sehrim-link').on('click', function(e){
      e.preventDefault();
      
    });
  
    // Mirasımız butonuna tıklandığında içeriği ekrana getir
    $('#mirasimiz-link').on('click', function(e){
      e.preventDefault();
     
    });
  
    // Takımımız butonuna tıklandığında içeriği ekrana getir
    $('#takimimiz-link').on('click', function(e){
      e.preventDefault();
      
    });
  
    // İlgi Alanlarım butonuna tıklandığında içeriği ekrana getir
    $('#ilgialanlarim-link').on('click', function(e){
      e.preventDefault();
      
    });
  
    // Giriş Yap butonuna tıklandığında içeriği ekrana getir
    $('#girisyap-link').on('click', function(e){
      e.preventDefault();
      
    });
  });
  