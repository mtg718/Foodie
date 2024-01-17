import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footer" style={{backgroundColor:'#333', color:"white",padding:"15px 0" , textAlign:"center"}}>
        <div className="container" style={{maxWidth:"1200px", margin:"0 auto"}}>
          <p style={{margin:"0"}}>&copy; 2023 Fooodie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer

