document.addEventListener('DOMContentLoaded', function () {
    var tabs = document.querySelectorAll('.tab');
    var tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            tabs.forEach(function (t) {
                t.classList.remove('active');
            });
            tabContents.forEach(function (content) {
                content.classList.remove('active');
            });

            tab.classList.add('active');
            var contentId = tab.id + '-content';
            var activeContent = document.getElementById(contentId);


            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });

    tabContents.forEach(function (content) {
        content.classList.remove('active');
    });


});


