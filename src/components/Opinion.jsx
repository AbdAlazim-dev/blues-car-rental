function Opinion({ image, name, opinion, job }) {
  return (
    <div className="testimonials-flex__box">
      <img src={image} alt="someones picture" />
      <p>{opinion}</p>
      <h5>{name}</h5>
      <h6>{job}</h6>
    </div>
  );
}
export default Opinion;
