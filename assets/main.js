function activeMenu(){
    let btnActive = document.querySelector('.menu-nav ul')
    let bgGet = document.querySelector('.menu-burguer')
    btnActive.classList.toggle('active')
    bgGet.classList.toggle('toggle')
}

function activeCarrosell(){
    const imgBlock = ['img' , 'img2' , 'img3']
    let getImg = document.querySelector('.img-carrossell')
    let btnNext = document.querySelector('.btn-next')
    let btnAfter = document.querySelector('.btn-after')
    let imgCurrent = 0;
    btnNext.addEventListener('click' , e => {
        getImg.classList.toggle('effect_img')
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
        
        getImg.classList.toggle('effect_img')
        getImg.setAttribute('src' , `assets/img/${imgBlock[imgCurrent]}.jpg`)
        return
    })

    
}

activeCarrosell()