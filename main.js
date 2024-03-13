$(document).ready(function() {
  // Formulário de tarefas
  $('#taskForm').submit(function(e) {
    e.preventDefault();
    var taskText = $('#taskInput').val();
    if (taskText !== '') {
      $('#taskList').append('<li>' + taskText + '</li>');
      $('#taskInput').val('');
    }
  });

  // Efeito de linha através do clique
  $('#taskList').on('click', 'li', function() {
    $(this).toggleClass('completed');
  });
});
