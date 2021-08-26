const btnConvert = document.getElementById('btnConvert');
const input = document.getElementById('input');
const output = document.getElementById('output');

btnConvert.addEventListener('click', () => {
  doConvert();
});

input.onchange = doConvert;

function doConvert() {
  const inputText = input.value;
  if (!inputText) {
    return;
  }

  try {
    const inputJson = JSON.parse(inputText);
    const outputText = inputJson.map(s => `"${[s.name]}": "${s.value}"`).join(',\n');

    output.value = outputText;
  } catch (ex) {
    // go f*ck yourself
  }

}