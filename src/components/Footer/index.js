import React from 'react';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from "react-icons/fa";
import {FooterContainer, FooterWrap, SocialMedia, SocialLogo, SocialIcons, SocialIconLink, SocialMediaWrap,
} from "./FooterElements.js";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                    <SocialLogo to="/">Pizza</SocialLogo>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noonpener noreferrer">
                            <FaFacebook />
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank" aria-label="Instagram" rel="noonpener noreferrer">
                            <FaInstagram />
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank" aria-label="youtube" rel="noonpener noreferrer">
                            <FaYoutube />
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank" aria-label="twitter" rel="noonpener noreferrer">
                            <FaTwitter />
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank" aria-label="linkerdin" rel="noonpener noreferrer">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
