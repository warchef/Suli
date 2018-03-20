jQuery.fn.stripTags = function() { return this.replaceWith( this.html().replace(/<\/?[^>]+>/gi, '') ); };

function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value + ";path=/";
}


function getCookie(c_name)
{
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
{
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    return unescape(y);
    }
  }
}

$(function(){

	var optOut = true;

	$("[rel='stylesheet']").each(function() {
		if ($(this).attr('href').toLowerCase().indexOf("responsive.css") >= 0) {
			optOut = false;
			return false;
	   } 
	});
	


		if($('#navPrimary li em a').length) {
			$('<div id="chapter" class="notDesktop"><a href="'+$('#breakCrumb ul li.first').next().children('a').attr('href') +'">'+$('#navPrimary li em a').html()+'</a></div>').insertAfter('#navPrimary');
		}
			
		if($('#navPrimary7 li em a').length) {
			$('<div id="chapter" class="notDesktop"><a href="'+$('#breakCrumb ul li.first').next().children('a').attr('href') +'">'+$('#navPrimary li em a').html()+'</a></div>').insertAfter('#navPrimary');
		}			
	   
		$('#header').append('<div id="navigationCloseButton" class="notDesktop"><span>Close Menu</span></div>');
		$('.homepage #branding').append('<div class="notDesktop" id="navigationCloseButton"><span>Close Menu</span></div>');
		
		$('.search').click(function() {
			if($('#navPrimary').css('display') != 'none') {
				$('#navPrimary').slideUp(10);
			}
			
			if($('#navPrimary7').css('display') != 'none') {
				$('#navPrimary7').slideUp(10);
			}
			
			if($('#toolbarWrap').css('display') == 'none') {
				$('#toolbarWrap').slideDown();
				$('#navigationCloseButton').fadeIn();
			} else {
				$('#toolbarWrap').slideUp();
				$('#navigationCloseButton').fadeOut();
			}
			return false;
		});
		
		$('.menu').click(function() {
			 if($('#toolbarWrap').css('display') != 'none') {
				$('#toolbarWrap').slideUp(10);
			}
			if(($('#navPrimary').css('display') == 'none') || ($('#navPrimary7').css('display') == 'none')) {
				$('#navPrimary').slideDown();
				$('#navPrimary7').slideDown();
				$('#navigationCloseButton').fadeIn();
			} else {
				$('#navPrimary7').slideUp();
				$('#navPrimary').slideUp();
				$('#navigationCloseButton').fadeOut();
			}
			
			
			return false;
		});
		
		$('#navigationCloseButton').click(function() {
			$('#navigationCloseButton').fadeOut('fast');
			$('#toolbarWrap, #navPrimary').slideUp();
		});
		
		
		$(".lightbox.Basepage").each(function() {
			$('<a href="'+$(this).attr("href")+'">'+$(this).html()+'</a>').insertAfter($(this));
		});
			
		$('.classic a').click(function(){
		
			setCookie("responsiveOptOut", "true", 30);
			setTimeout(function() {
				location.reload();
			}, 200);			

		
		});
	if(optOut){
		$('#siteInfo li:first-child').after('<li class="optIn"><a href="javascript: viod(0)">Mobile Version</a> | </li>');
		$('.optIn').click(function(){
			setCookie('responsiveOptOut',"false",-1);
			setTimeout(function() {
				location.reload();
			}, 200);
		
		})
	}
}); 
  
 