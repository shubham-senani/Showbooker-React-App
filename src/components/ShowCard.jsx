import { Link } from "react-router-dom";

const ShowCard = ({ item }) => {
  return (
    item.show.image && (
      <div className="card m-4 align-items-center" style={{ width: 300 }}>
        <img
          src={item.show.image.original}
          style={{ width: 300, height: 370 }}
          className="card-img-top"
          alt="..."
        />
        <div
          className="card-body d-flex justify-content-between bottom-rounded"
          style={{ width: 300 }}
        >
          <h5 className="card-title">{item.show.name} ({item.show.premiered.substring(0, 4)})</h5>
          <Link to={`/detail/${item.show.id}`} className="btn btn-dark btn-sm">
            More Detail
          </Link>
        </div>
      </div>
    )
  );
};

export default ShowCard;