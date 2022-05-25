var comments;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


comments = ['', '', '', '', '', ''];


document.getElementById('add').addEventListener('click', (event) => {
  let element_list2 = document.getElementById('list2');
  let new_li = document.createElement('li');
  new_li.innerText = 'Carrots';

  element_list2.appendChild(new_li);

});

document.getElementById('add1').addEventListener('click', (event) => {
  let element_list22 = document.getElementById('list2');
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'Apples';

  element_list22.appendChild(new_li2);

});

document.getElementById('add2').addEventListener('click', (event) => {
  let element_list23 = document.getElementById('list2');
  let new_li3 = document.createElement('li');
  new_li3.innerText = 'Bags';

  element_list23.appendChild(new_li3);

});

document.getElementById('add3').addEventListener('click', (event) => {
  let element_list24 = document.getElementById('list2');
  let new_li4 = document.createElement('li');
  new_li4.innerText = 'Grapes';

  element_list24.appendChild(new_li4);

});

document.getElementById('add4').addEventListener('click', (event) => {
  let element_list25 = document.getElementById('list2');
  let new_li5 = document.createElement('li');
  new_li5.innerText = 'Jackets';

  element_list25.appendChild(new_li5);

});

document.getElementById('add5').addEventListener('click', (event) => {
  let element_list26 = document.getElementById('list2');
  let new_li6 = document.createElement('li');
  new_li6.innerText = 'Kiwi';

  element_list26.appendChild(new_li6);

});

document.getElementById('add6').addEventListener('click', (event) => {
  let element_list27 = document.getElementById('list2');
  let new_li7 = document.createElement('li');
  new_li7.innerText = 'Detergent';

  element_list27.appendChild(new_li7);

});

document.getElementById('submit').addEventListener('click', (event) => {
  let element_list_comment = document.getElementById('list_comment');
  let new_li8 = document.createElement('li');
  new_li8.innerText = getNumberOrString(document.getElementById('textbox').value);

  element_list_comment.appendChild(new_li8);

});