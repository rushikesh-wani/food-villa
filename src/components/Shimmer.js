const Shimmer = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "6rem" }}></h2>
      <div className="resto-list">
        {Array(8)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmer-card">
              <div className="shimmer-img"></div>
              <div className="shimmer-title"> </div>
              <div className="shimmer-title"> </div>
              <div className="shimmer-title"> </div>
              <div className="shimmer-title"> </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
