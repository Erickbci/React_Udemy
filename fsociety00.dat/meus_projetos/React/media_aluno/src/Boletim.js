  
        var aluno
        var p1 
        var p2 
        var trab 
        var bonus 
        var total 
        var media 
        var resposta = true

        do{
            aluno = window.prompt('Nome do aluno')
            p1 = parseFloat(window.prompt('Digite aqui a primeira nota:'))
            p2 = parseFloat(window.prompt('Digite aqui a segunda nota:'))
            trab = parseFloat(window.prompt('Digite aqui a nota do trabalho:'))
            bonus = parseFloat(window.prompt('Digite aqui a nota bonus'))

            total = p1 + p2 + trab + bonus
            media = total/3

            document.write('<p>====================================================')
            document.write('<p><B<NOTAS:</B>'+aluno)
            document.write('<p>Prova 1:'+ p1+' pontos')
            document.write('<p>Prova 2:'+ p2+' pontos')
            document.write('<p>Trabalho:'+ trab+' pontos')
            document.write('<p>Bonus:' +bonus)+' pontos'
            document.write('<p>Média do '+aluno+' foi:'+media)+' pontos'


            
                resposta = window.confirm('Deseja continuar?')        
        }
        while(resposta == true)
        
    

