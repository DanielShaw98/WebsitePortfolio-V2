// Copy Email To Clipboard

let text = document.getElementById('myEmail').innerHTML;
const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Email copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}
