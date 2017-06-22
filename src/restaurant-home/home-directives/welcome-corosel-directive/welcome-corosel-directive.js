/**
 * Created by Vikash1.Kumar on 22-06-2017.
 */

(function(){
    angular.module("indexContentModule")
        .directive("welcomeCorosel", function () {
            return{
                templateUrl :"src/restaurant-home/home-directives/welcome-corosel-directive/welcome-corosel-view.html",
                link :function (scope, element, attrs, parentController) {
                    // Invoke the corosel plug in when DOM is ready and compiled
                    $('.welcome_slider' ,$(element)).owlCarousel({
                        items: 1,
                        loop: true,
                        smartSpeed: 500,
                        autoplay: true,
                        mouseDrag: false,
                        touchDrag: false
                    });

                    //==welcome_area animation==\\
                    $(".welcome_slider" ,$(element)).on('translate.owl.carousel', function () {
                        $('.welcome_content h1').removeClass('fadeInDown animated').hide();
                        $('.welcome_content span').removeClass('fadeInDown animated').hide();
                        $('.welcome_content a').removeClass('fadeInDown animated').hide();
                    });
                    $(".welcome_slider", $(element)).on('translated.owl.carousel', function () {
                        $('.owl-item.active .welcome_content h1').addClass('fadeInDown animated').show();
                        $('.owl-item.active .welcome_content span').addClass('fadeInDown animated').show();
                        $('.owl-item.active .welcome_content a').addClass('fadeInDown animated').show();
                    });
                }
            }
        })
})();