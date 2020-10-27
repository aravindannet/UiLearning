const container = document.querySelector('.container'); // only one
const seats = document.querySelectorAll('.row .seat:not(.occupied)'); // select multiple classes 
//and adds it to array kind of thing . Grabs only available seats and not the occupied 
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketprice = +movieSelect.value; //(+ will convert the value to number)

populateUI();
//updateSelectedCount();


//Populate Inital Load
function populateUI() {
    
    const selectedSeats  = JSON.parse(localStorage.getItem('selectedSeats'));
    console.log(selectedSeats);

    if(selectedSeats !== null && selectedSeats.length >0)
    {
        seats.forEach((seat,index) =>
        {
            if(selectedSeats.indexOf(index) >  -1)
            {
                seat.classList.add('selected');
            }
        });
    }

    //Set selected movie
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex') ;
    
    if(selectedMovieIndex !== null )
    {
        movieSelect.selectedIndex =selectedMovieIndex;
        ticketprice = +movieSelect.value
    }

    updateSelectedCount();

}

//Save selected movie and price
function setMovieData(index,price)
{
    localStorage.setItem('selectedMovieIndex',index);
    localStorage.setItem('selectedMoviePrice',price);
}


//Update selected count and store in local storage
function updateSelectedCount()
{
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    /*Storing the data
    COpy the selected seats into Arr
    Map thru arr ( map is same as for each , but it returns a value)
    return new arr idexes 
    Spread operator [...<value>]*/

    const seatIndex = [...selectedSeats].map((input)  => [...seats].indexOf(input));

    /*localStorage.setItem('name' , 'brad'); //Sample*/

    // Store seat index 
    localStorage.setItem('selectedSeats' , JSON.stringify(seatIndex));
    console.log(localStorage.getItem('selectedSeats'))

    //store selected dropdown
    const selectedSeatsCount  = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = ticketprice*selectedSeatsCount;
}



/* container.addEventListener('click' , function(e)
    {
    }); This is older function call 
    Seat
*/     

//Click Event
 container.addEventListener('click' , e =>
 {
    
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
    {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
 });



 // movie select
 movieSelect.addEventListener('change' , e =>
 {
    ticketprice = +e.target.value;
    setMovieData(+e.target.selectedIndex , ticketprice);
    updateSelectedCount();
 });



 
 

