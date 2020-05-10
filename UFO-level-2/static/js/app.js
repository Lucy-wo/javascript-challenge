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
//find input value
var button=d3.select('#filter-btn');
button.on('click',function(){
    var inputdate=d3.select('#date');
    var dateinput=inputdate.property('value');
    console.log(dateinput);

    var inputcity = d3.select('#city');
    var cityinput=inputcity.property('value');
    console.log(cityinput);

    var inputstate = d3.select('#state');
    var stateinput=inputstate.property('value');
    console.log(stateinput);

    var inputcountry = d3.select('#country')
    var countryinput=inputcountry.property('value');
    console.log(countryinput);

    var inputshape = d3.select('#shape')
    var shapeinput=inputshape.property('value');
    console.log(shapeinput);
// filter data
    var finalFiltered=tableData.filter(b=>{
        return (b.datetime===dateinput && b.city===cityinput && b.state===stateinput && b.country===countryinput && b.shape===shapeinput);
    })
    console.log(finalFiltered);

//append data to table
    d3.select('tbody').html('');
    finalFiltered.forEach(function(a){
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

   