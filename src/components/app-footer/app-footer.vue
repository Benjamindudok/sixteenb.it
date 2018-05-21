<template>
    <footer class="footer">
        <div class="footer__container container">
            <section class="footer__section">
                <h5 class="footer__title">About sixteenb.it</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut magna mattis, accumsan massa at, maximus arcu. Donec semper ligula nisl, eu laoreet dui hendrerit eu.</p>
                <p class="footer__copyright">made with &hearts; by <a href="http://www.benjamindudok.nl">Benjamin Dudok</a> & <a href="http://www.chantalvaniwaarden.nl">Chantal van Iwaarden</a></p>
            </section>

            <section class="footer__section">
                <h5 class="footer__title">Contact</h5>
                <ul class="footer__list">
                    <li class="footer__item">
                        <a href="mailto:benjaminwd@gmail.com" class="footer__link">Email</a>
                    </li>
                    <li class="footer__item">
                        <a href="http://www.twitter.com" class="footer__link">Twitter</a>
                    </li>
                    <li class="footer__item">
                        <a href="http://www.github.com" class="footer__link">Github</a>
                    </li>
                </ul>
            </section>


            <section class="footer__section">
                <h5 class="footer__title">Newsletter</h5>
                <p>Sign up for our newsletter to stay up-to-date on the biggest updates! We promise to not send it more then once a week!</p>

                <!-- Begin MailChimp Signup Form -->
                <div id="mc_embed_signup">
                    <form action="https://sixteenb.us18.list-manage.com/subscribe/post?u=57d81c2c52d7d16fc2d12f981&amp;id=df65fb68cb" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                        <div id="mc_embed_signup_scroll" class="form__group footer__newsletter">
                            <input type="email" value="" name="EMAIL" class="form__control footer__input" id="mce-EMAIL" required>
                            <label class="form__label footer__input" for="mce-EMAIL">Email address</label>
                            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_57d81c2c52d7d16fc2d12f981_df65fb68cb" tabindex="-1" value=""></div>
                            <input type="submit" value="Signup!" name="subscribe" id="mc-embedded-subscribe" class="button button--primary footer__signup">
                        </div>
                    </form>
                </div>

                <!--End mc_embed_signup-->
            </section>
        </div>
    </footer>
</template>

<script lang="ts" src="./app-footer.ts"></script>
<style lang="scss" src="./app-footer.scss"></style>
