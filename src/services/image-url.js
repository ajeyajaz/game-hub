
export default function imageUrl(url) {
    const target = 'media/'
    const idx = url.indexOf(target) + target.length;
    return url.slice(0, idx) + 'crop/600/400/' + url.slice(idx);
}