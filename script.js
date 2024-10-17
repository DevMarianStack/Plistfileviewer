// Select necessary elements
const uploadBtn = document.getElementById('uploadBtn');
const plistContent = document.getElementById('plistContent');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const saveBtn = document.getElementById('saveBtn');

// Handle file upload
uploadBtn.addEventListener('change', (event) => {
  const file = event.target.files[0];
  
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
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

// Save edited file
saveBtn.addEventListener('click', () => {
  const blob = new Blob([plistContent.value], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'updated.plist';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});
