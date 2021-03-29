const file = document.querySelector('#file')
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

document.querySelector('#upload').addEventListener('click', () => {
  file.click()
})

file.addEventListener('change', e => {
  const file = e.target.files[0]
  if (!file) return
  
  let img = new Image()
  img.src = URL.createObjectURL(file)

  img.onload = () => {
    ctx.translate(50, 50);
    // ctx.rotate(50 * Math.PI / 180)

    let width = img.width
    let height = img.height
    if (img.width > document.body.offsetWidth) {
      const scale = document.body.offsetWidth / img.width
      width = document.body.offsetWidth
      height = height * scale
    }
    canvas.width = width
    canvas.height = height
    ctx.drawImage(img, 0, 0, width, height)
    // ctx.rotate(-50 * Math.PI / 180)
    // ctx.restore()

    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.rotate(180 * Math.PI / 180);
    ctx.drawImage(img, -1 * width, -1 * height, width, height);
    ctx.restore();
  }
 
})


