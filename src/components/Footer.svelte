<script lang="ts">
    import proto from '../assets/images/figure.svg';
    import imgfb from '../assets/images/icons8-facebook-50.svg';
    import imglinked from '../assets/images/icons8-linkedin-circled-50.svg';
    import imgGithub from '../assets/images/logo-github.svg';
    import imgGmail from '../assets/images/icons8-gmail-logo-50.svg';
    import imgYoutube from '../assets/images/icons8-youtube-50.svg';
    import imgVero from '../assets/images/veroHandDrawn.webp';
    const socialLinks = [
      { href: '#',
            src: imgfb,
            alt: 'facebook' },
      { href: 'https://www.linkedin.com/in/val-angelo-valencia/',
            src: imglinked,
            alt: 'linkedin' },
      { href: 'https://github.com/valangelo/',
            src: imgGithub,
            alt: 'github' },
      { href: 'mailto:valangelovalencia@gmail.com',
            src: imgGmail,
            alt: 'email' },
      { href: '#',
            src: imgYoutube,
            alt: 'youtube' },
      { href: '#',
            src: imgVero,
            alt: 'vero' }
    ];
  </script>
  
<style lang="scss">
    
@include font-face('Mynerve', 'Mynerve/Mynerve-Regular');
@include font-face('Neucha', 'Neucha/Neucha-Regular');



.FooterContainer {
    @include highlightTags('footer', 2);
}

footer {
    @include doodleBorder(true);
    & {
    display: grid;
    text-align: center;
    grid-template-columns: auto auto auto;
    justify-content: center;
    gap: 20px; // Adjust the gap as needed
    margin-inline: calc($indent * 3);
    }
}

.socialMessage {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        font-family: "Mynerve";
        font-weight: $font-weight-bolder;
        font-size: $font-size-xxl;
    }
    img{
        height: 10rem;
    }
    p{
        font-family: "Neucha";
        // font-weight: $font-weight-bolder;
        font-size: $font-size-md;
    }
}

.socialLinks {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap:2rem;
    align-self: center;
    align-content: center;
    a img {
        height: 60px;
    }
}

.contactHimForm {
    display: flex;
    
    align-items: center;
    // background-color: red;
    
    h2{
        padding: 1rem;
        font-family: "Mynerve";
        font-size: $font-size-xl;
        font-weight: $font-weight-bolder;
    }
    .form-group{
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 1rem;
        // margin: 1rem;
        label{
            font-family: "Neucha";
            font-size: $font-size-md
        }
        input,textarea{
            @include doodleButton(false);
            &{
                font-family: "Neucha";
                font-size: $font-size-md
            }
        }
    }
    .submit-button{
        @include doodleButton(false);
        &{
            grid-column: 1/-1;
            font-family: "Neucha";
        }
    }
}

.copyright{
    grid-column: 1/-1;
    text-align: center;
    padding: 1rem;
    p {
        font-family: "Neucha";
        font-size: $font-size-sm;
    }
}
</style>
<div class="FooterContainer">
    <footer id="contact">
        <div class="socialMessage">
            <h2>Hit Him Up!</h2>
            <img src={proto} alt="Proto">
            <p>To know more of his adventures,</p>
            <p>check out his social accounts. <span/></p>
        </div>
        
        <div class="socialLinks">
            {#each socialLinks as link}
            <a href={link.href} target="_blank">
                <img src={link.src} alt={link.alt}>
            </a>
            {/each}
        </div>

        <div class="contactHimForm">
            <form id="contactForm" class="message_form">
                <h2>Contact Him</h2>
                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject">
                    <label for="commentbox">Message</label>
                    <textarea class="form-control" id="commentbox" name="commentbox" placeholder="message here"></textarea>
                    <button type="submit" class="submit-button">Submit</button>
                </div>
            </form>
            
        </div>
        <div class="copyright">
            <p>©<span id="current-year">2024</span>
                All Rights Reserved by
                <a href="#home">Val Angelo Valencia</a>.</p>
        </div>
    </footer>
</div>