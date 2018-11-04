var services = [
  {title: "General Servicing", price:"500 TK", image: "https://joesdaily.com/wp-content/uploads/2017/08/oil-change-synthetic-oil.jpg"},
  {title: "Break Servicing", price:"800 TK", image: "http://www.fineserve.com.au/wp-content/uploads/2013/09/brake-service.jpeg"},
  {title: "Suspension Check", price:"1500 TK", image: "https://www.autopromotec.com/media-files/userfilesResize/autopromotec-blog-dettaglio/AutoNewsArticolo/images/Sospensioni_auto.jpg"}
];



var info = localStorage.getItem('info') ? JSON.parse(localStorage.getItem('info')):{
  local_storage: {
    ownerName:"",
    ownerAddress:"",
    phone:"",
    manuName:"",
    model:"",
    year:"",
    regNum: "",
    service:"",
  }
};

localStorage.setItem('info',JSON.stringify(info));

$(document).ready(function(){
  services.forEach(function(service, index){
    var colDiv = $('<div>').addClass('col-md-4');
    var cardDiv = $('<div>').addClass('card');
    
    var dispImg = $('<img>').addClass('card-img-top');
    dispImg.attr('src', service.image);
    dispImg.attr('alt', "Card image cap");
    cardDiv.append(dispImg);
    
    var cardBodyDiv = $('<div>').addClass('card-body');
    cardDiv.append(cardBodyDiv);
    
    var servicesTitle = $('<h5>').addClass('card-text').text(service.title);
    cardBodyDiv.append(servicesTitle);
    
    var servicesPrice = $('<p>').addClass('card-text').text(service.price);
    cardBodyDiv.append(servicesPrice);
    
    var servicesSelectBtn = $('<button>').addClass('btn btn-md btn-success showFormBtn').text("Select For Appointment").attr('id', index);
    cardBodyDiv.append(servicesSelectBtn);
    
    servicesSelectBtn.click(function(event){
      info.local_storage.service = event.target.id;
      localStorage.setItem('info',JSON.stringify(info));
    });
    
    cardDiv.append(cardBodyDiv);
    colDiv.append(cardDiv);
    
    $('#service-row').append(colDiv);
    
  });

  $(".showFormBtn").click(function(event){
    // var selectedService = services[event.target.id];
    // *********************************************
    $("#form").show();
    $("#services").hide();
    
  });
  
  $('.focused').focus(function(){
    var on = $("#ownerName").val();
    var oa = $("#address").val();
    var cn = $("#conNumber").val();
    var mn = $("#manuName").val();
    var cm = $("#carModel").val();
    var my = $("#modYear").val();
    var rn = $("#regNum").val();
    
    info.local_storage.ownerName = on;
    info.local_storage.ownerAddress = oa;
    info.local_storage.phone = cn;
    info.local_storage.manuName = mn;
    info.local_storage.model = cm;
    info.local_storage.year = my;
    info.local_storage.regNum = rn;
    console.log(info);
  });
});
