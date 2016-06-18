function init_template(tem_div){
    var source   = tem_div.html();
    var template = Handlebars.compile(source);
    return template;
}