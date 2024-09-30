function toggleSection(id) {
    var section = document.getElementById(id);
    if (section.classList.contains('show')) {
        section.classList.remove('show');
    } else {
        // Hide all sections
        document.querySelectorAll('.section-content').forEach(function(sec) {
            sec.classList.remove('show');
        });
        // Show the clicked section
        section.classList.add('show');
    }
}