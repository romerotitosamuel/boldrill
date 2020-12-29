const Slider =() => {
    let im1 = {display: "none"}
    let im2 = {display: "block"}
    const changeImage = () => {
        im2 = {display: "none"}
        
    
    }
    return(
        <div>
            {/* Slideshow container */}
            <div className="slideshow-container">

                {/* Full-width images with number and caption text */}
                <div className="mySlides fade"> 
                    <img src="img/img1.jpg" style={im1}/>
                </div>

                <div className="mySlides fade">
                    <img src="img/img2.jpg" style={im2}/>
                </div>
            </div>
            <br/>
            <button type="button" onClick={changeImage()}>Cambia imagen</button>
            
        </div>
        
    )
}