import style from "./SocialNetworks.module.scss";
import { useSocialNetworks } from "./useSocialNetworks";

function SocialNetworks(){
    const logic = useSocialNetworks();

    return(
        <div className={style.socialnetwork}>
            {logic.menus && logic.menus.map((menu)=>{
                return(
                    <a href={menu.url} target="_blank" className={style.socialnetwork___item}>
                        {menu.icon}
                    </a>
                )
            })}
        </div>
    )
}

export default SocialNetworks