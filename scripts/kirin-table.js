function toggleRow(row) {
    // Remove 'clicked' class from all other rows
    const allRows = document.querySelectorAll('table tbody tr');
    allRows.forEach(r => {
        if (r !== row && !r.classList.contains('main-title')) {
            r.classList.remove('clicked');
        }
    });

    // Toggle 'clicked' class on the clicked row
    row.classList.toggle('clicked');
}