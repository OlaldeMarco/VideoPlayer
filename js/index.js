        const $video = document.querySelector('#video')
        const $play = document.querySelector('#play')
        const $pause = document.querySelector('#pause')
        const $backward = document.querySelector('#backward')
        const $forward = document.querySelector('#forward')

        $play.addEventListener('click', handlePlay)
        $pause.addEventListener('click', handlePause)
        $backward.addEventListener('click', handlebackward)
        $forward.addEventListener('click', handleforward)


        function handlePlay(){
            $video.play()
            $play.hidden = true
            $pause.hidden = false
            console.log('Le diste click al boton de play')
        }
        function handlePause(){
            $video.pause()
            $pause.hidden = true
            $play.hidden = false
            console.log('Le diste click al boton de pause')
        }
        function handlebackward(){
            $video.currentTime = $video.currentTime - 10
            console.log('Atras 10 segundos', $video.currentTime)

        }
        function handleforward(){
            $video.currentTime = $video.currentTime + 10
            console.log('Adelante 10 segundos', $video.currentTime)
        }

        const $progress = document.querySelector('#progress')
        
        $video.addEventListener('loadedmetadata', handleLoaded)
        $video.addEventListener('timeupdate', handleTimeUpdate)

        function handleLoaded(){
           $progress.max = $video.duration
            console.log('ha cargado mi video', $video.duration)
        }
        function handleTimeUpdate(){
            $progress.value = $video.currentTime
            console.log('funcoiona',$video.currentTime)
        }

        $progress.addEventListener('input', handleInput)

        function handleInput(){
            $video.currentTime = $progress.value
            console.log($progress.value)
        }