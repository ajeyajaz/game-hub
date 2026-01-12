import noImage from '../assets/no-image-placeholder.webp'

export default function imageUrl(url) {

    if(!url) return noImage;

    const target = 'media/'
    const idx = url.indexOf(target) + target.length;
    return url.slice(0, idx) + 'crop/600/400/' + url.slice(idx);
}