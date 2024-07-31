import './Image.css';

const Image = ({ src, alt, centered = true, maxWidth, maxHeight, roundedCorners = false, cornerRadius, inline = false, ...rest }) => {

  const imageStyles = {
    maxWidth: maxWidth ? maxWidth : '100%',
    maxHeight: maxHeight ? maxHeight : '100%',
    borderRadius: roundedCorners ? (cornerRadius ? cornerRadius : '3%') : '0',
    ...rest
  };

  return (
    <div className={`${centered ? 'centered-image-container' : ''} ${inline ? 'inline-image-container' : ''}`}>
      <img src={src} alt={alt} style={imageStyles} />
    </div>
  );
};

export default Image;
