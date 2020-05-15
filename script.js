$(document).ready(function(){
    $('.sidenav').sidenav();
});





$('.chips').chips();
$('.chips-initial').chips({
    data: [{
        tag: 'BLOG',
    }, {
        tag: 'AGENCY',
    }, {
        tag: 'DIGITAL',
    }],
});
$('.chips-placeholder').chips({
    placeholder: 'Enter a tag',
    secondaryPlaceholder: '+Tag',
});
$('.chips-autocomplete').chips({
    autocompleteOptions: {
        data: {
            'SEO': null,
            'MARKETING': null,
            'SHOP': null
        },
        limit: Infinity,
        minLength: 1
    }
});

