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
    @import 'base/mixins';
    @import 'base/typography';
    @import 'base/variables';
  
    .FooterContainer {
        @include highlightTags('footer', 2);
    
    }
    footer{
        display: flex;
        margin-inline: calc($indent * 3);
        @include doodleBorder(true);
    }
    .footer_links a img{
        height: 35px;
    }
</style>
<div class="FooterContainer">
    <footer>
        <div class="?????">
            <h2>Hit Him Up!</h2>
            <img src={proto} alt="Proto">
            <p>to know more of his adventures check out his social accounts. <span/></p>
        </div>
        
        
        <div class="footer_links">
            {#each socialLinks as link}
              <a href={link.href} target="_blank">
                <img src={link.src} alt={link.alt}>
              </a>
            {/each}
          </div>
          


        <div class="">
            <form method="POST" class="message_form" action="mailto:Valangelovalencia@gmail.com" enctype="text/plain" target="_blank">
                <h2>Contact Him</h2>
                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject">
                </div>
                <div class="form-group">
                    <label for="commentbox">Message</label>
                    <textarea class="form-control" id="commentbox" name="commentbox" placeholder="message here"></textarea>
                </div>
                <button type="submit" class="submit-button">Submit</button>
            </form>
        

        </div>
    </footer>
</div>