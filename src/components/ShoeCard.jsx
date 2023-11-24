const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) changeBigShoeImg(imgURL.bigShoe);
  };
  return (
    <div
      className={`${
        bigShoeImg === imgURL ? 'border-coral-red' : 'border-transparent'
      } border-2 rounded-xl cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    ></div>
  );
};

export default ShoeCard;
