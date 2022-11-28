jQuery(function(jQuery){var pageContentType='';if(jQuery('.data-template-default.single-data .post h2:not(.no-spy)').length){pageContentType='data'}else if(jQuery('.guide-template-default.single-guide .post h2:not(.no-spy)').length){pageContentType='guide'}else if(jQuery('.post-type-archive-app_developer .post h2:not(.no-spy)').length){pageContentType='app_developer'}else if(jQuery('.post-type-archive-marketplace_entry .post h2:not(.no-spy)').length){pageContentType='marketplace'}else if(jQuery('.post-type-archive-advertising_network .post h2:not(.no-spy)').length){pageContentType='advertising_network'}else if(jQuery('.post-type-archive-affiliate_network .post h2:not(.no-spy)').length){pageContentType='affiliate_network'}else if(jQuery('.research-template-default.single-research .post h2:not(.no-spy)').length){pageContentType='research'}
if(jQuery('.page-template-tpl-no-left-sidebar .post h2:not(.no-spy)').length){pageContentType='advertise'}
if(pageContentType!=''){var $post;var $els;switch(pageContentType){case 'data':{$post=jQuery('.data-template-default.single-data .post');$els=jQuery('.data-template-default.single-data .post h2:not(.no-spy)');break}
case 'guide':{$post=jQuery('.guide-template-default.single-guide .post');$els=jQuery('.guide-template-default.single-guide .post h2:not(.no-spy)');break}
case 'app_developer':{$post=jQuery('.post-type-archive-app_developer .post:not(.additional-content)');$els=jQuery('.post-type-archive-app_developer .post:not(.additional-content) h2:not(.no-spy)');break}
case 'marketplace':{$post=jQuery('.post-type-archive-marketplace_entry .post:not(.additional-content)');$els=jQuery('.post-type-archive-marketplace_entry .post:not(.additional-content) h2:not(.no-spy)');break}
case 'advertising_network':{$post=jQuery('.post-type-archive-advertising_network .post:not(.additional-content)');$els=jQuery('.post-type-archive-advertising_network .post:not(.additional-content) h2:not(.no-spy)');break}
case 'affiliate_network':{$post=jQuery('.post-type-archive-affiliate_network .post:not(.additional-content)');$els=jQuery('.post-type-archive-affiliate_network .post:not(.additional-content) h2:not(.no-spy)');break}
case 'research':{$post=jQuery('.research-template-default.single-research .post');$els=jQuery('.research-template-default.single-research .post h2:not(.no-spy)');break}
case 'advertise':{$post=jQuery('.page-template-tpl-no-left-sidebar .post');$els=jQuery('.page-template-tpl-no-left-sidebar .post h2:not(.no-spy)');break}}
var scrollSpyEl='<div class="scrollspy-wrapper"><nav class="scrollspy-navbar"><h5><i class="fa fa-bars" aria-hidden="true"></i>Content Menu</h5><ul class="scroll-spy-list"></ul></nav></div>';if(pageContentType=='research'){jQuery('.tab_window .post:first').prepend(scrollSpyEl)}else if(pageContentType=='advertise'){jQuery('.main__l .post:first').prepend(scrollSpyEl)}else if($post.find('.swp_social_panel').length){$post.find('.swp_social_panel:first').after(scrollSpyEl)}else{switch(pageContentType){case 'app_developer':{jQuery('.post-type-archive-app_developer .post:first').prepend(scrollSpyEl);break}
case 'marketplace':{jQuery('.post-type-archive-marketplace_entry .post:first').prepend(scrollSpyEl);break}
case 'advertising_network':{jQuery('.post-type-archive-advertising_network .post:first').prepend(scrollSpyEl);break}
case 'affiliate_network':{jQuery('.post-type-archive-affiliate_network .post:first').prepend(scrollSpyEl);break}}}
var prevH2Item=null;var prevH2List=null;$els.each(function(){var el=jQuery(this);var h2Text=el.text();var idVal=h2Text.replace(/[\W_]/g,'');if(idVal!=''){if(jQuery('#'+idVal).length>0){idVal=idVal+'_'+jQuery('[id^='+idVal+']').length}
el.attr('id',idVal);var li="<li><a href='#"+idVal+"'>"+el.text()+"</a></li>";if(el.is('h2')){prevH2List=jQuery('<ul></ul>');prevH2Item=jQuery(li);prevH2Item.append(prevH2List);prevH2Item.appendTo($post.find('.scrollspy-navbar ul.scroll-spy-list'))}else{prevH2List.append(li)}}});if($post.find('.scrollspy-navbar ul a').length){var scrollSpyLinks=$post.find('.scrollspy-navbar ul a');scrollSpyLinks.on('click',function(e){scrollSpyLinks.removeClass('active');var link=jQuery(this);var target=jQuery(link.attr('href'));jQuery('html, body').animate({scrollTop:target.offset().top-100},600);link.addClass('active');e.preventDefault()})}
if($post.find('.scrollspy-navbar h5').length){var h5btn=$post.find('.scrollspy-navbar h5');h5btn.on('click',function(e){if(window.innerWidth<961){$post.find('.scrollspy-navbar ul').toggle();e.preventDefault()}})}
jQuery(window).on('scroll',function(){refreshSpyMenu($els);showNavMenu($post,$els)});function refreshSpyMenu($els){jQuery('.swp-hidden-panel-wrap .scrollspy-navbar').remove();var sTop=jQuery(window).scrollTop();$els.each(function(){var item=jQuery(this);var id=item.attr('id');var offset=item.offset().top-110;var height=item.height()*3;if(sTop>=offset&&sTop<offset+height){jQuery('.scrollspy-navbar ul.scroll-spy-list > li > a').removeClass('active');jQuery('.scrollspy-navbar ul.scroll-spy-list > li').removeClass('current');jQuery('.scrollspy-navbar ul.scroll-spy-list > li').removeClass('show');jQuery('.scrollspy-navbar ul.scroll-spy-list > li > a[href="#'+id+'"]').addClass('active');jQuery('.scrollspy-navbar ul.scroll-spy-list > li > a[href="#'+id+'"]').closest('li').addClass('current')}
var currentElement=jQuery('.scrollspy-navbar ul.scroll-spy-list > li.current');if(currentElement.length==0){jQuery('.scrollspy-navbar ul.scroll-spy-list > li:first-of-type').addClass('current');jQuery('.scrollspy-navbar ul.scroll-spy-list > li:first-of-type > a').addClass('active')}
var prevElement=currentElement;prevElement=prevElement.prev();for(var i=0;i<4;i++){if(prevElement){prevElement.addClass('show');prevElement=prevElement.prev()}else{break}}
var nextElement=currentElement;for(var i=0;i<5;i++){var nextElement=nextElement.next();if(nextElement){nextElement.addClass('show')}else{break}}
var maxItems=Math.min(jQuery('.scrollspy-navbar ul.scroll-spy-list > li').length,10);while(jQuery('.scrollspy-navbar ul.scroll-spy-list > li.show, .scrollspy-navbar ul.scroll-spy-list > li.current').length<maxItems&&jQuery('.scrollspy-navbar ul.scroll-spy-list > li.show').last().next().length){currentElement=jQuery('.scrollspy-navbar ul.scroll-spy-list > li.show').last().next();if(currentElement.hasClass('current')){currentElement=currentElement.next()}
if(currentElement.length==0){break}
currentElement.addClass('show')}
while(jQuery('.scrollspy-navbar ul.scroll-spy-list > li.show, .scrollspy-navbar ul.scroll-spy-list > li.current').length<maxItems&&jQuery('.scrollspy-navbar ul.scroll-spy-list > li.show').first().prev().length){currentElement=jQuery('.scrollspy-navbar ul.scroll-spy-list > li.show').first().prev();if(currentElement.hasClass('current')){currentElement=currentElement.prev()}
if(currentElement==0){break}
currentElement.addClass('show')}})}
function showNavMenu($postContent,$els){var postContentTopPos=$postContent.offset().top-window.innerHeight+40;var postContentHeight=$postContent.height();var sTop=jQuery(window).scrollTop();if(sTop>=postContentTopPos&&sTop<postContentTopPos+postContentHeight){$post.find('.scrollspy-navbar').addClass('show-navbar');if(jQuery('.scrollspy-navbar ul.scroll-spy-list > li.current').length==0){refreshSpyMenu($els)}}else{$post.find('.scrollspy-navbar').removeClass('show-navbar')}}}})