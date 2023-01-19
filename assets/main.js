function activeMenu(){
    let btnActive = document.querySelector('.menu-nav ul')
    btnActive.classList.toggle('active')
}

function activeCarrosell(){
    const imgBlock = ['img' , 'img2' , 'img3']
    let getImg = document.querySelector('.img-carrossell')
    let btnNext = document.querySelector('.btn-next')
    let btnAfter = document.querySelector('.btn-after')
    let imgCurrent = 0;

    console.log(getImg)
    
    btnNext.addEventListener('click' , e => {
        if(imgCurrent <= imgBlock.length -2 ){
            imgCurrent ++
        }else {
            imgCurrent = 0
        }

        getImg.setAttribute('src' , `assets/img/${imgBlock[imgCurrent]}.jpg`)
        
        return

    })
    
    
    btnAfter.addEventListener('click', e => {
        if(imgCurrent === 0 ){
            imgCurrent = 2
        }else {
            imgCurrent --;
        }
        
        getImg.setAttribute('src' , `assets/img/${imgBlock[imgCurrent]}.jpg`)

        return
    })

    
}

activeCarrosell()