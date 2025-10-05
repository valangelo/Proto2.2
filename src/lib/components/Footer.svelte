<script lang="ts">
    import proto from "$lib/assets/images/figure.svg";
    import imgfb from "$lib/assets/images/icons8-facebook-50.svg";
    import imglinked from "$lib/assets/images/icons8-linkedin-circled-50.svg";
    import imgGithub from "$lib/assets/images/logo-github.svg";
    import imgGmail from "$lib/assets/images/icons8-gmail-logo-50.svg";
    import imgYoutube from "$lib/assets/images/icons8-youtube-50.svg";
    import imgVero from "$lib/assets/images/veroHandDrawn.webp";

    const socialLinks = [
        { href: "#", src: imgfb, alt: "facebook" },
        {
            href: "https://www.linkedin.com/in/val-angelo-valencia/",
            src: imglinked,
            alt: "linkedin",
        },
        {
            href: "https://github.com/valangelo/",
            src: imgGithub,
            alt: "github",
        },
        {
            href: "mailto:valangelovalencia@gmail.com",
            src: imgGmail,
            alt: "email",
        },
        {
            href: "https://www.youtube.com/@nohuart9854",
            src: imgYoutube,
            alt: "youtube",
        },
        { href: "https://vero.co/nohuart", src: imgVero, alt: "vero" },
    ];
</script>

<div class="FooterContainer">
    <footer id="contact">
        <div class="footer-content">
            <div class="socialMessage">
                <h2>Hit Him Up!</h2>
                <img src={proto} alt="Proto" />
                <p>To know more of his adventures,</p>
                <p>check out his social accounts. <span /></p>
            </div>

            <div class="socialLinks">
                {#each socialLinks as link}
                    <a href={link.href} target="_blank">
                        <img src={link.src} alt={link.alt} />
                    </a>
                {/each}
            </div>

            <div class="contactHimForm">
                <form id="contactForm" class="message_form">
                    <h2>Contact Him</h2>
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input
                            type="text"
                            class="form-control"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                        />
                        <label for="commentbox">Message</label>
                        <textarea
                            class="form-control"
                            id="commentbox"
                            name="commentbox"
                            placeholder="message here"
                        ></textarea>
                        <button type="submit" class="submit-button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        
        <div class="copyright">
            <p>
                ©<span id="current-year">2025</span>
                All Rights Reserved by
                <a href="#home">Val Angelo Valencia</a>.
            </p>
        </div>
    </footer>
</div>

<style lang="scss">
    @include font-face("Mynerve", "Mynerve/Mynerve-Regular");
    @include font-face("Neucha", "Neucha/Neucha-Regular");

    footer {
        @include doodleElement(1, 1);
        filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.2));
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem 1rem;
    }

    .footer-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        gap: 3rem;
        
        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }
    }

    .socialMessage {
        flex: 0 1 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        min-width: 250px;
        
        h2 {
            font-family: "Mynerve";
            font-weight: $font-weight-bolder;
            font-size: clamp(1.5rem, 4vw, $font-size-xxl);
            margin-bottom: 1rem;
        }
        
        img {
            height: clamp(100px, 20vw, 160px);
            width: auto;
            animation: float 7s ease-in-out infinite;
            margin: 1rem 0;
        }
        
        p {
            font-family: "Neucha";
            font-weight: $font-weight-bolder;
            font-size: clamp($font-size-sm, 3vw, $font-size-md);
            margin: 0.5rem 0;
        }
    }
    
    .socialLinks {
        flex: 0 1 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        align-content: center;
        min-width: 200px;
        
        @media (max-width: 480px) {
            // grid-template-columns: repeat(2, 1fr);
            display: flex;
            gap: 1rem;
        }
        
        a {
            display: flex;
            justify-content: center;
            align-items: center;
            
            img {
                width: clamp(40px, 8vw, 60px);
                height: clamp(40px, 8vw, 60px);
                aspect-ratio: 1/1;
                object-fit: contain;
                transition: transform 0.3s ease;
                
                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    }

    .contactHimForm {
        @include doodleElement(1, 1);
        flex: 0 1 auto;
        min-width: 280px;
        max-width: 400px;
        
        h2 {
            padding: 1rem;
            font-family: "Mynerve";
            font-size: clamp(1.25rem, 3vw, $font-size-xl);
            font-weight: $font-weight-bolder;
            text-align: center;
        }
        
        .form-group {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            
            label {
                font-family: "Neucha";
                font-size: $font-size-md;
                text-align: left;
            }
            
            input,
            textarea {
                font-family: "Neucha";
                font-size: $font-size-md;
                @include doodleElement(1,2);
                width: 100%;
                box-sizing: border-box;
            }
            
            textarea {
                min-height: 100px;
                resize: vertical;
            }
        }
        
        .submit-button {
            font-family: "Neucha";
            font-size: larger;
            @include doodleElement(1, 2);
            width: 100%;
            margin-top: 1rem;
        }
    }

    .copyright {
        text-align: center;
        padding: 1rem;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        margin-top: 1rem;
        
        p {
            font-family: "Neucha";
            font-size: $font-size-sm;
        }
    }

    /* Responsive breakpoints */
    @media (max-width: 1024px) {
        .footer-content {
            gap: 2rem;
        }
        
        .socialLinks {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    
    @media (max-width: 480px) {
        footer {
            padding: 1.5rem 0.5rem;
            gap: 1.5rem;
        }
        
        .footer-content {
            gap: 1.5rem;
        }
        .socialLinks{
            outline: auto;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
        }  
        .socialMessage,
        .contactHimForm {
            min-width: auto;
            width: 100%;
            // max-width: 300px;
        }
    }
</style>