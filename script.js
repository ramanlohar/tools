// document.getElementById('fileInput').addEventListener('change', function() {
//     const file = this.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = function() {
//         const previewImage = document.getElementById('previewImage');
//         previewImage.src = reader.result;
//         const imageString = document.getElementById('imageString');
//         imageString.value = reader.result;
//       }
//     }
//   });
  
//   document.getElementById('copyButton').addEventListener('click', function() {
//     const imageString = document.getElementById('imageString');
//     imageString.select();
//     document.execCommand('copy');
//     alert('Image string copied to clipboard!');
//   });

document.getElementById('fileInput').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function() {
        const previewImage = document.getElementById('previewImage');
        previewImage.src = reader.result;
        const imageString = document.getElementById('imageString');
        imageString.value = compressImageString(reader.result);
      }
    }
  });
  
  document.getElementById('copyButton').addEventListener('click', function() {
    const imageString = document.getElementById('imageString');
    imageString.select();
    document.execCommand('copy');
    alert('Image string copied to clipboard!');
  });
  
  function compressImageString(imageString) {
    // Base64 encoding
    return btoa(imageString);
  }
    