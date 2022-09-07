<script src='//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js'></script>
<script type='text/javascript'>
  $(window).load(function() {
    setTimeout(function() {
      $(".box").fadeOut("slow");
    }, 3000)
  });
</script>
<script>
            $(document).ready(function () {
                $("#btn1").click(function () {
                    $("#test1").text("Hello world!");
                });
                $("#btn2").click(function () {
                    $("#test2").html("<b>Hello world!</b>");
                });
                $("#btn3").click(function () {
                    $("#test3").val("giai-ma.blogspot.com");
                });
            });
</script>
