$(() => {
    function toggleNavDark() {
        console.log('abc');
        $('.navbar')[$(window).scrollTop() > 0 ? 'addClass' : 'removeClass']('scrolled');
        if ($(window).scrollTop() > 0)
            $('.navbar').removeClass('navbar-light').addClass('navbar-dark');
        else
            $('.navbar').removeClass('navbar-dark').addClass('navbar-light');
    }
    $(window).scroll(toggleNavDark);
    toggleNavDark();
});
