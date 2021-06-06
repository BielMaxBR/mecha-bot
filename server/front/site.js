window.onload = () => {
  const fragment = new URLSearchParams(window.location.search)
  const code = fragment.get('code')
  console.log(code)
  if (!code) {
    return document.getElementById('login').style.display = 'block';
  } else {
    fetch("/api/user", {
        method: 'GET',
        headers: {
          code: code
        }
      })
      .then(response => response.json())
      .then(res => {
        console.log(res)
      })

  }
}
console.log(window.location)