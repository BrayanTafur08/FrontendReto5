function reporteDate(){
    if(validarCamposReportes()){
        var fechaInicio = document.getElementById("Restart").value;
        var fechaCierre = document.getElementById("Redevolution").value;
        console.log(fechaInicio);
        console.log(fechaCierre);

        $.ajax({
            url:"http://129.151.105.111:8081/api/Reservation/report-dates/"+fechaInicio+"/"+fechaCierre,
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                pintarRespuestaDate(respuesta);
            }
        });
    }else{
        alert("Campos vacios");
    }
}
    function pintarRespuestaDate(respuesta){

        let myTable="<table>";
        myTable+="<tr>";
        myTable+="<td> <b>| NOMBRE </b> </td>";
        myTable+="<td> <b>| EMAIL CLIENTE DATE </b> </td>";
        myTable+="<td> <b>| START DATE </b> </td>";
        myTable+="<td> <b>| DEVOLUTION DATE </b> </td>";
        myTable+="<td> <b>| STATUS |</b> </td>";
        myTable+="</tr>";
        for(i=0;i<respuesta.length;i++){
            myTable+="<tr>";
            myTable+="<td>| "+respuesta[i].client.name+"</td>";
            myTable+="<td>| "+respuesta[i].client.email+"</td>";
            myTable+="<td>| "+respuesta[i].startDate+"</td>";
            myTable+="<td>| "+respuesta[i].devolutionDate+"</td>";
            myTable+="<td>| "+respuesta[i].status+"</td>";
            myTable+="</tr>";
        }
        myTable+="</table>";
        $("#resultado7").html(myTable);
    }

    function validarCamposReportes(){
        if($("#Restart").val() == "" | $("#Redevolution").val() == "" ){
            return false
        }else{
            return true
        }
        
    }