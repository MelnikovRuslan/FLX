let memory = 0;
var take = {17: false, 77: false};

$('.calc-btn').on('click', function() {
  checkClick(this);
});

$('.clear-btn').on('click', function()  {
  clear();
});

$('.result-btn').on('click', function() {
  checkExpression();
});

$('.memory-save-btn').on('click', function() {
  saveToMemory();
});

$('.memory-clean-btn').on('click', function() {
  extractData();
});

$('.operation-log').keyup(function(e) {
  if(e.which > 47 && e.which < 58 || e.which > 95 && e.which < 106) {
    checkExpression();
  } else if (e.which === 106 || e.which === 107) {
    checkExpression();
  }
});

$(document).keydown(function(e) {
  if(e.which === 67) {
    clear();
  } else if (e.which === 77) {
    saveToMemory();
  } else if (e.which === 13){
    checkExpression();
  }
});

$(document).keydown(function (e) {
  take[e.which] = true;
  if(take[17] === true && take[66] === true) {
    extractData(take);
  }
});

$(document).keyup(function (e) {
  delete take[e.which];
});

function saveToMemory() {
  memory = $('.result-log').val();
}

function extractData() {
  $('.operation-log').val($('.operation-log').val() + memory);
  memory = 0;
}

function checkExpression() {
  let expression = $('.operation-log').val();
  let operation = expression.charAt(expression.length - 1);
  if( operation === '+' || operation === '*') {
    var streetaddress = expression.substr(0, expression.indexOf(operation));
    result(expression + streetaddress);
  } else {
    result(expression);
  }
}

function checkClick(target) {
  if($(target).attr('data-role') !== 'operator') {
    $('.operation-log').val($('.operation-log').val() + $(target).val());
    checkExpression();
  } else {
    if($('.operation-log').val() !== '') {
      $('.operation-log').val($('.operation-log').val() + $(target).val());
    }
  }
}

function clear() {
  $('.operation-log').val('');
  $('.result-log').val('');
}

function result(expression) {
    $('.result-log').val(eval(expression));
}
