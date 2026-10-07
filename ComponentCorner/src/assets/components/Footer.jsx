// In Footer.jsx, create a Footer component that displays store information and
//  contact details using props for customizable content. 
const Footer = ({
    storeName = 'ComponentCorner',
    address = '123 ABC Street, Atl City',
    phone = '(678) 123-4567',
    email = 'CompCorner@componentcorner.com'
}) => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-info">
                    <h3>{storeName}</h3>
                    <p>{address}</p>
                    <p>{phone}</p>
                    <p>{email}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;