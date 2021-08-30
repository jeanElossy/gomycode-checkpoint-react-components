import React from 'react';

const ProfilePhoto = () => {
  return (
    <div>
      <p>Votre photo de profile est:</p>
      <div>
        <img 
          src="/images/Willy.jpg" 
          alt="Une photo de profile" 
          className="img-responsive"
          width="200"
          height="50%"
        />
      </div>
      <div className="footer bg-dark position-absolute bottom-0 text-white p-3 fst-italic">
        <span>Merci à Gomycode IC pour la formation, que Dieu m'ouvre les portes de la reussite pendant et après cette formation. Amen</span> 
      </div>
    </div>
  );
};
export default ProfilePhoto;