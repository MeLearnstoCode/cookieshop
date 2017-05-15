$(document).ready(function() {
        $(".count").each(function() {
          var flavor = $(this).parent().attr("data-flavor");

          var previousCount = Cookies.get(flavor);

          $(this).html(previousCount);
        });

        $(".cookie").click(function() {
          var flavor = $(this).parent().attr("data-flavor");

          var previousCount = Cookies.get(flavor);
          var currentCount = 0;

          if (previousCount) {
            currentCount = parseInt(previousCount) + 1;
          } else {
            currentCount = 1;
          }

          Cookies.set(flavor, currentCount);
        });

        $(".clear").click(function() {
          var flavor = $(this).parent().attr("data-flavor");

          Cookies.set(flavor, 0);
        });
      });


