import {
  FC
} from "react"

import "./Carousel.sass"

const Carousel : FC =() => {

  return (
    <>
      <div 
        id="carouselExampleIndicators" 
        className="carousel slide" 
        data-ride="carousel">
        <div 
          className="carousel-inner">
          {
            [
              { src : "https://avatars.mds.yandex.net/i?id=f4db14566b4beae225749b1c12de185370d3d0bd-7546005-images-thumbs&n=13", content : ["Vans", "for all walks of life."] },
              { src : "https://avatars.mds.yandex.net/i?id=6b6675595f38dbdf671d26234bfbaa1b-3696919-images-thumbs&n=13", content : ["Sneakers", "see how good they feel."] },
              { src : "https://avatars.mds.yandex.net/i?id=aa2273c2610b7dcd823883f036595cc950602771-4265706-images-thumbs&n=13", content : ["Adidas", "for all walks of life."] },
              { src : "https://avatars.mds.yandex.net/i?id=13c8a6fa881c13b4f115c57c2744694d2a60be6c-8281157-images-thumbs&n=13", content : ["Nike", "see how good they feel."] },
            ].map(({ src, content }, index) =>
              <div 
                className={`carousel-item ${!index ? "active" : undefined}`}>
                <img 
                  src={src} />
                <div 
                  className="carousel-caption">
                  <h5
                    className="caption-title">
                    {content[0]}
                  </h5>
                  <p
                    className="caption-body">
                    <h5
                      className="small-title">
                      {content[1]}
                    </h5>
                    <div 
                      className="socNets">
                      {
                        [
                          { src : ["https://img.icons8.com/material-sharp/256/facebook-f.png"], alt : "facebook" },
                          { src : ["https://img.icons8.com/windows/1x/twitter.png"], alt : "twitter" },
                          { src : ["https://img.icons8.com/sf-regular/1x/instagram-new.png"], alt : "instagram" },
                          { src : ["https://img.icons8.com/windows/1x/linkedin-2.png"], alt : "in" }
                        ].map(({ src, alt }) => 
                          <a
                            className="socOf"
                            href="/">
                            <img 
                              alt={alt}
                              src={src[0]} />
                          </a>
                        )
                      }
                    </div>
                  </p>
                </div>
              </div>
            )
          }
        </div>
        <ol 
          className="carousel-indicators">
          {
            [true, false, false, false].map(
              (activeOn, index) => 
                <li 
                  data-target="#carouselExampleIndicators" 
                  data-slide-to={index} 
                  className={activeOn ? "active" : undefined}></li>
            )
          }
        </ol>
      </div>
    </>
  )
}

export default Carousel