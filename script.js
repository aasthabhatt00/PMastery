document.addEventListener('DOMContentLoaded', function () {
    // Get all section headers
    var headers = document.querySelectorAll('main section h2');

    // Add click event to each header
    headers.forEach(function (header) {
        header.addEventListener('click', function () {
            // This toggles the display of the section's content
            var content = this.nextElementSibling;
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var headers = document.querySelectorAll('main section h2');
    headers.forEach(function (header) {
        header.addEventListener('click', function () {
            var content = this.nextElementSibling;
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Initialize a roadmap using Vis.js
    var container = document.getElementById('roadmap');
    var items = new vis.DataSet([
        {id: 1, content: 'Understanding Product Management', start: '2024-01-01'},
        {id: 2, content: 'Types of Product Management', start: '2024-02-01'},
        {id: 3, content: 'Steps to Becoming a PM', start: '2024-03-01'},
        {id: 4, content: 'Advanced Strategies', start: '2024-04-01'}
    ]);

    var options = {
        start: '2024-01-01',
        end: '2024-05-01'
    };

    var timeline = new vis.Timeline(container, items, options);
});
