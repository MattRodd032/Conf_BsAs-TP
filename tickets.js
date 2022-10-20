function selectPromo(){
    let cbxCategoria = document.getElementById('select-categoria')
    let categoria = cbxCategoria.value
    let cantidad = document.getElementById('cant-tickets').value
    let btn_resumen = document.getElementById('btn-resumen')
    let btn_borrar = document.getElementById('btn-borrar')


    let monto_final = 0
    let precio_ticket = 200

    if (categoria == 'Estudiante'){
        monto_final = (cantidad * precio_ticket) - ((cantidad * precio_ticket) * 0.8 )
        btn_resumen.addEventListener('click',() =>{
            document.getElementById('categoria-seleccionada').textContent = monto_final
        })
    }
    else if (categoria == 'Trainee'){
        monto_final = (cantidad * precio_ticket) - ((cantidad * precio_ticket) * 0.5)
        btn_resumen.addEventListener('click',() =>{
            document.getElementById('categoria-seleccionada').textContent = monto_final
        })
    }
    
    else if (categoria == 'Junior'){
        monto_final = (cantidad * precio_ticket) - ((cantidad * precio_ticket) * 0.15)
        btn_resumen.addEventListener('click',() =>{
            document.getElementById('categoria-seleccionada').textContent = monto_final
        })
    }
    /* btn_resumen.addEventListener('click',() =>{
        document.getElementById('categoria-seleccionada').textContent = monto_final
    }) */
   /*  btn_borrar.addEventListener('click',() =>{
        document.getElementById('categoria-seleccionada').textContent = '0';
        monto_final = 0
        cantidad = 0
    }) */
}

function reloadPage(){
    location.reload()
}



