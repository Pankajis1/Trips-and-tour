import Title from "./Title";
import { pours } from "../components/Data";

const Tours =()=>{
  return(
    <>
    <section className="section" id="tours">
      <Title title="Featured" subtitle= "tours"/>

      <div className="section-center featured-center">

        {pours.map((tour)=>{
        const{id, pics, date, tittle,details, duration, location, cost}=tour
        return(
          <article className="tour-card" key={id}>
            
          <div className="tour-img-container">
            <img src={pics} className="tour-img" alt={tittle}/>
            <span className="num">#{id}</span>
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{tittle}</h4>
            </div>
            <p>
             {details}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {location}
              </p>
              <p>{duration} days</p>
              <p>from ${cost}</p>
            </div>
          </div>
        </article>

        )},
        )}
        
      </div>
    </section>
    </>
  )
}

export default Tours;