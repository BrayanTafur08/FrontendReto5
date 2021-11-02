function reporteClientes(){
    $.ajax({
        url:"http://129.151.105.111:8081/api/Reservation/report-clients",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaRClientes(respuesta);
        }
    });
}

function pintarRespuestaRClientes(respuesta){

    let myTable="<table>";
    myTable+="<tr>";
    myTable+="<td> <b>| TOTAL </b> </td>";
    myTable+="<td> <b>| NOMBRE CLIENTE DATE </b> </td>";
    myTable+="<td> <b>| CORREO </b> </td>";
    myTable+="<td> <b>| EDAD |</b> </td>";
    myTable+="</tr>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>| "+respuesta[i].total+"</td>";
        myTable+="<td>| "+respuesta[i].client.name+"</td>";
        myTable+="<td>| "+respuesta[i].client.email+"</td>";
        myTable+="<td>| "+respuesta[i].client.age+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado8").html(myTable);
}