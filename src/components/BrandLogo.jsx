import { Link } from 'react-router-dom';

const LOGO_SRC = '/fitcorexa-logo.png';

/**
 * FITCOREXAI full brand lockup — sized for navbar / footer slots.
 */
export default function BrandLogo({ asLink = true, className = '', imgClassName = '' }) {
  const image = (
    <img
      src={LOGO_SRC}
      alt="FITCOREXAI International Pvt Ltd"
      className={imgClassName}
      width={320}
      height={80}
      decoding="async"
    />
  );

  if (!asLink) {
    return <span className={className}>{image}</span>;
  }

  return (
    <Link to="/" className={className} aria-label="FCI Help Desk — Home">
      {image}
    </Link>
  );
}
