import React from "react";

type FooterProps = {
    copyright?: string; // Optional copyright text
    links?: { label: string; href: string }[]; // Optional array of links
};

const Footer: React.FC<FooterProps> = ({
    copyright = "Copyright © 2024",
    links = [],
}) => {
    return (
        <footer className="footer p-4 ">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-left">
                        <h4>Company Name</h4>
                        <p>Brief company description or tagline.</p>
                    </div>
                    <div className="footer-right">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="footer-link"
                            >
                                {link.label}
                            </a>
                        ))}
                        <p className="footer-copyright">{copyright}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
