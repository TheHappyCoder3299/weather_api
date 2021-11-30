

    //only docoument.getElementById()  works here for some reason
    //not document.querySelector() or document.getElementByClassName()
    const searchBoxElement=document.getElementById('searchBar');
    const searchBox=new google.maps.places.SearchBox(searchBoxElement);
    
    searchBox.addListener('places_changed', ()=>{
        const places=searchBox.getPlaces();
        console.log(places.length);
    });

    
    
