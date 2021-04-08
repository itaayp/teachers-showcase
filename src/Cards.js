const Card = ({name, bio, ies}) => {

    const img = 'https://images.unsplash.com/photo-1548611716-3000815a5803?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGFldTZyTC1qNmV3fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'

    return(
        <div className="card">
            <img src={`https://via.placeholder.com/150/f1f1f1/?text=${encodeURI(name)}`} alt='foto'></img>
            <h3>{name}</h3>
            <p>{bio}</p>
            <p className="ies">{ies}</p>
        </div>
    );
}

export default Card;