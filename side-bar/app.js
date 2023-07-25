const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

/*toggleBtn.addEventListener('click', function(){
  console.log(sidebar.classList);
  if(sidebar.classList.contains('show-sidebar')){
    sidebar.classList.remove('show-sidebar')
  }
  else{
    sidebar.classList.add('show-sidebar')
  }
})
*/

// or a faster way to do this is :

toggleBtn.addEventListener('click', function(){
  console.log(sidebar.classList);
  sidebar.classList.toggle('show-sidebar')
});

closeBtn.addEventListener('click', function(){
  sidebar.classList.remove('show-sidebar');
});