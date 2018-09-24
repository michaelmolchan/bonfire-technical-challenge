
$(() => {
  const menuIcon = document.querySelector('.menuIcon')
  const nav = document.querySelector('.overlay-menu')

  menuIcon.addEventListener('click', () => {
    if (nav.style.transform !== 'translateX(0%)') {
      nav.style.transform = 'translateX(0%)'
      nav.style.transition = 'transform 0.2s ease-out'
    } else {
      nav.style.transform = 'translateX(-100%)'
      nav.style.transition = 'transform 0.2s ease-out'
    }
  })

  const toggleIcon = document.querySelector('.menuIcon')

  toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className !== 'menuIcon toggle') {
      toggleIcon.className += ' toggle'
    } else {
      toggleIcon.className = 'menuIcon'
    }
  })

  // closes mobile menu when a link is clicked
  $('#menu').click(() => {
    toggleIcon.className = 'menuIcon'
    nav.style.transform = 'translateX(-100%)'
    nav.style.transition = 'transform 0.2s ease-out'
  })

  // Add active class to the current button (highlight it)
  const header = document.getElementById('buttons')
  const btns = header.getElementsByClassName('btn')
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
      const current = document.getElementsByClassName('active')
      current[0].className = current[0].className.replace(' active', '')
      this.className += ' active'
    })
  }

  $('#show-all').click(() => {
    $('.even').show()
    $('.odd').show()
  })

  $('#show-odd').click(() => {
    $('.even').hide()
    $('.odd').show()
  })

  $('#show-even').click(() => {
    $('.odd').hide()
    $('.even').show()
  })

  // Hide/show box buttons
  $('.box-one').on('mouseenter', function () {
    $('#btn-1').delay(50).fadeIn(100)
  })

  $('.box-one').on('mouseleave', function () {
    $('#btn-1').delay(50).fadeOut(100)
  })

  $('.box-two').on('mouseenter', function () {
    $('#btn-2').delay(50).fadeIn(100)
  })

  $('.box-two').on('mouseleave', function () {
    $('#btn-2').delay(50).fadeOut(100)
  })

  $('.box-three').on('mouseenter', function () {
    $('#btn-3').delay(50).fadeIn(100)
  })

  $('.box-three').on('mouseleave', function () {
    $('#btn-3').delay(50).fadeOut(100)
  })

  $('.box-four').on('mouseenter', function () {
    $('#btn-4').delay(50).fadeIn(100)
  })

  $('.box-four').on('mouseleave', function () {
    $('#btn-4').delay(50).fadeOut(100)
  })

  $('.box-five').on('mouseenter', function () {
    $('#btn-5').delay(50).fadeIn(100)
  })

  $('.box-five').on('mouseleave', function () {
    $('#btn-5').delay(50).fadeOut(100)
  })

  $('.box-six').on('mouseenter', function () {
    $('#btn-6').delay(50).fadeIn(100)
  })

  $('.box-six').on('mouseleave', function () {
    $('#btn-6').delay(50).fadeOut(100)
  })
})
