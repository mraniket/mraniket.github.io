import React, { useEffect } from 'react';
import './Home.css';
import AOS from "aos";
import Grid from '@material-ui/core/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../images/image1.png';
import 'font-awesome/css/font-awesome.min.css';


export default function Home() {

  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    AOS.init({ duration: 1800 });
  }, []);


  return (
    
      <div class="container-fluid">



          <div class="row" >
            <div class="col-sm-4" id="intro" data-aos="fade-in">
              <div className="intro">
                 <p>Hello! :) I'm Aniket </p>
              </div>
              <div className="fa_icons">
                
                <a href="https://github.com" target="_blank" className="github">
                 <i class="fa fa-github"></i>
                </a>
                <a href="https://twitter.com/TheAniket_" target="_blank" className="twitter">
                 <i class="fa fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/aniket-shinde-4b72341b5/" target="_blank" className="linkedin">
                 <i class="fa fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/theaniket_007/" target="_blank" className="insta" >
                 <i class="fa fa-instagram"></i>
                </a>
              </div>
            </div>
            <div class="col-sm-8" id='imagealign' data-aos="fade-up">
              <img src={img1}   class="img1 float-end"></img>
            </div>  
          </div>

      {/* second row */}
          <div class="row design" >
          
            <div class="col-sm-4" id="intro" data-aos="fade-in">
              <div className="intro">
                 <p>Hello! :) I'm Aniket </p>
              </div>
              <div className="fa_icons">
                
                <a href="https://github.com" target="_blank" className="github">
                 <i class="fa fa-github"></i>
                </a>
                <a href="https://twitter.com/TheAniket_" target="_blank" className="twitter">
                 <i class="fa fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/aniket-shinde-4b72341b5/" target="_blank" className="linkedin">
                 <i class="fa fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/theaniket_007/" target="_blank" className="insta" >
                 <i class="fa fa-instagram"></i>
                </a>
              </div>
            </div>
            <div class="col-sm-8" id='imagealign' data-aos="fade-up">
              {/* <img src={img1}   class="img1 float-end"></img> */}
            </div>  
          </div>

          {/* third row */}
          <div class="row" >
            <div class="col-sm-4" id="intro" data-aos="fade-in">
              <div className="intro">
                 <p>Hello! :) I'm Aniket </p>
              </div>
              <div className="fa_icons">
                
                <a href="https://github.com" target="_blank" className="github">
                 <i class="fa fa-github"></i>
                </a>
                <a href="https://twitter.com/TheAniket_" target="_blank" className="twitter">
                 <i class="fa fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/aniket-shinde-4b72341b5/" target="_blank" className="linkedin">
                 <i class="fa fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/theaniket_007/" target="_blank" className="insta" >
                 <i class="fa fa-instagram"></i>
                </a>
              </div>
            </div>
            <div class="col-sm-8" id='imagealign' data-aos="fade-up">
              <img src={img1}   class="img1 float-end"></img>
            </div>  
          </div>


          
          
    

      </div>
    
    
  );
}
