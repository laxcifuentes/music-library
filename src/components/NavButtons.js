import { useNavigate } from "react-router-dom";

function NavButtons() {
    const navigate = useNavigate()

    return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            |
            <button onClick={() => navigate('/')}>Home</button>
        </div>
    )
}

export default NavButtons