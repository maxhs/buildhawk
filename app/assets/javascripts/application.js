// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery_nested_form
//= require jquery.ui.progressbar
//= require jquery.ui.sortable
//= require jquery.ui.autocomplete
//= require jquery.easing
//= require bootstrap
//= require dropzone
//= require jquery.remotipart
//= require parsley
//= require nprogress
//= require nprogress-ajax
//= require shadowbox
//= require select2
//= require sweet-alert
//= require_tree .

NProgress.configure({
    showSpinner: true,
    ease: 'easeInOut',
    speed: 400
});

if (history && history.pushState){
    $(function(){
        $('body').on('click', 'a',function(e){
            if ($(e.target).is('.remote, .shadow-photo, .documents-photo, .delete-checklist-link, .delete-link, #clear-critical-date')) {

            } else {
                history.pushState(null, null, this.href);
            }
        });
        $(window).bind("popstate", function(){
          $.getScript(location.href);
        });
    });
}

function showAlert(text){
    $('#alert').text(text);
    $('.remove-top.banner, #alert').fadeIn(230).delay(2000).fadeOut(230, function(){
        $('#alert').text("");
    });
}

function setupWindow(){
    var notice = document.getElementById("notice");
    var alert = document.getElementById("alert");
    if (notice.textContent.length > 0) {
        $('.remove-top.banner, #notice').delay(500).fadeIn(230, function() {
            $(this).delay(4000).fadeOut(function(){
                $('#notice').text("");
            });
        });
    }
    if (alert.textContent.length > 0) {
        $(".remove-top.banner, #alert").delay(500).fadeIn(230, function() {
            $(this).delay(4000).fadeOut(function(){
                $('#alert').text("");
            });
        });
    }

    $('.remove-top').click(function(){
        $('#alert, #notice').stop().fadeOut(function(){
            $('#alert, #notice').text("");
        });
    });
    
    $('#dropdown-toggle').click(function(){
        if ($("#dropdown #dropdown-menu").css('display') == 'none'){
            $('#dropdown #dropdown-menu').fadeIn(0);
        } else {
            $('#dropdown #dropdown-menu').fadeOut(0);
        }
    });
    $('#project-search-button').click(function(){
        if ($('#search-section').css('display') == 'none') {
            $('#search-section').show(100,function(){
                $(this).find('input').focus();
            });
        } else {
            $('#search-section').hide(100);
        }
    });
    $('#menu-toggle').click(function(){
        if ($('#main-sidebar').hasClass('revealed')){
            $('.revealed').removeClass('revealed');
        } else {
            $('#main-sidebar, #bottom-menu, #inner-wrap, #top-nav').addClass('revealed');
        }
    });
    $('#toggle').click(function(){
        if ($('#main-dropdown-menu').css('display') == "none"){
            $('#main-dropdown-menu').show(200);
        } else {
            $('#main-dropdown-menu').hide(200);
        }
    });
}

 function mobilecheck() {
    var check = false;
    (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}

function closeMenu() {
    $('#dropdown-menu').fadeOut(100);
    $('#main-dropdown-menu').fadeOut(100);

}