function reporteStatus(){
    console.log("test");
    $.ajax({
        url:"http://129.151.105.111:8081/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaStatus(respuesta);
        }
    });
}

function pintarRespuestaStatus(respuesta){

    let myTable="<table>";
    myTable+="<tr>";
        myTable+="<td> <b>| COMPLETADAS </b> </td>";
        myTable+="<td> <b>| CANCELADAS |</b> </td>";
    myTable+="</tr>";

    myTable+="<tr>";
        myTable+="<td>| "+respuesta.completed+"</td>";
        myTable+="<td>| "+respuesta.cancelled+"</td>";
        myTable+="</tr>";
    myTable+="</table>";
    $("#resultado6").html(myTable);
}