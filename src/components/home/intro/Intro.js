import "./Intro.css";
import Image from "../../shared/Image";
import Card from "../../shared/Card";
import CardContainer from "../../shared/CardContainer";
import SectionDivider from "../../shared/SectionDivider";
import H1 from "../../shared/H1";
import MenuGrid from "./MenuGrid";
import TextContainer from "../../shared/TextContainer";

import news_banner_abusimbel from "../../../images/home/intro/news_banner_abusimbel.webp";
import app_store from "../../../images/home/intro/app_store.webp";
import google_play from "../../../images/home/intro/google_play.webp";
import china_background_news from "../../../images/home/intro/china_background_news.webp";
import news_egypt_banner from "../../../images/home/intro/news_egypt_banner.webp";
import news_china_banner from "../../../images/home/intro/news_china_banner.webp";

const Intro = () => {
    return <>
    {/*<Image src="https://i.ibb.co/26Mgb9Y/hoh-logo-big.png" alt="" roundedCorners={true} maxHeight={"180px"} marginTop={"10px"} /><br />*/}
    <TextContainer 
        centered={true} 
        headerTexts={['Welcome to the Heroes of History Atlas, the home of all things Heroes of History!']}
        texts={[``]}
        style={{ marginBottom: '20px', marginTop: '5px' }}
        textRectangleHeight={'150px'}
        imageUrls={['https://i.ibb.co/cF5FpyK/channels4-banner.jpg']}> {/* second image: https://i.ibb.co/wwcPmgV/channels4-banner.jpg*/ }
    </TextContainer>
    <SectionDivider />
    <H1 center={true} style={{marginBottom: '0px'}} >Frequently Used Menu</H1>
    <MenuGrid />
    {/*<SectionDivider />
    <TextContainer
        centered={true}
        headerTexts={['The Grand Celebration has started!']}
        texts={[``]}
        style={{ marginBottom: '20px', marginTop: '5px' }}
        textRectangleHeight={'150px'}
        imageUrls={[news_egypt_banner]}
        links={['https://hoh-atlas.com/#/allied-cultures/?id=egypt_cheops_pyramid']}
        pulsate={true}>
    </TextContainer>*/}
    <SectionDivider />
    <TextContainer
        centered={true}
        headerTexts={['The Festival of Warriors has started!']}
        texts={[``]}
        style={{ marginBottom: '20px', marginTop: '5px' }}
        textRectangleHeight={'150px'}
        imageUrls={[news_china_banner]}
        links={['https://hoh-atlas.com/#/allied-cultures/?id=china_terracotta_army']}
        pulsate={true}>
    </TextContainer>
    <SectionDivider />
    <CardContainer 
        card1={
            <Card title={"<b>Where to play?</b>"} centered backgroundImage="https://i.ibb.co/SR8g7WX/a467bccb3caf3e38be6a.jpg" blurred={true} footer="<b>Or play in browser: <a href='https://un-play.heroesofhistorygame.com/' class='text-link-skin'>Heroes of History</a></b>">
                <div className="store-links">
                    <a href="https://apps.apple.com/us/app/heroes-of-history-epic-empire/id6468993261" target="_blank">
                    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" /> {/*<img src={app_store} alt="App Store" /> */}
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.innogames.heroesofhistory&gl=US" target="_blank" >
                    <img src="https://i.ibb.co/sV03Rwp/Google-Play.png" style={{height: '50px', width: '167px'}} alt="Google Play" /> {/* <img src={google_play} alt="Google Play" /> */}
                    </a>
                </div>
            </Card>
        }
        card2={
            <Card title={"<b>Social Media</b>"} centered backgroundImage="https://i.ibb.co/SR8g7WX/a467bccb3caf3e38be6a.jpg" blurred={true} footer="<b>&nbsp;</b>">
                <div className="">
                    <a href="https://www.facebook.com/playheroesofhistory/" target="_blank">
                    <img src="https://i.ibb.co/SQGH7dz/50px-Facebook.png" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/playheroesofhistory" target="_blank" >
                    <img src="https://i.ibb.co/Zh39WLN/50px-Instagram.png" alt="Instagram" />
                    </a>
                    <a href="https://www.youtube.com/@playheroesofhistory" target="_blank" >
                    <img src="https://i.ibb.co/wcYSvkw/50px-Youtube.png" alt="Youtube" />
                    </a>
                    <a href="" target="_blank" >
                    <img src="https://i.ibb.co/3SYpX25/50px-Discord.webp" alt="Discord" />
                    </a>
                </div>
            </Card>
        }
        style={{ marginTop: '20px', marginBottom: '20px' }}>
    </CardContainer>
    <SectionDivider />
    <TextContainer 
        centered={true} 
        headerTexts={['About the game']}
        texts={[`The Heroes of History are ready for your command!
                Forge your city through time - from the stone age to the future in the strategic city-building game. Start a legendary journey through history and ancient cultures, 
                as you collect powerful heroes from each era. Engage in thrilling PvE combat or challenge your friends in PvP. It's time to rise your empire and become the world's greatest leader in history.`]}
        style={{ marginBottom: '20px' }}
        textRectangleHeight={'80px'}
        autoSlideSeconds={3}>
    </TextContainer>
    </>
}

export default Intro;
