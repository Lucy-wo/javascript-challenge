var tableData = data;
tableData.forEach(function(a){
    var tr=d3.select('tbody').append('tr');
    var datetime=a.datetime;
    tr.append('td').text(datetime);

    var city=a.city;
    tr.append('td').text(city);

    var state=a.state;
    tr.append('td').text(state);

    var country=a.country;
    tr.append('td').text(country);

    var shape=a.shape;
    tr.append('td').text(shape);

    var durationMinutes=a.durationMinutes;
    tr.append('td').text(durationMinutes);

    var comments=a.comments;
    tr.append('td').text(comments);

});
//////////////////////////////////////////////

var input=d3.select('.form-control');
input.on('change',function(){
    var inputValue=d3.event.target.value;
    console.log(inputValue);
    var dataFiltered=tableData.filter(b=>b.datetime===inputValue);
    console.log(dataFiltered)
    
    d3.select('tbody').html('');
    dataFiltered.forEach(function(a){
        var tr=d3.select('tbody').append('tr');
        var datetime=a.datetime;
        tr.append('td').text(datetime);
        
        var city=a.city;
        tr.append('td').text(city);
        
        var state=a.state;
        tr.append('td').text(state);
        
        var country=a.country;
        tr.append('td').text(country);
        
        var shape=a.shape;
        tr.append('td').text(shape);
        
        var durationMinutes=a.durationMinutes;
        tr.append('td').text(durationMinutes);
        
        var comments=a.comments;
        tr.append('td').text(comments);
    
    })

})





