import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Service = ({ service }) => {
  const { title, img, price, service_id } = service;

  return (
    <div className="card card-compact border-gray-200 border-2">
      <figure className="rounded-lg">
        <img src={img} alt="service" className="p-4 h-72" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{title}</h2>
        <p className="text-red-500 font-bold">Price: {price}$</p>
        <div className="card-actions justify-end cursor-pointer text-red-500">
          <ArrowForwardIcon></ArrowForwardIcon>
        </div>
      </div>
    </div>
  );
};

export default Service;
