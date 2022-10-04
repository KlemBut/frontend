const Step = ({ item, number }) => {
  return (
    <div className="stepWrapper">
      <div className="stepImgWrapper">
        <img src={item.image} alt={item.alt} />
      </div>
      <div className="stepTextWrapper">
        <h2>Step {number + 1}</h2>
        <h3>{item.action}</h3>
        <p>{item.instructions}</p>
      </div>
    </div>
  );
};

export default Step;
