import './index.css';
function Profile_card({ name, job, image }) {
    return (
        <div className="profile-card">
            <div className="contents">
                <img src={image} alt="" />
                <h2>name:{name}</h2>
                <span style={{ marginBottom: "1.25rem",
                    color: "#0077cc"
                 }}>Role: {job}</span>
            </div>

        </div>

    );
};
export default Profile_card