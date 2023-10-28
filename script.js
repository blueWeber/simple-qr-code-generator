// https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=hello+world

const btnGenerateQRCode = document.querySelector('#btn-gen-qrc');

btnGenerateQRCode.addEventListener('click', () => {
  const api = 'https://chart.googleapis.com/chart?cht=qr&chs=';

  const qrCodeImg = document.querySelector('#qrc-img');
  const dataTextArea = document.querySelector('#qrc-text-data');
  const qrCodeTextData = dataTextArea.value;
  const qrCodeSize = document.querySelector('#qrc-size').value;

  if (qrCodeTextData !== '') {
    qrCodeImg.src = `${api}${qrCodeSize}x${qrCodeSize}&chl=${qrCodeTextData}`;
  } else {
    dataTextArea.setAttribute('placeholder', 'Please, input text data here');
  }
});
