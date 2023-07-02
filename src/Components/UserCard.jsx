const UserCard = ({src,name,email}) => {
    return (
        <div className="card-container">
            <div className="card-image"><img src={src} alt="image" /></div>
            <div className="card-content">
            <div className="card-name">{name}</div>
            <div>{email}</div>
            <div className="card-button">Know More</div>
            </div>
        </div>
    );
}
 
export default UserCard;