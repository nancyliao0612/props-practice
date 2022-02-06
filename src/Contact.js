export default function Contact({ img, name, email, phone }) {
  return (
    <div className="contact-card">
      <img src={img} alt="cat" />
      <h3>{name}</h3>
      <div className="info-group">
        <img src={require("./images/phone-icon.png")} />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src={require("./images/mail-icon.png")} />
        <p>{email}</p>
      </div>
    </div>
  );
}
