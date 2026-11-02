$(document).ready(function () {
    console.log("jQuery is ready!");

  $("h1").css("color", "darkblue");       
  $("#myHeadline").css("color", "gray");   
  $(".text").css("font-size", "18px");      

  $("#btnHeadline").click(function () {
    $("#myHeadline").text("Future Front-End Developer");
    $(".welcome").html("Welcome to My <b>jQuery</b> Portfolio!");
  });

  $("#btnDark").click(function () {
    $("body").addClass("dark");
  });

  $("#btnLight").click(function () {
    $("body").removeClass("dark");
  });


  $("#btnHide").click(function () {
    $("#myStatus").hide();
    $("#facts").hide();
  });

  $("#btnShow").click(function () {
    $("#myStatus").show();
    $("#facts").show();
  });

  $("#btnToggle").click(function () {
    $("#myStatus").toggle();
    $("#facts").toggle();
  });


  $("#btnFadeIn").click(function () {
    $(".photo").fadeIn(1000);
  });

  $("#btnFadeOut").click(function () {
    $(".photo").fadeOut(1000);
  });

  $("#btnFadeToggle").click(function () {
    $(".photo").fadeToggle(1000);
  });


  $(".title").click(function () {
    $(this).next().slideToggle();
  });

  $("#btnOpen").click(function () {
    $(".info").slideDown();
  });

  $("#btnClose").click(function () {
    $(".info").slideUp();
  });


  $("#btnAdd").click(function () {
    var skill = $("#newSkill").val();
    if (skill == "") {
      $("#warning").text("Skill can not be empty!");
    } else {
      $("#skillList").append("<li>" + skill + "</li>");
      $("#newSkill").val("");
      $("#warning").text("");
    }
  });

  $("#btnPrepend").click(function () {
    var skill = $("#newSkill").val();
    if (skill == "") {
      $("#warning").text("Skill can not be empty!");
    } else {
      $("#skillList").prepend("<li>" + skill + "</li>");
      $("#newSkill").val("");
      $("#warning").text("");
    }
  });

  $("#btnRemove").click(function () {
    $("#skillList li").last().remove();
  });


  $("#btnLink").click(function () {
    $("#myLink").attr("href", "https://lms.astanait.edu.kz/");
    $("#myLink").text("Astana IT University LMS");
  });


  $("#userName").keyup(function () {
    $("#showName").text($(this).val());
  });

  $("#userEmail").keyup(function () {
    $("#showEmail").text($(this).val());
  });


  var open = false;

  $("#btnAnimate").click(function () {
    if (open == false) {
      $("#bar1").animate({ width: "80%" }, 1000);
      $("#bar2").animate({ width: "65%" }, 1000);
      $("#bar3").animate({ width: "55%" }, 1000);
      open = true;
    } else {
      $("#bar1").animate({ width: "0%" }, 1000);
      $("#bar2").animate({ width: "0%" }, 1000);
      $("#bar3").animate({ width: "0%" }, 1000);
      open = false;
    }
  });

});