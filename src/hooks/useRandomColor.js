export function useRandomColor() {
  const colorArray = [
    {background:'#cde4e3', color: '#499698'},
    {background:'#ffe0db', color: '#ff9d93'},
    {background:'#fdd8ed', color: '#c83f8d'},
    {background:'#ffebd4', color: '#f6c388'},
  ]
  
  let randomIndex = (Math.floor(Math.random()* colorArray.length))

  return colorArray[randomIndex]
}

