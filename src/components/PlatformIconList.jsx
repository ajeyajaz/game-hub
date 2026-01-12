import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'

function PlatformIconList({ platforms }) {

    const iconMap = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid
    }

    return (
        <div className='flex gap-2 flex-wrap mb-2'>
            {platforms?.map(p => {
                const Icon = iconMap[p.slug];
                return Icon ? <Icon key={p.id} className='text-white w-4 h-4'/> : null;
            } )}
        </div>
    )
}

export default PlatformIconList