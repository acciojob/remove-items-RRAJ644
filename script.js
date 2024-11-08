document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form')
  const list = document.querySelector('#colorSelect')

  form.addEventListener('click', (e) => {
    e.preventDefault()

    const target = e.target.tagName

    if (target === 'INPUT') {
      const selectedValue = list.selectedIndex
      if (selectedValue !== -1) {
        list.remove(selectedValue)
      }
    }
  })
})
