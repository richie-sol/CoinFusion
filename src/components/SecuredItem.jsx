
function SecuredItem( {src, text} ) {
    return (
      <div className="flex gap-4 items-center p-4 rounded-full bg-myGray">
        <img src={src} alt="" className="w-6" />
        <p className="max-w-[7rem]">{text}</p>
      </div>
    );
  }

export default SecuredItem;