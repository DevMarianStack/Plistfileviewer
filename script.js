// Select necessary elements
const plistTitle = document.getElementById('plistTitle');
const plistViewer = document.getElementById('plistViewer');
const uploadBtn = document.getElementById('uploadBtn');
const plistContent = document.getElementById('plistContent');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// Show the viewer when the title is clicked
plistTitle.addEventListener('click', () => {
  plistViewer.classList.toggle('show');
});

// Handle plist file upload
uploadBtn.addEventListener('change', (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      plistContent.value = e.target.result;
    };
    reader.readAsText(file);
  }
});

// Search functionality
searchBtn.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const content = plistContent.value.toLowerCase();

  if (content.includes(searchTerm)) {
    alert(`Found: "${searchTerm}"`);
  } else {
    alert(`"${searchTerm}" not found.`);
  }
});
