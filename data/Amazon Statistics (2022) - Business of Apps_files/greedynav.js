jQuery(document).ready(function($){var $btn=$('nav.greedy button');var $vlinks=$('nav.greedy .links');var $hlinks=$('nav.greedy .hidden-links');var numOfItems=0;var totalSpace=0;var closingTime=1000;var breakWidths=[];$vlinks.children().outerWidth(function(i,w){totalSpace+=w;numOfItems+=1;breakWidths.push(totalSpace)});var availableSpace,numOfVisibleItems,requiredSpace,timer;function check(){availableSpace=$vlinks.width()-10;numOfVisibleItems=$vlinks.children().length;requiredSpace=breakWidths[numOfVisibleItems-1];if(requiredSpace>availableSpace){$vlinks.children().last().prependTo($hlinks);numOfVisibleItems-=1;check()}else if(availableSpace>breakWidths[numOfVisibleItems]){$hlinks.children().first().appendTo($vlinks);numOfVisibleItems+=1;check()}
$btn.attr("count",numOfItems-numOfVisibleItems);if(numOfVisibleItems===numOfItems&&$hlinks.children().length===0){$btn.addClass('hidden')}else $btn.removeClass('hidden')}
$(window).resize(function(){check()});$btn.on('click',function(){$hlinks.toggleClass('hidden');clearTimeout(timer)});$hlinks.on('mouseleave',function(){timer=setTimeout(function(){$hlinks.addClass('hidden')},closingTime)}).on('mouseenter',function(){clearTimeout(timer)})
check()})