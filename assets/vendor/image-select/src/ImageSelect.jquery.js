(function($){var fn_template='<img class="{class_name}" src="{url}" />'
function prependTemplate(element,option,template,rtl,multiple,cls){var src=$(option).data('img-src')
if(src!=undefined&&src>''){element=$(element)
text=$(option).text()
multiple=(multiple!=undefined)?multiple:true
cls=cls||(multiple?'chose-image':'chose-image-small')
cls=rtl?cls+' rtl':cls
template=template.replace('{url}',src).replace('{class_name}',cls).replace('{text}',text)
element.empty()
if(rtl&&multiple){element.append(template)}else{element.prepend(template)}}}function getSelectedOptions(chosen){var items=[]
var options=$(chosen.form_field).find('option:selected')||[]
var spans=(chosen.is_multiple)?$(chosen.container).find('.chosen-choices span'):$(chosen.container).find('.chosen-single span')
for(var i=0;i<options.length;i++)for(var j=0;j<spans.length;j++)if($(spans[j]).text()==$(options[i]).text())items.push({span:spans[j],option:options[i]})
return items}var fn_chosen=$.fn.chosen
$.fn.extend({chosen:function(params){params=params||{}
var ret=fn_chosen.apply(this,arguments)
this.each(function(){var $this=$(this),chosen=$this.data('chosen')
$this.on("chosen:hiding_dropdown",function(e,chosen){var options=getSelectedOptions(chosen.chosen)
var rtl=chosen.chosen.is_rtl
var multiple=chosen.chosen.is_multiple
var html_template=params.html_template||(rtl&&multiple?'{text}'+fn_template:fn_template+'{text}')
for(var i=0;i<options.length;i++){prependTemplate(options[i].span,options[i].option,html_template,rtl,multiple)}})
$this.on("chosen:showing_dropdown",function showing_dropdown(evt,chosen){var chosen=chosen.chosen
var options=chosen.form_field.options||[]
var rtl=chosen.is_rtl
var html_template=params.html_template||rtl?'{text}'+fn_template:fn_template+'{text}'
var lis=$(chosen.container).find('.chosen-drop ul li:not(:has(img))')
for(var i=0;i<lis.length;i++){var li=lis[i]
var option=$(options[i])
var idx=$(li).attr('data-option-array-index')
if(idx){option=options[chosen.results_data[idx].options_index]
prependTemplate(li,option,html_template,rtl,true,'chose-image-list')}}})
$this.on("chosen:ready",function change(e,chosen){$this.trigger('chosen:hiding_dropdown',chosen)})
$this.on('chosen:filter',function(evt,chosen){$this.trigger('chosen:showing_dropdown',{chosen:chosen.chosen})})
$this.trigger('chosen:hiding_dropdown',{chosen:chosen})})}})})(jQuery)