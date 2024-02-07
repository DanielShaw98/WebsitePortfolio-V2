// Copy Email To Clipboard

const copyToClipboard = async () => {
  try {
    let text = document.getElementById('myEmail').innerHTML;
    await navigator.clipboard.writeText(text);
    console.log('Email copied to clipboard');
    document.querySelector('.tooltiptext').innerHTML = 'Copied To Clipboard';
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

document.querySelector('#myEmail').addEventListener('mouseleave', () => {
  document.querySelector('.tooltiptext').innerHTML = 'Copy To Clipboard';
});
