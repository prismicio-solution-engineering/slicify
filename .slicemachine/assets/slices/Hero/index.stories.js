import MyComponent from '../../../../slices/Hero';

export default {
  title: 'slices/Hero'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"cta_label":"better","cta_link":{"link_type":"Web","url":"http://twitter.com"},"cta_type":"Text"}],"primary":{"title":[{"type":"heading1","text":"Failed","spans":[]}],"description":[{"type":"paragraph","text":"Dolore Lorem amet excepteur eiusmod adipisicing qui nisi do cupidatat id. Adipisicing aliqua est ut amet esse minim cillum laboris laboris incididunt velit.","spans":[]}]},"id":"_Default","slice_type":"hero"}} />
_Default.storyName = ''

export const _TitleOnly = () => <MyComponent slice={{"variation":"titleOnly","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Neighbor","spans":[]}]},"id":"_TitleOnly","slice_type":"hero"}} />
_TitleOnly.storyName = ''

export const _WithBackground = () => <MyComponent slice={{"variation":"withBackground","version":"sktwi1xtmkfgx8626","items":[{"cta_label":"tower","cta_link":{"link_type":"Web","url":"https://prismic.io"},"cta_type":"Primary"}],"primary":{"title":[{"type":"heading1","text":"Needs","spans":[]}],"description":[{"type":"paragraph","text":"Consequat irure officia dolore nostrud ad labore adipisicing fugiat dolore minim. Occaecat ipsum dolor occaecat cupidatat et mollit aute.","spans":[]}]},"id":"_WithBackground","slice_type":"hero"}} />
_WithBackground.storyName = ''

export const _WithVideoBackground = () => <MyComponent slice={{"variation":"withVideoBackground","version":"sktwi1xtmkfgx8626","items":[{"cta_label":"driving","cta_link":{"link_type":"Web","url":"http://google.com"},"cta_type":"Text"}],"primary":{"title":[{"type":"heading1","text":"Depend","spans":[]}],"description":[{"type":"paragraph","text":"Minim est cillum sit enim consequat esse ipsum incididunt dolor est in voluptate excepteur.","spans":[]}],"background_video":{"dimensions":{"width":2245,"height":1636},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?rect=0%2C608%2C4480%2C3265&w=2245&h=1636"}},"id":"_WithVideoBackground","slice_type":"hero"}} />
_WithVideoBackground.storyName = ''
