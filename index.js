document.addEventListener("DOMContentLoaded", () => {
  /***** Deliverable 1 *****/
  const header = document.querySelector("#header")
  console.log("Here's your header:", header)


  /***** Deliverable 2 *****/
  header.style.color = 'red'

  /***** Deliverable 3 *****/
  console.log("PLAYERS array looks like this:", PLAYERS)
  const playerContainer = document.querySelector('.player-container')
  for(let player of PLAYERS) {
    // console.log(player)

    let newDiv = playerContainer.appendChild(document.createElement('div'))
    newDiv.className = 'player'
    newDiv.setAttribute('data-number', player.number)

    // newDiv.appendChild(document.createElement('h3')).innerHTML = `${player.name} (<em>${player.nickname}</em>)`
    // let newImg = newDiv.appendChild(document.createElement('img'))
    // newImg.src = player.photo
    // newImg.alt = player.name

    newDiv.innerHTML = `<h3>${player.name} (<em>${player.nickname}</em>)</h3><img src="${player.photo}" alt="${player.name}">`
  }

  /***** Deliverable 4 *****/
  const raheem = document.querySelector("div[data-number='7']")
  // console.log(raheem)
  raheem.remove()
})